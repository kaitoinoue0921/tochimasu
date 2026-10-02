import React from 'react';
import { MajorQuestionData } from './r7';
import { TextWithMath } from '@/components/MathText';

export const r4RestData: Record<string, MajorQuestionData> = {
  "q3": {
    id: 'q3',
    title: '令和4年 大問3（確率とデータ）',
    subs: [
      {
        id: '1', title: '確率の基本', knowledge: ['確率', '樹形図'],
        originalText: <p>袋の中に赤玉3個、白玉2個が入っている。同時に2個取り出すとき、少なくとも1個が赤玉である確率を求めなさい。</p>,
        steps: [
          {
            id: 1, title: 'すべての取り出し方',
            content: <p>玉をすべて区別して考えます。赤玉を①②③、白玉を④⑤とします。</p>,
            quiz: { type: 'choice', question: '全部で何通りの取り出し方がありますか？', options: ['5通り', '10通り', '20通り'], correctAnswer: '10通り', explanation: <p>5個から2個を選ぶ組み合わせなので、5×4÷2 = 10通りです。</p> }
          },
          {
            id: 2, title: '「少なくとも」の考え方',
            quiz: { type: 'choice', question: '「少なくとも1個が赤玉」の反対は何ですか？', options: ['2個とも赤玉', '2個とも白玉', '赤玉1個と白玉1個'], correctAnswer: '2個とも白玉', explanation: <p>「少なくとも」と出たら「全体 - (すべて白玉)」で計算するのが鉄則です！</p> }
          },
          {
            id: 3, title: '答えを求める',
            quiz: { type: 'choice', question: '2個とも白玉になる確率は1/10です。では、少なくとも1個が赤玉である確率は？', options: ['9/10', '7/10', '3/10'], correctAnswer: '9/10', explanation: <p>全体(1)から1/10を引いて、9/10になります。</p> }
          }
        ]
      }
    ]
  },
  "q4": {
    id: 'q4',
    title: '令和4年 大問4（図形の証明）',
    subs: [
      {
        id: '1', title: '三角形の合同証明', knowledge: ['合同条件', '平行線の錯角'],
        originalText: <p>図において、△ABCと△DEFが合同であることを証明しなさい。（※簡易版）</p>,
        steps: [
          {
            id: 1, title: '仮定の確認',
            quiz: { type: 'choice', question: '証明を始めるとき、最初に書くべきことは？', options: ['結論', '仮定からわかる等しい辺や角', '合同条件'], correctAnswer: '仮定からわかる等しい辺や角', explanation: <p>まずは問題文（仮定）で与えられているヒントを箇条書きにします。</p> }
          },
          {
            id: 2, title: '合同条件の選択',
            quiz: { type: 'choice', question: '2つの辺とその間の角が等しいとき、使う合同条件は？', options: ['3組の辺がそれぞれ等しい', '2組の辺とその間の角がそれぞれ等しい', '1組の辺とその両端の角がそれぞれ等しい'], correctAnswer: '2組の辺とその間の角がそれぞれ等しい', explanation: <p>図形に印をつけて、どの条件が当てはまるか確認しましょう。</p> }
          }
        ]
      }
    ]
  },
  "q5": {
    id: 'q5',
    title: '令和4年 大問5（関数）',
    subs: [
      {
        id: '1', title: '放物線と直線', knowledge: ['2乗に比例する関数', '直線の式'],
        originalText: <p>関数 y = x^2 のグラフ上に2点A, Bがある。Aのx座標が-2、Bのx座標が3のとき、直線ABの式を求めなさい。</p>,
        steps: [
          {
            id: 1, title: 'AとBの座標を求める',
            quiz: { type: 'choice', question: '点Aのy座標はいくつですか？', options: ['-2', '2', '4'], correctAnswer: '4', explanation: <p>x = -2 を y = x^2 に代入すると、y = 4 になります。</p> }
          },
          {
            id: 2, title: '傾きを求める',
            quiz: { type: 'choice', question: '点A(-2, 4)と点B(3, 9)を通る直線の傾きは？', options: ['1', '5', '13'], correctAnswer: '1', explanation: <p>xの増加量は 3 - (-2) = 5。yの増加量は 9 - 4 = 5。5 ÷ 5 = 1 です。</p> }
          }
        ]
      }
    ]
  },
  "q6": {
    id: 'q6',
    title: '令和4年 大問6（空間図形）',
    subs: [
      {
        id: '1', title: '立体の体積', knowledge: ['円錐の体積', '三平方の定理'],
        originalText: <p>底面の半径が3cm、母線が5cmの円錐の体積を求めなさい。</p>,
        steps: [
          {
            id: 1, title: '高さを求める',
            quiz: { type: 'choice', question: '三平方の定理を使って、この円錐の高さを求めると何cmになりますか？', options: ['4cm', '8cm', '16cm'], correctAnswer: '4cm', explanation: <p>高さ h = √(5^2 - 3^2) = √(25 - 9) = √16 = 4cm になります。</p> }
          },
          {
            id: 2, title: '体積の計算',
            quiz: { type: 'choice', question: '底面積(9π)と高さ(4)がわかりました。体積は？', options: ['12π', '36π', '108π'], correctAnswer: '12π', explanation: <p>錐（すい）の体積は 1/3 をかけるのを忘れずに！ 9π × 4 ÷ 3 = 12π です。</p> }
          }
        ]
      }
    ]
  }
};
