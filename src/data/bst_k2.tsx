import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { LatticeParallelogramFig } from './bst_figs';

const intro = (
  <div className="space-y-2">
    <p>右の図において、直線 <TextWithMath text="$\ell$" /> は関数 <TextWithMath text="$y=x+5$" /> のグラフである。<TextWithMath text="$x$" /> 軸と直線 <TextWithMath text="$\ell$" /> 上で、<TextWithMath text="$x$" /> 座標が <TextWithMath text="$t\ (t>0)$" /> である点をそれぞれA、Bとする。また、直線 <TextWithMath text="$\ell$" /> と <TextWithMath text="$y$" /> 軸との交点をC、点Aを通り直線 <TextWithMath text="$\ell$" /> に平行な直線と <TextWithMath text="$y$" /> 軸との交点をDとし、平行四辺形ABCDをつくる。</p>
    <LatticeParallelogramFig />
  </div>
);

// 問題用紙の写真の大問5-2（本人が持っていた問題用紙の写真。年度は不明）
export const k2Data: MajorQuestionData = {
  id: "k2",
  title: "大問5-2：直線と平行四辺形・格子点",
  subs: [
    {
      id: "1",
      title: "(1) t＝4 のときの点Bのy座標",
      knowledge: ["1次関数のグラフ", "座標"],
      originalText: <div>{intro}<p>(1)　<TextWithMath text="$t=4$" /> のときの点Bの <TextWithMath text="$y$" /> 座標を求めなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 点Bは直線ℓの上',
          content: <p>点Bは <TextWithMath text="$y=x+5$" /> の上にあり、x座標は t です。</p>,
          quiz: {
            type: 'choice',
            question: '点Bの座標を t で表すと？',
            options: ['(t, t + 5)', '(t, 5)', '(t + 5, t)'],
            correctAnswer: '(t, t + 5)',
            explanation: <p>x座標が t なので、y座標は <TextWithMath text="$t+5$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 代入',
          content: <p><TextWithMath text="$t=4$" /> を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '点Bのy座標は？',
            options: ['9', '5', '4'],
            correctAnswer: '9',
            explanation: <p><TextWithMath text="$y=4+5=9$" />。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "(2) 点Dのy座標が−3のときの面積",
      knowledge: ["平行線の式", "平行四辺形の面積"],
      originalText: <div>{intro}<p>(2)　点Dの <TextWithMath text="$y$" /> 座標が <TextWithMath text="$-3$" /> のとき、平行四辺形ABCDの面積を求めなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 直線ADの式',
          content: <p>直線ADは直線ℓに平行なので、傾きは1。点Aは <TextWithMath text="$(t,0)$" /> を通ります。</p>,
          quiz: {
            type: 'choice',
            question: '直線ADの式は？',
            options: ['y = x − t', 'y = x + t', 'y = −x + t'],
            correctAnswer: 'y = x − t',
            explanation: <p><TextWithMath text="$y=x+b$" /> に (t, 0) を代入すると <TextWithMath text="$b=-t$" />。</p>
          }
        },
        {
          id: 2, title: '② t の値',
          content: <p>点Dは直線ADと y 軸の交点なので、<TextWithMath text="$x=0$" /> を代入した y 座標が D の y 座標です。</p>,
          quiz: {
            type: 'choice',
            question: 'D の y 座標が −3 のとき、t は？',
            options: ['3', '−3', '5'],
            correctAnswer: '3',
            explanation: <p>D は <TextWithMath text="$(0,-t)$" />。<TextWithMath text="$-t=-3$" /> より <TextWithMath text="$t=3$" />。</p>
          }
        },
        {
          id: 3, title: '③ 底辺と高さ',
          content: <p>辺CDは y 軸上にあるので、これを底辺にします。C(0, 5)、D(0, −3) です。高さは、点Aから y 軸までの距離です。</p>,
          quiz: {
            type: 'choice',
            question: '底辺CDの長さと高さは？',
            options: ['底辺8、高さ3', '底辺2、高さ3', '底辺8、高さ5'],
            correctAnswer: '底辺8、高さ3',
            explanation: <p>CD ＝ 5 − (−3) ＝ 8。点A(3, 0) から y 軸までの距離は3です。</p>
          }
        },
        {
          id: 4, title: '④ 面積',
          content: <p>平行四辺形の面積 ＝ 底辺 × 高さ。</p>,
          quiz: {
            type: 'choice',
            question: '平行四辺形ABCDの面積は？',
            options: ['24', '12', '40'],
            correctAnswer: '24',
            explanation: <p>8 × 3 ＝ 24。辺ABを底辺にしても AB ＝ 3 + 5 ＝ 8、高さ3で同じです。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "(3) 格子点の個数と t の値",
      knowledge: ["格子点", "規則性", "2次方程式"],
      originalText: <div>{intro}<p>(3)　次の文の①、②に当てはまる式や数をそれぞれ求めなさい。ただし、答えにかっこがある場合は、かっこをはずし、同類項をまとめた多項式で答えること。</p><div className="border border-slate-400 rounded p-3 space-y-2"><p>点(0, 1)や点(2, 3)のように、<TextWithMath text="$x$" /> 座標と <TextWithMath text="$y$" /> 座標がともに整数である点のことを格子点(こうしてん)という。</p><p><TextWithMath text="$t$" /> を正の整数とするとき、平行四辺形ABCDの内部および周上にある格子点の個数の合計について考える。</p><p><TextWithMath text="$t$" /> を用いると、辺AB上にある格子点の個数は <TextWithMath text="$(t+6)$" /> 個、辺AD上にある格子点の個数は（　①　）個とそれぞれ表せる。平行四辺形ABCDの内部および周上にある格子点は、縦に <TextWithMath text="$(t+6)$" /> 個ずつ並んだ列が、横方向に（　①　）列並んでいるとみることができるから、格子点の個数の合計も <TextWithMath text="$t$" /> を用いて表すことができる。</p><p>したがって、平行四辺形ABCDの内部および周上にある格子点の個数の合計が104個のとき、<TextWithMath text="$t$" /> の値は（　②　）である。</p></div></div>,
      steps: [
        {
          id: 1, title: '① 辺AB上の格子点（確認）',
          content: <p>辺ABは <TextWithMath text="$x=t$" /> 上で、y が 0 から <TextWithMath text="$t+5$" /> まで。両端を含めて数えます。</p>,
          quiz: {
            type: 'choice',
            question: '0 から t + 5 までの整数は何個？',
            options: ['t + 6 個', 't + 5 個', 't + 4 個'],
            correctAnswer: 't + 6 個',
            explanation: <p>両端を含む個数は「差 ＋ 1」なので <TextWithMath text="$(t+5)+1=t+6$" />（問題文のとおり）。</p>
          }
        },
        {
          id: 2, title: '② 辺AD上の格子点',
          content: <p>辺ADは <TextWithMath text="$y=x-t$" /> 上で、A(t, 0) から D(0, −t) まで。x が整数なら y も整数になります。</p>,
          quiz: {
            type: 'choice',
            question: '辺AD上の格子点の個数（①）は？',
            options: ['t + 1', 't', 't − 1', '2t + 1', 't + 6'],
            correctAnswer: 't + 1',
            explanation: <p>x ＝ 0, 1, 2, …, t の <TextWithMath text="$t+1$" /> 個。両端を含むので t 個ではありません。</p>
          }
        },
        {
          id: 3, title: '③ 全部の個数',
          content: <p>縦に <TextWithMath text="$(t+6)$" /> 個の列が、横に <TextWithMath text="$(t+1)$" /> 列並びます。</p>,
          quiz: {
            type: 'choice',
            question: '格子点の合計を t で表すと？',
            options: ['(t + 1)(t + 6)', '(t + 6)²', 't(t + 6)'],
            correctAnswer: '(t + 1)(t + 6)',
            explanation: <p>展開して <TextWithMath text="$t^2+7t+6$" /> 個です。</p>
          }
        },
        {
          id: 4, title: '④ 104個になる t',
          content: <p><TextWithMath text="$t^2+7t+6=104$" /> を解きます。</p>,
          quiz: {
            type: 'choice',
            question: 't の値（②）は？',
            options: ['7', '14', '8'],
            correctAnswer: '7',
            explanation: <p><TextWithMath text="$t^2+7t-98=0$" /> より <TextWithMath text="$(t+14)(t-7)=0$" />。t は正の整数なので <TextWithMath text="$t=7$" />。確認：(7+1)(7+6) ＝ 8 × 13 ＝ 104。</p>
          }
        }
      ]
    }
  ]
};
