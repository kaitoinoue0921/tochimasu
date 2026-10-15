import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { ParabolaLineFig } from './u8d1_figs';

const intro = (
  <div className="space-y-2">
    <p>右の図において、直線 <TextWithMath text="$\ell$" /> と関数 <TextWithMath text="$y=\dfrac13x^2$" /> のグラフの2つの交点をA、Bとし、直線 <TextWithMath text="$\ell$" /> と <TextWithMath text="$x$" /> 軸との交点をCとする。また、線分AB上に点Pをとり、点Pから <TextWithMath text="$x$" /> 軸に引いた垂線をPM、点Aから <TextWithMath text="$x$" /> 軸に引いた垂線をANとする。直線 <TextWithMath text="$\ell$" /> の傾きは <TextWithMath text="$-\dfrac13$" /> であり、点Aの <TextWithMath text="$x$" /> 座標は <TextWithMath text="$-2$" /> である。ただし、1目盛りは1cmとする。</p>
    <ParabolaLineFig />
  </div>
);

export const q3Data: MajorQuestionData = {
  id: "q3",
  title: "宇短大附属 R8(4日) 大問3：放物線と直線・三角形の面積",
  subs: [
    {
      id: "1",
      title: "1. 直線ℓの式",
      knowledge: ["関数y=ax²", "直線の式"],
      originalText: <div>{intro}<p>1　直線 <TextWithMath text="$\ell$" /> の式を求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 点Aの座標',
          content: <p><TextWithMath text="$x=-2$" /> を <TextWithMath text="$y=\tfrac13x^2$" /> に代入します。</p>,
          quiz: {
            type: 'choice',
            question: '点Aの座標は？',
            options: ['(−2, 4/3)', '(−2, −4/3)', '(−2, 4)'],
            correctAnswer: '(−2, 4/3)',
            explanation: <p><TextWithMath text="$\tfrac13\times(-2)^2=\tfrac43$" /> です。2乗するので正の値になります。</p>
          }
        },
        {
          id: 2, title: '② 切片を求める',
          content: <p><TextWithMath text="$y=-\tfrac13x+b$" /> にAの座標を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '切片 b の値は？',
            options: ['2/3', '2', '−2/3'],
            correctAnswer: '2/3',
            explanation: <p><TextWithMath text="$\tfrac43=\tfrac23+b$" /> より <TextWithMath text="$b=\tfrac23$" />。直線 <TextWithMath text="$\ell$" /> は <TextWithMath text="$y=-\tfrac13x+\tfrac23$" /> です。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. △ANCの面積",
      knowledge: ["座標と三角形の面積"],
      originalText: <div>{intro}<p>2　△ANCの面積を求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 点Cの座標',
          content: <p>直線 <TextWithMath text="$\ell$" /> の式で <TextWithMath text="$y=0$" /> とします。</p>,
          quiz: {
            type: 'choice',
            question: '点Cの x 座標は？',
            options: ['2', '−2', '2/3'],
            correctAnswer: '2',
            explanation: <p><TextWithMath text="$0=-\tfrac13x+\tfrac23$" /> より <TextWithMath text="$x=2$" />。C(2, 0) です。</p>
          }
        },
        {
          id: 2, title: '② 底辺と高さ',
          content: <p>N(−2, 0) なので、底辺NCは <TextWithMath text="$x$" /> 軸上、高さはANです。</p>,
          quiz: {
            type: 'choice',
            question: 'NC と AN の長さの組は？',
            options: ['NC = 4、AN = 4/3', 'NC = 2、AN = 4/3', 'NC = 4、AN = 2/3'],
            correctAnswer: 'NC = 4、AN = 4/3',
            explanation: <p><TextWithMath text="$NC=2-(-2)=4$" />、AN はAの <TextWithMath text="$y$" /> 座標で <TextWithMath text="$\tfrac43$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 面積を計算する',
          content: <MathText block math="\frac12\times4\times\frac43" />,
          quiz: {
            type: 'choice',
            question: '△ANCの面積は？',
            options: ['8/3 cm²', '16/3 cm²', '4/3 cm²'],
            correctAnswer: '8/3 cm²',
            explanation: <p><TextWithMath text="$\tfrac12\times4\times\tfrac43=\tfrac83$" /> cm² です。<TextWithMath text="$\tfrac12$" /> をかけ忘れると <TextWithMath text="$\tfrac{16}{3}$" /> になってしまいます。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 面積が2倍になる点Pの位置",
      knowledge: ["座標を文字でおく", "2次方程式", "平方根"],
      originalText: <div>{intro}<p>3　△ANCの面積が、△PMCの面積の2倍となるとき、点Pの <TextWithMath text="$x$" /> 座標を求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① Pの座標を文字でおく',
          content: <p>Pの <TextWithMath text="$x$" /> 座標を <TextWithMath text="$t$" /> とすると、P は直線 <TextWithMath text="$\ell$" /> 上なので <TextWithMath text="$P\left(t,\ -\tfrac13t+\tfrac23\right)$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: 'MC と PM を t で表すと？',
            options: ['MC = 2 − t、PM = (2 − t)/3', 'MC = t − 2、PM = (2 − t)/3', 'MC = 2 + t、PM = (2 + t)/3'],
            correctAnswer: 'MC = 2 − t、PM = (2 − t)/3',
            explanation: <p>Mは <TextWithMath text="$(t,0)$" />、Cは <TextWithMath text="$(2,0)$" /> で、<TextWithMath text="$t<2$" /> なので <TextWithMath text="$MC=2-t$" />。PM は <TextWithMath text="$-\tfrac13t+\tfrac23=\tfrac{2-t}{3}$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 方程式を立てる',
          content: <p>△PMCの面積は <TextWithMath text="$\tfrac12(2-t)\cdot\tfrac{2-t}{3}=\tfrac{(2-t)^2}{6}$" /> です。△ANC = 2 × △PMC とおきます。</p>,
          quiz: {
            type: 'choice',
            question: '(2 − t)² の値は？',
            options: ['8', '4', '16'],
            correctAnswer: '8',
            explanation: <p><TextWithMath text="$\tfrac83=2\times\tfrac{(2-t)^2}{6}=\tfrac{(2-t)^2}{3}$" /> なので <TextWithMath text="$(2-t)^2=8$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 範囲に合う解を選ぶ',
          content: <p>Pは線分AB上なので、Aの <TextWithMath text="$x=-2$" /> からBの <TextWithMath text="$x$" /> 座標までの範囲です。Bは <TextWithMath text="$\tfrac13x^2=-\tfrac13x+\tfrac23$" /> を解いて <TextWithMath text="$x=1$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '点Pの x 座標は？',
            options: ['2(1 − √2)', '2(1 + √2)', '2 − √2'],
            correctAnswer: '2(1 − √2)',
            explanation: (
              <div>
                <p><TextWithMath text="$2-t=\pm2\sqrt2$" />。<TextWithMath text="$2-t>0$" /> なので <TextWithMath text="$2-t=2\sqrt2$" />、<TextWithMath text="$t=2-2\sqrt2=2(1-\sqrt2)$" /> です。</p>
                <p className="mt-2 text-sm"><TextWithMath text="$t\approx-0.83$" /> で、<TextWithMath text="$-2\leqq t\leqq1$" /> に入っています。もう一方の <TextWithMath text="$2(1+\sqrt2)$" /> はCより右になり不適です。</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
