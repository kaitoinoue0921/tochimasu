import { MajorQuestionData } from './r7';
import React from 'react';
import { MathText, TextWithMath } from '@/components/MathText';

export const r3Data: Record<string, MajorQuestionData> = {

  q1: {
    id: 'q1',
    title: '令和3年 大問1（小問集合）',
    subs: [
      {
        id: '1',
        title: '(1) 正負の数の計算',
        knowledge: ['正負の数の加減'],
        originalText: <MathText block math="(-4) - (-7) + (-2)" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'まずは (-4) - (-7) の部分です。マイナスを引くことは、どう計算すればよいですか？',
              options: [
                'プラスにする (+7)',
                'そのまま引く (-7)',
                'ゼロにする'
              ],
              correctAnswer: 'プラスにする (+7)',
              explanation: <p>マイナスとマイナスが続くとプラスに変わります。つまり - (-7) は + 7 になります。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: 'それでは、-4 + 7 を計算するといくつになりますか？',
              options: ['3', '-11', '11', '-3'],
              correctAnswer: '3',
              explanation: <p>-4 から右へ7移動するので 3 になります。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: 'ここまでで式は 3 + (-2) になりました。プラスとマイナスが続くとどうなりますか？',
              options: ['マイナスになる (-2)', 'プラスになる (+2)'],
              correctAnswer: 'マイナスになる (-2)',
              explanation: <p>+(マイナス) はそのまま引くことになります。つまり -2 です。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '最後に 3 - 2 を計算すると答えはどうなりますか？',
              options: ['1', '5', '-1'],
              correctAnswer: '1',
              explanation: <MathText block math="3 - 2 = 1" />
            }
          }
        ]
      },
      {
        id: '2',
        title: '(2) 文字式の計算',
        knowledge: ['分配法則', '同類項をまとめる'],
        originalText: <MathText block math="3(2a - b) - 2(a - 4b)" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'まずは左側の 3(2a - b) を分配法則で展開しましょう。どうなりますか？',
              options: ['6a - 3b', '6a - b', '5a - 3b'],
              correctAnswer: '6a - 3b',
              explanation: <p>3 を 2a と -b の両方に掛けます。3 × 2a = 6a, 3 × (-b) = -3b です。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '次に右側の -2(a - 4b) を展開します。-2 を -4b に掛けると符号はどうなりますか？',
              options: ['プラス (+8b)', 'マイナス (-8b)'],
              correctAnswer: 'プラス (+8b)',
              explanation: <p>マイナス × マイナス は プラスになります。-2 × (-4b) = +8b です。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '-2(a - 4b) の展開結果として正しいものはどれですか？',
              options: ['-2a + 8b', '-2a - 8b', '2a + 8b'],
              correctAnswer: '-2a + 8b',
              explanation: <p>-2 × a = -2a, -2 × (-4b) = +8b なので -2a + 8b です。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: 'これらを合わせると 6a - 3b - 2a + 8b となります。aの項 (6a と -2a) を計算するとどうなりますか？',
              options: ['4a', '8a', '-4a'],
              correctAnswer: '4a',
              explanation: <p>6a - 2a = 4a です。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: '最後にbの項 (-3b と +8b) を計算して、最終的な答えを選んでください。',
              options: ['4a + 5b', '4a - 11b', '4a - 5b'],
              correctAnswer: '4a + 5b',
              explanation: <p>-3b + 8b = +5b。よって答えは 4a + 5b になります。</p>
            }
          }
        ]
      },
      {
        id: '3',
        title: '(3) 平方根の計算',
        knowledge: ['平方根の整理', '有理化'],
        originalText: <MathText block math="\sqrt{12} - rac{6}{\sqrt{3}}" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'まず、√12 を簡単な形（a√b）に直しましょう。どうなりますか？',
              options: ['2√3', '3√2', '4√3'],
              correctAnswer: '2√3',
              explanation: <p>12 は 4 × 3 です。√4 は 2 になるので、√12 = 2√3 になります。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '次に 6 / √3 を分母の有理化します。分母と分子に何を掛ければよいですか？',
              options: ['√3', '√6', '3'],
              correctAnswer: '√3',
              explanation: <p>分母のルートをなくすため、分母と分子に同じ √3 を掛けます。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '6 / √3 の分母と分子に √3 を掛けると、分子は 6√3 になります。分母はどうなりますか？',
              options: ['3', '9', '√9'],
              correctAnswer: '3',
              explanation: <p>√3 × √3 = 3 になります。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '6√3 / 3 を約分するとどうなりますか？',
              options: ['2√3', '3√3', '2'],
              correctAnswer: '2√3',
              explanation: <p>6 と 3 で約分して 2 になり、ルートはそのままなので 2√3 です。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: '最後に、計算した2つの部分を引きます。2√3 - 2√3 はいくつになりますか？',
              options: ['0', '1', '4√3'],
              correctAnswer: '0',
              explanation: <p>同じものを引くので 0 になります。</p>
            }
          }
        ]
      }
    ]
  },

  q2: {
    id: 'q2',
    title: '令和3年 大問2（確率・方程式）',
    subs: [
      {
        id: '1',
        title: '(1) 連立方程式',
        knowledge: ['連立方程式', '加減法'],
        originalText: <MathText block math="\begin{cases} 3x - y = 7 \\ x + 2y = 14 \end{cases}" />,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '上の式を①、下の式を②とします。yの係数を揃えるために、①の式を何倍すればよいですか？',
              options: ['2倍', '3倍', 'そのまま'],
              correctAnswer: '2倍',
              explanation: <p>①のyの係数は -1、②は +2 なので、①を2倍すれば 2y に揃えられます。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '①の式 (3x - y = 7) を2倍した正しい式はどれですか？',
              options: ['6x - 2y = 14', '3x - 2y = 14', '6x - 2y = 7'],
              correctAnswer: '6x - 2y = 14',
              explanation: <p>左辺の項も右辺の数も、すべてに2を掛けます。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '作った式 (6x - 2y = 14) と ②の式 (x + 2y = 14) を足し合わせます。yはどうなりますか？',
              options: ['消える', '4yになる'],
              correctAnswer: '消える',
              explanation: <p>-2y と +2y を足すと 0 になるので消えます。これが加減法の目的です。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '左辺のx同士 (6x と x)、右辺の数 (14 と 14) を足し合わせると、どんな式になりますか？',
              options: ['7x = 28', '5x = 0', '7x = 14'],
              correctAnswer: '7x = 28',
              explanation: <p>6x + x = 7x、14 + 14 = 28 となります。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: '7x = 28 を解いて x の値を求めてください。',
              options: ['x = 4', 'x = 3', 'x = 21'],
              correctAnswer: 'x = 4',
              explanation: <p>両辺を7で割って x = 4 です。</p>
            }
          },
          {
            id: 6,
            quiz: {
              type: 'choice',
              question: 'x = 4 を②の式 (x + 2y = 14) に代入すると、4 + 2y = 14 になります。これを解くと y はいくつになりますか？',
              options: ['y = 5', 'y = 9', 'y = 10'],
              correctAnswer: 'y = 5',
              explanation: <p>2y = 14 - 4 = 10。両辺を2で割って y = 5 になります。答えは x=4, y=5 です。</p>
            }
          }
        ]
      },
      {
        id: '2',
        title: '(2) 確率',
        knowledge: ['確率', '樹形図'],
        originalText: <p>大小2つのさいころを同時に投げるとき、出る目の数の和が8以上になる確率を求めなさい。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '大小2つのさいころを同時に投げたとき、目の出方は全部で何通りありますか？',
              options: ['36通り', '12通り', '24通り'],
              correctAnswer: '36通り',
              explanation: <p>大さいころが6通り、小さいさいころも6通り。6 × 6 = 36通りです。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '目の和が「8以上」ということは、和がいくつになる場合を考えればよいですか？',
              options: ['8, 9, 10, 11, 12', '9, 10, 11, 12', '8だけ'],
              correctAnswer: '8, 9, 10, 11, 12',
              explanation: <p>「以上」はその数を含むので、8, 9, 10, 11, 12が該当します。さいころの最大は6+6=12です。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '和が「12」になる目の組み合わせは何通りですか？',
              options: ['1通り', '2通り', '3通り'],
              correctAnswer: '1通り',
              explanation: <p>(6, 6) の1通りしかありません。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '和が「11」になる目の組み合わせは何通りですか？',
              options: ['2通り', '1通り', '3通り'],
              correctAnswer: '2通り',
              explanation: <p>(5, 6) と (6, 5) の2通りです。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: '和が「10」になる目の組み合わせをすべて挙げるとどうなりますか？',
              options: ['(4,6), (5,5), (6,4)', '(5,5)', '(4,6), (6,4)'],
              correctAnswer: '(4,6), (5,5), (6,4)',
              explanation: <p>この3通りが和が10になる組み合わせです。</p>
            }
          },
          {
            id: 6,
            quiz: {
              type: 'choice',
              question: '和が「9」になる組み合わせは (3,6), (4,5), (5,4), (6,3) の4通り。では、和が「8」になる組み合わせは何通りですか？',
              options: ['5通り', '4通り', '6通り'],
              correctAnswer: '5通り',
              explanation: <p>(2,6), (3,5), (4,4), (5,3), (6,2) の5通りです。</p>
            }
          },
          {
            id: 7,
            quiz: {
              type: 'choice',
              question: '該当する組み合わせの数をすべて足します。1 + 2 + 3 + 4 + 5 = 15通り。では、確率はどうなりますか？',
              options: ['15/36 (約分して 5/12)', '15/36 (約分して 3/8)', '5/36'],
              correctAnswer: '15/36 (約分して 5/12)',
              explanation: <p>全体が36通りなので 15 / 36。これを3で約分して 5/12 が答えです。</p>
            }
          }
        ]
      }
    ]
  },

  q3: {
    id: 'q3',
    title: '令和3年 大問3（関数と図形）',
    subs: [
      {
        id: '1',
        title: '一次関数の利用（水槽）',
        knowledge: ['一次関数', '変化の割合'],
        originalText: <p>空の水槽に、毎分一定の割合で水を入れます。水を入れ始めてから 4分後の水深は 12cm でした。<br/>その後も同じ割合で水を入れ続けると、10分後には水深が何cmになりますか。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '「毎分一定の割合」とあります。これは何を意味していますか？',
              options: ['1分間に増える水の高さが常に同じ', '時間が経つほど増えるスピードが速くなる'],
              correctAnswer: '1分間に増える水の高さが常に同じ',
              explanation: <p>一定の割合＝グラフにすると直線（一次関数や比例）になるということです。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '4分間で水深が 12cm になりました。では、1分間あたり何cm増えていますか？',
              options: ['3cm', '4cm', '8cm'],
              correctAnswer: '3cm',
              explanation: <p>12 ÷ 4 = 3。1分間に 3cm ずつ深くなっていることが分かります。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '1分間に 3cm 増える場合、時間を x分、水深を y cm とすると、どのような式になりますか？',
              options: ['y = 3x', 'y = x + 3', 'y = 4x'],
              correctAnswer: 'y = 3x',
              explanation: <p>x分後には 3 × x だけ深くなるので、y = 3x という比例の式になります。空(最初0cm)から始めているので切片は0です。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: 'では、10分後の水深は何cmですか？',
              options: ['30cm', '120cm', '22cm'],
              correctAnswer: '30cm',
              explanation: <p>x = 10 を y = 3x に代入して、y = 3 × 10 = 30。よって 30cm が答えです。</p>
            }
          }
        ]
      }
    ]
  },

  q4: {
    id: 'q4',
    title: '令和3年 大問4（図形の証明）',
    subs: [
      {
        id: '1',
        title: '合同の証明の準備',
        knowledge: ['三角形の合同条件', '平行線の錯角'],
        originalText: <p>平行四辺形 ABCD において、辺 AD の中点を M、辺 BC の中点を N とします。<br/>このとき、△ABM ≡ △CDN であることを証明しなさい。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '証明する2つの三角形はどれとどれですか？',
              options: ['△ABM と △CDN', '△ABC と △CDA'],
              correctAnswer: '△ABM と △CDN',
              explanation: <p>問題文に「△ABM ≡ △CDN を証明しなさい」と書かれているので、この2つに注目します。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '「平行四辺形の対辺は等しい」という性質から、どの辺とどの辺が等しいと言えますか？（△ABM と △CDN の辺で考えます）',
              options: ['AB = CD', 'AD = BC'],
              correctAnswer: 'AB = CD',
              explanation: <p>平行四辺形の向かい合う辺は長さが同じです。△ABM の辺 AB と、△CDN の辺 CD がこれに当たります。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: 'M は AD の中点、N は BC の中点です。また、平行四辺形なので AD = BC です。これから何が言えますか？',
              options: ['AM = CN', 'AM = BC'],
              correctAnswer: 'AM = CN',
              explanation: <p>同じ長さの線を半分に割った長さなので、AM (ADの半分) = CN (BCの半分) となります。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '「平行四辺形の対角は等しい」という性質から、どの角とどの角が等しいと言えますか？',
              options: ['∠A = ∠C', '∠B = ∠D'],
              correctAnswer: '∠A = ∠C',
              explanation: <p>△ABM の ∠BAM (つまり∠A) と、△CDN の ∠DCN (つまり∠C) は向かい合う角なので等しいです。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: 'ここまでで「AB = CD」「AM = CN」「∠A = ∠C」が分かりました。どの合同条件が使えますか？',
              options: ['2組の辺とその間の角がそれぞれ等しい', '3組の辺がそれぞれ等しい', '1組の辺とその両端の角がそれぞれ等しい'],
              correctAnswer: '2組の辺とその間の角がそれぞれ等しい',
              explanation: <p>2つの辺 (AB, AM) と、その間にある角 (∠A) が揃っているのでこの条件になります。</p>
            }
          }
        ]
      }
    ]
  },

  q5: {
    id: 'q5',
    title: '令和3年 大問5（空間図形）',
    subs: [
      {
        id: '1',
        title: '円柱の表面積',
        knowledge: ['円柱の展開図', '表面積'],
        originalText: <p>底面の半径が 3cm、高さが 5cm の円柱があります。この円柱の表面積を求めなさい。<br/>ただし、円周率は <MathText math="\pi" /> とします。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: '円柱の表面積を求めるには、何と何を足せばよいですか？',
              options: ['底面積2つ分 ＋ 側面積', '底面積 ＋ 側面積'],
              correctAnswer: '底面積2つ分 ＋ 側面積',
              explanation: <p>円柱には「上下のフタ（底面が2つ）」と「横のぐるり（側面）」があるので、それらをすべて足します。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: 'まず底面積を求めましょう。半径3cmの円の面積の公式 (半径×半径×π) に当てはめるといくつになりますか？',
              options: ['9π cm²', '6π cm²'],
              correctAnswer: '9π cm²',
              explanation: <p>3 × 3 × π = 9π です。</p>
            }
          },
          {
            id: 3,
            quiz: {
              type: 'choice',
              question: '底面は上下に2つあります。底面積2つ分でいくつになりますか？',
              options: ['18π cm²', '9π cm²'],
              correctAnswer: '18π cm²',
              explanation: <p>9π × 2 = 18π です。</p>
            }
          },
          {
            id: 4,
            quiz: {
              type: 'choice',
              question: '次に側面積です。円柱の側面を広げると長方形になります。この長方形の「縦」は円柱の「高さ(5cm)」です。「横」の長さは何と同じですか？',
              options: ['底面の円周', '底面の直径'],
              correctAnswer: '底面の円周',
              explanation: <p>ぐるりと巻き付いていた部分を開くので、横の長さは底面の円の周りの長さとぴったり同じになります。</p>
            }
          },
          {
            id: 5,
            quiz: {
              type: 'choice',
              question: '底面の円周（直径×π）を求めるとどうなりますか？半径は3cmです。',
              options: ['6π cm', '9π cm'],
              correctAnswer: '6π cm',
              explanation: <p>半径が3cmなので、直径は6cm。円周は 6π cm になります。</p>
            }
          },
          {
            id: 6,
            quiz: {
              type: 'choice',
              question: '側面の長方形は「縦5cm、横6π cm」です。側面積はいくつですか？',
              options: ['30π cm²', '11π cm²'],
              correctAnswer: '30π cm²',
              explanation: <p>縦 × 横 = 5 × 6π = 30π です。</p>
            }
          },
          {
            id: 7,
            quiz: {
              type: 'choice',
              question: '最後に、底面積2つ分(18π) と 側面積(30π) を足して表面積を求めましょう。',
              options: ['48π cm²', '39π cm²'],
              correctAnswer: '48π cm²',
              explanation: <p>18π + 30π = 48π cm²。これが円柱全体の表面積です。</p>
            }
          }
        ]
      }
    ]
  },

  q6: {
    id: 'q6',
    title: '令和3年 大問6（規則性）',
    subs: [
      {
        id: '1',
        title: 'タイルの規則性',
        knowledge: ['文字式の利用', '規則性'],
        originalText: <p>白と黒の正方形のタイルを、規則的に並べて図形を作っていきます。<br/>1番目は黒タイル1枚。2番目は黒の周りを白で囲む。3番目はさらにその周りを黒で囲む...とします。<br/>n番目の図形の1辺に並ぶタイルの枚数を、nを使った式で表しなさい。</p>,
        steps: [
          {
            id: 1,
            quiz: {
              type: 'choice',
              question: 'まず、1番目、2番目、3番目の図形の「1辺のタイルの枚数」を数えるとどうなっていますか？',
              options: ['1番目は1枚、2番目は3枚、3番目は5枚', '1番目は1枚、2番目は2枚、3番目は3枚'],
              correctAnswer: '1番目は1枚、2番目は3枚、3番目は5枚',
              explanation: <p>1枚の周りを囲むと上下左右に1枚ずつ増えるので、1辺の長さは2枚ずつ増えていきます。1, 3, 5... と続きます。</p>
            }
          },
          {
            id: 2,
            quiz: {
              type: 'choice',
              question: '「1, 3, 5, 7...」のように、2ずつ増える数列（奇数）は、nを使ってどう表せますか？',
              options: ['2n - 1', 'n + 2', '2n'],
              correctAnswer: '2n - 1',
              explanation: <p>n=1のとき 2(1)-1 = 1。<br/>n=2のとき 2(2)-1 = 3。<br/>n=3のとき 2(3)-1 = 5。ぴったり合いますね！</p>
            }
          }
        ]
      }
    ]
  }
};
