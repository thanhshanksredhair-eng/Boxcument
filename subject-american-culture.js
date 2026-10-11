window.americanCultureSubject = {
    id: 'american-culture',
    name: 'Văn Hóa Mỹ (American Culture)',
    icon: 'fa-flag-usa',
    description: 'Tìm hiểu sâu về văn hóa, lịch sử và con người Hoa Kỳ qua các bài thi trắc nghiệm.',
    lessons: [
        {
            id: 'us-lesson-1',
            title: 'Bài 1: Khái quát Văn hóa Mỹ',
            description: 'Bộ câu hỏi trắc nghiệm kiểm tra kiến thức nền tảng về Hoa Kỳ.',
            dialogues: [
                {
                    id: 'us-d1',
                    title: 'Bộ 60 Câu Trắc Nghiệm',
                    // Bỏ trống từ vựng (Không dùng Flashcard, Tập viết)
                    vocabularies: [], 
                    grammar: {
                        title: 'Trắc nghiệm Kiến thức',
                        // Bỏ trống lý thuyết ngữ pháp
                        points: [],
                        // TẬP TRUNG TẠI ĐÂY: Dán 60 câu trắc nghiệm của bạn vào mảng exercises này
                        exercises: [
                            { 
                                q: 'Thủ đô của Hợp chủng quốc Hoa Kỳ là thành phố nào?', 
                                pinyin: '', // Bỏ trống pinyin vì là tiếng Việt
                                options: [
                                    { hanzi: 'New York', pinyin: '' },
                                    { hanzi: 'Washington, D.C.', pinyin: '' },
                                    { hanzi: 'Los Angeles', pinyin: '' }
                                ], 
                                answer: 'Washington, D.C.', 
                                exp: 'Washington, D.C. là thủ đô và là đặc khu hành chính của Hoa Kỳ.' 
                            },
                            { 
                                q: 'Quốc kỳ của nước Mỹ hiện tại có bao nhiêu ngôi sao?', 
                                pinyin: '', 
                                options: [
                                    { hanzi: '50', pinyin: '' },
                                    { hanzi: '51', pinyin: '' },
                                    { hanzi: '52', pinyin: '' }
                                ], 
                                answer: '50', 
                                exp: '50 ngôi sao trắng trên nền xanh đại diện cho 50 tiểu bang của Hoa Kỳ.' 
                            }
                            // Dán tiếp 58 câu còn lại của bạn vào đây...
                        ]
                    },
                    sentences: [] // Bỏ trống ghép câu
                }
            ]
        }
    ]
};
