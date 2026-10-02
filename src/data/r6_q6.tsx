import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q6Data: MajorQuestionData = {
  id: "q6",
  title: "令和6年 大問6：新幹線とタクシー（実生活への応用）",
  subs: [
    {
      id: "1",
      title: "新幹線とタクシーの乗車人数",
      knowledge: ['文字式の利用', '規則性の発見', '方程式の立式と解法', '最大値と最小値の考え方'],
      originalText: (
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <p>
            ある市のA中学校とB中学校は修学旅行でそれぞれX市を訪問する。各中学校とも、横一列に生徒が5人ずつ座ることができる新幹線でX市へ向かい、到着後、1台に生徒が4人ずつ乗ることができるタクシーで班別行動を行う。
          </p>
          <p className="pl-4 border-l-4 border-slate-300 dark:border-slate-600 my-4 text-slate-600 dark:text-slate-400">
            <strong>生徒</strong>「必要な新幹線の座席の列数を <TextWithMath text="$n$" /> とすると、生徒の参加人数は（ <strong>①</strong> ）<TextWithMath text="$+ a$" /> と表せます。ただし、<TextWithMath text="$n$" /> は自然数、<TextWithMath text="$a$" /> は1から5までのいずれかの自然数です。」<br /><br />
            <strong>先生</strong>「そうですね。次に、必要なタクシーの台数を <TextWithMath text="$n$" /> を用いて表してみましょう。」<br /><br />
            <strong>生徒</strong>「台数の値は、列数の値より10大きいから、<TextWithMath text="$n + 10$" /> と表せます。」<br /><br />
            <strong>先生</strong>「では、タクシーの台数から、生徒の参加人数を <TextWithMath text="$n$" /> と1から4までの自然数 <TextWithMath text="$b$" /> を用いて表すこともできますね。これらの2つの式を使うと、考えられる生徒の参加人数のうち、最も少ない生徒の参加人数は何人ですか。」<br /><br />
            <strong>生徒</strong>「必要な新幹線の座席の列数は <TextWithMath text="$n =$" /> （ <strong>②</strong> ）と表すことができるので、<TextWithMath text="$a$" /> と <TextWithMath text="$b$" /> の値を考えると、最も少ない生徒の参加人数は（ <strong>③</strong> ）人です。」
          </p>
          <p>次の①、②、③に当てはまる式や数をそれぞれ答えなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1,
          title: 'ステップ1：新幹線とタクシーの定員ルールの確認',
          content: (
            <div className="space-y-4">
              <p>まずは「新幹線」と「タクシー」にそれぞれ何人乗れるのか、定員ルールを確認します。</p>
              <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
                <li><strong>新幹線</strong>：1列に<strong>5人</strong>まで座れる</li>
                <li><strong>タクシー</strong>：1台に<strong>4人</strong>まで乗れる</li>
              </ul>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'もし生徒が23人の場合、新幹線は何列必要になるでしょうか？',
            options: ['4列', '5列', '6列'],
            correctAnswer: '5列',
            explanation: (
              <p>
                正解です！<TextWithMath text="$23 \div 5 = 4$" /> 余り <TextWithMath text="$3$" /> なので、4列だと3人が座れません。全員が座るには<strong>5列</strong>必要になりますね。
              </p>
            )
          }
        },
        {
          id: 2,
          title: 'ステップ2：新幹線の「最後の1列」の考え方',
          content: (
            <div className="space-y-4">
              <p>
                必要な新幹線の列数を <TextWithMath text="$n$" /> とします。
                全員が乗るのに <TextWithMath text="$n$" /> 列必要だということは、「最初から何列目までは5人全員が座っていて、最後の列だけは1人〜5人の誰かが座っている」という状況です。
              </p>
              <p>
                最後の列に座っている人数が、問題文にある <TextWithMath text="$a$" /> (1から5の自然数) です。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '全部で n 列あるうち、5人が完全に座っている「満席の列」はいくつあるでしょうか？',
            options: ['n 列', 'n - 1 列', 'n + 1 列'],
            correctAnswer: 'n - 1 列',
            explanation: (
              <p>
                その通り！最後の1列を除いた <strong><TextWithMath text="$n - 1$" /></strong> 列が、5人で完全に埋まっている列になります。
              </p>
            )
          }
        },
        {
          id: 3,
          title: 'ステップ3：生徒数を表す式①の完成',
          content: (
            <div className="space-y-4">
              <p>
                それでは、新幹線の情報から生徒の合計人数を式で表してみましょう。
                生徒数は、「満席になっている列に座っている人数」と「最後の1列に座っている人数（<TextWithMath text="$a$" />人）」の合計です。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '「満席になっている (n-1) 列の人数」と「最後の列の a 人」を合わせた、全体の人数を表す式はどれですか？',
            options: ['5n + a', '5(n - 1) + a', '5(n + 1) + a'],
            correctAnswer: '5(n - 1) + a',
            explanation: (
              <p>
                素晴らしい！これが空欄 <strong>①</strong> の答えです。<br />
                満席の列が <TextWithMath text="$(n-1)$" /> 列あるので、そこには <TextWithMath text="$5 \times (n-1)$" /> 人います。それに最後の列の <TextWithMath text="$a$" /> 人を足して <strong><TextWithMath text="$5(n-1) + a$" /></strong> となります。
              </p>
            )
          }
        },
        {
          id: 4,
          title: 'ステップ4：タクシーの台数を n で表す',
          content: (
            <div className="space-y-4">
              <p>
                今度はタクシーについて考えます。問題文には<strong>「タクシーの台数の値が、列数の値より10大きい」</strong>とあります。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '新幹線の列数が n のとき、タクシーの台数はどのように表せますか？',
            options: ['10n', 'n + 10', 'n - 10'],
            correctAnswer: 'n + 10',
            explanation: (
              <p>
                正解です！列数 <TextWithMath text="$n$" /> に10を足して <strong><TextWithMath text="$n + 10$" /></strong> 台になります。
              </p>
            )
          }
        },
        {
          id: 5,
          title: 'ステップ5：タクシーの「最後の1台」の考え方',
          content: (
            <div className="space-y-4">
              <p>
                タクシーも新幹線と同じように考えます。
                全部で <TextWithMath text="$n+10$" /> 台のタクシーがあり、最後の1台には <TextWithMath text="$b$" /> 人（1から4の自然数）が乗っています。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '全 n+10 台のうち、4人が完全に定員まで乗っている「満車」のタクシーは何台でしょうか？',
            options: ['n + 10 台', 'n + 9 台', 'n + 8 台'],
            correctAnswer: 'n + 9 台',
            explanation: (
              <p>
                正解です！全体の台数 <TextWithMath text="$(n+10)$" /> から、最後の1台を引くので、満車のタクシーは <strong><TextWithMath text="$n + 9$" /></strong> 台になります。
              </p>
            )
          }
        },
        {
          id: 6,
          title: 'ステップ6：生徒数を表す式（タクシー版）の完成',
          content: (
            <div className="space-y-4">
              <p>
                タクシーの情報から、生徒の合計人数を式で表してみましょう。
                生徒数は、「満車になっているタクシーに乗っている人数」と「最後の1台に乗っている人数（<TextWithMath text="$b$" />人）」の合計です。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '生徒数をタクシー側から計算した式はどれになりますか？',
            options: ['4(n + 10) + b', '4(n + 9) + b', '4n + 9 + b'],
            correctAnswer: '4(n + 9) + b',
            explanation: (
              <p>
                完璧です！満車のタクシー <TextWithMath text="$(n+9)$" /> 台にはそれぞれ4人乗っているので <TextWithMath text="$4(n+9)$" /> 人。それに最後の1台の <TextWithMath text="$b$" /> 人を足して <strong><TextWithMath text="$4(n+9) + b$" /></strong> となります。
              </p>
            )
          }
        },
        {
          id: 7,
          title: 'ステップ7：2つの式を方程式にする',
          content: (
            <div className="space-y-4">
              <p>
                ここまでで、新幹線から求めた生徒数 <TextWithMath text="$5(n-1) + a$" /> と、タクシーから求めた生徒数 <TextWithMath text="$4(n+9) + b$" /> の2つの式ができました。
              </p>
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors">
                どちらも<strong>「同じ参加人数の生徒」</strong>を表しているので、この2つの式は等しいことになります。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'この2つの式から方程式を作るとどうなりますか？',
            options: [
              '5(n-1) + a + 4(n+9) + b = 0',
              '5(n-1) + a = 4(n+9) + b',
              '5(n-1) - a = 4(n+9) - b'
            ],
            correctAnswer: '5(n-1) + a = 4(n+9) + b',
            explanation: (
              <p>その通りです！2つの式をイコールで結ぶだけで方程式の完成です。</p>
            )
          }
        },
        {
          id: 8,
          title: 'ステップ8：方程式を解いて②を求める',
          content: (
            <div className="space-y-4">
              <p>
                作った方程式 <TextWithMath text="$5(n-1) + a = 4(n+9) + b$" /> を計算して、<TextWithMath text="$n =$" /> の形に変形しましょう。
              </p>
              <div className="text-center my-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg transition-colors">
                <MathText block math="5n - 5 + a = 4n + 36 + b" />
                <p className="text-sm mt-2 text-slate-500">nの項を左辺に、それ以外を右辺に移行します。</p>
                <MathText block math="5n - 4n = 36 + 5 + b - a" />
              </div>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '計算を進めると、n はどのように表せますか？',
            options: ['n = 41 + b - a', 'n = 31 + a - b', 'n = 41 + a + b'],
            correctAnswer: 'n = 41 + b - a',
            explanation: (
              <p>
                大正解！これが空欄 <strong>②</strong> の答えです。列数 <TextWithMath text="$n$" /> が <TextWithMath text="$a$" /> と <TextWithMath text="$b$" /> を使って見事に表せました。
              </p>
            )
          }
        },
        {
          id: 9,
          title: 'ステップ9：生徒数を最小にする条件を考える',
          content: (
            <div className="space-y-4">
              <p>
                いよいよ大詰めです。「最も少ない生徒の参加人数」を求めます。
                生徒数が一番少なくなるのは、当然「新幹線の列数 <TextWithMath text="$n$" />」が一番少なくなるときですね。
              </p>
              <p>
                <TextWithMath text="$n = 41 + b - a$" /> において、<TextWithMath text="$n$" /> の値をできるだけ小さくしたいです。<br />
                そのためには、引く数である <TextWithMath text="$a$" /> をなるべく<strong>大きく</strong>し、足す数である <TextWithMath text="$b$" /> をなるべく<strong>小さく</strong>すればよいことになります。
              </p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'a (1から5の自然数) と b (1から4の自然数) をそれぞれいくつにすれば、n は最小になりますか？',
            options: ['a=1, b=4', 'a=5, b=1', 'a=5, b=4'],
            correctAnswer: 'a=5, b=1',
            explanation: (
              <p>
                正解です！引く数である <TextWithMath text="$a$" /> を最大の 5 にし、足す数である <TextWithMath text="$b$" /> を最小の 1 にすると、計算結果 <TextWithMath text="$n$" /> は最も小さくなります。
              </p>
            )
          }
        },
        {
          id: 10,
          title: 'ステップ10：最小の生徒数③を計算する',
          content: (
            <div className="space-y-4">
              <p>
                <TextWithMath text="$a=5, b=1$" /> のときの列数 <TextWithMath text="$n$" /> を計算し、そこから生徒の参加人数を求めましょう。
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li><TextWithMath text="$n = 41 + 1 - 5 = 37$" />（列）</li>
                <li>生徒数を求める式：<TextWithMath text="$5(n-1) + a$" /></li>
              </ul>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'n=37, a=5 を生徒数の式に代入して計算すると、最も少ない生徒の参加人数は何人になりますか？',
            options: ['180人', '185人', '190人'],
            correctAnswer: '185人',
            explanation: (
              <div className="space-y-2 mt-4 text-left">
                <MathText block math="5 \times (37-1) + 5 = 5 \times 36 + 5 = 180 + 5 = 185" />
                <p className="font-bold text-lg text-emerald-700 dark:text-emerald-400">大正解！空欄③は「185」です。</p>
                <p className="text-sm">ちなみにタクシーの式 <TextWithMath text="$4(37+9) + 1$" /> で計算しても <TextWithMath text="$4 \times 46 + 1 = 184 + 1 = 185$" /> となり一致しますね。</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
