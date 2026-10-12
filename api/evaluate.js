export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed. Chỉ chấp nhận POST request.' });
    }

    try {
        const { imageBase64, targetText } = req.body;

        if (!imageBase64 || !targetText) {
            return res.status(400).json({ error: 'Thiếu dữ liệu: imageBase64 hoặc targetText.' });
        }

        // Lấy danh sách 15 key từ Vercel
        const apiKeys = [
            process.env.GEMINI_KEY_1,
            process.env.GEMINI_KEY_2,
            process.env.GEMINI_KEY_3,
            process.env.GEMINI_KEY_4,
            process.env.GEMINI_KEY_5,
            process.env.GEMINI_KEY_6,
            process.env.GEMINI_KEY_7,
            process.env.GEMINI_KEY_8,
            process.env.GEMINI_KEY_9,
            process.env.GEMINI_KEY_10,
            process.env.GEMINI_KEY_11,
            process.env.GEMINI_KEY_12,
            process.env.GEMINI_KEY_13,
            process.env.GEMINI_KEY_14,
            process.env.GEMINI_KEY_15
        ].filter(Boolean); // Lọc bỏ những key bị rỗng (nếu bạn chưa add đủ lên Vercel)

        // Kiểm tra xem có key nào hoạt động không
        if (apiKeys.length === 0) {
            return res.status(500).json({ error: 'Máy chủ chưa được cấu hình bất kỳ API KEY nào.' });
        }

        // Chọn ngẫu nhiên 1 chìa khóa trong danh sách
        const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

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
                    temperature: 0.2, 
                    response_mime_type: "application/json" 
                }
            })
        });

        if (!geminiRes.ok) {
            const errorData = await geminiRes.json();
            console.error("Lỗi từ Google API (Key đang dùng có thể hết lượt):", errorData);
            // Trả thẳng lỗi thực tế (bao gồm 429) về frontend
            return res.status(geminiRes.status).json(errorData);
        }

        const data = await geminiRes.json();
        const textResult = data.candidates[0].content.parts[0].text;
        const parsedResult = JSON.parse(textResult);

        return res.status(200).json({
            score: parsedResult.score,
            feedback: parsedResult.feedback
        });

    } catch (error) {
        console.error("Lỗi Serverless:", error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi trên máy chủ.', details: error.message });
    }
}
