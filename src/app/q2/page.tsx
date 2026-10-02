'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function Q2Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '第1問：近似値と真の値の範囲',
      content: (
        <div className="space-y-4">
          <p>
            「小数第1位を四捨五入した値」が「29g」になったということは、もとの重さ（真の値）はどの範囲にあったのでしょうか。
          </p>
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <p className="font-bold">四捨五入のルール</p>
            <ul className="list-disc list-inside mt-2">
              <li>切り捨てられるのは 0, 1, 2, 3, 4</li>
              <li>切り上げられるのは 5, 6, 7, 8, 9</li>
            </ul>
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '四捨五入して「29」になる範囲として正しい不等式はどれ？',
        options: [
          '28.5 ≦ a ≦ 29.4',
          '28.5 ≦ a < 29.5',
          '28.4 < a ≦ 29.4'
        ],
        correctAnswer: '28.5 ≦ a < 29.5',
        explanation: (
          <p>
            正解です！ 28.5 は切り上げられて 29 になります。一方、29.4999... までは 29 になりますが、29.5 になった瞬間に 30 に切り上げられてしまうため、不等号には「＝（イコール）」をつけずに <strong><TextWithMath text="$< 29.5$" /></strong> と表現します。
          </p>
        )
      }
    },
    {
      id: 2,
      title: '第2問：走る距離と歩く距離（方程式の作成）',
      content: (
        <div className="space-y-4">
          <p>
            ここからは第2問（連立方程式の文章題）です。まずは「距離」についての方程式を立てましょう。<br />
            問題文から、走る距離を <TextWithMath text="$x$" /> m、歩く距離を <TextWithMath text="$y$" /> m とします。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'トラック1周は400mです。距離についての正しい方程式はどれ？',
        options: ['x - y = 400', 'x + y = 400', '400x + 400y = 1'],
        correctAnswer: 'x + y = 400',
        explanation: (
          <p>
            その通りです！走った距離と歩いた距離を合わせると1周分になるので、<TextWithMath text="$x + y = 400$" /> が一つ目の式になります。
          </p>
        )
      }
    },
    {
      id: 3,
      title: '時間の関係から2つ目の方程式を作る',
      content: (
        <div className="space-y-4">
          <p>
            次は「時間」についての方程式を立てます。
            「時間 ＝ 距離 ÷ 速さ」ですね。
          </p>
          <ul className="list-disc list-inside space-y-2 bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors">
            <li>走った時間：<TextWithMath text="$x$" /> m を 分速300m で走った</li>
            <li>歩いた時間：<TextWithMath text="$y$" /> m を 分速60m で歩いた</li>
            <li>合計時間：ちょうど 2分 かかった</li>
          </ul>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '時間についての正しい方程式はどれ？',
        options: [
          '300x + 60y = 2',
          'x/300 + y/60 = 2',
          'x/60 + y/300 = 2'
        ],
        correctAnswer: 'x/300 + y/60 = 2',
        explanation: (
          <p>
            完璧です！走った時間 <TextWithMath text="$\frac{x}{300}$" /> 分と、歩いた時間 <TextWithMath text="$\frac{y}{60}$" /> 分を足すと2分になります。
          </p>
        )
      }
    },
    {
      id: 4,
      title: '連立方程式を解く',
      content: (
        <div className="space-y-4">
          <p>
            これで2つの方程式が揃いました。分数を消すために、2つ目の式の両辺に <strong>300</strong> をかけて整理しましょう。
          </p>
          <div className="text-center my-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <MathText block math="\frac{x}{300} \times 300 + \frac{y}{60} \times 300 = 2 \times 300" />
            <MathText block math="x + 5y = 600" />
          </div>
          <p>
            あとは、1つ目の式 <TextWithMath text="$x + y = 400$" /> と連立させて解くだけです。<br />
            引き算（加減法）をすると <TextWithMath text="$x$" /> が消えますね。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'この連立方程式を解いた答えとして正しいものはどれ？',
        options: [
          'x = 350, y = 50',
          'x = 250, y = 150',
          'x = 300, y = 100'
        ],
        correctAnswer: 'x = 350, y = 50',
        explanation: (
          <div className="space-y-2 mt-2 text-left">
            <p>大正解！</p>
            <MathText block math="(x + 5y) - (x + y) = 600 - 400" />
            <MathText block math="4y = 200 \implies y = 50" />
            <p>歩いた距離（y）が 50m。<TextWithMath text="$x + 50 = 400$" /> なので、走った距離（x）は 350m になります。</p>
          </div>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="R6 大問2：近似値と連立方程式"
      knowledge={['近似値と有効数字', '四捨五入の範囲', '速さ・時間・距離', '連立方程式の立式と解法']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文（抜粋）】</h3>
          <p className="font-bold">1</p>
          <p>
            小数第1位を四捨五入した近似値が表示されるはかりがある。このはかりを用いて、いちご1個の重さを測定したところ、29gと表示された。このときの真の値を <TextWithMath text="$a$" /> gとしたとき、<TextWithMath text="$a$" /> の範囲を不等号を用いて表しなさい。
          </p>
          <p className="font-bold mt-4">2</p>
          <p>
            陸上競技場に1周400mのトラックがある。つばささんは、スタート地点からある地点までは、分速300mで走り、その後分速60mで歩き、ちょうど2分でトラックを1周するトレーニングを計画している。<br />
            このとき、走る距離を <TextWithMath text="$x$" /> m、歩く距離を <TextWithMath text="$y$" /> mとして連立方程式をつくり、走る距離と歩く距離をそれぞれ求めなさい。ただし、途中の計算も書くこと。
          </p>
        </div>
      }
      steps={steps}
    />
  );
}
