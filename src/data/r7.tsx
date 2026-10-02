import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export type SubQuestionData = {
  id: string; // e.g. "1", "2-(1)"
  title: string;
  knowledge: string[];
  originalText: React.ReactNode;
  steps: Step[];
};

export type MajorQuestionData = {
  id: string; // e.g. "q1"
  title: string;
  subs: SubQuestionData[];
};

export const r7Data: Record<string, MajorQuestionData> = {
  "q1": {
    id: "q1",
    title: "令和7年 大問1：基本の小問集合",
    subs: [
      {
        id: "1",
        title: "(1) 正負の数の計算",
        knowledge: ["正負の数"],
        originalText: <p><TextWithMath text="$-4-3$" /> を計算しなさい。</p>,
        steps: [
          {
            id: 1, title: '正負の数の計算',
            content: <p>一番基本となる計算問題です。</p>,
            quiz: { type: 'choice', question: '-4 - 3 を計算しなさい。', options: ['-7', '7', '-1'], correctAnswer: '-7', explanation: <p><TextWithMath text="$-4 - 3 = -7$" /> です。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 素因数分解",
        knowledge: ["素因数分解"],
        originalText: <p>2025を素因数分解すると <TextWithMath text="$3^ア \times 5^イ$" /> と表せる。ア、イを求めなさい。</p>,
        steps: [
          {
            id: 1, title: '素因数分解',
            content: <p>2025を素数で割っていきます。</p>,
            quiz: { type: 'choice', question: '2025を素因数分解すると？', options: ['3² × 5⁴', '3⁴ × 5²', '3³ × 5²'], correctAnswer: '3⁴ × 5²', explanation: <p><TextWithMath text="$2025 = 3^4 \times 5^2$" /> です。（ア=4, イ=2）</p> }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 因数分解",
        knowledge: ["因数分解"],
        originalText: <p><TextWithMath text="$x^2 + 2x - 15$" /> を因数分解しなさい。</p>,
        steps: [
          {
            id: 1, title: '因数分解',
            content: <p>かけて -15、足して +2 になる2つの数字を探します。</p>,
            quiz: { type: 'choice', question: 'x² + 2x - 15 を因数分解しなさい。', options: ['(x + 5)(x - 3)', '(x - 5)(x + 3)', '(x + 15)(x - 1)'], correctAnswer: '(x + 5)(x - 3)', explanation: <p><TextWithMath text="$(x + 5)(x - 3)$" /> です。</p> }
          }
        ]
      },
      {
        id: "4",
        title: "(4) 四分位範囲",
        knowledge: ["四分位範囲"],
        originalText: <p>データ（19, 20, 7, 16, 24, 11）の四分位範囲を求めなさい。</p>,
        steps: [
          {
            id: 1, title: '四分位範囲',
            content: <p>データを小さい順に並べ替えてから考えます。</p>,
            quiz: { type: 'choice', question: '四分位範囲（第3四分位数 - 第1四分位数）はいくつですか？', options: ['8', '9', '11'], correctAnswer: '9', explanation: <p>並べ替えると [7, 11, 16, 19, 20, 24]。四分位範囲は <TextWithMath text="$20 - 11 = 9$" /> です。</p> }
          }
        ]
      },
      {
        id: "5",
        title: "(5) 正多角形の内角",
        knowledge: ["多角形の内角の和"],
        originalText: <p>正十角形の1つの内角の大きさを求めなさい。</p>,
        steps: [
          {
            id: 1, title: '内角の大きさ',
            content: <p>内角の和の公式は <TextWithMath text="$180 \times (n - 2)$" /> です。</p>,
            quiz: { type: 'choice', question: '正十角形の1つの内角の大きさを求めなさい。', options: ['120度', '144度', '150度'], correctAnswer: '144度', explanation: <p>内角の和 <TextWithMath text="$1440^\circ$" /> を10で割るので 144° です。</p> }
          }
        ]
      },
      {
        id: "6",
        title: "(6) 回転体の体積",
        knowledge: ["円錐の体積"],
        originalText: <p>直角三角形（底辺5cm, 高さ2cm）を、底辺を軸として1回転させてできる立体の体積を求めなさい。</p>,
        steps: [
          {
            id: 1, title: '回転体',
            content: <p>半径2cm、高さ5cmの円錐ができます。</p>,
            quiz: { type: 'choice', question: 'できる立体の体積を求めなさい。（円周率はπ）', options: ['10/3 π', '20/3 π', '20 π'], correctAnswer: '20/3 π', explanation: <p>体積は <TextWithMath text="$\frac{1}{3} \times \pi \times 2^2 \times 5 = \frac{20}{3}\pi$" /> です。</p> }
          }
        ]
      },
      {
        id: "7",
        title: "(7) 2次関数の変域",
        knowledge: ["2次関数の変域"],
        originalText: <p>関数 <TextWithMath text="$y = 2x^2$" />（<TextWithMath text="$-1 \leqq x \leqq 3$" />）の <TextWithMath text="$y$" /> の変域を求めなさい。</p>,
        steps: [
          {
            id: 1, title: '変域',
            content: <p>グラフが原点（x=0）を通るかどうかが最大のポイントです！</p>,
            quiz: { type: 'choice', question: 'yの変域として正しいものはどれ？', options: ['2 ≦ y ≦ 18', '0 ≦ y ≦ 18', '-2 ≦ y ≦ 18'], correctAnswer: '0 ≦ y ≦ 18', explanation: <p>最小値は0、最大値は18です。</p> }
          }
        ]
      },
      {
        id: "8",
        title: "(8) 1次関数のグラフ",
        knowledge: ["1次関数のグラフ"],
        originalText: <p>2つのグラフ <TextWithMath text="$y=ax+b$" /> と <TextWithMath text="$y=cx+d$" /> がある。（※ <TextWithMath text="$y=ax+b$" /> は急な右下がりで切片が正、<TextWithMath text="$y=cx+d$" /> は緩やかな右下がりで切片が負）aとc、bとdの大小関係を答えなさい。</p>,
        steps: [
          {
            id: 1, title: '傾きと切片の大小',
            content: <p>傾き（a, c）と y切片（b, d）をそれぞれグラフの見た目から判断します。</p>,
            quiz: { type: 'choice', question: '大小関係で正しいものはどれ？', options: ['a < c, b < d', 'a > c, b < d', 'a < c, b > d'], correctAnswer: 'a < c, b > d', explanation: <p>切片はbが正、dが負なので <TextWithMath text="$b > d$" />。傾きはaの方が急なので <TextWithMath text="$a < c$" /> です。</p> }
          }
        ]
      }
    ]
  },
  "q2": {
    id: "q2",
    title: "令和7年 大問2：連立方程式と数の証明",
    subs: [
      {
        id: "1",
        title: "1. ルートと自然数の大小",
        knowledge: ["平方根の大小"],
        originalText: <p><TextWithMath text="$\sqrt{23}$" /> より小さい自然数は全部で何個か。</p>,
        steps: [
          {
            id: 1, title: '平方根と自然数',
            content: <p><TextWithMath text="$\sqrt{23}$" /> より小さい自然数が何個あるかを求めます。</p>,
            quiz: { type: 'choice', question: '√23 は、おおよそどのくらいの大きさの数ですか？', options: ['3.xx', '4.xx', '5.xx'], correctAnswer: '4.xx', explanation: <p>およそ 4.79... くらい。それより小さい自然数は 1, 2, 3, 4 の 4個 です。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. ノートと鉛筆の連立方程式",
        knowledge: ["連立方程式の立式と計算"],
        originalText: (
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="leading-relaxed">
              ある文房具店では、ノートと鉛筆をセットにして販売しています。<br/>
              ・**セットA**：ノート2冊 と 鉛筆3本 のセット<br/>
              ・**セットB**：ノート5冊 と 鉛筆8本 のセット<br/>
              ある日、用意したセットAとセットBがすべて売れました。<br/>
              売れたノートの合計は **76冊**、鉛筆の合計は **120本** でした。<br/>
              セットAとセットBはそれぞれ何セット売れたでしょうか。
            </p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '① まず、何をxとyにする？',
            content: (
              <div className="space-y-4">
                <p>文章問題が苦手な人は、いきなり式を立てようとせず、まずは**「表」**を書いて情報を整理するのが最大のコツです！<br/>今回の場合、以下のように整理できます。</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2"></th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-indigo-600 dark:text-indigo-400">セットA (xセット)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-pink-600 dark:text-pink-400">セットB (yセット)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-emerald-600 dark:text-emerald-400">合計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">ノートの数</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-indigo-600">2</span>x 冊</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-pink-600">5</span>y 冊</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">76 冊</td>
                      </tr>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">鉛筆の数</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-indigo-600">3</span>x 本</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-pink-600">8</span>y 本</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">120 本</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'この問題では、何を x と y に設定するのが一番計算しやすいでしょうか？', 
              options: [
                'ノート1冊の値段をx円、鉛筆1本の値段をy円とする', 
                'セットAの売れた数をxセット、セットBの売れた数をyセットとする', 
                '売れたノートの合計をx冊、鉛筆の合計をy本とする'
              ], 
              correctAnswer: 'セットAの売れた数をxセット、セットBの売れた数をyセットとする', 
              explanation: <p>問題の最後に「セットAとセットBはそれぞれ何セット売れたか」と聞かれているので、そのまま素直にそれをxとyにおくのが鉄則です！</p> 
            }
          },
          {
            id: 2, title: '② ノートについての方程式を立てる',
            content: <p>セットAが x 個、セットBが y 個売れました。<br/>まずは「ノートの冊数」だけに注目して式を作ります。</p>,
            quiz: { 
              type: 'choice', 
              question: 'ノートの合計が「76冊」であることを表す正しい方程式はどれですか？', 
              options: [
                '2x + 3y = 76', 
                '2x + 5y = 76', 
                '5x + 8y = 76'
              ], 
              correctAnswer: '2x + 5y = 76', 
              explanation: <p>セットA1つにつきノートは2冊入っているので「2x」、セットBには5冊入っているので「5y」。これを足して76冊になるので 2x + 5y = 76 が正解です。</p> 
            }
          },
          {
            id: 3, title: '③ 鉛筆についての方程式を立てる',
            content: <p>同じように「鉛筆の本数」だけに注目して2つ目の式を作ります。</p>,
            quiz: { 
              type: 'choice', 
              question: '鉛筆の合計が「120本」であることを表す正しい方程式はどれですか？', 
              options: [
                '3x + 8y = 120', 
                '8x + 3y = 120', 
                '2x + 5y = 120'
              ], 
              correctAnswer: '3x + 8y = 120', 
              explanation: <p>セットAには鉛筆が3本(3x)、セットBには8本(8y)なので、3x + 8y = 120 となります。</p> 
            }
          },
          {
            id: 4, title: '④ 連立方程式の計算（係数を合わせる）',
            content: (
              <div className="space-y-2">
                <p>2つの式が完成しました。</p>
                <MathText block math="\begin{cases} 2x + 5y = 76 \dots ① \\ 3x + 8y = 120 \dots ② \end{cases}" />
                <p>x を消去するために、加減法を使います。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'xの係数を合わせるために、①の式を3倍、②の式を2倍して引き算します。①を3倍した式はどうなりますか？', 
              options: [
                '6x + 5y = 76', 
                '6x + 15y = 228', 
                '6x + 15y = 76',
                '5x + 8y = 228'
              ], 
              correctAnswer: '6x + 15y = 228', 
              explanation: <p>左辺も右辺もすべて3倍します。<br/>2x × 3 = 6x<br/>5y × 3 = 15y<br/>76 × 3 = 228<br/>よって 6x + 15y = 228 となります。</p> 
            }
          },
          {
            id: 5, title: '⑤ 連立方程式の計算（yを求めてxを出す）',
            content: (
              <div className="space-y-2">
                <p>式を引き算して y を求めます。</p>
                <div className="text-center font-mono">
                  <p>  6x + 15y = 228</p>
                  <p>-) 6x + 16y = 240</p>
                  <p>----------------</p>
                  <p>       -y = -12</p>
                  <p>        y = 12</p>
                </div>
                <p>これで セットB(y) が 12セット だと分かりました。<br/>あとは、①の式 (2x + 5y = 76) に y=12 を代入して x を求めます。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'y=12 を代入して計算すると、x (セットAの数) はいくつになりますか？', 
              options: [
                'x = 10', 
                'x = 13', 
                'x = 8'
              ], 
              correctAnswer: 'x = 8', 
              explanation: <p>2x + 5(12) = 76<br/>2x + 60 = 76<br/>2x = 16<br/>x = 8<br/>よって、セットAは8個、セットBは12個となります！</p> 
            }
          }
        ]
      },
      {
        id: "3",
        title: "3. 数表の規則性の証明",
        knowledge: ["文字を使った数の証明", "式の展開"],
        originalText: <p>1から100までの自然数を10個ずつ並べた表。<br/>a, bが隣り合い、その右下の段にc, dがあるとき、<TextWithMath text="$bc - ad = 11$" /> になることを証明しなさい。</p>,
        steps: [
          {
            id: 1, title: '文字で表す',
            content: <p>左上のaを <TextWithMath text="$n$" /> と置いたとき、他の文字はどう表せるか考えます。</p>,
            quiz: { type: 'choice', question: 'aの右下にある「c」は n を使ってどう表せる？', options: ['n + 10', 'n + 11', 'n + 12'], correctAnswer: 'n + 11', explanation: <p>真下に行くと「+10」、さらに1つ右なので <strong><TextWithMath text="$n + 11$" /></strong> になります。dは <TextWithMath text="$n+12$" /> です。</p> }
          },
          {
            id: 2, title: '証明の計算',
            content: <p><TextWithMath text="$a=n, b=n+1, c=n+11, d=n+12$" /> を使って <TextWithMath text="$bc - ad$" /> を計算します。</p>,
            quiz: { type: 'choice', question: 'bc - ad を展開して整理するとどうなる？', options: ['11', 'n + 11', '10n + 1'], correctAnswer: '11', explanation: <p><TextWithMath text="(n+1)(n+11) - n(n+12) = 11" /> になり、証明完了です！</p> }
          }
        ]
      }
    ]
  },
  "q3": {
    id: "q3",
    title: "令和7年 大問3：図形の作図と証明",
    subs: [
      {
        id: "1",
        title: "1. 90°回転の作図",
        knowledge: ["垂線の作図"],
        originalText: <p>点Aを中心に点Bを反時計回りに90°回転させた点Pを作図しなさい。</p>,
        steps: [
          {
            id: 1, title: '90°回転の作図',
            content: <p>「90°」といえば、コンパスを使ったある基本の作図が思い浮かびますね。</p>,
            quiz: { type: 'choice', question: '90°の線（直角）を引くために使う作図方法はどれ？', options: ['角の二等分線の作図', '垂直二等分線（垂線）の作図', '正三角形の作図'], correctAnswer: '垂直二等分線（垂線）の作図', explanation: <p>点Aを通る直線ABの垂線を作図し、コンパスでABと同じ長さをとります。</p> }
          }
        ]
      },
      {
        id: "2-1",
        title: "2(1). 正四角錐の体積比",
        knowledge: ["相似比と面積比・体積比の関係"],
        originalText: (
          <div className="space-y-4">
            <p>底面の正方形ABCDの面積が16cm²、正方形EFGHの面積が4cm²のとき、<br/>正四角錐OEFGHと正四角錐OABCDの体積比を求めなさい。</p>
            <div className="flex justify-center my-4">
              <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-md">
                {/* OABCD Pyramid */}
                <polygon points="100,20 40,140 100,180 160,140" fill="rgba(52, 211, 153, 0.1)" stroke="#10b981" strokeWidth="2" />
                <line x1="100" y1="20" x2="40" y2="140" stroke="#10b981" strokeWidth="2" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#10b981" strokeWidth="2" />
                <line x1="100" y1="20" x2="160" y2="140" stroke="#10b981" strokeWidth="2" />
                {/* Back edges (dashed) */}
                <line x1="40" y1="140" x2="100" y2="110" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="160" y1="140" x2="100" y2="110" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="100" y1="20" x2="100" y2="110" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* EFGH Cut (Smaller pyramid OEFGH) */}
                <polygon points="100,80 70,110 100,130 130,110" fill="rgba(99, 102, 241, 0.3)" stroke="#6366f1" strokeWidth="2" />
                
                {/* Labels */}
                <text x="100" y="15" textAnchor="middle" className="text-xs font-bold fill-slate-700 dark:fill-slate-200">O</text>
                <text x="30" y="145" textAnchor="middle" className="text-xs font-bold fill-slate-700 dark:fill-slate-200">A</text>
                <text x="100" y="195" textAnchor="middle" className="text-xs font-bold fill-slate-700 dark:fill-slate-200">B</text>
                <text x="170" y="145" textAnchor="middle" className="text-xs font-bold fill-slate-700 dark:fill-slate-200">C</text>
                <text x="60" y="110" textAnchor="middle" className="text-xs font-bold fill-indigo-600 dark:fill-indigo-400">E</text>
              </svg>
            </div>
            <p className="text-xs text-slate-500 text-center">※図はイメージです（上が小さい四角錐OEFGH、下が大きい四角錐OABCD）</p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '体積比',
            content: <p>相似な立体の「面積比」から「相似比」と「体積比」を導きます。</p>,
            quiz: { type: 'choice', question: '底面積の比が「4：16（＝1：4）」のとき、体積の比はどうなりますか？', options: ['1：4', '1：8', '1：16'], correctAnswer: '1：8', explanation: <p>相似比は面積比の平方根なので 1：2。体積比はその3乗なので 1：8 になります。</p> }
          }
        ]
      },
      {
        id: "2-2",
        title: "2(2). 四角錐の高さ",
        knowledge: ["三平方の定理"],
        originalText: <p>正四角錐OABCDの表面積が64cm²のとき、この四角錐の高さを求めなさい。</p>,
        steps: [
          {
            id: 1, title: '側面積と三角形の高さ',
            content: <p>底面積は16cm²なので、側面積の合計は48cm²。三角形1つ分は12cm²です。</p>,
            quiz: { type: 'choice', question: '底辺AB=4cmのとき、三角形OABの高さは何cmですか？', options: ['3 cm', '6 cm', '8 cm'], correctAnswer: '6 cm', explanation: <p>三角形の面積 1/2 × 4 × h = 12 より、h = 6cm になります。</p> }
          },
          {
            id: 2, title: '三平方の定理',
            content: <p>側面の高さが6cm、底面の中心から辺までの距離が2cmの直角三角形で三平方の定理を使います。</p>,
            quiz: { type: 'choice', question: '四角錐の高さを求めるといくつになりますか？', options: ['4√2 cm', '32 cm', '√40 cm'], correctAnswer: '4√2 cm', explanation: <p>OM² + 2² = 6² より OM² = 32。よって OM = 4√2 cm です。</p> }
          }
        ]
      },
      {
        id: "3",
        title: "3. 相似の証明",
        knowledge: ["三角形の外角の性質", "相似の証明"],
        originalText: <p>正三角形ABCとDEFが交わるとき、△AEH ∽ △BGE となることを証明しなさい。</p>,
        steps: [
          {
            id: 1, title: '外角の性質を使った証明',
            content: <p>どちらも正三角形の内角なので ∠A = ∠B = 60° です。もう1つの等しい角を外角から探します。</p>,
            quiz: { type: 'choice', question: '△AEHの外角の性質を使って角を考えるとき、注目すべき式はどれ？', options: ['∠AHE + ∠AEH = 180°', '∠CEH = ∠A + ∠AHE', '∠CEB = ∠A + ∠AHE'], correctAnswer: '∠CEB = ∠A + ∠AHE', explanation: <p>∠BEG = 180° - 60° - ∠AEH。また、△AEHの内角より ∠AHE = 180° - 60° - ∠AEH。よって∠BEG = ∠AHE となり2組の角が等しくなります。</p> }
          }
        ]
      }
    ]
  },
  "q4": {
    id: "q4",
    title: "令和7年 大問4：データの活用と確率",
    subs: [
      {
        id: "1",
        title: "1. データの活用",
        knowledge: ["累積度数", "標本調査", "相対度数"],
        originalText: <p>品種A(50個)とB(30個)の糖度の度数分布表に関する問題。</p>,
        steps: [
          {
            id: 1, title: '(1) 累積度数',
            content: <p>11.5〜12.0が7個、12.0〜12.5が15個です。</p>,
            quiz: { type: 'choice', question: '品種Aの12.0以上12.5未満の階級の「累積度数」は？', options: ['15', '22', '36'], correctAnswer: '22', explanation: <p>7 + 15 = 22 です。</p> }
          },
          {
            id: 2, title: '(2) 標本調査',
            content: <p>30個中9個が該当しました。全体は500個です。</p>,
            quiz: { type: 'choice', question: '全体の500個中におよそ何個含まれていると推定できますか？', options: ['120個', '150個', '180個'], correctAnswer: '150個', explanation: <p>500 × (9/30) = 150個です。</p> }
          },
          {
            id: 3, title: '(3) 度数で比較してはいけない理由',
            content: <p>個数だけ見るとAの方が多いですが、割合で比べる必要があります。</p>,
            quiz: { type: 'choice', question: '「度数」ではなく「相対度数（割合）」で比較すべき理由はどれ？', options: ['糖度の基準が違うから', '全体の個数（度数の合計）が違うから', '小数点が含まれているから'], correctAnswer: '全体の個数（度数の合計）が違うから', explanation: <p>全体の個数が異なるため、相対度数を使います。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. 正方形上の点の移動と確率",
        knowledge: ["さいころの確率", "規則性（余り）"],
        originalText: <p>正方形ABCDの頂点Aから、2個のさいころの目の和だけ反時計回りに進む。</p>,
        steps: [
          {
            id: 1, title: '止まる位置の規則',
            content: <p>出た目の和を 4で割った余り で止まる位置が決まります。</p>,
            quiz: { type: 'choice', question: '出た目の和が「3, 7, 11」のとき、点Pはどの頂点に止まりますか？', options: ['頂点B', '頂点C', '頂点D'], correctAnswer: '頂点D', explanation: <p>3つ進んだ 頂点D に止まります。</p> }
          },
          {
            id: 2, title: '最も確率が大きい頂点',
            content: <p>2個のさいころの目の出方は全部で36通りです。</p>,
            quiz: { type: 'choice', question: '点Pが止まる確率が「最も大きい」頂点と、その確率は？', options: ['A (1/4)', 'C (1/4)', 'D (5/18)'], correctAnswer: 'D (5/18)', explanation: <p>和が3,7,11になるのは合計10通り。確率は 10/36 = 5/18 です。</p> }
          }
        ]
      }
    ]
  },
  "q5": {
    id: "q5",
    title: "令和7年 大問5：関数と水そう",
    subs: [
      {
        id: "1",
        title: "1. 変化の割合と円と直線",
        knowledge: ["変化の割合", "円と直線の交点", "三平方の定理"],
        originalText: (
          <div className="space-y-4">
            <p>関数 <TextWithMath text="$y = ax^2$" /> と <TextWithMath text="$y = -9/x$" /> 、そして円に関する問題です。</p>
            <div className="flex justify-center my-4 bg-white dark:bg-slate-800 p-4 rounded-xl">
              <svg viewBox="-50 -50 200 200" className="w-64 h-64 drop-shadow-sm">
                {/* Axes */}
                <line x1="-50" y1="50" x2="150" y2="50" stroke="#94a3b8" strokeWidth="1" />
                <line x1="10" y1="-50" x2="10" y2="150" stroke="#94a3b8" strokeWidth="1" />
                
                {/* Hyperbola y = -9/x (approx) */}
                <path d="M 20 150 Q 30 70 140 60" fill="none" stroke="#ef4444" strokeWidth="2" />
                <path d="M 0 -50 Q -10 30 -50 40" fill="none" stroke="#ef4444" strokeWidth="2" />
                
                {/* Circle Center(-1, 5) -> Scaled to (0, 0) for diagram sake, Radius 4 -> 40 */}
                <circle cx="-10" cy="-30" r="40" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="-10" cy="-30" r="2" fill="#3b82f6" />
                <line x1="-10" y1="-30" x2="-10" y2="50" stroke="#3b82f6" strokeDasharray="2 2" />
                
                {/* Labels */}
                <text x="140" y="45" className="text-xs fill-slate-500">x</text>
                <text x="15" y="-45" className="text-xs fill-slate-500">y</text>
                <text x="-5" y="65" className="text-xs fill-slate-500">O</text>
                <text x="-35" y="-35" className="text-[10px] fill-blue-500">(-1, 5)</text>
              </svg>
            </div>
            <p className="text-xs text-slate-500 text-center">※関数と円が交わる図のイメージ（赤：反比例、青：円）</p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '(2) 変化の割合',
            content: <p>xが1から3まで増加するときの変化の割合が等しくなります。</p>,
            quiz: { type: 'choice', question: '反比例のグラフ y = -9/x の変化の割合はいくつですか？', options: ['3', '6', '9'], correctAnswer: '3', explanation: <p>x=1でy=-9、x=3でy=-3。(-3 - (-9)) / 2 = 3 です。<br/>4a = 3 より a = 3/4 になります。</p> }
          },
          {
            id: 2, title: '(3) 円とy軸の交点',
            content: <p>点A(-1, 1)と点B(-1, 9)を直径の両端とする円の交点を考えます。</p>,
            quiz: { type: 'choice', question: '中心からy軸に下ろした直角三角形の縦の長さを三平方の定理で求めると？', options: ['√15', '3', '√17'], correctAnswer: '√15', explanation: <p>中心は(-1, 5)で半径は4。1² + h² = 4² より h = √15。<br/>交点のy座標は 5 ± √15 になります。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. 水そうとブロックの体積",
        knowledge: ["グラフの読み取り", "体積と速さの方程式"],
        originalText: <p>深さ40cmの水そうの底にブロックを固定し、排水する。</p>,
        steps: [
          {
            id: 1, title: '(1) ブロックの高さ',
            content: <p>最初の5分間は40→30cm、その後は30→0cmと急激に下がっています。</p>,
            quiz: { type: 'choice', question: 'このことから、ブロックの高さは何cmだと分かりますか？', options: ['10cm', '30cm', '40cm'], correctAnswer: '30cm', explanation: <p>水位が30cmになったところから下がり方が急になっているので、ブロックの高さは 30cm です。</p> }
          },
          {
            id: 2, title: '(3) 横に倒したブロックの高さ',
            content: <p>ブロックを横に倒すと、5分後の水位は前より4cm低く(26cm)なりました。</p>,
            quiz: { type: 'choice', question: '条件から方程式を立ててブロックの新しい高さを計算すると？', options: ['28 cm', '32.5 cm', '35 cm'], correctAnswer: '32.5 cm', explanation: <p>減った体積 10S = (40-h)S + (h-26)(S - 20S/h) を解くと h = 32.5cm になります。</p> }
          }
        ]
      }
    ]
  },
  "q6": {
    id: "q6",
    title: "令和7年 大問6：ダンスのフォーメーション",
    subs: [
      {
        id: "1",
        title: "1, 2. シミュレーション",
        knowledge: ["規則性の発見"],
        originalText: <p>n人の生徒が西と東に分かれて交互に交差するフォーメーションチェンジ。</p>,
        steps: [
          {
            id: 1, title: '問1: n=8の1回チェンジ',
            content: <p>西:1,2,3,4 / 東:5,6,7,8 を交互に並べます。</p>,
            quiz: { type: 'choice', question: '1回目のチェンジで全体の西から「6番目」に来るのは？', options: ['3番の人', '7番の人', '4番の人'], correctAnswer: '7番の人', explanation: <p>1, 5, 2, 6, 3, 7, 4, 8 となるので、6番目は「7」になります。</p> }
          },
          {
            id: 2, title: '問2: n=10の3回チェンジ',
            content: <p>1,2,3,4,5 / 6,7,8,9,10 を3回交差させます。</p>,
            quiz: { type: 'choice', question: '3回目のチェンジ後、ゼッケン「8」は何番目にいるでしょうか？', options: ['2番目', '3番目', '4番目'], correctAnswer: '3番目', explanation: <p>1回目: 1,6,2,7,3,8,4,9,5,10<br/>2回目: 1,8,6,4,2,9,7,5,3,10<br/>3回目: 1,9,8,7,6... となり、8は3番目です。</p> }
          }
        ]
      },
      {
        id: "3",
        title: "3. 規則性を文字で表して逆算",
        knowledge: ["奇数と偶数の文字式", "式の逆算", "論理的思考力"],
        originalText: <p>移動の規則性を文字式で表し、n=70のとき5回チェンジ後の35番目の人の元の番号を求める。</p>,
        steps: [
          {
            id: 1, title: '移動先を式で表す',
            content: <p>西側の生徒(a番目)は奇数番目へ、東側の生徒(b番目)は偶数番目へ行きます。</p>,
            quiz: { type: 'choice', question: '「西側の a 番目」の生徒の移動先を表す式はどれ？', options: ['a + 1', '2a - 1', '2a'], correctAnswer: '2a - 1', explanation: <p>奇数を表す 2a - 1 になります。東側の生徒は 2b です。</p> }
          },
          {
            id: 2, title: '逆算して元の位置を突き止める！',
            content: <p>5回目終了時、35番目(奇数)にいた生徒は、4回目終了時は西の 2a-1=35 より a=18番目(偶数)にいました。<br/>東の 2b=18 より b=9、全体では 35+9=44番目...と逆算します。</p>,
            quiz: { type: 'choice', question: 'この調子で「最初」の場所まで逆算すると、元のゼッケン番号は？', options: ['12', '15', '18'], correctAnswer: '15', explanation: <p>44→57(西29)→29(西15)→15。元のゼッケン番号は 15番 です！</p> }
          }
        ]
      }
    ]
  }
};
