import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { PentagonFig, ParallelogramFig } from './u8d2_figs';

export const q2Data: MajorQuestionData = {
  id: "q2",
  title: "宇短大附属 R8(5日) 大問2：小問集合",
  subs: [
    {
      id: "1",
      title: "1. 1次関数の増加量",
      knowledge: ["1次関数", "変化の割合と増加量"],
      originalText: <p>1次関数 <TextWithMath text="$y=-2x+4$" /> について、<TextWithMath text="$x$" /> の値が3から5まで増加するときの <TextWithMath text="$y$" /> の増加量を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① x の増加量を求める',
          content: <p>1次関数では、y の増加量 ＝ 変化の割合 × x の増加量 です。</p>,
          quiz: {
            type: 'choice',
            question: 'x の増加量は？',
            options: ['2', '8', '3'],
            correctAnswer: '2',
            explanation: <p>3から5まで増えるので <TextWithMath text="$5-3=2$" /> です。</p>
          }
        },
        {
          id: 2, title: '② y の増加量を求める',
          content: <p>変化の割合は <TextWithMath text="$x$" /> の係数の −2 です。</p>,
          quiz: {
            type: 'choice',
            question: 'y の増加量は？',
            options: ['−4', '4', '−6'],
            correctAnswer: '−4',
            explanation: (
              <div>
                <p><TextWithMath text="$-2\times2=-4$" />。答えは −4 です。</p>
                <p className="mt-2 text-sm">検算：<TextWithMath text="$x=3$" /> のとき <TextWithMath text="$y=-2$" />、<TextWithMath text="$x=5$" /> のとき <TextWithMath text="$y=-6$" /> なので、<TextWithMath text="$-6-(-2)=-4$" /> です。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 平方根の式から a を求める",
      knowledge: ["根号の簡単化", "平方根の加法"],
      originalText: <p><TextWithMath text="$\sqrt5+\sqrt a=\sqrt{45}$" /> が成り立つとき、<TextWithMath text="$a$" /> の値を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① √45 を簡単にする',
          content: <p>根号の中から2乗の数をくくり出します。</p>,
          quiz: {
            type: 'choice',
            question: '√45 を簡単にすると？',
            options: ['3√5', '5√3', '9√5'],
            correctAnswer: '3√5',
            explanation: <p><TextWithMath text="$\sqrt{45}=\sqrt{9\times5}=3\sqrt5$" /> です。</p>
          }
        },
        {
          id: 2, title: '② √a を求める',
          content: <MathText block math="\sqrt a=3\sqrt5-\sqrt5" />,
          quiz: {
            type: 'choice',
            question: 'a の値は？',
            options: ['20', '40', '10'],
            correctAnswer: '20',
            explanation: (
              <div>
                <p><TextWithMath text="$\sqrt a=2\sqrt5=\sqrt{4\times5}=\sqrt{20}$" /> なので <TextWithMath text="$a=20$" /> です。</p>
                <p className="mt-2 text-sm"><TextWithMath text="$45-5=40$" /> としてしまうのはよくある誤りです。根号どうしは中身をそのままひけません。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 正五角形と平行線の角",
      knowledge: ["正多角形の内角", "平行線の錯角・同位角", "三角形の角"],
      originalText: (
        <div>
          <p>右の図において、五角形ABCDEは正五角形で、2直線 <TextWithMath text="$m,n$" /> は平行である。また、頂点Aは <TextWithMath text="$m$" /> 上にあり、頂点Cは <TextWithMath text="$n$" /> 上にある。このとき、<TextWithMath text="$\angle x$" /> の大きさを求めよ。</p>
          <PentagonFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 正五角形の内角を求める',
          content: <p>五角形の内角の和は <TextWithMath text="$180^\circ\times(5-2)$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '正五角形の1つの内角は？',
            options: ['108°', '72°', '120°'],
            correctAnswer: '108°',
            explanation: <p><TextWithMath text="$540^\circ\div5=108^\circ$" /> です。72° は外角の大きさです。</p>
          }
        },
        {
          id: 2, title: '② 辺の向きをたどる',
          content: (
            <div>
              <p>直線 m の右向きを基準に、各辺が何度傾いているかを考えます。AE は右上へ16°です。</p>
              <p className="mt-2">頂点で曲がるたびに、進む向きは外角の72°ずつ変わります。A→B→C→D と進むと、ABは下向き、BCは右下、CDは右上へと向きが変わっていきます。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '辺ABは m に対して何度の向き（右向きを0°、下向きをマイナス）？',
            options: ['−92°', '−108°', '−72°'],
            correctAnswer: '−92°',
            explanation: <p>∠EAB＝108° なので、AE の向き16°から時計回りに108°回して <TextWithMath text="$16^\circ-108^\circ=-92^\circ$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 辺CDの向きを求める',
          content: <p>Bで72°、Cで72°、左回りに向きが変わります。</p>,
          quiz: {
            type: 'choice',
            question: '∠x（直線 n と CD の間の角）は？',
            options: ['52°', '56°', '36°'],
            correctAnswer: '52°',
            explanation: (
              <div>
                <p>BCの向きは <TextWithMath text="$-92^\circ+72^\circ=-20^\circ$" />、CDの向きは <TextWithMath text="$-20^\circ+72^\circ=52^\circ$" /> です。n は m と平行なので、∠x ＝ 52° です。</p>
                <p className="mt-2 text-sm">別の確かめ方：Aでは ∠EAB＝108° のうち16°が m より上なので、m と AB のなす角は92°です。Bを通り m に平行な直線をひくと、AB とその直線のなす角は <TextWithMath text="$180^\circ-92^\circ=88^\circ$" />、残りは <TextWithMath text="$108^\circ-88^\circ=20^\circ$" />。錯角より CB と n のなす角も20°なので、Cで <TextWithMath text="$x=180^\circ-20^\circ-108^\circ=52^\circ$" /> です。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. いちごを配る過不足の問題",
      knowledge: ["1次方程式の利用", "過不足の問題"],
      originalText: <p>かごの中のいちごを何人かの中学生に配るのに、1人に4個ずつ配るには7個足りない。また、1人に3個ずつ配ったところ5個余った。このとき、かごの中に入っていたいちごの個数は全部で何個か。</p>,
      steps: [
        {
          id: 1, title: '① 人数を x として式をつくる',
          content: <p>いちごの個数を2通りの式で表し、等しいとおきます。</p>,
          quiz: {
            type: 'choice',
            question: '正しい方程式は？',
            options: ['4x − 7 = 3x + 5', '4x + 7 = 3x − 5', '4x − 7 = 3x − 5'],
            correctAnswer: '4x − 7 = 3x + 5',
            explanation: <p>4個ずつだと7個足りないので、いちごは <TextWithMath text="$4x-7$" /> 個。3個ずつだと5個余るので <TextWithMath text="$3x+5$" /> 個です。</p>
          }
        },
        {
          id: 2, title: '② 方程式を解く',
          content: <MathText block math="4x-7=3x+5" />,
          quiz: {
            type: 'choice',
            question: '中学生の人数 x は？',
            options: ['12人', '2人', '8人'],
            correctAnswer: '12人',
            explanation: <p><TextWithMath text="$4x-3x=5+7$" /> より <TextWithMath text="$x=12$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ いちごの個数を求める',
          content: <p>求めるのは人数ではなく、いちごの個数です。</p>,
          quiz: {
            type: 'choice',
            question: 'いちごは全部で何個？',
            options: ['41個', '43個', '12個'],
            correctAnswer: '41個',
            explanation: (
              <div>
                <p><TextWithMath text="$3\times12+5=41$" /> 個です。</p>
                <p className="mt-2 text-sm">検算：4個ずつなら48個必要で、41個では7個足りません。条件どおりです。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. 解を入れかえた連立方程式",
      knowledge: ["連立方程式", "解の代入"],
      originalText: (
        <p>2組の連立方程式 <TextWithMath text="$\begin{cases}x+y=4\\x+ay=7\end{cases}$" /> …① と <TextWithMath text="$\begin{cases}2x-y=-1\\bx+y=5\end{cases}$" /> …② について、①の解の <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の値を入れかえると②の解になる。このとき、<TextWithMath text="$a,b$" /> の値を求めよ。</p>
      ),
      steps: [
        {
          id: 1, title: '① a, b をふくまない式を集める',
          content: (
            <div>
              <p>①の解を <TextWithMath text="$x=p,\ y=q$" /> とすると、②の解は <TextWithMath text="$x=q,\ y=p$" /> です。</p>
              <p className="mt-2">文字 a, b をふくまない <TextWithMath text="$x+y=4$" /> と <TextWithMath text="$2x-y=-1$" /> を使います。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '2x − y = −1 に②の解 (q, p) を入れた式は？',
            options: ['2q − p = −1', '2p − q = −1', 'p + q = −1'],
            correctAnswer: '2q − p = −1',
            explanation: <p>②では <TextWithMath text="$x=q,\ y=p$" /> なので <TextWithMath text="$2q-p=-1$" /> です。これと <TextWithMath text="$p+q=4$" /> を連立します。</p>
          }
        },
        {
          id: 2, title: '② p, q を求める',
          content: <MathText block math="\begin{cases}p+q=4\\-p+2q=-1\end{cases}" />,
          quiz: {
            type: 'choice',
            question: '①の解 (x, y) = (p, q) は？',
            options: ['(3, 1)', '(1, 3)', '(2, 2)'],
            correctAnswer: '(3, 1)',
            explanation: <p>2式をたすと <TextWithMath text="$3q=3$" />、<TextWithMath text="$q=1$" />。よって <TextWithMath text="$p=3$" />。①の解は <TextWithMath text="$x=3,\ y=1$" />、②の解は <TextWithMath text="$x=1,\ y=3$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ a, b を求める',
          content: <p>①の2つ目の式に (3, 1)、②の2つ目の式に (1, 3) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'a, b の値は？',
            options: ['a = 4, b = 2', 'a = 2, b = 4', 'a = 4, b = 2/3'],
            correctAnswer: 'a = 4, b = 2',
            explanation: (
              <div>
                <p><TextWithMath text="$3+a\times1=7$" /> より <TextWithMath text="$a=4$" />。<TextWithMath text="$b\times1+3=5$" /> より <TextWithMath text="$b=2$" /> です。</p>
                <p className="mt-2 text-sm">検算：②に (1, 3) を入れると <TextWithMath text="$2-3=-1$" />、<TextWithMath text="$2+3=5$" /> で成り立ちます。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "6",
      title: "6. 平行四辺形の中の三角形の面積比",
      knowledge: ["相似な三角形（砂時計型）", "線分の比と面積比", "平行四辺形の面積"],
      originalText: (
        <div>
          <p>右の図の平行四辺形ABCDにおいて、辺BCの中点をMとし、線分BM上に BP：PM＝1：2 となるように点Pをとる。また、線分AMと線分DPの交点をQとする。△PQMの面積を <TextWithMath text="$S$" /> とするとき、平行四辺形ABCDの面積は <TextWithMath text="$S$" /> の何倍か。</p>
          <ParallelogramFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 辺の長さを比で表す',
          content: <p>BM＝MC で、BM を 1：2 に分けているので、BC 全体を6とおくと計算しやすくなります。</p>,
          quiz: {
            type: 'choice',
            question: 'BC＝6 としたとき、PM と AD の長さは？',
            options: ['PM＝2、AD＝6', 'PM＝2、AD＝3', 'PM＝4、AD＝6'],
            correctAnswer: 'PM＝2、AD＝6',
            explanation: <p>BM＝3 で BP：PM＝1：2 なので BP＝1、PM＝2。AD は BC と同じ長さで6です。</p>
          }
        },
        {
          id: 2, title: '② 砂時計型の相似を使う',
          content: <p>PM と AD は平行なので、△QPM と △QDA は相似です。</p>,
          quiz: {
            type: 'choice',
            question: 'MQ：QA は？',
            options: ['1：3', '1：2', '2：3'],
            correctAnswer: '1：3',
            explanation: <p>相似比は PM：DA＝2：6＝1：3 なので、MQ：QA＝1：3 です。つまり MQ は AM の <TextWithMath text="$\dfrac14$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ △PQM を高さで考える',
          content: <p>平行四辺形の高さを <TextWithMath text="$h$" /> とします。Q は AM を 3：1 に分けるので、Q から BC までの高さは <TextWithMath text="$\dfrac14h$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '△PQM の面積 S を h で表すと？',
            options: ['S = h/4', 'S = h/2', 'S = h/8'],
            correctAnswer: 'S = h/4',
            explanation: <p><TextWithMath text="$S=\dfrac12\times2\times\dfrac14h=\dfrac14h$" /> なので、<TextWithMath text="$h=4S$" /> です。</p>
          }
        },
        {
          id: 4, title: '④ 平行四辺形の面積を求める',
          content: <MathText block math="\text{平行四辺形}=BC\times h=6\times h" />,
          quiz: {
            type: 'choice',
            question: '平行四辺形ABCDの面積は？',
            options: ['24S', '12S', '18S'],
            correctAnswer: '24S',
            explanation: <p><TextWithMath text="$6\times4S=24S$" />。答えは 24S です。</p>
          }
        }
      ]
    },
    {
      id: "7",
      title: "7. 表から確率を求める",
      knowledge: ["確率", "条件の整理"],
      originalText: <p>ある学校の生徒100人のうち男子生徒が55人、女子生徒が45人である。このうち運動部に所属しているのは、男子生徒が30人、女子生徒が25人である。この生徒100人の中から1人選ぶとき、選んだ1人が運動部に所属していない女子生徒である確率を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 条件にあう人数を数える',
          content: <p>女子45人のうち、運動部に入っていない人数を求めます。</p>,
          quiz: {
            type: 'choice',
            question: '運動部に所属していない女子は何人？',
            options: ['20人', '25人', '45人'],
            correctAnswer: '20人',
            explanation: <p><TextWithMath text="$45-25=20$" /> 人です。</p>
          }
        },
        {
          id: 2, title: '② 確率を求める',
          content: <p>全体は100人で、どの生徒が選ばれることも同様に確からしいとします。</p>,
          quiz: {
            type: 'choice',
            question: '確率は？',
            options: ['1/5', '4/9', '1/4'],
            correctAnswer: '1/5',
            explanation: <p><TextWithMath text="$\dfrac{20}{100}=\dfrac15$" /> です。女子45人を分母にした <TextWithMath text="$\dfrac{20}{45}=\dfrac49$" /> は、選ぶ対象を女子に限ったときの確率なので誤りです。</p>
          }
        }
      ]
    },
    {
      id: "8",
      title: "8. 中央値と最頻値",
      knowledge: ["中央値", "最頻値"],
      originalText: (
        <div className="space-y-2">
          <p>下の表は、A〜Jの生徒10人が最近1か月に読んだ本の冊数をまとめたものである。この10人が読んだ本の冊数の中央値と最頻値を求めよ。</p>
          <div className="overflow-x-auto">
            <table className="text-sm border border-slate-400 mx-auto">
              <tbody>
                <tr>{['生徒', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((t) => <td key={t} className="border border-slate-400 px-2 py-1 text-center">{t}</td>)}</tr>
                <tr>{['冊数', '2', '4', '2', '1', '6', '0', '1', '1', '10', '3'].map((t, i) => <td key={i} className="border border-slate-400 px-2 py-1 text-center">{t}</td>)}</tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">（単位は冊）</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 小さい順に並べる',
          content: <p>中央値を求めるときは、必ず大きさの順に並べかえます。</p>,
          quiz: {
            type: 'choice',
            question: '小さい順に並べたとき、5番目と6番目の値は？',
            options: ['2 と 2', '6 と 0', '1 と 2'],
            correctAnswer: '2 と 2',
            explanation: <p>0, 1, 1, 1, 2, 2, 3, 4, 6, 10 となり、5番目と6番目はどちらも2です。表の並びのまま5番目と6番目を取ると 6 と 0 になってしまいます。</p>
          }
        },
        {
          id: 2, title: '② 中央値と最頻値を求める',
          content: <p>データが10個（偶数）なので、中央値は真ん中2つの平均です。最頻値は最も多く現れる値です。</p>,
          quiz: {
            type: 'choice',
            question: '中央値と最頻値の組は？',
            options: ['中央値2冊、最頻値1冊', '中央値3冊、最頻値1冊', '中央値2冊、最頻値3冊'],
            correctAnswer: '中央値2冊、最頻値1冊',
            explanation: <p>中央値は <TextWithMath text="$(2+2)\div2=2$" /> 冊。1冊の人が3人で最も多いので、最頻値は1冊です。平均値 <TextWithMath text="$30\div10=3$" /> 冊とまちがえないようにしましょう。</p>
          }
        }
      ]
    }
  ]
};
