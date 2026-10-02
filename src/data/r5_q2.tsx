import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q2Data: MajorQuestionData = {
  id: "q2",
  title: "令和5年 大問2：2次方程式・方程式の利用・数の性質",
  subs: [
    {
      id: "1",
      title: "1. 2次方程式（解の公式）",
      knowledge: ["2次方程式の解の公式", "根号の簡単化"],
      originalText: <p>2次方程式 <TextWithMath text="$x^2+4x+1=0$" /> を解きなさい。</p>,
      steps: [
        {
          id: 1, title: '① 因数分解できるか確かめる',
          content: <p>かけて1、たして4になる2つの整数はあるでしょうか？ なければ解の公式を使います。</p>,
          quiz: {
            type: 'choice',
            question: 'x² + 4x + 1 = 0 はどう解くのがよい？',
            options: ['(x+1)(x+3)=0 と因数分解する', '解の公式を使う', '(x+2)² = 1 と変形する'],
            correctAnswer: '解の公式を使う',
            explanation: <p>かけて1になる整数は1と1（−1と−1）だけで、和は4になりません。因数分解できないので解の公式を使います。（<TextWithMath text="$(x+2)^2=3$" /> と平方完成してもOK。<TextWithMath text="$(x+2)^2=1$" /> は誤りです）</p>
          }
        },
        {
          id: 2, title: '② a, b, c を読み取る',
          content: <MathText block math="x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}" />,
          quiz: {
            type: 'choice',
            question: 'b² − 4ac の値は？',
            options: ['12', '20', '−12'],
            correctAnswer: '12',
            explanation: <p><TextWithMath text="$a=1,\ b=4,\ c=1$" /> なので <TextWithMath text="$4^2-4\times1\times1 = 16-4 = 12$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 根号を簡単にする',
          content: <p><TextWithMath text="$\sqrt{12}$" /> を <TextWithMath text="$a\sqrt{b}$" /> の形にします。</p>,
          quiz: {
            type: 'choice',
            question: '√12 を簡単にすると？',
            options: ['2√3', '3√2', '4√3'],
            correctAnswer: '2√3',
            explanation: <p><TextWithMath text="$\sqrt{12} = \sqrt{4\times3} = 2\sqrt{3}$" /> です。</p>
          }
        },
        {
          id: 4, title: '④ 約分して答えを出す',
          content: <MathText block math="x = \frac{-4 \pm 2\sqrt{3}}{2}" />,
          quiz: {
            type: 'choice',
            question: '約分した答えは？',
            options: ['x = −2 ± √3', 'x = −2 ± 2√3', 'x = −4 ± √3'],
            correctAnswer: 'x = −2 ± √3',
            explanation: (
              <div>
                <p>分子の両方の項を2でわって <strong><TextWithMath text="$x=-2\pm\sqrt{3}$" /></strong>。片方の項だけ約分するミスに注意。</p>
                <p className="mt-2 text-sm">検算：<TextWithMath text="$x=-2+\sqrt3$" /> を代入 → <TextWithMath text="$(7-4\sqrt3)+(-8+4\sqrt3)+1=0$" /> ✓</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 教室の数と参加人数（1次方程式）",
      knowledge: ["1次方程式の立式", "過不足の問題", "式の展開と整理"],
      originalText: (
        <div className="space-y-2">
          <p>ある高校では、中学生を対象に一日体験学習を各教室で実施することにした。使用できる教室の数と参加者の人数は決まっている。1つの教室に入る参加者を15人ずつにすると、34人が教室に入れない。また、1つの教室に入る参加者を20人ずつにすると、14人の教室が1つだけでき、さらに使用しない教室が1つできる。</p>
          <p>このとき、使用できる教室の数を <TextWithMath text="$x$" /> として方程式をつくり、使用できる教室の数を求めなさい。ただし、途中の計算も書くこと。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 求めるものを文字で置く',
          content: <p>文章題の基本は、求めたいものを文字で置くことです。問題文の指定を確認しましょう。</p>,
          quiz: {
            type: 'choice',
            question: '今回の問題で「x」と置くべきものはどれ？',
            options: ['参加者の合計人数', '使用できる教室の数', '余った生徒の人数'],
            correctAnswer: '使用できる教室の数',
            explanation: <p>問題文に「使用できる教室の数を <TextWithMath text="$x$" /> として」と指定されています。参加者の人数は、2通りの式で表してイコールで結びます。</p>
          }
        },
        {
          id: 2, title: '② 15人ずつのときの参加者数',
          content: (
            <p className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800"><strong>条件A：</strong>1つの教室に15人ずつ入れると、34人が入れない。</p>
          ),
          quiz: {
            type: 'choice',
            question: '条件Aから参加者の総数を表した式は？',
            options: ['15x − 34', '15x + 34', '34x + 15'],
            correctAnswer: '15x + 34',
            explanation: <p>教室に入れた <TextWithMath text="$15x$" /> 人と、入れなかった34人の合計なので <TextWithMath text="$15x+34$" /> 人です。</p>
          }
        },
        {
          id: 3, title: '③ 20人ずつのときの参加者数',
          content: (
            <div className="space-y-3">
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800"><strong>条件B：</strong>20人ずつにすると、14人の教室が1つでき、使用しない教室が1つできる。</p>
              <p>全部で <TextWithMath text="$x$" /> 室。「14人の教室」と「空の教室」を除くと、20人ちょうどの教室はいくつでしょう？</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '条件Bから参加者の総数を表した式は？',
            options: ['20(x − 2) + 14', '20x − 14', '20(x − 1) + 14'],
            correctAnswer: '20(x − 2) + 14',
            explanation: (
              <div>
                <p>20人の教室は <TextWithMath text="$(x-2)$" /> 室。そこに14人の教室の分を足します。空の教室を引き忘れると <TextWithMath text="$20(x-1)+14$" /> になってしまいます。</p>
                <MathText block math="20(x-2)+14 = 20x-26" />
              </div>
            )
          }
        },
        {
          id: 4, title: '④ 方程式を解く',
          content: <MathText block math="15x + 34 = 20x - 26" />,
          quiz: {
            type: 'choice',
            question: 'x（教室の数）はいくつ？',
            options: ['x = 10', 'x = 12', 'x = 14'],
            correctAnswer: 'x = 12',
            explanation: (
              <div>
                <MathText block math="15x - 20x = -26 - 34" />
                <MathText block math="-5x = -60 \quad\Rightarrow\quad x = 12" />
              </div>
            )
          }
        },
        {
          id: 5, title: '⑤ 検算する',
          content: <p>教室が12室のときの人数を、2つの条件で計算して一致するか確かめます。</p>,
          quiz: {
            type: 'choice',
            question: '教室が12室のとき、参加者は何人？',
            options: ['180人', '200人', '214人'],
            correctAnswer: '214人',
            explanation: (
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>条件A：<TextWithMath text="$15\times12+34 = 214$" /> 人</li>
                  <li>条件B：10室×20人＋14人＝214人（残り1室は空）</li>
                </ul>
                <p className="mt-2 font-bold">一致したので、答えは <strong>12室</strong>。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 99をたしても各位の和が変わらない証明",
      knowledge: ["3けたの数の文字式 100a+10b+c", "位取りと繰り上がり・繰り下がり"],
      originalText: (
        <div className="space-y-3">
          <p>次の先生と生徒の会話文を読んで、生徒が完成させた【証明】の ① から ⑤ に当てはまる数や式をそれぞれ答えなさい。</p>
          <div className="pl-3 border-l-4 border-slate-300 dark:border-slate-600 space-y-1 text-slate-600 dark:text-slate-300">
            <p><strong>先生</strong>「一の位が0でない900未満の3けたの自然数をMとし、Mに99をたしてできる自然数をNとすると、Mの各位の数の和とNの各位の数の和は同じ値になるという性質があります。例として583で確かめてみましょう。」</p>
            <p><strong>生徒</strong>「583の各位の数の和は 5+8+3=16 です。583に99をたすと682となるので、各位の数の和は 6+8+2=16 で同じ値になりました。」</p>
            <p><strong>先生</strong>「そうですね。それでは、Mの百の位、十の位、一の位の数をそれぞれ <TextWithMath text="$a, b, c$" /> として、この性質を証明してみましょう。<TextWithMath text="$a, b, c$" /> のとりうる値の範囲に気をつけて、MとNをそれぞれ <TextWithMath text="$a, b, c$" /> を用いて表すとどうなりますか。」</p>
            <p><strong>生徒</strong>「Mは表せそうですが、NはM+99で…、各位の数がうまく表せません。」</p>
            <p><strong>先生</strong>「99を 100−1 におきかえて考えてみましょう。」</p>
          </div>
          <div className="border border-slate-400 p-3 bg-slate-50 dark:bg-slate-800 space-y-1">
            <p className="font-bold">【証明】</p>
            <p>3けたの自然数Mの百の位、十の位、一の位の数をそれぞれ <TextWithMath text="$a,b,c$" /> とすると、<TextWithMath text="$a$" /> は1以上8以下の整数、<TextWithMath text="$b$" /> は0以上9以下の整数、<TextWithMath text="$c$" /> は1以上9以下の整数となる。</p>
            <p>このとき、M ＝ ［①］× <TextWithMath text="$a$" /> ＋［②］× <TextWithMath text="$b$" /> ＋ <TextWithMath text="$c$" /> と表せる。</p>
            <p>また、N＝M＋99 より</p>
            <p>N ＝［①］× <TextWithMath text="$a$" /> ＋［②］× <TextWithMath text="$b$" /> ＋ <TextWithMath text="$c$" /> ＋ 100 − 1 となるから</p>
            <p>N ＝［①］×（［③］）＋［②］×［④］＋［⑤］となり、</p>
            <p>Nの百の位の数は［③］、十の位の数は［④］、一の位の数は［⑤］となる。</p>
            <p>よって、Mの各位の数の和とNの各位の数の和はそれぞれ <TextWithMath text="$a+b+c$" /> となり、同じ値になる。</p>
          </div>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 3けたの数を文字で表す（①②）',
          content: <p>583 ＝ 100×5 ＋ 10×8 ＋ 3 のように、各位の数に位の大きさをかけて足します。</p>,
          quiz: {
            type: 'choice',
            question: '①、②に当てはまる数の組は？',
            options: ['① 100、② 10', '① 10、② 1', '① 3、② 2'],
            correctAnswer: '① 100、② 10',
            explanation: <p><TextWithMath text="$M = 100a + 10b + c$" /> です。<TextWithMath text="$abc$" /> と並べて書くと「かけ算」の意味になってしまうので注意。</p>
          }
        },
        {
          id: 2, title: '② 100 を百の位にまとめる（③）',
          content: (
            <div>
              <p>「＋100」は百の位を1つ増やすこと、「−1」は一の位を1つ減らすことです。</p>
              <MathText block math="N = 100a + 100 + 10b + c - 1" />
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '100a + 100 を 100×(　) の形にすると、③に入る式は？',
            options: ['a + 1', 'a + 100', 'a − 1'],
            correctAnswer: 'a + 1',
            explanation: <p><TextWithMath text="$100a+100 = 100(a+1)$" />。③は <strong><TextWithMath text="$a+1$" /></strong> です。</p>
          }
        },
        {
          id: 3, title: '③ 十の位と一の位（④⑤）',
          content: <MathText block math="N = 100(a+1) + 10 \times \boxed{\text{④}} + \boxed{\text{⑤}}" />,
          quiz: {
            type: 'choice',
            question: '④、⑤に当てはまる式の組は？',
            options: ['④ b、⑤ c − 1', '④ b − 1、⑤ c', '④ b + 1、⑤ c − 1'],
            correctAnswer: '④ b、⑤ c − 1',
            explanation: <p>十の位はそのまま <TextWithMath text="$b$" />、一の位は <TextWithMath text="$c-1$" /> です。<TextWithMath text="$N = 100(a+1)+10b+(c-1)$" /></p>
          }
        },
        {
          id: 4, title: '④ 範囲の条件が効いている理由',
          content: <p>③④⑤が本当に「各位の数」になるには、それぞれ0〜9の整数でなければいけません。問題の条件「900未満」「一の位が0でない」が何を保証しているか考えましょう。</p>,
          quiz: {
            type: 'choice',
            question: '「一の位が0でない（c ≧ 1）」という条件が必要な理由は？',
            options: ['c − 1 が 0 以上になり、一の位の数として使えるから', 'a + 1 が 9 以下になるから', 'b が 0 になってしまうから'],
            correctAnswer: 'c − 1 が 0 以上になり、一の位の数として使えるから',
            explanation: <p><TextWithMath text="$c=0$" /> だと <TextWithMath text="$c-1=-1$" /> となり位の数になりません。同様に「900未満（<TextWithMath text="$a\leqq8$" />）」だから <TextWithMath text="$a+1\leqq9$" /> で百の位に収まります。</p>
          }
        },
        {
          id: 5, title: '⑤ 具体例で検算する',
          content: <p>583（<TextWithMath text="$a=5,b=8,c=3$" />）で ③④⑤ を計算してみましょう。</p>,
          quiz: {
            type: 'choice',
            question: '③④⑤ に a=5, b=8, c=3 を入れると、どんな数が並ぶ？',
            options: ['6, 8, 2', '5, 8, 2', '6, 7, 3'],
            correctAnswer: '6, 8, 2',
            explanation: (
              <div>
                <p><TextWithMath text="$a+1=6,\ b=8,\ c-1=2$" />。583＋99＝682 と一致します。</p>
                <p className="mt-2 font-bold">答え：① 100　② 10　③ <TextWithMath text="$a+1$" />　④ <TextWithMath text="$b$" />　⑤ <TextWithMath text="$c-1$" /></p>
                <p className="mt-1 text-sm">各位の和：<TextWithMath text="$(a+1)+b+(c-1) = a+b+c$" /></p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
