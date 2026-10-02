import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q3Data: MajorQuestionData = {
  id: "q3",
  title: "令和6年 大問3：連続する自然数の証明",
  subs: [
    {
      id: "1",
      title: "連続する自然数の証明",
      knowledge: ['連続する数の文字式', '乗法公式と式の展開', '同類項をまとめる', '文字を使った証明'],
      originalText: (
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
      ),
      steps: [
        {
          id: 1,
          title: 'ステップ1：問題の意味を具体例で確認（前半）',
          content: (
            <div className="space-y-4">
              <p>まずは具体的な数字を使って、問題文が言っている計算を体験してみましょう。先生が挙げている例は「3, 4, 5」という連続する3つの自然数です。</p>
              <p>最初に<strong>「最も小さい数の2乗と最も大きい数の2乗の和」</strong>を計算します。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「3, 4, 5」の場合、最も小さい数の2乗と最も大きい数の2乗の和はいくつですか？',
            options: ['34', '16', '32'],
            correctAnswer: '34',
            explanation: <p><TextWithMath text="$3^2 + 5^2 = 9 + 25 = 34$" /> となります。</p>
          }
        },
        {
          id: 2,
          title: 'ステップ2：問題の意味を具体例で確認（後半）',
          content: (
            <div className="space-y-4">
              <p>前半の計算結果は「34」でした。次に、後半の計算である<strong>「中央の数の2乗の2倍」</strong>について考えます。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「3, 4, 5」のうち中央の数の2乗を「2倍」した数はいくつですか？',
            options: ['8', '32', '16'],
            correctAnswer: '32',
            explanation: <p>中央の数は4。その2乗は16。それを2倍するので <TextWithMath text="$16 \times 2 = 32$" /> です。</p>
          }
        },
        {
          id: 3,
          title: 'ステップ3：具体例の引き算をしてみよう',
          content: (
            <div className="space-y-4">
              <p>いよいよ具体例の計算の総仕上げです。問題文には「〜の和から、中央の数の2乗の2倍をひくと」と書かれています。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '先ほど求めた「34」から「32」をひくと、結果はいくつになりますか？',
            options: ['1', '2', '3'],
            correctAnswer: '2',
            explanation: <p><TextWithMath text="$34 - 32 = 2$" /> になりますね。生徒が言っていた通り、計算結果は「2」になりました。</p>
          }
        },
        {
          id: 4,
          title: 'ステップ4：文字を使って数を表す',
          content: (
            <div className="space-y-4">
              <p>この結果が「どんな連続する3つの自然数でも成り立つ」ことを証明するため、文字式を使います。証明文の指定通り、最も小さい数を <TextWithMath text="$n$" /> と置きます。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '最も小さい数を n としたとき、連続する3つの自然数はどう表せますか？',
            options: ['n, 2n, 3n', 'n, n+1, n+2', 'n, n+2, n+4'],
            correctAnswer: 'n, n+1, n+2',
            explanation: <p>連続する自然数は「1ずつ大きくなる数」なので、<TextWithMath text="$n, n+1, n+2$" /> と表せます。この表し方は非常に重要です！</p>
          }
        },
        {
          id: 5,
          title: 'ステップ5：立式（前半部分）',
          content: (
            <div className="space-y-4">
              <p>文字で置いた <TextWithMath text="$n, n+1, n+2$" /> を使って、式を立てていきましょう。まずは<strong>「最も小さい数の2乗と最も大きい数の2乗の和」</strong>です。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'この部分を正しい文字式で表しているのはどれですか？',
            options: ['n² + (n+1)²', 'n² + (n+2)²', '(n + n+2)²'],
            correctAnswer: 'n² + (n+2)²',
            explanation: <p>最小の数 <TextWithMath text="$n$" /> の2乗と、最大の数 <TextWithMath text="$(n+2)$" /> の2乗を足すので、<TextWithMath text="$n^2 + (n+2)^2$" /> となります。</p>
          }
        },
        {
          id: 6,
          title: 'ステップ6：立式（後半部分）',
          content: (
            <div className="space-y-4">
              <p>次に、そこからひくことになる<strong>「中央の数の2乗の2倍」</strong>を式で表します。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「中央の数の2乗の2倍」を正しく表している式はどれですか？',
            options: ['2(n+1)²', '(2n+2)²', '2n² + 1'],
            correctAnswer: '2(n+1)²',
            explanation: <p>中央の数は <TextWithMath text="$(n+1)$" />。その2乗 <TextWithMath text="$(n+1)^2$" /> に2をかけるので、<TextWithMath text="$2(n+1)^2$" /> が正解です。</p>
          }
        },
        {
          id: 7,
          title: 'ステップ7：全体の式を立てて展開しよう（１）',
          content: (
            <div className="space-y-4">
              <p>ステップ5と6で作った式をつなげると、全体の式は以下のようになります。</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                <MathText block math="n^2 + (n+2)^2 - 2(n+1)^2" />
              </div>
              <p>この式を展開していきます。まずは <TextWithMath text="$(n+2)^2$" /> の部分です。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '乗法公式を使って (n+2)² を展開するとどうなりますか？',
            options: ['n² + 4', 'n² + 2n + 4', 'n² + 4n + 4'],
            correctAnswer: 'n² + 4n + 4',
            explanation: <p><TextWithMath text="$(a+b)^2 = a^2 + 2ab + b^2$" /> の公式を使います。 <TextWithMath text="$n^2 + 2 \times 2 \times n + 2^2 = n^2 + 4n + 4$" /> ですね。</p>
          }
        },
        {
          id: 8,
          title: 'ステップ8：全体の式を立てて展開しよう（２）',
          content: (
            <div className="space-y-4">
              <p>次は後ろの部分 <TextWithMath text="$-2(n+1)^2$" /> を展開します。<TextWithMath text="$(n+1)^2$" /> を展開してから、全体に <TextWithMath text="$-2$" /> をかける分配法則に注意しましょう。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '-2(n+1)² を展開すると、正しい結果はどれになりますか？',
            options: ['-2n² - 2', '-2n² - 4n - 2', '-2n² + 2n + 2'],
            correctAnswer: '-2n² - 4n - 2',
            explanation: <p><TextWithMath text="$(n+1)^2 = n^2 + 2n + 1$" />。この全ての項に <TextWithMath text="$-2$" /> をかけるので、<TextWithMath text="$-2n^2 - 4n - 2$" /> となります。</p>
          }
        },
        {
          id: 9,
          title: 'ステップ9：同類項をまとめる',
          content: (
            <div className="space-y-4">
              <p>ここまで展開した式をすべて並べると、次のようになります。</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                <MathText block math="n^2 + (n^2 + 4n + 4) - 2n^2 - 4n - 2" />
              </div>
              <p>カッコを外して、同類項（<TextWithMath text="$n^2$" /> の項、<TextWithMath text="$n$" /> の項、定数項）ごとにまとめて計算しましょう。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '式を最後まで計算して整理すると、何が残りますか？',
            options: ['2n', '2', '0'],
            correctAnswer: '2',
            explanation: (
              <div className="mt-2">
                <MathText block math="= (1 + 1 - 2)n^2 + (4 - 4)n + (4 - 2)" />
                <MathText block math="= 0 \cdot n^2 + 0 \cdot n + 2 = 2" />
                <p>見事に文字がすべて消え、「2」が残ります！</p>
              </div>
            )
          }
        },
        {
          id: 10,
          title: 'ステップ10：証明完了！',
          content: (
            <div className="space-y-4">
              <p>計算結果が「2」になったことで、証明は完了です！</p>
              <p>結果に <TextWithMath text="$n$" /> が含まれていないということは、<strong>「<TextWithMath text="$n$" /> がどんな数であっても（どの自然数からスタートしても）結果は常に2になる」</strong>ということを意味しています。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '証明の結論として、最後に締めくくる一言としてふさわしいのはどれですか？',
            options: [
              'よって、結果は n によって変わる。',
              'よって、どんな3つの連続する自然数でも、その計算結果は常に2になる。',
              'よって、n は常に2である。'
            ],
            correctAnswer: 'よって、どんな3つの連続する自然数でも、その計算結果は常に2になる。',
            explanation: <p>計算結果が定数の「2」になったため、どの連続する3つの自然数を選んでも、必ず「2」になることが証明されました。</p>
          }
        }
      ]
    }
  ]
};
