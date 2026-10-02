import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { TileFigs } from './r5_figs';

const intro = (
  <div className="space-y-2">
    <p>1辺の長さが <TextWithMath text="$n$" /> cm（<TextWithMath text="$n$" /> は2以上の整数）の正方形の板に、1辺の長さが1cmの正方形の<strong>黒いタイル</strong>、または斜辺の長さが1cmの直角二等辺三角形の<strong>白いタイル</strong>を貼る。板にタイルを貼るときは、黒いタイルを1枚使う【貼り方Ⅰ】、または白いタイルを4枚使う【貼り方Ⅱ】を用いて、タイルどうしが重ならないように板にすき間なくタイルをしきつめることとする。</p>
    <p className="text-sm text-slate-500 dark:text-slate-400">※【貼り方Ⅰ】1cm四方のマスに黒いタイル1枚。【貼り方Ⅱ】1cm四方のマスを対角線で4つに分け、白いタイル4枚。</p>
    <p>例えば、<TextWithMath text="$n=3$" /> の場合について考えるとき、図2は黒いタイルを7枚、白いタイルを8枚、合計15枚のタイルを使って板にタイルをしきつめたようすを表しており、図3は黒いタイルを4枚、白いタイルを20枚、合計24枚のタイルを使って板にタイルをしきつめたようすを表している。</p>
    <TileFigs />
  </div>
);

export const q6Data: MajorQuestionData = {
  id: "q6",
  title: "令和5年 大問6：タイルのしきつめ（規則性）",
  subs: [
    {
      id: "1",
      title: "1. 白いタイルだけでしきつめる",
      knowledge: ["マスの数 = n²", "1マスあたりの枚数"],
      originalText: (
        <div>
          {intro}
          <p>1　<TextWithMath text="$n=4$" /> の場合について考える。白いタイルだけを使って板にタイルをしきつめたとき、使った白いタイルの枚数を求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① マスの数を数える',
          content: <p>1辺4cmの板は、1cm四方のマスに分けられます。</p>,
          quiz: {
            type: 'choice',
            question: 'n = 4 の板には 1cm 四方のマスがいくつある？',
            options: ['8マス', '16マス', '4マス'],
            correctAnswer: '16マス',
            explanation: <p><TextWithMath text="$4\times4=16$" /> マスです。</p>
          }
        },
        {
          id: 2, title: '② 白いタイルの枚数',
          content: <p>白いタイルは【貼り方Ⅱ】で1マスに4枚使います。</p>,
          quiz: {
            type: 'choice',
            question: '使った白いタイルの枚数は？',
            options: ['64枚', '32枚', '16枚'],
            correctAnswer: '64枚',
            explanation: <p><TextWithMath text="$16\times4=64$" /> 枚。検算：図3の白いマス5つで20枚＝1マス4枚と一致します。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 合計49枚のときの黒と白の枚数",
      knowledge: ["1次方程式（連立方程式）の利用"],
      originalText: (
        <div>
          {intro}
          <p>2　<TextWithMath text="$n=5$" /> の場合について考える。黒いタイルと白いタイルを合計49枚使って板にタイルをしきつめたとき、使った黒いタイルと白いタイルの枚数をそれぞれ求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① マスの数と文字の置き方',
          content: <p><TextWithMath text="$n=5$" /> の板は25マス。黒いタイルの枚数を <TextWithMath text="$x$" /> 枚とすると、黒いマスも <TextWithMath text="$x$" /> マスです。</p>,
          quiz: {
            type: 'choice',
            question: '白いタイルを貼ったマスの数は？',
            options: ['25 − x マス', '49 − x マス', '4x マス'],
            correctAnswer: '25 − x マス',
            explanation: <p>マスは全部で25。黒以外の <TextWithMath text="$25-x$" /> マスに白いタイルを貼ります。</p>
          }
        },
        {
          id: 2, title: '② 枚数の合計で方程式をつくる',
          content: <p>白いタイルは1マス4枚なので、白は <TextWithMath text="$4(25-x)$" /> 枚です。</p>,
          quiz: {
            type: 'choice',
            question: '正しい方程式は？',
            options: ['x + 4(25 − x) = 49', 'x + (25 − x) = 49', '4x + (25 − x) = 49'],
            correctAnswer: 'x + 4(25 − x) = 49',
            explanation: <p>黒 <TextWithMath text="$x$" /> 枚＋白 <TextWithMath text="$4(25-x)$" /> 枚＝49枚。</p>
          }
        },
        {
          id: 3, title: '③ 解いて答える',
          content: <MathText block math="100 - 3x = 49" />,
          quiz: {
            type: 'choice',
            question: '黒いタイルと白いタイルの枚数は？',
            options: ['黒17枚、白32枚', '黒8枚、白41枚', '黒17枚、白8枚'],
            correctAnswer: '黒17枚、白32枚',
            explanation: (
              <div>
                <p><TextWithMath text="$3x=51$" /> より <TextWithMath text="$x=17$" />。白は <TextWithMath text="$4\times(25-17)=32$" /> 枚。</p>
                <p className="text-sm mt-2">検算：17＋32＝49 ✓、マスは 17＋8＝25 ✓。「白8」はマスの数を枚数と取り違えたミスです。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 貼り方を入れかえて225枚減る a",
      knowledge: ["文字式の立式", "整数の条件（偶奇）", "平方数"],
      originalText: (
        <div>
          {intro}
          <p>3　次の文章の①、②、③に当てはまる式や数をそれぞれ求めなさい。ただし、文章中の <TextWithMath text="$a$" /> は2以上の整数、<TextWithMath text="$b$" /> は1以上の整数とする。</p>
          <div className="border border-slate-400 p-3 bg-slate-50 dark:bg-slate-800 space-y-2 mt-2">
            <p><TextWithMath text="$n=a$" /> の場合について考える。はじめに、黒いタイルと白いタイルを使って板にタイルをしきつめたとき、使った黒いタイルの枚数を <TextWithMath text="$b$" /> 枚とすると、使った白いタイルの枚数は <TextWithMath text="$a$" /> と <TextWithMath text="$b$" /> を用いて（ ① ）枚と表せる。</p>
            <p>次に、この板の【貼り方Ⅰ】のところを【貼り方Ⅱ】に、【貼り方Ⅱ】のところを【貼り方Ⅰ】に変更した新しい正方形の板を作った。このときに使ったタイルの枚数の合計は、はじめに使ったタイルの枚数の合計よりも225枚少なくなった。これを満たす <TextWithMath text="$a$" /> のうち、最も小さい値は（ ② ）、その次に小さい値は（ ③ ）である。</p>
          </div>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 白いタイルの枚数（①）',
          content: <p>マスは <TextWithMath text="$a^2$" /> 個。黒いタイル <TextWithMath text="$b$" /> 枚 → 黒いマスが <TextWithMath text="$b$" /> 個。残りのマスに白いタイルを4枚ずつ貼ります。</p>,
          quiz: {
            type: 'choice',
            question: '①に当てはまる式は？',
            options: ['4a² − 4b', 'a² − b', '4a² − b'],
            correctAnswer: '4a² − 4b',
            explanation: <p>白いマスは <TextWithMath text="$a^2-b$" /> 個、1マス4枚なので <TextWithMath text="$4(a^2-b)=4a^2-4b$" /> 枚。「<TextWithMath text="$a^2-b$" />」はマスの数のままのミスです。</p>
          }
        },
        {
          id: 2, title: '② 入れかえ前と後の合計枚数',
          content: (
            <div className="space-y-1">
              <p>はじめ：黒 <TextWithMath text="$b$" /> 枚＋白 <TextWithMath text="$4a^2-4b$" /> 枚。</p>
              <p>入れかえ後：黒いマスと白いマスが入れかわるので、黒は <TextWithMath text="$a^2-b$" /> 枚、白は <TextWithMath text="$4b$" /> 枚。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '（はじめの合計）−（入れかえ後の合計）を整理すると？',
            options: ['3a² − 6b', '3a² − 3b', '5a² − 6b'],
            correctAnswer: '3a² − 6b',
            explanation: <p><TextWithMath text="$(4a^2-3b)-(a^2+3b)=3a^2-6b$" />。これが225になります。</p>
          }
        },
        {
          id: 3, title: '③ b を a で表す',
          content: <MathText block math="3a^2 - 6b = 225 \;\Rightarrow\; a^2 - 2b = 75" />,
          quiz: {
            type: 'choice',
            question: 'b を a で表した式は？',
            options: ['b = (a² − 75) / 2', 'b = (75 − a²) / 2', 'b = a² − 75'],
            correctAnswer: 'b = (a² − 75) / 2',
            explanation: <p><TextWithMath text="$2b = a^2-75$" /> より <TextWithMath text="$b=\frac{a^2-75}{2}$" />。</p>
          }
        },
        {
          id: 4, title: '④ a が満たす条件',
          content: <p><TextWithMath text="$b$" /> は1以上の整数です。<TextWithMath text="$\frac{a^2-75}{2}$" /> が1以上の整数になるための条件を考えます。</p>,
          quiz: {
            type: 'choice',
            question: 'a が満たすべき条件は？',
            options: ['a² が 77 以上で、a は奇数', 'a² が 75 以上で、a は偶数', 'a は 75 以上'],
            correctAnswer: 'a² が 77 以上で、a は奇数',
            explanation: <p><TextWithMath text="$b\geqq1$" /> より <TextWithMath text="$a^2\geqq77$" />。また <TextWithMath text="$a^2-75$" /> が偶数になるには <TextWithMath text="$a^2$" /> が奇数、つまり <TextWithMath text="$a$" /> が奇数。</p>
          }
        },
        {
          id: 5, title: '⑤ 小さい順に2つ求める',
          content: <p><TextWithMath text="$a^2 \geqq 77$" /> を満たす奇数 <TextWithMath text="$a$" /> を小さい順に探します（<TextWithMath text="$7^2=49$" />、<TextWithMath text="$8^2=64$" />、<TextWithMath text="$9^2=81$" />…）。</p>,
          quiz: {
            type: 'choice',
            question: '②、③に当てはまる数の組は？',
            options: ['② 9、③ 11', '② 9、③ 10', '② 8、③ 9', '② 11、③ 13'],
            correctAnswer: '② 9、③ 11',
            explanation: (
              <div>
                <p><TextWithMath text="$a=9$" /> のとき <TextWithMath text="$b=3$" />、<TextWithMath text="$a=11$" /> のとき <TextWithMath text="$b=23$" />。</p>
                <p className="text-sm mt-2">検算（a=9, b=3）：はじめ 3＋4×78＝315枚、入れかえ後 78＋12＝90枚、差 225 ✓</p>
                <p className="text-sm">検算（a=11, b=23）：はじめ 23＋4×98＝415枚、入れかえ後 98＋92＝190枚、差 225 ✓</p>
                <p className="font-bold mt-2">答え：① <TextWithMath text="$4a^2-4b$" />　② 9　③ 11</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
