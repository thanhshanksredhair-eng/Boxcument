const appData = {
    subjects: [
        {
            id: 'chinese',
            name: 'Tiếng Trung Quốc',
            icon: 'fa-language',
            description: 'Chinh phục tiếng Trung giao tiếp từ cơ bản đến nâng cao.',
            lessons: [
                {
                    id: 'cn-lesson-1',
                    title: 'Bài 1: 你好 (Xin chào)',
                    description: 'Học các từ vựng chào hỏi cơ bản, xưng hô, hỏi tên, quốc tịch và cấu trúc câu chữ "是".',
                    dialogues: [
                        {
                            id: 'd1',
                            title: 'Bài khóa 1: 问好与自我介绍 (Chào hỏi & Giới thiệu)',
                            vocabularies: [
                                { hanzi: '老师', pinyin: 'lǎoshī', meaning: 'thầy giáo, cô giáo, giáo viên', example: { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', meaning: 'Tôi là giáo viên.' } },
                                { hanzi: '您', pinyin: 'nín', meaning: 'anh, chị, ông, bà, ngài (kính trọng)', example: { hanzi: '您好！', pinyin: 'Nín hǎo!', meaning: 'Chào ông/bà!' } },
                                { hanzi: '好', pinyin: 'hǎo', meaning: 'tốt, đẹp, khỏe', example: { hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Chào bạn!' } },
                                { hanzi: '你', pinyin: 'nǐ', meaning: 'bạn, anh, chị, ông, bà', example: { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' } },
                                { hanzi: '叫', pinyin: 'jiào', meaning: 'gọi là, tên là', example: { hanzi: '我叫李白。', pinyin: 'Wǒ jiào Lǐ Bái.', meaning: 'Tôi tên là Lý Bạch.' } },
                                { hanzi: '什么', pinyin: 'shénme', meaning: 'gì, cái gì', example: { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Bạn tên là gì?' } },
                                { hanzi: '名字', pinyin: 'míngzi', meaning: 'tên', example: { hanzi: '我的名字叫李白。', pinyin: 'Wǒ de míngzi jiào Lǐ Bái.', meaning: 'Tên của tôi là Lý Bạch.' } },
                                { hanzi: '我', pinyin: 'wǒ', meaning: 'tôi, ta, tao', example: { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' } },
                                { hanzi: '是', pinyin: 'shì', meaning: 'là, thì', example: { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', meaning: 'Tôi là giáo viên.' } },
                                { hanzi: '哪', pinyin: 'nǎ', meaning: 'nào', example: { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' } },
                                { hanzi: '国', pinyin: 'guó', meaning: 'nước, đất nước, quốc gia', example: { hanzi: '中国', pinyin: 'Zhōngguó', meaning: 'Trung Quốc' } },
                                { hanzi: '人', pinyin: 'rén', meaning: 'người', example: { hanzi: '法国人', pinyin: 'Fǎguó rén', meaning: 'Người Pháp' } },
                                { hanzi: '李白', pinyin: 'Lǐ Bái', meaning: 'Lý Bạch (tên người)', example: { hanzi: '我叫李白。', pinyin: 'Wǒ jiào Lǐ Bái.', meaning: 'Tôi tên là Lý Bạch.' } },
                                { hanzi: '法国', pinyin: 'Fǎguó', meaning: 'Nước Pháp', example: { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' } }
                            ],
                            grammar: {
                                title: 'Điểm Ngữ Pháp Bài Khóa 1',
                                points: [
                                    { 
                                        rule: '1. Trật tự từ ngữ trong câu tiếng Hán', 
                                        desc: 'Các thành phần trong câu tiếng Hán thường sắp xếp theo thứ tự Chủ ngữ ➔ Vị ngữ ➔ Tân ngữ.',
                                        example: '我叫李白。 / 我是法国人。',
                                        pinyin: 'Wǒ jiào Lǐ Bái. / Wǒ shì Fǎguó rén.',
                                        meaning: 'Tôi tên là Lý Bạch. / Tôi là người Pháp.',
                                        breakdown: [
                                            { word: '我 (Wǒ)', role: 'Chủ ngữ' },
                                            { word: '叫 / 是', role: 'Vị ngữ' },
                                            { word: '李白', role: 'Tân ngữ' }
                                        ]
                                    }
                                ],
                                exercises: [
                                    { 
                                        q: '你是哪国人？ ➔ Đáp án phù hợp là:', 
                                        pinyin: 'Nǐ shì nǎ guó rén?',
                                        options: [
                                            { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.' },
                                            { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.' },
                                            { hanzi: '我是李白。', pinyin: 'Wǒ shì Lǐ Bái.' }
                                        ], 
                                        answer: '我是法国人。', 
                                        exp: 'Câu hỏi hỏi về quốc tịch "哪国人" nên trả lời là "我是法国人".' 
                                    }
                                ]
                            },
                            sentences: [
                                { 
                                    target: '叫 我 谢名', 
                                    blocks: [
                                        { hanzi: '我', pinyin: 'wǒ' },
                                        { hanzi: '叫', pinyin: 'jiào' },
                                        { hanzi: '谢名', pinyin: 'Xiè Míng' }
                                    ], 
                                    hint: 'Sắp xếp câu: Tôi tên là Tạ Danh.' 
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
