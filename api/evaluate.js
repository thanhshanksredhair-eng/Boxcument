export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb', // Giới hạn kích thước ảnh gửi lên (tránh lỗi Payload Too Large)
        },
    },
};

export default async function handler(req, res) {
    // 1. Chỉ cho phép phương thức POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed. Chỉ chấp nhận POST request.' });
    }

    try {
        const { imageBase64, targetText } = req.body;

        // 2. Kiểm tra xem người dùng đã gửi đủ dữ liệu chưa
        if (!imageBase64 || !targetText) {
            return res.status(400).json({ error: 'Thiếu dữ liệu: imageBase64 hoặc targetText.' });
        }

        // 3. Lấy API Key từ biến môi trường
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Máy chủ chưa được cấu hình GEMINI_API_KEY.' });
        }

        // Tách bỏ phần "data:image/jpeg;base64," nếu có
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

        // 4. Prompt rút gọn, đóng vai "Con mèo"
        const prompt = `Ngươi là "Con mèo nhà tôi" - một giám thị chấm thi tiếng Trung cực kỳ khó tính, kiêu ngạo nhưng rất giỏi.
Nhiệm vụ: Chấm điểm bức ảnh viết tay Hán tự.
Yêu cầu đề bài viết: "${targetText}"

Phân tích:
- Nét chữ có đúng chuẩn, đủ nét, đúng thứ tự không?
- Có bị sai chính tả hay thiếu/thừa nét không?
- Bố cục chữ có cân đối không?

Trả về CHỈ một chuỗi JSON hợp lệ với định dạng sau (không có markdown \`\`\`json):
{
  "score": <điểm từ 0 đến 100>,
  "feedback": "<nhận xét ngắn gọn, xưng hô là 'mèo' và 'con sen/bạn', giọng điệu mặn mòi, khó tính>"
}`;

        // 5. Gọi Google Gemini API - SỬ DỤNG gemini-3.8-flash
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: prompt },
                        {
                            inline_data: {
                                mime_type: "image/jpeg",
                                data: base64Data
                            }
                        }
                    ]
                }],
                generationConfig: {
                    temperature: 0.2, // Giảm độ sáng tạo để AI tập trung chấm điểm chính xác
                    response_mime_type: "application/json" // Ép AI trả về JSON
                }
            })
        });

        // 6. Xử lý lỗi từ Google API
        if (!geminiRes.ok) {
            const errorData = await geminiRes.json();
            console.error("Lỗi từ Google API:", errorData);
            
            if (geminiRes.status === 404) {
                 return res.status(404).json({ error: 'Mô hình gemini-3.8-flash hiện không khả dụng. Vui lòng kiểm tra lại quyền truy cập của API Key.' });
            }
            
            // Các lỗi khác (bao gồm 429) sẽ trả về lỗi gốc của Google
            return res.status(geminiRes.status).json({ 
                error: 'Lỗi từ Google API', 
                details: errorData 
            });
        }

        // 7. Xử lý kết quả trả về
        const data = await geminiRes.json();
        const textResult = data.candidates[0].content.parts[0].text;
        
        // Parse JSON từ AI
        const parsedResult = JSON.parse(textResult);

        // 8. Trả kết quả về frontend
        return res.status(200).json({
            score: parsedResult.score,
            feedback: parsedResult.feedback
        });

    } catch (error) {
        console.error("Lỗi Serverless:", error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi trên máy chủ.', details: error.message });
    }
}
