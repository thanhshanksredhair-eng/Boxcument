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
                        },
                        {
                            id: 'd2',
                            title: 'Bài khóa 2: 课文二 (Gặp gỡ trong thang máy)',
                            vocabularies: [
                                { hanzi: '学生', pinyin: 'xuésheng', meaning: 'học sinh, sinh viên', example: { hanzi: '我不是学生。', pinyin: 'Wǒ bú shì xuésheng.', meaning: 'Tôi không phải là sinh viên.' } },
                                { hanzi: '吗', pinyin: 'ma', meaning: 'trợ từ nghi vấn (dùng ở cuối câu hỏi)', example: { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Bạn là sinh viên phải không?' } },
                                { hanzi: '不', pinyin: 'bù', meaning: 'không (phó từ phủ định)', example: { hanzi: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', meaning: 'Tôi không phải là giáo viên.' } },
                                { hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'xin lỗi', example: { hanzi: '对不起！', pinyin: 'Duìbuqǐ!', meaning: 'Xin lỗi!' } },
                                { hanzi: '没关系', pinyin: 'méi guānxi', meaning: 'không sao, không có gì', example: { hanzi: '没关系。', pinyin: 'Méi guānxi.', meaning: 'Không sao đâu.' } },
                                { hanzi: '问', pinyin: 'wèn', meaning: 'hỏi', example: { hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi' } },
                                { hanzi: '贵姓', pinyin: 'guìxìng', meaning: 'họ (mang tính trang trọng)', example: { hanzi: '请问，您贵姓？', pinyin: 'Qǐngwèn, nín guìxìng?', meaning: 'Xin hỏi, ngài họ gì?' } },
                                { hanzi: '姓', pinyin: 'xìng', meaning: 'họ, mang họ', example: { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.', meaning: 'Tôi họ Vương.' } },
                                { hanzi: '呢', pinyin: 'ne', meaning: 'trợ từ nghi vấn (...thì sao?)', example: { hanzi: '你呢？', pinyin: 'Nǐ ne?', meaning: 'Còn bạn thì sao?' } },
                                { hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt, hẹn gặp lại', example: { hanzi: '王老师，再见！', pinyin: 'Wáng lǎoshī, zàijiàn!', meaning: 'Chào tạm biệt cô Vương!' } },
                                { hanzi: '王', pinyin: 'Wáng', meaning: 'Vương (họ)', example: { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.', meaning: 'Tôi họ Vương.' } },
                                { hanzi: '王语', pinyin: 'Wáng Yǔ', meaning: 'Vương Ngữ (tên người)', example: { hanzi: '我叫王语。', pinyin: 'Wǒ jiào Wáng Yǔ.', meaning: 'Tôi tên là Vương Ngữ.' } },
                                { hanzi: '美国', pinyin: 'Měiguó', meaning: 'Nước Mỹ', example: { hanzi: '你是美国人吗？', pinyin: 'Nǐ shì Měiguó rén ma?', meaning: 'Bạn là người Mỹ phải không?' } }
                            ],
                            grammar: {
                                title: 'Điểm Ngữ Pháp Bài Khóa 2',
                                points: [
                                    { 
                                        rule: '1. Phó từ phủ định "不" (không)[cite: 5]', 
                                        desc: 'Phó từ "不" dùng để biểu thị sự phủ định, đứng trước động từ hoặc tính từ[cite: 5].',
                                        example: '我不是老师。 / 我不姓李。[cite: 5]',
                                        pinyin: 'Wǒ bú shì lǎoshī. / Wǒ bù xìng Lǐ.[cite: 5]',
                                        meaning: 'Tôi không phải là giáo viên. / Tôi không phải họ Lý.[cite: 5]',
                                        breakdown: [
                                            { word: '不 (bù)', role: 'Phó từ phủ định' },
                                            { word: '是 / 姓', role: 'Động từ' }
                                        ]
                                    },
                                    { 
                                        rule: '2. Trợ từ "吗" và câu hỏi đúng sai[cite: 5]', 
                                        desc: 'Đặt trợ từ "吗" ở cuối câu trần thuật để tạo thành câu hỏi nghi vấn (đúng/sai). Trả lời khẳng định thì bỏ "吗", phủ định thì thêm "不" trước động từ[cite: 5].',
                                        example: '你是法国人吗？ ➔ 我是法国人。 / 我不是法国人。[cite: 5]',
                                        pinyin: 'Nǐ shì Fǎguó rén ma? ➔ Wǒ shì Fǎguó rén. / Wǒ bú shì Fǎguó rén.[cite: 5]',
                                        meaning: 'Bạn là người Pháp phải không? ➔ Tôi là người Pháp. / Tôi không phải người Pháp.[cite: 5]',
                                        breakdown: [
                                            { word: '... 吗？', role: 'Trợ từ hỏi đúng/sai' }
                                        ]
                                    },
                                    { 
                                        rule: '3. Trợ từ "呢" (1)[cite: 6]', 
                                        desc: 'Dùng sau danh từ hoặc đại từ trong ngữ cảnh đã rõ ràng để nối tiếp câu hỏi ở phía trên[cite: 6].',
                                        example: '我姓李。你呢？ ➔ 我姓王。[cite: 6]',
                                        pinyin: 'Wǒ xìng Lǐ. Nǐ ne? ➔ Wǒ xìng Wáng.[cite: 6]',
                                        meaning: 'Tôi họ Lý. Còn bạn? ➔ Tôi họ Vương.[cite: 6]',
                                        breakdown: [
                                            { word: '... 呢？', role: 'Còn ... thì sao?' }
                                        ]
                                    }
                                ],
                                exercises: [
                                    { 
                                        q: 'Sửa câu trần thuật thành câu hỏi với "吗": 我是学生。[cite: 5]', 
                                        pinyin: 'Wǒ shì xuésheng.[cite: 5]',
                                        options: [
                                            { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?' },
                                            { hanzi: '我是学生呢？', pinyin: 'Wǒ shì xuésheng ne?' },
                                            { hanzi: '我不学生。', pinyin: 'Wǒ bù xuésheng.' }
                                        ], 
                                        answer: '你是学生吗？', 
                                        exp: 'Thêm trợ từ nghi vấn "吗" vào cuối câu trần thuật và đổi "我" thành "你" để tạo câu hỏi[cite: 5].' 
                                    },
                                    { 
                                        q: 'Trả lời phủ định cho câu hỏi: 你是美国人吗？', 
                                        pinyin: 'Nǐ shì Měiguó rén ma?',
                                        options: [
                                            { hanzi: '不是，我是法国人。', pinyin: 'Bú shì, wǒ shì Fǎguó rén.' },
                                            { hanzi: '我是美国人。', pinyin: 'Wǒ shì Měiguó rén.' },
                                            { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.' }
                                        ], 
                                        answer: '不是，我是法国人。', 
                                        exp: 'Trả lời phủ định dùng "不是" (Không phải).' 
                                    },
                                    { 
                                        q: 'Điền từ thích hợp: 请问，您 ______ ？[cite: 6]', 
                                        pinyin: 'Qǐngwèn, nín ______ ?[cite: 6]',
                                        options: [
                                            { hanzi: '贵姓', pinyin: 'guǐxìng' },
                                            { hanzi: '什么', pinyin: 'shénme' },
                                            { hanzi: '叫', pinyin: 'jiào' }
                                        ], 
                                        answer: '贵姓', 
                                        exp: 'Mẫu câu hỏi họ lịch sự: "请问，您贵姓？"[cite: 6]' 
                                    }
                                ]
                            },
                            sentences: [
                                { 
                                    target: '你 是 学生 吗', 
                                    blocks: [
                                        { hanzi: '你', pinyin: 'nǐ' },
                                        { hanzi: '是', pinyin: 'shì' },
                                        { hanzi: '学生', pinyin: 'xuésheng' },
                                        { hanzi: '吗', pinyin: 'ma' }
                                    ], 
                                    hint: 'Sắp xếp câu hỏi: Bạn là sinh viên phải không?' 
                                },
                                { 
                                    target: '我 不是 学生 我 是 老师', 
                                    blocks: [
                                        { hanzi: '我', pinyin: 'wǒ' },
                                        { hanzi: '不是', pinyin: 'bú shì' },
                                        { hanzi: '学生', pinyin: 'xuésheng' },
                                        { hanzi: '是', pinyin: 'shì' },
                                        { hanzi: '老师', pinyin: 'lǎoshī' }
                                    ], 
                                    hint: 'Sắp xếp câu: Tôi không phải là sinh viên, tôi là giáo viên.' 
                                },
                                { 
                                    target: '请问 您 贵姓', 
                                    blocks: [
                                        { hanzi: '请问', pinyin: 'qǐngwèn' },
                                        { hanzi: '您', pinyin: 'nín' },
                                        { hanzi: '贵姓', pinyin: 'guìxìng' }
                                    ], 
                                    hint: 'Sắp xếp câu hỏi lịch sự: Xin hỏi, ngài họ gì?' 
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
