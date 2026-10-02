'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function Q6Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '問題のルールを整理しよう',
      content: (
        <div className="space-y-4">
          <p>まずは「新幹線」と「タクシー」の定員ルールを確認します。</p>
          <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <li><strong>新幹線</strong>：1列に<strong>5人</strong>まで座れる</li>
            <li><strong>タクシー</strong>：1台に<strong>4人</strong>まで乗れる</li>
          </ul>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '例えば生徒が41人の場合、新幹線は何列必要でしょうか？',
        options: ['8列', '9列', '10列'],
        correctAnswer: '9列',
        explanation: (
          <p>
            正解です！<TextWithMath text="$41 \div 5 = 8$" /> 余り <TextWithMath text="$1$" /> なので、8列では1人座れません。よって<strong>9列</strong>必要になりますね。
          </p>
        )
      }
    },
    {
      id: 2,
      title: '文字 n を使って生徒数を表す（新幹線）',
      content: (
        <div className="space-y-4">
          <p>
            必要な新幹線の列数を <TextWithMath text="$n$" /> とします。
            先生のセリフにあるように、列数が9列のときの人数は <TextWithMath text="$5 \times 8 + 1$" /> から <TextWithMath text="$5 \times 8 + 5$" /> の5通りです。
          </p>
          <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors">
            9列のときに「<TextWithMath text="$8$" />」をかけていることに注目します。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '列数が n のとき、生徒の参加人数はどのように表せるでしょうか？（a を1から5の自然数とする）',
        options: ['5n + a', '5(n - 1) + a', '5(n + 1) + a'],
        correctAnswer: '5(n - 1) + a',
        explanation: (
          <p>
            素晴らしい！<TextWithMath text="$n$" /> 列のときは、その1つ手前である <TextWithMath text="$(n-1)$" /> 列までは完全に5人ずつ埋まっています。これが空欄 <strong>①</strong> の答えです。
          </p>
        )
      }
    },
    {
      id: 3,
      title: 'タクシーの台数から生徒数を表す',
      content: (
        <div className="space-y-4">
          <p>
            今度はタクシーについて考えます。問題文には「タクシーの台数の値が、列数の値より10大きい」とあります。
            つまり、タクシーの台数は <strong><TextWithMath text="$n+10$" /></strong> 台です。
          </p>
          <p>
            タクシーは1台4人乗りなので、最後の1台以外（つまり <TextWithMath text="$(n+10-1)$" /> 台）は4人乗っています。
            <TextWithMath text="$b$" /> を1から4の自然数とすると、生徒数は次のように表せます。
          </p>
          <div className="text-center my-4">
            <MathText block math="4(n+10-1) + b = 4(n+9) + b = 4n + 36 + b" />
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'これで新幹線とタクシー、2つの式ができました。次に何をすべきでしょうか？',
        options: ['2つの式を足し合わせる', '2つの式をイコールで結ぶ', 'どちらかの式に n=10 を代入する'],
        correctAnswer: '2つの式をイコールで結ぶ',
        explanation: (
          <p>その通りです！どちらも「生徒の数」を表しているので、等式を作ることができます。</p>
        )
      }
    },
    {
      id: 4,
      title: '2つの式をイコールで結ぶ',
      content: (
        <div className="space-y-4">
          <p>
            生徒の数は同じなので、ステップ2とステップ3で作った式をイコールで結び、列数 <TextWithMath text="$n$" /> について解きます。
          </p>
          <div className="text-center my-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg transition-colors">
            <MathText block math="5(n-1) + a = 4n + 36 + b" />
            <MathText block math="5n - 5 + a = 4n + 36 + b" />
            <MathText block math="5n - 4n = 36 + 5 + b - a" />
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '計算を進めると、n はどのように表せますか？',
        options: ['n = 41 + b - a', 'n = 31 + a - b', 'n = 41 + a + b'],
        correctAnswer: 'n = 41 + b - a',
        explanation: (
          <p>
            正解です！これが空欄 <strong>②</strong> の答えです。列数 <TextWithMath text="$n$" /> が <TextWithMath text="$a$" /> と <TextWithMath text="$b$" /> の式で表せました。
          </p>
        )
      }
    },
    {
      id: 5,
      title: '最も少ない生徒数を求める',
      content: (
        <div className="space-y-4">
          <p>
            最後に「最も少ない生徒の参加人数」を求めます。
            生徒数が最も少なくなるのは、列数 <TextWithMath text="$n$" /> が最も小さくなるときです。
          </p>
          <p>
            <TextWithMath text="$n = 41 + b - a$" /> において、<TextWithMath text="$n$" /> を最小にするには、引く数である <TextWithMath text="$a$" />（1〜5） を最大にし、足す数である <TextWithMath text="$b$" />（1〜4） を最小にすればよいですね。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'aを最大（5）、bを最小（1）にしたとき、最も少ない生徒数は何人になりますか？',
        options: ['180人', '185人', '190人'],
        correctAnswer: '185人',
        explanation: (
          <div className="space-y-2 mt-4 text-left">
            <p><TextWithMath text="$n = 41 + 1 - 5 = 37$" />（列）</p>
            <p>生徒数を求める式 <TextWithMath text="$5(n-1) + a$" /> に <TextWithMath text="$n=37, a=5$" /> を代入すると…</p>
            <MathText block math="5 \times 36 + 5 = 180 + 5 = 185" />
            <p className="font-bold text-lg text-emerald-700 dark:text-emerald-400">大正解！空欄③は「185人」です。</p>
          </div>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="大問6：新幹線とタクシー（実生活への応用）"
      knowledge={['文字式の利用', '規則性の発見', '方程式の立式と解法', '最大値と最小値の考え方']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文（抜粋）】</h3>
          <p>
            ある市のA中学校とB中学校は修学旅行でそれぞれX市を訪問する。各中学校とも、横一列に生徒が5人ずつ座ることができる新幹線でX市へ向かい、到着後、1台に生徒が4人ずつ乗ることができるタクシーで班別行動を行う。
          </p>
          <p className="pl-4 border-l-4 border-slate-300 dark:border-slate-600 my-4 text-slate-600 dark:text-slate-400">
            <strong>生徒</strong>「必要な新幹線の座席の列数を <TextWithMath text="$n$" /> とすると、生徒の参加人数は（ <strong>①</strong> ）<TextWithMath text="$+ a$" /> と表せます。ただし、<TextWithMath text="$n$" /> は自然数、<TextWithMath text="$a$" /> は1から5までのいずれかの自然数です。」<br /><br />
            <strong>先生</strong>「そうですね。次に、必要なタクシーの台数を <TextWithMath text="$n$" /> を用いて表してみましょう。」<br /><br />
            <strong>生徒</strong>「台数の値は、列数の値より10大きいから、<TextWithMath text="$n + 10$" /> と表せます。」<br /><br />
            <strong>先生</strong>「では、タクシーの台数から、生徒の参加人数を <TextWithMath text="$n$" /> と1から4までの自然数 <TextWithMath text="$b$" /> を用いて表すこともできますね。これらの2つの式を使うと、考えられる生徒の参加人数のうち、最も少ない生徒の参加人数は何人ですか。」<br /><br />
            <strong>生徒</strong>「必要な新幹線の座席の列数は <TextWithMath text="$n =$" /> （ <strong>②</strong> ）と表すことができるので、<TextWithMath text="$a$" /> と <TextWithMath text="$b$" /> の値を考えると、最も少ない生徒の参加人数は（ <strong>③</strong> ）人です。」
          </p>
          <p>次の①、②、③に当てはまる式や数をそれぞれ答えなさい。</p>
        </div>
      }
      steps={steps}
    />
  );
}
