import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { MovingTrapezoidFig, GraphChoicesFig } from './u8d2_figs';

const intro = (
  <div className="space-y-2">
    <p>右の図のような台形ABCDがある。点Pは点Aを、点Qは点Bをそれぞれ同時に出発して、Pは秒速1cmで台形の辺上をAからBまで動き、その後、BからCまで動いて止まる。また、Qは秒速1cmで台形の辺上をBからCまで動き、その後、CからDまで動いて止まる。PがAを出発してから <TextWithMath text="$x$" /> 秒後の△APQの面積を <TextWithMath text="$y\ \mathrm{cm}^2$" /> とする。このとき、次の問題に答えよ。</p>
    <p className="text-sm">（AB＝8cm、BC＝4cm、CD＝4cm、∠B＝∠C＝90°）</p>
    <MovingTrapezoidFig />
  </div>
);

export const q4Data: MajorQuestionData = {
  id: "q4",
  title: "宇短大附属 R8(5日) 大問4：台形の辺上を動く点と面積",
  subs: [
    {
      id: "1",
      title: "1. 0≦x≦4 のときの式",
      knowledge: ["動点と面積", "y = ax² の関数"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">1　<TextWithMath text="$0\le x\le4$" /> のとき、<TextWithMath text="$y$" /> を <TextWithMath text="$x$" /> の式で表せ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① P と Q の位置をつかむ',
          content: <p>4秒までは、P は辺AB上、Q は辺BC上にいます。どちらも秒速1cmです。</p>,
          quiz: {
            type: 'choice',
            question: 'x 秒後の AP と BQ の長さは？',
            options: ['AP＝x、BQ＝x', 'AP＝x、BQ＝4−x', 'AP＝8−x、BQ＝x'],
            correctAnswer: 'AP＝x、BQ＝x',
            explanation: <p>Pは Aから、Qは Bから同時に出発するので、どちらも <TextWithMath text="$x$" /> cm 進んでいます。</p>
          }
        },
        {
          id: 2, title: '② 底辺と高さを決めて面積を出す',
          content: <p>AP を底辺とすると、BQ は AB に垂直なので高さになります。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = x²/2', 'y = x²', 'y = 2x'],
            correctAnswer: 'y = x²/2',
            explanation: (
              <div>
                <p><TextWithMath text="$y=\dfrac12\times x\times x=\dfrac12x^2$" /> です。</p>
                <p className="mt-2 text-sm">検算：<TextWithMath text="$x=4$" /> のとき AP＝4、Q＝C で高さ4なので面積8。式でも <TextWithMath text="$\dfrac12\times16=8$" /> です。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 4≦x≦8 のときの式とグラフ",
      knowledge: ["動点と面積", "1次関数", "グラフの読み取り"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">2　<TextWithMath text="$4\le x\le8$" /> のとき、<TextWithMath text="$y$" /> を <TextWithMath text="$x$" /> の式で表せ。また、<TextWithMath text="$x$" /> の変域が <TextWithMath text="$0\le x\le8$" /> のときの <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係を表したグラフとして適切なものを、下の1〜4から1つ選び、番号で答えよ。</p>
          <GraphChoicesFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① Q の位置と高さを考える',
          content: <p>4秒後に Q は C に着き、その後は辺CD上を動きます。CD は AB と平行です。</p>,
          quiz: {
            type: 'choice',
            question: 'Q が CD 上にあるとき、AP を底辺とした△APQ の高さは？',
            options: ['いつも4cm', 'x cm', '(8−x) cm'],
            correctAnswer: 'いつも4cm',
            explanation: <p>CD と AB は平行なので、CD上のどこに Q があっても AB までの距離は BC と同じ4cm です。</p>
          }
        },
        {
          id: 2, title: '② y を x の式で表す',
          content: <p>P はまだ辺AB上（8秒でBに着く）なので、AP＝<TextWithMath text="$x$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '4≦x≦8 のときの式は？',
            options: ['y = 2x', 'y = 4x', 'y = x²/2'],
            correctAnswer: 'y = 2x',
            explanation: <p><TextWithMath text="$y=\dfrac12\times x\times4=2x$" /> です。<TextWithMath text="$x=4$" /> のとき8で、1の答えとつながっています。</p>
          }
        },
        {
          id: 3, title: '③ グラフを選ぶ',
          content: <p>0〜4秒は放物線 <TextWithMath text="$y=\dfrac12x^2$" />、4〜8秒は直線 <TextWithMath text="$y=2x$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '適切なグラフは？',
            options: ['1（放物線のあと右上がりの直線）', '2（放物線のあと右下がりの直線）', '3（直線のあと水平）'],
            correctAnswer: '1（放物線のあと右上がりの直線）',
            explanation: <p>前半は曲線で、後半は増え続ける直線なので1です。8秒のとき面積は16で、この区間ではずっと増え続けます。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 8≦x≦12 で y＝10 となる x",
      knowledge: ["動点と面積", "座標を使った三角形の面積", "1次方程式"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">3　<TextWithMath text="$8\le x\le12$" /> のとき、<TextWithMath text="$y=10$" /> となる <TextWithMath text="$x$" /> の値を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① P と Q の位置をつかむ',
          content: <p>Q は 8秒で D に着いて止まります。P は 8秒で B に着き、そこから辺BC上を上へ動きます。</p>,
          quiz: {
            type: 'choice',
            question: 'x 秒後（8≦x≦12）の BP の長さは？',
            options: ['(x − 8) cm', '(12 − x) cm', 'x cm'],
            correctAnswer: '(x − 8) cm',
            explanation: <p>8秒の時点で B にいて、そこから毎秒1cm 進むので BP＝<TextWithMath text="$x-8$" /> cm です。Q は D に止まっています。</p>
          }
        },
        {
          id: 2, title: '② 台形から余分な三角形をひく',
          content: (
            <div>
              <p>△APD の面積は、台形ABCD から △ABP と △PCD をひいて求めます。台形の面積は <TextWithMath text="$\dfrac12\times(4+8)\times4=24$" /> です。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = 32 − 2x', 'y = 2x − 16', 'y = 24 − 2x'],
            correctAnswer: 'y = 32 − 2x',
            explanation: (
              <div>
                <p>△ABP＝<TextWithMath text="$\dfrac12\times8\times(x-8)=4x-32$" />、△PCD＝<TextWithMath text="$\dfrac12\times4\times(12-x)=24-2x$" /> です。</p>
                <MathText block math="y=24-(4x-32)-(24-2x)=32-2x" />
              </div>
            )
          }
        },
        {
          id: 3, title: '③ y＝10 を解く',
          content: <MathText block math="32-2x=10" />,
          quiz: {
            type: 'choice',
            question: 'x の値は？',
            options: ['x = 11', 'x = 5', 'x = 9'],
            correctAnswer: 'x = 11',
            explanation: (
              <div>
                <p><TextWithMath text="$2x=22$" /> より <TextWithMath text="$x=11$" />。8≦x≦12 の範囲に入っています。</p>
                <p className="mt-2 text-sm">検算：11秒後は BP＝3、PC＝1。△ABP＝12、△PCD＝2 なので <TextWithMath text="$24-12-2=10$" /> です。</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
