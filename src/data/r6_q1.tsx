import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q1Data: MajorQuestionData = {
  id: "q1",
  title: "令和6年 大問1：基本の小問集合",
  subs: [
    {
      id: "1",
      title: "(1) 正負の数の計算",
      knowledge: ["正負の数"],
      originalText: <p><TextWithMath text="$(-4) \times (-3)$" /> を計算しなさい。</p>,
      steps: [
        {
          id: 1, title: '式の確認',
          content: <p>まずは式全体を見てみましょう。マイナスの数とマイナスの数のかけ算です。</p>,
          quiz: { type: 'choice', question: 'かけ算を表す記号はどれですか？', options: ['+', '-', '×', '÷'], correctAnswer: '×', explanation: <p>×はかけ算を表します。</p> }
        },
        {
          id: 2, title: '符号のルール確認1',
          content: <p>正負の数のかけ算には、符号に関する大切なルールがあります。</p>,
          quiz: { type: 'choice', question: '「プラス」と「プラス」をかけると符号はどうなりますか？', options: ['プラス', 'マイナス'], correctAnswer: 'プラス', explanation: <p>正の数同士のかけ算は正の数になります。</p> }
        },
        {
          id: 3, title: '符号のルール確認2',
          content: <p>では、違う符号同士の場合はどうでしょう。</p>,
          quiz: { type: 'choice', question: '「プラス」と「マイナス」をかけると符号はどうなりますか？', options: ['プラス', 'マイナス'], correctAnswer: 'マイナス', explanation: <p>異なる符号同士のかけ算はマイナスになります。</p> }
        },
        {
          id: 4, title: '今回の符号の決定',
          content: <p>いよいよ本題です。今回は(-4)と(-3)のかけ算ですね。</p>,
          quiz: { type: 'choice', question: '「マイナス」と「マイナス」をかけると符号はどうなりますか？', options: ['プラス', 'マイナス'], correctAnswer: 'プラス', explanation: <p>マイナス同士のかけ算はプラスになります。</p> }
        },
        {
          id: 5, title: '絶対値の計算と答え',
          content: <p>符号がプラスになることが分かったら、あとは数字（絶対値）のかけ算をするだけです。</p>,
          quiz: { type: 'choice', question: '4 × 3 を計算して、最終的な答えを求めなさい。', options: ['-12', '12', '-7', '7'], correctAnswer: '12', explanation: <p>符号はプラス、絶対値のかけ算は 4 × 3 = 12 なので、答えは 12 です。</p> }
        }
      ]
    },
    {
      id: "2",
      title: "(2) 平方根の計算",
      knowledge: ["平方根"],
      originalText: <p><TextWithMath text="$\sqrt{28} + \sqrt{7}$" /> を計算しなさい。</p>,
      steps: [
        {
          id: 1, title: '計算の方針',
          content: <p>ルートの足し算は、ルートの中の数字が同じでないと計算できません。</p>,
          quiz: { type: 'choice', question: '現在、ルートの中の数字は同じですか？', options: ['同じ', '違う'], correctAnswer: '違う', explanation: <p>28と7なので違います。</p> }
        },
        {
          id: 2, title: '素因数分解',
          content: <p>ルートの中の数字を揃えるために、大きい方の 28 を素因数分解してみましょう。</p>,
          quiz: { type: 'choice', question: '28を素因数分解するとどうなりますか？', options: ['2 × 14', '2^2 × 7', '4 × 7'], correctAnswer: '2^2 × 7', explanation: <p>28 = 2 × 2 × 7 = 2² × 7 です。</p> }
        },
        {
          id: 3, title: 'ルートの簡単化',
          content: <p>素因数分解の結果を使って、<TextWithMath text="$\sqrt{28}$" /> を簡単にします。ルートの中に2乗がある場合は外に出せます。</p>,
          quiz: { type: 'choice', question: '√28 を a√b の形にしなさい。', options: ['2√7', '4√7', '7√2'], correctAnswer: '2√7', explanation: <p>√(2² × 7) なので、2を外に出して 2√7 になります。</p> }
        },
        {
          id: 4, title: '式の書き換え',
          content: <p><TextWithMath text="$\sqrt{28}$" /> が <TextWithMath text="$2\sqrt{7}$" /> になりました。元の式に代入してみましょう。</p>,
          quiz: { type: 'choice', question: '元の式 √28 + √7 はどう書き換えられますか？', options: ['2√7 + 7', '2√7 + √7', '√7 + √7'], correctAnswer: '2√7 + √7', explanation: <p>√28の部分を2√7に置き換えます。</p> }
        },
        {
          id: 5, title: '文字式の要領で計算',
          content: <p>ルートの中身がそろいました！ <TextWithMath text="$\sqrt{7}$" /> を文字 <TextWithMath text="$x$" /> のように扱って計算します。</p>,
          quiz: { type: 'choice', question: '2x + x を計算するように、2√7 + √7 を計算しなさい。', options: ['2√14', '3√7', '2√7'], correctAnswer: '3√7', explanation: <p>2個の√7と1個の√7を足すので、合計3個の√7、つまり 3√7 になります。</p> }
        }
      ]
    },
    {
      id: "3",
      title: "(3) 絶対値",
      knowledge: ["絶対値"],
      originalText: <p>絶対値が3より小さい整数は全部で何個か。</p>,
      steps: [
        {
          id: 1, title: '絶対値の意味',
          content: <p>まずは「絶対値」という言葉の意味を確認しましょう。</p>,
          quiz: { type: 'choice', question: '絶対値とは、数直線上でどこからの距離のことですか？', options: ['1からの距離', '0からの距離', 'その数自身'], correctAnswer: '0からの距離', explanation: <p>絶対値は、原点（0）からの距離を表します。</p> }
        },
        {
          id: 2, title: '「より小さい」の定義',
          content: <p>問題文にある「3より小さい」という表現について考えます。</p>,
          quiz: { type: 'choice', question: '「3より小さい」場合、3そのものは含まれますか？', options: ['含まれる（3以下）', '含まれない（3未満）'], correctAnswer: '含まれない（3未満）', explanation: <p>「より小さい」は「未満」と同じで、その数は含みません。不等号で表すと ＜ 3 です。</p> }
        },
        {
          id: 3, title: '正の整数の確認',
          content: <p>0から正の方向（右側）へ距離が3より小さい整数を探します。</p>,
          quiz: { type: 'choice', question: '絶対値が3より小さい正の整数はどれですか？', options: ['1, 2', '1, 2, 3', '0, 1, 2'], correctAnswer: '1, 2', explanation: <p>0からの距離が1、2となる「1」と「2」が該当します。</p> }
        },
        {
          id: 4, title: '負の整数の確認',
          content: <p>0から負の方向（左側）へ距離が3より小さい整数も探します。</p>,
          quiz: { type: 'choice', question: '絶対値が3より小さい負の整数はどれですか？', options: ['-1, -2', '-1, -2, -3', '-3, -4'], correctAnswer: '-1, -2', explanation: <p>0からの距離が1、2となる「-1」と「-2」が該当します。</p> }
        },
        {
          id: 5, title: '0の存在',
          content: <p>正の整数と負の整数は見つかりました。あとは特別な数について考えます。</p>,
          quiz: { type: 'choice', question: '「0」の絶対値はいくつですか？', options: ['0', '1', 'ない'], correctAnswer: '0', explanation: <p>0の原点からの距離は0なので、絶対値は0です。これは3より小さいので条件を満たします。</p> }
        },
        {
          id: 6, title: 'すべて数え上げる',
          content: <p>条件を満たす整数がすべて出揃いました。</p>,
          quiz: { type: 'choice', question: '条件を満たす整数は「1, 2, -1, -2, 0」です。全部で何個ですか？', options: ['3個', '4個', '5個', '6個'], correctAnswer: '5個', explanation: <p>-2, -1, 0, 1, 2 の合計5個です。0を数え忘れないように注意しましょう！</p> }
        }
      ]
    },
    {
      id: "4",
      title: "(4) 2次方程式",
      knowledge: ["2次方程式", "因数分解"],
      originalText: <p>2次方程式 <TextWithMath text="$x^2 + 5x + 6 = 0$" /> を解きなさい。</p>,
      steps: [
        {
          id: 1, title: '解き方の方針',
          content: <p>2次方程式を解くにはいくつか方法がありますが、式の形を見て一番簡単な方法を選びましょう。</p>,
          quiz: { type: 'choice', question: 'x² + 5x + 6 = 0 を解くのに、最も適した方法はどれですか？', options: ['解の公式を使う', '平方完成を使う', '因数分解を使う'], correctAnswer: '因数分解を使う', explanation: <p>左辺が因数分解できる形なので、因数分解を使うのが一番早くてミスが少ないです。</p> }
        },
        {
          id: 2, title: '因数分解の準備',
          content: <p>左辺の <TextWithMath text="$x^2 + 5x + 6$" /> を因数分解するために、2つの数字を探します。</p>,
          quiz: { type: 'choice', question: '探すべき2つの数字の条件として正しいものはどれですか？', options: ['足して6、かけて5', '足して5、かけて6', '引いて5、かけて6'], correctAnswer: '足して5、かけて6', explanation: <p>xの係数「5」が和、定数項「6」が積になるような2つの数を探します。</p> }
        },
        {
          id: 3, title: '積が6になるペア',
          content: <p>まずは「かけて6になる」整数のペアを考えます。符号も考慮しましょう。</p>,
          quiz: { type: 'choice', question: 'かけて6になるペアの組み合わせとして、考えられるのはどれですか？', options: ['1と6, 2と3', '1と5, 2と4', '1と6, 2と3, -1と-6, -2と-3'], correctAnswer: '1と6, 2と3, -1と-6, -2と-3', explanation: <p>正の数同士、負の数同士の両方のペアを考える必要があります。</p> }
        },
        {
          id: 4, title: '和が5になるペア',
          content: <p>先ほど挙げたペアの中から、「足して5になる」ものを見つけます。</p>,
          quiz: { type: 'choice', question: '足して5になるペアはどれですか？', options: ['1と6', '2と3', '-2と-3'], correctAnswer: '2と3', explanation: <p>2 + 3 = 5 なので、「2」と「3」のペアが正解です。</p> }
        },
        {
          id: 5, title: '因数分解の実行',
          content: <p>見つけた「2」と「3」を使って、左辺を因数分解した形に書き換えます。</p>,
          quiz: { type: 'choice', question: 'x² + 5x + 6 を因数分解した式はどれですか？', options: ['(x + 2)(x + 3)', '(x - 2)(x - 3)', '(x + 1)(x + 6)'], correctAnswer: '(x + 2)(x + 3)', explanation: <p>見つけた2と3をカッコの中に入れて、(x + 2)(x + 3) となります。</p> }
        },
        {
          id: 6, title: '方程式の解',
          content: <p>因数分解によって方程式は <TextWithMath text="$(x + 2)(x + 3) = 0$" /> となりました。</p>,
          quiz: { type: 'choice', question: 'この方程式の解はどうなりますか？', options: ['x = 2, 3', 'x = -2, -3', 'x = -2, 3'], correctAnswer: 'x = -2, -3', explanation: <p>かけて0になるためには、x+2=0 または x+3=0 になればよいので、解は符号が逆になって x = -2, -3 となります。</p> }
        }
      ]
    },
    {
      id: "5",
      title: "(5) 反比例のグラフ",
      knowledge: ["反比例"],
      originalText: <p>関数 <TextWithMath text="$y = a/x$" /> のグラフが点(2, -3)を通るとき、aの値を求めなさい。</p>,
      steps: [
        {
          id: 1, title: '反比例の式の意味',
          content: <p>反比例の式 <TextWithMath text="$y = a/x$" /> において、a は「比例定数」と呼ばれます。</p>,
          quiz: { type: 'choice', question: 'この式を変形して、a を求める式にするとどうなりますか？', options: ['a = x / y', 'a = x + y', 'a = xy'], correctAnswer: 'a = xy', explanation: <p>両辺にxをかけると、a = xy となります。反比例では「xとyをかけると常に一定（a）になる」という性質があります。</p> }
        },
        {
          id: 2, title: '座標の意味',
          content: <p>グラフが「点(2, -3)を通る」という情報の意味を考えましょう。</p>,
          quiz: { type: 'choice', question: '点(2, -3)という座標は、xとyがそれぞれどのような値であることを示していますか？', options: ['x = -3, y = 2', 'x = 2, y = -3', 'x = 2, y = 3'], correctAnswer: 'x = 2, y = -3', explanation: <p>座標は常に (x, y) の順番で書かれます。左がx、右がyです。</p> }
        },
        {
          id: 3, title: '代入の準備',
          content: <p>先ほど確認した式と値を使って計算します。</p>,
          quiz: { type: 'choice', question: 'aを求めるための計算式として正しいものはどれですか？', options: ['a = 2 + (-3)', 'a = 2 / (-3)', 'a = 2 × (-3)'], correctAnswer: 'a = 2 × (-3)', explanation: <p>a = xy に x=2, y=-3 を代入するので、a = 2 × (-3) となります。</p> }
        },
        {
          id: 4, title: '符号の決定',
          content: <p>かけ算の計算をします。まずは符号を決めましょう。</p>,
          quiz: { type: 'choice', question: '「プラス(2)」と「マイナス(-3)」のかけ算なので、符号はどうなりますか？', options: ['プラス', 'マイナス'], correctAnswer: 'マイナス', explanation: <p>違う符号同士のかけ算なので、答えはマイナスになります。</p> }
        },
        {
          id: 5, title: '最終的な計算',
          content: <p>符号が決まったので、あとは数字のかけ算です。</p>,
          quiz: { type: 'choice', question: '2 × 3 を計算して、aの値を求めなさい。', options: ['-6', '-5', '-1'], correctAnswer: '-6', explanation: <p>2 × 3 = 6 で、符号はマイナスなので a = -6 となります。</p> }
        }
      ]
    },
    {
      id: "6",
      title: "(6) おうぎ形の弧の長さ",
      knowledge: ["おうぎ形", "円"],
      originalText: <p>中心角が40°のおうぎ形の弧の長さは、同じ半径の円の周の長さの何倍か求めなさい。</p>,
      steps: [
        {
          id: 1, title: 'おうぎ形と円の関係',
          content: <p>おうぎ形は、円をピザのように切り分けた形をしています。</p>,
          quiz: { type: 'choice', question: '円1周の中心角は何度ですか？', options: ['180°', '360°', '400°'], correctAnswer: '360°', explanation: <p>円1周はぐるっと回って360°です。</p> }
        },
        {
          id: 2, title: '割合の考え方',
          content: <p>おうぎ形の弧の長さは、中心角の大きさに比例します。</p>,
          quiz: { type: 'choice', question: '中心角が180°（半円）の場合、弧の長さは円周の何倍になりますか？', options: ['1/2 倍', '1/3 倍', '2倍'], correctAnswer: '1/2 倍', explanation: <p>180°は360°の半分なので、弧の長さも半分（1/2倍）になります。</p> }
        },
        {
          id: 3, title: '今回の中心角',
          content: <p>今回は中心角が40°のおうぎ形について考えます。</p>,
          quiz: { type: 'choice', question: '円1周(360°)に対して、このおうぎ形(40°)が占める割合を求める計算式はどれですか？', options: ['360 ÷ 40', '40 ÷ 360', '360 × 40'], correctAnswer: '40 ÷ 360', explanation: <p>「全体(360)のうちのどれだけ(40)か」なので、40/360（40 ÷ 360）を計算します。</p> }
        },
        {
          id: 4, title: '分数の約分1',
          content: <p>割合を分数で表すと <TextWithMath text="$\frac{40}{360}$" /> になります。これを約分していきましょう。</p>,
          quiz: { type: 'choice', question: 'まず、分母と分子を10で割る（0を1つ消す）とどうなりますか？', options: ['4/36', '4/360', '40/36'], correctAnswer: '4/36', explanation: <p>両方の0を取ると 4/36 になります。</p> }
        },
        {
          id: 5, title: '分数の約分2と答え',
          content: <p>さらに約分を進めて、最も簡単な分数にしましょう。</p>,
          quiz: { type: 'choice', question: '4/36 を約分すると、最終的な答えは何倍になりますか？', options: ['1/6 倍', '1/8 倍', '1/9 倍'], correctAnswer: '1/9 倍', explanation: <p>分母と分子を4で割ると 1/9 となります。したがって、弧の長さは円周の 1/9倍 です。</p> }
        }
      ]
    },
    {
      id: "7",
      title: "(7) 球の体積",
      knowledge: ["球", "体積"],
      originalText: <p>半径が6cmの球の体積を求めなさい。（円周率はπとする）</p>,
      steps: [
        {
          id: 1, title: '球の体積の公式',
          content: <p>まずは球の体積を求める公式を思い出す必要があります。「身の上に心配あるさ」などの語呂合わせで覚えることが多いです。</p>,
          quiz: { type: 'choice', question: '半径 r の球の体積 V を求める正しい公式はどれですか？', options: ['V = 4πr²', 'V = 4/3 πr²', 'V = 4/3 πr³'], correctAnswer: 'V = 4/3 πr³', explanation: <p>体積の公式は V = 4/3 πr³ です。ちなみに 4πr² は表面積の公式です。</p> }
        },
        {
          id: 2, title: '半径の確認',
          content: <p>公式に代入する数字を確認します。</p>,
          quiz: { type: 'choice', question: '今回の問題で、半径 r にあたる数字はいくつですか？', options: ['3', '6', '12'], correctAnswer: '6', explanation: <p>問題文に「半径が6cm」とあるので、r = 6 です。</p> }
        },
        {
          id: 3, title: '公式への代入',
          content: <p>r = 6 を公式 <TextWithMath text="$V = \frac{4}{3}\pi r^3$" /> に代入してみましょう。</p>,
          quiz: { type: 'choice', question: '代入した式として正しいものはどれですか？', options: ['V = 4/3 × π × 6', 'V = 4/3 × π × 6²', 'V = 4/3 × π × 6³'], correctAnswer: 'V = 4/3 × π × 6³', explanation: <p>rの3乗なので、6³ になります。</p> }
        },
        {
          id: 4, title: '累乗の計算',
          content: <p>次に、<TextWithMath text="$6^3$" /> の部分を計算します。</p>,
          quiz: { type: 'choice', question: '6³（6を3回かける）の計算結果はいくつですか？', options: ['18', '36', '216'], correctAnswer: '216', explanation: <p>6 × 6 × 6 = 36 × 6 = 216 です。</p> }
        },
        {
          id: 5, title: '分数の計算1',
          content: <p>式は <TextWithMath text="$V = \frac{4}{3} \times \pi \times 216$" /> となりました。計算を楽にするために、先に約分をしましょう。</p>,
          quiz: { type: 'choice', question: '216 を 3 で割るといくつになりますか？', options: ['72', '74', '76'], correctAnswer: '72', explanation: <p>216 ÷ 3 = 72 です。これで式は 4 × π × 72 となります。</p> }
        },
        {
          id: 6, title: '最後の計算',
          content: <p>残った数字をかけ合わせて、最終的な体積を求めます。</p>,
          quiz: { type: 'choice', question: '4 × 72 を計算して、答えを求めなさい。', options: ['144π cm³', '288π cm³', '324π cm³'], correctAnswer: '288π cm³', explanation: <p>4 × 72 = 288。これにπをつけて 288π cm³ が正解です。</p> }
        }
      ]
    },
    {
      id: "8",
      title: "(8) 度数分布表と相対度数",
      knowledge: ["資料の活用", "度数分布表"],
      originalText: <p>生徒20人の記録の度数分布表がある。度数が最も多い階級の相対度数を求めなさい。<br/>[40〜55:1人, 55〜70:2人, 70〜85:6人, 85〜100:7人, 100〜115:4人]</p>,
      steps: [
        {
          id: 1, title: '相対度数とは',
          content: <p>「相対度数」という言葉の意味を確認しましょう。</p>,
          quiz: { type: 'choice', question: '相対度数とは、全体に対する何を表す値ですか？', options: ['平均値', '割合', '中央値'], correctAnswer: '割合', explanation: <p>相対度数は、その階級の度数が全体の中でどれくらいの割合を占めているかを表します。</p> }
        },
        {
          id: 2, title: '相対度数の求め方',
          content: <p>相対度数を計算するための公式を確認します。</p>,
          quiz: { type: 'choice', question: '相対度数を求める正しい計算式はどれですか？', options: ['全体の度数 ÷ その階級の度数', 'その階級の度数 ÷ 全体の度数', 'その階級の度数 × 全体の度数'], correctAnswer: 'その階級の度数 ÷ 全体の度数', explanation: <p>「その階級の度数 ÷ 全体の度数（合計）」で求められます。</p> }
        },
        {
          id: 3, title: '全体の度数の確認',
          content: <p>計算に必要な数字を問題文から見つけましょう。</p>,
          quiz: { type: 'choice', question: '今回の問題で、全体の度数（全員の人数）は何人ですか？', options: ['10人', '15人', '20人'], correctAnswer: '20人', explanation: <p>問題文の最初に「生徒20人」と書かれています。</p> }
        },
        {
          id: 4, title: '対象となる階級の特定',
          content: <p>求めるのは「度数が最も多い階級」の相対度数です。</p>,
          quiz: { type: 'choice', question: '度数が最も多い階級の人数（度数）は何人ですか？', options: ['4人', '6人', '7人'], correctAnswer: '7人', explanation: <p>85〜100の階級の「7人」が最も多いです。</p> }
        },
        {
          id: 5, title: '計算式の作成',
          content: <p>必要な数字が揃ったので、相対度数を求める式を作ります。</p>,
          quiz: { type: 'choice', question: '相対度数を求めるための式として正しいものはどれですか？', options: ['20 ÷ 7', '7 ÷ 20', '7 × 20'], correctAnswer: '7 ÷ 20', explanation: <p>（その階級の度数）÷（全体の度数）なので、7 ÷ 20 となります。</p> }
        },
        {
          id: 6, title: '小数の計算',
          content: <p>最後に割り算を実行して、相対度数を小数で表します。</p>,
          quiz: { type: 'choice', question: '7 ÷ 20 を計算した結果はいくつですか？', options: ['0.3', '0.35', '0.4'], correctAnswer: '0.35', explanation: <p>7 ÷ 20 = 70 ÷ 200 = 35 ÷ 100 = 0.35 となります。相対度数は通常、小数で表します。</p> }
        }
      ]
    }
  ]
};
