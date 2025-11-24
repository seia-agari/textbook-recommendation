const allQuestionsData = {
  english: {
    観点: ["単語・語彙", "文法(基礎)", "文法(応用)", "並び替え", "長文読解", "対話文"],
    平均: [60, 65, 55, 70, 50, 65],
    grade1: [
      { q: "問1. 「りんご」を英語で何と言いますか？", options: ["orange", "apple", "banana"], a: "apple", c: "単語・語彙" },
      { q: "問2. 'This is ( ) pen.' ( )に入るのは？", options: ["an", "the", "a"], a: "a", c: "文法(基礎)" },
      { q: "問3. 「ねこ」を英語で何と言いますか？", options: ["dog", "bird", "cat"], a: "cat", c: "単語・語彙" },
      { q: "問4. 'I ( ) a student.' ( )に入るのは？", options: ["am", "is", "are"], a: "am", c: "文法(基礎)" },
      { q: "問5. 「黄色」を英語で何と言いますか？", options: ["yellow", "red", "blue"], a: "yellow", c: "単語・語彙" },
      { q: "問6. 'I like ( ).' ( )に入る最も自然なのは？", options: ["an apple", "apples", "apple"], a: "apples", c: "文法(応用)" },
      { q: "問7. 'What's your name?' と聞かれた時の答えは？", options: ["My name is Mike.", "I am Mike.", "This is Mike."], a: "My name is Mike.", c: "対話文" },
      { q: "問8. 'book' の複数形は何ですか？", options: ["bookes", "boox", "books"], a: "books", c: "文法(基礎)" },
      { q: "問9. 'How are you?' と聞かれた時の答えは？", options: ["I'm Mike.", "I'm fine, thank you.", "I'm ten."], a: "I'm fine, thank you.", c: "対話文" },
      { q: "問10. 'It's sunny.' はどんな意味ですか？", options: ["雨が降っている", "晴れている", "雪が降っている"], a: "晴れている", c: "単語・語彙" },
      { q: "問11. 「1, 2, 3」を英語で言うと？", options: ["one, two, three", "A, B, C", "do, re, mi"], a: "one, two, three", c: "単語・語彙" },
      { q: "問12. 'I can ( ) the piano.' ( )に入るのは？", options: ["plays", "playing", "play"], a: "play", c: "文法(応用)" },
      { q: "問13. ( is / this / a / book ).' を並び替えて「これは本です。」という文を完成させなさい。", type: "sort", a: "This is a book.", c: "並び替え" },
      { q: "問14. ( my / is / mother / she ).' を並び替えて「彼女は私のお母さんです。」という文を完成させなさい。", type: "sort", a: "She is my mother.", c: "並び替え" },
      { q: "問15. 次の文を読んで質問に答えなさい。\n'I have a dog. His name is Max. He is very cute. He likes to play.'\nMaxは何が好きですか？", options: ["寝ること", "遊ぶこと", "食べること"], a: "遊ぶこと", c: "長文読解" },
      { q: "問16. 'Let's play soccer.' はどんな意味ですか？", options: ["サッカーをしよう", "勉強しよう", "家に帰ろう"], a: "サッカーをしよう", c: "対話文" },
      { q: "問17. 'Where are you from?' と聞かれた時の答えは？", options: ["I'm hungry.", "I'm from Japan.", "It's a pen."], a: "I'm from Japan.", c: "対話文" },
      { q: "問18. 'Happy birthday!' はいつ使う言葉ですか？", options: ["新年", "誕生日", "クリスマス"], a: "誕生日", c: "単語・語彙" },
      { q: "問19. 'Thank you.' と言われた時の返事は？", options: ["Good bye.", "Hello.", "You're welcome."], a: "You're welcome.", c: "対話文" },
      { q: "問20. 次の文を読んで質問に答えなさい。\n'My name is Yumi. I go to school by bus every day. I like music and I play the piano.'\nユミはどうやって学校に行きますか？", options: ["歩いて", "自転車で", "バスで"], a: "バスで", c: "長文読解" }
    ],
    grade2: [
      { q: "問1. '私は学生です' を英語で書きなさい。", options: ["I is a student.", "I are a student.", "I am a student."], a: "I am a student.", c: "文法(基礎)" },
      { q: "問2. 'Do you ( ) a pen?' ( )に入るのは？", options: ["has", "have", "are"], a: "have", c: "文法(基礎)" },
      { q: "問3. 'watch' の三単現の形は？", options: ["watches", "watchs", "watching"], a: "watches", c: "文法(基礎)" },
      { q: "問4. 'library' の意味は？", options: ["公園", "図書館", "駅"], a: "図書館", c: "単語・語彙" },
      { q: "問5. 'Where ( ) you from?' ( )に入るのは？", options: ["is", "do", "are"], a: "are", c: "文法(基礎)" },
      { q: "問6. 'He can speak English ( ).' ( )に入るのは？", options: ["good", "well", "better"], a: "well", c: "文法(応用)" },
      { q: "問7. 'Excuse me?' と言われた時の返事は？", options: ["Thank you.", "You're welcome.", "Yes?"], a: "Yes?", c: "対話文" },
      { q: "問8. ( you / do / like / music / ? ).' を並び替えて「あなたは音楽が好きですか？」という文を完成させなさい。", type: "sort", a: "Do you like music?", c: "並び替え" },
      { q: "問9. 'Don't run in the classroom.' はどんな意味ですか？", options: ["教室で勉強しなさい。", "教室で走ってはいけません。", "教室で静かにしなさい。"], a: "教室で走ってはいけません。", c: "文法(基礎)" },
      { q: "問10. 'month' の意味は？", options: ["年", "週", "月"], a: "月", c: "単語・語彙" },
      { q: "問11. 'I play tennis.' を否定文にしなさい。", options: ["I am not play tennis.", "I don't play tennis.", "I not play tennis."], a: "I don't play tennis.", c: "文法(基礎)" },
      { q: "問12. 'What time is it?' の答えとして正しいのは？", options: ["It's ten thirty.", "I'm ten.", "He is ten."], a: "It's ten thirty.", c: "対話文" },
      { q: "問13. ( is / your / what / favorite / subject / ? ).' を並び替えて「あなたの好きな教科は何ですか？」という文を完成させなさい。", type: "sort", a: "What is your favorite subject?", c: "並び替え" },
      { q: "問14. 'Let's go to the park.' と誘われた時の承諾の返事は？", options: ["No, thank you.", "I'm sorry.", "Yes, let's."], a: "Yes, let's.", c: "対話文" },
      { q: "問15. 次の文を読んで質問に答えなさい。\n'This is Ken. He is from Canada. He likes Japanese food, for example, sushi and ramen. He can't use chopsticks well, but he is practicing.'\nケンが上手に使えないものは何ですか？", options: ["フォーク", "箸", "スプーン"], a: "箸", c: "長文読解" },
      { q: "問16. 'I have ( ) brothers.' 2人の兄がいる場合、( )に入るのは？", options: ["to", "too", "two"], a: "two", c: "単語・語彙" },
      { q: "問17. 'study' の過去形は？", options: ["studied", "studed", "studyed"], a: "studied", c: "文法(基礎)" },
      { q: "問18. 'I ( ) to school yesterday.' ( )に入るのは？", options: ["go", "went", "goes"], a: "went", c: "文法(基礎)" },
      { q: "問19. 'Whose pen is this?' の答えとして正しいのは？", options: ["This is a pen.", "Yes, it is.", "It's mine."], a: "It's mine.", c: "対話文" },
      { q: "問20. ( play / can / you / the / guitar / ? ).' を並び替えて「あなたはギターが弾けますか？」という文を完成させなさい。", type: "sort", a: "Can you play the guitar?", c: "並び替え" }
    ],
    grade3: [
      { q: "問1. He is going to ( ) a book.", options: ["reads", "reading", "read"], a: "read", c: "文法(基礎)"},
      { q: "問2. I was ( ) TV at that time.", options: ["watch", "watching", "watches"], a: "watching", c: "文法(応用)"},
      { q: "問3. There are many ( ) in the park.", options: ["person", "peoples", "people"], a: "people", c: "単語・語彙"},
      { q: "問4. If it ( ) tomorrow, I will stay home.", options: ["rain", "is raining", "rains"], a: "rains", c: "文法(応用)"},
      { q: "問5. A: Must I do my homework now? B: No, you ( ).", options: ["must not", "don't have to", "may not"], a: "don't have to", c: "対話文"},
      { q: "問6. To ( ) a foreign language is difficult.", options: ["learning", "learned", "learn"], a: "learn", c: "文法(基礎)"},
      { q: "問7. 'information'の意味は？", options: ["招待", "情報", "発明"], a: "情報", c: "単語・語彙"},
      { q: "問8. ( to / I / the park / went / play / soccer / to ).' を並び替えて「私はサッカーをするために公園へ行きました。」という文を完成させなさい。", type: "sort", a: "I went to the park to play soccer.", c: "並び替え"},
      { q: "問9. This book is ( ) interesting than that one.", options: ["more", "most", "as"], a: "more", c: "文法(応用)"},
      { q: "問10. 'I was excited to hear the news.' と同じ意味の文は？", options: ["The news excited me.", "I excited the news.", "The news was excited."], a: "The news excited me.", c: "文法(応用)"},
      { q: "問11. 'He is the ( ) runner in our class.' (一番速い)", options: ["faster", "fastest", "fast"], a: "fastest", c: "文法(応用)"},
      { q: "問12. 'important'の意味は？", options: ["簡単な", "面白い", "重要な"], a: "重要な", c: "単語・語彙"},
      { q: "問13. 'I'll call you when I ( ) home.' ( )に入るのは？", options: ["will get", "got", "get"], a: "get", c: "文法(基礎)"},
      { q: "問14. A: How was your weekend? B: ( )", options: ["It is great.", "It will be great.", "It was great."], a: "It was great.", c: "対話文"},
      { q: "問15. 次の文を読んで質問に答えなさい。\n'Last Sunday, I went to the zoo with my family. I saw many animals, like lions, giraffes, and monkeys. The monkeys were very funny. They were eating bananas. I had a very good time there.'\n私が動物園で見た一番面白い動物は何でしたか？", options: ["ライオン", "サル", "キリン"], a: "サル", c: "長文読解"},
      { q: "問16. 'You must ( ) your homework.' ( )に入るのは？", options: ["to do", "doing", "do"], a: "do", c: "文法(基礎)"},
      { q: "問17. 'receive'の意味は？", options: ["送る", "忘れる", "受け取る"], a: "受け取る", c: "単語・語彙"},
      { q: "問18. ( traveling / by / like / I / train ).' を並び替えて「私は電車で旅をするのが好きです。」という文を完成させなさい。", type: "sort", a: "I like traveling by train.", c: "並び替え"},
      { q: "問19. 'I am looking for my key.' はどんな意味ですか？", options: ["私は鍵を見つけました。", "私は鍵を失くしました。", "私は鍵を探しています。"], a: "私は鍵を探しています。", c: "単語・語彙"},
      { q: "問20. This is the ( ) picture in this museum. (最も有名)", options: ["more famous", "famous", "most famous"], a: "most famous", c: "文法(応用)"}
    ]
  },
  math: {
    観点: ["数と計算", "方程式", "関数", "図形", "資料の活用"],
    平均: [70, 60, 50, 65, 55],
    grade1: [
      { q: "問1. 3/4 + 1/4 を計算しなさい。", options: ["1/2", "3/8", "1"], a: "1", c: "数と計算" },
      { q: "問2. 1.25 × 4 を計算しなさい。", options: ["5", "4.8", "5.25"], a: "5", c: "数と計算" },
      { q: "問3. 三角形の3つの角の合計は何度ですか？", options: ["90度", "180度", "360度"], a: "180度", c: "図形" },
      { q: "問4. 5 × (□ + 2) = 20 のとき、□に入る数は？", options: ["3", "4", "2"], a: "2", c: "方程式" },
      { q: "問5. 時速60kmで2時間走ったときの距離は？", options: ["60km", "120km", "30km"], a: "120km", c: "関数" },
      { q: "問6. 百分率25%を分数で表すと？", options: ["1/4", "1/2", "1/5"], a: "1/4", c: "数と計算" },
      { q: "問7. 半径5cmの円の面積は？ (円周率は3.14とする)", options: ["31.4cm²", "78.5cm²", "15.7cm²"], a: "78.5cm²", c: "図形" },
      { q: "問8. 10, 20, 30, 40, 50の平均値は？", options: ["25", "35", "30"], a: "30", c: "資料の活用" },
      { q: "問9. 正六面体（立方体）の辺の数は全部で何本ですか？", options: ["12本", "6本", "8本"], a: "12本", c: "図形" },
      { q: "問10. 5000円の10%引きの金額はいくらですか？", options: ["4000円", "4500円", "4950円"], a: "4500円", c: "数と計算" },
      { q: "問11. 1時間は何分ですか？", options: ["100分", "30分", "60分"], a: "60分", c: "数と計算" },
      { q: "問12. 台形の面積を求める公式は？", options: ["底辺×高さ÷2", "(上底+下底)×高さ÷2", "たて×横"], a: "(上底+下底)×高さ÷2", c: "図形" },
      { q: "問13. 100の約数の個数は？", options: ["8個", "10個", "9個"], a: "9個", c: "数と計算" },
      { q: "問14. サイコロを1回振ったとき、偶数の目が出る確率は？", options: ["1/3", "1/2", "1/6"], a: "1/2", c: "資料の活用" },
      { q: "問15. 12と18の最大公約数は？", options: ["3", "12", "6"], a: "6", c: "数と計算" },
      { q: "問16. □ - 1.5 = 3.5 のとき、□に入る数は？", options: ["5", "4", "2"], a: "5", c: "方程式" },
      { q: "問17. 直方体の体積の求め方は？", options: ["たて×横", "たて×横×高さ", "(たて+横)×2"], a: "たて×横×高さ", c: "図形" },
      { q: "問18. 3:5 と同じ比になるのは？", options: ["5:3", "3:10", "6:10"], a: "6:10", c: "関数" },
      { q: "問19. データ [1, 2, 2, 3, 3, 3, 4] の最頻値（モード）は？", options: ["2", "2.5", "3"], a: "3", c: "資料の活用" },
      { q: "問20. 20の3/5はいくつですか？", options: ["10", "15", "12"], a: "12", c: "数と計算" }
    ],
    grade2: [
      { q: "問1. (+5) + (-8) を計算しなさい。", options: ["3", "-3", "13"], a: "-3", c: "数と計算" },
      { q: "問2. 3x = 12 のとき、xの値は？", options: ["4", "3", "9"], a: "4", c: "方程式" },
      { q: "問3. (-4) × (-6) を計算しなさい。", options: ["-24", "10", "24"], a: "24", c: "数と計算" },
      { q: "問4. 比例 y = 2x で、x=5 のときのyの値は？", options: ["7", "10", "2.5"], a: "10", c: "関数" },
      { q: "問5. 半径が5cmの円の面積は？(円周率はπとする)", options: ["10π cm²", "5π cm²", "25π cm²"], a: "25π cm²", c: "図形" },
      { q: "問6. x + 7 = 3 を解きなさい。", options: ["x = 4", "x = 10", "x = -4"], a: "x = -4", c: "方程式" },
      { q: "問7. 1, 3, 5, 7, 9 の平均値は？", options: ["5", "4", "6"], a: "5", c: "資料の活用" },
      { q: "問8. 角柱の底面の形が五角形のとき、この角柱の名称は？", options: ["五角錐", "六角柱", "五角柱"], a: "五角柱", c: "図形" },
      { q: "問9. 反比例 y = 12/x で、x=3 のときのyの値は？", options: ["3", "4", "12"], a: "4", c: "関数" },
      { q: "問10. データの中で最も頻繁に出てくる値を何というか？", options: ["中央値(メジアン)", "平均値", "最頻値(モード)"], a: "最頻値(モード)", c: "資料の活用" },
      { q: "問11. (-2)³ を計算しなさい。", options: ["8", "-8", "-6"], a: "-8", c: "数と計算" },
      { q: "問12. 5x - 4 = 11 を解きなさい。", options: ["x = 1", "x = 5", "x = 3"], a: "x = 3", c: "方程式" },
      { q: "問13. 比例 y = -3x のグラフは、どの象限を通りますか？", options: ["第1, 3象限", "第2, 4象限", "第1, 2象限"], a: "第2, 4象限", c: "関数" },
      { q: "問14. 中心角が60度、半径が6cmのおうぎ形の弧の長さは？(円周率はπとする)", options: ["π cm", "6π cm", "2π cm"], a: "2π cm", c: "図形" },
      { q: "問15. 階級の幅が10で、階級値が35の階級は？", options: ["35以上45未満", "30以上40未満", "25以上35未満"], a: "30以上40未満", c: "資料の活用" },
      { q: "問16. 3x + 5 - x - 8 を簡単にしなさい。", options: ["3x - 3", "2x + 3", "2x - 3"], a: "2x - 3", c: "数と計算" },
      { q: "問17. 1次方程式 0.5x + 1 = 2.5 を解きなさい。", options: ["x = 5", "x = 3", "x = 7"], a: "x = 3", c: "方程式" },
      { q: "問18. yがxに反比例し、x=2 のとき y=6 である。この関係を式で表しなさい。", options: ["y = 3x", "y = 8/x", "y = 12/x"], a: "y = 12/x", c: "関数" },
      { q: "問19. 底面の半径が3cm, 高さが10cmの円柱の体積は？(円周率はπとする)", options: ["30π cm³", "90π cm³", "60π cm³"], a: "90π cm³", c: "図形" },
      { q: "問20. あるテストの5人の点数が 60, 70, 80, 80, 90 であった。中央値(メジアン)は？", options: ["75点", "76点", "80点"], a: "80点", c: "資料の活用" }
    ],
    grade3: [
      { q: "問1. 2x + 3y + 5x - y を計算しなさい。", options: ["7x + 3y", "8xy", "7x + 2y"], a: "7x + 2y", c: "数と計算" },
      { q: "問2. 連立方程式 x+y=5, x-y=1 の解は？", options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"], a: "x=3, y=2", c: "方程式" },
      { q: "問3. 一次関数 y = 3x - 2 のグラフの傾きは？", options: ["-2", "1", "3"], a: "3", c: "関数" },
      { q: "問4. n角形の内角の和を求める公式は？", options: ["180(n-2)", "180n", "360(n-2)"], a: "180(n-2)", c: "図形" },
      { q: "問5. 2つのサイコロを同時に投げるとき、目の和が7になる確率は？", options: ["1/12", "1/6", "1/36"], a: "1/6", c: "資料の活用" },
      { q: "問6. 5x - 3 = 2x + 6 を解きなさい。", options: ["x = 1", "x = -3", "x = 3"], a: "x = 3", c: "方程式" },
      { q: "問7. 一次関数 y = -x + 5 で、xが2増加するときのyの増加量は？", options: ["2", "-2", "3"], a: "-2", c: "関数" },
      { q: "問8. 合同な図形の性質として間違っているものは？", options: ["対応する辺の長さは等しい", "面積は異なる場合がある", "対応する角の大きさは等しい"], a: "面積は異なる場合がある", c: "図形" },
      { q: "問9. (2a²b) × 3ab を計算しなさい。", options: ["5a³b²", "6a³b²", "6a²b"], a: "6a³b²", c: "数と計算" },
      { q: "問10. あるクラスのテストの点数の中央値(メジアン)が75点だった。これは何を意味するか？", options: ["最も多くの生徒がとった点数", "全員の点数の合計を人数で割った値", "データを小さい順に並べたとき真ん中にくる値"], a: "データを小さい順に並べたとき真ん中にくる値", c: "資料の活用" },
      { q: "問11. 4x²y ÷ 2xy を計算しなさい。", options: ["2y", "2x", "2xy"], a: "2x", c: "数と計算" },
      { q: "問12. 連立方程式 y=2x, x+y=9 の解は？", options: ["x=2, y=4", "x=1, y=2", "x=3, y=6"], a: "x=3, y=6", c: "方程式" },
      { q: "問13. 一次関数 y = 2x + 3 のグラフがy軸と交わる点の座標は？", options: ["(0, 3)", "(3, 0)", "(0, 2)"], a: "(0, 3)", c: "関数" },
      { q: "問14. 二等辺三角形の性質として正しいものは？", options: ["すべての角が等しい", "2つの底角は等しい", "すべての辺が等しい"], a: "2つの底角は等しい", c: "図形" },
      { q: "問15. 赤玉3個、白玉2個が入った袋から玉を1個取り出すとき、赤玉が出る確率は？", options: ["2/5", "1/5", "3/5"], a: "3/5", c: "資料の活用" },
      { q: "問16. 3(x - 2y) - 2(x - y) を計算しなさい。", options: ["x - 8y", "5x - 8y", "x - 4y"], a: "x - 4y", c: "数と計算" },
      { q: "問17. 不等式 3x + 5 > 11 を解きなさい。", options: ["x < 2", "x > 2", "x > 16/3"], a: "x > 2", c: "方程式" },
      { q: "問18. 2点(-1, 1), (2, 7)を通る直線の式を求めなさい。", options: ["y = 3x + 4", "y = x + 2", "y = 2x + 3"], a: "y = 2x + 3", c: "関数" },
      { q: "問19. 平行四辺形になるための条件として間違っているものは？", options: ["2組の対辺がそれぞれ平行", "対角線が直角に交わる", "2組の対角がそれぞれ等しい"], a: "対角線が直角に交わる", c: "図形" },
      { q: "問20. 箱ひげ図で、箱の長さが表すものは？", options: ["範囲", "平均値", "四分位範囲"], a: "四分位範囲", c: "資料の活用" }
    ]
  }
};
        const privacyPolicyHTML = `<h4>プライバシーポリシー</h4><p>1対1スマイルスタディ（以下「当塾」）は、本ページにおいて講師向けの教材選定情報を提供します。本ページは情報提供を目的としたものであり、以下のとおり利用者の個人情報を収集・利用いたしません。</p><p>1. 個人情報の収集について<br>本ページでは、利用者の氏名、メールアドレス、その他の個人情報を取得することはありません。</p><p>2. アクセス解析・クッキーの利用について<br>本ページでは、アクセス解析ツールやクッキー、その他のトラッキング技術を使用しておりません。</p><p>3. 外部サービスとの連携について<br>本ページでは、外部サービスとの連携や第三者への情報提供は行いません。</p><p>4. 免責事項<br>本ページの内容は、講師向けの教材選定の参考情報として提供しているものであり、内容の正確性や最新性を保証するものではありません。必要に応じて最新の公式情報をご確認ください。</p>`;
        
        // MODIFIED: New decision tree and HS_LIB data
        const decisionTree = {
            start: "grade",
            nodes: [
                { id: "grade", type: "q", prompt: "何年生？", options: [ {label:"中1", next:"subject"}, {label:"中2", next:"subject"}, {label:"中3", next:"subject"}, {label:"高1", next:"hs-level"}, {label:"高2", next:"hs-level"}, {label:"高3/既卒", next:"hs-level"}, ]},
                { id: "subject", type: "q", prompt: "科目は？", options: [ {label:"英語", next:"jhs-eng-area"}, {label:"数学", next:"jhs-math-area"}, {label:"国語", next:"jhs-japanese-area"}, {label:"理科", next:"jhs-science-area"}, {label:"社会", next:"jhs-social-area"}, ]},
                { id: "jhs-eng-area", type: "q", prompt: "英語のどの分野？", options: [ {label:"文法", next:"jhs-eng-grammar"}, {label:"長文", next:"jhs-eng-reading"}, {label:"単語", next:"jhs-eng-vocab"} ]},
                { id: "jhs-eng-grammar", type: "q", prompt: "狙いは？", options: [ {label:"基礎", toResult:"jhs-eng-grammar-basic"}, {label:"演習", toResult:"jhs-eng-grammar-practice"} ]},
                { id: "jhs-eng-reading", type: "q", prompt: "レベルは？（中3は段階別）", options: [ {label:"基礎", toResult:"jhs-eng-reading-basic"}, {label:"標準", toResult:"jhs-eng-reading-standard"}, {label:"応用", toResult:"jhs-eng-reading-advanced"}, {label:"北辰形式対応", toResult:"jhs-eng-reading-hokushin"} ]},
                { id: "jhs-eng-vocab", type: "q", prompt: "単語レベルは？", options: [ {label:"基礎", toResult:"jhs-eng-vocab-basic"}, {label:"標準", toResult:"jhs-eng-vocab-standard"}, ]},
                { id: "jhs-math-area", type: "q", prompt: "数学の狙いは？", options: [ {label:"計算を身に付けたい", toResult:"jhs-math-calc"}, {label:"教科書レベルをできるようにしたい", toResult:"jhs-math-text"}, {label:"基礎的な入試対策", toResult:"jhs-math-basic-entrance"}, {label:"標準的な入試対策", toResult:"jhs-math-standard-entrance"}, ]},
                { id: "jhs-japanese-area", type: "q", prompt: "どの分野？", options: [ {label:"漢字", toResult:"jhs-japanese-kanji"}, {label:"古文", toResult:"jhs-japanese-oldtext"}, {label:"作文", toResult:"jhs-japanese-basic-text"}, {label:"現代文", toResult:"jhs-japanese-standard-text"}, ]},
                { id: "jhs-science-area", type: "q", prompt: "今のレベルは？", options: [ {label:"基礎的なインプット", toResult:"jhs-science-calc"}, {label:"基礎的な問題集", toResult:"jhs-science-text"}, {label:"標準的な入試対策", toResult:"jhs-science-standard-entrance"}, ]},
                { id: "jhs-social-area", type: "q", prompt: "どの分野？", options: [ {label:"地理", toResult:"jhs-social-geograph"}, {label:"歴史", toResult:"jhs-social-history"}, {label:"公民", toResult:"jhs-social-citizen"}, ]},
                { id: "hs-level", type: "q", prompt: "受験レベルは？", options: [ {label:"基礎（共通）", next:"hs-subject"}, {label:"標準（中堅私大〜準難関）", next:"hs-subject"}, {label:"難関（GMARCH/関関同立など）", next:"hs-subject"}, {label:"最難関（早慶上理・旧帝など）", next:"hs-subject"}, ]},
                { id: "hs-subject", type: "q", prompt: "高校：科目は？", options: [ {label:"英語", next:"hs-eng-area"}, {label:"数学", next:"hs-math-area"}, {label:"国語", next:"hs-jp-area"}, {label:"物理", toResult:"HS/phy/core"}, {label:"化学", toResult:"HS/chem/core"}, {label:"生物", toResult:"HS/bio/core"}, {label:"日本史", toResult:"HS/jh/core"}, {label:"世界史", toResult:"HS/wh/core"}, ]},
                { id: "hs-eng-area", type: "q", prompt: "英語の分野は？", options: [ {label:"単語", toResult:"HS/eng/vocab"}, {label:"文法", toResult:"HS/eng/grammar"}, {label:"英文解釈", toResult:"HS/eng/interpret"}, {label:"長文", toResult:"HS/eng/reading"}, {label:"リスニング", toResult:"HS/eng/listening"}, ]},
                { id: "hs-math-area", type: "q", prompt: "数学の分野は？", options: [ {label:"土台固め（教科書/チャート例題）", toResult:"HS/math/foundation"}, {label:"入試基礎", toResult:"HS/math/basic"}, {label:"最難関向け", toResult:"HS/math/top"}, ]},
                { id: "hs-jp-area", type: "q", prompt: "国語の分野は？", options: [ {label:"現代文", toResult:"HS/jp/modern"}, {label:"古文", toResult:"HS/jp/classic"}, {label:"漢文", toResult:"HS/jp/kanbun"}, ]},
                { id:"todo", type:"q", prompt:"この分岐は後日拡張します。戻るで別分岐をお試しください。", options:[{label:"OK", next:"grade"}] }
            ],
            results: {
                "jhs-eng-grammar-basic": [ {title:"『スタートアップ教材』", tags:["中学生","英語文法","基礎"], why:"土台（5文型・時制・品詞）を最短で橋渡し。", tip:"例文音読→口頭再現→ミニ演習。"}, {title:"『中学英文法をはじめからていねいに』+『例文で覚える108』", tags:["例文暗唱"], why:"“日本語→英語の型”を例文で身体化。", tip:"毎回3〜5例文暗唱→次回ランダム口頭チェック。"} ],
                "jhs-eng-grammar-practice": [ {title:"『中学英文法が3時間で終わる』", tags:["短期総復習"], why:"全体像を素早く俯瞰し穴特定。", tip:"1時間×3回→弱点は“108”で運用。"}, {title:"『例文で覚える108』", tags:["運用力"], why:"知識を“使える”に変える反復例文。", tip:"できない例文は同型言い換え2つ作って口頭練習。"} ],
                "jhs-eng-reading-basic": [ {title:"『英語 読解トレーニング』", tags:["中1-中3基礎","精読"], why:"文構造→要旨の型づくり。", tip:"品詞分解→スラッシュ→1分要約。"} ],
                "jhs-eng-reading-standard": [ {title:"『中学英語 長文2（標準）』", tags:["中3標準"], why:"設問バリエで得点力UP。", tip:"設問先読み→根拠下線→根拠言語化。"} ],
                "jhs-eng-reading-advanced": [ {title:"『ハイクラス英語長文』", tags:["中3応用"], why:"上位校向けの語数/難度。", tip:"設問タイプ別ミス帳で反復。"} ],
                "jhs-eng-reading-hokushin": [ {title:"『必勝 公立入試 中学英語（北辰形式対応）』", tags:["中3","北辰"], why:"本番形式で実戦力。", tip:"制限時間厳守→根拠位置の再確認。"} ],
                "jhs-eng-vocab-basic": [ {title:"『基本英単語300』", tags:["基礎単語"], why:"必携300を即戦力化。", tip:"1日30語×10日→週末テスト。"} ],
                "jhs-eng-vocab-standard": [ {title:"『ターゲット1800』", tags:["標準単語"], why:"高校入門まで見据えた語彙力。", tip:"1周目見出し語→2周目派生語。"}, {title:"『1か月で1000語覚えられる本（中学英単語）』", tags:["加速記憶"], why:"短期集中で塊暗記。", tip:"朝/夜分割→週1スクリーニング。"} ],
                "jhs-math-calc": [ {title:"『計算トレーニング』", tags:["計算土台"], why:"符号・約分の取りこぼし矯正。", tip:"×は同型3問＋“ミス図鑑”。"} ],
                "jhs-math-text": [ {title:"『オリジナルテキスト』または『教科書章末（精選）』", tags:["教科書レベル"], why:"進度と整合し穴埋め。", tip:"章末は良問2問に絞る→類題2問。"} ],
                "jhs-math-basic-entrance": [ {title:"『高校入試の基礎問がしっかりわかる本』", tags:["入試基礎"], why:"頻出基礎の型を短期網羅。", tip:"例題→基本→小テ。"}, {title:"『一行問題集』", tags:["反射力"], why:"解法呼び出し速度を鍛える。", tip:"1日10問×14日→誤答は翌日。"} ],
                "jhs-math-standard-entrance": [ {title:"『高校入試でよくでる数学』", tags:["入試標準"], why:"頻出良問で柱を作る。", tip:"時間測定→解法選択の理由を言語化。"} ],
                "jhs-science-calc": [ {title:"『キーワードマスター』", tags:["用語暗記"], why:"用語をまずは暗記", tip:"図・表から確認。"} ],
                "jhs-science-text": [ {title:"『ホントにわかる中学3年間の総復習 理科』", tags:["教科書レベル"], why:"要点整理＋基礎問題で抜け漏れ防止。", tip:"毎回1単元→○付け後に図表まとめ。"} ],
                "jhs-science-standard-entrance": [ {title:"『中1・2の総復習』", tags:["入試標準"], why:"出題率の高い分野を重点演習。", tip:"分野ごとに制限時間を設定して解く。"} ],
                "jhs-social-geograph": [ {title:"『すっきり整理されているから、忘れない。白地図』", tags:["地理"], why:"地図と統計資料の読み取り練習。", tip:"白地図に書き込み→1分で再現。"}, {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["地理"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"} ],
                "jhs-social-history": [ {title:"『すっきり整理されているから、忘れない。歴史年表』", tags:["歴史"], why:"時代の流れをつかむための通史確認。", tip:"年表を音読→穴埋めテスト。"}, {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["歴史"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"} ],
                "jhs-social-citizen": [ {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["公民"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"}, {title:"『キーワードマスター』", tags:["用語暗記"], why:"用語をまずは暗記", tip:"図・表から確認。"} ],
                "jhs-japanese-kanji": [ {title:"『漢検3級過去問集』", tags:["漢字"], why:"配点の割に差がつきやすい。", tip:"1日10問×音読→翌日再テスト。"} ],
                "jhs-japanese-oldtext": [ {title:"『くわしい問題集 国文法』", tags:["古文基礎"], why:"助動詞と敬語を一気に整理。", tip:"例文を音読→意味を口頭確認。"} ],
                "jhs-japanese-basic-text": [ {title:"『たった7日で超攻略 国語・作文』", tags:["作文"], why:"起承転結の型を習得。", tip:"授業内で添削→次回再提出。"} ],
                "jhs-japanese-standard-text": [ {title:"『WINPASS』or『読解トレーニング 基礎編』", tags:["現代文精読"], why:"設問根拠を文中から探す習慣付け。", tip:"本文に線を引いて根拠を見える化。"} ]
            }
        };

        const HS_LIB = {
            eng: {
                vocab: { L1:[{title:"『速読英単語 入門編』 or 『ターゲット1400』", tags:["語彙L1"], why:"基礎語彙の接触回数を確保。", tip:"1日30語→週210語。例文音読もセット。"}], L2:[{title:"『速読英単語 必修編』 or 『ターゲット1900』", tags:["語彙L2"], why:"共通〜準難関の要求語彙。", tip:"派生語・コロケーションまで。"}], L3:[{title:"『ターゲット1900（周回）』＋『速読英熟語』", tags:["語彙L3"], why:"長文直結の連語を補強。", tip:"週1で派生語クイズ。"}], L4:[{title:"『東大英単語熟語 鉄壁』", tags:["語彙L4"], why:"多義語/背景知識に対応。", tip:"章末まとめを口頭説明。"}], },
                grammar: { L1:[ {title:"Input：『大岩のいちばんはじめの英文法』 or 『英文法POLARIS1』", tags:["文法L1"], why:"基礎を体系化。", tip:"15分インプット→要点口頭説明。"}, {title:"Output：『Next Stage（基本〜基礎）』", tags:["演習"], why:"頻出文法/語法を即演習。", tip:"20問/回、根拠言語化。"} ], L2:[ {title:"Input：『英文法POLARIS2』", tags:["文法L2"], why:"入試頻出を網羅。", tip:"弱点メモ→翌日復習。"}, {title:"Output：『Vintage』 or 『Next Stage』", tags:["演習"], why:"語法・イディオムを精緻化。", tip:"誤答は翌日に短再演習。"} ], L3:[ {title:"Input：『英文法POLARIS3（難関）』", tags:["文法L3"], why:"高難度ポイントを体系化。", tip:"“なぜその選択肢か”を言語化。"}, {title:"Output：『英文法ファイナル（標準/難関）』", tags:["演習"], why:"仕上げ期に弱点露出。", tip:"通し演習→弱点のみ2周目。"} ], L4:[ {title:"Input：弱点別ピンポイント資料（自作）", tags:["文法L4"], why:"穴のない網羅。", tip:"誤答ログを章立てノート化。"}, {title:"Output：『英文法ファイナル 難関大』", tags:["演習"], why:"本番想定で最終調整。", tip:"時間厳守→根拠即再現。"} ], },
                interpret: { L1:[{title:"『入門 英文解釈の技術70』", tags:["解釈L1"], why:"SVOCと基本構文を可視化。", tip:"SVOCマーキング→1分要約。"}], L2:[{title:"『英文解釈の技術100』 or 『基礎英文問題精講』", tags:["解釈L2"], why:"構文把握の精度UP。", tip:"チャンク読み→根拠明示。"}], L3:[{title:"『英文解釈の技術100』", tags:["解釈L3"], why:"難構文の処理を鍛える。", tip:"音読→再構文→別解検討。"}], L4:[{title:"『ポレポレ英文読解』", tags:["解釈L4"], why:"抽象度の高い論理展開に対応。", tip:"段落関係を図解→要旨一行化。"}], },
                reading: { L1:[{title:"『やっておきたい英語長文300』 or 『関先生の英語長文1』", tags:["長文L1"], why:"基礎レベルの処理速度。", tip:"設問先読み→根拠下線。"}], L2:[{title:"『やっておきたい英語長文500』 or 『関先生の英語長文2』", tags:["長文L2"], why:"準難関の情報量に慣れる。", tip:"見直しは別解検討まで。"}], L3:[{title:"『やっておきたい英語長文700』 or 『関先生の英語長文3』", tags:["長文L3"], why:"難関の情報圧へ適応。", tip:"段落要約→根拠位置の再現。"}], L4:[{title:"『やっておきたい英語長文1000』 or『関先生の英語長文4』 or 過去問", tags:["長文L4"], why:"最難関の論旨展開と設問処理。", tip:"過去問は“見直しが本体”。"}], },
                listening: { L1:[{title:"『共通テスト実戦問題集（英語L）』", tags:["リスニング"], why:"頻出設問の型に慣れる。", tip:"ディクテーション→音読→シャドーイング。"}], L2:[{title:"『大学入試英語リスニング（実戦）』", tags:["リスニング"], why:"情報保持と選択肢処理。", tip:"1.0→1.25→1.5倍速。"}], L3:[{title:"実戦模試＋音源シャドーイング", tags:["リスニング"], why:"難素材で集中力を鍛える。", tip:"連結音を個別練習。"}], L4:[{title:"過去問セット演習", tags:["リスニング"], why:"最終調整。", tip:"転写→弱点音を潰す。"}], }
            },
            math: {
                foundation: { L1:[{title:"『教科書』＋『白/黄チャート（例題）』", tags:["数I・A中心"], why:"例題の“型”で全範囲を通すのが最短。", tip:"解説を見て理解→閉じて再現。"}], L2:[{title:"『黄チャート（例題/重要例題）』", tags:["数I〜III基礎〜標準"], why:"重要例題までで十分戦える。", tip:"例題→類題★→章末テスト。"}], L3:[{title:"『黄チャート（重要例題周回）』＋弱点補填", tags:["難関向け土台"], why:"“呼び出し速度”を上げる。", tip:"1例題10分の反復。"}], L4:[{title:"『青/黄チャート徹底周回』", tags:["最難関土台"], why:"計算/典型を穴なく。", tip:"誤答は“同型3問”。"}], },
                basic: { L1:[{title:"『入門問題精講（数I・A/II・B）』", tags:["入試基礎"], why:"頻出基礎の型を網羅。", tip:"例題→基本→小テ。"}], L2:[{title:"『基礎問題精講』→弱点単元の追加周回", tags:["入試基礎→標準へ"], why:"基礎の骨格を固める。", tip:"1周目写経OK→2周ノーヒント。"}], L3:[{title:"『標準問題精講（総仕上げ）』＋過去問への橋渡し", tags:["難関前の最終基礎"], why:"典型の取りこぼし排除。", tip:"時間を測り通し演習。"}], L4:[{title:"『標準問題精講』厳選＋志望校過去問", tags:["基礎→実戦"], why:"弱点露出→本番形式で調整。", tip:"50分通し→解き直し2周。"}], },
                top: { L1:[{title:"（先取り注意）", tags:["注意"], why:"まずは基礎/標準を完成させる。", tip:"土台→入門精講の順を厳守。"}], L2:[{title:"（先取り注意）", tags:["注意"], why:"まずは基礎/標準を完成させる。", tip:"土台→入門精講の順を厳守。"}], L3:[{title:"『メジアン』＋志望校過去問", tags:["難関"], why:"典型外の思考力を鍛える。", tip:"1題を深く→骨を掴む。"}], L4:[{title:"『プラチカ』徹底＋過去問", tags:["頂点"], why:"最難関突破の王道（演習は過去問中心）。", tip:"弱点テーマをセット化して回す。"}], }
            },
            jp: {
                modern: { L1: [ { title: "『現代文読解キーワード』＋『現代文100字要約ドリル 基礎編』", tags: ["読解キーワードと要約"], why: "現代文の頻出テーマや要旨把握の型を最初に身につけることで、設問処理が安定する。", tip: "キーワード暗記＋要約練習を並行。本文の主張・根拠・対比を抜き出して1文にまとめる練習。" }, { title: "『新・現代文レベル別問題集1,2』", tags: ["問題集"], why: "共通テストレベルの基礎問題を通して正確さとスピードを両立。", tip: "解答根拠を必ず本文行でチェックし、誤答は原因ラベルをつけて復習。" } ], L2: [ { title: "『新・現代文レベル別問題集3,4』", tags: ["問題集"], why: "情報量が多い評論や小説でも要旨把握を崩さず正確に設問に答える訓練。", tip: "本文構造をマーク（対比・具体例・譲歩）→設問の根拠を本文行に必ず書き出す。" } ], L3: [ { title: "『新・現代文レベル別問題集5』", tags: ["問題集"], why: "難関私大レベルの抽象評論や多段設問に対応できる力を養成。", tip: "設問先読み→本文精読→選択肢検証を徹底し、タイムマネジメントを意識。" } ], L4: [ { title: "『新・現代文レベル別問題集6』＋『上級現代文』（発展）", tags: ["問題集"], why: "比喩・反事実・複線構造を含む超難問を通して読みの深度と論理展開の追跡力を完成させる。", tip: "本文構造図（主張・根拠・反論・再主張）を必ず書き出してから解答。" } ] },
                classic: { L1: [{ title: "『学校配布の古文単語』＋『ベーシック古典』", tags: ["単語・文法"], why: "古文単語と学校で習った文法を中心に基礎固め。", tip: "毎回少しずつ単語・文法を復習し、短文読解で定着させる。" }, { title: "『古文レベル別問題集1,2』", tags: ["問題集"], why: "内容を復習しつつ新しい範囲も着実に理解しながら問題を解く。", tip: "学校の授業進度に合わせて文法を確認し、短文読解でアウトプット。" },], L2: [{ title: "『学校配布の古文単語』＋『ベーシック古典』", tags: ["単語・文法"], why: "古文単語と学校で習った文法を中心に基礎固め。", tip: "学校の授業進度に合わせて文法を確認し、短文読解でアウトプット。" }, { title: "『古文レベル別問題集3,4』", tags: ["問題集"], why: "内容を復習しつつ新しい範囲も着実に理解しながら問題を解く。", tip: "学校の授業進度に合わせて文法を確認し、短文読解でアウトプット。" },], L3: [{ title: "『学校配布の古文単語』＋『ベーシック古典』", tags: ["単語・文法"], why: "内容を復習しつつ新しい範囲も着実に理解。", tip: "学校の授業進度に合わせて文法を確認し、短文読解でアウトプット。" }, { title: "『古文レベル別問題集5』", tags: ["問題集"], why: "基礎を固めた上で得点力を高めるために演習を開始。", tip: "得点力はここで鍛えよう" }, { title: "『マドンナ古文常識」", tags: ["古文常識"], why: "古文の世界の常識を知ろう", tip: "現代と過去の文化、システム、感じ方、楽しみ方、古文のテンプレを覚えよう" },], L4: [{ title: "『マドンナ古文常識」", tags: ["古文常識"], why: "古文の世界の常識を知ろう", tip: "現代と過去の文化、システム、感じ方、楽しみ方、古文のテンプレを覚えよう" }, { title: "『古文レベル別問題集6』", tags: ["問題集"], why: "基礎は凝固", tip: "あとは問題解くのみ" }], },
                kanbun: { L1: [{ title: "『漢文早覚え速答法』＋『漢文句形とキーワード』", tags: ["全学年共通"], why: "基本的句形を確実に覚えることで読解スピードと正答率を上げる。", tip: "句形の例文を繰り返し音読・暗唱して定着させる。" }], L2: [{ title: "『漢文早覚え速答法』＋『漢文句形とキーワード』", tags: ["全学年共通"], why: "基本的句形を確実に覚えることで読解スピードと正答率を上げる。", tip: "句形の例文を繰り返し音読・暗唱して定着させる。" }], L3: [{ title: "『漢文早覚え速答法』＋『漢文句形とキーワード』", tags: ["全学年共通"], why: "基本的句形を確実に覚えることで読解スピードと正答率を上げる。", tip: "句形の例文を繰り返し音読・暗唱して定着させる。" }], L4: [{ title: "『漢文早覚え速答法』＋『漢文句形とキーワード』", tags: ["全学年共通"], why: "基本的句形を確実に覚えることで読解スピードと正答率を上げる。", tip: "句形の例文を繰り返し音読・暗唱して定着させる。" }], }
            },
            phy: { core: { L1:[{title:"『物理のエッセンス（力学/波動/電磁気など）』+『宇宙1わかりやすい力学/電磁気学』", tags:["物理 基礎〜標準"], why:"典型現象の式と意味を接続。", tip:"公式→現象→単位→近似の順で口頭説明。"}], L2:[{title:"『物理のエッセンス（力学/波動/電磁気など）』", tags:["物理 標準"], why:"頻出良問で得点の柱を作る。", tip:"ベクトル図→エネルギー保存を徹底。"}], L3:[{title:"『良問の風』", tags:["物理 難関"], why:"合成力/洞察を鍛える。", tip:"立式の理由を言語化→別法検討。"}], L4:[{title:"名問の森 物理（厳選）+ 過去問（志望大）", tags:["物理 最難関"], why:"出題校の癖対応。", tip:"グラフ化・次元解析で妥当性確認。"}], }},
            chem: { core: { L1:[{title:"『鎌田の講義（理論/無機/有機）』+『宇宙1わかりやすい高校化学』", tags:["化学 基礎"], why:"用語と計算の橋渡し。", tip:"モル→濃度→反応式を図式化。"}], L2:[{title:"『鎌田の講義（理論/無機/有機）』", tags:["化学 標準"], why:"頻出テーマの網羅。", tip:"反応機構の“矢印”を自分で描く。"}], L3:[{title:"『重要問題集（厳選）』＋分野別補強", tags:["化学 難関"], why:"有機/平衡/電池の深掘り。", tip:"グラフの意味を言語化。"}], L4:[{title:"過去問（志望大）＋演習ノート", tags:["化学 最難関"], why:"出題校の傾向対応。", tip:"誤答原因を“知識/計算/読解”に分類。"}], }},
            bio: { core: { L1:[{title:"『生物基礎問題精講』", tags:["生物 基礎"], why:"用語→因果の流れを整理。", tip:"図表→因果の1行要約。"}], L2:[{title:"『生物 標準問題精講』", tags:["生物 標準"], why:"図表読み取りと記述の精度UP。", tip:"“なぜそうなる？”を必ず書く。"}], L3:[{title:"『重要問題集 生物』", tags:["生物 難関"], why:"頻出テーマを深く。", tip:"計数処理/実験考察に慣れる。"}], L4:[{title:"過去問（志望大）", tags:["生物 最難関"], why:"設問様式への最終適応。", tip:"図の再現→仮説→検証を文章化。"}], }},
            jh: { core: { L1:[{title:"『日本史B 講義の実況中継（通史）』", tags:["日本史 基礎"], why:"通史の“流れ”を掴む。", tip:"出来事→原因→結果を三段で。"}], L2:[{title:"『詳説日本史研究（山川）』＋ 一問一答", tags:["日本史 標準"], why:"語句と流れの接続。", tip:"章ごとに年表ミニ作成。"}], L3:[{title:"『日本史問題集（過去問系）』+ 『実力をつける日本史１００題』", tags:["日本史 難関"], why:"資料/論述に対応。", tip:"史料の根拠語を線引き。"}], L4:[{title:"志望大の過去問（論述含む）+ 『実力をつける日本史１００題』", tags:["日本史 最難関"], why:"設問傾向に最適化。", tip:"論述は骨子→段落→推敲。"}], }},
            wh: { core: { L1:[{title:"『世界史B 講義の実況中継（通史）』", tags:["世界史 基礎"], why:"文明→国家→交流の流れ。", tip:"地域別→相互作用で整理。"}], L2:[{title:"『詳説世界史研究（山川）』＋ 一問一答", tags:["世界史 標準"], why:"語句と因果の接続。", tip:"地図と年表を併用。"}], L3:[{title:"『世界史問題集（過去問系）』+ 『実力をつける世界史１００題』", tags:["世界史 難関"], why:"資料・論述への適応。", tip:"固有名詞の機能を説明。"}], L4:[{title:"志望大の過去問（論述含む） + 『実力をつける世界史１００題』", tags:["世界史 最難関"], why:"設問傾向に最適化。", tip:"出題テーマ別にノート化。"}], }},
        };
        
        document.addEventListener('DOMContentLoaded', () => {
            const screens = { home: document.getElementById('home-screen'), selection: document.getElementById('selection-screen'), test: document.getElementById('test-screen'), result: document.getElementById('result-screen'), recommend: document.getElementById('recommend-app-container') };
            const showScreen = (screenKey) => { Object.values(screens).forEach(s => s.style.display = 'none'); if (screens[screenKey]) { if (screenKey === 'home' || screenKey === 'selection') { screens[screenKey].style.display = 'flex'; } else { screens[screenKey].style.display = 'block'; } } window.scrollTo({ top: 0, behavior: 'smooth' }); };
            
            const recommendAppInstance = initRecommendApp(() => showScreen('home'));
            initTestApp(() => showScreen('home'), { showScreen });

            document.getElementById('start-test-btn').addEventListener('click', () => showScreen('selection'));
            document.getElementById('start-recommend-btn').addEventListener('click', () => { 
                showScreen('recommend'); 
                recommendAppInstance.resetAll(true);
            });
            initPrivacyModal();
            showScreen('home');
        });

        function initTestApp(onBackToHome, screenManager) {
            let myChart = null;
            let currentTestInfo = {};
            let currentQuestions = [];
            let userAnswers = [];
            let timerInterval = null;
            let currentQuestionIndex = 0;
            let studentName = '';

            const prevBtn = document.getElementById('prev-question-btn');
            const nextBtn = document.getElementById('next-question-btn');
            const submitBtn = document.getElementById('submit-test-btn');
            const testForm = document.getElementById('test-form');
            const resultTabsContainer = document.getElementById('result-tabs');

            const saveCurrentAnswer = () => { if (!currentQuestions[currentQuestionIndex]) return; const q = currentQuestions[currentQuestionIndex]; let answer = ""; if (q.type === 'sort') { const hiddenInput = testForm.querySelector(`input[name="q${currentQuestionIndex}"]`); if (hiddenInput) answer = hiddenInput.value; } else { const selected = testForm.querySelector(`input[name="q${currentQuestionIndex}"]:checked`); if (selected) answer = selected.value; } userAnswers[currentQuestionIndex] = answer; };
            const startTimer = () => { let timeLeft = 10 * 60; const timerEl = document.getElementById('timer'); timerEl.textContent = "10:00"; if (timerInterval) clearInterval(timerInterval); timerInterval = setInterval(() => { if (timeLeft <= 0) { clearInterval(timerInterval); alert("時間切れです！自動的に採点します。"); submitTest(); } else { timeLeft--; const minutes = Math.floor(timeLeft / 60); const seconds = timeLeft % 60; timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; } }, 1000); };
            const stopTimer = () => { clearInterval(timerInterval); timerInterval = null; };
            const displayQuestion = (index) => { 
                const q = currentQuestions[index]; 
                let questionHTML = ''; 
                if (q.c === '長文読解' && q.q.includes('\n')) { 
                    const parts = q.q.split('\n'); 
                    const passage = parts.slice(0, -1).join('\n'); 
                    const question = parts.slice(-1)[0]; 
                    questionHTML += `<div class="long-text-question">${passage}</div><p class="question-text">${question}</p>`; 
                } else { 
                    questionHTML += `<p class="question-text">${q.q}</p>`; 
                } 
                questionHTML += `<div class="options">`; 
                if (q.type === 'sort') {
                    // 括弧内の単語を抽出
                    const match = q.q.match(/\(([^)]+)\)/);
                    const words = match ? match[1].split('/').map(w => w.trim()) : [];
                    const savedAnswer = userAnswers[index] || '';
                    const savedWords = savedAnswer ? savedAnswer.split(' ').filter(w => w.trim()).map(w => w.trim().toLowerCase()) : [];
                    
                    // 保存された回答の単語を除外した残りの単語（大文字小文字を無視して比較）
                    const remainingWords = words.filter(word => {
                        const wordLower = word.toLowerCase();
                        return !savedWords.some(saved => saved === wordLower);
                    });
                    
                    // 保存された単語を元の単語リストから見つける
                    const savedWordsInOriginal = savedWords.map(saved => {
                        const found = words.find(w => w.toLowerCase() === saved);
                        return found || saved;
                    });
                    
                    questionHTML += `
                        <div class="sortable-options" id="q${index}-options">
                            ${remainingWords.map(word => `<span class="sortable-option" data-word="${word}">${word}</span>`).join('')}
                        </div>
                        <div class="sortable-answer-area" id="q${index}-answer">
                            ${savedWordsInOriginal.map(word => `<span class="sortable-option" data-word="${word}">${word}</span>`).join('')}
                        </div>
                        <input type="hidden" name="q${index}" value="${savedAnswer}">
                    `;
                } else { 
                    q.options.forEach(option => { 
                        const escapedOption = option.replace(/"/g, '&quot;'); 
                        const isChecked = userAnswers[index] === option ? 'checked' : ''; 
                        questionHTML += `<label><input type="radio" name="q${index}" value="${escapedOption}" ${isChecked}> ${option}</label>`; 
                    }); 
                } 
                questionHTML += `</div>`; 
                testForm.innerHTML = questionHTML; 
                
                // 並び替え問題のイベントリスナーを設定
                if (q.type === 'sort') {
                    const optionsContainer = document.getElementById(`q${index}-options`);
                    const answerContainer = document.getElementById(`q${index}-answer`);
                    const hiddenInput = testForm.querySelector(`input[name="q${index}"]`);
                    
                    if (optionsContainer && answerContainer && hiddenInput) {
                        optionsContainer.addEventListener('click', (e) => {
                            if (e.target.classList.contains('sortable-option')) {
                                answerContainer.appendChild(e.target);
                                updateSortableAnswer();
                            }
                        });
                        
                        answerContainer.addEventListener('click', (e) => {
                            if (e.target.classList.contains('sortable-option')) {
                                optionsContainer.appendChild(e.target);
                                updateSortableAnswer();
                            }
                        });
                        
                        function updateSortableAnswer() {
                            const words = Array.from(answerContainer.children).map(child => child.textContent.trim());
                            hiddenInput.value = words.join(' ');
                            userAnswers[index] = hiddenInput.value;
                        }
                    }
                }
                
                document.getElementById('progress-text').innerText = `問題 ${index + 1} / ${currentQuestions.length}`; 
                document.getElementById('test-progress-bar').style.width = `${((index + 1) / currentQuestions.length) * 100}%`; 
                prevBtn.disabled = index === 0; 
                nextBtn.style.display = index === currentQuestions.length - 1 ? 'none' : 'inline-block'; 
                submitBtn.style.display = index === currentQuestions.length - 1 ? 'inline-block' : 'none'; 
            };
            const calculateResult = (grade, subject, answers) => { const questions = allQuestionsData[subject][`grade${grade}`]; const data = allQuestionsData[subject]; const categories = data['観点']; let total_score = 0; const score_by_category = Object.fromEntries(categories.map(cat => [cat, 0])); const total_by_category = Object.fromEntries(categories.map(cat => [cat, 0])); questions.forEach((q, i) => { if (categories.includes(q.c)) { total_by_category[q.c]++; let userAnswer = (answers[i] || "").trim().toLowerCase().replace(/[.?!,]/g, ""); let correctAnswer = q.a.trim().toLowerCase().replace(/[.?!,]/g, ""); if (userAnswer === correctAnswer) { score_by_category[q.c]++; total_score++; } } }); const user_scores = categories.map(cat => Math.round(total_by_category[cat] > 0 ? (score_by_category[cat] / total_by_category[cat]) * 100 : 0)); const final_score_100 = total_score * 5; let comment = ''; if (final_score_100 >= 80) { comment += '<strong>【総評】素晴らしい結果です！</strong><br>基礎力は十分に身についています。この調子で応用問題にも挑戦し、更なるレベルアップを目指しましょう。<br><br>'; } else if (final_score_100 >= 60) { comment += '<strong>【総評】良い結果です！</strong><br>全体的に理解できていますが、いくつか苦手な分野があるようです。弱点を克服すれば、さらに高得点が狙えます。<br><br>'; } else if (final_score_100 >= 40) { comment += '<strong>【総評】もう少し頑張りましょう。</strong><br>苦手な分野がいくつか見られます。まずは基本的な知識を確実に定着させることが大切です。<br><br>'; } else { comment += '<strong>【総評】基礎からしっかり復習しましょう。</strong><br>今回の範囲の基礎固めが急務です。焦らず、一つ一つの単元を丁寧に学び直すことから始めましょう。<br><br>'; } const strong_points = categories.filter((cat, i) => user_scores[i] > data.平均[i]); if (strong_points.length > 0) { comment += `<strong>【得意な分野】</strong><br>特に「${strong_points.join("」「")}」は平均を上回っており、得意分野と言えるでしょう。自信を持ってください。<br><br>`; } const weak_points = categories.filter((cat, i) => user_scores[i] < data.平均[i]); if (weak_points.length > 0) { comment += `<strong>【要改善点】</strong><br>今回のテストでは、特に「${weak_points.join("」「")}」に課題が見られました。おすすめの教材などを活用して集中的に復習し、苦手を克服しましょう。`; } else { comment += '<strong>【要改善点】</strong><br>特に苦手な分野は見当たりませんでした。素晴らしいです！全体的にレベルアップできるよう、応用問題に取り組んでみましょう。'; } return { total_score, categories, user_scores, avg_scores: data.平均, analysis_comment: comment, weak_points }; };
            const renderChart = (resultData) => { const ctx = document.getElementById('resultChart').getContext('2d'); if (myChart) myChart.destroy(); myChart = new Chart(ctx, { type: 'radar', data: { labels: resultData.categories, datasets: [ { label: 'あなたの得点率 (%)', data: resultData.user_scores, backgroundColor: 'rgba(245, 158, 11, 0.2)', borderColor: 'rgba(245, 158, 11, 1)', borderWidth: 2 }, { label: '平均得点率 (%)', data: resultData.avg_scores, backgroundColor: 'rgba(34, 197, 94, 0.2)', borderColor: 'rgba(34, 197, 94, 1)', borderWidth: 2 } ] }, options: { scales: { r: { suggestedMin: 0, suggestedMax: 100, pointLabels: { color: '#1a202c', font: { size: 12, weight: '600' } }, grid: { color: 'rgba(0, 0, 0, 0.05)' }, angleLines: { color: 'rgba(0, 0, 0, 0.05)' } } } } }); };
            const displayResultDetails = (grade, subject, answers) => { const questions = allQuestionsData[subject][`grade${grade}`]; let allHtml = '', correctHtml = '', incorrectHtml = ''; questions.forEach((q, i) => { const userAnswer = answers[i] || ""; const isCorrect = userAnswer.trim().toLowerCase().replace(/[.?!,]/g, "") === q.a.trim().toLowerCase().replace(/[.?!,]/g, ""); let content = ''; if (q.type === 'sort') { content = `<div class="user-answer ${isCorrect ? 'user-answer-correct' : 'user-answer-wrong'}">あなたの答え: ${userAnswer || "無回答"}</div>`; if (!isCorrect) content += `<div class="correct-answer">正解: ${q.a}</div>`; } else { content = q.options.map(option => { let classStr = '', correctAnswerHtml = ''; if (option === userAnswer) classStr = isCorrect ? 'user-answer-correct' : 'user-answer-wrong'; if (!isCorrect && option === q.a) correctAnswerHtml = ` <span class="correct-answer">(正解)</span>`; return `<label class="${classStr}">${option}${correctAnswerHtml}</label>`; }).join(''); } const questionBlockHtml = `<div class="result-question-block"><p>${q.q.replace(/\n/g, "<br>")}</p><div class="result-options">${content}</div></div>`; allHtml += questionBlockHtml; if (isCorrect) correctHtml += questionBlockHtml; else incorrectHtml += questionBlockHtml; }); document.getElementById('result-details-content-all').innerHTML = allHtml || "<p>表示する問題がありません。</p>"; document.getElementById('result-details-content-correct').innerHTML = correctHtml || "<p>正解した問題はありませんでした。</p>"; document.getElementById('result-details-content-incorrect').innerHTML = incorrectHtml || "<p>素晴らしい！不正解の問題はありませんでした。</p>"; resultTabsContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active')); document.querySelectorAll('#result-details .tab-content').forEach(content => content.classList.remove('active')); resultTabsContainer.querySelector('.tab-btn[data-tab="all"]').classList.add('active'); document.getElementById('result-details-content-all').classList.add('active'); };
            const isBookForGrade = (book, studentGrade) => { const gradeNum = parseInt(studentGrade, 10); if (!book.tags || book.tags.length === 0) return true; let hasGradeTag = false; for (const tag of book.tags) { const rangeMatch = tag.match(/中(\d)-中(\d)/); if (rangeMatch) { hasGradeTag = true; if (gradeNum >= parseInt(rangeMatch[1], 10) && gradeNum <= parseInt(rangeMatch[2], 10)) return true; } const singleMatch = tag.match(/中(\d)/); if (singleMatch && !rangeMatch) { hasGradeTag = true; if (gradeNum >= parseInt(singleMatch[1], 10)) return true; } } return !hasGradeTag; };
            const displayRecommendations = (weakPoints, subject, grade) => { const mapping = { english: { "単語・語彙": ["jhs-eng-vocab-basic", "jhs-eng-vocab-standard"], "文法(基礎)": ["jhs-eng-grammar-basic"], "文法(応用)": ["jhs-eng-grammar-practice"], "並び替え": ["jhs-eng-grammar-practice"], "長文読解": ["jhs-eng-reading-basic"], "対話文": ["jhs-eng-grammar-basic"] }, math: { "数と計算": ["jhs-math-calc"], "方程式": ["jhs-math-text"], "図形": ["jhs-math-text"], "資料の活用": ["jhs-math-text"], "関数": ["jhs-math-text"]} }; const recommendedKeys = new Set(); weakPoints.forEach(point => { mapping[subject]?.[point]?.forEach(key => recommendedKeys.add(key)); }); const addedTitles = new Set(); const finalBooks = []; recommendedKeys.forEach(key => { (decisionTree.results[key] || []).filter(book => isBookForGrade(book, grade)).forEach(book => { if (!addedTitles.has(book.title)) { finalBooks.push(book); addedTitles.add(book.title); } }); }); const limitedBooks = finalBooks.slice(0, 3); const container = document.getElementById('recommended-books-results'); container.innerHTML = limitedBooks.length > 0 ? limitedBooks.map(cardHTML).join('') : `<p>あなたの弱点を補う、最適な教材は見つかりませんでした。まずは教科書や基本的な問題集で復習してみましょう。</p>`; };
            const submitTest = () => { 
                saveCurrentAnswer(); 
                stopTimer(); 
                const resultData = calculateResult(currentTestInfo.grade, currentTestInfo.subject, userAnswers); 
                document.getElementById('total-score').innerText = `あなたの得点: ${resultData.total_score * 5} / 100点`; 
                renderChart(resultData); 
                document.getElementById('analysis-comment').innerHTML = resultData.analysis_comment; 
                displayResultDetails(currentTestInfo.grade, currentTestInfo.subject, userAnswers); 
                displayRecommendations(resultData.weak_points, currentTestInfo.subject, currentTestInfo.grade); 
                saveToNotion(resultData, currentTestInfo, userAnswers);
                screenManager.showScreen('result'); 
            };
            
            const saveToNotion = (resultData, testInfo, answers) => {
                // GASウェブアプリのURL（math_15.htmlと同じものを使用）
                const gasWebAppUrl = "https://script.google.com/macros/s/AKfycbw8FqtinnPbd9kXhgz32L4QKeifyYX-drtkQLHjEdKQdUXz7USyRdwraX6QOlLZeYlZDQ/exec";
                
                const subjectText = testInfo.subject === 'english' ? '英語' : '数学';
                const testName = `体験授業診断テスト - 中学${testInfo.grade}年生 ${subjectText}`;
                const finalScore = resultData.total_score * 5;
                const totalQuestions = currentQuestions.length;
                const correctCount = resultData.total_score;
                
                // 不正解の問題リストを作成（math_15.htmlと同じ形式）
                const questions = allQuestionsData[testInfo.subject][`grade${testInfo.grade}`];
                const incorrectQuestions = [];
                questions.forEach((q, i) => {
                    const userAnswer = (answers[i] || "").trim().toLowerCase().replace(/[.?!,]/g, "");
                    const correctAnswer = q.a.trim().toLowerCase().replace(/[.?!,]/g, "");
                    if (userAnswer !== correctAnswer) {
                        incorrectQuestions.push(`Q${i + 1}: ${q.q}`);
                    }
                });
                const incorrectsText = incorrectQuestions.length > 0 ? incorrectQuestions.join('\n') : '全問正解';
                
                // Notionに送信するパラメータを構築（math_15.htmlと同じシンプルな形式）
                const params = new URLSearchParams({
                    testName: testName,
                    score: finalScore,
                    correctCount: correctCount,
                    totalQuestions: totalQuestions,
                    studentName: studentName,
                    incorrects: incorrectsText
                });
                
                const saveUrl = `${gasWebAppUrl}?${params.toString()}`;
                
                // Notion保存ボタンを表示
                const notionContainer = document.getElementById('notion-save-container');
                if (notionContainer) {
                    notionContainer.innerHTML = `
                        <a href="${saveUrl}" target="_blank" class="btn" style="font-size: 1rem; text-decoration: none; padding: 12px 30px; display: inline-block; background: #10B981;">
                            結果をNotionに記録する
                        </a>
                    `;
                }
            };

            document.getElementById('start-test-form').addEventListener('submit', (e) => {
                e.preventDefault(); 
                const nameInput = document.getElementById('student-name');
                studentName = nameInput.value.trim();
                if (studentName === '') {
                    alert('受験者名を入力してください。');
                    nameInput.focus();
                    return;
                }
                currentTestInfo = { grade: document.getElementById('grade').value, subject: document.getElementById('subject').value }; 
                currentQuestions = allQuestionsData[currentTestInfo.subject][`grade${currentTestInfo.grade}`]; 
                userAnswers = new Array(currentQuestions.length).fill(''); 
                currentQuestionIndex = 0;
                const subjectText = currentTestInfo.subject === 'english' ? '英語' : '数学'; 
                document.getElementById('test-title').innerText = `体験授業診断テスト - 中学${currentTestInfo.grade}年生 ${subjectText}`;
                displayQuestion(0); 
                startTimer(); 
                screenManager.showScreen('test');
            });
            
            nextBtn.addEventListener('click', () => { saveCurrentAnswer(); if (currentQuestionIndex < currentQuestions.length - 1) { currentQuestionIndex++; displayQuestion(currentQuestionIndex); } });
            prevBtn.addEventListener('click', () => { saveCurrentAnswer(); if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(currentQuestionIndex); } });
            submitBtn.addEventListener('click', submitTest);
            document.getElementById('back-to-home-from-test').addEventListener('click', onBackToHome);
            resultTabsContainer.addEventListener('click', (e) => { if (e.target.matches('.tab-btn')) { const tabName = e.target.dataset.tab; resultTabsContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active')); document.querySelectorAll('#result-details .tab-content').forEach(content => content.classList.remove('active')); e.target.classList.add('active'); document.getElementById(`result-details-content-${tabName}`).classList.add('active'); } });

          // ...initTestApp内の他のコードはそのまま...

            document.getElementById('print-results-btn').addEventListener('click', (event) => {
                const printButton = event.currentTarget;
                const originalButtonText = printButton.textContent;
                printButton.textContent = 'PDF生成中...';
                printButton.disabled = true;

                // --- ▼▼▼ ここからが新しい、最終確定版のロジックです ▼▼▼ ---

                // 1. 【最重要】DOMを操作する前に、表示されているグラフを画像として取得
                const chartImageBase64 = myChart.toBase64Image();

                // 2. PDFに不要な要素を特定
                const { jsPDF } = window.jspdf;
                const elementToPrint = document.getElementById('result-screen');
                const allTabContent = document.getElementById('result-details-content-all');
                const correctTabContent = document.getElementById('result-details-content-correct');
                const incorrectTabContent = document.getElementById('result-details-content-incorrect');
                const onlyIncorrectCheckbox = document.getElementById('print-only-incorrect-cb');
                const correctQuestionsInAllTab = document.querySelectorAll('#result-details-content-all .result-question-block:has(.user-answer-correct)');

                // 3. PDF生成の準備（表示内容のフィルタリング）
                const originalAllDisplayStyle = allTabContent.style.display;
                const originalCorrectDisplayStyle = correctTabContent.style.display;
                const originalIncorrectDisplayStyle = incorrectTabContent.style.display;
                
                allTabContent.style.display = 'block';
                correctTabContent.style.display = 'none';
                incorrectTabContent.style.display = 'none';

                if (onlyIncorrectCheckbox.checked) {
                    correctQuestionsInAllTab.forEach(q => q.classList.add('hide-for-pdf'));
                }
                
                document.body.classList.add('print-mode');
                
                // 4. 僅かな待機後、PDF生成を開始
                setTimeout(() => {
                    html2canvas(elementToPrint, {
                        scale: 2,
                        useCORS: true,
                        windowWidth: 720,
                        onclone: (doc) => {
                            // 5. 【最重要】クローンされた文書内で、グラフの<canvas>を、先ほど取得した静止画像<img>に置き換える
                            const chartCanvas = doc.getElementById('resultChart');
                            if (chartCanvas) {
                                const img = doc.createElement('img');
                                img.src = chartImageBase64;
                                img.style.maxWidth = '100%';
                                img.style.height = 'auto';
                                // canvasをimgに差し替える
                                chartCanvas.parentNode.replaceChild(img, chartCanvas);
                            }
                        }
                    }).then(canvas => {
                        // PDFの複数ページ分割ロジック（変更なし）
                        const pdf = new jsPDF('p', 'mm', 'a4');
                        const canvasWidth = canvas.width;
                        const canvasHeight = canvas.height;
                        const pdfPageWidth = pdf.internal.pageSize.getWidth();
                        const pdfPageHeight = pdf.internal.pageSize.getHeight();
                        const margin = 15;
                        const imgWidth = pdfPageWidth - (margin * 2);
                        const imgHeight = canvasHeight * imgWidth / canvasWidth;
                        let heightLeft = imgHeight;
                        let position = 0;

                        pdf.addImage(canvas, 'PNG', margin, position, imgWidth, imgHeight);
                        heightLeft -= pdfPageHeight;

                        while (heightLeft > 0) {
                            position = position - pdfPageHeight;
                            pdf.addPage();
                            pdf.addImage(canvas, 'PNG', margin, position, imgWidth, imgHeight);
                            heightLeft -= pdfPageHeight;
                        }
                        
                        pdf.save('診断結果.pdf');

                    }).catch(err => {
                        console.error("PDFの生成に失敗しました:", err);
                        alert("エラーが発生しました。PDFを生成できませんでした。");
                    }).finally(() => {
                        // 6. 後片付け処理（変更なし）
                        document.body.classList.remove('print-mode');
                        allTabContent.style.display = originalAllDisplayStyle;
                        correctTabContent.style.display = originalCorrectDisplayStyle;
                        incorrectTabContent.style.display = originalIncorrectDisplayStyle;
                        
                        if (onlyIncorrectCheckbox.checked) {
                            correctQuestionsInAllTab.forEach(q => q.classList.remove('hide-for-pdf'));
                        }
                        
                        printButton.textContent = originalButtonText;
                        printButton.disabled = false;
                    });
                }, 100);

                // --- ▲▲▲ ここまでが最終確定版のロジックです ▲▲▲ ---
            });

            // ...initTestApp内の他のコードはそのまま...`
        }
        
        // MODIFIED: Replaced with the new recommendation logic
        function initRecommendApp(onBackToHome) {
            const $ = s => document.querySelector(s);
            let elStage, elBar, elCrumbs;
            let state = { stack:[], current:decisionTree.start, lastResults:[], memo:{} };

            function isJHS(grade){ return ["中1","中2","中3"].includes(grade); }
            function isHS(grade){ return grade && grade.startsWith("高"); }
            function isHS3(grade){ return grade==="高3/既卒"; }
            function isHS1or2(grade){ return grade==="高1" || grade==="高2"; }

            function setProgress(){
                if(!elBar) return;
                const pct=Math.min(100,Math.round(((state.stack.length+1)/7)*100));
                elBar.style.width=pct+"%";
            }
            function renderCrumbs(){
                if(!elCrumbs) return;
                elCrumbs.innerHTML = state.stack.map(s => `<span class="crumb">${s.label}</span>`).join("");
            }

            function findNode(id){ return decisionTree.nodes.find(n=>n.id===id); }

            function mapLevel(lbl){
                if (!lbl) return "L1";
                if (lbl.includes("最難関")) return "L4";
                if (lbl.includes("標準")) return "L2";
                if (lbl.includes("難関") && !lbl.includes("準難関")) return "L3";
                return "L1";
            }
            function capLevelByGrade(level, grade){
                if (isHS1or2(grade)) return (level==="L3"||level==="L4") ? "L2" : level;
                return level;
            }

            function draw(){
                const node=findNode(state.current);
                if(!node || !elStage){
                    if(elStage) elStage.innerHTML=`<div class="empty">分岐が見つかりません。はじめからやり直してください。</div>`;
                    return;
                }

                let opts=[...(node.options||[])];
                const grade = state.memo.grade;

                if (node.id==="jhs-eng-reading" && isJHS(grade)) {
                    if (grade==="中1" || grade==="中2") {
                        opts = opts.filter(o=>o.label==="基礎");
                    }
                }

                if (node.id==="jhs-math-area" && isJHS(grade)) {
                    opts = opts.filter(o=>{
                    if (o.label==="計算を身に付けたい" || o.label==="教科書レベルをできるようにしたい") return true;
                    if (o.label==="基礎的な入試対策") return grade==="中3";
                    if (o.label==="標準的な入試対策") return grade==="中3";
                    return false;
                    });
                }

                if (node.id==="hs-level" && isHS1or2(grade)) {
                    opts = opts.filter(o => /基礎|標準/.test(o.label));
                }

                if (node.id==="hs-subject" && isHS(grade) && !isHS3(grade)) {
                    const allowed = ["英語","数学","国語"];
                    opts = opts.filter(o => allowed.includes(o.label));
                }

                elStage.innerHTML = `<div class="q">${node.prompt}</div><div class="grid">${opts.map((o,i)=>`<button class="opt" data-i="${i}">${o.label}</button>`).join("")}</div>`;

                elStage.querySelectorAll(".opt").forEach((btn,i)=>{
                    btn.addEventListener("click", ()=>{
                    const opt = opts[i];
                    if(state.stack.length===0){ state.memo.grade = opt.label; }
                    if(node.id==="hs-level"){ state.memo.hsLevel = opt.label; }
                    if(node.id==="hs-subject"){ state.memo.hsSubject = opt.label; }

                    if (node.id==="jhs-eng-reading" && (state.memo.grade==="中1" || state.memo.grade==="中2")) {
                        if (opt.toResult && opt.toResult!=="jhs-eng-reading-basic") {
                        opt.toResult="jhs-eng-reading-basic";
                        }
                    }

                    state.stack.push({nodeId:node.id, label:opt.label});

                    if(opt.next){ state.current=opt.next; draw(); }
                    else if(opt.toResult){
                        if(opt.toResult.startsWith("HS/")){
                        const [,sub,area] = opt.toResult.split("/");
                        renderHsResults(sub, area);
                        }else{
                        renderResults(opt.toResult);
                        }
                    }
                    });
                });
                setProgress(); renderCrumbs();
            }

            function renderResults(key){
                const cards = (decisionTree.results[key]||[]);
                state.lastResults = cards;
                if(!elStage) return;
                elStage.innerHTML = cards.length ? `<div class="results">${cards.map(cardHTML).join("")}</div>` : `<div class="empty">この条件の教材は未登録です。</div>`;
                setProgress(); renderCrumbs();
            }

            function renderHsResults(subject, area){
                const rawLevel = mapLevel(state.memo.hsLevel||"基礎");
                const grade = state.memo.grade||"高1";
                const level = capLevelByGrade(rawLevel, grade);

                let actualArea = area;
                if (isHS1or2(grade)) {
                    if (subject==="math" && area==="top") actualArea="basic";
                }

                const libRoot = HS_LIB[subject]?.[actualArea] || {};
                const lib = libRoot[level] || [];
                const cards = lib.map(adaptByGrade(grade, subject, actualArea, level));

                state.lastResults = cards;
                if(!elStage) return;
                
                elStage.innerHTML = `<div class="results">${cards.map(cardHTML).join("")}</div>`;
                setProgress(); renderCrumbs();
            }

            function adaptByGrade(grade, subject, area, level){
                return (c)=>{
                    const x={...c};
                    x.tags = Array.isArray(x.tags)?[...x.tags]:[];
                    x.tags.push(`学年:${grade}`, `Lv:${level.replace("L","")}`);

                    if(subject==="math"){
                    const span = grade==="高1" ? "数I・A中心" : grade==="高2" ? "数II・Bまで" : "数III含む";
                    x.tags.push(span, `分野:${area}`);
                    if (isHS1or2(grade) && (level==="L3"||level==="L4")) {
                        x.tip = (x.tip?x.tip+" ":"")+"※高1・高2は基礎〜標準の反復を最優先。";
                    }
                    if (area==="top" && isHS1or2(grade)) {
                        x.why = (x.why?x.why+" ":"")+"（選択は最難関向けでしたが、学年に合わせて“入試基礎”へ調整）";
                    }
                    }

                    if(["phy","chem","bio","jh","wh"].includes(subject) && !isHS3(grade)){
                    x.tip = (x.tip?x.tip+" ":"")+"※この科目セットは高3/既卒向けです。高1・高2は英数国の基礎完成を優先。";
                    }
                    return x;
                };
            }

            function plainText(items){ return items.map((c,i)=>`[${i+1}] ${c.title}\n- タグ: ${(c.tags||[]).join(", ")}\n- なぜ: ${c.why||""}\n- コツ: ${c.tip||""}`).join("\n\n"); }

            function back(){
                if(state.stack.length<=1){ resetAll(true); return; }
                const replayStack = state.stack.slice(0, state.stack.length - 1);
                resetAll(false);
                replayStack.forEach(step => {
                    const node = findNode(state.current);
                    if(!node) return;
                    const opt = node.options.find(o => o.label === step.label);
                    if(!opt) return;

                    if(state.stack.length === 0) state.memo.grade = opt.label;
                    if(node.id === "hs-level") state.memo.hsLevel = opt.label;
                    
                    state.stack.push({ nodeId: node.id, label: opt.label });
                    state.current = opt.next;
                });
                draw();
            }
            
            function restartFromGrade(){
                if (state.stack.length === 0) return;
                const firstStep = state.stack[0];
                resetAll(false); // UIは描画しない
                
                const gradeNode = findNode(decisionTree.start);
                const opt = gradeNode.options.find(o => o.label === firstStep.label);
                
                state.memo.grade = opt.label;
                state.stack.push({ nodeId: decisionTree.start, label: opt.label });
                state.current = opt.next;
                draw();
            }

            const resetAll = (doDraw = true) => {
                state.stack=[]; 
                state.current=decisionTree.start; 
                state.lastResults=[]; 
                state.memo={}; 
                if(doDraw) draw();
            };

            async function copyResults(){
                const path = state.stack.map(s=>s.label).join(" > ");
                const text = `【条件】${path}\n` + plainText(state.lastResults);
                const btn = $("#rec-shareBtn");
                try{
                    await navigator.clipboard.writeText(text);
                    btn.textContent="コピーしました！";
                } catch(e) {
                    btn.textContent="コピー失敗…";
                } finally {
                    setTimeout(()=> btn.textContent="結果をコピー", 1600);
                }
            }
            
            elStage = $("#rec-stage");
            elBar = $("#rec-bar");
            elCrumbs = $("#rec-crumbs");

            $("#rec-backBtn")?.addEventListener("click", back);
            $("#rec-shareBtn")?.addEventListener("click", copyResults);
            $("#rec-restartBtn")?.addEventListener("click", restartFromGrade);
            $("#rec-resetTop")?.addEventListener("click", () => resetAll(true));
            $('#back-to-home-from-rec').addEventListener('click', onBackToHome);
            
            return { resetAll };
        }

        function cardHTML(c) { return `<div class="card"><div>${(c.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div><h3>${c.title}</h3>${c.why ? `<div class="why"><b>なぜ？</b> ${c.why}</div>` : ""}${c.tip ? `<div class="tip"><b>使い方のコツ</b>：${c.tip}</div>` : ""}</div>`; }
        function initPrivacyModal() { const modal = document.getElementById("privacy-modal"); const link = document.getElementById("privacy-link"); const closeBtn = document.querySelector("#privacy-modal .close-btn"); if(modal && link && closeBtn) { document.getElementById('privacy-content').innerHTML = privacyPolicyHTML; link.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }; closeBtn.onclick = () => { modal.style.display = "none"; }; window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; }; } }