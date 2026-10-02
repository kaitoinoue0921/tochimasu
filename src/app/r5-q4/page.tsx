'use client';

import React from 'react';
import { StepLayout, Step } from '@/components/StepLayout';
import { TextWithMath } from '@/components/MathText';

export default function R5Q4Page() {
  const steps: Step[] = [
    {
      id: 1,
      title: '箱ひげ図の見方をおさらい',
      content: (
        <div className="space-y-4">
          <p>
            数直線の上に描かれた「箱ひげ図」は、データの分布を5つの値で表したものです。<br />
            （最小値、第1四分位数、中央値、第3四分位数、最大値）
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '箱ひげ図の「箱の左端」が表している値はどれでしょう？',
        options: ['最小値', '第1四分位数', '中央値'],
        correctAnswer: '第1四分位数',
        explanation: (
          <ul className="list-disc list-inside space-y-2 mt-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <li><strong>左のひげの端</strong>：最小値</li>
            <li><strong>箱の左端</strong>：第1四分位数（約25%の位置）</li>
            <li><strong>箱の中の線</strong>：中央値（第2四分位数、50%の位置）</li>
            <li><strong>箱の右端</strong>：第3四分位数（約75%の位置）</li>
            <li><strong>右のひげの端</strong>：最大値</li>
          </ul>
        )
      }
    },
    {
      id: 2,
      title: '正しい選択肢を読み取る（アとイ）',
      content: (
        <div className="space-y-4">
          <p>それぞれの選択肢をグラフから検証してみましょう。</p>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <p><strong>ア：</strong>中央値は、1回目よりも2回目の方が大きい。</p>
            <p><strong>イ：</strong>最大値は、1回目よりも2回目の方が小さい。</p>
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'アとイの文章のうち、正しいのはどちら？',
        options: ['アだけ正しい', 'イだけ正しい', '両方正しい', '両方間違っている'],
        correctAnswer: 'アだけ正しい',
        explanation: (
          <div className="space-y-2 mt-2">
            <p className="text-emerald-700 dark:text-emerald-400"><strong>アは正しい（◯）：</strong> 1回目の中央値は11点、2回目の中央値は13点です。</p>
            <p className="text-red-600 dark:text-red-400"><strong>イは間違い（✕）：</strong> どちらも最大値は18点で同じです。</p>
          </div>
        )
      }
    },
    {
      id: 3,
      title: '正しい選択肢を読み取る（ウとエ）',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <p><strong>ウ：</strong>範囲は、1回目よりも2回目の方が大きい。</p>
            <p><strong>エ：</strong>四分位範囲は、1回目よりも2回目の方が小さい。</p>
          </div>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: 'ウとエの文章のうち、正しいのはどちら？',
        options: ['ウだけ正しい', 'エだけ正しい', '両方正しい', '両方間違っている'],
        correctAnswer: 'エだけ正しい',
        explanation: (
          <div className="space-y-2 mt-2">
            <p className="text-red-600 dark:text-red-400"><strong>ウは間違い（✕）：</strong> 範囲は「最大値 − 最小値」。1回目は <TextWithMath text="$18-4=14$" />、2回目は <TextWithMath text="$18-5=13$" /> なので2回目の方が小さいです。</p>
            <p className="text-emerald-700 dark:text-emerald-400"><strong>エは正しい（◯）：</strong> 四分位範囲は「箱の長さ」。1回目は <TextWithMath text="$14-8=6$" />。2回目は <TextWithMath text="$15-10=5$" /> なので2回目の方が小さいです。</p>
            <p>よって、問題(1)の答えは <strong>ア</strong> と <strong>エ</strong> になります。</p>
          </div>
        )
      }
    },
    {
      id: 4,
      title: '「8点を取った人がいるとは限らない」理由',
      content: (
        <div className="space-y-4">
          <p>
            問題の後半戦です。1回目の「第1四分位数」は8点ですが、「8点を取った生徒」が必ずいるわけではない理由を説明します。
          </p>
          <p className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800 transition-colors">
            生徒は全部で <strong>100人</strong> います。<br />
            第1四分位数は、データを小さい順に並べたときの下位50人の中央値です。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '100人のデータにおいて、第1四分位数（下から25%の位置）は、何番目と何番目の人の平均値になりますか？',
        options: ['25番目だけ', '25番目と26番目の平均', '50番目と51番目の平均'],
        correctAnswer: '25番目と26番目の平均',
        explanation: (
          <p>正解です！偶数個のデータの中央値は、真ん中の2つの値の平均になります。</p>
        )
      }
    },
    {
      id: 5,
      title: '具体的な点数を当てはめて完成！',
      content: (
        <div className="space-y-4">
          <p>
            もし25番目の人が「7点」、26番目の人が「9点」だった場合、
            平均値は <TextWithMath text="$(7 + 9) \div 2 = 8$" /> となり、第1四分位数は8点になります。
          </p>
          <p>
            しかし、この2人の中に「8点」を取った人はいませんし、他の人が8点を取っている保証もありません。<br />
            箱ひげ図では「平均」が四分位数として表示されることがあるため、実際の点数とは限らないのです。
          </p>
        </div>
      ),
      quiz: {
        type: 'choice',
        question: '問題の指定に合わせて、空欄に入る適切な記述はどれ？',
        options: [
          '25番目の生徒の得点が7点で、26番目の生徒の得点が9点である',
          '全員の得点が奇数である',
          '8点を取った生徒が休んでいた'
        ],
        correctAnswer: '25番目の生徒の得点が7点で、26番目の生徒の得点が9点である',
        explanation: (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors">
            <p className="font-bold text-emerald-800 dark:text-emerald-300">
              【完成した解答】<br />
              （点数を小さい順に並べたときに、）<br />
              「25番目の生徒の得点が7点で、26番目の生徒の得点が9点である」<br />
              （場合も、第1四分位数が8点となるからである。）
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">※「6点と10点」など、足して16になる他の組み合わせでも正解になります。</p>
          </div>
        )
      }
    }
  ];

  return (
    <StepLayout
      title="R5 大問4：箱ひげ図とデータの読み取り（数直線）"
      knowledge={['箱ひげ図の読み取り', '四分位数（第1・第2・第3）', '範囲と四分位範囲', '中央値の考え方']}
      questionText={
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文（抜粋）】</h3>
          <p>ある中学校の3年生100人を対象に20点満点の数学のテストを2回実施し、1回目と2回目の得点のデータの分布のようすをそれぞれ箱ひげ図にまとめたものである。</p>
          
          <div className="bg-slate-100 dark:bg-slate-800 p-4 border border-slate-300 dark:border-slate-600 text-center text-slate-500 my-4 text-xs">
            [ ここに1回目と2回目の箱ひげ図のグラフ（数直線0〜20）が描かれています ]<br />
            1回目：最小4, 第1四分位8, 中央値11, 第3四分位14, 最大18<br />
            2回目：最小5, 第1四分位10, 中央値13, 第3四分位15, 最大18
          </div>

          <p className="font-bold mt-4">(1) 箱ひげ図から読み取れることとして正しいことを述べているものを、次のア、イ、ウ、エの中から2つ選び、記号で答えなさい。</p>
          <ul className="list-none pl-4 space-y-1">
            <li>ア　中央値は、1回目よりも2回目の方が大きい。</li>
            <li>イ　最大値は、1回目よりも2回目の方が小さい。</li>
            <li>ウ　範囲は、1回目よりも2回目の方が大きい。</li>
            <li>エ　四分位範囲は、1回目よりも2回目の方が小さい。</li>
          </ul>

          <p className="font-bold mt-6">(2) 次の文章は、「1回目のテストで8点を取った生徒がいる」ことが正しいとは限らないことを説明したものである。[　　] に当てはまる文を、特定の2人の生徒に着目して書きなさい。</p>
          <div className="border border-slate-400 p-4 mt-2 bg-slate-50 dark:bg-slate-800">
            箱ひげ図から、1回目の第1四分位数が8点であることがわかるが、8点を取った生徒がいない場合も考えられる。例えば、テストの得点を小さい順に並べたときに、<br /><br />
            [　　　　　　　　　　　　　　　　　　　　　　　　] の場合も、<br /><br />
            第1四分位数が8点となるからである。
          </div>
        </div>
      }
      steps={steps}
    />
  );
}
