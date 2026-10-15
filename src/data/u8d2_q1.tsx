import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q1Data: MajorQuestionData = {
  id: "q1",
  title: "宇短大附属 R8(5日) 大問1：計算問題",
  subs: [
    {
      id: "1",
      title: "1. 負の数をひく計算",
      knowledge: ["正負の数の減法"],
      originalText: <p><TextWithMath text="$11-(-2)$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① ひき算をたし算に直す',
          content: <p>負の数をひくことは、その数の符号を変えてたすことと同じです。</p>,
          quiz: {
            type: 'choice',
            question: '11 − (−2) を書き直すと？',
            options: ['11 + 2', '11 − 2', '−11 + 2'],
            correctAnswer: '11 + 2',
            explanation: <p><TextWithMath text="$-(-2)=+2$" /> なので <TextWithMath text="$11+2$" /> になります。</p>
          }
        },
        {
          id: 2, title: '② 計算する',
          content: <MathText block math="11+2" />,
          quiz: {
            type: 'choice',
            question: '答えは？',
            options: ['13', '9', '−13'],
            correctAnswer: '13',
            explanation: <p>答えは 13 です。符号の変え忘れで 9 にしないよう注意しましょう。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 単項式の乗除",
      knowledge: ["単項式の乗法・除法", "逆数をかける"],
      originalText: <p><TextWithMath text="$xy^2\times\dfrac{1}{x^3y^4}\div\dfrac{1}{x^5y^6}=x^{\boxed{\text{ウ}}}y^{\boxed{\text{エ}}}$" /> のウ、エにあてはまる数を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① わり算をかけ算に直す',
          content: <p>分数でわるときは、逆数をかけます。</p>,
          quiz: {
            type: 'choice',
            question: '÷ 1/(x⁵y⁶) を直すと？',
            options: ['× x⁵y⁶', '× 1/(x⁵y⁶)', '÷ x⁵y⁶'],
            correctAnswer: '× x⁵y⁶',
            explanation: <p><TextWithMath text="$\dfrac{1}{x^5y^6}$" /> の逆数は <TextWithMath text="$x^5y^6$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 1つの分数にまとめる',
          content: <MathText block math="\frac{xy^2\times x^5y^6}{x^3y^4}=\frac{x^6y^8}{x^3y^4}" />,
          quiz: {
            type: 'choice',
            question: '約分した結果は？',
            options: ['x³y⁴', 'x²y²', 'x⁹y¹²'],
            correctAnswer: 'x³y⁴',
            explanation: (
              <div>
                <p><TextWithMath text="$x$" /> は6個から3個を約分して3個、<TextWithMath text="$y$" /> は8個から4個を約分して4個残ります。</p>
                <p className="mt-2">答えは <TextWithMath text="$x^3y^4$" /> です。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 小数の累乗をふくむ計算",
      knowledge: ["累乗", "四則の順序", "分数でわる"],
      originalText: <p><TextWithMath text="$0.5^2\times2.4-0.3^2\div\dfrac{1}{40}$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① 累乗を先に計算する',
          content: <p>計算の順序は、累乗、かけ算・わり算、たし算・ひき算の順です。</p>,
          quiz: {
            type: 'choice',
            question: '0.5² と 0.3² の値の組は？',
            options: ['0.25 と 0.09', '0.25 と 0.9', '1.0 と 0.6'],
            correctAnswer: '0.25 と 0.09',
            explanation: <p><TextWithMath text="$0.5^2=0.25$" />、<TextWithMath text="$0.3^2=0.09$" /> です。小数点の位置に注意しましょう。</p>
          }
        },
        {
          id: 2, title: '② かけ算とわり算をする',
          content: <MathText block math="0.25\times2.4-0.09\div\frac{1}{40}" />,
          quiz: {
            type: 'choice',
            question: '0.09 ÷ (1/40) はいくつ？',
            options: ['3.6', '0.00225', '0.36'],
            correctAnswer: '3.6',
            explanation: <p><TextWithMath text="$\dfrac{1}{40}$" /> でわるのは40をかけるのと同じなので <TextWithMath text="$0.09\times40=3.6$" />。また <TextWithMath text="$0.25\times2.4=0.6$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ ひき算をする',
          content: <MathText block math="0.6-3.6" />,
          quiz: {
            type: 'choice',
            question: '答えは？',
            options: ['−3', '3', '−0.3'],
            correctAnswer: '−3',
            explanation: <p><TextWithMath text="$0.6-3.6=-3$" /> です。答えは −3 です。</p>
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. 平方根の計算",
      knowledge: ["分母の有理化", "根号の簡単化", "平方根の乗除"],
      originalText: <p><TextWithMath text="$\left(\dfrac{4}{\sqrt2}+\sqrt{32}-\sqrt{\dfrac{54}{3}}\right)\div\dfrac{1}{2\sqrt2}$" /> を計算せよ。</p>,
      steps: [
        {
          id: 1, title: '① かっこの中の各項を a√2 の形にする',
          content: <p>3つの項をそれぞれ簡単にしていきます。<TextWithMath text="$\dfrac{54}{3}=18$" /> に気づくのがポイントです。</p>,
          quiz: {
            type: 'choice',
            question: '4/√2、√32、√(54/3) をそれぞれ簡単にすると？',
            options: ['2√2、4√2、3√2', '4√2、4√2、3√2', '2√2、2√8、3√6'],
            correctAnswer: '2√2、4√2、3√2',
            explanation: (
              <div>
                <p><TextWithMath text="$\dfrac{4}{\sqrt2}=\dfrac{4\sqrt2}{2}=2\sqrt2$" />、<TextWithMath text="$\sqrt{32}=\sqrt{16\times2}=4\sqrt2$" />、<TextWithMath text="$\sqrt{18}=3\sqrt2$" /> です。</p>
              </div>
            )
          }
        },
        {
          id: 2, title: '② かっこの中をまとめる',
          content: <MathText block math="2\sqrt2+4\sqrt2-3\sqrt2" />,
          quiz: {
            type: 'choice',
            question: 'かっこの中の値は？',
            options: ['3√2', '9√2', '√2'],
            correctAnswer: '3√2',
            explanation: <p><TextWithMath text="$(2+4-3)\sqrt2=3\sqrt2$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ わり算を逆数のかけ算にする',
          content: <MathText block math="3\sqrt2\div\frac{1}{2\sqrt2}=3\sqrt2\times2\sqrt2" />,
          quiz: {
            type: 'choice',
            question: '答えは？',
            options: ['12', '6√2', '3/4'],
            correctAnswer: '12',
            explanation: <p><TextWithMath text="$3\times2\times\sqrt2\times\sqrt2=6\times2=12$" />。答えは 12 です。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. 共通因数でくくる因数分解",
      knowledge: ["共通因数", "因数分解"],
      originalText: <p><TextWithMath text="$2(x+1)^2-(x+1)(x+3)=(x+\boxed{\text{ケ}})(x-\boxed{\text{コ}})$" /> のケ、コにあてはまる数を求めよ。</p>,
      steps: [
        {
          id: 1, title: '① 共通な部分を見つける',
          content: <p>2つの項のどちらにも <TextWithMath text="$(x+1)$" /> が入っています。展開する前にくくり出すと楽です。</p>,
          quiz: {
            type: 'choice',
            question: '(x+1) でくくると？',
            options: ['(x+1){2(x+1) − (x+3)}', '(x+1){2(x+1) + (x+3)}', '(x+1){2 − (x+3)}'],
            correctAnswer: '(x+1){2(x+1) − (x+3)}',
            explanation: <p>1つ目の項は <TextWithMath text="$(x+1)\times2(x+1)$" /> と見ます。<TextWithMath text="$(x+1)^2$" /> の一方だけをくくり出すので、残りは <TextWithMath text="$2(x+1)$" /> です。</p>
          }
        },
        {
          id: 2, title: '② { } の中を整理する',
          content: <MathText block math="2(x+1)-(x+3)" />,
          quiz: {
            type: 'choice',
            question: '{ } の中を計算すると？',
            options: ['x − 1', 'x + 5', 'x − 5'],
            correctAnswer: 'x − 1',
            explanation: (
              <div>
                <p><TextWithMath text="$2x+2-x-3=x-1$" />。かっこの前のマイナスで +3 が −3 になります。</p>
                <p className="mt-2">答えは <TextWithMath text="$(x+1)(x-1)$" />（ケ＝1、コ＝1）です。</p>
                <p className="mt-2 text-sm">検算：<TextWithMath text="$x=0$" /> を代入すると、左辺は <TextWithMath text="$2-3=-1$" />、右辺も <TextWithMath text="$1\times(-1)=-1$" /> で一致します。</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
