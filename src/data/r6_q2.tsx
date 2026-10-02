import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q2Data: MajorQuestionData = {
  id: "q2",
  title: "令和6年 大問2：近似値と連立方程式",
  subs: [
    {
      id: "1",
      title: "1. 近似値と真の値の範囲",
      knowledge: ["近似値と有効数字", "四捨五入の範囲"],
      originalText: (
        <p>
          小数第1位を四捨五入した近似値が表示されるはかりがある。このはかりを用いて、いちご1個の重さを測定したところ、29gと表示された。このときの真の値を <TextWithMath text="$a$" /> gとしたとき、<TextWithMath text="$a$" /> の範囲を不等号を用いて表しなさい。
        </p>
      ),
      steps: [
        {
          id: 1, title: '①「小数第1位を四捨五入」の意味',
          content: (
            <div className="space-y-4">
              <p>今回は「小数第1位」の数字を見て、切り捨てるか切り上げるかを判断します。</p>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-bold">四捨五入の基本</p>
                <ul className="list-disc list-inside">
                  <li>0, 1, 2, 3, 4 なら「切り捨て」</li>
                  <li>5, 6, 7, 8, 9 なら「切り上げ」</li>
                </ul>
              </div>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '次のうち、小数第1位を四捨五入すると「29」になる数はどれ？',
            options: ['28.4', '28.7', '29.6'],
            correctAnswer: '28.7',
            explanation: <p>28.7 は小数第1位が 7 なので切り上げられて 29 になります。28.4 は 28 に、29.6 は 30 になります。</p>
          }
        },
        {
          id: 2, title: '② 切り上げられて29になる最小の数',
          content: <p>28.◯ という数の中で、切り上げられて 29 になる一番小さな数を探します。</p>,
          quiz: {
            type: 'choice',
            question: '小数第1位を四捨五入して29になる一番小さな（下限となる）数はどれ？',
            options: ['28.1', '28.4', '28.5'],
            correctAnswer: '28.5',
            explanation: <p>小数第1位が 5 以上のとき切り上げられます。したがって一番小さな数は 28.5 です。</p>
          }
        },
        {
          id: 3, title: '③ 切り捨てられて29になる最大の数（手前）',
          content: <p>次に、29.◯ という数の中で、切り捨てられて 29 のままでいられるギリギリの数を考えます。</p>,
          quiz: {
            type: 'choice',
            question: '小数第1位を四捨五入して29になる最大の数は「29.◯」のどこまで？',
            options: ['29.4', '29.5', '29.9'],
            correctAnswer: '29.4',
            explanation: <p>29.4 までは切り捨てられて 29 になります。29.5 になった瞬間、切り上げられて 30 になってしまいます。</p>
          }
        },
        {
          id: 4, title: '④ 不等号の選び方（以上と未満）',
          content: (
            <div className="space-y-4">
              <p>範囲を表すとき、「＝（イコール）」を含むかどうかが重要です。</p>
              <ul className="list-disc list-inside">
                <li><TextWithMath text="$\leqq$" /> は「〜以上・以下」（その数を含む）</li>
                <li><TextWithMath text="$<$" /> は「〜より大きい・未満」（その数を含まない）</li>
              </ul>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「29.4999...」までOKだけど「29.5」はダメ、という状態を不等号で正しく表すには？',
            options: ['a ≦ 29.4', 'a < 29.5', 'a ≦ 29.5'],
            correctAnswer: 'a < 29.5',
            explanation: <p>29.5 は含まないので、イコールをつけずに「a &lt; 29.5」と書くのが正解です。</p>
          }
        },
        {
          id: 5, title: '⑤ 範囲を不等式で表す',
          content: <p>これまでの情報を合わせて、真の値 <TextWithMath text="$a$" /> の範囲を完成させましょう。</p>,
          quiz: {
            type: 'choice',
            question: 'a の範囲を正しく表した式はどれ？',
            options: ['28.4 < a ≦ 29.4', '28.5 ≦ a ≦ 29.4', '28.5 ≦ a < 29.5'],
            correctAnswer: '28.5 ≦ a < 29.5',
            explanation: <p>28.5 は含むので「≦」、29.5 は含まないので「&lt;」を使い、<strong><TextWithMath text="$28.5 \leqq a < 29.5$" /></strong> となります。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 走る距離と歩く距離の連立方程式",
      knowledge: ["速さ・時間・距離", "連立方程式の立式と解法"],
      originalText: (
        <div className="space-y-4">
          <p>
            陸上競技場に1周400mのトラックがある。つばささんは、スタート地点からある地点までは、分速300mで走り、その後分速60mで歩き、ちょうど2分でトラックを1周するトレーニングを計画している。<br />
            このとき、走る距離を <TextWithMath text="$x$" /> m、歩く距離を <TextWithMath text="$y$" /> mとして連立方程式をつくり、走る距離と歩く距離をそれぞれ求めなさい。ただし、途中の計算も書くこと。
          </p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 何をx, yとするか確認する',
          content: (
            <p>連立方程式の文章題の基本は、求めたいものを <TextWithMath text="$x, y$" /> にすることです。問題文の指定を確認しましょう。</p>
          ),
          quiz: {
            type: 'choice',
            question: 'この問題では、何と何を x, y と置いていますか？',
            options: [
              '走った時間と、歩いた時間',
              '走った速さと、歩いた速さ',
              '走る距離と、歩く距離'
            ],
            correctAnswer: '走る距離と、歩く距離',
            explanation: <p>問題文に「走る距離を x m、歩く距離を y mとして」と書かれています。</p>
          }
        },
        {
          id: 2, title: '② 距離の関係から1つ目の方程式を作る',
          content: (
            <div className="space-y-4">
              <p>まずはわかりやすい「距離の合計」に注目して式を立てます。</p>
              <ul className="list-disc list-inside">
                <li>走った距離：<TextWithMath text="$x$" /> m</li>
                <li>歩いた距離：<TextWithMath text="$y$" /> m</li>
                <li>合計の距離：トラック1周分（400m）</li>
              </ul>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '距離についての正しい方程式はどれ？',
            options: ['x - y = 400', 'x + y = 400', '400x + 400y = 1'],
            correctAnswer: 'x + y = 400',
            explanation: <p>走った距離と歩いた距離を合わせると1周分になるので、<TextWithMath text="$x + y = 400$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 時間を求める公式の確認',
          content: (
            <div className="space-y-4">
              <p>次は「時間」についての式を作りますが、その前に「み・は・じ（道のり・速さ・時間）」の公式を思い出しましょう。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「時間」を求める正しい計算式はどれ？',
            options: ['道のり × 速さ', '速さ ÷ 道のり', '道のり ÷ 速さ'],
            correctAnswer: '道のり ÷ 速さ',
            explanation: <p>時間は「道のり（距離） ÷ 速さ」で求められます。分数で書くなら <TextWithMath text="$\frac{\text{道のり}}{\text{速さ}}$" /> です。</p>
          }
        },
        {
          id: 4, title: '④ それぞれの時間を式で表す',
          content: (
            <p>先ほどの公式を使って、「走った時間」と「歩いた時間」をそれぞれ <TextWithMath text="$x, y$" /> を使って表してみましょう。</p>
          ),
          quiz: {
            type: 'choice',
            question: '分速300mで x(m) 走ったときの「かかった時間」を表す式は？',
            options: ['300x', 'x/300', '300/x'],
            correctAnswer: 'x/300',
            explanation: <p>道のり <TextWithMath text="$x$" /> ÷ 速さ <TextWithMath text="$300$" /> なので、<TextWithMath text="$\frac{x}{300}$" /> 分かかったことになります。歩いた時間も同様に <TextWithMath text="$\frac{y}{60}$" /> 分です。</p>
          }
        },
        {
          id: 5, title: '⑤ 時間の関係から2つ目の方程式を作る',
          content: (
            <p>走った時間と歩いた時間の合計が「ちょうど2分」になることから、2つ目の方程式を立てます。</p>
          ),
          quiz: {
            type: 'choice',
            question: '時間についての正しい方程式はどれ？',
            options: ['x/300 + y/60 = 2', '300x + 60y = 2', 'x/60 + y/300 = 2'],
            correctAnswer: 'x/300 + y/60 = 2',
            explanation: <p>走った時間 <TextWithMath text="$\frac{x}{300}$" /> と、歩いた時間 <TextWithMath text="$\frac{y}{60}$" /> を足すと2分になるので、<TextWithMath text="$\frac{x}{300} + \frac{y}{60} = 2$" /> となります。</p>
          }
        },
        {
          id: 6, title: '⑥ 分数を含む方程式を解きやすくする',
          content: (
            <div className="space-y-4">
              <p>2つの式が揃いました。</p>
              <MathText block math="\begin{cases} x + y = 400 \dots ① \\ \frac{x}{300} + \frac{y}{60} = 2 \dots ② \end{cases}" />
              <p>②の式に分母が含まれていて計算しにくいので、両辺に同じ数をかけて分母を消しましょう（分母の最小公倍数をかけます）。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '②の式の両辺に「300」をかけると、どんな式になる？',
            options: ['x + 5y = 2', 'x + 5y = 600', '3x + 6y = 600'],
            correctAnswer: 'x + 5y = 600',
            explanation: <p><TextWithMath text="$\frac{x}{300} \times 300 = x$" />、<TextWithMath text="$\frac{y}{60} \times 300 = 5y$" />、<TextWithMath text="$2 \times 300 = 600$" /> なので、<TextWithMath text="$x + 5y = 600$" /> になります。</p>
          }
        },
        {
          id: 7, title: '⑦ 連立方程式の加減法による計算',
          content: (
            <div className="space-y-4">
              <p>①の式と、新しく作った式を引き算（加減法）して <TextWithMath text="$x$" /> を消去します。</p>
              <div className="text-center font-mono">
                <p>  x + 5y = 600</p>
                <p>-)x +  y = 400</p>
                <p>----------------</p>
              </div>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '引き算をして y を求めると、いくつになる？',
            options: ['y = 50', 'y = 100', 'y = 200'],
            correctAnswer: 'y = 50',
            explanation: <p>4y = 200 となるので、両辺を4で割って y = 50 になります。</p>
          }
        },
        {
          id: 8, title: '⑧ 走った距離 x を求める',
          content: (
            <p>歩いた距離 <TextWithMath text="$y$" /> が 50m だと分かりました。最後に、①の式 <TextWithMath text="$x + y = 400$" /> を使って <TextWithMath text="$x$" /> を求めましょう。</p>
          ),
          quiz: {
            type: 'choice',
            question: '走った距離 x は何mになりますか？',
            options: ['250m', '300m', '350m'],
            correctAnswer: '350m',
            explanation: <p><TextWithMath text="$x + 50 = 400$" /> より、<TextWithMath text="$x = 350$" /> となります。これで走る距離 350m、歩く距離 50m が求まりました！</p>
          }
        }
      ]
    }
  ]
};
