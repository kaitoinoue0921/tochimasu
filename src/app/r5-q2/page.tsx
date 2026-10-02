'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function R5Q2Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '求めるものを文字で置く',
      content: (
        <div className="space-y-4">
          <p>
            文章題の基本は、求めたいものを文字で置くことです。
            今回は「使用できる教室の数」を求めるので、教室の数を <TextWithMath text="$x$" /> としましょう。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '今回の問題で「x」と置くべきものはどれ？',
        options: ['参加者の合計人数', '使用できる教室の数', '余った生徒の人数'],
        correctAnswer: '使用できる教室の数',
        explanation: (
          <p>正解です！求めるものを文字で置くのが方程式の基本ですね。</p>
        )
      }
    },
    {
      id: 2,
      title: 'パターンAから「参加者の人数」を式にする',
      content: (
        <div className="space-y-4">
          <p className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors">
            <strong>条件A：</strong>1つの教室に15人ずつ入れると、34人が入れない。
          </p>
          <p>
            <TextWithMath text="$x$" /> 室すべてに15人ずつ入ったとすると、教室にいる人数は <TextWithMath text="$15x$" /> 人。
            そこにあぶれてしまった34人を足せば、参加者の総数になりますね。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '条件Aを使って参加者の総数を表した式として、正しいものはどれ？',
        options: ['15x - 34', '15x + 34', '34x + 15'],
        correctAnswer: '15x + 34',
        explanation: (
          <p>素晴らしい！教室に入れた「15x人」と、入れなかった「34人」を合計します。</p>
        )
      }
    },
    {
      id: 3,
      title: 'パターンBから「参加者の人数」を式にする',
      content: (
        <div className="space-y-4">
          <p>
            2つ目の条件は少し複雑です。ここがこの問題の一番の山場です！
          </p>
          <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors">
            <strong>条件B：</strong>20人ずつにすると、14人の教室が1つでき、使用しない教室が1つできる。
          </p>
          <p>
            全部で <TextWithMath text="$x$" /> 室ありますが、<strong>「20人きっちり入っている教室」はいくつでしょうか？</strong><br />
            「14人の教室が1つ」「空の教室が1つ」あるので、20人入っているのは残りの <strong><TextWithMath text="$(x - 2)$" /> 室</strong> です。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '条件Bを使って参加者の総数を表した式として、正しいものはどれ？',
        options: ['20(x - 2) + 14', '20x - 14', '20(x - 1) + 14'],
        correctAnswer: '20(x - 2) + 14',
        explanation: (
          <div>
            <p>見事です！</p>
            <MathText block math="20(x - 2) + 14 = 20x - 40 + 14 = 20x - 26" />
            <p>このように展開して整理できます。</p>
          </div>
        )
      }
    },
    {
      id: 4,
      title: '方程式を立てて解く',
      content: (
        <div className="space-y-4">
          <p>
            ステップ2とステップ3で、同じ「参加者の人数」を2通りの式で表すことができました。
            これらをイコールで結んで方程式を解きます。
          </p>
          <div className="text-center my-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <MathText block math="15x + 34 = 20x - 26" />
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'この方程式を解くと、x（教室の数）はいくつになる？',
        options: ['x = 10', 'x = 12', 'x = 14'],
        correctAnswer: 'x = 12',
        explanation: (
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg transition-colors">
            <MathText block math="15x - 20x = -26 - 34" />
            <MathText block math="-5x = -60" />
            <MathText block math="x = 12" />
            <p>大正解！教室は12室です。</p>
          </div>
        )
      }
    },
    {
      id: 5,
      title: '答えの確認（検算）',
      content: (
        <div className="space-y-4">
          <p>
            方程式を解いて、教室の数が <strong>12室</strong> だと分かりました。
            最後に、実際の人数を計算して確かめてみましょう。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '教室が12室のとき、参加者の人数は何人になりますか？',
        options: ['180人', '200人', '214人'],
        correctAnswer: '214人',
        explanation: (
          <ul className="list-disc list-inside space-y-2 mt-4 text-left">
            <li><strong>条件A：</strong> <TextWithMath text="$15 \times 12 + 34 = 180 + 34 = 214$" /> 人</li>
            <li><strong>条件B：</strong> 10室に20人（200人）＋ 1室に14人 ＋ 1室空っぽ ＝ 214人</li>
            <p className="mt-4 font-bold text-lg text-emerald-700 dark:text-emerald-400">人数が一致しました！これで完璧です。</p>
          </ul>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="R5 大問2：教室と参加人数の過不足（方程式）"
      knowledge={['1次方程式の立式', '過不足の問題', '式の展開と整理']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文】</h3>
          <p>
            ある高校では、中学生を対象に一日体験学習を各教室で実施することにした。使用できる教室の数と参加者の人数は決まっている。
          </p>
          <p>
            1つの教室に入る参加者を15人ずつにすると、34人が教室に入れない。<br />
            また、1つの教室に入る参加者を20人ずつにすると、14人の教室が1つだけでき、さらに使用しない教室が1つできる。
          </p>
          <p>
            このとき、使用できる教室の数を <TextWithMath text="$x$" /> として方程式をつくり、使用できる教室の数を求めなさい。ただし、途中の計算も書くこと。
          </p>
        </div>
      }
      steps={steps}
    />
  );
}
