import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { ConcyclicFigs, CubeACFFig } from './u8d1_figs';

export const q2Data: MajorQuestionData = {
  id: "q2",
  title: "宇短大附属 R8(4日) 大問2：小問集合",
  subs: [
    {
      id: "1",
      title: "1. 反比例のグラフと直線の傾き",
      knowledge: ["反比例", "変化の割合（傾き）"],
      originalText: <p>関数 <TextWithMath text="$y=\dfrac{12}{x}$" /> のグラフ上に2点A、Bがあり、Aの <TextWithMath text="$x$" /> 座標は3、Bの <TextWithMath text="$y$" /> 座標は2である。このとき、2点A、Bを通る直線の傾きを求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 2点の座標を求める',
          content: <p>Aは <TextWithMath text="$x=3$" /> を、Bは <TextWithMath text="$y=2$" /> を <TextWithMath text="$y=\tfrac{12}{x}$" /> に代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'A、Bの座標の組は？',
            options: ['A(3, 4)、B(6, 2)', 'A(3, 4)、B(2, 6)', 'A(3, 36)、B(6, 2)'],
            correctAnswer: 'A(3, 4)、B(6, 2)',
            explanation: <p>A は <TextWithMath text="$y=12\div3=4$" />。B は <TextWithMath text="$2=\tfrac{12}{x}$" /> より <TextWithMath text="$x=6$" /> です。B の座標を (2, 6) と逆にしないよう注意します。</p>
          }
        },
        {
          id: 2, title: '② 傾きを計算する',
          content: <MathText block math="\text{傾き}=\frac{y\text{の増加量}}{x\text{の増加量}}" />,
          quiz: {
            type: 'choice',
            question: '直線ABの傾きは？',
            options: ['−2/3', '−3/2', '2/3'],
            correctAnswer: '−2/3',
            explanation: <p><TextWithMath text="$\dfrac{2-4}{6-3}=-\dfrac23$" /> です。反比例のグラフ上で <TextWithMath text="$x$" /> が増えると <TextWithMath text="$y$" /> が減るので、傾きが負になることとも合っています。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 連続する奇数の和",
      knowledge: ["規則性", "奇数の和"],
      originalText: <p>1から始まる連続する9個の正の奇数の和を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 最後の奇数を求める',
          content: <p>1から数えて <TextWithMath text="$n$" /> 番目の奇数は <TextWithMath text="$2n-1$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '9番目の奇数は？',
            options: ['17', '19', '18'],
            correctAnswer: '17',
            explanation: <p><TextWithMath text="$2\times9-1=17$" /> です。1, 3, 5, …, 17 の9個を足します。</p>
          }
        },
        {
          id: 2, title: '② 和を求める',
          content: <p>両端から組にすると、<TextWithMath text="$1+17=3+15=\cdots=18$" /> と同じ和になります。</p>,
          quiz: {
            type: 'choice',
            question: '1 + 3 + 5 + … + 17 = ?',
            options: ['81', '90', '72'],
            correctAnswer: '81',
            explanation: <p><TextWithMath text="$(1+17)\times9\div2=81$" /> です。1から <TextWithMath text="$n$" /> 個の奇数の和は <TextWithMath text="$n^2$" /> になるので、<TextWithMath text="$9^2=81$" /> と一致します。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 4点が同じ円周上にある図",
      knowledge: ["円周角の定理の逆", "三角形の内角と外角", "平行線の錯角"],
      originalText: (
        <div className="space-y-2">
          <p>下の図の①〜③において4点A、B、C、Dが同じ円周上にあるものは オ であり、その図で、<TextWithMath text="$\angle x=$" /> カ <TextWithMath text="$^\circ$" /> である。オ、カにあてはまる適切なものを以下の選択肢からそれぞれ1つ選び、番号で答えよ。</p>
          <ConcyclicFigs />
          <p>オの選択肢　1 ①　2 ②　3 ③</p>
          <p>カの選択肢　1 65　2 67　3 68　4 70　5 80</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 判定の道具',
          content: <p>線分BCに対して、A と D が同じ側にあり <TextWithMath text="$\angle BAC=\angle BDC$" /> なら、4点は同じ円周上にあります（円周角の定理の逆）。<TextWithMath text="$\angle ABD=\angle ACD$" /> でも同じです。</p>,
          quiz: {
            type: 'choice',
            question: '①で ∠x（∠BAC）は何度？（対角線の交点で、下側の角が100°）',
            options: ['80°', '60°', '70°'],
            correctAnswer: '80°',
            explanation: <p>交点の上下の角が100°なので、△ABPの交点の角は <TextWithMath text="$180^\circ-100^\circ=80^\circ$" />。よって <TextWithMath text="$x=180^\circ-20^\circ-80^\circ=80^\circ$" />。<TextWithMath text="$\angle BDC=70^\circ$" /> と等しくないので①は同じ円周上にありません。</p>
          }
        },
        {
          id: 2, title: '② 図②を調べる',
          content: <p>AD // BC なので錯角が使えます。<TextWithMath text="$\angle ADB$" /> と <TextWithMath text="$\angle ACB$" /> を比べます。</p>,
          quiz: {
            type: 'choice',
            question: '②の ∠ADB と ∠ACB の組は？',
            options: ['33° と 34°', '33° と 33°', '34° と 34°'],
            correctAnswer: '33° と 34°',
            explanation: <p>錯角より <TextWithMath text="$\angle ADB=\angle DBC=33^\circ$" />。△PBCで <TextWithMath text="$\angle ACB=180^\circ-113^\circ-33^\circ=34^\circ$" />。1°ずれているので②も同じ円周上にありません。図を見ただけでは等脚台形に見えるのがひっかけです。</p>
          }
        },
        {
          id: 3, title: '③ 図③を調べる',
          content: <p>対角線の交点をPとします。<TextWithMath text="$\angle BPC=100^\circ$" /> なので <TextWithMath text="$\angle APB=80^\circ$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '③で ∠x（∠BAC）は何度？',
            options: ['68°', '48°', '80°'],
            correctAnswer: '68°',
            explanation: <p>△ABPで <TextWithMath text="$x=180^\circ-32^\circ-80^\circ=68^\circ$" />。これは <TextWithMath text="$\angle BDC=68^\circ$" /> と等しいので、4点A、B、C、Dは同じ円周上にあります。</p>
          }
        },
        {
          id: 4, title: '④ 答えをまとめる',
          content: <p>同じ円周上にあるのは③で、そのとき <TextWithMath text="$\angle x=68^\circ$" /> でした。</p>,
          quiz: {
            type: 'choice',
            question: 'オ、カの答えの組は？',
            options: ['オ ③、カ 68°', 'オ ②、カ 67°', 'オ ①、カ 80°'],
            correctAnswer: 'オ ③、カ 68°',
            explanation: <p>答えは図③、<TextWithMath text="$\angle x=68^\circ$" /> です（選択肢の番号ではオが3、カが3）。確認として③の△PDCでは <TextWithMath text="$\angle ACD=180^\circ-80^\circ-68^\circ=32^\circ=\angle ABD$" /> となり、こちらからも同じ円周上にあることがわかります。</p>
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. 計算ミスから元の数を求める",
      knowledge: ["1次方程式の文章題"],
      originalText: <p>ある数を4倍して6を足すところを、間違えて6倍して4を足したら正しい答えより30大きくなった。このとき、ある数を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 方程式を立てる',
          content: <p>ある数を <TextWithMath text="$x$" /> とします。正しい答えは <TextWithMath text="$4x+6$" />、間違えた答えは <TextWithMath text="$6x+4$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '正しい方程式は？',
            options: ['6x + 4 = 4x + 6 + 30', '4x + 6 = 6x + 4 + 30', '6x + 4 + 4x + 6 = 30'],
            correctAnswer: '6x + 4 = 4x + 6 + 30',
            explanation: <p>間違えた答えのほうが30大きいので、正しい答えに30を足すと間違えた答えに等しくなります。</p>
          }
        },
        {
          id: 2, title: '② 方程式を解く',
          content: <MathText block math="6x+4=4x+36" />,
          quiz: {
            type: 'choice',
            question: 'x の値は？',
            options: ['16', '20', '−16'],
            correctAnswer: '16',
            explanation: <p><TextWithMath text="$2x=32$" /> より <TextWithMath text="$x=16$" />。検算すると正しい答えは <TextWithMath text="$4\times16+6=70$" />、間違いは <TextWithMath text="$6\times16+4=100$" /> で、差は30です。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. 係数が入れかわった連立方程式",
      knowledge: ["連立方程式", "加減法の工夫"],
      originalText: (
        <div>
          <p>連立方程式</p>
          <MathText block math="\begin{cases}53x+47y=-17\\47x+53y=-83\end{cases}" />
          <p>の解を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 2式を足す',
          content: <p>係数が入れかわっている形は、足し算と引き算をすると数が簡単になります。</p>,
          quiz: {
            type: 'choice',
            question: '2式を足して100でわると？',
            options: ['x + y = −1', 'x + y = −100', 'x + y = 1'],
            correctAnswer: 'x + y = −1',
            explanation: <p><TextWithMath text="$100x+100y=-100$" /> なので <TextWithMath text="$x+y=-1$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 2式を引く',
          content: <p>上の式から下の式を引きます。</p>,
          quiz: {
            type: 'choice',
            question: '上の式 − 下の式 を整理すると？',
            options: ['x − y = 11', 'x − y = −11', 'x − y = 66'],
            correctAnswer: 'x − y = 11',
            explanation: <p><TextWithMath text="$6x-6y=-17-(-83)=66$" /> なので <TextWithMath text="$x-y=11$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ x, y を求める',
          content: <MathText block math="x+y=-1,\quad x-y=11" />,
          quiz: {
            type: 'choice',
            question: '解は？',
            options: ['x = 5, y = −6', 'x = 6, y = −5', 'x = −5, y = 6'],
            correctAnswer: 'x = 5, y = −6',
            explanation: <p>足すと <TextWithMath text="$2x=10$" /> で <TextWithMath text="$x=5$" />、<TextWithMath text="$y=-1-5=-6$" />。検算すると <TextWithMath text="$53\times5+47\times(-6)=265-282=-17$" /> で合っています。</p>
          }
        }
      ]
    },
    {
      id: "6",
      title: "6. 立方体を平面で切った立体の体積",
      knowledge: ["三角すいの体積", "立方体の切断"],
      originalText: (
        <div className="space-y-2">
          <p>右の立方体を、頂点A、C、Fを通る平面で切ったときできる2つの立体のうち、頂点Hを含む立体の体積はもとの立方体の体積の何倍か求めよ。</p>
          <CubeACFFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 切り取られる立体を見つける',
          content: (
            <div>
              <p>A、C、Fはどれも頂点Bと辺でつながっています。切り口は三角形ACFです。</p>
              <CubeACFFig showCut />
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'Hを含まないほうの立体は？',
            options: ['三角すい B-ACF', '三角すい E-ACF', '三角柱 ABC-EFG'],
            correctAnswer: '三角すい B-ACF',
            explanation: <p>平面ACFは頂点Bの角を切り落とすので、小さいほうは三角すいB-ACFです。Hはその反対側の大きい立体に含まれます。</p>
          }
        },
        {
          id: 2, title: '② 三角すいの体積',
          content: <p>立方体の1辺を <TextWithMath text="$a$" /> とします。三角すいB-ACFは、底面を直角二等辺三角形ABC、高さをBFとみられます。</p>,
          quiz: {
            type: 'choice',
            question: '三角すいB-ACFの体積は立方体の何倍？',
            options: ['1/6', '1/3', '1/2'],
            correctAnswer: '1/6',
            explanation: <p><TextWithMath text="$\tfrac13\times\tfrac12a^2\times a=\tfrac16a^3$" /> なので <TextWithMath text="$\tfrac16$" /> 倍です。錐の <TextWithMath text="$\tfrac13$" /> を忘れると <TextWithMath text="$\tfrac12$" /> になってしまいます。</p>
          }
        },
        {
          id: 3, title: '③ Hを含む立体の体積',
          content: <p>全体から三角すいを引きます。</p>,
          quiz: {
            type: 'choice',
            question: 'Hを含む立体の体積はもとの立方体の何倍？',
            options: ['5/6', '2/3', '1/6'],
            correctAnswer: '5/6',
            explanation: <p><TextWithMath text="$1-\tfrac16=\tfrac56$" /> 倍です。聞かれているのはHを含む大きいほうの立体なので、<TextWithMath text="$\tfrac16$" /> と答えないよう注意します。</p>
          }
        }
      ]
    },
    {
      id: "7",
      title: "7. 2人のカードの大小の確率",
      knowledge: ["確率", "表を使った数え上げ"],
      originalText: <p>太郎さんは1、3、5、7の数字が1つずつ書かれた4枚のカードを、花子さんは2、4、6、8の数字が1つずつ書かれた4枚のカードをもっている。これらのカードをよくきって、2人が同時に自分がもっているカードから1枚取り出す。太郎さんが取り出したカードに書かれた数字を <TextWithMath text="$a$" />、花子さんが取り出したカードに書かれた数字を <TextWithMath text="$b$" /> とする。このとき、<TextWithMath text="$a>b$" /> となる確率を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 全体の場合の数',
          content: <p>太郎さんの4通りそれぞれに、花子さんの4通りがあります。</p>,
          quiz: {
            type: 'choice',
            question: '取り出し方は全部で何通り？',
            options: ['16通り', '8通り', '28通り'],
            correctAnswer: '16通り',
            explanation: <p><TextWithMath text="$4\times4=16$" /> 通りで、どれも同様に確からしいです。</p>
          }
        },
        {
          id: 2, title: '② a > b となる場合を数える',
          content: <p><TextWithMath text="$a$" /> ごとに、<TextWithMath text="$a$" /> より小さい <TextWithMath text="$b$" /> を数えます。</p>,
          quiz: {
            type: 'choice',
            question: 'a > b となるのは何通り？',
            options: ['6通り', '10通り', '4通り'],
            correctAnswer: '6通り',
            explanation: <p><TextWithMath text="$a=1$" /> で0通り、<TextWithMath text="$a=3$" /> で1通り（2）、<TextWithMath text="$a=5$" /> で2通り（2, 4）、<TextWithMath text="$a=7$" /> で3通り（2, 4, 6）。合計6通りです。</p>
          }
        },
        {
          id: 3, title: '③ 確率を求める',
          content: <MathText block math="\frac{6}{16}" />,
          quiz: {
            type: 'choice',
            question: 'a > b となる確率は？',
            options: ['3/8', '5/8', '1/2'],
            correctAnswer: '3/8',
            explanation: <p><TextWithMath text="$\tfrac{6}{16}=\tfrac38$" /> です。同じ数は出ないので、<TextWithMath text="$a<b$" /> は残りの10通りで、合わせて16通りになり矛盾はありません。</p>
          }
        }
      ]
    },
    {
      id: "8",
      title: "8. 平均値と中央値が等しくなる値",
      knowledge: ["平均値", "中央値", "1次方程式"],
      originalText: (
        <div className="space-y-2">
          <p>下の資料は、ある8人の中学生が1年間に読んだ本の冊数を調べて少ない順に並べたものである。読んだ本の冊数の平均値と中央値が同じとき、<TextWithMath text="$x$" /> の値を求めよ。</p>
          <p className="text-center">17, 25, 47, 58, <TextWithMath text="$x$" />, 114, 118, 123　（単位は冊）</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 中央値を式で表す',
          content: <p>8人なので、中央値は4番目と5番目の平均です。</p>,
          quiz: {
            type: 'choice',
            question: '中央値を x で表すと？',
            options: ['(58 + x)/2', 'x', '(47 + 58)/2'],
            correctAnswer: '(58 + x)/2',
            explanation: <p>4番目は58、5番目は <TextWithMath text="$x$" /> なので <TextWithMath text="$\tfrac{58+x}{2}$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 平均値を式で表す',
          content: <p>x 以外の7つの合計を求めます。</p>,
          quiz: {
            type: 'choice',
            question: '平均値を x で表すと？',
            options: ['(502 + x)/8', '(502 + x)/7', '(512 + x)/8'],
            correctAnswer: '(502 + x)/8',
            explanation: <p><TextWithMath text="$17+25+47+58+114+118+123=502$" />。8人で割るので <TextWithMath text="$\tfrac{502+x}{8}$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 方程式を解く',
          content: <MathText block math="\frac{58+x}{2}=\frac{502+x}{8}" />,
          quiz: {
            type: 'choice',
            question: 'x の値は？',
            options: ['90', '80', '110'],
            correctAnswer: '90',
            explanation: <p>両辺を8倍して <TextWithMath text="$232+4x=502+x$" />、<TextWithMath text="$3x=270$" />、<TextWithMath text="$x=90$" />。58以上114以下なので並び順の条件も満たし、平均値も中央値も74になります。</p>
          }
        }
      ]
    }
  ]
};
