'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function Q5Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '図形の形とサイズを把握する',
      content: (
        <div className="space-y-4">
          <p>
            まずは動く図形（長方形ABCD）と、固定されている図形（L字型）のサイズを確認します。
          </p>
          <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <li><strong>長方形 ABCD</strong>：縦 <TextWithMath text="$a$" /> cm、横 <TextWithMath text="$b$" /> cm</li>
            <li><strong>L字型の図形</strong>：1辺6cmの正方形から、右上3cm×3cmの正方形を切り取った形<br/>
              （左半分は高さ6cm・幅3cm、右半分は高さ3cm・幅3cm）</li>
          </ul>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '長方形が毎秒1cmで右へ進むとき、「x秒後」というのは長方形の右端が何cm進んだことを意味するでしょうか？',
        options: ['x cm', '2x cm', 'x/2 cm'],
        correctAnswer: 'x cm',
        explanation: (
          <p>正解です！毎秒1cmなので、<TextWithMath text="$x$" /> 秒後には <TextWithMath text="$x$" /> cm進みます。</p>
        )
      }
    },
    {
      id: 2,
      title: '条件を代入して図形の動きをイメージする',
      content: (
        <div className="space-y-4">
          <p>
            問題(1)では、長方形のサイズが <strong>縦2cm (<TextWithMath text="$a=2$" />)、横4cm (<TextWithMath text="$b=4$" />)</strong> と指定されています。
          </p>
          <p>
            <TextWithMath text="$x=4$" />（4秒後）のとき、長方形はどうなっているでしょうか？
          </p>
          <p className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800 transition-colors">
            長方形の右端は4cm進み、横幅が4cmなので、長方形はちょうど**すっぽりとL字型図形の左側（幅6cmの中）に収まっています**。長方形の高さは2cmで、L字型の最も低い部分（右半分の高さ3cm）よりも低いため、はみ出すこともありません。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'このとき、重なる面積 y はいくつになる？',
        options: ['6', '8', '12'],
        correctAnswer: '8',
        explanation: (
          <p>
            素晴らしい！完全に収まっているので、長方形の面積そのもの（<TextWithMath text="$2 \times 4 = 8$" />）が重なる面積になります。これが表の空欄 <strong>①</strong> の答えです。
          </p>
        )
      }
    },
    {
      id: 3,
      title: '図形が外へ出始めるタイミングを考える',
      content: (
        <div className="space-y-4">
          <p>
            続いて <TextWithMath text="$x=7$" />（7秒後）のときを考えます。
          </p>
          <p>
            L字型の全体の幅は <strong>6cm</strong> しかありません。<br />
            長方形の右端が 7cm の位置にあるということは、長方形の右側 1cm 分（7cm - 6cm）は、<strong>L字型の外にはみ出しています</strong>。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '長方形の右端が7cmの位置にあるとき、長方形の左端は何cmの位置にある？（長方形の幅は4cm）',
        options: ['1 cm', '2 cm', '3 cm'],
        correctAnswer: '3 cm',
        explanation: (
          <p>
            大正解！右端が7cmで幅が4cmなので、<TextWithMath text="$7 - 4 = 3$" /> cmの位置に左端があります。
          </p>
        )
      }
    },
    {
      id: 4,
      title: '重なる部分の面積を計算する',
      content: (
        <div className="space-y-4">
          <p>
            ステップ3で分かったことをまとめると、長方形がL字型と重なっているのは、<strong>3cm の位置から 6cm の位置までの区間</strong>だけです。
          </p>
          <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <li>横の長さ：3cm（3cm〜6cmの区間）</li>
            <li>縦の長さ：2cm（長方形の高さがそのまま重なる）</li>
          </ul>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'x=7 のときの重なる面積 y はいくつになる？',
        options: ['6', '8', '14'],
        correctAnswer: '6',
        explanation: (
          <div className="space-y-2 mt-2">
            <MathText block math="y = 3 \times 2 = 6" />
            <p className="font-bold text-emerald-700 dark:text-emerald-400">
              完璧です！これが表の空欄 <strong>②</strong> の答えです。図形の左端と右端がどこにあるかを丁寧に場合分けするのがポイントですね。
            </p>
          </div>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="大問5：動く図形と重なる面積"
      knowledge={['図形の移動と面積', '場合分け', '関数の利用', '空間把握']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文（抜粋）】</h3>
          <p>
            <TextWithMath text="$AB=a$" /> cm, <TextWithMath text="$BC=b$" /> cmの長方形ABCDと、1辺の長さが6cmの正方形の右上部から1辺の長さが3cmの正方形を切り取ったL字型の図形EFGHIJがある。辺BCと辺FGは直線 <TextWithMath text="$\ell$" /> 上にあり、点Cと点Fは同じ位置にある。図形EFGHIJを固定し、長方形ABCDを直線 <TextWithMath text="$\ell$" /> に沿って毎秒1cmで点Bが点Gと同じ位置になるまで移動させる。
          </p>
          <p>
            長方形ABCDが移動し始めてから <TextWithMath text="$x$" /> 秒後の2つの図形が重なった部分の面積を <TextWithMath text="$y$" /> cm²とする。
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-4 mt-4 border border-orange-200 dark:border-orange-800">
            <p className="font-bold mb-2">(1) <TextWithMath text="$a = 2$" />, <TextWithMath text="$b = 4$" /> とする。</p>
            <p>
              下の表は <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をまとめたものである。表の①、②に当てはまる数をそれぞれ求めなさい。
            </p>
            <div className="flex justify-center mt-4">
              <table className="border-collapse border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800">
                <tbody>
                  <tr>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12"><TextWithMath text="$x$" /></td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">0</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">1</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">4</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">7</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12"><TextWithMath text="$y$" /></td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">0</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">2</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12 bg-orange-100 dark:bg-orange-800 font-bold">①</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12 bg-orange-100 dark:bg-orange-800 font-bold">②</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
      steps={steps}
    />
  );
}
