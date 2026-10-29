import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q1Data: MajorQuestionData = {
  id: "q1",
  title: "宇短大附属 R8(4日) 大問1：計算問題",
  subs: [
    {
      id: "1",
      title: "1. 正負の数の加法",
      knowledge: ["正負の数の計算"],
      originalText: <p><TextWithMath text="$-4+15$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① 符号を決める',
          content: <p>符号の違う2数のたし算は、絶対値の大きいほうの符号になります。</p>,
          quiz: {
            type: 'choice',
            question: '−4 + 15 の答えの符号は？',
            options: ['＋（正）', '−（負）', '0になる', '±（どちらにもなる）'],
            correctAnswer: '＋（正）',
            explanation: <p>絶対値は4と15で、15のほうが大きいので答えは正の数です。</p>
          }
        },
        {
          id: 2, title: '② 絶対値の差を求める',
          content: <p>符号が違うときは、絶対値の大きいほうから小さいほうを引きます。</p>,
          quiz: {
            type: 'choice',
            question: '−4 + 15 = ?',
            options: ['11', '−11', '19'],
            correctAnswer: '11',
            explanation: <p><TextWithMath text="$15-4=11$" /> なので、答えは <TextWithMath text="$11$" /> です。検算として <TextWithMath text="$11+4=15$" /> となり合っています。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 分数をふくむ式の計算",
      knowledge: ["文字式の加法", "通分"],
      originalText: <p><TextWithMath text="$\dfrac{x-2}{2}+\dfrac{4x-9}{3}+\dfrac{7}{6}x$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① 分母をそろえる',
          content: <p>分母2、3、6の最小公倍数で通分します。</p>,
          quiz: {
            type: 'choice',
            question: '通分するときの分母は？',
            options: ['6', '36', '12'],
            correctAnswer: '6',
            explanation: <p>2、3、6の最小公倍数は6です。分母をかけ合わせた36にする必要はありません。</p>
          }
        },
        {
          id: 2, title: '② 分子をまとめる',
          content: <MathText block math="\frac{3(x-2)+2(4x-9)+7x}{6}" />,
          quiz: {
            type: 'choice',
            question: '分子を整理すると？',
            options: ['18x − 24', '18x − 12', '14x − 24'],
            correctAnswer: '18x − 24',
            explanation: <p><TextWithMath text="$3x-6+8x-18+7x = 18x-24$" /> です。かっこを外すとき、定数項にも3や2をかけ忘れないようにします。</p>
          }
        },
        {
          id: 3, title: '③ 約分する',
          content: <MathText block math="\frac{18x-24}{6}" />,
          quiz: {
            type: 'choice',
            question: '約分した結果は？',
            options: ['3x − 4', '3x − 24', '18x − 4'],
            correctAnswer: '3x − 4',
            explanation: <p>分子の両方の項を6でわって <TextWithMath text="$3x-4$" /> です。検算として <TextWithMath text="$x=2$" /> を元の式に入れると <TextWithMath text="$0-\tfrac13+\tfrac73=2$" />、<TextWithMath text="$3\times2-4=2$" /> で一致します。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 小数の2乗をふくむ計算",
      knowledge: ["小数と分数", "累乗", "計算の順序"],
      originalText: <p><TextWithMath text="$(0.25-1)^2\times8-0.75^2\div\dfrac{1}{4}$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① 分数に直す',
          content: <p><TextWithMath text="$0.25=\tfrac14$" />、<TextWithMath text="$0.75=\tfrac34$" /> と分数にすると計算しやすくなります。</p>,
          quiz: {
            type: 'choice',
            question: '(0.25 − 1)² の値は？',
            options: ['9/16', '−9/16', '3/4'],
            correctAnswer: '9/16',
            explanation: <p><TextWithMath text="$0.25-1=-\tfrac34$" />。2乗すると負の符号は消えて <TextWithMath text="$\tfrac{9}{16}$" /> です。</p>
          }
        },
        {
          id: 2, title: '② かけ算・わり算を先に',
          content: <MathText block math="\frac{9}{16}\times8-\frac{9}{16}\div\frac14" />,
          quiz: {
            type: 'choice',
            question: '9/16 × 8 と 9/16 ÷ 1/4 の値の組は？',
            options: ['9/2 と 9/4', '9/2 と 9/64', '9/8 と 9/4'],
            correctAnswer: '9/2 と 9/4',
            explanation: <p><TextWithMath text="$\tfrac{9}{16}\times8=\tfrac92$" />、<TextWithMath text="$\tfrac{9}{16}\div\tfrac14=\tfrac{9}{16}\times4=\tfrac94$" /> です。わり算は逆数をかけます。</p>
          }
        },
        {
          id: 3, title: '③ 引き算をする',
          content: <MathText block math="\frac92-\frac94" />,
          quiz: {
            type: 'choice',
            question: '計算結果は？',
            options: ['9/4', '0', '27/4'],
            correctAnswer: '9/4',
            explanation: <p><TextWithMath text="$\tfrac{18}{4}-\tfrac94=\tfrac94$" /> です。小数で確かめると <TextWithMath text="$4.5-2.25=2.25$" /> で一致します。</p>
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. 平方根の計算",
      knowledge: ["根号をふくむ式の計算", "分配法則", "√(a²)=|a|"],
      originalText: <p><TextWithMath text="$-(\sqrt{8}+3)\sqrt{2}+\sqrt{18}-\sqrt{(-3)^2}$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① かっこを展開する',
          content: <p>分配法則で <TextWithMath text="$\sqrt2$" /> をかけ、前のマイナスも忘れずにつけます。</p>,
          quiz: {
            type: 'choice',
            question: '−(√8 + 3)√2 を展開すると？',
            options: ['−4 − 3√2', '−4 + 3√2', '4 − 3√2'],
            correctAnswer: '−4 − 3√2',
            explanation: <p><TextWithMath text="$\sqrt8\times\sqrt2=\sqrt{16}=4$" />、<TextWithMath text="$3\times\sqrt2=3\sqrt2$" />。マイナスを両方にかけて <TextWithMath text="$-4-3\sqrt2$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 残りの根号を整理する',
          content: <p><TextWithMath text="$\sqrt{18}$" /> と <TextWithMath text="$\sqrt{(-3)^2}$" /> を簡単にします。</p>,
          quiz: {
            type: 'choice',
            question: '√(−3)² の値は？',
            options: ['3', '−3', '9'],
            correctAnswer: '3',
            explanation: <p><TextWithMath text="$(-3)^2=9$" /> なので <TextWithMath text="$\sqrt9=3$" /> です。根号の値は負になりません。また <TextWithMath text="$\sqrt{18}=3\sqrt2$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ まとめる',
          content: <MathText block math="-4-3\sqrt2+3\sqrt2-3" />,
          quiz: {
            type: 'choice',
            question: '計算結果は？',
            options: ['−7', '−1', '−7 + 6√2'],
            correctAnswer: '−7',
            explanation: <p><TextWithMath text="$-3\sqrt2$" /> と <TextWithMath text="$+3\sqrt2$" /> が打ち消し合い、<TextWithMath text="$-4-3=-7$" /> です。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. 展開して因数分解",
      knowledge: ["乗法公式", "因数分解"],
      originalText: <p><TextWithMath text="$(x+3)^2-(2x+6)-8$" /> を因数分解せよ。</p>,
      steps: [
        {
          id: 1, title: '① 展開して整理する',
          content: <MathText block math="(x+3)^2-(2x+6)-8" />,
          quiz: {
            type: 'choice',
            question: '展開して整理すると？',
            options: ['x² + 4x − 5', 'x² + 8x − 5', 'x² + 4x + 7'],
            correctAnswer: 'x² + 4x − 5',
            explanation: <p><TextWithMath text="$x^2+6x+9-2x-6-8=x^2+4x-5$" /> です。かっこの前のマイナスで <TextWithMath text="$+6$" /> も <TextWithMath text="$-6$" /> になります。</p>
          }
        },
        {
          id: 2, title: '② 因数分解する',
          content: <p>かけて <TextWithMath text="$-5$" />、たして <TextWithMath text="$4$" /> になる2数を探します。</p>,
          quiz: {
            type: 'choice',
            question: 'x² + 4x − 5 を因数分解すると？',
            options: ['(x − 1)(x + 5)', '(x + 1)(x − 5)', '(x − 1)(x + 4)'],
            correctAnswer: '(x − 1)(x + 5)',
            explanation: <p><TextWithMath text="$-1$" /> と <TextWithMath text="$5$" /> で <TextWithMath text="$(x-1)(x+5)$" /> です。別解として <TextWithMath text="$x+3=A$" /> とおくと <TextWithMath text="$A^2-2A-8=(A-4)(A+2)$" /> となり、同じ結果になります。</p>
          }
        }
      ]
    }
  ]
};
