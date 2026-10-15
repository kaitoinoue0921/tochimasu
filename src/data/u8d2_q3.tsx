import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { DieNetFig } from './u8d2_figs';

const intro = (
  <div className="space-y-2">
    <p>右の図のような展開図になるさいころがある。太郎さんと花子さんは、このさいころを2回投げる。次の2人の会話文を読み、問題に答えよ。ただし、このさいころはどの面が出ることも同様に確からしいものとする。</p>
    <DieNetFig />
    <div className="pl-3 border-l-4 border-slate-300 dark:border-slate-600 space-y-1 text-slate-600 dark:text-slate-300">
      <p>太郎：「1」の面が1つ、「2」の面が2つ、「3」の面が3つあるね。このさいころを2回投げるときを考えるんだね。</p>
      <p>花子：どの面とどの面の組合せが一番出やすいかな。</p>
      <p>太郎：「3」の面が3面あるから、2回とも「3」の面になる組合せが一番出やすいと思うよ。</p>
      <p>花子：私は、「3」の面と「2」の面が1回ずつになる組合せが一番出やすいと思うよ。</p>
    </div>
  </div>
);

export const q3Data: MajorQuestionData = {
  id: "q3",
  title: "宇短大附属 R8(5日) 大問3：目の数が偏ったさいころの確率",
  subs: [
    {
      id: "1",
      title: "1. 2回とも「3」が出る確率",
      knowledge: ["確率", "同様に確からしい", "表による数え上げ"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">1　2回とも「3」の面が出る確率を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 6つの面を区別する',
          content: <p>同じ数字の面でも別々の面として区別すると、どの面も同様に確からしくなります。1回目6通り、2回目6通りです。</p>,
          quiz: {
            type: 'choice',
            question: '2回投げたときの出方は全部で何通り？',
            options: ['36通り', '9通り', '6通り'],
            correctAnswer: '36通り',
            explanation: <p><TextWithMath text="$6\times6=36$" /> 通りです。数字だけで「1,2,3の3種類×3種類＝9通り」と数えると、それぞれの起こりやすさが違うので確率の計算に使えません。</p>
          }
        },
        {
          id: 2, title: '② 2回とも「3」の出方を数える',
          content: <p>「3」の面は3つあります。</p>,
          quiz: {
            type: 'choice',
            question: '2回とも「3」が出る確率は？',
            options: ['1/4', '1/9', '1/2'],
            correctAnswer: '1/4',
            explanation: <p>出方は <TextWithMath text="$3\times3=9$" /> 通りなので、<TextWithMath text="$\dfrac{9}{36}=\dfrac14$" /> です。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 「3」と「2」が1回ずつ出る確率",
      knowledge: ["確率", "順番の区別"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">2　「3」の面と「2」の面が1回ずつ出る確率を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 1回目3、2回目2 の場合',
          content: <p>「3」の面は3つ、「2」の面は2つです。</p>,
          quiz: {
            type: 'choice',
            question: '1回目が「3」、2回目が「2」になる出方は何通り？',
            options: ['6通り', '5通り', '1通り'],
            correctAnswer: '6通り',
            explanation: <p><TextWithMath text="$3\times2=6$" /> 通りです。</p>
          }
        },
        {
          id: 2, title: '② 順番が逆の場合もたす',
          content: <p>1回目が「2」、2回目が「3」の場合も「1回ずつ」にふくまれます。</p>,
          quiz: {
            type: 'choice',
            question: '「3」と「2」が1回ずつ出る確率は？',
            options: ['1/3', '1/6', '5/36'],
            correctAnswer: '1/3',
            explanation: <p>逆の順番も <TextWithMath text="$2\times3=6$" /> 通りあるので合計12通り。<TextWithMath text="$\dfrac{12}{36}=\dfrac13$" /> です。片方の順番だけ数えると <TextWithMath text="$\dfrac16$" /> になってしまいます。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. どちらの主張が正しいか",
      knowledge: ["確率の比較", "すべての組合せの確率"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">3　次の文が正しくなるように、オ、カにあてはまる適切なものを以下の選択肢からそれぞれ1つ選び、番号で答えよ。</p>
          <p>2回とも「3」の面が出る確率と「3」の面と「2」の面が1回ずつ出る確率を比べると、［オ］。他の面の組合せも考えると、［カ］といえる。</p>
          <p>オの選択肢</p>
          <ol className="list-decimal list-inside">
            <li>2回とも「3」の面が出る確率が大きい</li>
            <li>「3」の面と「2」の面が1回ずつ出る確率が大きい</li>
            <li>どちらの確率も等しい</li>
          </ol>
          <p>カの選択肢</p>
          <ol className="list-decimal list-inside">
            <li>太郎さんの主張と花子さんの主張のどちらも正しい</li>
            <li>太郎さんの主張は正しいが、花子さんの主張は正しくない</li>
            <li>花子さんの主張は正しいが、太郎さんの主張は正しくない</li>
            <li>太郎さんの主張と花子さんの主張のどちらも正しくない</li>
          </ol>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 2つの確率を比べる（オ）',
          content: <p>1と2の答えを比べます。分母を36にそろえると比べやすくなります。</p>,
          quiz: {
            type: 'choice',
            question: 'オにあてはまるのは？',
            options: ['「3」と「2」が1回ずつ出る確率が大きい', '2回とも「3」が出る確率が大きい', 'どちらの確率も等しい'],
            correctAnswer: '「3」と「2」が1回ずつ出る確率が大きい',
            explanation: <p>2回とも「3」は <TextWithMath text="$\dfrac{9}{36}$" />、「3」と「2」が1回ずつは <TextWithMath text="$\dfrac{12}{36}$" /> なので、後者が大きくなります。オは選択肢2です。</p>
          }
        },
        {
          id: 2, title: '② 残りの組合せも調べる',
          content: (
            <div>
              <p>ほかの組合せ（36通り中）も数えてみます。</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>1と1：1通り</li>
                <li>2と2：4通り</li>
                <li>1と2（1回ずつ）：<TextWithMath text="$1\times2\times2=4$" /> 通り</li>
                <li>1と3（1回ずつ）：<TextWithMath text="$1\times3\times2=6$" /> 通り</li>
              </ul>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '一番出やすい組合せは？',
            options: ['「3」と「2」が1回ずつ', '2回とも「3」', '「1」と「3」が1回ずつ'],
            correctAnswer: '「3」と「2」が1回ずつ',
            explanation: <p>1+4+4+6+9+12＝36 で全部そろっています。最大は「3」と「2」が1回ずつの12通りです。</p>
          }
        },
        {
          id: 3, title: '③ 主張を判定する（カ）',
          content: <p>太郎さんは「2回とも3」、花子さんは「3と2が1回ずつ」が一番出やすいと言っていました。</p>,
          quiz: {
            type: 'choice',
            question: 'カにあてはまるのは？',
            options: ['花子さんは正しいが、太郎さんは正しくない', '太郎さんは正しいが、花子さんは正しくない', 'どちらも正しい'],
            correctAnswer: '花子さんは正しいが、太郎さんは正しくない',
            explanation: <p>一番出やすいのは「3」と「2」が1回ずつなので、花子さんの主張だけが正しいです。答えはオが2、カが3です。順番を入れかえた出方も数に入るため、面の数が多い「3」どうしより確率が大きくなるのがポイントです。</p>
          }
        }
      ]
    }
  ]
};
