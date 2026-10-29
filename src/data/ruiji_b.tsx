import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { GraphFig, Pt } from './ruiji_figs';

// 類題テーマB：1次関数と図形（格子点を含む）。栃木県公立入試 大問5（関数と図形）の形式をもとにした練習問題。
// 答え・中間値はすべて python(sympy) で検算済み。格子点の個数も python で実際に数えて確認した。

const M = ({ t }: { t: string }) => <TextWithMath text={t} />;

/* ---------- b1：y=−x+4 と平行四辺形・格子点 ---------- */
const b1Intro = (
  <div className="space-y-2">
    <p>右の図において、直線 <M t="$\ell$" /> は関数 <M t="$y=-x+4$" /> のグラフである。<M t="$x$" /> 軸と直線 <M t="$\ell$" /> 上で、<M t="$x$" /> 座標が <M t="$-t\ (t>0)$" /> である点をそれぞれA、Bとする。また、直線 <M t="$\ell$" /> と <M t="$y$" /> 軸との交点をC、点Aを通り直線 <M t="$\ell$" /> に平行な直線と <M t="$y$" /> 軸との交点をDとし、平行四辺形ABCDをつくる。</p>
    <GraphFig
      xMin={-5} xMax={3} yMin={-5} yMax={9}
      polygons={[{ pts: [[-3, 0], [-3, 7], [0, 4], [0, -3]] }]}
      lines={[{ a: -1, b: 4, x0: -4.5, x1: 2.5, label: 'ℓ' }, { a: -1, b: -3, x0: -4, x1: 1.5, color: '#64748b' }]}
      points={[{ x: -3, y: 0, label: 'A', dx: -12, dy: 13 }, { x: -3, y: 7, label: 'B', dx: -12 }, { x: 0, y: 4, label: 'C', dx: 5 }, { x: 0, y: -3, label: 'D', dx: 5, dy: 10 }]}
      caption="図は t＝3 の場合の一例"
    />
  </div>
);

/* ---------- b2：2直線と y 軸でできる三角形 ---------- */
const b2Intro = (
  <div className="space-y-2">
    <p>右の図のように、直線 <M t="$\ell$" /> は関数 <M t="$y=x+1$" /> のグラフ、直線 <M t="$m$" /> は関数 <M t="$y=-x+7$" /> のグラフである。直線 <M t="$\ell$" /> と直線 <M t="$m$" /> の交点をA、直線 <M t="$\ell$" /> と <M t="$y$" /> 軸との交点をB、直線 <M t="$m$" /> と <M t="$y$" /> 軸との交点をCとする。</p>
    <GraphFig
      xMin={-1} xMax={6} yMin={-1} yMax={9}
      polygons={[{ pts: [[3, 4], [0, 1], [0, 7]] }]}
      lines={[{ a: 1, b: 1, x0: -1, x1: 5, label: 'ℓ' }, { a: -1, b: 7, x0: -0.5, x1: 5.5, label: 'm' }]}
      points={[{ x: 3, y: 4, label: 'A', dx: 2, dy: 14 }, { x: 0, y: 1, label: 'B', dx: -14 }, { x: 0, y: 7, label: 'C', dx: -14 }]}
    />
  </div>
);

/* ---------- b3：直線上を動く点と三角形の面積 ---------- */
const b3Intro = (
  <div className="space-y-2">
    <p>右の図のように、直線 <M t="$\ell$" /> は関数 <M t="$y=-\frac{1}{2}x+6$" /> のグラフであり、<M t="$x$" /> 軸との交点をA、<M t="$y$" /> 軸との交点をBとする。点Pは直線 <M t="$\ell$" /> 上の点で、その <M t="$x$" /> 座標を <M t="$t\ (0<t<12)$" /> とする。ただし、Oは原点とする。</p>
    <GraphFig
      xMin={-1} xMax={13} yMin={-1} yMax={8}
      polygons={[{ pts: [[0, 0], [12, 0], [4, 4]] }]}
      lines={[{ a: -0.5, b: 6, x0: -0.5, x1: 12.5, label: 'ℓ' }]}
      points={[{ x: 12, y: 0, label: 'A', dx: -4, dy: 14 }, { x: 0, y: 6, label: 'B', dx: -14 }, { x: 4, y: 4, label: 'P', dx: 3, dy: -6 }]}
      caption="図は点Pの位置の一例"
    />
  </div>
);

/* ---------- b4：台形の面積を二等分する直線 ---------- */
const b4Intro = (
  <div className="space-y-2">
    <p>右の図のように、直線 <M t="$\ell$" /> は関数 <M t="$y=-\frac{3}{2}x+15$" /> のグラフである。直線 <M t="$\ell$" /> と <M t="$x$" /> 軸との交点をA、直線 <M t="$\ell$" /> と直線 <M t="$y=6$" /> との交点をB、直線 <M t="$y=6$" /> と <M t="$y$" /> 軸との交点をCとし、台形OABCをつくる。ただし、Oは原点とする。</p>
    <GraphFig
      xMin={-1} xMax={12} yMin={-1} yMax={8}
      polygons={[{ pts: [[0, 0], [10, 0], [6, 6], [0, 6]] }]}
      lines={[{ a: -1.5, b: 15, x0: 5.4, x1: 10.6, label: 'ℓ' }, { a: 0, b: 6, x0: 0, x1: 9, color: '#64748b', label: 'y=6' }]}
      points={[{ x: 10, y: 0, label: 'A', dx: -12, dy: 14 }, { x: 6, y: 6, label: 'B', dx: -4, dy: -6 }, { x: 0, y: 6, label: 'C', dx: -14 }]}
    />
  </div>
);

/* ---------- b5：直線と両軸で囲む三角形の格子点 ---------- */
const b5Lattice: { x: number; y: number }[] = [];
for (let yy = 0; yy <= 3; yy++) for (let xx = 0; xx <= 6 - 2 * yy; xx++) b5Lattice.push({ x: xx, y: yy });
const b5Intro = (
  <div className="space-y-2">
    <p><M t="$t$" /> を正の整数とする。右の図のように、直線 <M t="$\ell$" /> は関数 <M t="$y=-\frac{1}{2}x+t$" /> のグラフであり、<M t="$x$" /> 軸との交点をA、<M t="$y$" /> 軸との交点をBとする。ただし、Oは原点とする。</p>
    <GraphFig
      xMin={-1} xMax={8} yMin={-1} yMax={5}
      polygons={[{ pts: [[0, 0], [6, 0], [0, 3]] }]}
      lines={[{ a: -0.5, b: 3, x0: -0.5, x1: 7, label: 'ℓ' }]}
      points={[...b5Lattice, { x: 6, y: 0, label: 'A', dx: 2, dy: 14 }, { x: 0, y: 3, label: 'B', dx: -14 }]}
      caption="図は t＝3 の場合。黒い点は格子点"
    />
  </div>
);

/* ---------- b6：長方形の辺上を動く2点と面積のグラフ ---------- */
function B6RectFig() {
  // 1cm = 20px。A(0,0)左上、B左下、C右下、D右上。図は x=2 のとき（AP=2, CQ=4）
  const L = 42, T = 20, w = 240, h = 120;
  const P: Pt = [L + 2 * 20, T], Q: Pt = [L + w - 4 * 20, T + h];
  const txt = 'text-[12px] font-bold';
  return (
    <div className="my-4 flex justify-center">
      <div className="bg-white rounded-lg p-2">
        <svg viewBox="0 0 300 170" style={{ width: 300 }} className="h-auto">
          <polygon points={`${L},${T} ${L},${T + h} ${Q[0]},${Q[1]} ${P[0]},${P[1]}`} fill="#bfdbfe" fillOpacity="0.6" stroke="none" />
          <rect x={L} y={T} width={w} height={h} fill="none" stroke="#1e293b" strokeWidth="1.8" />
          <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke="#1d4ed8" strokeWidth="1.6" />
          <text x={L - 14} y={T + 4} className={txt} fill="#0f172a">A</text>
          <text x={L - 14} y={T + h + 6} className={txt} fill="#0f172a">B</text>
          <text x={L + w + 4} y={T + h + 6} className={txt} fill="#0f172a">C</text>
          <text x={L + w + 4} y={T + 4} className={txt} fill="#0f172a">D</text>
          <circle cx={P[0]} cy={P[1]} r="3" fill="#1d4ed8" />
          <text x={P[0] - 4} y={T - 6} className={txt} fill="#1d4ed8">P</text>
          <circle cx={Q[0]} cy={Q[1]} r="3" fill="#1d4ed8" />
          <text x={Q[0] - 4} y={T + h + 16} className={txt} fill="#1d4ed8">Q</text>
          <text x={L - 38} y={T + h / 2 + 4} className={txt} fill="#334155">6cm</text>
          <text x={L + w / 2 - 14} y={T + h + 30} className={txt} fill="#334155">12cm</text>
        </svg>
      </div>
    </div>
  );
}
const b6Intro = (
  <div className="space-y-2">
    <p>右の図のような、<M t="$\mathrm{AB}=6\,\mathrm{cm}$" />、<M t="$\mathrm{AD}=12\,\mathrm{cm}$" /> の長方形ABCDがある。点Pは頂点Aを出発し、辺AD上を毎秒1cmの速さで頂点Dまで動く。点Qは点Pと同時に頂点Cを出発し、辺CB上を毎秒2cmの速さで動いて頂点Bに着いたら止まる。</p>
    <B6RectFig />
    <p>点P、Qが出発してから <M t="$x$" /> 秒後の四角形ABQPの面積を <M t="$y\ \mathrm{cm}^2$" /> とする。ただし、点Qが頂点Bにあるときは、四角形ABQPは三角形ABPと考える。下の図は、<M t="$0\leqq x\leqq 12$" /> のときの <M t="$x$" /> と <M t="$y$" /> の関係をグラフに表したものである。</p>
    <GraphFig
      xMax={13} yMax={40}
      xTicks={[6, 12]} yTicks={[18, 36]}
      polylines={[{ pts: [[0, 36], [6, 18], [12, 36]] }]}
      guides={[{ x: 6, y: 18 }, { x: 12, y: 36 }]}
      xLabel="x(秒)" yLabel="y(cm²)"
    />
  </div>
);

export const ruijiB: Record<string, MajorQuestionData> = {
  b1: {
    id: "b1",
    title: "類題B-1：直線 y＝−x＋4 と平行四辺形・格子点",
    subs: [
      {
        id: "1",
        title: "(1) t＝3 のときの点Bのy座標",
        knowledge: ["1次関数のグラフ", "座標"],
        originalText: <div>{b1Intro}<p>(1)　<M t="$t=3$" /> のときの点Bの <M t="$y$" /> 座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Bのx座標',
            content: <p>点Bの <M t="$x$" /> 座標は <M t="$-t$" /> です。<M t="$t=3$" /> のとき、x座標はいくつでしょう。</p>,
            quiz: {
              type: 'choice',
              question: 't＝3 のとき、点Bのx座標は？',
              options: ['−3', '3', '0'],
              correctAnswer: '−3',
              explanation: <p><M t="$-t=-3$" />。<M t="$t>0$" /> なので、点A、Bは <M t="$y$" /> 軸より左側にあります。</p>
            }
          },
          {
            id: 2, title: '② 代入',
            content: <p>点Bは <M t="$y=-x+4$" /> の上にあるので、<M t="$x=-3$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Bのy座標は？',
              options: ['7', '1', '−7'],
              correctAnswer: '7',
              explanation: <p><M t="$y=-(-3)+4=3+4=7$" />。符号を落として <M t="$-3+4=1$" /> としないように。図の点B(−3, 7)とも合います。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 点Bのy座標が9のときの面積",
        knowledge: ["平行線の式", "平行四辺形の面積"],
        originalText: <div>{b1Intro}<p>(2)　点Bの <M t="$y$" /> 座標が9のとき、平行四辺形ABCDの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Bの座標を t で',
            content: <p>点Bは <M t="$y=-x+4$" /> 上で、x座標が <M t="$-t$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標を t で表すと？',
              options: ['(−t, t + 4)', '(−t, −t + 4)', '(t, −t + 4)'],
              correctAnswer: '(−t, t + 4)',
              explanation: <p><M t="$y=-(-t)+4=t+4$" /> です。</p>
            }
          },
          {
            id: 2, title: '② t の値',
            content: <p>点Bの y 座標が9なので、<M t="$t+4=9$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['5', '13', '−5'],
              correctAnswer: '5',
              explanation: <p><M t="$t=9-4=5$" />。A(−5, 0)、B(−5, 9) です。</p>
            }
          },
          {
            id: 3, title: '③ 直線ADと点D',
            content: <p>直線ADは直線ℓに平行なので傾きは −1。点A(−5, 0) を通ります。</p>,
            quiz: {
              type: 'choice',
              question: '点Dの座標は？',
              options: ['(0, −5)', '(0, 5)', '(0, −4)'],
              correctAnswer: '(0, −5)',
              explanation: <p><M t="$y=-x+b$" /> に (−5, 0) を代入すると <M t="$0=5+b$" />、<M t="$b=-5$" />。直線ADは <M t="$y=-x-5$" /> で、D(0, −5) です。</p>
            }
          },
          {
            id: 4, title: '④ 底辺と高さ',
            content: <p>辺CDは y 軸上にあるので底辺にします。C(0, 4)、D(0, −5)。高さは点Aから y 軸までの距離です。</p>,
            quiz: {
              type: 'choice',
              question: '底辺CDの長さと高さは？',
              options: ['底辺9、高さ5', '底辺1、高さ5', '底辺9、高さ4'],
              correctAnswer: '底辺9、高さ5',
              explanation: <p>CD ＝ 4 − (−5) ＝ 9。点A(−5, 0) から y 軸までの距離は5です。</p>
            }
          },
          {
            id: 5, title: '⑤ 面積',
            content: <p>平行四辺形の面積 ＝ 底辺 × 高さ。</p>,
            quiz: {
              type: 'choice',
              question: '平行四辺形ABCDの面積は？',
              options: ['45', '22.5', '20'],
              correctAnswer: '45',
              explanation: <p>9 × 5 ＝ 45。検算：辺ABを底辺にしても AB ＝ 9 − 0 ＝ 9、高さ（ABと y 軸の距離）5 で同じ45です。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 格子点の個数と t の値",
        knowledge: ["格子点", "規則性", "2次方程式"],
        originalText: <div>{b1Intro}<p>(3)　次の文の①、②に当てはまる式や数をそれぞれ求めなさい。</p><div className="border border-slate-400 rounded p-3 space-y-2"><p>点(0, 1)や点(−2, 3)のように、<M t="$x$" /> 座標と <M t="$y$" /> 座標がともに整数である点のことを格子点という。</p><p><M t="$t$" /> を正の整数とするとき、平行四辺形ABCDの内部および周上にある格子点の個数の合計について考える。</p><p><M t="$t$" /> を用いると、辺AB上にある格子点の個数は <M t="$(t+5)$" /> 個、辺AD上にある格子点の個数は（　①　）個とそれぞれ表せる。平行四辺形ABCDの内部および周上にある格子点は、縦に <M t="$(t+5)$" /> 個ずつ並んだ列が、横方向に（　①　）列並んでいるとみることができる。</p><p>したがって、平行四辺形ABCDの内部および周上にある格子点の個数の合計が77個のとき、<M t="$t$" /> の値は（　②　）である。</p></div></div>,
        steps: [
          {
            id: 1, title: '① 辺AB上の格子点（確認）',
            content: <p>辺ABは <M t="$x=-t$" /> 上で、y が 0 から <M t="$t+4$" /> まで。両端を含めて数えます。</p>,
            quiz: {
              type: 'choice',
              question: '0 から t + 4 までの整数は何個？',
              options: ['t + 5 個', 't + 4 個', 't + 3 個'],
              correctAnswer: 't + 5 個',
              explanation: <p>両端を含む個数は「差 ＋ 1」なので <M t="$(t+4)+1=t+5$" />（問題文のとおり）。</p>
            }
          },
          {
            id: 2, title: '② 辺AD上の格子点',
            content: <p>辺ADは <M t="$y=-x-t$" /> 上で、A(−t, 0) から D(0, −t) まで。x が整数なら y も整数になります。</p>,
            quiz: {
              type: 'choice',
              question: '辺AD上の格子点の個数（①）は？',
              options: ['t + 1', 't', 't − 1', '2t + 1', 't + 5'],
              correctAnswer: 't + 1',
              explanation: <p>x ＝ −t, −t＋1, …, −1, 0 の <M t="$t+1$" /> 個。両端を含むので t 個ではありません。</p>
            }
          },
          {
            id: 3, title: '③ 全部の個数',
            content: <p>縦に <M t="$(t+5)$" /> 個の列が、横に <M t="$(t+1)$" /> 列並びます。どの列も (t＋5) 個になるのは、上の端も下の端も傾き −1 の平行な直線だからです。</p>,
            quiz: {
              type: 'choice',
              question: '格子点の合計を t で表すと？',
              options: ['(t + 1)(t + 5)', '(t + 5)²', 't(t + 5)', '(t + 1)(t + 4)', '(t + 5)(2t + 1)'],
              correctAnswer: '(t + 1)(t + 5)',
              explanation: <p>展開して <M t="$t^2+6t+5$" /> 個です。図の t＝3 なら 4 × 8 ＝ 32 個で、実際に数えた個数と一致します。</p>
            }
          },
          {
            id: 4, title: '④ 77個になる t',
            content: <p><M t="$t^2+6t+5=77$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値（②）は？',
              options: ['6', '12', '7'],
              correctAnswer: '6',
              explanation: <p><M t="$t^2+6t-72=0$" /> より <M t="$(t+12)(t-6)=0$" />。t は正の整数なので <M t="$t=6$" />。検算：(6＋1)(6＋5) ＝ 7 × 11 ＝ 77。</p>
            }
          }
        ]
      }
    ]
  },

  b2: {
    id: "b2",
    title: "類題B-2：2直線と y 軸でできる三角形・面積比",
    subs: [
      {
        id: "1",
        title: "(1) 交点Aの座標",
        knowledge: ["連立方程式", "2直線の交点"],
        originalText: <div>{b2Intro}<p>(1)　点Aの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 交点の求め方',
            content: <p>2直線の交点は、2つの式を同時に満たす点です。</p>,
            quiz: {
              type: 'choice',
              question: '交点のx座標を求める方程式は？',
              options: ['x + 1 = −x + 7', 'x + 1 = 0', 'x + 1 + (−x + 7) = 0', '−x + 7 = 0', 'x + 1 = x + 7'],
              correctAnswer: 'x + 1 = −x + 7',
              explanation: <p>y を消去するので、2つの式の右辺どうしを等号で結びます。</p>
            }
          },
          {
            id: 2, title: '② x座標',
            content: <p><M t="$x+1=-x+7$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'x の値は？',
              options: ['3', '4', '6'],
              correctAnswer: '3',
              explanation: <p><M t="$2x=6$" /> より <M t="$x=3$" />。</p>
            }
          },
          {
            id: 3, title: '③ y座標',
            content: <p><M t="$x=3$" /> をどちらかの式に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(3, 4)', '(4, 3)', '(3, 10)'],
              correctAnswer: '(3, 4)',
              explanation: <p><M t="$y=3+1=4$" />。検算：もう一方の式でも <M t="$y=-3+7=4$" /> で一致します。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) △ABCの面積",
        knowledge: ["切片", "三角形の面積"],
        originalText: <div>{b2Intro}<p>(2)　△ABCの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点B、Cの座標',
            content: <p>y 軸との交点は、それぞれの式の切片です。</p>,
            quiz: {
              type: 'choice',
              question: '点B、Cの座標は？',
              options: ['B(0, 1)、C(0, 7)', 'B(0, 7)、C(0, 1)', 'B(1, 0)、C(7, 0)'],
              correctAnswer: 'B(0, 1)、C(0, 7)',
              explanation: <p>ℓ の切片が1なので B(0, 1)、m の切片が7なので C(0, 7) です。</p>
            }
          },
          {
            id: 2, title: '② 底辺',
            content: <p>辺BCは y 軸上にあるので、これを底辺にすると計算が楽です。</p>,
            quiz: {
              type: 'choice',
              question: '底辺BCの長さは？',
              options: ['6', '8', '7'],
              correctAnswer: '6',
              explanation: <p>7 − 1 ＝ 6。</p>
            }
          },
          {
            id: 3, title: '③ 高さ',
            content: <p>底辺が y 軸上にあるとき、高さは頂点Aから y 軸までの距離です。</p>,
            quiz: {
              type: 'choice',
              question: '高さは？',
              options: ['3（Aのx座標）', '4（Aのy座標）', '7（Cのy座標）', '1（Bのy座標）', '6（BCの長さ）'],
              correctAnswer: '3（Aのx座標）',
              explanation: <p>y 軸までの距離は x 座標で決まります。A(3, 4) なので高さは3。</p>
            }
          },
          {
            id: 4, title: '④ 面積',
            content: <p>三角形の面積 ＝ 底辺 × 高さ ÷ 2。</p>,
            quiz: {
              type: 'choice',
              question: '△ABCの面積は？',
              options: ['9', '18', '12'],
              correctAnswer: '9',
              explanation: <p>6 × 3 ÷ 2 ＝ 9。÷2 を忘れると18になります。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △PBC：△PAB＝1：2 となる t",
        knowledge: ["面積を文字で表す", "面積比", "1次方程式"],
        originalText: <div>{b2Intro}<p>(3)　直線 <M t="$m$" /> 上の点A、Cの間に点Pをとり、点Pの <M t="$x$" /> 座標を <M t="$t$" /> とする。△PBCの面積と△PABの面積の比が <M t="$1:2$" /> となるときの <M t="$t$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① t の範囲',
            content: <p>点Pは線分AC上（両端をのぞく）にあります。C の x 座標は0、A の x 座標は3です。</p>,
            quiz: {
              type: 'choice',
              question: 't のとりうる範囲は？',
              options: ['0 < t < 3', '0 < t < 4', '1 < t < 7', '3 < t < 7', '0 < t < 6'],
              correctAnswer: '0 < t < 3',
              explanation: <p>CからAまで x 座標は0から3まで動くので、<M t="$0<t<3$" />。</p>
            }
          },
          {
            id: 2, title: '② △PBCの面積',
            content: <p>△PBCは底辺BC ＝ 6（y 軸上）、高さは点Pから y 軸までの距離です。</p>,
            quiz: {
              type: 'choice',
              question: '△PBCの面積を t で表すと？',
              options: ['3t', '6t', 't', '3t + 3', '9 − 3t'],
              correctAnswer: '3t',
              explanation: <p>高さは P の x 座標 t。<M t="$6\times t\div 2=3t$" />。</p>
            }
          },
          {
            id: 3, title: '③ △PABの面積',
            content: <p>△ABCは、線分BPで△PBCと△PABの2つに分かれます。(2)より△ABC ＝ 9。</p>,
            quiz: {
              type: 'choice',
              question: '△PABの面積を t で表すと？',
              options: ['9 − 3t', '3t − 9', '9 + 3t', '6 − 3t', '9 − t'],
              correctAnswer: '9 − 3t',
              explanation: <p>全体から△PBCをひいて <M t="$9-3t$" />。</p>
            }
          },
          {
            id: 4, title: '④ 比の式',
            content: <p><M t="$3t:(9-3t)=1:2$" />。比の外側どうし、内側どうしをかけて等しくします。</p>,
            quiz: {
              type: 'choice',
              question: '正しい方程式は？',
              options: ['2 × 3t = 9 − 3t', '3t = 2(9 − 3t)', '3t + (9 − 3t) = 3', '2 × 3t = 9', '3t = 9 − 3t'],
              correctAnswer: '2 × 3t = 9 − 3t',
              explanation: <p><M t="$a:b=1:2$" /> なら <M t="$2a=b$" />。小さいほう（△PBC）を2倍すると△PABになります。</p>
            }
          },
          {
            id: 5, title: '⑤ t の値',
            content: <p><M t="$6t=9-3t$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['1', '2', '3/2'],
              correctAnswer: '1',
              explanation: <p><M t="$9t=9$" /> より <M t="$t=1$" />（<M t="$0<t<3$" /> を満たす）。検算：P(1, 6) で△PBC ＝ 3、△PAB ＝ 9 − 3 ＝ 6、比は 3：6 ＝ 1：2。</p>
            }
          }
        ]
      }
    ]
  },

  b3: {
    id: "b3",
    title: "類題B-3：直線上を動く点と三角形の面積",
    subs: [
      {
        id: "1",
        title: "(1) 点Aの座標",
        knowledge: ["x軸との交点", "1次方程式"],
        originalText: <div>{b3Intro}<p>(1)　点Aの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① x軸との交点',
            content: <p><M t="$x$" /> 軸上の点は y 座標が0です。</p>,
            quiz: {
              type: 'choice',
              question: '点Aのx座標を求める方程式は？',
              options: ['−x/2 + 6 = 0', '−x/2 + 6 = x', 'x = 0 を代入する', '−x/2 = 6', '−x/2 + 6 = 6'],
              correctAnswer: '−x/2 + 6 = 0',
              explanation: <p>y に0を代入します。x に0を代入すると y 軸との交点Bが出てしまいます。</p>
            }
          },
          {
            id: 2, title: '② 解く',
            content: <p><M t="$-\frac{1}{2}x+6=0$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(12, 0)', '(3, 0)', '(0, 6)'],
              correctAnswer: '(12, 0)',
              explanation: <p><M t="$\frac{1}{2}x=6$" /> より <M t="$x=12$" />。検算：<M t="$-\frac{1}{2}\times 12+6=0$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) t＝6 のときの△OAPの面積",
        knowledge: ["座標", "三角形の面積"],
        originalText: <div>{b3Intro}<p>(2)　<M t="$t=6$" /> のとき、△OAPの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Pの座標',
            content: <p>点Pは直線ℓ上で、x座標は6です。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(6, 3)', '(6, 9)', '(6, 0)'],
              correctAnswer: '(6, 3)',
              explanation: <p><M t="$y=-\frac{1}{2}\times 6+6=3$" />。</p>
            }
          },
          {
            id: 2, title: '② 底辺と高さ',
            content: <p>△OAPの辺OAは x 軸上にあるので底辺にします。高さは点Pから x 軸までの距離です。</p>,
            quiz: {
              type: 'choice',
              question: '底辺OAと高さは？',
              options: ['底辺12、高さ3', '底辺12、高さ6', '底辺6、高さ3'],
              correctAnswer: '底辺12、高さ3',
              explanation: <p>OA ＝ 12（(1)より）。x 軸までの距離は y 座標なので高さ3。</p>
            }
          },
          {
            id: 3, title: '③ 面積',
            content: <p>底辺 × 高さ ÷ 2。</p>,
            quiz: {
              type: 'choice',
              question: '△OAPの面積は？',
              options: ['18', '36', '9'],
              correctAnswer: '18',
              explanation: <p>12 × 3 ÷ 2 ＝ 18。検算：Pは線分ABの中点なので、△OAB ＝ 12 × 6 ÷ 2 ＝ 36 のちょうど半分になっています。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △OAP：△OBP＝3：1 となる t",
        knowledge: ["面積を文字で表す", "1次方程式"],
        originalText: <div>{b3Intro}<p>(3)　次の文の①、②に当てはまる式や数をそれぞれ求めなさい。</p><div className="border border-slate-400 rounded p-3 space-y-2"><p>△OAPの面積は <M t="$t$" /> を用いて（　①　）と表せる。また、△OAPの面積と△OBPの面積の比が <M t="$3:1$" /> となるとき、<M t="$t$" /> の値は（　②　）である。</p></div></div>,
        steps: [
          {
            id: 1, title: '① 点Pの y 座標',
            content: <p>点Pの x 座標は t です。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの y 座標を t で表すと？',
              options: ['−t/2 + 6', 't/2 + 6', '−2t + 6', '−t/2 − 6', '6 − t'],
              correctAnswer: '−t/2 + 6',
              explanation: <p>式に <M t="$x=t$" /> を代入して <M t="$-\frac{1}{2}t+6$" />。</p>
            }
          },
          {
            id: 2, title: '② △OAPの面積（①）',
            content: <p>底辺OA ＝ 12、高さは点Pの y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: '△OAPの面積（①）は？',
              options: ['−3t + 36', '−6t + 72', '−3t + 6', '3t', '−t + 36'],
              correctAnswer: '−3t + 36',
              explanation: <p><M t="$12\times\left(-\frac{1}{2}t+6\right)\div 2=6\left(-\frac{1}{2}t+6\right)=-3t+36$" />。t＝6 を入れると18で、(2)と一致します。</p>
            }
          },
          {
            id: 3, title: '③ △OBPの面積',
            content: <p>△OBPは辺OBが y 軸上にあるので、底辺OB ＝ 6、高さは点Pから y 軸までの距離です。</p>,
            quiz: {
              type: 'choice',
              question: '△OBPの面積を t で表すと？',
              options: ['3t', '6t', 't/2', '3t + 6', '36 − 3t'],
              correctAnswer: '3t',
              explanation: <p>高さは P の x 座標 t。<M t="$6\times t\div 2=3t$" />。</p>
            }
          },
          {
            id: 4, title: '④ 比の式',
            content: <p><M t="$(-3t+36):3t=3:1$" />。</p>,
            quiz: {
              type: 'choice',
              question: '正しい方程式は？',
              options: ['−3t + 36 = 3 × 3t', '3(−3t + 36) = 3t', '−3t + 36 = 3t', '−3t + 36 + 3t = 3', '−3t + 36 = 3t + 3'],
              correctAnswer: '−3t + 36 = 3 × 3t',
              explanation: <p>△OAPが△OBPの3倍なので、<M t="$-3t+36=9t$" />。</p>
            }
          },
          {
            id: 5, title: '⑤ t の値（②）',
            content: <p><M t="$-3t+36=9t$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値（②）は？',
              options: ['3', '4', '9'],
              correctAnswer: '3',
              explanation: <p><M t="$12t=36$" /> より <M t="$t=3$" />。検算：△OAP ＝ −9 ＋ 36 ＝ 27、△OBP ＝ 9、比は 27：9 ＝ 3：1。</p>
            }
          }
        ]
      }
    ]
  },

  b4: {
    id: "b4",
    title: "類題B-4：台形の面積を二等分する直線",
    subs: [
      {
        id: "1",
        title: "(1) 点Bの座標",
        knowledge: ["2直線の交点"],
        originalText: <div>{b4Intro}<p>(1)　点Bの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 方程式をつくる',
            content: <p>点Bは直線ℓと直線 <M t="$y=6$" /> の交点なので、y 座標は6です。</p>,
            quiz: {
              type: 'choice',
              question: '点Bのx座標を求める方程式は？',
              options: ['−3x/2 + 15 = 6', '−3x/2 + 15 = 0', '−3x/2 = 6', '−3x/2 + 6 = 15', '−3x/2 + 15 = x'],
              correctAnswer: '−3x/2 + 15 = 6',
              explanation: <p>ℓの式の y に6を代入します。</p>
            }
          },
          {
            id: 2, title: '② 解く',
            content: <p><M t="$-\frac{3}{2}x+15=6$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(6, 6)', '(14, 6)', '(10, 6)'],
              correctAnswer: '(6, 6)',
              explanation: <p><M t="$-\frac{3}{2}x=-9$" /> より <M t="$x=6$" />。検算：<M t="$-\frac{3}{2}\times 6+15=-9+15=6$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 台形OABCの面積",
        knowledge: ["x軸との交点", "台形の面積"],
        originalText: <div>{b4Intro}<p>(2)　台形OABCの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Aの座標',
            content: <p>点Aは直線ℓと x 軸の交点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(10, 0)', '(15, 0)', '(0, 15)'],
              correctAnswer: '(10, 0)',
              explanation: <p><M t="$-\frac{3}{2}x+15=0$" /> より <M t="$x=10$" />。</p>
            }
          },
          {
            id: 2, title: '② 上底・下底・高さ',
            content: <p>辺CBと辺OAが平行です。C(0, 6)、B(6, 6)、O(0, 0)、A(10, 0)。</p>,
            quiz: {
              type: 'choice',
              question: '上底CB、下底OA、高さは？',
              options: ['上底6、下底10、高さ6', '上底6、下底10、高さ10', '上底4、下底10、高さ6'],
              correctAnswer: '上底6、下底10、高さ6',
              explanation: <p>CB ＝ 6 − 0 ＝ 6、OA ＝ 10、高さは OC ＝ 6。</p>
            }
          },
          {
            id: 3, title: '③ 面積',
            content: <p>台形の面積 ＝（上底 ＋ 下底）× 高さ ÷ 2。</p>,
            quiz: {
              type: 'choice',
              question: '台形OABCの面積は？',
              options: ['48', '96', '60'],
              correctAnswer: '48',
              explanation: <p>(6 ＋ 10) × 6 ÷ 2 ＝ 48。検算：長方形ODBC（D(6, 0)）36 と 三角形DAB 4 × 6 ÷ 2 ＝ 12 の和も48です。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 点Cを通り面積を二等分する直線",
        knowledge: ["面積の二等分", "2点を通る直線の式"],
        originalText: <div>{b4Intro}<p>(3)　点Cを通り、台形OABCの面積を二等分する直線と辺OAとの交点をP(<M t="$t$" />, 0)とする。<M t="$t$" /> の値と、直線CPの式をそれぞれ求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 切り取られる図形',
            content: <p>点Cから辺OA上の点Pへ直線を引くと、台形は2つに分かれます。原点O側にできる図形を考えます。</p>,
            quiz: {
              type: 'choice',
              question: 'O側にできる図形は？',
              options: ['三角形OPC', '四角形OPBC', '三角形CPB', '三角形OAB', '台形PABC'],
              correctAnswer: '三角形OPC',
              explanation: <p>頂点O、P、Cの直角三角形です。残りは四角形PABCになります。</p>
            }
          },
          {
            id: 2, title: '② △OPCの面積',
            content: <p>OP ＝ t、OC ＝ 6 の直角三角形です。</p>,
            quiz: {
              type: 'choice',
              question: '△OPCの面積を t で表すと？',
              options: ['3t', '6t', 't/2', '3t + 6', '48 − 3t'],
              correctAnswer: '3t',
              explanation: <p><M t="$t\times 6\div 2=3t$" />。</p>
            }
          },
          {
            id: 3, title: '③ 方程式',
            content: <p>二等分するので、△OPCは台形の面積48の半分です。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['8', '16', '4'],
              correctAnswer: '8',
              explanation: <p><M t="$3t=24$" /> より <M t="$t=8$" />。<M t="$0\leqq 8\leqq 10$" /> なので、Pはちゃんと辺OA上にあります。</p>
            }
          },
          {
            id: 4, title: '④ 傾き',
            content: <p>直線CPは C(0, 6) と P(8, 0) を通ります。</p>,
            quiz: {
              type: 'choice',
              question: '直線CPの傾きは？',
              options: ['−3/4', '−4/3', '3/4'],
              correctAnswer: '−3/4',
              explanation: <p><M t="$\frac{0-6}{8-0}=-\frac{6}{8}=-\frac{3}{4}$" />。</p>
            }
          },
          {
            id: 5, title: '⑤ 直線の式',
            content: <p>切片は点Cの y 座標6です。</p>,
            quiz: {
              type: 'choice',
              question: '直線CPの式は？',
              options: ['y = −3x/4 + 6', 'y = −4x/3 + 6', 'y = 3x/4 + 6', 'y = −3x/4 + 8', 'y = −3x/4 − 6'],
              correctAnswer: 'y = −3x/4 + 6',
              explanation: <p><M t="$y=-\frac{3}{4}x+6$" />。検算：<M t="$x=8$" /> を入れると <M t="$-6+6=0$" /> で P を通ります。△OPC ＝ 8 × 6 ÷ 2 ＝ 24 ＝ 48 の半分。</p>
            }
          }
        ]
      }
    ]
  },

  b5: {
    id: "b5",
    title: "類題B-5：直線と両軸で囲む三角形の格子点",
    subs: [
      {
        id: "1",
        title: "(1) t＝4 のときの点Aの座標",
        knowledge: ["x軸との交点"],
        originalText: <div>{b5Intro}<p>(1)　<M t="$t=4$" /> のとき、点Aの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 式に t を入れる',
            content: <p><M t="$t=4$" /> のとき、直線ℓの式は <M t="$y=-\frac{1}{2}x+4$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '点Aを求めるには、何を代入する？',
              options: ['y = 0', 'x = 0', 'x = 4', 'y = 4', 'x = y'],
              correctAnswer: 'y = 0',
              explanation: <p>点Aは x 軸上の点なので y 座標が0です。</p>
            }
          },
          {
            id: 2, title: '② 解く',
            content: <p><M t="$-\frac{1}{2}x+4=0$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(8, 0)', '(2, 0)', '(0, 4)'],
              correctAnswer: '(8, 0)',
              explanation: <p><M t="$\frac{1}{2}x=4$" /> より <M t="$x=8$" />。一般に A(2t, 0) で、図の t＝3 なら A(6, 0) です。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) t＝4 のときの△OABの面積",
        knowledge: ["三角形の面積"],
        originalText: <div>{b5Intro}<p>(2)　<M t="$t=4$" /> のとき、△OABの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Bの座標',
            content: <p>点Bは y 軸との交点、つまり切片です。</p>,
            quiz: {
              type: 'choice',
              question: 't＝4 のとき、点Bの座標は？',
              options: ['(0, 4)', '(0, 8)', '(0, 2)'],
              correctAnswer: '(0, 4)',
              explanation: <p>切片は t なので B(0, 4)。</p>
            }
          },
          {
            id: 2, title: '② 底辺と高さ',
            content: <p>△OABは直角三角形です。OAを底辺、OBを高さにします。</p>,
            quiz: {
              type: 'choice',
              question: 'OAとOBの長さは？',
              options: ['OA＝8、OB＝4', 'OA＝4、OB＝8', 'OA＝8、OB＝8'],
              correctAnswer: 'OA＝8、OB＝4',
              explanation: <p>(1)より A(8, 0)、B(0, 4)。</p>
            }
          },
          {
            id: 3, title: '③ 面積',
            content: <p>底辺 × 高さ ÷ 2。</p>,
            quiz: {
              type: 'choice',
              question: '△OABの面積は？',
              options: ['16', '32', '12'],
              correctAnswer: '16',
              explanation: <p>8 × 4 ÷ 2 ＝ 16。一般に 2t × t ÷ 2 ＝ <M t="$t^2$" /> なので、t＝4 で16。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 格子点の個数と t の値",
        knowledge: ["格子点", "規則性", "奇数の和"],
        originalText: <div>{b5Intro}<p>(3)　次の文の①、②、③に当てはまる式や数をそれぞれ求めなさい。</p><div className="border border-slate-400 rounded p-3 space-y-2"><p><M t="$x$" /> 座標と <M t="$y$" /> 座標がともに整数である点のことを格子点という。△OABの内部および周上にある格子点の個数の合計について考える。</p><p>格子点を横の行ごとに数える。<M t="$y=0$" /> の行（辺OA上）には（　①　）個、<M t="$y=t$" /> の行には1個の格子点があり、行が1つ上がるごとに格子点は2個ずつ減る。したがって、格子点の個数の合計は <M t="$t$" /> を用いて（　②　）個と表せる。</p><p>格子点の個数の合計が64個のとき、<M t="$t$" /> の値は（　③　）である。</p></div></div>,
        steps: [
          {
            id: 1, title: '① 辺OA上の格子点（①）',
            content: <p>辺OAは x 軸上で、x が 0 から 2t まで。両端を含めて数えます。</p>,
            quiz: {
              type: 'choice',
              question: 'y＝0 の行の格子点の個数（①）は？',
              options: ['2t + 1', '2t', 't + 1', '2t − 1', 't'],
              correctAnswer: '2t + 1',
              explanation: <p>0, 1, 2, …, 2t の <M t="$2t+1$" /> 個（差 ＋ 1）。図の t＝3 なら7個です。</p>
            }
          },
          {
            id: 2, title: '② 行ごとの個数',
            content: <p><M t="$y=k$" /> の行では、x は 0 から <M t="$2(t-k)$" /> まで。y が1増えると、ℓの上の x は2減ります。</p>,
            quiz: {
              type: 'choice',
              question: '下の行から順に並べると、個数はどうなる？',
              options: ['2t+1, 2t−1, …, 3, 1（奇数が並ぶ）', '2t, 2t−2, …, 2（偶数が並ぶ）', '2t+1, 2t, …, 2, 1（1ずつ減る）', 't+1, t, …, 1', '2t+1 個がすべての行に並ぶ'],
              correctAnswer: '2t+1, 2t−1, …, 3, 1（奇数が並ぶ）',
              explanation: <p>どの行も「最大の x ＋ 1」個。<M t="$2(t-k)+1$" /> は奇数です。図の t＝3 なら下から 7, 5, 3, 1 個。</p>
            }
          },
          {
            id: 3, title: '③ 合計（②）',
            content: <p>1から始まる奇数を（t＋1）個たした和です。1 ＋ 3 ＝ 4、1 ＋ 3 ＋ 5 ＝ 9、1 ＋ 3 ＋ 5 ＋ 7 ＝ 16…と考えます。</p>,
            quiz: {
              type: 'choice',
              question: '格子点の合計（②）を t で表すと？',
              options: ['(t + 1)²', 't²', '(2t + 1)²', '(t + 1)(2t + 1)', 't(t + 1)'],
              correctAnswer: '(t + 1)²',
              explanation: <p>1から順に奇数を n 個たすと <M t="$n^2$" />。いまは <M t="$n=t+1$" /> 個なので <M t="$(t+1)^2$" /> 個。図の t＝3 で数えると 7＋5＋3＋1 ＝ 16 ＝ <M t="$4^2$" /> で一致します。</p>
            }
          },
          {
            id: 4, title: '④ 64個になる t（③）',
            content: <p><M t="$(t+1)^2=64$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値（③）は？',
              options: ['7', '8', '9'],
              correctAnswer: '7',
              explanation: <p><M t="$t+1=\pm 8$" />。t は正の整数なので <M t="$t+1=8$" />、<M t="$t=7$" />。検算：下から 15, 13, …, 3, 1 の8行で、和は64。</p>
            }
          }
        ]
      }
    ]
  },

  b6: {
    id: "b6",
    title: "類題B-6：長方形の辺上を動く2点と面積のグラフ",
    subs: [
      {
        id: "1",
        title: "(1) x＝4 のときの y の値",
        knowledge: ["動点", "台形の面積"],
        originalText: <div>{b6Intro}<p>(1)　<M t="$x=4$" /> のときの <M t="$y$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Pの位置',
            content: <p>点Pは毎秒1cmで、Aから辺AD上を動きます。</p>,
            quiz: {
              type: 'choice',
              question: 'x＝4 のとき、APの長さは？',
              options: ['4cm', '8cm', '2cm'],
              correctAnswer: '4cm',
              explanation: <p>1 × 4 ＝ 4（cm）。</p>
            }
          },
          {
            id: 2, title: '② 点Qの位置',
            content: <p>点Qは毎秒2cmで、Cから辺CB上を動きます。四角形ABQPの面積に必要なのは BQ の長さです。</p>,
            quiz: {
              type: 'choice',
              question: 'x＝4 のとき、BQの長さは？',
              options: ['4cm', '8cm', '2cm'],
              correctAnswer: '4cm',
              explanation: <p>CQ ＝ 2 × 4 ＝ 8 なので、BQ ＝ 12 − 8 ＝ 4（cm）。CQ の8をそのまま使わないように。</p>
            }
          },
          {
            id: 3, title: '③ 図形の形',
            content: <p>AP と BQ は平行で、AB はそれらに垂直です。</p>,
            quiz: {
              type: 'choice',
              question: '四角形ABQPは何として面積を求める？',
              options: ['上底AP、下底BQ、高さABの台形', '底辺AB、高さAPの三角形', '縦AB、横APの長方形', '対角線APとBQのひし形', '底辺BQ、高さAPの平行四辺形'],
              correctAnswer: '上底AP、下底BQ、高さABの台形',
              explanation: <p>AD ∥ BC なので AP ∥ BQ。AB ＝ 6 が高さです。</p>
            }
          },
          {
            id: 4, title: '④ 面積',
            content: <p>（上底 ＋ 下底）× 高さ ÷ 2。</p>,
            quiz: {
              type: 'choice',
              question: 'x＝4 のときの y は？',
              options: ['24', '48', '12'],
              correctAnswer: '24',
              explanation: <p>(4 ＋ 4) × 6 ÷ 2 ＝ 24。検算：<M t="$0\leqq x\leqq 6$" /> の式 <M t="$y=-3x+36$" /> に x＝4 を入れても24です。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 6≦x≦12 のときの式",
        knowledge: ["動点", "1次関数の式"],
        originalText: <div>{b6Intro}<p>(2)　<M t="$6\leqq x\leqq 12$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Qはどこ？',
            content: <p>点Qは CB ＝ 12cm を毎秒2cmで進みます。</p>,
            quiz: {
              type: 'choice',
              question: '点QがBに着くのは何秒後？',
              options: ['6秒後', '12秒後', '24秒後'],
              correctAnswer: '6秒後',
              explanation: <p>12 ÷ 2 ＝ 6（秒後）。グラフの折れ目が x＝6 にあるのはこのためです。</p>
            }
          },
          {
            id: 2, title: '② 図形の形',
            content: <p><M t="$6\leqq x\leqq 12$" /> のとき、点Qは頂点Bで止まっています。</p>,
            quiz: {
              type: 'choice',
              question: 'このときの図形と、底辺・高さは？',
              options: ['三角形ABP：底辺AP、高さAB', '三角形ABP：底辺AB、高さBQ', '台形ABQP：上底AP、下底BQ', '三角形APD：底辺PD、高さAB', '長方形ABCD：縦AB、横AD'],
              correctAnswer: '三角形ABP：底辺AP、高さAB',
              explanation: <p>QがBに重なるので三角形ABP。∠BAP ＝ 90° なので AP を底辺、AB を高さにできます。</p>
            }
          },
          {
            id: 3, title: '③ 式',
            content: <p>AP ＝ x、AB ＝ 6 です。</p>,
            quiz: {
              type: 'choice',
              question: 'y を x の式で表すと？',
              options: ['y = 3x', 'y = 6x', 'y = −3x + 36', 'y = 3x + 18', 'y = x/2'],
              correctAnswer: 'y = 3x',
              explanation: <p><M t="$y=x\times 6\div 2=3x$" />。検算：グラフの点(6, 18)、(12, 36) をどちらも通ります。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) x＝t と x＝t＋6 で面積が等しくなる t",
        knowledge: ["グラフの式", "1次方程式"],
        originalText: <div>{b6Intro}<p>(3)　<M t="$0<t<6$" /> とする。<M t="$x=t$" /> のときの四角形ABQPの面積と、<M t="$x=t+6$" /> のときの三角形ABPの面積が等しくなるような <M t="$t$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 0≦x≦6 の式',
            content: <p>x 秒後、AP ＝ x、BQ ＝ 12 − 2x の台形です。グラフでは (0, 36) と (6, 18) を結ぶ直線です。</p>,
            quiz: {
              type: 'choice',
              question: '0≦x≦6 のときの y の式は？',
              options: ['y = −3x + 36', 'y = 3x + 36', 'y = −2x + 36', 'y = −3x + 18', 'y = −6x + 36'],
              correctAnswer: 'y = −3x + 36',
              explanation: <p><M t="$y=\{x+(12-2x)\}\times 6\div 2=3(12-x)=-3x+36$" />。傾きは <M t="$\frac{18-36}{6-0}=-3$" /> でも確かめられます。</p>
            }
          },
          {
            id: 2, title: '② x＝t と x＝t＋6 の面積',
            content: <p><M t="$0<t<6$" /> なので x＝t は前半の式、<M t="$6<t+6<12$" /> なので x＝t＋6 は(2)の式を使います。</p>,
            quiz: {
              type: 'choice',
              question: 'それぞれの面積を t で表すと？',
              options: ['−3t + 36 と 3t + 18', '−3t + 36 と 3t', '−3t + 36 と −3t + 18', '3t と 3t + 18', '−3t + 18 と 3t + 18'],
              correctAnswer: '−3t + 36 と 3t + 18',
              explanation: <p>x＝t＋6 のときは <M t="$y=3(t+6)=3t+18$" />。t をそのまま入れて 3t としないように。</p>
            }
          },
          {
            id: 3, title: '③ 方程式を解く',
            content: <p><M t="$-3t+36=3t+18$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['3', '9', '6'],
              correctAnswer: '3',
              explanation: <p><M t="$6t=18$" /> より <M t="$t=3$" />（<M t="$0<t<6$" /> を満たす）。検算：x＝3 で −9 ＋ 36 ＝ 27、x＝9 で 3 × 9 ＝ 27 と等しくなります。グラフで y＝27 の高さに引いた横線が、V字と交わる2点にあたります。</p>
            }
          }
        ]
      }
    ]
  }
};
