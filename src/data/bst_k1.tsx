import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { SpeedGraphFig } from './bst_figs';

const intro = (
  <div className="space-y-2">
    <p>Aさんの学校から公園までの道のりは2200mである。Aさんは学校を出発し、分速150mで走り始めた。途中で一度立ち止まって休憩したあと、再び一定の速さで走り、公園に到着した。</p>
    <p>下の図は、Aさんが学校を出発してから <TextWithMath text="$x$" /> 分後に学校から <TextWithMath text="$y$" /> mの地点にいるものとして、<TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をグラフに表したものである。</p>
    <SpeedGraphFig />
  </div>
);

// 問題用紙の写真の大問5（本人が持っていた問題用紙の写真。年度は不明）
export const k1Data: MajorQuestionData = {
  id: "k1",
  title: "大問5-1：走る・休む・走る のグラフ",
  subs: [
    {
      id: "1",
      title: "(1) 休憩した時間",
      knowledge: ["グラフの読み取り", "速さ"],
      originalText: <div>{intro}<p>(1)　Aさんが立ち止まって休憩した時間は何分間か。</p></div>,
      steps: [
        {
          id: 1, title: '① 立ち止まっているのはグラフのどこ？',
          content: <p>立ち止まると、道のりは増えません。グラフでは横ばい（水平）になります。</p>,
          quiz: {
            type: 'choice',
            question: 'グラフの水平な部分は、x がいくつからいくつまで？',
            options: ['4から12まで', '0から4まで', '12から28まで'],
            correctAnswer: '4から12まで',
            explanation: <p>最初は分速150mで600m走るので、600 ÷ 150 ＝ 4（分）。そこから <TextWithMath text="$x=12$" /> まで 600m のまま横ばいです。</p>
          }
        },
        {
          id: 2, title: '② 休憩の長さ',
          content: <p>休憩した時間は「休憩が終わった時刻 − 休憩を始めた時刻」です。</p>,
          quiz: {
            type: 'choice',
            question: '休憩した時間は何分間？',
            options: ['8分間', '12分間'],
            correctAnswer: '8分間',
            explanation: <p>12 − 4 ＝ 8（分間）。12分は「出発から休憩が終わるまで」で、休憩の長さではありません。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "(2) 12≦x≦28 のときの式",
      knowledge: ["1次関数", "傾きと切片"],
      originalText: <div>{intro}<p>(2)　<TextWithMath text="$x$" /> の変域が <TextWithMath text="$12\leqq x\leqq 28$" /> のとき、<TextWithMath text="$y$" /> を <TextWithMath text="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
      steps: [
        {
          id: 1, title: '① 式の形',
          content: <p>この部分は直線なので、<TextWithMath text="$y=ax+b$" /> とおけます。通る2点を読み取ります。</p>,
          quiz: {
            type: 'choice',
            question: 'グラフが通る2点は？',
            options: ['(12, 600) と (28, 2200)', '(4, 600) と (28, 2200)', '(12, 0) と (28, 2200)'],
            correctAnswer: '(12, 600) と (28, 2200)',
            explanation: <p>休憩が終わる点が (12, 600)、公園に着く点が (28, 2200) です。</p>
          }
        },
        {
          id: 2, title: '② 傾き（再び走る速さ）',
          content: <p>傾き ＝ （y の増加量）÷（x の増加量）。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['100', '150', '1600'],
            correctAnswer: '100',
            explanation: <p>(2200 − 600) ÷ (28 − 12) ＝ 1600 ÷ 16 ＝ 100。分速100mで走っています。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><TextWithMath text="$y=100x+b$" /> に (12, 600) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = 100x − 600', 'y = 100x + 600', 'y = 100x − 1200'],
            correctAnswer: 'y = 100x − 600',
            explanation: <p><TextWithMath text="$600=100\times12+b$" /> より <TextWithMath text="$b=-600$" />。x＝28 を代入すると 2800 − 600 ＝ 2200 で合います。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "(3) BさんがAさんを追い抜く時刻",
      knowledge: ["1次関数の式", "連立方程式", "グラフの交点"],
      originalText: <div>{intro}<p>(3)　学校にいたBさんは、Aさんが休憩をやめて再び走り始めたあとに、学校を出発した。Bさんは、分速200mでAさんと同じ道を通って公園に向かって走ったところ、途中でAさんを追い抜き、Aさんより3分早く公園に到着した。このとき、BさんがAさんを追い抜いたのは、Aさんが学校を出発してから何分後か。</p></div>,
      steps: [
        {
          id: 1, title: '① Bさんのグラフが通る点',
          content: (
            <div className="space-y-3">
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-bold mb-1">グラフの問題はこの型で解く（どんな問題でも同じ）</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>直線の式は <TextWithMath text="$y=ax+b$" />。<b>傾き a</b> と <b>通る1点</b> が分かれば決まる</li>
                  <li>傾き a ＝ 速さ（または 増加量 ÷ 増加量）。通る点 ＝ 条件から読む（出発、到着、休憩の終わり…）</li>
                  <li>通る点を <TextWithMath text="$y=ax+b$" /> に代入して <TextWithMath text="$b$" /> を出す</li>
                  <li>「追い抜く・出会う」は2つの式を連立して <TextWithMath text="$x$" /> を求める</li>
                </ol>
              </div>
              <p>この問題は、まずBさんの式が欲しい。Aさんは <TextWithMath text="$x=28$" /> で公園に着くので、Bさんはその3分前に着きます。これで「通る点」が1つ決まります。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'Bさんのグラフが通る点は？',
            options: ['(25, 2200)', '(31, 2200)', '(28, 2200)'],
            correctAnswer: '(25, 2200)',
            explanation: <p>28 − 3 ＝ 25 より、Bさんは <TextWithMath text="$x=25$" /> で公園（2200m）に着きます。</p>
          }
        },
        {
          id: 2, title: '② Bさんのグラフの傾き',
          content: <p>グラフの傾きは、1分あたりに進む道のり、つまり速さです。</p>,
          quiz: {
            type: 'choice',
            question: 'Bさんのグラフの傾きは？',
            options: ['200', '100', '150'],
            correctAnswer: '200',
            explanation: <p>Bさんは分速200mなので傾きは200です（100はAさんの再出発後の速さ）。</p>
          }
        },
        {
          id: 3, title: '③ Bさんの式',
          content: <p>型の③です。傾き200が分かったので <TextWithMath text="$y=200x+b$" /> とおき、通る点 (25, 2200) を代入して <TextWithMath text="$b$" /> を求めます。</p>,
          quiz: {
            type: 'choice',
            question: 'Bさんの式は？',
            options: ['y = 200x − 2800', 'y = 200x − 2200', 'y = 200x + 2800'],
            correctAnswer: 'y = 200x − 2800',
            explanation: <p><TextWithMath text="$2200=200\times25+b$" /> より <TextWithMath text="$b=-2800$" />。<TextWithMath text="$y=0$" /> のとき <TextWithMath text="$x=14$" />（Bさんの出発は14分後で、Aさんが走り出した12分後より後なので問題に合います）。</p>
          }
        },
        {
          id: 4, title: '④ Aさんの式と連立',
          content: <p>型の④です。追い抜く点は2つのグラフの交点です。(2)で求めたAさんの式 <TextWithMath text="$y=100x-600$" /> と、Bさんの式 <TextWithMath text="$y=200x-2800$" /> の <TextWithMath text="$y$" /> を等しくおきます。</p>,
          quiz: {
            type: 'choice',
            question: 'BさんがAさんを追い抜いたのは、Aさんの出発から何分後？',
            options: ['22分後', '20分後', '25分後'],
            correctAnswer: '22分後',
            explanation: <div><SpeedGraphFig withB /><p><TextWithMath text="$100x-600=200x-2800$" /> より <TextWithMath text="$100x=2200$" />、<TextWithMath text="$x=22$" />。そのとき <TextWithMath text="$y=100\times22-600=1600$" />（学校から1600mの地点）です。答えは22分後。</p></div>
          }
        }
      ]
    }
  ]
};
