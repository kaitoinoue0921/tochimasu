import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { TilesFig, TilesTable } from './bst_figs';

const intro = (
  <div className="space-y-2">
    <p>同じ大きさの白色と灰色の正方形のタイルがたくさんある。下の図のように、白色のタイル1枚から始めて、灰色のタイル3枚、白色のタイル5枚、灰色のタイル7枚、…を順に追加し、全体が正方形の図形となるようにすき間なく並べる。下の表は、1辺に置かれているタイルの枚数と、そのときの正方形の図形に使われている白色のタイルの枚数と灰色のタイルの枚数について整理したものである。</p>
    <TilesFig />
    <TilesTable />
  </div>
);

export const q5Data: MajorQuestionData = {
  id: "q5",
  title: "文星特待 大問5：白と灰色のタイルの規則性",
  subs: [
    {
      id: "1",
      title: "1. 1辺7枚のときの灰色の枚数",
      knowledge: ["規則性", "奇数の列"],
      originalText: <div>{intro}<p>1　1辺に置かれているタイルの枚数が7枚のときの正方形の図形に使われている灰色のタイルの枚数は <TextWithMath text="$\boxed{\text{あ}}\boxed{\text{い}}$" /> 枚である。</p></div>,
      steps: [
        {
          id: 1, title: '① 足していく枚数の規則',
          content: <p>1枚、3枚、5枚、7枚、…と、1辺が1つ大きくなるたびにL字形に足していきます。</p>,
          quiz: {
            type: 'choice',
            question: '1辺が6枚になるときに足すタイルは何枚？',
            options: ['11枚', '13枚', '12枚'],
            correctAnswer: '11枚',
            explanation: <p>1辺 <TextWithMath text="$k$" /> 枚にするときに足すのは <TextWithMath text="$2k-1$" /> 枚。<TextWithMath text="$k=6$" /> なら11枚です。</p>
          }
        },
        {
          id: 2, title: '② 灰色になるのはどれ',
          content: <p>白、灰、白、灰、…と交互なので、灰色を足すのは1辺が偶数枚になるときです。</p>,
          quiz: {
            type: 'choice',
            question: '1辺7枚までに足した灰色のタイルは？',
            options: ['3枚・7枚・11枚', '3枚・7枚・11枚・13枚', '1枚・5枚・9枚・13枚', '3枚・5枚・7枚', '2枚・6枚・10枚'],
            correctAnswer: '3枚・7枚・11枚',
            explanation: <p>1辺2枚・4枚・6枚のときの3枚・7枚・11枚が灰色です。13枚は1辺7枚にするときの白です。</p>
          }
        },
        {
          id: 3, title: '③ 合計',
          content: <p>表の「1辺4枚で灰色10枚」に、6枚目の11枚を足すと考えてもOKです。</p>,
          quiz: {
            type: 'choice',
            question: '1辺7枚のときの灰色は？',
            options: ['21枚', '28枚', '24枚'],
            correctAnswer: '21枚',
            explanation: <p><TextWithMath text="$3+7+11=21$" /> 枚。あ＝2、い＝1 です。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 1辺2n枚のときの白の枚数",
      knowledge: ["規則性", "文字式", "全体から引く"],
      originalText: <div>{intro}<p>2　<TextWithMath text="$n$" /> を自然数とする。1辺に置かれているタイルの枚数が <TextWithMath text="$2n$" /> 枚のときの正方形の図形に使われている白色のタイルの枚数を <TextWithMath text="$n$" /> を用いて表すと、<TextWithMath text="$(\boxed{\text{う}}\,n^2-n)$" /> 枚である。</p></div>,
      steps: [
        {
          id: 1, title: '① 表で確かめる',
          content: <p>1辺 <TextWithMath text="$2n$" /> 枚は、<TextWithMath text="$n=1$" /> なら1辺2枚、<TextWithMath text="$n=2$" /> なら1辺4枚です。</p>,
          quiz: {
            type: 'choice',
            question: '表から、1辺2枚と1辺4枚の白の枚数は？',
            options: ['1枚と6枚', '3枚と10枚', '1枚と15枚', '1枚と5枚', '3枚と6枚'],
            correctAnswer: '1枚と6枚',
            explanation: <p>表の白の行を見ます。</p>
          }
        },
        {
          id: 2, title: '② 白と灰色の関係',
          content: <p>1辺が偶数のときは最後に灰色を足しています。白も灰色も、それぞれ <TextWithMath text="$n$" /> 回ずつ足しています。灰色の各回は、その直前の白より2枚ずつ多いです（1→3、5→7、…）。</p>,
          quiz: {
            type: 'choice',
            question: '1辺2n枚のとき、灰色は白より何枚多い？',
            options: ['2n枚', 'n枚', '2枚', '(2n − 1)枚', '4n枚'],
            correctAnswer: '2n枚',
            explanation: <p>2枚多いのが <TextWithMath text="$n$" /> 回なので <TextWithMath text="$2n$" /> 枚多いです。1辺4枚なら白6・灰10で、差は <TextWithMath text="$4=2\times2$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 全体の枚数から式を作る',
          content: <p>全体は <TextWithMath text="$(2n)^2=4n^2$" /> 枚。白を <TextWithMath text="$W$" /> とすると灰色は <TextWithMath text="$W+2n$" /> 枚です。</p>,
          quiz: {
            type: 'choice',
            question: '白の枚数 W は？',
            options: ['2n² − n', '2n² + n', '4n² − 2n', '2n² − 2n', 'n² + n'],
            correctAnswer: '2n² − n',
            explanation: <p><TextWithMath text="$W+(W+2n)=4n^2$" /> より <TextWithMath text="$W=2n^2-n$" />。<TextWithMath text="$n=2$" /> で6枚と表に合います。う＝2 です。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 白：灰色＝13：15になる1辺の枚数",
      knowledge: ["規則性", "比", "2の式を使う"],
      originalText: <div>{intro}<p>3　正方形の図形の右上の角にあるタイルの色が灰色のとき、白色のタイルの枚数と灰色のタイルの枚数の比が13：15となるのは、1辺に置かれているタイルの枚数が <TextWithMath text="$\boxed{\text{え}}\boxed{\text{お}}$" /> 枚のときである。</p></div>,
      steps: [
        {
          id: 1, title: '① 右上の角が灰色とは',
          content: <p>右上の角のタイルは、最後に足したL字の中にあります。</p>,
          quiz: {
            type: 'choice',
            question: '右上の角が灰色になるのは1辺が何枚のとき？',
            options: ['偶数枚', '奇数枚', '3の倍数枚', '4の倍数枚', '7以上の枚数'],
            correctAnswer: '偶数枚',
            explanation: <p>最後に灰色を足したとき、つまり1辺が偶数枚のときです。そこで1辺を <TextWithMath text="$2n$" /> 枚とおき、2の結果を使います。</p>
          }
        },
        {
          id: 2, title: '② 白と灰色を n で表す',
          content: <p>2より白は <TextWithMath text="$2n^2-n$" /> 枚。灰色は全体 <TextWithMath text="$4n^2$" /> から引きます。</p>,
          quiz: {
            type: 'choice',
            question: '灰色の枚数は？',
            options: ['2n² + n', '2n² − n', '4n² − n', '2n² + 2n', '2n²'],
            correctAnswer: '2n² + n',
            explanation: <p><TextWithMath text="$4n^2-(2n^2-n)=2n^2+n$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 比の式にする',
          content: <p><TextWithMath text="$(2n^2-n):(2n^2+n)=13:15$" />。両方とも <TextWithMath text="$n$" /> でくくれます。</p>,
          quiz: {
            type: 'choice',
            question: 'n で割ったあとの式は？',
            options: ['(2n − 1) : (2n + 1) = 13 : 15', '(n − 1) : (n + 1) = 13 : 15', '(2n − 1) : (2n + 1) = 15 : 13', '(2n − 1) : (2n + 1) = 13 : 17', '(2n + 1) : (2n − 1) = 13 : 15'],
            correctAnswer: '(2n − 1) : (2n + 1) = 13 : 15',
            explanation: <p><TextWithMath text="$n(2n-1):n(2n+1)$" /> なので、<TextWithMath text="$n$" /> で割れます。</p>
          }
        },
        {
          id: 4, title: '④ 解く',
          content: <p>外項の積＝内項の積で、<TextWithMath text="$15(2n-1)=13(2n+1)$" />。</p>,
          quiz: {
            type: 'choice',
            question: 'n の値は？',
            options: ['7', '14', '13'],
            correctAnswer: '7',
            explanation: <p><TextWithMath text="$30n-15=26n+13$" /> より <TextWithMath text="$4n=28$" />、<TextWithMath text="$n=7$" /> です。</p>
          }
        },
        {
          id: 5, title: '⑤ 答えは1辺の枚数',
          content: <p>聞かれているのは <TextWithMath text="$n$" /> ではなく1辺の枚数です。</p>,
          quiz: {
            type: 'choice',
            question: '1辺に置かれているタイルの枚数は？',
            options: ['14枚', '7枚', '28枚'],
            correctAnswer: '14枚',
            explanation: <p><TextWithMath text="$2n=14$" /> 枚。白 <TextWithMath text="$91$" />・灰 <TextWithMath text="$105$" /> で、<TextWithMath text="$91:105=13:15$" /> になります。え＝1、お＝4 です。</p>
          }
        }
      ]
    }
  ]
};
