import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { GraphFig } from './ruiji_figs';

// 類題C：関数 y=ax² と直線（栃木県公立入試 大問5 の形式）。答えはすべて python で検算済み。

// ---------- c1：2点を通る直線と△OAB ----------
const f1 = (x: number) => 2 * x * x;
const Fig1 = ({ withC = false }: { withC?: boolean }) => (
  <GraphFig
    xMin={-3} xMax={3} yMin={-1} yMax={withC ? 13 : 10}
    xTicks={[-1, 2]} yTicks={withC ? [2, 4, 8, 12] : [2, 4, 8]}
    curves={[{ fn: f1, x0: -2.1, x1: 2.1 }]}
    lines={[{ a: 2, b: 4, x0: -2, x1: 2.3, label: 'ℓ' }]}
    polygons={withC ? [{ pts: [[-1, 2], [2, 8], [0, 12]], fill: '#fde68a', stroke: '#b45309' }] : [{ pts: [[0, 0], [-1, 2], [2, 8]] }]}
    points={[
      { x: -1, y: 2, label: 'A', dx: -14 },
      { x: 2, y: 8, label: 'B', dx: 6, dy: 4 },
      ...(withC ? [{ x: 0, y: 12, label: 'C', dx: 5 }] : []),
    ]}
    guides={[{ x: -1, y: 2 }, { x: 2, y: 8 }]}
  />
);
const intro1 = (
  <div className="space-y-2">
    <p>右の図のように、関数 <TextWithMath text="$y=ax^2$" /> のグラフ上に2点A、Bがある。点Bの座標は <TextWithMath text="$(2,\ 8)$" />、点Aの <TextWithMath text="$x$" /> 座標は <TextWithMath text="$-1$" /> である。また、2点A、Bを通る直線を <TextWithMath text="$\ell$" /> とする。</p>
    <Fig1 />
  </div>
);

// ---------- c2：変化の割合と変域 ----------
const f2 = (x: number) => 0.75 * x * x;
const Fig2 = ({ range = false }: { range?: boolean }) => (
  <GraphFig
    xMin={-5} xMax={5} yMin={-1} yMax={14}
    xTicks={range ? [-4, -2, 2] : [-2]} yTicks={range ? [3, 12] : [3]}
    curves={[{ fn: f2, x0: -4.2, x1: 4.2 }]}
    polylines={range ? [{ pts: Array.from({ length: 31 }, (_, k) => { const x = -4 + (6 * k) / 30; return [x, f2(x)] as [number, number]; }), color: '#dc2626', width: 3.2 }] : undefined}
    points={range ? [{ x: -4, y: 12 }, { x: 2, y: 3 }, { x: -2, y: 3, label: 'A', dx: -14 }] : [{ x: -2, y: 3, label: 'A', dx: -14 }]}
    guides={range ? [{ x: -4, y: 12 }, { x: 2, y: 3 }] : [{ x: -2, y: 3 }]}
  />
);
const intro2 = (
  <div className="space-y-2">
    <p>右の図は、関数 <TextWithMath text="$y=ax^2$" /> のグラフである。このグラフは点 <TextWithMath text="$\mathrm{A}(-2,\ 3)$" /> を通っている。</p>
    <Fig2 />
  </div>
);

// ---------- c3：放物線と直線の交点・面積の比 ----------
const f3 = (x: number) => x * x / 4;
const Fig3 = ({ split = false }: { split?: boolean }) => (
  <GraphFig
    xMin={-13} xMax={8} yMin={-1} yMax={11}
    xTicks={[-12, -4, 6]} yTicks={[4, 9]}
    curves={[{ fn: f3, x0: -6.4, x1: 6.4 }]}
    lines={[{ a: 0.5, b: 6, x0: -12.5, x1: 7, label: 'ℓ' }]}
    polygons={split ? [{ pts: [[0, 0], [-12, 0], [-4, 4]], fill: '#e2e8f0', stroke: '#64748b' }, { pts: [[0, 0], [-4, 4], [6, 9]] }] : undefined}
    points={[
      { x: -4, y: 4, label: 'A', dx: -6, dy: -8 },
      { x: 6, y: 9, label: 'B', dx: -14, dy: -4 },
      { x: -12, y: 0, label: 'D', dx: -4, dy: -7 },
    ]}
    guides={[{ x: -4, y: 4 }, { x: 6, y: 9 }]}
  />
);
const intro3 = (
  <div className="space-y-2">
    <p>右の図のように、関数 <TextWithMath text="$y=ax^2$" /> のグラフと直線 <TextWithMath text="$\ell:\ y=\dfrac12x+6$" /> が2点A、Bで交わっている。点Aの <TextWithMath text="$x$" /> 座標は <TextWithMath text="$-4$" /> で、点Bの <TextWithMath text="$x$" /> 座標は正である。また、直線 <TextWithMath text="$\ell$" /> と <TextWithMath text="$x$" /> 軸との交点をDとする。</p>
    <Fig3 />
  </div>
);

// ---------- c4：x軸に平行な線と長方形・正方形 ----------
const f4 = (x: number) => x * x / 3;
const Fig4 = ({ t = 4, yMax = 17, ticks = false }: { t?: number; yMax?: number; ticks?: boolean }) => (
  <GraphFig
    xMin={-8} xMax={8} yMin={-1} yMax={yMax}
    xTicks={ticks ? [-t, t] : undefined} yTicks={ticks ? [f4(t)] : undefined}
    curves={[{ fn: f4, x0: -Math.sqrt(3 * (yMax - 0.5)), x1: Math.sqrt(3 * (yMax - 0.5)) }]}
    polygons={[{ pts: [[t, f4(t)], [-t, f4(t)], [-t, 0], [t, 0]] }]}
    points={[
      { x: t, y: f4(t), label: 'A', dx: 5, dy: 4 },
      { x: -t, y: f4(t), label: 'B', dx: -14, dy: 4 },
      { x: -t, y: 0, label: 'C', dx: -12, dy: -5 },
      { x: t, y: 0, label: 'D', dx: 4, dy: -5 },
    ]}
  />
);
const intro4 = (
  <div className="space-y-2">
    <p>右の図のように、関数 <TextWithMath text="$y=ax^2$" /> のグラフは点 <TextWithMath text="$(-3,\ 3)$" /> を通っている。このグラフ上に <TextWithMath text="$x$" /> 座標が <TextWithMath text="$t\ (t>0)$" /> である点Aをとり、点Aを通り <TextWithMath text="$x$" /> 軸に平行な直線とこのグラフとの交点のうち、Aと異なる点をBとする。また、点B、Aから <TextWithMath text="$x$" /> 軸にひいた垂線と <TextWithMath text="$x$" /> 軸との交点をそれぞれC、Dとし、長方形ABCDをつくる。</p>
    <Fig4 />
  </div>
);

// ---------- c5：面積が等しくなる点P ----------
const f5 = (x: number) => x * x;
const Fig5 = ({ withP = false }: { withP?: boolean }) => (
  <GraphFig
    xMin={-4} xMax={5} yMin={-1} yMax={11}
    xTicks={withP ? [-2, 1, 3] : [-2, 3]} yTicks={[4, 9]}
    curves={[{ fn: f5, x0: -3.2, x1: 3.2 }]}
    lines={[{ a: 1, b: 6, x0: -3, x1: 4, label: 'ℓ' }]}
    polylines={withP ? [{ pts: [[-1, -1], [3.5, 3.5]], dash: true, color: '#dc2626' }] : undefined}
    polygons={withP ? [{ pts: [[1, 1], [-2, 4], [3, 9]], fill: '#fde68a', stroke: '#b45309' }] : [{ pts: [[0, 0], [-2, 4], [3, 9]] }]}
    points={[
      { x: -2, y: 4, label: 'A', dx: -14 },
      { x: 3, y: 9, label: 'B', dx: -14, dy: -2 },
      ...(withP ? [{ x: 1, y: 1, label: 'P', dx: 6, dy: 4 }] : []),
    ]}
    guides={[{ x: -2, y: 4 }, { x: 3, y: 9 }]}
  />
);
const intro5 = (
  <div className="space-y-2">
    <p>右の図のように、関数 <TextWithMath text="$y=ax^2$" /> のグラフ上に2点A、Bがある。点Aの座標は <TextWithMath text="$(-2,\ 4)$" />、点Bの <TextWithMath text="$x$" /> 座標は3である。2点A、Bを通る直線を <TextWithMath text="$\ell$" /> とする。</p>
    <Fig5 />
  </div>
);

// ---------- c6：2つの放物線 ----------
const f6a = (x: number) => x * x / 2;
const f6b = (x: number) => -x * x;
const Fig6 = ({ withM = false }: { withM?: boolean }) => (
  <GraphFig
    xMin={-4} xMax={6} yMin={-19} yMax={6}
    xTicks={[-2, 4]} yTicks={[2, -4, -16]}
    curves={[{ fn: f6a, x0: -3.3, x1: 3.3, label: '①' }, { fn: f6b, x0: -2.2, x1: 4.2, label: '②' }]}
    lines={[{ a: -3, b: -4, x0: -2.6, x1: 4.4 }]}
    polylines={withM ? [{ pts: [[-0.3, 2.1], [1.2, -8.4]], dash: true, color: '#dc2626' }] : undefined}
    polygons={withM ? [{ pts: [[0, 0], [-2, 2], [1, -7]], fill: '#fde68a', stroke: '#b45309' }, { pts: [[0, 0], [1, -7], [4, -16]] }] : [{ pts: [[0, 0], [-2, 2], [4, -16]] }]}
    points={[
      { x: -2, y: 2, label: 'A', dx: -14 },
      { x: 4, y: -16, label: 'B', dx: 6, dy: 4 },
      ...(withM ? [{ x: 1, y: -7, label: 'M', dx: 6, dy: 2 }] : []),
    ]}
    guides={[{ x: -2, y: 2 }, { x: 4, y: -16 }]}
  />
);
const intro6 = (
  <div className="space-y-2">
    <p>右の図で、①は関数 <TextWithMath text="$y=ax^2\ (a>0)$" />、②は関数 <TextWithMath text="$y=-x^2$" /> のグラフである。①上に <TextWithMath text="$x$" /> 座標が <TextWithMath text="$-2$" /> である点A、②上に <TextWithMath text="$x$" /> 座標が4である点Bがある。点Aの <TextWithMath text="$y$" /> 座標は2である。</p>
    <Fig6 />
  </div>
);

export const ruijiC: Record<string, MajorQuestionData> = {
  // ===================== c1 =====================
  "c1": {
    id: "c1",
    title: "類題C-1：放物線上の2点を通る直線と△OAB",
    subs: [
      {
        id: "1",
        title: "(1) 比例定数aと点Aの座標",
        knowledge: ["関数y=ax²", "比例定数"],
        originalText: <div>{intro1}<p>(1)　<TextWithMath text="$a$" /> の値を求めなさい。また、点Aの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Bの座標を代入',
            content: <p>点B <TextWithMath text="$(2,\ 8)$" /> はグラフ上にあるので、<TextWithMath text="$y=ax^2$" /> に <TextWithMath text="$x=2,\ y=8$" /> を代入できます。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['8 = 4a', '8 = 2a', '2 = 64a', '8 = 16a', '4 = 8a'],
              correctAnswer: '8 = 4a',
              explanation: <p><TextWithMath text="$x^2=2^2=4$" /> なので <TextWithMath text="$8=4a$" />。2を2乗し忘れて <TextWithMath text="$8=2a$" /> としやすいので注意。</p>
            }
          },
          {
            id: 2, title: '② a の値',
            content: <p><TextWithMath text="$8=4a$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['2', '4', '1/2'],
              correctAnswer: '2',
              explanation: <p><TextWithMath text="$a=8\div4=2$" />。グラフは <TextWithMath text="$y=2x^2$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 点Aの座標',
            content: <p>点Aは <TextWithMath text="$y=2x^2$" /> 上で <TextWithMath text="$x=-1$" /> の点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(−1, 2)', '(−1, −2)', '(−1, 4)', '(−1, 1)', '(2, −1)'],
              correctAnswer: '(−1, 2)',
              explanation: <p><TextWithMath text="$y=2\times(-1)^2=2\times1=2$" />。<TextWithMath text="$(-1)^2$" /> は正の数なので、y座標はマイナスになりません。答えは <TextWithMath text="$a=2$" />、A <TextWithMath text="$(-1,\ 2)$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線ℓの式",
        knowledge: ["2点を通る直線の式", "傾きと切片"],
        originalText: <div>{intro1}<p>(2)　直線 <TextWithMath text="$\ell$" /> の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 通る2点',
            content: <p>(1)より、直線 <TextWithMath text="$\ell$" /> は A <TextWithMath text="$(-1,\ 2)$" /> と B <TextWithMath text="$(2,\ 8)$" /> を通ります。傾きは（yの増加量）÷（xの増加量）です。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの傾きは？',
              options: ['2', '6', '3'],
              correctAnswer: '2',
              explanation: <p><TextWithMath text="$\dfrac{8-2}{2-(-1)}=\dfrac63=2$" />。xの増加量を <TextWithMath text="$2-1=1$" /> と計算すると6になってしまいます。</p>
            }
          },
          {
            id: 2, title: '② 切片',
            content: <p><TextWithMath text="$y=2x+b$" /> に B <TextWithMath text="$(2,\ 8)$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '切片 b は？',
              options: ['4', '6', '2'],
              correctAnswer: '4',
              explanation: <p><TextWithMath text="$8=2\times2+b$" /> より <TextWithMath text="$b=4$" />。</p>
            }
          },
          {
            id: 3, title: '③ 直線ℓの式',
            content: <p>傾きと切片がそろいました。もう一方の点Aでも成り立つか確かめておきます。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの式は？',
              options: ['y = 2x + 4', 'y = 2x − 4', 'y = 4x + 2', 'y = 2x + 6', 'y = −2x + 4'],
              correctAnswer: 'y = 2x + 4',
              explanation: <p>検算：<TextWithMath text="$x=-1$" /> を代入すると <TextWithMath text="$-2+4=2$" /> で点Aの y 座標と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △ABCの面積が△OABの2倍になる点C",
        knowledge: ["三角形の面積", "y軸で分ける面積", "面積の方程式"],
        originalText: <div>{intro1}<p>(3)　<TextWithMath text="$y$" /> 軸上の <TextWithMath text="$y>0$" /> の部分に点Cをとる。△ABCの面積が△OABの面積の2倍になるとき、点Cの <TextWithMath text="$y$" /> 座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 直線ℓとy軸の交点',
            content: <p>△OABは y 軸で2つの三角形に分けられます。まず直線 <TextWithMath text="$\ell:\ y=2x+4$" /> と y 軸の交点をEとします。</p>,
            quiz: {
              type: 'choice',
              question: '点Eの座標は？',
              options: ['(0, 4)', '(0, 2)', '(−2, 0)', '(4, 0)', '(0, 8)'],
              correctAnswer: '(0, 4)',
              explanation: <p>y 軸との交点は切片なので E <TextWithMath text="$(0,\ 4)$" />。<TextWithMath text="$(-2,\ 0)$" /> は x 軸との交点です。</p>
            }
          },
          {
            id: 2, title: '② △OABの面積',
            content: <p>OEを共通の底辺とすると、高さはA、Bから y 軸までの距離（1と2）です。<TextWithMath text="$\triangle\mathrm{OAB}=\dfrac12\times\mathrm{OE}\times(1+2)$" /></p>,
            quiz: {
              type: 'choice',
              question: '△OABの面積は？',
              options: ['6', '12', '3'],
              correctAnswer: '6',
              explanation: <p><TextWithMath text="$\dfrac12\times4\times3=6$" />。</p>
            }
          },
          {
            id: 3, title: '③ △ABCを式で表す',
            content: <p>点Cを <TextWithMath text="$(0,\ c)$" /> とします。△ABCもCEを底辺にして y 軸で分けられ、高さの合計は同じく3です。Cが E より上にある場合を考えます。</p>,
            quiz: {
              type: 'choice',
              question: '△ABCの面積を c で表すと？',
              options: ['½×(c − 4)×3', '½×c×3', '½×(c + 4)×3', '(c − 4)×3', '½×(4 − c)×3'],
              correctAnswer: '½×(c − 4)×3',
              explanation: <p>底辺 CE は <TextWithMath text="$c-4$" />、高さの合計は <TextWithMath text="$1+2=3$" /> なので <TextWithMath text="$\dfrac12(c-4)\times3$" />。</p>
            }
          },
          {
            id: 4, title: '④ 方程式を解く',
            content: <p>△ABC ＝ 2 × △OAB ＝ 12 です。</p>,
            quiz: {
              type: 'choice',
              question: '点Cの y 座標は？',
              options: ['12', '8', '16'],
              correctAnswer: '12',
              explanation: <div><Fig1 withC /><p><TextWithMath text="$\dfrac32(c-4)=12$" /> より <TextWithMath text="$c-4=8$" />、<TextWithMath text="$c=12$" />。Cが E より下だと <TextWithMath text="$\dfrac32(4-c)=12$" /> から <TextWithMath text="$c=-4$" /> となり、y&gt;0 に合いません。検算：<TextWithMath text="$\dfrac12\times8\times3=12=6\times2$" />。</p></div>
            }
          }
        ]
      }
    ]
  },

  // ===================== c2 =====================
  "c2": {
    id: "c2",
    title: "類題C-2：y=ax² の変化の割合と変域",
    subs: [
      {
        id: "1",
        title: "(1) 比例定数a",
        knowledge: ["関数y=ax²", "比例定数"],
        originalText: <div>{intro2}<p>(1)　<TextWithMath text="$a$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Aを代入',
            content: <p>点A <TextWithMath text="$(-2,\ 3)$" /> を <TextWithMath text="$y=ax^2$" /> に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['3 = 4a', '3 = −4a', '3 = −2a', '−2 = 9a', '3 = 2a'],
              correctAnswer: '3 = 4a',
              explanation: <p><TextWithMath text="$(-2)^2=4$" /> なので <TextWithMath text="$3=4a$" />。<TextWithMath text="$-2^2$" /> と書いて −4 にしないように、かっこごと2乗します。</p>
            }
          },
          {
            id: 2, title: '② a の値',
            content: <p><TextWithMath text="$3=4a$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['3/4', '4/3', '−3/4'],
              correctAnswer: '3/4',
              explanation: <p><TextWithMath text="$a=\dfrac34$" />。グラフが上に開いているので a は正の数です。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) xが2から6まで増加するときの変化の割合",
        knowledge: ["変化の割合", "関数y=ax²"],
        originalText: <div>{intro2}<p>(2)　関数 <TextWithMath text="$y=ax^2$" /> について、<TextWithMath text="$x$" /> の値が2から6まで増加するときの変化の割合を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 変化の割合の定義',
            content: <p>変化の割合 ＝（yの増加量）÷（xの増加量）。1次関数と違い、y=ax² では区間によって値が変わります。</p>,
            quiz: {
              type: 'choice',
              question: 'x＝2 と x＝6 のときの y の値の組は？',
              options: ['3 と 27', '3 と 9', '1.5 と 4.5', '4 と 36', '3 と 18'],
              correctAnswer: '3 と 27',
              explanation: <p><TextWithMath text="$\dfrac34\times2^2=3$" />、<TextWithMath text="$\dfrac34\times6^2=\dfrac34\times36=27$" />。</p>
            }
          },
          {
            id: 2, title: '② 増加量',
            content: <p>x は 2 から 6 へ 4 増えます。</p>,
            quiz: {
              type: 'choice',
              question: 'y の増加量は？',
              options: ['24', '30', '27'],
              correctAnswer: '24',
              explanation: <p><TextWithMath text="$27-3=24$" />。</p>
            }
          },
          {
            id: 3, title: '③ 変化の割合',
            content: <p>（yの増加量）÷（xの増加量）を計算します。</p>,
            quiz: {
              type: 'choice',
              question: '変化の割合は？',
              options: ['6', '24', '3'],
              correctAnswer: '6',
              explanation: <p><TextWithMath text="$24\div4=6$" />。検算：y=ax² で x が p から q まで増えるときの変化の割合は <TextWithMath text="$a(p+q)$" /> なので、<TextWithMath text="$\dfrac34\times(2+6)=6$" /> と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) yの変域が0≦y≦12になるt",
        knowledge: ["y=ax²の変域", "グラフの最小値"],
        originalText: <div>{intro2}<p>(3)　関数 <TextWithMath text="$y=ax^2$" /> について、<TextWithMath text="$x$" /> の変域が <TextWithMath text="$t\leqq x\leqq 2$" /> のとき、<TextWithMath text="$y$" /> の変域は <TextWithMath text="$0\leqq y\leqq 12$" /> である。このとき、<TextWithMath text="$t$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① y の最小値が0になる条件',
            content: <p>y=ax²（a&gt;0）で y が 0 になるのは <TextWithMath text="$x=0$" /> のときだけです。</p>,
            quiz: {
              type: 'choice',
              question: 'y の最小値が 0 になるために、x の変域に必要なことは？',
              options: ['x＝0 をふくむこと（t は 0 以下）', 't が 2 より大きいこと', 't が正の数であること', 'x＝2 で y が 0 になること', 't＝−2 であること'],
              correctAnswer: 'x＝0 をふくむこと（t は 0 以下）',
              explanation: <p>変域が x＝0 をふくまないと y は 0 になりません。だから <TextWithMath text="$t\leqq0$" /> です。</p>
            }
          },
          {
            id: 2, title: '② x＝2 のときの y',
            content: <p>変域の右はしは x＝2 です。</p>,
            quiz: {
              type: 'choice',
              question: 'x＝2 のときの y は？',
              options: ['3', '12', '6'],
              correctAnswer: '3',
              explanation: <p><TextWithMath text="$\dfrac34\times4=3$" />。12 にならないので、最大値12は左はしの x＝t でとります。</p>
            }
          },
          {
            id: 3, title: '③ t を求める',
            content: <p><TextWithMath text="$\dfrac34t^2=12$" />（ただし <TextWithMath text="$t\leqq0$" />）を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['−4', '4', '−2'],
              correctAnswer: '−4',
              explanation: <div><Fig2 range /><p><TextWithMath text="$t^2=16$" /> より <TextWithMath text="$t=\pm4$" />。<TextWithMath text="$t\leqq0$" /> なので <TextWithMath text="$t=-4$" />。検算：<TextWithMath text="$-4\leqq x\leqq2$" /> では x＝0 で最小0、x＝−4 で最大 <TextWithMath text="$\dfrac34\times16=12$" /> となり合います。</p></div>
            }
          }
        ]
      }
    ]
  },

  // ===================== c3 =====================
  "c3": {
    id: "c3",
    title: "類題C-3：放物線と直線の交点・面積の比",
    subs: [
      {
        id: "1",
        title: "(1) 比例定数a",
        knowledge: ["関数y=ax²", "直線上の点"],
        originalText: <div>{intro3}<p>(1)　<TextWithMath text="$a$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Aは直線ℓ上にもある',
            content: <p>点Aは放物線と直線 <TextWithMath text="$\ell$" /> の交点なので、まず直線の式から y 座標が求まります。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(−4, 4)', '(−4, 8)', '(−4, −2)', '(−4, 2)', '(4, 8)'],
              correctAnswer: '(−4, 4)',
              explanation: <p><TextWithMath text="$y=\dfrac12\times(-4)+6=-2+6=4$" />。</p>
            }
          },
          {
            id: 2, title: '② y=ax² に代入',
            content: <p>A <TextWithMath text="$(-4,\ 4)$" /> は放物線上にもあります。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['4 = 16a', '4 = −16a', '4 = −8a', '−4 = 16a', '4 = 8a'],
              correctAnswer: '4 = 16a',
              explanation: <p><TextWithMath text="$(-4)^2=16$" /> なので <TextWithMath text="$4=16a$" />。</p>
            }
          },
          {
            id: 3, title: '③ a の値',
            content: <p><TextWithMath text="$4=16a$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['1/4', '4', '1/2'],
              correctAnswer: '1/4',
              explanation: <p><TextWithMath text="$a=\dfrac{4}{16}=\dfrac14$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 点Bの座標",
        knowledge: ["放物線と直線の交点", "2次方程式"],
        originalText: <div>{intro3}<p>(2)　点Bの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 交点の方程式',
            content: <p>交点では2つの式の y が等しくなります。<TextWithMath text="$\dfrac14x^2=\dfrac12x+6$" /> の両辺を4倍して整理します。</p>,
            quiz: {
              type: 'choice',
              question: '整理した2次方程式は？',
              options: ['x² − 2x − 24 = 0', 'x² + 2x − 24 = 0', 'x² − 2x − 6 = 0', 'x² − 2x + 24 = 0', 'x² − 8x − 24 = 0'],
              correctAnswer: 'x² − 2x − 24 = 0',
              explanation: <p><TextWithMath text="$x^2=2x+24$" /> より <TextWithMath text="$x^2-2x-24=0$" />。6にも4をかけるのを忘れないように。</p>
            }
          },
          {
            id: 2, title: '② 因数分解して解く',
            content: <p>かけて −24、たして −2 になる2数をさがします。</p>,
            quiz: {
              type: 'choice',
              question: '解は？',
              options: ['x ＝ 6, −4', 'x ＝ −6, 4', 'x ＝ 12, −2', 'x ＝ 8, −3', 'x ＝ 3, −8'],
              correctAnswer: 'x ＝ 6, −4',
              explanation: <p><TextWithMath text="$(x-6)(x+4)=0$" />。x＝−4 は点Aなので、点Bは x＝6 です。</p>
            }
          },
          {
            id: 3, title: '③ 点Bの座標',
            content: <p>x＝6 を直線の式（または放物線の式）に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(6, 9)', '(6, 12)', '(6, 3)', '(9, 6)', '(6, 18)'],
              correctAnswer: '(6, 9)',
              explanation: <p><TextWithMath text="$y=\dfrac12\times6+6=9$" />。検算：<TextWithMath text="$\dfrac14\times36=9$" /> で放物線の式でも一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △OABと△OBDの面積の比",
        knowledge: ["三角形の面積", "高さが共通な三角形の面積比"],
        originalText: <div>{intro3}<p>(3)　△OABと△OBDの面積の比を、最も簡単な整数の比で表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Dの座標',
            content: <p>Dは直線 <TextWithMath text="$\ell$" /> と x 軸の交点なので、<TextWithMath text="$y=0$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '点Dの座標は？',
              options: ['(−12, 0)', '(12, 0)', '(−6, 0)', '(0, 6)', '(−3, 0)'],
              correctAnswer: '(−12, 0)',
              explanation: <p><TextWithMath text="$0=\dfrac12x+6$" /> より <TextWithMath text="$x=-12$" />。</p>
            }
          },
          {
            id: 2, title: '② △OBDの面積',
            content: <p>ODを底辺（長さ12）にすると、高さは点Bの y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: '△OBDの面積は？',
              options: ['54', '108', '36'],
              correctAnswer: '54',
              explanation: <p><TextWithMath text="$\dfrac12\times12\times9=54$" />。</p>
            }
          },
          {
            id: 3, title: '③ △OABの面積',
            content: <p>△OAB ＝ △OBD − △OAD と考えます。△OADは底辺OD、高さは点Aの y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: '△OABの面積は？',
              options: ['30', '24', '78'],
              correctAnswer: '30',
              explanation: <div><Fig3 split /><p>△OAD ＝ <TextWithMath text="$\dfrac12\times12\times4=24$" /> なので、△OAB ＝ 54 − 24 ＝ 30。</p></div>
            }
          },
          {
            id: 4, title: '④ 面積の比',
            content: <p>30：54 を最も簡単な整数の比にします。</p>,
            quiz: {
              type: 'choice',
              question: '△OAB：△OBD は？',
              options: ['5：9', '4：9', '5：4', '9：5', '2：3'],
              correctAnswer: '5：9',
              explanation: <p>30：54 ＝ 5：9。別解で検算：△OABと△OBDは頂点Oが共通で底辺AB、DBが同じ直線上にあるので、面積比は AB：DB。これは y 座標の差で (9 − 4)：(9 − 0) ＝ 5：9 となり一致します。</p>
            }
          }
        ]
      }
    ]
  },

  // ===================== c4 =====================
  "c4": {
    id: "c4",
    title: "類題C-4：放物線と長方形・正方形",
    subs: [
      {
        id: "1",
        title: "(1) 比例定数a",
        knowledge: ["関数y=ax²", "比例定数"],
        originalText: <div>{intro4}<p>(1)　<TextWithMath text="$a$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点を代入',
            content: <p>グラフは <TextWithMath text="$(-3,\ 3)$" /> を通るので、<TextWithMath text="$y=ax^2$" /> に代入します。</p>,
            quiz: {
              type: 'choice',
              question: '代入してできる式は？',
              options: ['3 = 9a', '3 = −9a', '3 = −3a', '−3 = 9a', '3 = 6a'],
              correctAnswer: '3 = 9a',
              explanation: <p><TextWithMath text="$(-3)^2=9$" /> なので <TextWithMath text="$3=9a$" />。</p>
            }
          },
          {
            id: 2, title: '② a の値',
            content: <p><TextWithMath text="$3=9a$" /> を解きます。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['1/3', '3', '−1/3'],
              correctAnswer: '1/3',
              explanation: <p><TextWithMath text="$a=\dfrac39=\dfrac13$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) t＝3 のときの直線ACの式",
        knowledge: ["放物線の対称性", "2点を通る直線の式"],
        originalText: <div>{intro4}<p>(2)　<TextWithMath text="$t=3$" /> のとき、2点A、Cを通る直線の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 点Aの座標',
            content: <p>点Aは <TextWithMath text="$y=\dfrac13x^2$" /> 上で x＝3 の点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Aの座標は？',
              options: ['(3, 3)', '(3, 1)', '(3, 9)', '(3, 6)', '(3, 27)'],
              correctAnswer: '(3, 3)',
              explanation: <p><TextWithMath text="$\dfrac13\times9=3$" />。</p>
            }
          },
          {
            id: 2, title: '② 点Cの座標',
            content: <p>放物線は y 軸について対称なので、Bは A と y 座標が同じで x 座標の符号が逆です。Cは B から x 軸に下ろした点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Cの座標は？',
              options: ['(−3, 0)', '(−3, 3)', '(3, 0)', '(0, −3)', '(−6, 0)'],
              correctAnswer: '(−3, 0)',
              explanation: <p>B <TextWithMath text="$(-3,\ 3)$" /> の真下なので C <TextWithMath text="$(-3,\ 0)$" />。(3, 0) は点Dです。</p>
            }
          },
          {
            id: 3, title: '③ 傾き',
            content: <p>A <TextWithMath text="$(3,\ 3)$" /> と C <TextWithMath text="$(-3,\ 0)$" /> を通る直線の傾きを求めます。</p>,
            quiz: {
              type: 'choice',
              question: '傾きは？',
              options: ['1/2', '2', '−1/2'],
              correctAnswer: '1/2',
              explanation: <p><TextWithMath text="$\dfrac{3-0}{3-(-3)}=\dfrac36=\dfrac12$" />。</p>
            }
          },
          {
            id: 4, title: '④ 直線ACの式',
            content: <p><TextWithMath text="$y=\dfrac12x+b$" /> に C <TextWithMath text="$(-3,\ 0)$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '直線ACの式は？',
              options: ['y = 1/2x + 3/2', 'y = 1/2x − 3/2', 'y = 1/2x + 3', 'y = 2x + 6', 'y = −1/2x + 3/2'],
              correctAnswer: 'y = 1/2x + 3/2',
              explanation: <p><TextWithMath text="$0=-\dfrac32+b$" /> より <TextWithMath text="$b=\dfrac32$" />。検算：x＝3 を代入すると <TextWithMath text="$\dfrac32+\dfrac32=3$" /> で点Aと一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 長方形ABCDが正方形になるt",
        knowledge: ["座標と線分の長さ", "2次方程式"],
        originalText: <div>{intro4}<p>(3)　長方形ABCDが正方形になるとき、<TextWithMath text="$t$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 横の長さAB',
            content: <p>A <TextWithMath text="$\left(t,\ \dfrac13t^2\right)$" />、B <TextWithMath text="$\left(-t,\ \dfrac13t^2\right)$" /> です。ABは x 座標の差です。</p>,
            quiz: {
              type: 'choice',
              question: 'ABの長さを t で表すと？',
              options: ['2t', 't', 't²', '1/3t²', '2t²'],
              correctAnswer: '2t',
              explanation: <p><TextWithMath text="$t-(-t)=2t$" />。y 軸の右と左に t ずつあります。</p>
            }
          },
          {
            id: 2, title: '② 縦の長さAD',
            content: <p>ADは点Aから x 軸までの長さ、つまり点Aの y 座標です。</p>,
            quiz: {
              type: 'choice',
              question: 'ADの長さを t で表すと？',
              options: ['1/3t²', '1/3t', '2t', '3t²', 't²'],
              correctAnswer: '1/3t²',
              explanation: <p>AD ＝ <TextWithMath text="$\dfrac13t^2$" />。</p>
            }
          },
          {
            id: 3, title: '③ 方程式を立てる',
            content: <p>正方形は AB ＝ AD です。</p>,
            quiz: {
              type: 'choice',
              question: '立てる方程式は？',
              options: ['2t = 1/3t²', 't = 1/3t²', '2t = 3t²', '2t × 1/3t² = 1', '4t = 1/3t²'],
              correctAnswer: '2t = 1/3t²',
              explanation: <p>横 2t、縦 <TextWithMath text="$\dfrac13t^2$" /> を等しくおきます。</p>
            }
          },
          {
            id: 4, title: '④ 解いて t を決める',
            content: <p>両辺を3倍して <TextWithMath text="$t^2-6t=0$" />、<TextWithMath text="$t(t-6)=0$" />。条件 <TextWithMath text="$t>0$" /> に注意します。</p>,
            quiz: {
              type: 'choice',
              question: 't の値は？',
              options: ['6', '3', '2'],
              correctAnswer: '6',
              explanation: <div><Fig4 t={6} yMax={14} ticks /><p>t＝0 は長方形にならないので t＝6。検算：A <TextWithMath text="$(6,\ 12)$" />、AB ＝ 12、AD ＝ 12 で正方形になります。</p></div>
            }
          }
        ]
      }
    ]
  },

  // ===================== c5 =====================
  "c5": {
    id: "c5",
    title: "類題C-5：△PABと△OABの面積が等しくなる点P",
    subs: [
      {
        id: "1",
        title: "(1) 点Bの座標",
        knowledge: ["関数y=ax²", "比例定数"],
        originalText: <div>{intro5}<p>(1)　点Bの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① a を求める',
            content: <p>A <TextWithMath text="$(-2,\ 4)$" /> を <TextWithMath text="$y=ax^2$" /> に代入すると <TextWithMath text="$4=4a$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['1', '−1', '2'],
              correctAnswer: '1',
              explanation: <p><TextWithMath text="$a=1$" />。グラフは <TextWithMath text="$y=x^2$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 点Bの座標',
            content: <p>点Bは <TextWithMath text="$y=x^2$" /> 上で x＝3 の点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(3, 9)', '(3, 6)', '(3, 3)', '(9, 3)', '(3, 12)'],
              correctAnswer: '(3, 9)',
              explanation: <p><TextWithMath text="$3^2=9$" /> なので B <TextWithMath text="$(3,\ 9)$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線ℓの式",
        knowledge: ["2点を通る直線の式"],
        originalText: <div>{intro5}<p>(2)　直線 <TextWithMath text="$\ell$" /> の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 傾き',
            content: <p>A <TextWithMath text="$(-2,\ 4)$" />、B <TextWithMath text="$(3,\ 9)$" /> を通ります。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの傾きは？',
              options: ['1', '5', '13'],
              correctAnswer: '1',
              explanation: <p><TextWithMath text="$\dfrac{9-4}{3-(-2)}=\dfrac55=1$" />。</p>
            }
          },
          {
            id: 2, title: '② 直線ℓの式',
            content: <p><TextWithMath text="$y=x+b$" /> に B <TextWithMath text="$(3,\ 9)$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '直線ℓの式は？',
              options: ['y = x + 6', 'y = x − 6', 'y = x + 9', 'y = 5x + 6', 'y = −x + 6'],
              correctAnswer: 'y = x + 6',
              explanation: <p><TextWithMath text="$9=3+b$" /> より <TextWithMath text="$b=6$" />。検算：x＝−2 で <TextWithMath text="$-2+6=4$" /> と点Aに一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) △PAB＝△OABとなる点P",
        knowledge: ["等積変形", "平行線と面積", "放物線と直線の交点"],
        originalText: <div>{intro5}<p>(3)　関数 <TextWithMath text="$y=ax^2$" /> のグラフ上で、点Aと点Bの間（<TextWithMath text="$-2<x<3$" />）に、原点Oと異なる点Pをとる。△PABの面積が△OABの面積と等しくなるとき、点Pの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① △OABの面積',
            content: <p>直線 <TextWithMath text="$\ell$" /> の切片は6なので、y 軸上の (0, 6) で△OABを左右に分けられます。高さはA、Bから y 軸までの距離（2と3）です。</p>,
            quiz: {
              type: 'choice',
              question: '△OABの面積は？',
              options: ['15', '30', '9'],
              correctAnswer: '15',
              explanation: <p><TextWithMath text="$\dfrac12\times6\times(2+3)=15$" />。</p>
            }
          },
          {
            id: 2, title: '② 面積が等しくなる条件',
            content: <p>△OABと△PABは底辺ABが共通です。面積が等しいのは、高さが等しいときです。</p>,
            quiz: {
              type: 'choice',
              question: '点Pはどんな直線上にある？',
              options: ['原点Oを通り、直線ℓに平行な直線', '原点Oを通り、直線ℓに垂直な直線', '点Aを通り、y軸に平行な直線', '原点Oと点Bを通る直線', 'ABの中点と原点Oを通る直線'],
              correctAnswer: '原点Oを通り、直線ℓに平行な直線',
              explanation: <p>ABと平行な直線上の点は、どれもABからの距離（高さ）が同じです。Oを通る平行線上に P をとれば △PAB ＝ △OAB になります。</p>
            }
          },
          {
            id: 3, title: '③ 平行な直線の式',
            content: <p>直線 <TextWithMath text="$\ell$" /> の傾きは1。原点を通る傾き1の直線を考えます。</p>,
            quiz: {
              type: 'choice',
              question: 'その直線の式は？',
              options: ['y = x', 'y = x + 6', 'y = −x', 'y = 6x', 'y = x − 6'],
              correctAnswer: 'y = x',
              explanation: <p>原点を通るので切片は0、<TextWithMath text="$y=x$" /> です。</p>
            }
          },
          {
            id: 4, title: '④ 放物線との交点',
            content: <p><TextWithMath text="$x^2=x$" /> を解きます。<TextWithMath text="$x(x-1)=0$" /> で、x＝0 は原点Oです。</p>,
            quiz: {
              type: 'choice',
              question: '点Pの座標は？',
              options: ['(1, 1)', '(−1, 1)', '(2, 4)', '(1, 6)', '(0, 6)'],
              correctAnswer: '(1, 1)',
              explanation: <div><Fig5 withP /><p>x＝1 なので P <TextWithMath text="$(1,\ 1)$" />。直線ℓの反対側にある平行線 <TextWithMath text="$y=x+12$" /> とグラフの交点は x＝4、−3 で、−2&lt;x&lt;3 の外なので答えはこの1つです。検算：△PABを直線 x＝1 で分けると、縦の長さは直線ℓ上の y＝7 から P の y＝1 を引いた6、横の幅の合計は <TextWithMath text="$(1-(-2))+(3-1)=5$" /> なので ½ × 6 × 5 ＝ 15 となり、△OABと一致します。</p></div>
            }
          }
        ]
      }
    ]
  },

  // ===================== c6 =====================
  "c6": {
    id: "c6",
    title: "類題C-6：2つの放物線と三角形の二等分",
    subs: [
      {
        id: "1",
        title: "(1) aの値と点Bの座標",
        knowledge: ["関数y=ax²", "a<0の放物線"],
        originalText: <div>{intro6}<p>(1)　<TextWithMath text="$a$" /> の値を求めなさい。また、点Bの座標を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① a の値',
            content: <p>A <TextWithMath text="$(-2,\ 2)$" /> を①の式に代入すると <TextWithMath text="$2=4a$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: 'a の値は？',
              options: ['1/2', '2', '−1/2'],
              correctAnswer: '1/2',
              explanation: <p><TextWithMath text="$a=\dfrac24=\dfrac12$" />。</p>
            }
          },
          {
            id: 2, title: '② 点Bの座標',
            content: <p>点Bは②の <TextWithMath text="$y=-x^2$" /> 上で x＝4 の点です。</p>,
            quiz: {
              type: 'choice',
              question: '点Bの座標は？',
              options: ['(4, −16)', '(4, 16)', '(4, −8)', '(4, 8)', '(−4, −16)'],
              correctAnswer: '(4, −16)',
              explanation: <p><TextWithMath text="$-x^2$" /> は「x を2乗してからマイナス」なので <TextWithMath text="$-(4^2)=-16$" />。<TextWithMath text="$(-4)^2=16$" /> と混同しないように。答えは <TextWithMath text="$a=\dfrac12$" />、B <TextWithMath text="$(4,\ -16)$" />。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 直線ABの式",
        knowledge: ["2点を通る直線の式", "負の傾き"],
        originalText: <div>{intro6}<p>(2)　2点A、Bを通る直線の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 傾き',
            content: <p>A <TextWithMath text="$(-2,\ 2)$" />、B <TextWithMath text="$(4,\ -16)$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '直線ABの傾きは？',
              options: ['−3', '3', '−7'],
              correctAnswer: '−3',
              explanation: <p><TextWithMath text="$\dfrac{-16-2}{4-(-2)}=\dfrac{-18}{6}=-3$" />。右下がりなので負の数です。</p>
            }
          },
          {
            id: 2, title: '② 切片',
            content: <p><TextWithMath text="$y=-3x+b$" /> に A <TextWithMath text="$(-2,\ 2)$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '直線ABの式は？',
              options: ['y = −3x − 4', 'y = −3x + 4', 'y = −3x + 8', 'y = 3x − 4', 'y = −3x − 8'],
              correctAnswer: 'y = −3x − 4',
              explanation: <p><TextWithMath text="$2=6+b$" /> より <TextWithMath text="$b=-4$" />。検算：x＝4 で <TextWithMath text="$-12-4=-16$" /> と点Bに一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 原点を通り△OABの面積を2等分する直線",
        knowledge: ["三角形の面積", "中線と面積の二等分", "中点の座標"],
        originalText: <div>{intro6}<p>(3)　原点Oを通り、△OABの面積を2等分する直線の式を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① △OABの面積',
            content: <p>直線ABと y 軸の交点は (0, −4)。ここを底辺4として、A、Bから y 軸までの距離（2と4）を高さの合計にします。</p>,
            quiz: {
              type: 'choice',
              question: '△OABの面積は？',
              options: ['12', '24', '8'],
              correctAnswer: '12',
              explanation: <p><TextWithMath text="$\dfrac12\times4\times(2+4)=12$" />。半分は6です。</p>
            }
          },
          {
            id: 2, title: '② 2等分する直線が通る点',
            content: <p>三角形の頂点と向かい合う辺の中点を結ぶと、底辺が半分ずつ・高さが共通の2つの三角形に分かれます。</p>,
            quiz: {
              type: 'choice',
              question: '原点Oを通って△OABを2等分する直線は、どこを通る？',
              options: ['辺ABの中点', '辺OAの中点', '辺OBの中点', '直線ABとy軸の交点', '点Aからx軸に下ろした点'],
              correctAnswer: '辺ABの中点',
              explanation: <p>頂点Oから向かいの辺ABの中点へ引いた線（中線）で、面積が半分ずつになります。</p>
            }
          },
          {
            id: 3, title: '③ ABの中点',
            content: <p>中点の座標は、x 座標どうし・y 座標どうしの平均です。</p>,
            quiz: {
              type: 'choice',
              question: 'ABの中点Mの座標は？',
              options: ['(1, −7)', '(1, −9)', '(3, −9)', '(2, −7)', '(1, −14)'],
              correctAnswer: '(1, −7)',
              explanation: <p><TextWithMath text="$\left(\dfrac{-2+4}{2},\ \dfrac{2+(-16)}{2}\right)=(1,\ -7)$" />。中点Mは直線AB上にあり、<TextWithMath text="$-3\times1-4=-7$" /> でも確かめられます。</p>
            }
          },
          {
            id: 4, title: '④ 直線OMの式',
            content: <p>原点を通るので <TextWithMath text="$y=mx$" /> の形。M <TextWithMath text="$(1,\ -7)$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '求める直線の式は？',
              options: ['y = −7x', 'y = 7x', 'y = −1/7x', 'y = −7x − 4', 'y = −3x'],
              correctAnswer: 'y = −7x',
              explanation: <div><Fig6 withM /><p><TextWithMath text="$-7=m\times1$" /> より <TextWithMath text="$y=-7x$" />。検算：△OAM と △OMB を座標から計算すると、どちらも面積6で、合計12の半分になっています。</p></div>
            }
          }
        ]
      }
    ]
  }
};
