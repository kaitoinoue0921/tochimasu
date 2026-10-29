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
  title: "大問5-1：走る・休む・走る のグラフ（年度不明）",
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
      knowledge: ["1次関数の利用", "連立方程式", "速さ"],
      originalText: <div>{intro}<p>(3)　学校にいたBさんは、Aさんが休憩をやめて再び走り始めたあとに、学校を出発した。Bさんは、分速200mでAさんと同じ道を通って公園に向かって走ったところ、途中でAさんを追い抜き、Aさんより3分早く公園に到着した。このとき、BさんがAさんを追い抜いたのは、Aさんが学校を出発してから何分後か。</p></div>,
      steps: [
        {
          id: 1, title: '① Bさんが公園に着く時刻',
          content: <p>Aさんは <TextWithMath text="$x=28$" /> で公園に着きます。Bさんはそれより3分早く着きます。</p>,
          quiz: {
            type: 'choice',
            question: 'Bさんが公園に着くのは、Aさんの出発から何分後？',
            options: ['25分後', '31分後', '11分後'],
            correctAnswer: '25分後',
            explanation: <p>28 − 3 ＝ 25（分後）。</p>
          }
        },
        {
          id: 2, title: '② Bさんが出発した時刻',
          content: <p>Bさんは分速200mで2200m走るので、かかる時間は 2200 ÷ 200 ＝ 11（分）です。</p>,
          quiz: {
            type: 'choice',
            question: 'Bさんが出発したのは、Aさんの出発から何分後？',
            options: ['14分後', '17分後', '11分後'],
            correctAnswer: '14分後',
            explanation: <p>25 − 11 ＝ 14（分後）。Aさんが走り始めた12分後より後なので問題に合います。</p>
          }
        },
        {
          id: 3, title: '③ Bさんのグラフの式',
          content: <p>Bさんは (14, 0) を出発し、傾きは200です。<TextWithMath text="$y=200x+b$" /> に (14, 0) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'Bさんの式は？',
            options: ['y = 200x − 2800', 'y = 200x − 2200', 'y = 200x + 2800'],
            correctAnswer: 'y = 200x − 2800',
            explanation: <p><TextWithMath text="$0=200\times14+b$" /> より <TextWithMath text="$b=-2800$" />。x＝25 で 5000 − 2800 ＝ 2200 と合います。</p>
          }
        },
        {
          id: 4, title: '④ 追い抜く点（2直線の交点）',
          content: <p>Aさんは <TextWithMath text="$y=100x-600$" />、Bさんは <TextWithMath text="$y=200x-2800$" /> です。追い抜く点は2つのグラフの交点なので、y を等しくおきます。</p>,
          quiz: {
            type: 'choice',
            question: '追い抜いたのは、Aさんの出発から何分後？',
            options: ['22分後', '20分後', '25分後'],
            correctAnswer: '22分後',
            explanation: <div><SpeedGraphFig withB /><p><TextWithMath text="$100x-600=200x-2800$" /> より <TextWithMath text="$100x=2200$" />、<TextWithMath text="$x=22$" />。答えは22分後です。</p></div>
          }
        }
      ]
    }
  ]
};
