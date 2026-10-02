'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function Q3Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '問題の意味を具体例で確認しよう',
      content: (
        <div className="space-y-4">
          <p>
            「連続する3つの自然数」について、以下の計算をする問題です。
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg font-medium text-center transition-colors">
            (最小の数の2乗 ＋ 最大の数の2乗) − (中央の数の2乗の2倍)
          </div>
          <p>
            どんな3つの連続する自然数でも、計算結果が「ある決まった数」になることを文字を使って証明します。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '例えば「3, 4, 5」の場合、上記の計算をすると結果はいくつになる？',
        options: ['1', '2', '3'],
        correctAnswer: '2',
        explanation: (
          <p>
            正解です！<br />
            <TextWithMath text="$(3^2 + 5^2) - 2 \times 4^2 = (9 + 25) - 32 = 34 - 32 = 2$" /> となりますね。
          </p>
        )
      }
    },
    {
      id: 2,
      title: '文字を使って3つの数を表す',
      content: (
        <div className="space-y-4">
          <p>
            文字を使った証明の第一歩は、対象となる数を文字で表すことです。
            問題文の書き出しに沿って、最も小さい自然数を <TextWithMath text="$n$" /> とします。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '最小の数を n としたとき、連続する3つの自然数はどう表せる？',
        options: ['n, n+2, n+4', 'n, 2n, 3n', 'n, n+1, n+2'],
        correctAnswer: 'n, n+1, n+2',
        explanation: (
          <p>
            素晴らしい！連続する自然数は「1ずつ増える数」なので、<TextWithMath text="$n, n+1, n+2$" /> と表せます。
          </p>
        )
      }
    },
    {
      id: 3,
      title: '問題文の通りに式を立てる',
      content: (
        <div className="space-y-4">
          <p>
            ステップ2で表した文字式を使って、言われた通りの式を立てます。
          </p>
          <p className="font-medium">
            「最小の数の2乗と最大の数の2乗の和から、中央の数の2乗の2倍をひく」
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '問題文の通りに立てた式として、正しいものはどれ？',
        options: [
          '{n² + (n+2)²} - 2(n+1)²',
          '(n + n+2)² - 2(n+1)²',
          '{n² + (n+1)²} - 2(n+2)²'
        ],
        correctAnswer: '{n² + (n+2)²} - 2(n+1)²',
        explanation: (
          <p>
            大正解！最小 <TextWithMath text="$n$" /> の2乗と、最大 <TextWithMath text="$(n+2)$" /> の2乗の和から、中央 <TextWithMath text="$(n+1)$" /> の2乗の2倍を引く式になっています。
          </p>
        )
      }
    },
    {
      id: 4,
      title: '式を展開する（乗法公式）',
      content: (
        <div className="space-y-4">
          <p>
            カッコを展開していきましょう。乗法公式 <TextWithMath text="$(a+b)^2 = a^2 + 2ab + b^2$" /> を使います。
          </p>
          <div className="space-y-2 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <p>前半の展開：</p>
            <MathText block math="n^2 + (n^2 + 4n + 4)" />
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '後半の「-2(n+1)²」を展開するとどうなる？',
        options: ['-2n² - 2n - 1', '-2n² - 4n - 2', '-2n² - 2'],
        correctAnswer: '-2n² - 4n - 2',
        explanation: (
          <p>
            完璧です！ <TextWithMath text="$(n+1)^2 = n^2 + 2n + 1$" /> に、外側の <TextWithMath text="$-2$" /> を全てにかける（分配法則）必要がありますね。
          </p>
        )
      }
    },
    {
      id: 5,
      title: '同類項をまとめる（証明完了！）',
      content: (
        <div className="space-y-4">
          <p>
            ステップ4で展開した式をすべてつなげて、同類項をまとめます。
          </p>
          <div className="text-center my-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800 text-lg transition-colors">
            <MathText block math="n^2 + n^2 + 4n + 4 - 2n^2 - 4n - 2" />
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '同類項をまとめると、最後には何が残る？',
        options: ['2n', '2', '0'],
        correctAnswer: '2',
        explanation: (
          <div className="mt-2 text-left">
            <MathText block math="= (2n^2 - 2n^2) + (4n - 4n) + (4 - 2)" />
            <MathText block math="= 2" />
            <p className="mt-4 font-bold text-emerald-700 dark:text-emerald-400">
              文字 <TextWithMath text="$n$" /> がすべて消えて「2」だけが残りました！これで「つねに2になる」ことの証明が完成です！
            </p>
          </div>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="大問3：連続する自然数の証明"
      knowledge={['連続する数の文字式', '乗法公式と式の展開', '同類項をまとめる', '文字を使った証明']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文】</h3>
          <p>次の先生と生徒の会話文を読んで、下の証明の続きを書きなさい。</p>
          <p className="pl-4 border-l-4 border-slate-300 dark:border-slate-600 my-4 text-slate-600 dark:text-slate-400">
            <strong>先生</strong>「連続する3つの自然数をそれぞれ2乗した数の関係について考えてみましょう。最も小さい数の2乗と最も大きい数の2乗の和から、中央の数の2乗の2倍をひくと、いくつになりますか。例えば3, 4, 5のときはどうでしょう。」<br /><br />
            <strong>生徒</strong>「最も小さい数3の2乗と最も大きい数5の2乗の和 <TextWithMath text="$9 + 25 = 34$" /> から、中央の数4の2乗の2倍である <TextWithMath text="$16 \times 2 = 32$" /> をひくと、2になりました。」<br /><br />
            <strong>先生</strong>「実は、連続する3つの自然数では、この関係がつねに成り立ちます。文字を使って証明してみましょう。」
          </p>
          <div className="border border-slate-400 p-4 mt-4 bg-slate-50 dark:bg-slate-800">
            <p className="font-bold border-b border-slate-400 pb-2 mb-2">（証明）</p>
            <p>
              連続する3つの自然数のうち、最も小さい数を <TextWithMath text="$n$" /> とすると、<br />
              連続する3つの自然数は <TextWithMath text="$n, n+1, n+2$" /> と表される。<br />
              最も小さい数の2乗と最も大きい数の2乗の和から、中央の数の2乗の2倍をひくと、<br />
              （ 　※ ここに続く式と計算を書きなさい 　）
            </p>
          </div>
        </div>
      }
      steps={steps}
    />
  );
}
