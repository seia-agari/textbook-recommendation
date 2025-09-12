/* ================== 中学生：既定 ================== */
const decisionTree = {
  start: "grade",
  nodes: [
    { id: "grade", type: "q", prompt: "何年生？", options: [
      {label:"中1", next:"subject"},
      {label:"中2", next:"subject"},
      {label:"中3", next:"subject"},
      {label:"高1", next:"hs-level"},
      {label:"高2", next:"hs-level"},
      {label:"高3/既卒", next:"hs-level"},
    ]},

    /* ===== 中学生入口 ===== */
    { id: "subject", type: "q", prompt: "科目は？", options: [
      {label:"英語", next:"jhs-eng-area"},
      {label:"数学", next:"jhs-math-area"},
      {label:"国語", next:"jhs-japanese-area"},
      {label:"理科", next:"jhs-science-area"},
      {label:"社会", next:"jhs-social-area"},
    ]},

    /* 英語 */
    { id: "jhs-eng-area", type: "q", prompt: "英語のどの分野？", options: [
      {label:"文法", next:"jhs-eng-grammar"},
      {label:"長文", next:"jhs-eng-reading"},
      {label:"単語", next:"jhs-eng-vocab"}
    ]},
    { id: "jhs-eng-grammar", type: "q", prompt: "狙いは？", options: [
      {label:"基礎", toResult:"jhs-eng-grammar-basic"},
      {label:"演習", toResult:"jhs-eng-grammar-practice"}
    ]},
    { id: "jhs-eng-reading", type: "q", prompt: "レベルは？（中3は段階別）", options: [
      {label:"基礎", toResult:"jhs-eng-reading-basic"},
      {label:"標準", toResult:"jhs-eng-reading-standard"},
      {label:"応用", toResult:"jhs-eng-reading-advanced"},
      {label:"北辰形式対応", toResult:"jhs-eng-reading-hokushin"}
    ]},
    { id: "jhs-eng-vocab", type: "q", prompt: "単語レベルは？", options: [
      {label:"基礎", toResult:"jhs-eng-vocab-basic"},
      {label:"標準", toResult:"jhs-eng-vocab-standard"},
    ]},

    /* 数学 */
    { id: "jhs-math-area", type: "q", prompt: "数学の狙いは？", options: [
      {label:"計算を身に付けたい", toResult:"jhs-math-calc"},
      {label:"教科書レベルをできるようにしたい", toResult:"jhs-math-text"},
      {label:"基礎的な入試対策", toResult:"jhs-math-basic-entrance"},
      {label:"標準的な入試対策", toResult:"jhs-math-standard-entrance"},
    ]},
      /* 国語 */
    { id: "jhs-japanese-area", type: "q", prompt: "どの分野？", options: [
      {label:"漢字", toResult:"jhs-japanese-kanji"},
      {label:"古文", toResult:"jhs-japanese-oldtext"},
      {label:"作文", toResult:"jhs-japanese-basic-text"},
      {label:"現代文", toResult:"jhs-japanese-standard-text"},
    ]},
      /* 理科 */
    { id: "jhs-science-area", type: "q", prompt: "今のレベルは？", options: [
      {label:"基礎的なインプット", toResult:"jhs-science-calc"},
      {label:"基礎的な問題集", toResult:"jhs-science-text"},
      {label:"標準的な入試対策", toResult:"jhs-science-standard-entrance"},
    ]},
      /* 社会 */
    { id: "jhs-social-area", type: "q", prompt: "どの分野？", options: [
      {label:"地理", toResult:"jhs-social-geograph"},
      {label:"歴史", toResult:"jhs-social-history"},
      {label:"公民", toResult:"jhs-social-citizen"},
    ]},

    /* ===== 高校：学年→受験レベル→科目（高3限定科目は動的表示） ===== */
    { id: "hs-level", type: "q", prompt: "受験レベルは？", options: [
      {label:"基礎（共通）", next:"hs-subject"},
      {label:"標準（中堅私大〜準難関）", next:"hs-subject"},
      {label:"難関（GMARCH/関関同立など）", next:"hs-subject"},
      {label:"最難関（早慶上理・旧帝など）", next:"hs-subject"},
    ]},

    // 科目選択は draw() 内で「高3/既卒」以外は理社（物/化/生/日史/世史）を非表示
    { id: "hs-subject", type: "q", prompt: "高校：科目は？", options: [
      {label:"英語", next:"hs-eng-area"},
      {label:"数学", next:"hs-math-area"},
      {label:"国語", next:"hs-jp-area"},
      {label:"物理", toResult:"HS/phy/core"},
      {label:"化学", toResult:"HS/chem/core"},
      {label:"生物", toResult:"HS/bio/core"},
      {label:"日本史", toResult:"HS/jh/core"},
      {label:"世界史", toResult:"HS/wh/core"},
    ]},

    { id: "hs-eng-area", type: "q", prompt: "英語の分野は？", options: [
      {label:"単語", toResult:"HS/eng/vocab"},
      {label:"文法", toResult:"HS/eng/grammar"},
      {label:"英文解釈", toResult:"HS/eng/interpret"},
      {label:"長文", toResult:"HS/eng/reading"},
      {label:"リスニング", toResult:"HS/eng/listening"},
    ]},

    /* ★ 数学：文言＆分岐を刷新（入門問題精講、1対1/プラチカは候補から外す） */
    { id: "hs-math-area", type: "q", prompt: "数学の分野は？", options: [
      {label:"土台固め（教科書/チャート例題）", toResult:"HS/math/foundation"},
      {label:"入試基礎", toResult:"HS/math/basic"},
      {label:"最難関向け", toResult:"HS/math/top"},
    ]},

    { id: "hs-jp-area", type: "q", prompt: "国語の分野は？", options: [
      {label:"現代文", toResult:"HS/jp/modern"},
      {label:"古文", toResult:"HS/jp/classic"},
      {label:"漢文", toResult:"HS/jp/kanbun"},
    ]},

    { id:"todo", type:"q", prompt:"この分岐は後日拡張します。戻るで別分岐をお試しください。", options:[{label:"OK", next:"grade"}] }
  ],

  /* ====== 中学生の結果（省略せず収録） ====== */
  results: {
    "jhs-eng-grammar-basic": [
      {title:"『スタートアップ教材』", tags:["中学生","英語文法","基礎"], why:"土台（5文型・時制・品詞）を最短で橋渡し。", tip:"例文音読→口頭再現→ミニ演習。"},
      {title:"『中学英文法をはじめからていねいに』+『例文で覚える108』", tags:["例文暗唱"], why:"“日本語→英語の型”を例文で身体化。", tip:"毎回3〜5例文暗唱→次回ランダム口頭チェック。"}
    ],
    "jhs-eng-grammar-practice": [
      {title:"『中学英文法が3時間で終わる』", tags:["短期総復習"], why:"全体像を素早く俯瞰し穴特定。", tip:"1時間×3回→弱点は“108”で運用。"},
      {title:"『例文で覚える108』", tags:["運用力"], why:"知識を“使える”に変える反復例文。", tip:"できない例文は同型言い換え2つ作って口頭練習。"}
    ],
    "jhs-eng-reading-basic": [
      {title:"『英語 読解トレーニング』", tags:["中1-中3基礎","精読"], why:"文構造→要旨の型づくり。", tip:"品詞分解→スラッシュ→1分要約。"}
    ],
    "jhs-eng-reading-standard": [
      {title:"『中学英語 長文2（標準）』", tags:["中3標準"], why:"設問バリエで得点力UP。", tip:"設問先読み→根拠下線→根拠言語化。"}
    ],
    "jhs-eng-reading-advanced": [
      {title:"『ハイクラス英語長文』", tags:["中3応用"], why:"上位校向けの語数/難度。", tip:"設問タイプ別ミス帳で反復。"}
    ],
    "jhs-eng-reading-hokushin": [
      {title:"『必勝 公立入試 中学英語（北辰形式対応）』", tags:["中3","北辰"], why:"本番形式で実戦力。", tip:"制限時間厳守→根拠位置の再確認。"}
    ],
    "jhs-eng-vocab-basic": [
      {title:"『基本英単語300』", tags:["基礎単語"], why:"必携300を即戦力化。", tip:"1日30語×10日→週末テスト。"}
    ],
    "jhs-eng-vocab-standard": [
      {title:"『ターゲット1800』", tags:["標準単語"], why:"高校入門まで見据えた語彙力。", tip:"1周目見出し語→2周目派生語。"},
      {title:"『1か月で1000語覚えられる本（中学英単語）』", tags:["加速記憶"], why:"短期集中で塊暗記。", tip:"朝/夜分割→週1スクリーニング。"}
    ],
    "jhs-math-calc": [
      {title:"『計算トレーニング』", tags:["計算土台"], why:"符号・約分の取りこぼし矯正。", tip:"×は同型3問＋“ミス図鑑”。"}
    ],
    "jhs-math-text": [
      {title:"『オリジナルテキスト』または『教科書章末（精選）』", tags:["教科書レベル"], why:"進度と整合し穴埋め。", tip:"章末は良問2問に絞る→類題2問。"}
    ],
    "jhs-math-basic-entrance": [
      {title:"『高校入試の基礎問がしっかりわかる本』", tags:["入試基礎"], why:"頻出基礎の型を短期網羅。", tip:"例題→基本→小テ。"},
      {title:"『一行問題集』", tags:["反射力"], why:"解法呼び出し速度を鍛える。", tip:"1日10問×14日→誤答は翌日。"}
    ],
    "jhs-math-standard-entrance": [
      {title:"『高校入試でよくでる数学』", tags:["入試標準"], why:"頻出良問で柱を作る。", tip:"時間測定→解法選択の理由を言語化。"}
    ],
    "jhs-science-calc": [
      {title:"『キーワードマスター』", tags:["用語暗記"], why:"用語をまずは暗記", tip:"図・表から確認。"}
    ],
    "jhs-science-text": [
      {title:"『ホントにわかる中学3年間の総復習 理科』", tags:["教科書レベル"], why:"要点整理＋基礎問題で抜け漏れ防止。", tip:"毎回1単元→○付け後に図表まとめ。"}
    ],
    "jhs-science-standard-entrance": [
      {title:"『中1・2の総復習』", tags:["入試標準"], why:"出題率の高い分野を重点演習。", tip:"分野ごとに制限時間を設定して解く。"}
    ],
    "jhs-social-geograph": [
      {title:"『すっきり整理されているから、忘れない。白地図』", tags:["地理"], why:"地図と統計資料の読み取り練習。", tip:"白地図に書き込み→1分で再現。"},
      {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["地理"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"}
    ],
    "jhs-social-history": [
      {title:"『すっきり整理されているから、忘れない。歴史年表』", tags:["歴史"], why:"時代の流れをつかむための通史確認。", tip:"年表を音読→穴埋めテスト。"},
      {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["歴史"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"}
    ],
    "jhs-social-citizen": [
      {title:"『ホントにわかる中学3年間の総復習 社会』", tags:["公民"], why:"用語暗記＋図解理解で得点源化。", tip:"選択肢問題は理由付けを必ず口頭説明。"},
      {title:"『キーワードマスター』", tags:["用語暗記"], why:"用語をまずは暗記", tip:"図・表から確認。"}
    ],
    "jhs-japanese-kanji": [
      {title:"『漢検3級過去問集』", tags:["漢字"], why:"配点の割に差がつきやすい。", tip:"1日10問×音読→翌日再テスト。"}
    ],
    "jhs-japanese-oldtext": [
      {title:"『くわしい問題集 国文法』", tags:["古文基礎"], why:"助動詞と敬語を一気に整理。", tip:"例文を音読→意味を口頭確認。"}
    ],
    "jhs-japanese-basic-text": [
      {title:"『たった7日で超攻略 国語・作文』", tags:["作文"], why:"起承転結の型を習得。", tip:"授業内で添削→次回再提出。"}
    ],
    "jhs-japanese-standard-text": [
      {title:"『WINPASS』or『読解トレーニング 基礎編』", tags:["現代文精読"], why:"設問根拠を文中から探す習慣付け。", tip:"本文に線を引いて根拠を見える化。"}
    ]
  }
};

/* ================== 高校ライブラリ ==================
   L1: 基礎 / L2: 標準 / L3: 難関 / L4: 最難関
   ★ 数学は要望通り刷新（“入門問題精講”、1対1/プラチカは除外）
   ★ 理社＆理科（物/化/生・日史/世史）は 高3/既卒 のときだけ選択可能
*/
const HS_LIB = {
  eng: {
    vocab: {
      L1:[{title:"『速読英単語 入門編』 or 『ターゲット1400』", tags:["語彙L1"], why:"基礎語彙の接触回数を確保。", tip:"1日30語→週210語。例文音読もセット。"}],
      L2:[{title:"『速読英単語 必修編』 or 『ターゲット1900』", tags:["語彙L2"], why:"共通〜準難関の要求語彙。", tip:"派生語・コロケーションまで。"}],
      L3:[{title:"『ターゲット1900（周回）』＋『速読英熟語』", tags:["語彙L3"], why:"長文直結の連語を補強。", tip:"週1で派生語クイズ。"}],
      L4:[{title:"『東大英単語熟語 鉄壁』", tags:["語彙L4"], why:"多義語/背景知識に対応。", tip:"章末まとめを口頭説明。"}],
    },
    grammar: {
      L1:[
        {title:"Input：『大岩のいちばんはじめの英文法』 or 『英文法POLARIS1』", tags:["文法L1"], why:"基礎を体系化。", tip:"15分インプット→要点口頭説明。"},
        {title:"Output：『Next Stage（基本〜基礎）』", tags:["演習"], why:"頻出文法/語法を即演習。", tip:"20問/回、根拠言語化。"}
      ],
      L2:[
        {title:"Input：『英文法POLARIS2』", tags:["文法L2"], why:"入試頻出を網羅。", tip:"弱点メモ→翌日復習。"},
        {title:"Output：『Vintage』 or 『Next Stage』", tags:["演習"], why:"語法・イディオムを精緻化。", tip:"誤答は翌日に短再演習。"}
      ],
      L3:[
        {title:"Input：『英文法POLARIS3（難関）』", tags:["文法L3"], why:"高難度ポイントを体系化。", tip:"“なぜその選択肢か”を言語化。"},
        {title:"Output：『英文法ファイナル（標準/難関）』", tags:["演習"], why:"仕上げ期に弱点露出。", tip:"通し演習→弱点のみ2周目。"}
      ],
      L4:[
        {title:"Input：弱点別ピンポイント資料（自作）", tags:["文法L4"], why:"穴のない網羅。", tip:"誤答ログを章立てノート化。"},
        {title:"Output：『英文法ファイナル 難関大』", tags:["演習"], why:"本番想定で最終調整。", tip:"時間厳守→根拠即再現。"}
      ],
    },
    interpret: {
      L1:[{title:"『入門 英文解釈の技術70』", tags:["解釈L1"], why:"SVOCと基本構文を可視化。", tip:"SVOCマーキング→1分要約。"}],
      L2:[{title:"『英文解釈の技術100』 or 『基礎英文問題精講』", tags:["解釈L2"], why:"構文把握の精度UP。", tip:"チャンク読み→根拠明示。"}],
      L3:[{title:"『英文解釈の技術100』", tags:["解釈L3"], why:"難構文の処理を鍛える。", tip:"音読→再構文→別解検討。"}],
      L4:[{title:"『ポレポレ英文読解』", tags:["解釈L4"], why:"抽象度の高い論理展開に対応。", tip:"段落関係を図解→要旨一行化。"}],
    },
    reading: {
      L1:[{title:"『やっておきたい英語長文300』 or 『関先生の英語長文1』", tags:["長文L1"], why:"基礎レベルの処理速度。", tip:"設問先読み→根拠下線。"}],
      L2:[{title:"『やっておきたい英語長文500』 or 『関先生の英語長文2』", tags:["長文L2"], why:"準難関の情報量に慣れる。", tip:"見直しは別解検討まで。"}],
      L3:[{title:"『やっておきたい英語長文700』 or 『関先生の英語長文3』", tags:["長文L3"], why:"難関の情報圧へ適応。", tip:"段落要約→根拠位置の再現。"}],
      L4:[{title:"『やっておきたい英語長文1000』 or『関先生の英語長文4』 or 過去問", tags:["長文L4"], why:"最難関の論旨展開と設問処理。", tip:"過去問は“見直しが本体”。"}],
    },
    listening: {
      L1:[{title:"『共通テスト実戦問題集（英語L）』", tags:["リスニング"], why:"頻出設問の型に慣れる。", tip:"ディクテーション→音読→シャドーイング。"}],
      L2:[{title:"『大学入試英語リスニング（実戦）』", tags:["リスニング"], why:"情報保持と選択肢処理。", tip:"1.0→1.25→1.5倍速。"}],
      L3:[{title:"実戦模試＋音源シャドーイング", tags:["リスニング"], why:"難素材で集中力を鍛える。", tip:"連結音を個別練習。"}],
      L4:[{title:"過去問セット演習", tags:["リスニング"], why:"最終調整。", tip:"転写→弱点音を潰す。"}],
    }
  },

  /* ★ 数学：刷新版 */
  math: {
    foundation: {
      L1:[{title:"『教科書』＋『白/黄チャート（例題）』", tags:["数I・A中心"], why:"例題の“型”で全範囲を通すのが最短。", tip:"解説を見て理解→閉じて再現。"}],
      L2:[{title:"『黄チャート（例題/重要例題）』", tags:["数I〜III基礎〜標準"], why:"重要例題までで十分戦える。", tip:"例題→類題★→章末テスト。"}],
      L3:[{title:"『黄チャート（重要例題周回）』＋弱点補填", tags:["難関向け土台"], why:"“呼び出し速度”を上げる。", tip:"1例題10分の反復。"}],
      L4:[{title:"『青/黄チャート徹底周回』", tags:["最難関土台"], why:"計算/典型を穴なく。", tip:"誤答は“同型3問”。"}],
    },
    basic: {
      L1:[{title:"『入門問題精講（数I・A/II・B）』", tags:["入試基礎"], why:"頻出基礎の型を網羅。", tip:"例題→基本→小テ。"}],
      L2:[{title:"『基礎問題精講』→弱点単元の追加周回", tags:["入試基礎→標準へ"], why:"基礎の骨格を固める。", tip:"1周目写経OK→2周ノーヒント。"}],
      L3:[{title:"『標準問題精講（総仕上げ）』＋過去問への橋渡し", tags:["難関前の最終基礎"], why:"典型の取りこぼし排除。", tip:"時間を測り通し演習。"}],
      L4:[{title:"『標準問題精講』厳選＋志望校過去問", tags:["基礎→実戦"], why:"弱点露出→本番形式で調整。", tip:"50分通し→解き直し2周。"}],
    },
    top: {
      L1:[{title:"（先取り注意）", tags:["注意"], why:"まずは基礎/標準を完成させる。", tip:"土台→入門精講の順を厳守。"}],
      L2:[{title:"（先取り注意）", tags:["注意"], why:"まずは基礎/標準を完成させる。", tip:"土台→入門精講の順を厳守。"}],
      L3:[{title:"『メジアン』＋志望校過去問", tags:["難関"], why:"典型外の思考力を鍛える。", tip:"1題を深く→骨を掴む。"}],
      L4:[{title:"『プラチカ』徹底＋過去問", tags:["頂点"], why:"最難関突破の王道（演習は過去問中心）。", tip:"弱点テーマをセット化して回す。"}],
    }
  },

  /* ★ 高3限定：理科・日本史・世界史 */
  phy: { core: {
    L1:[{title:"『物理のエッセンス（力学/波動/電磁気など）』+『宇宙1わかりやすい力学/電磁気学』", tags:["物理 基礎〜標準"], why:"典型現象の式と意味を接続。", tip:"公式→現象→単位→近似の順で口頭説明。"}],
    L2:[{title:"『物理のエッセンス（力学/波動/電磁気など）』", tags:["物理 標準"], why:"頻出良問で得点の柱を作る。", tip:"ベクトル図→エネルギー保存を徹底。"}],
    L3:[{title:"『良問の風』", tags:["物理 難関"], why:"合成力/洞察を鍛える。", tip:"立式の理由を言語化→別法検討。"}],
    L4:[{title:"名問の森 物理（厳選）+ 過去問（志望大）", tags:["物理 最難関"], why:"出題校の癖対応。", tip:"グラフ化・次元解析で妥当性確認。"}],
  }},
  chem: { core: {
    L1:[{title:"『鎌田の講義（理論/無機/有機）』+『宇宙1わかりやすい高校化学』", tags:["化学 基礎"], why:"用語と計算の橋渡し。", tip:"モル→濃度→反応式を図式化。"}],
    L2:[{title:"『鎌田の講義（理論/無機/有機）』", tags:["化学 標準"], why:"頻出テーマの網羅。", tip:"反応機構の“矢印”を自分で描く。"}],
    L3:[{title:"『重要問題集（厳選）』＋分野別補強", tags:["化学 難関"], why:"有機/平衡/電池の深掘り。", tip:"グラフの意味を言語化。"}],
    L4:[{title:"過去問（志望大）＋演習ノート", tags:["化学 最難関"], why:"出題校の傾向対応。", tip:"誤答原因を“知識/計算/読解”に分類。"}],
  }},
  bio: { core: {
    L1:[{title:"『生物基礎問題精講』", tags:["生物 基礎"], why:"用語→因果の流れを整理。", tip:"図表→因果の1行要約。"}],
    L2:[{title:"『生物 標準問題精講』", tags:["生物 標準"], why:"図表読み取りと記述の精度UP。", tip:"“なぜそうなる？”を必ず書く。"}],
    L3:[{title:"『重要問題集 生物』", tags:["生物 難関"], why:"頻出テーマを深く。", tip:"計数処理/実験考察に慣れる。"}],
    L4:[{title:"過去問（志望大）", tags:["生物 最難関"], why:"設問様式への最終適応。", tip:"図の再現→仮説→検証を文章化。"}],
  }},
  jh: { core: {
    L1:[{title:"『日本史B 講義の実況中継（通史）』", tags:["日本史 基礎"], why:"通史の“流れ”を掴む。", tip:"出来事→原因→結果を三段で。"}],
    L2:[{title:"『詳説日本史研究（山川）』＋ 一問一答", tags:["日本史 標準"], why:"語句と流れの接続。", tip:"章ごとに年表ミニ作成。"}],
    L3:[{title:"『日本史問題集（過去問系）』+ 『実力をつける日本史１００題』", tags:["日本史 難関"], why:"資料/論述に対応。", tip:"史料の根拠語を線引き。"}],
    L4:[{title:"志望大の過去問（論述含む）+ 『実力をつける日本史１００題』", tags:["日本史 最難関"], why:"設問傾向に最適化。", tip:"論述は骨子→段落→推敲。"}],
  }},
  wh: { core: {
    L1:[{title:"『世界史B 講義の実況中継（通史）』", tags:["世界史 基礎"], why:"文明→国家→交流の流れ。", tip:"地域別→相互作用で整理。"}],
    L2:[{title:"『詳説世界史研究（山川）』＋ 一問一答", tags:["世界史 標準"], why:"語句と因果の接続。", tip:"地図と年表を併用。"}],
    L3:[{title:"『世界史問題集（過去問系）』+ 『実力をつける世界史１００題』", tags:["世界史 難関"], why:"資料・論述への適応。", tip:"固有名詞の機能を説明。"}],
    L4:[{title:"志望大の過去問（論述含む） + 『実力をつける世界史１００題』", tags:["世界史 最難関"], why:"設問傾向に最適化。", tip:"出題テーマ別にノート化。"}],
  }},
};

/* ========== 状態 & UI参照（DOMContentLoaded後に初期化） ========== */
const $ = s => document.querySelector(s);
let elStage, elBar, elCrumbs;
const state = { stack:[], current:decisionTree.start, lastResults:[], memo:{} };

/* === 学年ユーティリティ === */
function isJHS(grade){ return ["中1","中2","中3"].includes(grade); }
function isHS(grade){ return grade && grade.startsWith("高"); }
function isHS3(grade){ return grade==="高3/既卒"; }
function isHS1or2(grade){ return grade==="高1" || grade==="高2"; }

/* === 進捗バー / パンくず === */
function setProgress(){
  if(!elBar) return;
  const pct=Math.min(100,Math.round(((state.stack.length+1)/7)*100));
  elBar.style.width=pct+"%";
}
function renderCrumbs(){
  if(!elCrumbs) return;
  elCrumbs.innerHTML="";
  state.stack.forEach(s=>{
    const d=document.createElement("span");
    d.className="crumb";
    d.textContent=s.label;
    elCrumbs.appendChild(d);
  });
}

/* === ノード取得 === */
function findNode(id){ return decisionTree.nodes.find(n=>n.id===id); }

/* === レベル判定 & 学年キャップ === */
function mapLevel(lbl){
  if (!lbl) return "L1";
  if (lbl.includes("最難関")) return "L4";
  if (lbl.includes("標準")) return "L2";
  if (lbl.includes("難関") && !lbl.includes("準難関")) return "L3";
  return "L1";
}
function capLevelByGrade(level, grade){
  // 高1・高2は L2 まで（表示も結果もキャップ）
  if (isHS1or2(grade)) return (level==="L3"||level==="L4") ? "L2" : level;
  return level;
}

/* === 画面描画 === */
function draw(){
  const node=findNode(state.current);
  if(!node || !elStage){
    if(elStage) elStage.innerHTML=`<div class="empty">分岐が見つかりません。はじめからやり直してください。</div>`;
    return;
  }

  let opts=[...(node.options||[])];
  const grade = state.memo.grade;

  /* --- 表示制御: 中学生の英語長文 --- */
  if (node.id==="jhs-eng-reading" && isJHS(grade)) {
    if (grade==="中1" || grade==="中2") {
      // 中1・中2は「基礎」だけを表示
      opts = opts.filter(o=>o.label==="基礎");
    } // 中3は全表示
  }

  /* --- 表示制御: 中学生の数学 --- */
  if (node.id==="jhs-math-area" && isJHS(grade)) {
    opts = opts.filter(o=>{
      if (o.label==="計算を身に付けたい" || o.label==="教科書レベルをできるようにしたい") return true;
      if (o.label==="基礎的な入試対策") return grade==="中3";
      if (o.label==="標準的な入試対策") return grade==="中3"; // 中3は標準的な入試対策もOK
      return false;
    });
  }

  /* --- 表示制御: 高1・高2は受験レベルの選択肢を基礎/標準のみ --- */
  if (node.id==="hs-level" && isHS1or2(grade)) {
    opts = opts.filter(o => /基礎|標準/.test(o.label));
  }

  /* --- 表示制御: 高1・高2は理社/理科メニューを非表示（高3/既卒のみ表示） --- */
  if (node.id==="hs-subject" && isHS(grade) && !isHS3(grade)) {
    const allowed = ["英語","数学","国語"];
    opts = opts.filter(o => allowed.includes(o.label));
  }

  elStage.innerHTML = `
    <div class="q">${node.prompt}</div>
    <div class="grid">
      ${opts.map((o,i)=>`<button class="opt" data-i="${i}">${o.label}</button>`).join("")}
    </div>
  `;

  // クリック
  elStage.querySelectorAll(".opt").forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
      const opt = opts[i];

      // メモ
      if(state.stack.length===0){ state.memo.grade = opt.label; }
      if(node.id==="hs-level"){ state.memo.hsLevel = opt.label; }
      if(node.id==="hs-subject"){ state.memo.hsSubject = opt.label; }

      // 安全網：中1・中2の英語長文は常に「基礎」に強制
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

/* === 中学生結果描画 === */
function renderResults(key){
  const cards = (decisionTree.results[key]||[]);
  state.lastResults = cards;
  if(!elStage){
    console.warn("Missing #stage element.");
    return;
  }
  elStage.innerHTML = cards.length ? `
    <div class="results">${cards.map(cardHTML).join("")}</div>
    <div class="copywrap"><div class="copy" id="copyText">${plainText(cards)}</div></div>
  ` : `<div class="empty">この条件の教材は未登録です。decisionTree.results['${key}'] を追加してください。</div>`;
  setProgress(); renderCrumbs();
}

/* === 高校結果描画（学年キャップ＆自動ダウングレード） === */
function renderHsResults(subject, area){
  const rawLevel = mapLevel(state.memo.hsLevel||"基礎");
  const grade = state.memo.grade||"高1";
  const level = capLevelByGrade(rawLevel, grade);

  // 高1・高2で数学の「最難関向け」を選んだら safer に（basic へ寄せる）
  let actualArea = area;
  if (isHS1or2(grade)) {
    if (subject==="math" && area==="top") actualArea="basic";
  }

  const libRoot = HS_LIB[subject]?.[actualArea] || {};
  const lib = libRoot[level] || [];
  const cards = lib.map(adaptByGrade(grade, subject, actualArea, level));

  state.lastResults = cards;
  if(!elStage){
    console.warn("Missing #stage element.");
    return;
  }
  const path = state.stack.map(s=>s.label).join(" > ");
  const cappedNote = (rawLevel!==level || area!==actualArea) && isHS1or2(grade)
    ? "\n※学年に合わせて推奨レベル/分野を調整しています（高1・高2はL2まで）。"
    : "";

  elStage.innerHTML = `
    <div class="results">${cards.map(cardHTML).join("")}</div>
    <div class="copywrap"><div class="copy" id="copyText">【条件】${path}${cappedNote}\n${plainList(cards)}</div></div>
  `;
  setProgress(); renderCrumbs();
}

/* === 学年に応じたカード加工 === */
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

/* === カードHTML / テキスト出力 === */
function cardHTML(c){
  return `
    <div class="card">
      <div>${(c.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <h3>${c.title}</h3>
      ${c.link?`<div class="meta"><a href="${c.link}" target="_blank" rel="noopener">参考リンク</a></div>`:""}
      ${c.why?`<div class="why"><b>なぜ？</b> ${c.why}</div>`:""}
      ${c.tip?`<div class="tip"><b>使い方のコツ</b>：${c.tip}</div>`:""}
    </div>
  `;
}
function plainText(items){ return items.map((c,i)=>`[${i+1}] ${c.title}\n- タグ: ${(c.tags||[]).join(", ")}\n- なぜ: ${c.why||""}\n- コツ: ${c.tip||""}`).join("\n\n"); }
function plainList(items){ return plainText(items); }

/* ===== 戻る/やり直し/コピー ===== */
function back(){
  if(state.stack.length===0) return;
  state.stack.pop();
  const replay=[...state.stack];
  state.stack=[]; state.current=decisionTree.start; state.memo={};
  for(const step of replay){
    const node=findNode(state.current); if(!node) break;
    let opt=(node.options.find(o=>o.label===step.label) || node.options[0]);
    if(state.stack.length===0){ state.memo.grade = opt.label; }
    if(node.id==="hs-level"){ state.memo.hsLevel = opt.label; }
    if(node.id==="hs-subject"){ state.memo.hsSubject = opt.label; }
    state.stack.push({nodeId:node.id,label:opt.label});
    if(opt.next) state.current=opt.next;
    else if(opt.toResult){
      if(opt.toResult.startsWith("HS/")){ renderHsResults(...opt.toResult.split("/").slice(1)); return; }
      else { renderResults(opt.toResult); return; }
    }
  }
  draw();
}
function restartFromGrade(){
  const first = state.stack[0];
  state.stack = first?[first]:[];
  state.memo = first?{grade:first.label}:{};
  state.current = first? ((first.label.startsWith("高"))?"hs-level":"subject") : decisionTree.start;
  state.lastResults = [];
  draw();
}
function resetAll(){ state.stack=[]; state.current=decisionTree.start; state.lastResults=[]; state.memo={}; draw(); }
async function copyResults(){
  const path = state.stack.map(s=>s.label).join(" > ");
  const text = `【条件】${path}\n` + plainText(state.lastResults);
  try{
    await navigator.clipboard.writeText(text);
    this.textContent="コピーしました！";
    setTimeout(()=>this.textContent="結果をコピー",1600);
  }catch(e){
    const ta=document.createElement("textarea");
    ta.value=text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); document.body.removeChild(ta);
    this.textContent="コピーしました！";
    setTimeout(()=>this.textContent="結果をコピー",1600);
  }
}

/* === 初期化（DOM構築後にUI要素をひも付け） === */
function initUI(){
  elStage = $("#stage");
  elBar = $("#bar");
  elCrumbs = $("#crumbs");

  $("#backBtn")?.addEventListener("click", back);
  $("#shareBtn")?.addEventListener("click", copyResults);
  $("#restartBtn")?.addEventListener("click", restartFromGrade);
  $("#resetTop")?.addEventListener("click", resetAll);

  draw();
}
if (document.readyState !== "loading") initUI();
else document.addEventListener("DOMContentLoaded", initUI);
