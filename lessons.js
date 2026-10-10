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
                                { hanzi: '请', pinyin: 'qǐng', meaning: 'mời', example: { hanzi: '请坐！', pinyin: 'Qǐng zuò!', meaning: 'Mời ngồi!' } },
                                { hanzi: '坐', pinyin: 'zuò', meaning: 'ngồi', example: { hanzi: '请坐！', pinyin: 'Qǐng zuò!', meaning: 'Mời ngồi!' } },
                                { hanzi: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn', example: { hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', meaning: 'Cảm ơn bạn!' } },
                                { hanzi: '不用谢', pinyin: 'búyòng xiè', meaning: 'không có chi, không cần cảm ơn', example: { hanzi: '不用谢！', pinyin: 'Búyòng xiè!', meaning: 'Không có chi!' } },
                                { hanzi: '不用', pinyin: 'búyòng', meaning: 'không cần', example: { hanzi: '不用客气。', pinyin: 'Búyòng kèqi.', meaning: 'Không cần khách khí.' } },
                                { hanzi: '李白', pinyin: 'Lǐ Bái', meaning: 'Lý Bạch (tên người)', example: { hanzi: '我叫李白。', pinyin: 'Wǒ jiào Lǐ Bái.', meaning: 'Tôi tên là Lý Bạch.' } },
                                { hanzi: '法国', pinyin: 'Fǎguó', meaning: 'Nước Pháp', example: { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' } }
                            ],
                            grammar: {
                                title: 'Điểm Ngữ Pháp Bài 1',
                                points: [
                                    { 
                                        rule: '1. Trật tự từ ngữ trong câu tiếng Hán (Chủ ngữ + Vị ngữ + Tân ngữ)', 
                                        desc: 'Các thành phần trong câu tiếng Hán thường được sắp xếp theo thứ tự Chủ ngữ ➔ Vị ngữ ➔ Tân ngữ (giống tiếng Việt).',
                                        example: '我叫李白。 / 我是法国人。',
                                        pinyin: 'Wǒ jiào Lǐ Bái. / Wǒ shì Fǎguó rén.',
                                        meaning: 'Tôi tên là Lý Bạch. / Tôi là người Pháp.',
                                        breakdown: [
                                            { word: '我 (Wǒ)', role: 'Chủ ngữ (Tôi)' },
                                            { word: '叫 / 是', role: 'Vị ngữ / Động từ' },
                                            { word: '李白 / 法国人', role: 'Tân ngữ' }
                                        ]
                                    },
                                    { 
                                        rule: '2. Đại từ nghi vấn "什么" (gì) và "哪" (nào)', 
                                        desc: 'Khi tạo thành câu hỏi, trật tự từ giữ nguyên như câu trần thuật, chỉ cần thay bộ phận cần hỏi bằng đại từ nghi vấn tương ứng.',
                                        example: '你叫什么名字？ / 你是哪国人？',
                                        pinyin: 'Nǐ jiào shénme míngzi? / Nǐ shì nǎ guó rén?',
                                        meaning: 'Bạn tên là gì? / Bạn là người nước nào?',
                                        breakdown: [
                                            { word: '什么 (shénme)', role: 'Hỏi tên / sự vật' },
                                            { word: '哪 (nǎ)', role: 'Hỏi lựa chọn / quốc gia' }
                                        ]
                                    },
                                    { 
                                        rule: '3. Câu chữ "是" (shì)', 
                                        desc: 'Câu chữ "是" do động từ "是" nối hai thành phần trước và sau có liên quan với nhau, biểu thị ý khẳng định, phán đoán.',
                                        example: '我是法国人。 / 我是老师。',
                                        pinyin: 'Wǒ shì Fǎguó rén. / Wǒ shì lǎoshī.',
                                        meaning: 'Tôi là người Pháp. / Tôi là giáo viên.',
                                        breakdown: [
                                            { word: '我是...', role: 'Tôi là...' }
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
                                        exp: 'Câu hỏi hỏi về quốc tịch "哪国人" nên trả lời là "我是法国人" (Tôi là người Pháp).' 
                                    },
                                    { 
                                        q: 'Điền từ thích hợp: 你叫 ______ 名字？', 
                                        pinyin: 'Nǐ jiào ______ míngzi?',
                                        options: [
                                            { hanzi: '什么', pinyin: 'shénme' },
                                            { hanzi: '哪', pinyin: 'nǎ' },
                                            { hanzi: '是', pinyin: 'shì' }
                                        ], 
                                        answer: '什么', 
                                        exp: 'Dùng đại từ nghi vấn "什么" để hỏi tên: "你叫什么名字？"' 
                                    },
                                    { 
                                        q: 'Dịch câu: "Tôi là giáo viên."', 
                                        pinyin: 'Wǒ shì lǎoshī.',
                                        options: [
                                            { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.' },
                                            { hanzi: '我叫老师。', pinyin: 'Wǒ jiào lǎoshī.' },
                                            { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.' }
                                        ], 
                                        answer: '我是老师。', 
                                        exp: 'Sử dụng cấu trúc câu chữ "是": Chủ ngữ (我) + 是 + Tân ngữ (老师).' 
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
                                    hint: 'Sắp xếp lại câu: Tôi tên là Tạ Danh.' 
                                },
                                { 
                                    target: '我 老师 是', 
                                    blocks: [
                                        { hanzi: '我', pinyin: 'wǒ' },
                                        { hanzi: '是', pinyin: 'shì' },
                                        { hanzi: '老师', pinyin: 'lǎoshī' }
                                    ], 
                                    hint: 'Sắp xếp lại câu: Tôi là giáo viên.' 
                                },
                                { 
                                    target: '你 哪国人 是', 
                                    blocks: [
                                        { hanzi: '你', pinyin: 'nǐ' },
                                        { hanzi: '是', pinyin: 'shì' },
                                        { hanzi: '哪国人', pinyin: 'nǎ guó rén' }
                                    ], 
                                    hint: 'Sắp xếp lại câu hỏi: Bạn là người nước nào?' 
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
