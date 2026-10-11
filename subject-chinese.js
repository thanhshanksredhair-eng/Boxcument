window.chineseSubject = {
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
            id: 'cn-lesson-2',
            title: 'Bài 2: 这是你的手机吗 (Đây là điện thoại của bạn à?)',
            description: 'Học cách diễn đạt sự sở hữu (的), hỏi thông tin về ai đó (谁) và cách dùng phó từ "cũng" (也).',
            dialogues: [
                {
                    id: 'l2-d1',
                    title: 'Bài khóa 1: 在教室 (Trong lớp học)',
                    vocabularies: [
                        { hanzi: '同学', pinyin: 'tóngxué', meaning: 'bạn cùng lớp, bạn học', example: { hanzi: '他是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Cậu ấy là bạn học của tôi.' } },
                        { hanzi: '早上', pinyin: 'zǎoshang', meaning: 'buổi sáng', example: { hanzi: '早上好！', pinyin: 'Zǎoshang hǎo!', meaning: 'Chào buổi sáng!' } },
                        { hanzi: '这', pinyin: 'zhè', meaning: 'đây, này', example: { hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', meaning: 'Đây là cái gì?' } },
                        { hanzi: '的', pinyin: 'de', meaning: 'trợ từ kết cấu (của)', example: { hanzi: '我的手机', pinyin: 'wǒ de shǒujī', meaning: 'điện thoại của tôi' } },
                        { hanzi: '手机', pinyin: 'shǒujī', meaning: 'điện thoại di động', example: { hanzi: '这是你的手机吗？', pinyin: 'Zhè shì nǐ de shǒujī ma?', meaning: 'Đây là điện thoại của bạn à?' } },
                        { hanzi: '对', pinyin: 'duì', meaning: 'đúng, phải', example: { hanzi: '对，是我的。', pinyin: 'Duì, shì wǒ de.', meaning: 'Đúng, là của tôi.' } },
                        { hanzi: '新', pinyin: 'xīn', meaning: 'mới', example: { hanzi: '新手机', pinyin: 'xīn shǒujī', meaning: 'điện thoại mới' } },
                        { hanzi: '很', pinyin: 'hěn', meaning: 'rất', example: { hanzi: '很好看', pinyin: 'hěn hǎokàn', meaning: 'rất đẹp' } },
                        { hanzi: '好看', pinyin: 'hǎokàn', meaning: 'đẹp, ưa nhìn', example: { hanzi: '你的手机很好看。', pinyin: 'Nǐ de shǒujī hěn hǎokàn.', meaning: 'Điện thoại của bạn rất đẹp.' } },
                        { hanzi: '也', pinyin: 'yě', meaning: 'cũng', example: { hanzi: '我也喜欢。', pinyin: 'Wǒ yě xǐhuan.', meaning: 'Tôi cũng thích.' } },
                        { hanzi: '喜欢', pinyin: 'xǐhuan', meaning: 'thích', example: { hanzi: '你喜欢黑色的手机吗？', pinyin: 'Nǐ xǐhuan hēisè de shǒujī ma?', meaning: 'Bạn có thích điện thoại màu đen không?' } },
                        { hanzi: '黑色', pinyin: 'hēisè', meaning: 'màu đen', example: { hanzi: '黑色的手机', pinyin: 'hēisè de shǒujī', meaning: 'điện thoại màu đen' } },
                        { hanzi: '那', pinyin: 'nà', meaning: 'đó, kia', example: { hanzi: '那是谁的手机？', pinyin: 'Nà shì shuí de shǒujī?', meaning: 'Kia là điện thoại của ai?' } },
                        { hanzi: '谁', pinyin: 'shuí / shéi', meaning: 'ai', example: { hanzi: '他是谁？', pinyin: 'Tā shì shuí?', meaning: 'Anh ấy là ai?' } },
                        { hanzi: '知道', pinyin: 'zhīdào', meaning: 'biết', example: { hanzi: '我不知道。', pinyin: 'Wǒ bù zhīdào.', meaning: 'Tôi không biết.' } }
                    ],
                    grammar: {
                        title: 'Điểm Ngữ Pháp Bài 2 - Bài Khóa 1',
                        points: [
                            {
                                rule: '1. Trợ từ kết cấu "的" (Của)',
                                desc: 'Dùng giữa định ngữ và trung tâm ngữ để biểu thị quan hệ sở hữu hoặc bổ nghĩa (Định ngữ + 的 + Trung tâm ngữ). Nếu định ngữ là đại từ nhân xưng và trung tâm ngữ chỉ người thân/quan hệ xã giao, có thể lược bỏ "的".',
                                example: '我的手机 / 我同学',
                                pinyin: 'wǒ de shǒujī / wǒ tóngxué',
                                meaning: 'Điện thoại của tôi / Bạn học của tôi',
                                breakdown: [
                                    { word: '我 / 老师', role: 'Định ngữ' },
                                    { word: '的', role: 'Trợ từ (của)' },
                                    { word: '手机', role: 'Trung tâm ngữ' }
                                ]
                            },
                            {
                                rule: '2. Đại từ nghi vấn "谁" (Ai)',
                                desc: 'Dùng để hỏi thông tin về người, có thể làm chủ ngữ, tân ngữ và định ngữ. Khi làm định ngữ, phía sau phải thêm "的" biểu thị sở hữu.',
                                example: '谁是你老师？ / 那是谁的手机？',
                                pinyin: 'Shuí shì nǐ lǎoshī? / Nà shì shuí de shǒujī?',
                                meaning: 'Ai là giáo viên của bạn? / Đó là điện thoại của ai?',
                                breakdown: [
                                    { word: '谁 (shuí)', role: 'Hỏi người (Ai)' }
                                ]
                            },
                            {
                                rule: '3. Phó từ "也" (Cũng)',
                                desc: 'Biểu thị sự tương đồng, đứng sau chủ ngữ, trước động từ/tính từ để làm trạng ngữ. Trong câu phủ định, "也" phải đặt trước "不".',
                                example: '我也喜欢。 / 我也不知道。',
                                pinyin: 'Wǒ yě xǐhuan. / Wǒ yě bù zhīdào.',
                                meaning: 'Tôi cũng thích. / Tôi cũng không biết.',
                                breakdown: [
                                    { word: '也 (yě)', role: 'Phó từ (cũng)' },
                                    { word: '不 (bù)', role: 'Phủ định (nếu có)' },
                                    { word: '知道', role: 'Động từ/Tính từ' }
                                ]
                            }
                        ],
                        exercises: [
                            {
                                q: 'Điền từ thích hợp: 这 是 我 _____ 手机。',
                                pinyin: 'Zhè shì wǒ _____ shǒujī.',
                                options: [
                                    { hanzi: '的', pinyin: 'de' },
                                    { hanzi: '也', pinyin: 'yě' },
                                    { hanzi: '吗', pinyin: 'ma' }
                                ],
                                answer: '的',
                                exp: 'Dùng trợ từ kết cấu "的" để nối đại từ "我" và danh từ "手机", biểu thị quan hệ sở hữu "điện thoại của tôi".'
                            },
                            {
                                q: 'Dịch câu "Đó là điện thoại của ai?": 那 是 _____ 的 手机？',
                                pinyin: 'Nà shì _____ de shǒujī?',
                                options: [
                                    { hanzi: '谁', pinyin: 'shuí' },
                                    { hanzi: '什么', pinyin: 'shénme' },
                                    { hanzi: '哪', pinyin: 'nǎ' }
                                ],
                                answer: '谁',
                                exp: 'Dùng đại từ nghi vấn "谁" (Ai) đứng trước "的" để hỏi người sở hữu.'
                            },
                            {
                                q: 'Hoàn thành câu phủ định: 他不是老师，我 _____ 不是老师。',
                                pinyin: 'Tā bú shì lǎoshī, wǒ _____ bú shì lǎoshī.',
                                options: [
                                    { hanzi: '也', pinyin: 'yě' },
                                    { hanzi: '很', pinyin: 'hěn' },
                                    { hanzi: '不', pinyin: 'bù' }
                                ],
                                answer: '也',
                                exp: 'Dùng phó từ "也" (cũng) đặt trước "不" để biểu thị sự tương đồng "tôi cũng không phải là giáo viên".'
                            }
                        ]
                    },
                    sentences: [
                        {
                            target: '这 是 你 的 手机 吗',
                            blocks: [
                                { hanzi: '这', pinyin: 'zhè' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '你 的', pinyin: 'nǐ de' },
                                { hanzi: '手机', pinyin: 'shǒujī' },
                                { hanzi: '吗', pinyin: 'ma' }
                            ],
                            hint: 'Đây là điện thoại của bạn à?'
                        },
                        {
                            target: '那 是 谁 的 手机',
                            blocks: [
                                { hanzi: '那', pinyin: 'nà' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '谁 的', pinyin: 'shuí de' },
                                { hanzi: '手机', pinyin: 'shǒujī' }
                            ],
                            hint: 'Kia là điện thoại của ai?'
                        },
                        {
                            target: '我 也 不 知道',
                            blocks: [
                                { hanzi: '我', pinyin: 'wǒ' },
                                { hanzi: '也', pinyin: 'yě' },
                                { hanzi: '不', pinyin: 'bù' },
                                { hanzi: '知道', pinyin: 'zhīdào' }
                            ],
                            hint: 'Tôi cũng không biết.'
                        }
                    ]
                }
            ]
        }
    ]
};
