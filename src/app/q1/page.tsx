'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';

export default function Q1Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '第1問：正負の数の計算',
      content: <p>一番基本となる計算問題です。マイナス同士のかけ算はどうなるでしょうか。</p>,
      quiz: {
        type: 'choice',
        question: '(-4) × (-3) を計算しなさい。',
        options: ['-12', '12', '-7', '7'],
        correctAnswer: '12',
        explanation: <p>正解！マイナスとマイナスをかけるとプラスになります。<TextWithMath text="$(-4) \times (-3) = 12$" /> です。</p>
      }
    },
    {
      id: 2,
      title: '第2問：平方根（ルート）の計算',
      content: <p>ルートの中身を簡単にしてから足し算を行います。</p>,
      quiz: {
        type: 'choice',
        question: '√28 + √7 を計算しなさい。',
        options: ['√35', '3√7', '4√7', '14'],
        correctAnswer: '3√7',
        explanation: (
          <div>
            <p>素晴らしい！<TextWithMath text="$\sqrt{28}$" /> は <TextWithMath text="$\sqrt{4 \times 7} = 2\sqrt{7}$" /> ですね。</p>
            <MathText block math="2\sqrt{7} + \sqrt{7} = 3\sqrt{7}" />
          </div>
        )
      }
    },
    {
      id: 3,
      title: '第3問：絶対値',
      content: <p>「絶対値」とは、数直線上で0からの距離のことです。絶対値が3「より小さい」ことに注意してください。</p>,
      quiz: {
        type: 'choice',
        question: '絶対値が3より小さい整数は全部で何個か。',
        options: ['3個', '5個', '6個', '7個'],
        correctAnswer: '5個',
        explanation: (
          <p>
            正解！絶対値が3より小さい（3は含まない）整数は、<strong>-2, -1, 0, 1, 2</strong> の <strong>5個</strong> です。（0を忘れないように注意！）
          </p>
        )
      }
    },
    {
      id: 4,
      title: '第4問：2次方程式',
      content: <p>因数分解を使って解くのが一番早そうです。</p>,
      quiz: {
        type: 'choice',
        question: '2次方程式 x² + 5x + 6 = 0 を解きなさい。',
        options: ['x = 2, 3', 'x = -2, -3', 'x = -1, -6'],
        correctAnswer: 'x = -2, -3',
        explanation: (
          <div className="space-y-2">
            <p>大正解！足して5、かけて6になる2つの数は「2」と「3」です。</p>
            <MathText block math="(x + 2)(x + 3) = 0" />
            <MathText block math="x = -2, -3" />
          </div>
        )
      }
    },
    {
      id: 5,
      title: '第5問：反比例のグラフ',
      content: <p>反比例の式 <TextWithMath text="$y = a/x$" /> に、通る点の座標を代入して <TextWithMath text="$a$" /> を求めます。</p>,
      quiz: {
        type: 'choice',
        question: '関数 y = a/x のグラフが点(2, -3)を通るとき、aの値を求めなさい。',
        options: ['a = -6', 'a = -1', 'a = 6'],
        correctAnswer: 'a = -6',
        explanation: (
          <p>
            正解！ <TextWithMath text="$y = \frac{a}{x}$" /> は <TextWithMath text="$a = xy$" /> と変形できます。<TextWithMath text="$a = 2 \times (-3) = -6$" /> です。
          </p>
        )
      }
    },
    {
      id: 6,
      title: '第6問：おうぎ形の弧の長さ',
      content: <p>半径2cmの「円の周の長さ」を基準にして、おうぎ形がその何倍にあたるかを考えます。</p>,
      quiz: {
        type: 'choice',
        question: '中心角が40°のおうぎ形の弧の長さは、同じ半径の円の周の長さの何倍ですか？',
        options: ['1/6 倍', '1/9 倍', '4/9 倍'],
        correctAnswer: '1/9 倍',
        explanation: (
          <p>
            見事です！円1周は360°なので、中心角が40°なら <TextWithMath text="$40 \div 360 = \frac{1}{9}$" /> となり、弧の長さも <strong>1/9倍</strong> になります。
          </p>
        )
      }
    },
    {
      id: 7,
      title: '第7問：球の体積',
      content: <p>球の体積の公式 <TextWithMath text="$V = \frac{4}{3}\pi r^3$" /> （身の上に心配あるさ）を思い出しましょう。</p>,
      quiz: {
        type: 'choice',
        question: '半径が6cmの球の体積を求めなさい。（円周率はπとする）',
        options: ['36π cm³', '144π cm³', '288π cm³'],
        correctAnswer: '288π cm³',
        explanation: (
          <div className="space-y-2">
            <p>正解です！公式に <TextWithMath text="$r = 6$" /> を代入します。</p>
            <MathText block math="V = \frac{4}{3} \times \pi \times 6^3 = \frac{4}{3} \times \pi \times 216 = 288\pi" />
          </div>
        )
      }
    },
    {
      id: 8,
      title: '第8問：度数分布表と相対度数',
      content: <p>
        【データ】全体20人。<br/>
        40〜55(1人), 55〜70(2人), 70〜85(6人), 85〜100(7人), 100〜115(4人)<br/>
        相対度数は「その階級の度数 ÷ 全体の度数」で計算します。
      </p>,
      quiz: {
        type: 'choice',
        question: '度数が最も多い階級の相対度数を求めなさい。',
        options: ['0.30', '0.35', '0.40'],
        correctAnswer: '0.35',
        explanation: (
          <p>
            完璧です！度数が最も多いのは「85〜100」の階級で、人数は <strong>7人</strong> です。<br />
            相対度数は <TextWithMath text="$7 \div 20 = 0.35$" /> になります。
          </p>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="R6 大問1：基本の小問集合（全8問）"
      knowledge={['正負の数', '平方根', '絶対値', '2次方程式', '反比例', 'おうぎ形の弧の長さ', '球の体積', '相対度数']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文】</h3>
          <p>次の1から8までの問いに答えなさい。</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li><TextWithMath text="$(-4) \times (-3)$" /> を計算しなさい。</li>
            <li><TextWithMath text="$\sqrt{28} + \sqrt{7}$" /> を計算しなさい。</li>
            <li>絶対値が3より小さい整数は全部で何個か。</li>
            <li>2次方程式 <TextWithMath text="$x^2 + 5x + 6 = 0$" /> を解きなさい。</li>
            <li>関数 <TextWithMath text="$y = a/x$" /> のグラフが点(2, -3)を通るとき、aの値を求めなさい。</li>
            <li>中心角が40°のおうぎ形の弧の長さは、同じ半径の円の周の長さの何倍か求めなさい。</li>
            <li>半径が6cmの球の体積を求めなさい。</li>
            <li>生徒20人の記録の度数分布表がある。度数が最も多い階級の相対度数を求めなさい。</li>
          </ol>
        </div>
      }
      steps={steps}
    />
  );
}
