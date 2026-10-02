import { r4RestData } from './r4_rest';
import { MajorQuestionData } from './r7'; // Re-use the interface
import React from 'react';
import { MathText, TextWithMath } from '@/components/MathText';

export const r4Data: Record<string, MajorQuestionData> = {
  ...r4RestData,
  q1: {
    id: 'q1',
    title: '令和4年 大問1（小問集合）',
    subs: [
      {
        id: '1',
        title: '(1) 正負の数の計算',
        knowledge: ['マイナスの割り算'],
        originalText: <MathText block math="14 \div (-7)" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'プラスとマイナスの割り算です。符号はどうなるでしょうか？',
              options: ['-2', '2', '-7', '7'],
              correctAnswer: '-2',
              explanation: (
                <div className="space-y-2">
                  <p>プラス ÷ マイナス ＝ マイナスになります。</p>
                  <MathText block math="14 \div (-7) = -2" />
                </div>
              )
            }
          }
        ]
      },
      {
        id: '2',
        title: '(2) 文字式の計算',
        knowledge: ['分数の通分'],
        originalText: <MathText block math="\frac{2}{3}a + \frac{1}{4}a" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '分母が違う分数の足し算です。まずは通分しましょう。分母は何になりますか？',
              options: ['12', '7', '24', '34'],
              correctAnswer: '12',
              explanation: (
                <p>3と4の最小公倍数は12ですね。それぞれ分母を12に揃えましょう。</p>
              )
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '通分して足し合わせると、答えはどうなりますか？',
              options: [
                '\\frac{11}{12}a',
                '\\frac{3}{7}a',
                '\\frac{11}{24}a',
                '\\frac{8}{12}a'
              ],
              correctAnswer: '\\frac{11}{12}a',
              explanation: (
                <div className="space-y-2">
                  <MathText block math="\frac{2 \times 4}{3 \times 4}a + \frac{1 \times 3}{4 \times 3}a" />
                  <MathText block math="= \frac{8}{12}a + \frac{3}{12}a" />
                  <MathText block math="= \frac{11}{12}a" />
                </div>
              )
            }
          }
        ]
      },
      {
        id: '3',
        title: '(3) 多項式の展開',
        knowledge: ['乗法公式'],
        originalText: <MathText block math="(x + 5)(x + 4)" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '展開の公式 (x+a)(x+b) = x² + (a+b)x + ab を使います。xの係数（a+b）と、定数項（ab）はどうなりますか？',
              options: [
                'xの係数は9、定数項は20',
                'xの係数は20、定数項は9',
                'xの係数は1、定数項は20',
                'xの係数は9、定数項は9'
              ],
              correctAnswer: 'xの係数は9、定数項は20',
              explanation: (
                <div className="space-y-2">
                  <p>5 + 4 = 9 (これがxの係数)</p>
                  <p>5 × 4 = 20 (これが定数項)</p>
                  <MathText block math="x^2 + 9x + 20" />
                </div>
              )
            }
          }
        ]
      },
      {
        id: '4',
        title: '(4) 2次方程式の解の公式',
        knowledge: ['解の公式'],
        originalText: <MathText block math="2x^2 - 3x - 1 = 0" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '因数分解できないので、解の公式を使います。a=2, b=-3, c=-1 を代入したとき、根号の中 (b² - 4ac) の計算はどうなりますか？',
              options: [
                '(-3)^2 - 4 \\times 2 \\times (-1) = 9 + 8 = 17',
                '(-3)^2 - 4 \\times 2 \\times (-1) = 9 - 8 = 1',
                '3^2 - 4 \\times 2 \\times 1 = 9 - 8 = 1',
                '-3^2 - 4 \\times 2 \\times 1 = -9 - 8 = -17'
              ],
              correctAnswer: '(-3)^2 - 4 \\times 2 \\times (-1) = 9 + 8 = 17',
              explanation: (
                <p>マイナス×マイナスはプラスになるので、-4 × 2 × (-1) = +8 になります。</p>
              )
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: 'それでは、最終的な答えはどうなりますか？',
              options: [
                'x = \\frac{3 \\pm \\sqrt{17}}{4}',
                'x = \\frac{-3 \\pm \\sqrt{17}}{4}',
                'x = \\frac{3 \\pm \\sqrt{1}}{4}',
                'x = \\frac{3 \\pm \\sqrt{17}}{2}'
              ],
              correctAnswer: 'x = \\frac{3 \\pm \\sqrt{17}}{4}',
              explanation: (
                <div className="space-y-2">
                  <MathText block math="x = \frac{-(-3) \pm \sqrt{17}}{2 \times 2}" />
                  <MathText block math="x = \frac{3 \pm \sqrt{17}}{4}" />
                </div>
              )
            }
          }
        ]
      }
    ]
  },
  q2: {
    id: 'q2',
    title: '令和4年 大問2（平方根・方程式）',
    subs: [
      {
        id: '1',
        title: '(1) 平方根が整数になる条件',
        knowledge: ['平方根', '自然数'],
        originalText: <p><MathText math="\sqrt{10-n}" /> が正の整数となるような、自然数 <TextWithMath text="$n$" /> の値をすべて求めなさい。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'ルートの中身である (10 - n) は、どのような数になれば「正の整数」として外に出られますか？',
              options: [
                'ある整数の2乗の数（1, 4, 9, 16...）',
                '偶数（2, 4, 6, 8...）',
                '奇数（1, 3, 5, 7...）',
                '10の倍数（10, 20, 30...）'
              ],
              correctAnswer: 'ある整数の2乗の数（1, 4, 9, 16...）',
              explanation: (
                <p>ルートを外して整数にするには、中身が 1²=1, 2²=4, 3²=9... のような「平方数」になる必要があります。</p>
              )
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: 'n は自然数（1, 2, 3...）なので、(10 - n) は 10未満の数です。10未満の平方数（1, 4, 9）になるような n をすべて選んでください。',
              options: [
                'n = 1, 6, 9',
                'n = 1, 4, 9',
                'n = 6, 9',
                'n = 1, 2, 3'
              ],
              correctAnswer: 'n = 1, 6, 9',
              explanation: (
                <div className="space-y-2">
                  <p>10 - n が 9 になるには、n = 1</p>
                  <p>10 - n が 4 になるには、n = 6</p>
                  <p>10 - n が 1 になるには、n = 9</p>
                  <p>よって、n = 1, 6, 9 が正解です。</p>
                </div>
              )
            }
          }
        ]
      },
      {
        id: '2',
        title: '(2) 入館料の連立方程式',
        knowledge: ['連立方程式の立式（割合）', '加減法'],
        originalText: (
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="leading-relaxed">
              ある美術館の入館料は、大人1人と子ども1人で **合計1000円** です。<br/>
              割引券を使うと、大人は **2割引き**、子どもは **半額（5割引き）** になり、合計で **680円** になります。<br/>
              割引前の大人1人の入館料と、子ども1人の入館料をそれぞれ求めなさい。
            </p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '① まず、何をxとyにする？',
            content: (
              <div className="space-y-4">
                <p>文章問題が苦手な人は、いきなり式を立てようとせず、まずは**「表」**を書いて情報を整理するのが最大のコツです！</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2"></th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-blue-600 dark:text-blue-400">大人 (1人)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-rose-600 dark:text-rose-400">子ども (1人)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-emerald-600 dark:text-emerald-400">合計金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">割引前</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-blue-600">x 円</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-rose-600">y 円</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">1000 円</td>
                      </tr>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">割引後</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">0.8x 円</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">0.5y 円</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">680 円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>このように、求めたいものを x と y におきます。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'この表を見てください。この問題では、何を x と y に設定しましたか？', 
              options: [
                '割引後の大人の入館料をx円、割引後の子どもの入館料をy円とする', 
                '割引前の大人1人の入館料をx円、割引前の子ども1人の入館料をy円とする', 
                '大人の人数をx人、子どもの人数をy人とする'
              ], 
              correctAnswer: '割引前の大人1人の入館料をx円、割引前の子ども1人の入館料をy円とする', 
              explanation: <p>一番上の行にあるように、元の値段（割引前）を x, y と置いています。文章題はこうして表に整理するだけで劇的に簡単になります！</p> 
            }
          },
          {
            id: 2, title: '② 割引前の金額で方程式を立てる',
            content: <p>大人1人(x円)と子ども1人(y円)の割引前の合計金額の式を作ります。</p>,
            quiz: { 
              type: 'choice', 
              question: '割引前の合計金額が「1000円」であることを表す正しい方程式はどれですか？', 
              options: [
                'x + y = 1000', 
                'x - y = 1000', 
                'xy = 1000'
              ], 
              correctAnswer: 'x + y = 1000', 
              explanation: <p>大人1人と子ども1人の単純な足し算なので、x + y = 1000 となります。</p> 
            }
          },
          {
            id: 3, title: '③ 割引後の金額で方程式を立てる',
            content: <p>大人は「2割引き」、子どもは「半額（5割引き）」です。<br/>2割引きとは、元の金額の「何割（何%）」になるということでしょうか？</p>,
            quiz: { 
              type: 'choice', 
              question: '割引後の合計金額が「680円」であることを表す方程式として正しいものはどれですか？', 
              options: [
                '0.2x + 0.5y = 680', 
                '0.8x + 0.5y = 680', 
                '2x + 5y = 680'
              ], 
              correctAnswer: '0.8x + 0.5y = 680', 
              explanation: <p>「2割引き」＝「元の8割の値段」になるので 0.8x です。「半額」は 0.5y です。よって 0.8x + 0.5y = 680 となります。</p> 
            }
          },
          {
            id: 4, title: '④ 連立方程式の計算（小数をなくす）',
            content: (
              <div className="space-y-2">
                <p>2つの式ができました。</p>
                <MathText block math="\begin{cases} x + y = 1000 \dots ① \\ 0.8x + 0.5y = 680 \dots ② \end{cases}" />
                <p>計算しやすくするために、②の式の小数をなくしましょう。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: '②の式の両辺を10倍して小数をなくした式として、正しいものはどれですか？', 
              options: [
                '8x + 5y = 680', 
                '8x + 5y = 6800', 
                '80x + 50y = 6800'
              ], 
              correctAnswer: '8x + 5y = 6800', 
              explanation: <p>0.8x を10倍して 8x。0.5y を10倍して 5y。右辺の680も忘れずに10倍して 6800 になります。</p> 
            }
          },
          {
            id: 5, title: '⑤ 連立方程式の計算（yを消去する）',
            content: (
              <div className="space-y-2">
                <p>①の式 (x + y = 1000) を5倍して y の係数を揃えます。<br/>5x + 5y = 5000 となりますね。</p>
                <div className="text-center font-mono">
                  <p>  8x + 5y = 6800</p>
                  <p>-) 5x + 5y = 5000</p>
                  <p>----------------</p>
                  <p>  3x      = 1800</p>
                </div>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: '3x = 1800 となりました。ここから計算して出る大人の料金 (x) の答えはどれでしょうか？', 
              options: [
                'x = 600', 
                'x = 800', 
                'x = 400'
              ], 
              correctAnswer: 'x = 600', 
              explanation: <p>3x = 1800 より x = 600。①の式 (x+y=1000) に当てはめると、子ども(y)は 400円になります！</p> 
            }
          }
        ]
      },
      {
        id: '3',
        title: '(3) 2次方程式のもう一つの解',
        knowledge: ['2次方程式の解'],
        originalText: <p>2次方程式 <MathText math="x^2 - 8x + 2a + 1 = 0" /> の解の一つが <MathText math="x=3" /> であるとき、定数 <TextWithMath text="$a$" /> の値ともう一つの解を求めなさい。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '「x=3が解である」と分かっているので、まずはこの方程式に x=3 を代入してみましょう。代入した式はどうなりますか？',
              options: [
                '3^2 - 8(3) + 2a + 1 = 0',
                '3^2 - 8 + 2a + 1 = 0',
                'x^2 - 24 + 2a + 1 = 0',
                '9x - 8x + 2a + 1 = 0'
              ],
              correctAnswer: '3^2 - 8(3) + 2a + 1 = 0',
              explanation: (
                <p>x にそのまま 3 を当てはめます。9 - 24 + 2a + 1 = 0 になります。</p>
              )
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '9 - 24 + 2a + 1 = 0 を解いて、a の値を求めましょう。',
              options: [
                'a = 7',
                'a = -7',
                'a = 14',
                'a = -14'
              ],
              correctAnswer: 'a = 7',
              explanation: (
                <div className="space-y-2">
                  <MathText block math="-14 + 2a = 0" />
                  <MathText block math="2a = 14" />
                  <MathText block math="a = 7" />
                </div>
              )
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: 'a = 7 だと分かりました。元の方程式に戻すと x² - 8x + 15 = 0 になります。これを因数分解すると、もう一つの解は何になりますか？',
              options: [
                'x = 5',
                'x = -5',
                'x = 15',
                'x = -3'
              ],
              correctAnswer: 'x = 5',
              explanation: (
                <div className="space-y-2">
                  <MathText block math="x^2 - 8x + 15 = 0" />
                  <p>掛けて15、足して-8になる2つの数は -3 と -5 です。</p>
                  <MathText block math="(x - 3)(x - 5) = 0" />
                  <p>したがって、解は x = 3, 5。もう一つの解は x = 5 となります。</p>
                </div>
              )
            }
          }
        ]
      }
    ]
  }
};
