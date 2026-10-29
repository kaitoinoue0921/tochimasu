import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { GraphFig } from './ruiji_figs';

// 実力テスト形式 テーマE：直線の式を求めて、交点を出す。
// 式・交点・面積・中間値はすべて python(fractions) で検算済み。交点はすべて整数座標。

const M = ({ t }: { t: string }) => <TextWithMath text={t} />;
const RED = '#dc2626';
const BLUE = '#2563eb';

/* ───────── e1：2点を通る直線と y=x+k の交点 ───────── */
const E1Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMin={-3} xMax={7} yMin={-6} yMax={8}
    xTicks={ans ? [-2, 2, 4, 6] : [-2, 4, 6]} yTicks={ans ? [7, 3, -3, -5] : [7, 3, -5]}
    lines={[
      { a: -2, b: 3, x0: -2.5, x1: 4.5, label: 'ℓ' },
      ...(ans ? [{ a: 1, b: -3, x0: -2.5, x1: 7, color: RED, label: 'm' }] : []),
    ]}
    points={[
      { x: -2, y: 7, label: 'A', dx: 5, dy: 0 },
      { x: 4, y: -5, label: 'B', dx: 5, dy: 0 },
      { x: 6, y: 3, label: 'D', dx: -12, dy: -6 },
      ...(ans ? [{ x: 2, y: -1, label: 'P', dx: 6, dy: 10 }, { x: 0, y: 3, label: 'C', dx: 5, dy: -4 }, { x: 0, y: -3, label: 'E', dx: 5, dy: 12 }] : []),
    ]}
    polygons={ans ? [{ pts: [[0, 3], [0, -3], [2, -1]] }] : undefined}
    guides={[{ x: -2, y: 7 }, { x: 4, y: -5 }, { x: 6, y: 3 }]}
    caption={ans ? 'P(2, −1)。色をつけた部分が△PCE' : undefined}
  />
);
const e1Intro = (
  <div className="space-y-2">
    <p>下の図のように、2点A <M t="$(-2,\ 7)$" />、B <M t="$(4,\ -5)$" /> を通る直線を <M t="$\ell$" /> とする。また、関数 <M t="$y=x+k$" />（<M t="$k$" /> は定数）のグラフを直線 <M t="$m$" /> とすると、直線 <M t="$m$" /> は点D <M t="$(6,\ 3)$" /> を通る。</p>
    <p>直線 <M t="$\ell$" /> と直線 <M t="$m$" /> の交点をP、直線 <M t="$\ell$" /> と <M t="$y$" /> 軸との交点をC、直線 <M t="$m$" /> と <M t="$y$" /> 軸との交点をEとする。</p>
    <E1Fig />
  </div>
);

/* ───────── e2：y=ax+b の a, b と平行な直線 ───────── */
const E2Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMin={-4} xMax={4} yMin={-8} yMax={8}
    xTicks={ans ? [-2, -1, 1] : [1]} yTicks={ans ? [3, -6] : [3, -6]}
    lines={[
      { a: -3, b: 3, x0: -1.5, x1: 3, label: 'ℓ' },
      ...(ans ? [
        { a: -3, b: -3, x0: -3.5, x1: 1.5, color: RED, label: 'm' },
        { a: -1, b: 1, x0: -4, x1: 3.5, color: BLUE, label: 'n' },
      ] : []),
    ]}
    points={[
      { x: 1, y: 0, label: 'A', dx: 4, dy: -6 },
      { x: 1, y: -6, label: 'C', dx: 5, dy: 4 },
      ...(ans ? [{ x: -2, y: 3, label: 'P', dx: -14, dy: -4 }, { x: -1, y: 0, label: 'B', dx: -12, dy: 12 }] : []),
    ]}
    polygons={ans ? [{ pts: [[1, 0], [-2, 3], [-1, 0]] }] : undefined}
    guides={[{ x: 1, y: -6 }, ...(ans ? [{ x: -2, y: 3 }] : [])]}
    caption={ans ? 'm は ℓ を下へ6だけ平行移動した直線。色をつけた部分が△APB' : undefined}
  />
);
const e2Intro = (
  <div className="space-y-2">
    <p>下の図の直線 <M t="$\ell$" /> は関数 <M t="$y=ax+b$" /> のグラフで、<M t="$y$" /> 軸と点 <M t="$(0,\ 3)$" /> で、<M t="$x$" /> 軸と点A <M t="$(1,\ 0)$" /> で交わっている。また、点Cの座標は <M t="$(1,\ -6)$" /> である。</p>
    <E2Fig />
  </div>
);

/* ───────── e3：線分上を往復する点Pと点Q ───────── */
const E3Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMax={38} yMax={40}
    xTicks={ans ? [9, 12, 16, 21, 36] : [12, 21]} yTicks={ans ? [20, 36] : [36]}
    polylines={[
      { pts: [[0, 0], [12, 36], [21, 0]] },
      ...(ans ? [{ pts: [[0, 36], [36, 0]] as [number, number][], color: RED, dash: true }] : []),
    ]}
    points={ans ? [{ x: 16, y: 20, label: '追い越し', dx: 5, dy: -4 }, { x: 9, y: 27, label: 'すれ違い', dx: -50, dy: -6 }] : [{ x: 12, y: 36 }, { x: 21, y: 0 }]}
    guides={[{ x: 12, y: 36 }, ...(ans ? [{ x: 16, y: 20 }] : [])]}
    xLabel="x(秒)" yLabel="y(cm)"
    caption={ans ? '赤の点線が点Q。(0, 36) から (36, 0) まで' : undefined}
  />
);
const e3Intro = (
  <div className="space-y-2">
    <p>長さ36cmの線分ABがある。点PはAを出発し、線分AB上を一定の速さでBまで動き、Bに着くとすぐに折り返して、行きとは異なる一定の速さでAまで動いた。</p>
    <p>下の図は、点PがAを出発してから <M t="$x$" /> 秒後のAとPの距離を <M t="$y$" /> cmとして、<M t="$x$" /> と <M t="$y$" /> の関係をグラフに表したものである。</p>
    <E3Fig />
  </div>
);

/* ───────── e4：2つの水そうの水位 ───────── */
const E4Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMax={14} yMax={40}
    xTicks={ans ? [2, 6, 8, 12] : [2, 6, 12]} yTicks={ans ? [8, 12, 36] : [8, 36]}
    polylines={[
      { pts: [[0, 36], [12, 0]] },
      { pts: [[2, 0], [12, 20]], color: BLUE },
    ]}
    points={[
      { x: 6, y: 8 },
      { x: 0, y: 36, label: 'A', dx: 6, dy: 2 },
      { x: 12, y: 20, label: 'B', dx: 5, dy: 0 },
      ...(ans ? [{ x: 8, y: 12, label: '(8, 12)', dx: 4, dy: -6 }] : []),
    ]}
    guides={[{ x: 6, y: 8 }, ...(ans ? [{ x: 8, y: 12 }] : [])]}
    xLabel="x(分)" yLabel="y(cm)"
    caption="黒がA、青がB"
  />
);
const e4Intro = (
  <div className="space-y-2">
    <p>2つの水そうA、Bがある。はじめ、Aには水が底から36cmの高さまで入っていて、Bは空である。Aから一定の割合で水を抜き始め、その2分後から、Bに一定の割合で水を入れ始めた。</p>
    <p>下の図は、Aから水を抜き始めてから <M t="$x$" /> 分後の水面の高さを <M t="$y$" /> cmとして、<M t="$0\leqq x\leqq 12$" /> のときのA、Bそれぞれの <M t="$x$" /> と <M t="$y$" /> の関係をグラフに表したものである。Aは12分後にちょうど空になった。また、Bのグラフは点 <M t="$(6,\ 8)$" /> を通る。</p>
    <E4Fig />
  </div>
);

/* ───────── e5：2社のデータ通信料金 ───────── */
const E5Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMax={13} yMax={5500}
    xTicks={ans ? [4, 8, 12] : [4]} yTicks={ans ? [1500, 2700, 3900] : [1500, 2700]}
    lines={[
      { a: 300, b: 1500, x0: 0, x1: 12, label: 'A社' },
      ...(ans ? [{ a: 150, b: 2700, x0: 0, x1: 12, color: RED, label: 'B社' }] : []),
    ]}
    points={[{ x: 4, y: 2700 }, ...(ans ? [{ x: 8, y: 3900, label: '(8, 3900)', dx: -58, dy: -8 }] : [])]}
    guides={[{ x: 4, y: 2700 }, ...(ans ? [{ x: 8, y: 3900 }] : [])]}
    xLabel="x(GB)" yLabel="y(円)"
    caption={ans ? '8GBより多く使うとB社のほうが安い' : undefined}
  />
);
const e5Intro = (
  <div className="space-y-2">
    <p>A社とB社のスマートフォンの1か月のデータ通信料金は、どちらも「基本料金」と「使用量1GBごとに一定の金額」の合計で決まる。1か月の使用量を <M t="$x$" /> GB、料金を <M t="$y$" /> 円とする。</p>
    <p>下の図は、A社の <M t="$x$" /> と <M t="$y$" /> の関係をグラフに表したもので、2点 <M t="$(0,\ 1500)$" />、<M t="$(4,\ 2700)$" /> を通る直線である。B社は使用量1GBごとに150円かかり、6GB使ったときの料金は3600円である。</p>
    <E5Fig />
  </div>
);

/* ───────── e6：両軸との交点でできる△OABと直線m ───────── */
const E6Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMin={-3} xMax={6} yMin={-2} yMax={10}
    xTicks={ans ? [-2, 2, 4] : [-2, 4]} yTicks={ans ? [2, 4, 8] : []}
    lines={[
      { a: -2, b: 8, x0: -0.5, x1: 4.8, label: 'ℓ' },
      { a: 1, b: 2, x0: -2.8, x1: 5.5, color: RED, label: 'm' },
    ]}
    points={[
      { x: 4, y: 0, label: 'A', dx: 3, dy: -6 },
      { x: 0, y: 8, label: 'B', dx: 5, dy: 2 },
      { x: -2, y: 0, label: 'D', dx: -4, dy: 13 },
      { x: 2, y: 4, label: 'P', dx: 6, dy: 0 },
      { x: 0, y: 2, label: 'C', dx: 4, dy: 12 },
    ]}
    polygons={ans ? [{ pts: [[0, 0], [4, 0], [2, 4], [0, 2]] }] : undefined}
    guides={ans ? [{ x: 2, y: 4 }] : undefined}
    caption={ans ? '色をつけた部分が四角形OAPC' : undefined}
  />
);
const e6Intro = (
  <div className="space-y-2">
    <p>下の図のように、直線 <M t="$\ell$" /> は <M t="$x$" /> 軸と点A <M t="$(4,\ 0)$" /> で、<M t="$y$" /> 軸の正の部分と点Bで交わっていて、△OABの面積は16である。また、直線 <M t="$m$" /> は関数 <M t="$y=x+c$" />（<M t="$c$" /> は定数）のグラフで、<M t="$x$" /> 軸と点D <M t="$(-2,\ 0)$" /> で交わる。</p>
    <p>直線 <M t="$\ell$" /> と直線 <M t="$m$" /> の交点をP、直線 <M t="$m$" /> と <M t="$y$" /> 軸との交点をCとする。ただし、Oは原点とする。</p>
    <E6Fig />
  </div>
);

/* ───────── e7：普通列車と急行列車のダイヤ ───────── */
const E7Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMax={30} yMax={26}
    xTicks={ans ? [12, 15, 17, 24, 27] : [12, 15, 27]} yTicks={ans ? [12, 14, 24] : [12, 24]}
    polylines={[
      { pts: [[0, 0], [12, 12], [15, 12], [27, 24]] },
      ...(ans ? [{ pts: [[12, 24], [24, 0]] as [number, number][], color: RED, dash: true }] : []),
    ]}
    points={ans ? [{ x: 17, y: 14, label: 'すれ違い', dx: 5, dy: 10 }] : undefined}
    guides={[{ x: 12, y: 12 }, { x: 15, y: 12 }, { x: 27, y: 24 }, ...(ans ? [{ x: 17, y: 14 }] : [])]}
    xLabel="x(分)" yLabel="y(km)"
    caption={ans ? '赤の点線が急行。(12, 24) から (24, 0) まで' : undefined}
  />
);
const e7Intro = (
  <div className="space-y-2">
    <p>A駅とB駅の間は24kmあり、その途中のA駅から12kmの地点にC駅がある。普通列車は午前10時にA駅を出発し、一定の速さでC駅まで走り、C駅に停車したあと、再び同じ速さでB駅まで走った。</p>
    <p>下の図は、午前10時から <M t="$x$" /> 分後の普通列車の位置をA駅から <M t="$y$" /> kmとして、<M t="$x$" /> と <M t="$y$" /> の関係をグラフに表したものである。</p>
    <E7Fig />
  </div>
);

/* ───────── e8：交点Pを通り△PABの面積を二等分する直線 ───────── */
const E8Fig = ({ ans }: { ans?: boolean }) => (
  <GraphFig
    xMin={-1} xMax={9} yMin={-5} yMax={9}
    xTicks={ans ? [2, 4, 5, 8] : [2]} yTicks={ans ? [4, 8, -4] : [8, -4]}
    lines={[
      { a: -1, b: 8, x0: -0.5, x1: 8.8, label: 'ℓ' },
      { a: 2, b: -4, x0: -0.4, x1: 6, label: 'm' },
      ...(ans ? [{ a: -4, b: 20, x0: 3.2, x1: 5.5, color: RED }] : []),
    ]}
    points={[
      { x: 2, y: 0, label: 'B', dx: -12, dy: -5 },
      { x: 0, y: -4, label: 'C', dx: 5, dy: 4 },
      { x: 4, y: 4, label: 'P', dx: 6, dy: -4 },
      ...(ans ? [{ x: 8, y: 0, label: 'A', dx: -4, dy: 13 }, { x: 5, y: 0, label: 'M', dx: 4, dy: 13 }] : []),
    ]}
    polygons={ans ? [{ pts: [[4, 4], [2, 0], [5, 0]] }] : undefined}
    guides={ans ? [{ x: 4, y: 4 }] : undefined}
    caption={ans ? '赤い線が直線PM。△PBM と △PMA の面積はどちらも6' : undefined}
  />
);
const e8Intro = (
  <div className="space-y-2">
    <p>下の図のように、直線 <M t="$\ell$" /> は関数 <M t="$y=-x+8$" /> のグラフであり、直線 <M t="$m$" /> は2点B <M t="$(2,\ 0)$" />、C <M t="$(0,\ -4)$" /> を通る直線である。直線 <M t="$\ell$" /> と <M t="$x$" /> 軸との交点をA、直線 <M t="$\ell$" /> と直線 <M t="$m$" /> の交点をPとする。</p>
    <E8Fig />
  </div>
);

export const ruijiE: Record<string, MajorQuestionData> = {
  /* ===================== e1 ===================== */
  "e1": {
    id: "e1",
    title: "実力テストE-1：2点を通る直線と y＝x＋k の交点",
    subs: [
      {
        id: "1",
        title: "(1) 直線ℓの傾き",
        knowledge: ["変化の割合", "傾き"],
        originalText: <div>{e1Intro}<p>(1)　直線 <M t="$\ell$" /> の傾きを求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① x の増加量',
            content: <p>AからBへ進むとき、<M t="$x$" /> は −2 から 4 まで増えます。</p>,
            quiz: {
              type: 'choice',
              question: 'x の増加量は？',
              options: ['6', '2', '−6'],
              correctAnswer: '6',
              explanation: <p><M t="$4-(-2)=4+2=6$" />。−2 を引くのでたし算になります。4 − 2 ＝ 2 としやすいので注意。</p>
            }
          },
          {
            id: 2, title: '② y の増加量',
            content: <p>同じくAからBへ進むとき、<M t="$y$" /> は 7 から −5 に変わります。</p>,
            quiz: {
              type: 'choice',
              question: 'y の増加量は？',
              options: ['−12', '12', '−2'],
              correctAnswer: '−12',
              explanation: <p><M t="$-5-7=-12$" />。y は減っているので、増加量はマイナスです。</p>
            }
          },
          {
            id: 3, title: '③ 傾き',
            content: <p>傾き ＝（y の増加量）÷（x の増加量）です。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの傾きは？',
              options: ['−2', '2', '−1/2'],
              correctAnswer: '−2',
              explanation: <p><M t="$-12\div6=-2$" />。x と y を逆に割ると <M t="$-\frac{1}{2}$" /> になってしまいます。図でも右下がりなので負の数で合っています。答えは −2。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線ℓの式",
        knowledge: ["2点を通る直線の式", "切片"],
        originalText: <div>{e1Intro}<p>(2)　直線 <M t="$\ell$" /> の式を求めなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 式の形',
            content: <p>(1)より傾きは −2 なので、<M t="$y=-2x+b$" /> とおけます。あとは切片 <M t="$b$" /> を求めます。</p>,
            quiz: {
              type: 'choice',
              question: '点A(−2, 7) を代入してできる式は？',
              options: ['7 = 4 + b', '7 = −4 + b', '−2 = 14 + b', '7 = −2 + b', '−2 = −14 + b'],
              correctAnswer: '7 = 4 + b',
              explanation: <p><M t="$-2\times(-2)=4$" /> なので <M t="$7=4+b$" />。マイナスどうしのかけ算は正になります。</p>
            }
          },
          {
            id: 2, title: '② 切片',
            content: <p><M t="$7=4+b$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'b の値は？',
              options: ['3', '11', '−3'],
              correctAnswer: '3',
              explanation: <p><M t="$b=7-4=3$" />。</p>
            }
          },
          {
            id: 3, title: '③ 答えと検算',
            content: <p>求めた式がもう1つの点Bも通るか確かめます。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの式は？',
              options: ['y = −2x + 3', 'y = −2x − 3', 'y = 2x + 3', 'y = −2x + 11', 'y = −(1/2)x + 6'],
              correctAnswer: 'y = −2x + 3',
              explanation: <p>答えは <M t="$y=-2x+3$" />。検算：B の <M t="$x=4$" /> を代入すると <M t="$-8+3=-5$" /> となり、B(4, −5) と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 交点Pと△PCEの面積",
        knowledge: ["1次関数", "2直線の交点", "連立方程式", "三角形の面積"],
        originalText: <div>{e1Intro}<p>(3)　<M t="$k$" /> の値を求め、交点Pの座標を求めなさい。また、△PCEの面積を求めなさい。ただし、座標の1目もりを1cmとする。</p></div>,
        steps: [
          {
            id: 1, title: '① k の値',
            content: <p>直線 <M t="$m$" />：<M t="$y=x+k$" /> は D(6, 3) を通るので、<M t="$x=6,\ y=3$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: 'k の値は？',
              options: ['−3', '3', '9'],
              correctAnswer: '−3',
              explanation: <p><M t="$3=6+k$" /> より <M t="$k=-3$" />。直線 <M t="$m$" /> は <M t="$y=x-3$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 交点の方程式',
            content: <p>交点Pは <M t="$y=-2x+3$" /> と <M t="$y=x-3$" /> の両方を満たすので、y を等しくおきます。</p>,
            quiz: {
              type: 'choice',
              question: '交点のx座標を求める方程式は？',
              options: ['−2x + 3 = x − 3', '−2x + 3 = x + 3', '−2x − 3 = x + 3', '2x + 3 = x − 3', '−2x + 3 = −x − 3'],
              correctAnswer: '−2x + 3 = x − 3',
              explanation: <p>ℓ と m の式の右辺どうしを等しくおきます。</p>
            }
          },
          {
            id: 3, title: '③ 交点Pの座標',
            content: <p><M t="$-2x+3=x-3$" /> を解き、y も求めます。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(2, −1)', '(−1, 2)', '(2, 1)', '(−2, 7)', '(0, 3)'],
              correctAnswer: '(2, −1)',
              explanation: <p><M t="$-3x=-6$" /> より <M t="$x=2$" />、<M t="$y=2-3=-1$" />。検算：ℓ の式に入れても <M t="$-4+3=-1$" /> で一致します。</p>
            }
          },
          {
            id: 4, title: '④ 底辺CE',
            content: <p>C は ℓ の切片で (0, 3)、E は m の切片で (0, −3) です。△PCEは、y 軸上の CE を底辺と見ます。</p>,
            quiz: {
              type: 'choice',
              question: 'CE の長さは？',
              options: ['6cm', '0cm', '3cm'],
              correctAnswer: '6cm',
              explanation: <p><M t="$3-(-3)=6$" />（cm）。3 − 3 ＝ 0 としないように。</p>
            }
          },
          {
            id: 5, title: '⑤ 面積',
            content: <p>底辺CEに対する高さは、Pから y 軸までの距離、つまりPの x 座標です。</p>,
            quiz: {
              type: 'choice',
              question: '△PCEの面積は？',
              options: ['6cm²', '12cm²', '3cm²'],
              correctAnswer: '6cm²',
              explanation: <div><E1Fig ans /><p>高さは2cmなので <M t="$\frac{1}{2}\times6\times2=6$" />（cm²）。答えは <M t="$k=-3$" />、P(2, −1)、面積 6cm²。検算：3点の座標から長方形で囲んで引く方法でも 12 − 2 − 4 ＝ 6 になります。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e2 ===================== */
  "e2": {
    id: "e2",
    title: "実力テストE-2：y＝ax＋b の a、b と平行な直線",
    subs: [
      {
        id: "1",
        title: "(1) a、b の値",
        knowledge: ["傾きと切片", "グラフの読み取り"],
        originalText: <div>{e2Intro}<p>(1)　<M t="$a$" />、<M t="$b$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 切片 b',
            content: <p><M t="$b$" /> は切片で、グラフが <M t="$y$" /> 軸と交わる点の y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: 'b の値は？',
              options: ['3', '1', '−3'],
              correctAnswer: '3',
              explanation: <p>y 軸と (0, 3) で交わるので <M t="$b=3$" />。x 軸との交点の 1 と取り違えないように。</p>
            }
          },
          {
            id: 2, title: '② 傾き a',
            content: <p>(0, 3) から A(1, 0) へ、x が1増えると y はどう変わるかを見ます。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['−3', '3', '−1/3'],
              correctAnswer: '−3',
              explanation: <p>x が1増えると y は3から0へ3減るので <M t="$a=\frac{0-3}{1-0}=-3$" />。右下がりなので負です。答えは <M t="$a=-3,\ b=3$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 点Cを通りℓに平行な直線m",
        knowledge: ["平行な直線の式", "傾きと1点"],
        originalText: <div>{e2Intro}<p>(2)　点Cを通り、直線 <M t="$\ell$" /> に平行な直線を <M t="$m$" /> とする。直線 <M t="$m$" /> の式を求めなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 平行な直線の傾き',
            content: <p>平行な2直線は、傾きが等しくなります。</p>,
            quiz: {
              type: 'choice',
              question: '直線mの傾きは？',
              options: ['−3', '3', '1/3'],
              correctAnswer: '−3',
              explanation: <p>ℓ と同じ −3 です。m は <M t="$y=-3x+b'$" /> とおけます。</p>
            }
          },
          {
            id: 2, title: '② 点Cを代入',
            content: <p>C(1, −6) を <M t="$y=-3x+b'$" /> に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['−6 = −3 + b′', '−6 = 3 + b′', '1 = 18 + b′', '−6 = −3b′', '6 = −3 + b′'],
              correctAnswer: '−6 = −3 + b′',
              explanation: <p><M t="$-3\times1=-3$" /> なので <M t="$-6=-3+b'$" />。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p><M t="$-6=-3+b'$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '直線mの式は？',
              options: ['y = −3x − 3', 'y = −3x − 9', 'y = −3x + 3', 'y = 3x − 9', 'y = −3x − 6'],
              correctAnswer: 'y = −3x − 3',
              explanation: <p><M t="$b'=-6+3=-3$" />。答えは <M t="$y=-3x-3$" />。検算：<M t="$x=1$" /> で <M t="$-3-3=-6$" /> となりCを通ります。切片が3から−3になったので、m は ℓ を y 軸方向に −6 だけ平行移動した直線です。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 直線nとmの交点P、△APBの面積",
        knowledge: ["2直線の交点", "連立方程式", "三角形の面積"],
        originalText: <div>{e2Intro}<p>(3)　関数 <M t="$y=-x+c$" />（<M t="$c$" /> は定数）のグラフを直線 <M t="$n$" /> とする。直線 <M t="$n$" /> が点Aを通るとき、(2)の直線 <M t="$m$" /> と直線 <M t="$n$" /> の交点をP、直線 <M t="$m$" /> と <M t="$x$" /> 軸との交点をBとする。点Pの座標と、△APBの面積を求めなさい。ただし、座標の1目もりを1cmとする。</p></div>,
        steps: [
          {
            id: 1, title: '① 直線nの式',
            content: <p>直線 <M t="$n$" /> は A(1, 0) を通るので、<M t="$0=-1+c$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '直線nの式は？',
              options: ['y = −x + 1', 'y = −x − 1', 'y = x − 1', 'y = −x', 'y = −x + 3'],
              correctAnswer: 'y = −x + 1',
              explanation: <p><M t="$c=1$" /> なので <M t="$y=-x+1$" />。</p>
            }
          },
          {
            id: 2, title: '② 交点Pのx座標',
            content: <p><M t="$y=-3x-3$" /> と <M t="$y=-x+1$" /> の y を等しくおきます。</p>,
            quiz: {
              type: 'choice',
              question: '点Pのx座標は？',
              options: ['−2', '2', '−1'],
              correctAnswer: '−2',
              explanation: <p><M t="$-3x-3=-x+1$" /> より <M t="$-2x=4$" />、<M t="$x=-2$" />。</p>
            }
          },
          {
            id: 3, title: '③ 交点Pの座標',
            content: <p>x ＝ −2 をどちらかの式に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(−2, 3)', '(3, −2)', '(−2, −3)', '(2, −1)', '(−2, 9)'],
              correctAnswer: '(−2, 3)',
              explanation: <p>n に代入して <M t="$y=2+1=3$" />。検算：m に代入しても <M t="$6-3=3$" /> で一致します。</p>
            }
          },
          {
            id: 4, title: '④ 点B',
            content: <p>B は m と x 軸の交点なので、<M t="$y=-3x-3$" /> に <M t="$y=0$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(−1, 0)', '(1, 0)', '(0, −3)', '(−3, 0)', '(3, 0)'],
              correctAnswer: '(−1, 0)',
              explanation: <p><M t="$0=-3x-3$" /> より <M t="$x=-1$" />。B(−1, 0) です。x に0を入れると y 軸との交点になってしまいます。</p>
            }
          },
          {
            id: 5, title: '⑤ △APBの面積',
            content: <p>底辺を x 軸上の AB、高さをPの y 座標と見ます。</p>,
            quiz: {
              type: 'choice',
              question: '△APBの面積は？',
              options: ['3cm²', '6cm²', '9cm²'],
              correctAnswer: '3cm²',
              explanation: <div><E2Fig ans /><p>AB ＝ 1 − (−1) ＝ 2cm、高さ3cmなので <M t="$\frac{1}{2}\times2\times3=3$" />（cm²）。答えは P(−2, 3)、面積 3cm²。検算：3点 (1, 0)、(−2, 3)、(−1, 0) を座標の公式で計算しても3になります。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e3 ===================== */
  "e3": {
    id: "e3",
    title: "実力テストE-3：線分上を往復する点と追い越し",
    subs: [
      {
        id: "1",
        title: "(1) 点Pの行きと帰りの速さ",
        knowledge: ["グラフの読み取り", "速さ"],
        originalText: <div>{e3Intro}<p>(1)　点Pの行きの速さと帰りの速さは、それぞれ秒速何cmか。</p></div>,
        steps: [
          {
            id: 1, title: '① 行きの速さ',
            content: <p>グラフから、Pは12秒でBに着いています。AB ＝ 36cm です。</p>,
            quiz: {
              type: 'choice',
              question: '行きの速さは秒速何cm？',
              options: ['秒速3cm', '秒速4cm', '秒速12cm'],
              correctAnswer: '秒速3cm',
              explanation: <p><M t="$36\div12=3$" />（cm/秒）。</p>
            }
          },
          {
            id: 2, title: '② 帰りにかかった時間',
            content: <p>帰りは12秒後にBを出て、21秒後にAに戻っています。</p>,
            quiz: {
              type: 'choice',
              question: '帰りにかかった時間は？',
              options: ['9秒', '21秒', '12秒'],
              correctAnswer: '9秒',
              explanation: <p><M t="$21-12=9$" />（秒）。21秒は「出発してから戻るまで」の時間です。</p>
            }
          },
          {
            id: 3, title: '③ 帰りの速さ',
            content: <p>帰りも36cmを動いています。</p>,
            quiz: {
              type: 'choice',
              question: '帰りの速さは秒速何cm？',
              options: ['秒速4cm', '秒速3cm', '秒速9cm'],
              correctAnswer: '秒速4cm',
              explanation: <p><M t="$36\div9=4$" />（cm/秒）。答えは 行き秒速3cm、帰り秒速4cm。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 12≦x≦21 のときの式",
        knowledge: ["1次関数", "x軸との交点", "傾きと1点"],
        originalText: <div>{e3Intro}<p>(2)　<M t="$x$" /> の変域が <M t="$12\leqq x\leqq 21$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 傾き',
            content: <p>帰りは秒速4cmでAに近づくので、Aからの距離 y は1秒に4cmずつ減ります。</p>,
            quiz: {
              type: 'choice',
              question: 'この部分の傾きは？',
              options: ['−4', '4', '−3'],
              correctAnswer: '−4',
              explanation: <p>減っていくので傾きは −4。<M t="$y=-4x+b$" /> とおけます。</p>
            }
          },
          {
            id: 2, title: '② x軸との交点を使う',
            content: <p>グラフは21秒後に x 軸と交わります（Aに戻って距離0）。この点を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '代入する点の座標は？',
              options: ['(21, 0)', '(0, 21)', '(12, 0)', '(21, 36)', '(0, 36)'],
              correctAnswer: '(21, 0)',
              explanation: <p>x ＝ 21 のとき y ＝ 0 なので (21, 0)。x と y を逆にしないように。</p>
            }
          },
          {
            id: 3, title: '③ 答えと検算',
            content: <p><M t="$0=-4\times21+b$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'y を x の式で表すと？',
              options: ['y = −4x + 84', 'y = −4x − 84', 'y = −4x + 21', 'y = 4x − 84', 'y = −4x + 36'],
              correctAnswer: 'y = −4x + 84',
              explanation: <p><M t="$b=84$" />。答えは <M t="$y=-4x+84$" />。検算：<M t="$x=12$" /> を代入すると <M t="$-48+84=36$" /> となり、B(12秒後に36cm)と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 点Pが点Qを追い越す時刻と位置",
        knowledge: ["1次関数の利用", "連立方程式", "速さ"],
        originalText: <div>{e3Intro}<p>(3)　点QはPと同時にBを出発し、線分AB上を秒速1cmでAに向かって動いた。点PはBで折り返したあと、Qに追いつき、追い越した。PがQを追い越したのは、Pが出発してから何秒後か。また、それはAから何cmの地点か。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Qの式',
            content: <p>Qは x ＝ 0 のとき Aから36cm（Bにいる）で、そこから秒速1cmでAに近づきます。</p>,
            quiz: {
              type: 'choice',
              question: '点Qの x と y の関係を表す式は？',
              options: ['y = −x + 36', 'y = x + 36', 'y = −x − 36', 'y = x', 'y = −36x + 1'],
              correctAnswer: 'y = −x + 36',
              explanation: <p>切片36、傾き −1 なので <M t="$y=-x+36$" />。36秒後にAに着きます。</p>
            }
          },
          {
            id: 2, title: '② 追い越すのはどの部分？',
            content: <p>Pの行き（<M t="$0\leqq x\leqq 12$" />）では、PはAから、QはBから向かい合って進むので、2点は「すれ違う」だけです。同じ向きに進むのはPの帰りです。</p>,
            quiz: {
              type: 'choice',
              question: '追い越しを求めるのに使うPの式は？',
              options: ['y = −4x + 84', 'y = 3x', 'y = −x + 36'],
              correctAnswer: 'y = −4x + 84',
              explanation: <p>帰りの式を使います。ちなみに行きの <M t="$y=3x$" /> とQの交点は <M t="$x=9$" />、<M t="$y=27$" /> で、これはすれ違いです。</p>
            }
          },
          {
            id: 3, title: '③ 交点の方程式を解く',
            content: <p><M t="$-4x+84=-x+36$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '追い越したのは何秒後？',
              options: ['16秒後', '9秒後', '24秒後'],
              correctAnswer: '16秒後',
              explanation: <p><M t="$-3x=-48$" /> より <M t="$x=16$" />。<M t="$12\leqq x\leqq 21$" /> に入っているので問題に合います。</p>
            }
          },
          {
            id: 4, title: '④ 追い越した位置',
            content: <p>x ＝ 16 をQの式に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '追い越した地点はAから何cm？',
              options: ['20cm', '16cm', '28cm'],
              correctAnswer: '20cm',
              explanation: <div><E3Fig ans /><p><M t="$y=-16+36=20$" />。答えは16秒後、Aから20cmの地点。検算：Pの式でも <M t="$-64+84=20$" /> で一致します。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e4 ===================== */
  "e4": {
    id: "e4",
    title: "実力テストE-4：2つの水そうの水位が等しくなる時刻",
    subs: [
      {
        id: "1",
        title: "(1) Aの水面が1分間に下がる高さ",
        knowledge: ["グラフの読み取り", "変化の割合"],
        originalText: <div>{e4Intro}<p>(1)　Aの水面の高さは、1分間に何cmずつ下がったか。</p></div>,
        steps: [
          {
            id: 1, title: '① 読み取る2点',
            content: <p>Aのグラフは、はじめ36cmで、12分後に0cmになっています。</p>,
            quiz: {
              type: 'choice',
              question: 'Aのグラフが通る2点は？',
              options: ['(0, 36) と (12, 0)', '(36, 0) と (0, 12)', '(0, 36) と (2, 0)', '(2, 36) と (12, 0)', '(0, 12) と (36, 0)'],
              correctAnswer: '(0, 36) と (12, 0)',
              explanation: <p>Aは x ＝ 0 から水を抜き始めています。2分後はBに水を入れ始めた時刻なので、Aとは関係ありません。</p>
            }
          },
          {
            id: 2, title: '② 1分間に下がる高さ',
            content: <p>12分で36cm下がっています。</p>,
            quiz: {
              type: 'choice',
              question: '1分間に何cm下がる？',
              options: ['3cm', '12cm', '4cm'],
              correctAnswer: '3cm',
              explanation: <p><M t="$36\div12=3$" />（cm）。答えは1分間に3cm。傾きで言えば −3 です。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) Bの水面の高さの式",
        knowledge: ["2点を通る直線の式"],
        originalText: <div>{e4Intro}<p>(2)　<M t="$x$" /> の変域が <M t="$2\leqq x\leqq 12$" /> のとき、Bについて <M t="$y$" /> を <M t="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 通る2点',
            content: <p>Bは2分後に水を入れ始めるので、そのとき高さは0cmです。もう1点は図に示された点です。</p>,
            quiz: {
              type: 'choice',
              question: 'Bのグラフが通る2点は？',
              options: ['(2, 0) と (6, 8)', '(0, 2) と (8, 6)', '(0, 0) と (6, 8)', '(2, 0) と (8, 6)', '(0, 2) と (6, 8)'],
              correctAnswer: '(2, 0) と (6, 8)',
              explanation: <p>x ＝ 2 のとき y ＝ 0、x ＝ 6 のとき y ＝ 8 です。原点から始まるわけではありません。</p>
            }
          },
          {
            id: 2, title: '② 傾き',
            content: <p>傾き ＝（y の増加量）÷（x の増加量）。</p>,
            quiz: {
              type: 'choice',
              question: '傾きは？',
              options: ['2', '1/2', '4/3'],
              correctAnswer: '2',
              explanation: <p><M t="$\frac{8-0}{6-2}=\frac{8}{4}=2$" />。1分間に2cmずつ上がります。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p><M t="$y=2x+b$" /> に (2, 0) を代入します。</p>,
            quiz: {
              type: 'choice',
              question: 'Bの式は？',
              options: ['y = 2x − 4', 'y = 2x + 4', 'y = 2x − 2', 'y = 2x', 'y = (1/2)x − 1'],
              correctAnswer: 'y = 2x − 4',
              explanation: <p><M t="$0=4+b$" /> より <M t="$b=-4$" />。答えは <M t="$y=2x-4$" />。検算：<M t="$x=6$" /> で <M t="$12-4=8$" /> と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 水面の高さが等しくなる時刻",
        knowledge: ["1次関数の利用", "連立方程式"],
        originalText: <div>{e4Intro}<p>(3)　AとBの水面の高さが等しくなるのは、Aから水を抜き始めてから何分後か。また、そのときの水面の高さは何cmか。</p></div>,
        steps: [
          {
            id: 1, title: '① Aの式',
            content: <p>Aは切片36、(1)より傾き −3 です。</p>,
            quiz: {
              type: 'choice',
              question: 'Aの式は？',
              options: ['y = −3x + 36', 'y = 3x + 36', 'y = −3x + 12', 'y = −12x + 36', 'y = −3x − 36'],
              correctAnswer: 'y = −3x + 36',
              explanation: <p><M t="$y=-3x+36$" />。検算：<M t="$x=12$" /> で <M t="$-36+36=0$" /> となり空になります。</p>
            }
          },
          {
            id: 2, title: '② 方程式をつくる',
            content: <p>高さが等しいのは、2つのグラフの交点です。y を等しくおきます。</p>,
            quiz: {
              type: 'choice',
              question: '解く方程式は？',
              options: ['−3x + 36 = 2x − 4', '−3x + 36 = 2x + 4', '3x + 36 = 2x − 4', '−3x + 36 + 2x − 4 = 0', '−3x − 36 = 2x − 4'],
              correctAnswer: '−3x + 36 = 2x − 4',
              explanation: <p>Aの式とBの式の右辺を等しくおきます。</p>
            }
          },
          {
            id: 3, title: '③ 時刻',
            content: <p><M t="$-3x+36=2x-4$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '何分後？',
              options: ['8分後', '6分後', '10分後'],
              correctAnswer: '8分後',
              explanation: <p><M t="$-5x=-40$" /> より <M t="$x=8$" />。<M t="$2\leqq x\leqq 12$" /> に入っています。</p>
            }
          },
          {
            id: 4, title: '④ 水面の高さ',
            content: <p>x ＝ 8 を代入します。</p>,
            quiz: {
              type: 'choice',
              question: 'そのときの水面の高さは？',
              options: ['12cm', '8cm', '20cm'],
              correctAnswer: '12cm',
              explanation: <div><E4Fig ans /><p>Bの式に入れて <M t="$16-4=12$" />。答えは8分後、12cm。検算：Aの式でも <M t="$-24+36=12$" /> で一致します。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e5 ===================== */
  "e5": {
    id: "e5",
    title: "実力テストE-5：2社の通信料金が等しくなる使用量",
    subs: [
      {
        id: "1",
        title: "(1) A社の1GBあたりの料金",
        knowledge: ["グラフの読み取り", "変化の割合"],
        originalText: <div>{e5Intro}<p>(1)　A社の基本料金は何円か。また、使用量1GBごとに何円かかるか。</p></div>,
        steps: [
          {
            id: 1, title: '① 基本料金',
            content: <p>基本料金は、使用量が0GBのときの料金です。</p>,
            quiz: {
              type: 'choice',
              question: 'A社の基本料金は？',
              options: ['1500円', '2700円', '1200円'],
              correctAnswer: '1500円',
              explanation: <p>(0, 1500) を通るので1500円。グラフの切片にあたります。</p>
            }
          },
          {
            id: 2, title: '② 1GBごとの料金',
            content: <p>0GBから4GBまでに、料金がいくら増えたかを考えます。</p>,
            quiz: {
              type: 'choice',
              question: '1GBごとに何円？',
              options: ['300円', '675円', '1200円'],
              correctAnswer: '300円',
              explanation: <p><M t="$(2700-1500)\div4=1200\div4=300$" />（円）。2700 ÷ 4 としないように。答えは基本料金1500円、1GBごとに300円。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) B社の料金の式",
        knowledge: ["傾きと1点", "1次関数"],
        originalText: <div>{e5Intro}<p>(2)　B社について、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 傾き',
            content: <p>使用量1GBごとに増える金額が傾きです。</p>,
            quiz: {
              type: 'choice',
              question: 'B社の式の傾きは？',
              options: ['150', '600', '3600'],
              correctAnswer: '150',
              explanation: <p>1GBごとに150円なので傾きは150。<M t="$y=150x+b$" /> とおけます。</p>
            }
          },
          {
            id: 2, title: '② 1点を代入',
            content: <p>6GBのとき3600円なので、<M t="$x=6,\ y=3600$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['3600 = 900 + b', '3600 = 150 + b', '6 = 540000 + b', '3600 = 6 + b', '3600 = 25 + b'],
              correctAnswer: '3600 = 900 + b',
              explanation: <p><M t="$150\times6=900$" /> なので <M t="$3600=900+b$" />。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p><M t="$3600=900+b$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'B社の式は？',
              options: ['y = 150x + 2700', 'y = 150x + 4500', 'y = 150x + 3600', 'y = 600x', 'y = 2700x + 150'],
              correctAnswer: 'y = 150x + 2700',
              explanation: <p><M t="$b=2700$" />。答えは <M t="$y=150x+2700$" />。B社の基本料金は2700円です。検算：<M t="$x=6$" /> で <M t="$900+2700=3600$" /> と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 料金が等しくなる使用量",
        knowledge: ["1次関数の利用", "連立方程式"],
        originalText: <div>{e5Intro}<p>(3)　A社とB社の料金が等しくなるのは、使用量が何GBのときか。また、そのときの料金は何円か。さらに、使用量が12GBのとき、どちらの会社が何円安いか。</p></div>,
        steps: [
          {
            id: 1, title: '① A社の式',
            content: <p>(1)より、A社は基本料金1500円、1GBごとに300円です。</p>,
            quiz: {
              type: 'choice',
              question: 'A社の式は？',
              options: ['y = 300x + 1500', 'y = 1500x + 300', 'y = 300x + 2700', 'y = 675x', 'y = 300x − 1500'],
              correctAnswer: 'y = 300x + 1500',
              explanation: <p>傾き300、切片1500。検算：<M t="$x=4$" /> で <M t="$1200+1500=2700$" /> となり、グラフの点と一致します。</p>
            }
          },
          {
            id: 2, title: '② 等しくなる使用量',
            content: <p><M t="$300x+1500=150x+2700$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '料金が等しくなる使用量は？',
              options: ['8GB', '6GB', '4GB'],
              correctAnswer: '8GB',
              explanation: <p><M t="$150x=1200$" /> より <M t="$x=8$" />。</p>
            }
          },
          {
            id: 3, title: '③ そのときの料金',
            content: <p>x ＝ 8 を代入します。</p>,
            quiz: {
              type: 'choice',
              question: 'そのときの料金は？',
              options: ['3900円', '3600円', '4200円'],
              correctAnswer: '3900円',
              explanation: <p>A社で <M t="$2400+1500=3900$" />、B社で <M t="$1200+2700=3900$" />。どちらでも同じになることで検算できます。</p>
            }
          },
          {
            id: 4, title: '④ 12GBのとき',
            content: <p>x ＝ 12 を両方の式に代入して比べます。</p>,
            quiz: {
              type: 'choice',
              question: '12GBのとき、どちらが何円安い？',
              options: ['B社が600円安い', 'A社が600円安い', 'B社が1800円安い', 'A社が1800円安い', 'どちらも同じ'],
              correctAnswer: 'B社が600円安い',
              explanation: <div><E5Fig ans /><p>A社は <M t="$3600+1500=5100$" /> 円、B社は <M t="$1800+2700=4500$" /> 円で、B社が600円安い。8GBをこえると傾きの小さいB社のほうが安くなります。答えは8GB、3900円、12GBではB社が600円安い。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e6 ===================== */
  "e6": {
    id: "e6",
    title: "実力テストE-6：両軸との交点でできる三角形と直線m",
    subs: [
      {
        id: "1",
        title: "(1) 点Bの座標",
        knowledge: ["三角形の面積", "座標"],
        originalText: <div>{e6Intro}<p>(1)　点Bの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 底辺と高さ',
            content: <p>△OABは直角三角形で、底辺OA、高さOBと見られます。</p>,
            quiz: {
              type: 'choice',
              question: 'OA の長さは？',
              options: ['4', '16', '8'],
              correctAnswer: '4',
              explanation: <p>A(4, 0) なので OA ＝ 4 です。</p>
            }
          },
          {
            id: 2, title: '② OBの長さ',
            content: <p><M t="$\frac{1}{2}\times4\times OB=16$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'OB の長さは？',
              options: ['8', '4', '16'],
              correctAnswer: '8',
              explanation: <p><M t="$2\times OB=16$" /> より OB ＝ 8。<M t="$\frac{1}{2}$" /> を忘れて 16 ÷ 4 ＝ 4 としないように。</p>
            }
          },
          {
            id: 3, title: '③ Bの座標',
            content: <p>B は y 軸の正の部分にあります。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(0, 8)', '(8, 0)', '(0, −8)', '(0, 4)', '(4, 8)'],
              correctAnswer: '(0, 8)',
              explanation: <p>y 軸上の点は x 座標が0なので B(0, 8)。検算：<M t="$\frac{1}{2}\times4\times8=16$" /> で合います。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線ℓの式",
        knowledge: ["x軸との交点", "切片", "傾き"],
        originalText: <div>{e6Intro}<p>(2)　直線 <M t="$\ell$" /> の式を求めなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 切片',
            content: <p>直線 <M t="$\ell$" /> は y 軸と B(0, 8) で交わります。</p>,
            quiz: {
              type: 'choice',
              question: 'ℓ の切片は？',
              options: ['8', '4', '−8'],
              correctAnswer: '8',
              explanation: <p>y 軸との交点の y 座標が切片なので8。<M t="$y=ax+8$" /> とおけます。</p>
            }
          },
          {
            id: 2, title: '② x軸との交点を代入',
            content: <p>ℓ は x 軸と A(4, 0) で交わるので、<M t="$x=4,\ y=0$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '傾き a は？',
              options: ['−2', '2', '−1/2'],
              correctAnswer: '−2',
              explanation: <p><M t="$0=4a+8$" /> より <M t="$a=-2$" />。x と y を逆に入れて <M t="$4=8$" /> のような式にしないように。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p>傾きと切片がそろいました。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの式は？',
              options: ['y = −2x + 8', 'y = 2x + 8', 'y = −2x + 4', 'y = −(1/2)x + 8', 'y = −2x − 8'],
              correctAnswer: 'y = −2x + 8',
              explanation: <p>答えは <M t="$y=-2x+8$" />。検算：<M t="$x=4$" /> で <M t="$-8+8=0$" /> となりAを通ります。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 交点Pと四角形OAPCの面積",
        knowledge: ["2直線の交点", "連立方程式", "面積"],
        originalText: <div>{e6Intro}<p>(3)　交点Pの座標を求めなさい。また、四角形OAPCの面積を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 直線mの式',
            content: <p>直線 <M t="$m$" />：<M t="$y=x+c$" /> は D(−2, 0) を通ります。</p>,
            quiz: {
              type: 'choice',
              question: '直線mの式は？',
              options: ['y = x + 2', 'y = x − 2', 'y = −x − 2', 'y = x + 4', 'y = 2x'],
              correctAnswer: 'y = x + 2',
              explanation: <p><M t="$0=-2+c$" /> より <M t="$c=2$" />。C(0, 2) です。</p>
            }
          },
          {
            id: 2, title: '② 交点Pの座標',
            content: <p><M t="$-2x+8=x+2$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(2, 4)', '(4, 2)', '(2, 6)', '(−2, 4)', '(6, 8)'],
              correctAnswer: '(2, 4)',
              explanation: <p><M t="$-3x=-6$" /> より <M t="$x=2$" />、<M t="$y=2+2=4$" />。検算：ℓ でも <M t="$-4+8=4$" /> で一致します。</p>
            }
          },
          {
            id: 3, title: '③ 引く三角形',
            content: <p>四角形OAPCは、△OABから△BCPを取り除いた形です。△BCPは y 軸上のBCを底辺、Pの x 座標を高さと見ます。</p>,
            quiz: {
              type: 'choice',
              question: '△BCPの面積は？',
              options: ['6', '12', '8'],
              correctAnswer: '6',
              explanation: <p>BC ＝ 8 − 2 ＝ 6、高さ2なので <M t="$\frac{1}{2}\times6\times2=6$" />。</p>
            }
          },
          {
            id: 4, title: '④ 四角形OAPCの面積',
            content: <p>△OAB の面積16から△BCPを引きます。</p>,
            quiz: {
              type: 'choice',
              question: '四角形OAPCの面積は？',
              options: ['10', '22', '8'],
              correctAnswer: '10',
              explanation: <div><E6Fig ans /><p><M t="$16-6=10$" />。答えは P(2, 4)、面積10。検算：OPで2つに分けると、△OAP ＝ <M t="$\frac{1}{2}\times4\times4=8$" />、△OPC ＝ <M t="$\frac{1}{2}\times2\times2=2$" /> で合計10になります。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e7 ===================== */
  "e7": {
    id: "e7",
    title: "実力テストE-7：普通列車と急行列車のすれ違い",
    subs: [
      {
        id: "1",
        title: "(1) 停車時間と普通列車の速さ",
        knowledge: ["グラフの読み取り", "速さ"],
        originalText: <div>{e7Intro}<p>(1)　普通列車がC駅に停車していたのは何分間か。また、普通列車の速さは時速何kmか。</p></div>,
        steps: [
          {
            id: 1, title: '① 停車時間',
            content: <p>停車している間は位置が変わらないので、グラフは水平になります。</p>,
            quiz: {
              type: 'choice',
              question: '停車していたのは何分間？',
              options: ['3分間', '12分間', '15分間'],
              correctAnswer: '3分間',
              explanation: <p>x ＝ 12 から x ＝ 15 まで水平なので <M t="$15-12=3$" />（分間）。</p>
            }
          },
          {
            id: 2, title: '② 分速',
            content: <p>A駅からC駅までの12kmを12分で走っています。</p>,
            quiz: {
              type: 'choice',
              question: '普通列車は分速何km？',
              options: ['分速1km', '分速2km', '分速12km'],
              correctAnswer: '分速1km',
              explanation: <p><M t="$12\div12=1$" />（km/分）。C駅からB駅も12kmを <M t="$27-15=12$" /> 分で走るので同じ速さです。</p>
            }
          },
          {
            id: 3, title: '③ 時速に直す',
            content: <p>1時間は60分です。</p>,
            quiz: {
              type: 'choice',
              question: '普通列車は時速何km？',
              options: ['時速60km', '時速1km', '時速12km'],
              correctAnswer: '時速60km',
              explanation: <p><M t="$1\times60=60$" />（km/時）。答えは停車3分間、時速60km。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 急行列車の式",
        knowledge: ["傾きと1点", "ダイヤグラム"],
        originalText: <div>{e7Intro}<p>(2)　急行列車が午前10時12分にB駅を出発し、分速2kmでA駅に向かって走った。急行列車について、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 出発点の座標',
            content: <p>10時12分は x ＝ 12、B駅はA駅から24kmです。</p>,
            quiz: {
              type: 'choice',
              question: '急行のグラフの出発点は？',
              options: ['(12, 24)', '(24, 12)', '(12, 0)', '(0, 24)', '(12, 12)'],
              correctAnswer: '(12, 24)',
              explanation: <p>x ＝ 12 のとき y ＝ 24 です。急行はB駅から出るので、y ＝ 0 ではありません。</p>
            }
          },
          {
            id: 2, title: '② 傾き',
            content: <p>急行はA駅に近づくので、A駅からの距離 y は1分に2kmずつ減ります。</p>,
            quiz: {
              type: 'choice',
              question: '急行の式の傾きは？',
              options: ['−2', '2', '−1/2'],
              correctAnswer: '−2',
              explanation: <p>減るので −2。<M t="$y=-2x+b$" /> とおけます。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p><M t="$y=-2x+b$" /> に (12, 24) を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '急行の式は？',
              options: ['y = −2x + 48', 'y = −2x + 24', 'y = 2x − 24', 'y = −2x + 36', 'y = −2x − 48'],
              correctAnswer: 'y = −2x + 48',
              explanation: <p><M t="$24=-24+b$" /> より <M t="$b=48$" />。答えは <M t="$y=-2x+48$" />。検算：<M t="$x=24$" /> で <M t="$y=0$" />、24kmを分速2kmで12分かけて10時24分にA駅に着くことと合います。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) すれ違う時刻と場所",
        knowledge: ["1次関数の利用", "連立方程式", "ダイヤグラム"],
        originalText: <div>{e7Intro}<p>(3)　(2)の急行列車と普通列車がすれ違うのは午前何時何分か。また、それはA駅から何kmの地点か。</p></div>,
        steps: [
          {
            id: 1, title: '① どの区間ですれ違う？',
            content: <p>普通列車がC駅を出発する x ＝ 15 のとき、急行は <M t="$y=-30+48=18$" /> の地点にいて、まだC駅（12km）より B駅側です。</p>,
            quiz: {
              type: 'choice',
              question: 'すれ違うのは、普通列車がどこを走っているとき？',
              options: ['C駅からB駅へ走っているとき', 'A駅からC駅へ走っているとき', 'C駅に停車しているとき'],
              correctAnswer: 'C駅からB駅へ走っているとき',
              explanation: <p>普通列車が停車し終えた時点で、急行はまだC駅に来ていません。だから C駅を出たあとの区間（<M t="$15\leqq x\leqq 27$" />）ですれ違います。</p>
            }
          },
          {
            id: 2, title: '② その区間の普通列車の式',
            content: <p>(15, 12) と (27, 24) を通る直線で、傾きは分速1kmの1です。</p>,
            quiz: {
              type: 'choice',
              question: '15≦x≦27 の普通列車の式は？',
              options: ['y = x − 3', 'y = x + 3', 'y = x', 'y = x − 15', 'y = x + 12'],
              correctAnswer: 'y = x − 3',
              explanation: <p><M t="$12=15+b$" /> より <M t="$b=-3$" />。検算：<M t="$x=27$" /> で24となりB駅に着きます。</p>
            }
          },
          {
            id: 3, title: '③ 交点の x 座標',
            content: <p><M t="$x-3=-2x+48$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'x の値は？',
              options: ['17', '15', '20'],
              correctAnswer: '17',
              explanation: <p><M t="$3x=51$" /> より <M t="$x=17$" />。<M t="$15\leqq x\leqq 27$" /> に入っています。</p>
            }
          },
          {
            id: 4, title: '④ 時刻と場所',
            content: <p>x ＝ 17 は午前10時から17分後です。y も求めます。</p>,
            quiz: {
              type: 'choice',
              question: 'すれ違う時刻と場所は？',
              options: ['午前10時17分、A駅から14km', '午前10時17分、A駅から10km', '午前10時14分、A駅から17km', '午前10時17分、A駅から17km', '午前10時5分、A駅から14km'],
              correctAnswer: '午前10時17分、A駅から14km',
              explanation: <div><E7Fig ans /><p><M t="$y=17-3=14$" />。答えは午前10時17分、A駅から14kmの地点。検算：急行の式でも <M t="$-34+48=14$" /> で一致します。</p></div>
            }
          }
        ]
      }
    ]
  },

  /* ===================== e8 ===================== */
  "e8": {
    id: "e8",
    title: "実力テストE-8：交点Pを通り面積を二等分する直線",
    subs: [
      {
        id: "1",
        title: "(1) 点Aの座標とABの長さ",
        knowledge: ["x軸との交点", "座標"],
        originalText: <div>{e8Intro}<p>(1)　点Aの座標を求めなさい。また、線分ABの長さを求めなさい。ただし、座標の1目もりを1cmとする。</p></div>,
        steps: [
          {
            id: 1, title: '① x軸との交点',
            content: <p>x 軸上の点は y 座標が0です。<M t="$y=-x+8$" /> に <M t="$y=0$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(8, 0)', '(0, 8)', '(−8, 0)', '(4, 0)', '(8, 8)'],
              correctAnswer: '(8, 0)',
              explanation: <p><M t="$0=-x+8$" /> より <M t="$x=8$" />。A(8, 0)。x に0を代入すると y 軸との交点 (0, 8) になってしまいます。</p>
            }
          },
          {
            id: 2, title: '② ABの長さ',
            content: <p>A も B も x 軸上にあります。</p>,
            quiz: {
              type: 'choice',
              question: 'AB の長さは？',
              options: ['6cm', '10cm', '8cm'],
              correctAnswer: '6cm',
              explanation: <p><M t="$8-2=6$" />（cm）。答えは A(8, 0)、AB ＝ 6cm。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線mの式",
        knowledge: ["2点を通る直線の式", "切片"],
        originalText: <div>{e8Intro}<p>(2)　直線 <M t="$m$" /> の式を求めなさい。ただし、途中の計算も書くこと。</p></div>,
        steps: [
          {
            id: 1, title: '① 切片',
            content: <p>C(0, −4) は y 軸上の点です。</p>,
            quiz: {
              type: 'choice',
              question: 'm の切片は？',
              options: ['−4', '4', '2'],
              correctAnswer: '−4',
              explanation: <p>y 軸との交点の y 座標なので −4。<M t="$y=ax-4$" /> とおけます。</p>
            }
          },
          {
            id: 2, title: '② 傾き',
            content: <p>B(2, 0) を代入して a を求めます。</p>,
            quiz: {
              type: 'choice',
              question: '傾き a は？',
              options: ['2', '−2', '1/2'],
              correctAnswer: '2',
              explanation: <p><M t="$0=2a-4$" /> より <M t="$a=2$" />。CからBへ x が2増えると y が4増えるので、<M t="$4\div2=2$" /> と見ても同じです。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p>傾きと切片がそろいました。</p>,
            quiz: {
              type: 'choice',
              question: '直線mの式は？',
              options: ['y = 2x − 4', 'y = 2x + 4', 'y = −2x − 4', 'y = (1/2)x − 4', 'y = 2x − 2'],
              correctAnswer: 'y = 2x − 4',
              explanation: <p>答えは <M t="$y=2x-4$" />。検算：<M t="$x=2$" /> で <M t="$4-4=0$" /> となりBを通ります。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △PABの面積を二等分する直線",
        knowledge: ["2直線の交点", "中点", "面積の二等分", "2点を通る直線の式"],
        originalText: <div>{e8Intro}<p>(3)　点Pを通り、△PABの面積を二等分する直線の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 交点Pの座標',
            content: <p><M t="$-x+8=2x-4$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(4, 4)', '(4, 12)', '(−4, 12)', '(3, 5)', '(12, −4)'],
              correctAnswer: '(4, 4)',
              explanation: <p><M t="$-3x=-12$" /> より <M t="$x=4$" />、<M t="$y=-4+8=4$" />。検算：m でも <M t="$8-4=4$" /> で一致します。</p>
            }
          },
          {
            id: 2, title: '② △PABの面積',
            content: <p>底辺AB ＝ 6cm、高さはPの y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: '△PABの面積は？',
              options: ['12cm²', '24cm²', '6cm²'],
              correctAnswer: '12cm²',
              explanation: <p><M t="$\frac{1}{2}\times6\times4=12$" />（cm²）。半分は6cm²です。</p>
            }
          },
          {
            id: 3, title: '③ 二等分する直線が通る点',
            content: <p>頂点Pを通る直線で三角形の面積を二等分するには、向かい合う辺ABの中点を通ればよい。高さが共通で、底辺が半分ずつになるからです。</p>,
            quiz: {
              type: 'choice',
              question: '辺ABの中点Mの座標は？',
              options: ['(5, 0)', '(3, 0)', '(4, 0)', '(6, 0)', '(5, 2)'],
              correctAnswer: '(5, 0)',
              explanation: <p><M t="$\frac{2+8}{2}=5$" /> なので M(5, 0)。ABの長さの半分 3 をそのまま x 座標にしないように。Pの真下の (4, 0) も中点ではありません。</p>
            }
          },
          {
            id: 4, title: '④ 直線PMの傾き',
            content: <p>P(4, 4) から M(5, 0) へ進むときの変化を見ます。</p>,
            quiz: {
              type: 'choice',
              question: '直線PMの傾きは？',
              options: ['−4', '4', '−1/4'],
              correctAnswer: '−4',
              explanation: <p><M t="$\frac{0-4}{5-4}=-4$" />。</p>
            }
          },
          {
            id: 5, title: '⑤ 答え',
            content: <p><M t="$y=-4x+b$" /> に M(5, 0) を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '求める直線の式は？',
              options: ['y = −4x + 20', 'y = −4x − 20', 'y = 4x − 20', 'y = −4x + 5', 'y = −(1/4)x + 5'],
              correctAnswer: 'y = −4x + 20',
              explanation: <div><E8Fig ans /><p><M t="$0=-20+b$" /> より <M t="$b=20$" />。答えは <M t="$y=-4x+20$" />。検算：<M t="$x=4$" /> で <M t="$-16+20=4$" /> となりPを通ります。△PBM は底辺3、高さ4で面積6、△PMA も底辺3、高さ4で面積6となり、12の半分ずつです。</p></div>
            }
          }
        ]
      }
    ]
  }
};
