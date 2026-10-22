import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { ParabolaLineFig, HumidifierGraphFig } from './bst_figs';

const intro1 = (
  <div className="space-y-2">
    <p>1　下の図で、①は関数 <TextWithMath text="$y=\frac32x+6$" /> のグラフであり、①のグラフ上の <TextWithMath text="$x$" /> 座標が4である点をA、①のグラフと <TextWithMath text="$x$" /> 軸との交点をBとする。②は点Aを通る関数 <TextWithMath text="$y=ax^2\ (a>0)$" /> のグラフであり、②のグラフ上の <TextWithMath text="$x$" /> 座標が2である点をCとする。このとき、次の(1)、(2)の問いに答えなさい。</p>
    <ParabolaLineFig />
  </div>
);

const intro2 = (
  <div className="space-y-2">
    <p>2　太郎さんの部屋には加湿器が置いてある。この加湿器には「強」、「中」、「弱」の3段階の強さがあり、どの強さの場合もそれぞれ一定の割合で水を消費する。「強」で使用したときの1時間あたりに消費する水の量は500mLである。</p>
    <p>使い始めてから <TextWithMath text="$x$" /> 時間後のタンクに残っている水の量を <TextWithMath text="$y$" /> mLとする。下の図は、タンクに3800mLの水を入れてから、最初の2時間は「強」で、次の1時間は「弱」で、その後の5時間は「中」で使用したときの <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をグラフに表したものである。このとき、次の(1)、(2)の問いに答えなさい。</p>
    <HumidifierGraphFig />
  </div>
);

export const q4Data: MajorQuestionData = {
  id: "q4",
  title: "文星特待 大問4：放物線と直線・加湿器のグラフ",
  subs: [
    {
      id: "1-1",
      title: "1(1). 放物線の比例定数 a",
      knowledge: ["1次関数の値", "y=ax²に代入"],
      originalText: <div>{intro1}<p>(1)　<TextWithMath text="$a$" /> の値は、<TextWithMath text="$\frac{\text{あ}}{\text{い}}$" /> である。</p></div>,
      steps: [
        {
          id: 1, title: '① 点Aの y 座標',
          content: <p>Aは直線①の上にあって、<TextWithMath text="$x=4$" /> です。まず①の式に代入します。</p>,
          quiz: {
            type: 'choice',
            question: '点Aの y 座標は？',
            options: ['12', '10', '6'],
            correctAnswer: '12',
            explanation: <p><TextWithMath text="$\frac32\times4+6=6+6=12$" />。A(4, 12) です。</p>
          }
        },
        {
          id: 2, title: '② ②の式に代入',
          content: <p>Aは放物線②の上にもあるので、<TextWithMath text="$y=ax^2$" /> に A(4, 12) を入れます。</p>,
          quiz: {
            type: 'choice',
            question: '代入してできる式は？',
            options: ['12 = 16a', '12 = 8a', '4 = 144a', '12 = 4a', '16 = 12a'],
            correctAnswer: '12 = 16a',
            explanation: <p><TextWithMath text="$x^2=4^2=16$" /> なので <TextWithMath text="$12=16a$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ a を求める',
          content: <p><TextWithMath text="$12=16a$" /> を解きます。</p>,
          quiz: {
            type: 'choice',
            question: 'a の値は？',
            options: ['3/4', '4/3', '3/2'],
            correctAnswer: '3/4',
            explanation: <p><TextWithMath text="$a=\frac{12}{16}=\frac34$" />。あ＝3、い＝4 です。</p>
          }
        }
      ]
    },
    {
      id: "1-2",
      title: "1(2). 面積が等しくなる点P",
      knowledge: ["x軸との交点", "三角形の面積", "底辺をx軸にとる"],
      originalText: <div>{intro1}<p>(2)　<TextWithMath text="$x$" /> 軸上の <TextWithMath text="$x>0$" /> の範囲に点Pをとる。△ABOの面積と△CBPの面積が等しいとき、点Pの <TextWithMath text="$x$" /> 座標は、<TextWithMath text="$\boxed{\text{う}}\boxed{\text{え}}$" /> である。</p></div>,
      steps: [
        {
          id: 1, title: '① 点Bの座標',
          content: <p>Bは①と <TextWithMath text="$x$" /> 軸の交点なので、<TextWithMath text="$y=0$" /> を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '点Bの x 座標は？',
            options: ['-4', '-6', '4'],
            correctAnswer: '-4',
            explanation: <p><TextWithMath text="$0=\frac32x+6$" /> より <TextWithMath text="$x=-4$" />。B(−4, 0) です。</p>
          }
        },
        {
          id: 2, title: '② △ABOの面積',
          content: <p>△ABOは、x軸上のBOを底辺、Aの y 座標を高さと見ます。</p>,
          quiz: {
            type: 'choice',
            question: '△ABOの面積は？',
            options: ['24', '48', '12'],
            correctAnswer: '24',
            explanation: <p>底辺BO＝4、高さ12で <TextWithMath text="$\frac12\times4\times12=24$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 点Cの座標',
          content: <p>Cは②の上で <TextWithMath text="$x=2$" /> です。(1)の <TextWithMath text="$a=\frac34$" /> を使います。</p>,
          quiz: {
            type: 'choice',
            question: '点Cの y 座標は？',
            options: ['3', '6', '3/2'],
            correctAnswer: '3',
            explanation: <p><TextWithMath text="$\frac34\times2^2=3$" />。C(2, 3) です。</p>
          }
        },
        {
          id: 4, title: '④ △CBPを式にする',
          content: <p>Pの x 座標を <TextWithMath text="$p$" /> とします。△CBPもx軸上のBPを底辺、Cの y 座標を高さと見ます。</p>,
          quiz: {
            type: 'choice',
            question: '△CBPの面積を表す式は？',
            options: ['½×(p+4)×3', '½×(p−4)×3', '½×p×3', '(p+4)×3', '½×(4−p)×3'],
            correctAnswer: '½×(p+4)×3',
            explanation: <p>BからPまでの長さは <TextWithMath text="$p-(-4)=p+4$" /> です。</p>
          }
        },
        {
          id: 5, title: '⑤ 方程式を解く',
          content: <p><TextWithMath text="$\frac12(p+4)\times3=24$" /> を解きます。</p>,
          quiz: {
            type: 'choice',
            question: '点Pの x 座標は？',
            options: ['12', '16', '8'],
            correctAnswer: '12',
            explanation: <p><TextWithMath text="$p+4=16$" /> より <TextWithMath text="$p=12$" />。う＝1、え＝2 です。16はBPの長さで、座標ではありません。</p>
          }
        }
      ]
    },
    {
      id: "2-1",
      title: "2(1). 「弱」の1時間あたりの消費量",
      knowledge: ["グラフの読み取り", "変化の割合"],
      originalText: <div>{intro2}<p>(1)　「弱」で使用したときの1時間あたりに消費する水の量は、<TextWithMath text="$\boxed{\text{お}}\boxed{\text{か}}\boxed{\text{き}}$" /> mLである。</p></div>,
      steps: [
        {
          id: 1, title: '① 2時間後の水の量',
          content: <p>最初の2時間は「強」で、1時間に500mL使います。</p>,
          quiz: {
            type: 'choice',
            question: '2時間後にタンクに残っている水は？',
            options: ['2800mL', '3300mL', '2500mL'],
            correctAnswer: '2800mL',
            explanation: <p><TextWithMath text="$3800-500\times2=2800$" /> mLです。</p>
          }
        },
        {
          id: 2, title: '② 3時間後の水の量',
          content: <p>グラフで、<TextWithMath text="$x=3$" /> の点から横に引いた点線がどこにつながっているかを見ます。</p>,
          quiz: {
            type: 'choice',
            question: '3時間後の水の量は？',
            options: ['2500mL', '2800mL', '400mL'],
            correctAnswer: '2500mL',
            explanation: <p>点線は y 軸の2500につながっています。</p>
          }
        },
        {
          id: 3, title: '③ 「弱」の1時間で減った量',
          content: <p>2時間後から3時間後までの1時間が「弱」です。</p>,
          quiz: {
            type: 'choice',
            question: '「弱」の1時間あたりの消費量は？',
            options: ['300mL', '420mL', '500mL'],
            correctAnswer: '300mL',
            explanation: <p><TextWithMath text="$2800-2500=300$" /> mL。お＝3、か＝0、き＝0 です。</p>
          }
        }
      ]
    },
    {
      id: "2-2",
      title: "2(2). 「弱」で使った時間 t",
      knowledge: ["グラフの読み取り", "1次方程式", "時間と分の換算"],
      originalText: <div>{intro2}<p>(2)　使い始めて8時間後からは、「弱」で <TextWithMath text="$t$" /> 分間使用したあと、タンクの水がなくなるまで「中」で使用した。使い始めてから9時間後にタンクの中が空になったとき、<TextWithMath text="$t$" /> の値は、<TextWithMath text="$\boxed{\text{く}}\boxed{\text{け}}$" /> である。</p></div>,
      steps: [
        {
          id: 1, title: '① 「中」の1時間あたりの消費量',
          content: <p>3時間後から8時間後までの5時間が「中」です。グラフでは2500mLから400mLまで減っています。</p>,
          quiz: {
            type: 'choice',
            question: '「中」の1時間あたりの消費量は？',
            options: ['420mL', '500mL', '2100mL'],
            correctAnswer: '420mL',
            explanation: <p><TextWithMath text="$(2500-400)\div5=420$" /> mLです。</p>
          }
        },
        {
          id: 2, title: '② 1分あたりにする',
          content: <p>(2)は時間が「分」なので、1分あたりの量に直しておきます。</p>,
          quiz: {
            type: 'choice',
            question: '「弱」と「中」の1分あたりの消費量は？',
            options: ['弱5mL・中7mL', '弱3mL・中4.2mL', '弱6mL・中8mL', '弱7mL・中5mL', '弱5mL・中6mL'],
            correctAnswer: '弱5mL・中7mL',
            explanation: <p><TextWithMath text="$300\div60=5$" />、<TextWithMath text="$420\div60=7$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 方程式を立てる',
          content: <p>8時間後に残っているのは400mL。そこから9時間後までの60分で、「弱」を <TextWithMath text="$t$" /> 分、「中」を残りの分だけ使って、ちょうど400mL使い切ります。</p>,
          quiz: {
            type: 'choice',
            question: '立てる式は？',
            options: ['5t + 7(60 − t) = 400', '5t + 7t = 400', '7t + 5(60 − t) = 400', '5t + 7(60 + t) = 400', '5t + 7(60 − t) = 2800'],
            correctAnswer: '5t + 7(60 − t) = 400',
            explanation: <p>「中」の時間は <TextWithMath text="$60-t$" /> 分です。</p>
          }
        },
        {
          id: 4, title: '④ 解く',
          content: <p><TextWithMath text="$5t+420-7t=400$" /></p>,
          quiz: {
            type: 'choice',
            question: 't の値は？',
            options: ['10', '20', '50'],
            correctAnswer: '10',
            explanation: <p><TextWithMath text="$-2t=-20$" /> より <TextWithMath text="$t=10$" />。く＝1、け＝0 です。</p>
          }
        }
      ]
    }
  ]
};
