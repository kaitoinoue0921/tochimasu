import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { ParabolaLineFig, WalkGraphFig } from './r5_figs';

const intro1 = (
  <div>
    <p>右の図のように、2つの関数 <TextWithMath text="$y=5x$" />、<TextWithMath text="$y=2x^2$" /> のグラフ上で、<TextWithMath text="$x$" /> 座標が <TextWithMath text="$t\ (t>0)$" /> である点をそれぞれA、Bとする。Bを通り <TextWithMath text="$x$" /> 軸に平行な直線が、関数 <TextWithMath text="$y=2x^2$" /> のグラフと交わる点のうち、Bと異なる点をCとする。また、Cを通り <TextWithMath text="$y$" /> 軸に平行な直線が、関数 <TextWithMath text="$y=5x$" /> のグラフと交わる点をDとする。</p>
    <ParabolaLineFig />
  </div>
);

const intro2 = (
  <div className="space-y-2">
    <p>ある日の放課後、前田さんは友人の後藤さんと図書館に行くことにした。学校から図書館までの距離は1650mで、その間に後藤さんの家と前田さんの家がこの順に一直線の道沿いにある。</p>
    <p>2人は一緒に学校を出て一定の速さで6分間歩いて、後藤さんの家に着いた。後藤さんが家で準備をするため、2人はここで別れた。その後、前田さんは毎分70mの速さで8分間歩いて、自分の家に着き、家に着いてから5分後に毎分70mの速さで図書館に向かった。</p>
    <p>下の図は、前田さんが図書館に着くまでのようすについて、学校を出てからの時間を <TextWithMath text="$x$" /> 分、学校からの距離を <TextWithMath text="$y$" /> mとして、<TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をグラフに表したものである。</p>
    <WalkGraphFig />
  </div>
);

export const q5Data: MajorQuestionData = {
  id: "q5",
  title: "令和5年 大問5：関数（放物線と直線・速さのグラフ）",
  subs: [
    {
      id: "1-1",
      title: "1(1). y=2x² の変域",
      knowledge: ["y=ax² の変域", "x=0 をまたぐときの最小値"],
      originalText: (
        <div>
          {intro1}
          <p>(1) 関数 <TextWithMath text="$y=2x^2$" /> について、<TextWithMath text="$x$" /> の変域が <TextWithMath text="$-1 \leqq x \leqq 5$" /> のときの <TextWithMath text="$y$" /> の変域を求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 最小値を考える',
          content: <p>xの変域に0がふくまれているかがポイントです。<TextWithMath text="$y=2x^2$" /> は <TextWithMath text="$x=0$" /> で最も小さくなります。</p>,
          quiz: {
            type: 'choice',
            question: 'y の最小値は？',
            options: ['0', '2', '−2'],
            correctAnswer: '0',
            explanation: <p><TextWithMath text="$-1\leqq x\leqq5$" /> は0をふくむので、最小値は <TextWithMath text="$x=0$" /> のときの <TextWithMath text="$y=0$" />。両端だけを計算して「2」とするのが典型ミスです。</p>
          }
        },
        {
          id: 2, title: '② 最大値を考える',
          content: <p>0から遠いほうの端で最大になります。</p>,
          quiz: {
            type: 'choice',
            question: 'y の変域は？',
            options: ['0 ≦ y ≦ 50', '2 ≦ y ≦ 50', '0 ≦ y ≦ 10'],
            correctAnswer: '0 ≦ y ≦ 50',
            explanation: <p><TextWithMath text="$x=5$" /> のとき <TextWithMath text="$y=2\times25=50$" />。答えは <strong><TextWithMath text="$0\leqq y\leqq 50$" /></strong>。</p>
          }
        }
      ]
    },
    {
      id: "1-2",
      title: "1(2). t=2 のときの△OACの面積",
      knowledge: ["グラフ上の点の座標", "三角形の面積（y軸で分割）"],
      originalText: (
        <div>
          {intro1}
          <p>(2) <TextWithMath text="$t=2$" /> のとき、△OACの面積を求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 点A, Cの座標',
          content: <p>Aは <TextWithMath text="$y=5x$" /> 上、Bは <TextWithMath text="$y=2x^2$" /> 上で x=2。CはBとy座標が同じで、放物線がy軸対称であることを使います。</p>,
          quiz: {
            type: 'choice',
            question: 'A と C の座標の組は？',
            options: ['A(2, 10)、C(−2, 8)', 'A(2, 8)、C(−2, 10)', 'A(2, 10)、C(−2, −10)'],
            correctAnswer: 'A(2, 10)、C(−2, 8)',
            explanation: <p>A：<TextWithMath text="$y=5\times2=10$" />。B：<TextWithMath text="$y=2\times4=8$" /> で B(2, 8)。CはBとy軸について対称なので C(−2, 8)。</p>
          }
        },
        {
          id: 2, title: '② 直線ACの切片',
          content: <p>△OACを y軸で左右2つの三角形に分けると、底辺は「直線ACとy軸の交点」までの長さになります。</p>,
          quiz: {
            type: 'choice',
            question: '直線ACの式は？',
            options: ['y = x/2 + 9', 'y = 2x + 6', 'y = x/2 + 8'],
            correctAnswer: 'y = x/2 + 9',
            explanation: <p>傾き <TextWithMath text="$\frac{10-8}{2-(-2)} = \frac{1}{2}$" />。<TextWithMath text="$10 = \frac12\times2 + b$" /> より <TextWithMath text="$b=9$" />。y軸との交点は (0, 9) です。</p>
          }
        },
        {
          id: 3, title: '③ 面積を計算する',
          content: <MathText block math="\triangle OAC = \frac{1}{2}\times 9 \times (2 + 2)" />,
          quiz: {
            type: 'choice',
            question: '△OAC の面積は？',
            options: ['18', '9', '36'],
            correctAnswer: '18',
            explanation: (
              <div>
                <p>y軸上の底辺9、左右の高さ2と2の合計4で <TextWithMath text="$\frac12\times9\times4=18$" />。</p>
                <p className="text-sm mt-2">検算：座標の公式 <TextWithMath text="$\frac12|x_Ay_C - x_Cy_A| = \frac12|16+20| = 18$" /> ✓</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "1-3",
      title: "1(3). BC:CD=1:4 となる t",
      knowledge: ["座標を文字で表す", "2次方程式の利用"],
      originalText: (
        <div>
          {intro1}
          <p>(3) BC : CD ＝ 1 : 4 となるとき、<TextWithMath text="$t$" /> の値を求めなさい。ただし、途中の計算も書くこと。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① B, C, D の座標を t で表す',
          content: <p>B は <TextWithMath text="$y=2x^2$" /> 上で x=t。C はその左右対称の点。D は C の真下で <TextWithMath text="$y=5x$" /> 上の点です。</p>,
          quiz: {
            type: 'choice',
            question: 'D の座標は？',
            options: ['(−t, −5t)', '(−t, 5t)', '(t, −5t)'],
            correctAnswer: '(−t, −5t)',
            explanation: <p>B(<TextWithMath text="$t, 2t^2$" />)、C(<TextWithMath text="$-t, 2t^2$" />)、D は x=−t を <TextWithMath text="$y=5x$" /> に入れて (<TextWithMath text="$-t, -5t$" />)。</p>
          }
        },
        {
          id: 2, title: '② 長さを t で表す',
          content: <p>BC は横の長さ（x座標の差）、CD は縦の長さ（y座標の差）です。</p>,
          quiz: {
            type: 'choice',
            question: 'BC と CD の長さの組は？',
            options: ['BC = 2t、CD = 2t² + 5t', 'BC = t、CD = 2t² − 5t', 'BC = 2t、CD = 2t² − 5t'],
            correctAnswer: 'BC = 2t、CD = 2t² + 5t',
            explanation: <p>BC ＝ <TextWithMath text="$t-(-t)=2t$" />。CD ＝ <TextWithMath text="$2t^2-(-5t) = 2t^2+5t$" />（Dはx軸より下なので足し算になる）。</p>
          }
        },
        {
          id: 3, title: '③ 比から方程式をつくる',
          content: <p>BC : CD ＝ 1 : 4 なので、CD ＝ 4×BC です。</p>,
          quiz: {
            type: 'choice',
            question: '正しい方程式は？',
            options: ['2t² + 5t = 8t', '4(2t² + 5t) = 2t', '2t² + 5t = 4t'],
            correctAnswer: '2t² + 5t = 8t',
            explanation: <p>CD ＝ 4BC より <TextWithMath text="$2t^2+5t = 4\times 2t = 8t$" />。比の向きを逆にすると2番目の式になってしまいます。</p>
          }
        },
        {
          id: 4, title: '④ 方程式を解く',
          content: <MathText block math="2t^2 - 3t = 0 \;\Rightarrow\; t(2t-3) = 0" />,
          quiz: {
            type: 'choice',
            question: 't の値は？',
            options: ['t = 3/2', 't = 0, 3/2', 't = 2/3'],
            correctAnswer: 't = 3/2',
            explanation: (
              <div>
                <p><TextWithMath text="$t=0,\ \frac32$" /> ですが、<TextWithMath text="$t>0$" /> なので <strong><TextWithMath text="$t=\frac{3}{2}$" /></strong>。</p>
                <p className="text-sm mt-2">検算：BC＝3、CD＝<TextWithMath text="$2\times\frac94+\frac{15}{2}=12$" /> で 3:12＝1:4 ✓</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "2-1",
      title: "2(1). グラフから速さを読む",
      knowledge: ["速さ = 道のり ÷ 時間", "グラフの読み取り"],
      originalText: (
        <div>
          {intro2}
          <p>(1) 2人が学校を出てから後藤さんの家に着くまでの速さは毎分何mか。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① グラフから距離と時間を読む',
          content: <p>学校（0m）から後藤さんの家までのグラフの部分を見ます。</p>,
          quiz: {
            type: 'choice',
            question: '後藤さんの家までの距離と時間は？',
            options: ['390m を 6分', '950m を 14分', '390m を 14分'],
            correctAnswer: '390m を 6分',
            explanation: <p>グラフの点 (6, 390) から読み取れます。</p>
          }
        },
        {
          id: 2, title: '② 速さを求める',
          content: <p>速さ ＝ 道のり ÷ 時間。</p>,
          quiz: {
            type: 'choice',
            question: '2人の速さは毎分何m？',
            options: ['毎分65m', '毎分70m', '毎分60m'],
            correctAnswer: '毎分65m',
            explanation: <p><TextWithMath text="$390\div6=65$" />。答えは <strong>毎分65m</strong>（グラフの傾きと同じ）。</p>
          }
        }
      ]
    },
    {
      id: "2-2",
      title: "2(2). 別れてから家に着くまでの式",
      knowledge: ["1次関数の式（傾きと1点）"],
      originalText: (
        <div>
          {intro2}
          <p>(2) 前田さんが後藤さんと別れてから自分の家に着くまでの <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係を式で表しなさい。ただし、途中の計算も書くこと。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 傾きは何？',
          content: <p>距離と時間のグラフでは、傾き＝速さ です。この区間、前田さんは毎分70mで歩いています。</p>,
          quiz: {
            type: 'choice',
            question: 'この区間の式 y = ax + b の a は？',
            options: ['70', '65', '950/14'],
            correctAnswer: '70',
            explanation: <p>傾きは70。グラフでも (6, 390) と (14, 950) から <TextWithMath text="$\frac{950-390}{14-6}=\frac{560}{8}=70$" /> と確かめられます。</p>
          }
        },
        {
          id: 2, title: '② 切片を求める',
          content: <p><TextWithMath text="$y=70x+b$" /> に点 (6, 390) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'b の値は？',
            options: ['−30', '30', '390'],
            correctAnswer: '−30',
            explanation: <p><TextWithMath text="$390 = 420 + b$" /> より <TextWithMath text="$b=-30$" />。</p>
          }
        },
        {
          id: 3, title: '③ 式を完成させる',
          content: <p>求めた傾きと切片で式を書き、もう1点で検算します。</p>,
          quiz: {
            type: 'choice',
            question: '求める式は？',
            options: ['y = 70x − 30', 'y = 70x + 30', 'y = 65x'],
            correctAnswer: 'y = 70x − 30',
            explanation: <p><strong><TextWithMath text="$y=70x-30$" /></strong>（<TextWithMath text="$6\leqq x\leqq14$" />）。検算：<TextWithMath text="$x=14$" /> で <TextWithMath text="$980-30=950$" /> ✓</p>
          }
        }
      ]
    },
    {
      id: "2-3",
      title: "2(3). 後藤さんが家を出た時刻",
      knowledge: ["1次関数の式", "追いつきの問題", "分と秒の変換"],
      originalText: (
        <div>
          {intro2}
          <p>(3) 後藤さんは準備を済ませ、自転車に乗って毎分210mの速さで図書館に向かい、図書館まで残り280mの地点で前田さんに追いついた。後藤さんが図書館に向かうために家を出たのは、家に着いてから何分何秒後か。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 追いついた地点',
          content: <p>図書館（1650m）まで残り280mの地点です。</p>,
          quiz: {
            type: 'choice',
            question: '追いついた地点は学校から何m？',
            options: ['1370m', '1930m', '1260m'],
            correctAnswer: '1370m',
            explanation: <p><TextWithMath text="$1650-280=1370$" /> m。</p>
          }
        },
        {
          id: 2, title: '② 追いついた時刻',
          content: <p>前田さんが家を出てから（19分以降）の式は、傾き70で (19, 950) を通ります → <TextWithMath text="$y=70x-380$" />。</p>,
          quiz: {
            type: 'choice',
            question: '前田さんが 1370m 地点にいるのは学校を出て何分後？',
            options: ['25分後', '6分後', '19.6分後'],
            correctAnswer: '25分後',
            explanation: <p><TextWithMath text="$70x-380=1370$" /> より <TextWithMath text="$x=25$" />。（家から <TextWithMath text="$420\div70=6$" /> 分で、19＋6＝25 と考えてもOK）</p>
          }
        },
        {
          id: 3, title: '③ 後藤さんが自転車に乗っていた時間',
          content: <p>後藤さんは家（390m）から1370m地点まで、毎分210mで走りました。</p>,
          quiz: {
            type: 'choice',
            question: '自転車で走った時間は？',
            options: ['4分40秒', '4分20秒', '6分31秒'],
            correctAnswer: '4分40秒',
            explanation: <p><TextWithMath text="$(1370-390)\div210 = 980\div210 = \frac{14}{3}$" /> 分 ＝ 4分40秒（<TextWithMath text="$\frac23$" /> 分＝40秒）。</p>
          }
        },
        {
          id: 4, title: '④ 家を出た時刻を求める',
          content: <p>後藤さんは学校を出て6分後に家に着きました。追いついた25分後から自転車の時間をさかのぼります。</p>,
          quiz: {
            type: 'choice',
            question: '家を出たのは、家に着いてから何分何秒後？',
            options: ['14分20秒後', '20分20秒後', '15分40秒後'],
            correctAnswer: '14分20秒後',
            explanation: (
              <div>
                <p>家を出た時刻は <TextWithMath text="$25-\frac{14}{3}=\frac{61}{3}$" /> 分＝20分20秒（学校を出てから）。家に着いたのは6分なので、20分20秒 − 6分 ＝ <strong>14分20秒後</strong>。</p>
                <p className="text-sm mt-2">「20分20秒後」は学校を出てからの時間のまま答えてしまうミスです。</p>
                <p className="text-sm">検算：20分20秒に390mを出発し、4分40秒×210m＝980m進んで25分に1370m。前田さんも25分に1370m ✓</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
