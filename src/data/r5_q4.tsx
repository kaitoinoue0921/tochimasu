import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { BoxPlotFig } from './r5_figs';

const freqTable = (
  <div className="overflow-x-auto my-3">
    <table className="text-sm border-collapse mx-auto">
      <thead>
        <tr>
          <th className="border border-slate-400 px-3 py-1">階級（秒）</th>
          <th className="border border-slate-400 px-3 py-1">度数（人）</th>
        </tr>
      </thead>
      <tbody>
        {[['14.0以上 〜 16.0未満', 2], ['16.0 〜 18.0', 7], ['18.0 〜 20.0', 8], ['20.0 〜 22.0', 13], ['22.0 〜 24.0', 5]].map(([c, f]) => (
          <tr key={c as string}>
            <td className="border border-slate-400 px-3 py-1">{c}</td>
            <td className="border border-slate-400 px-3 py-1 text-right">{f}</td>
          </tr>
        ))}
        <tr>
          <td className="border border-slate-400 px-3 py-1 text-center font-bold">計</td>
          <td className="border border-slate-400 px-3 py-1 text-right font-bold">35</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const freqIntro = <p>右の表は、あるクラスの生徒35人が水泳の授業で25mを泳ぎ、タイムを計測した結果を度数分布表にまとめたものである。</p>;

const boxIntro = (
  <div>
    <p>下の図は、ある中学校の3年生100人を対象に20点満点の数学のテストを2回実施し、1回目と2回目の得点のデータの分布のようすをそれぞれ箱ひげ図にまとめたものである。</p>
    <BoxPlotFig />
  </div>
);

export const q4Data: MajorQuestionData = {
  id: "q4",
  title: "令和5年 大問4：確率・度数分布・箱ひげ図",
  subs: [
    {
      id: "1",
      title: "1. くじびきで2人を選ぶ確率",
      knowledge: ["組み合わせの数え上げ", "確率 = 当てはまる場合 ÷ 全体"],
      originalText: <p>5人の生徒A、B、C、D、Eがいる。これらの生徒の中から、くじびきで2人を選ぶとき、Dが選ばれる確率を求めなさい。</p>,
      steps: [
        {
          id: 1, title: '① 全部の選び方を数える',
          content: <p>2人の「組」を選ぶので、順番は関係ありません（AとB、BとAは同じ）。</p>,
          quiz: {
            type: 'choice',
            question: '5人から2人を選ぶ選び方は全部で何通り？',
            options: ['10通り', '20通り', '25通り'],
            correctAnswer: '10通り',
            explanation: <p>AB, AC, AD, AE, BC, BD, BE, CD, CE, DE の10通り。20通りは順番を区別してしまったときの数です。</p>
          }
        },
        {
          id: 2, title: '② Dが入る組を数える',
          content: <p>先ほどの10通りのうち、Dをふくむ組を数えます。</p>,
          quiz: {
            type: 'choice',
            question: 'Dが選ばれる組は何通り？',
            options: ['2通り', '4通り', '5通り'],
            correctAnswer: '4通り',
            explanation: <p>AD, BD, CD, DE の4通り（Dの相手は残り4人のだれか）。</p>
          }
        },
        {
          id: 3, title: '③ 確率を求める',
          content: <p>（Dが選ばれる場合）÷（全部の場合）を約分します。</p>,
          quiz: {
            type: 'choice',
            question: 'Dが選ばれる確率は？',
            options: ['2/5', '1/5', '4/5'],
            correctAnswer: '2/5',
            explanation: <p><TextWithMath text="$\frac{4}{10} = \frac{2}{5}$" />。検算：選ばれない確率は「残り4人から2人」＝6通りで <TextWithMath text="$\frac{6}{10}$" />、合わせて1になります。</p>
          }
        }
      ]
    },
    {
      id: "2-1",
      title: "2(1). 累積度数",
      knowledge: ["累積度数"],
      originalText: (
        <div>
          {freqIntro}
          {freqTable}
          <p>(1) 18.0秒以上20.0秒未満の階級の累積度数を求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 累積度数とは？',
          content: <p>累積度数は「最初の階級から、その階級までの度数を全部たしたもの」です。</p>,
          quiz: {
            type: 'choice',
            question: '18.0〜20.0秒の階級の累積度数として、たすべき度数は？',
            options: ['2 + 7 + 8', '8 だけ', '8 + 13 + 5'],
            correctAnswer: '2 + 7 + 8',
            explanation: <p>14.0秒の階級から18.0〜20.0秒の階級までをたします。</p>
          }
        },
        {
          id: 2, title: '② 計算する',
          content: <p>度数を順にたしましょう。</p>,
          quiz: {
            type: 'choice',
            question: '累積度数は？',
            options: ['17人', '8人', '26人'],
            correctAnswer: '17人',
            explanation: <p><TextWithMath text="$2+7+8 = 17$" /> 人。「8人」はその階級の度数そのもの、「26人」は後ろからたしたミスです。</p>
          }
        }
      ]
    },
    {
      id: "2-2",
      title: "2(2). 度数分布表の最頻値",
      knowledge: ["最頻値", "階級値"],
      originalText: (
        <div>
          {freqIntro}
          {freqTable}
          <p>(2) 度数分布表における、最頻値を求めなさい。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 度数が最も多い階級',
          content: <p>度数分布表の最頻値は「度数が最も多い階級」を見つけることから始めます。</p>,
          quiz: {
            type: 'choice',
            question: '度数が最も多い階級は？',
            options: ['18.0〜20.0秒', '20.0〜22.0秒', '22.0〜24.0秒'],
            correctAnswer: '20.0〜22.0秒',
            explanation: <p>13人の 20.0秒以上22.0秒未満 の階級です。</p>
          }
        },
        {
          id: 2, title: '② 階級値を答える',
          content: <p>度数分布表の最頻値は、その階級の「階級値（まん中の値）」で答えます。</p>,
          quiz: {
            type: 'choice',
            question: '最頻値は？',
            options: ['21.0秒', '13人', '20.0秒'],
            correctAnswer: '21.0秒',
            explanation: <p><TextWithMath text="$(20.0+22.0)\div2 = 21.0$" /> 秒。度数の「13」を答えたり、階級の端の値を答えたりするミスに注意。</p>
          }
        }
      ]
    },
    {
      id: "3-1",
      title: "3(1). 箱ひげ図の読み取り",
      knowledge: ["箱ひげ図の読み取り", "範囲と四分位範囲", "中央値"],
      originalText: (
        <div className="space-y-2">
          {boxIntro}
          <p>(1) 箱ひげ図から読み取れることとして正しいことを述べているものを、次のア、イ、ウ、エの中から2つ選び、記号で答えなさい。</p>
          <ul className="list-none pl-2 space-y-1">
            <li>ア　中央値は、1回目よりも2回目の方が大きい。</li>
            <li>イ　最大値は、1回目よりも2回目の方が小さい。</li>
            <li>ウ　範囲は、1回目よりも2回目の方が大きい。</li>
            <li>エ　四分位範囲は、1回目よりも2回目の方が小さい。</li>
          </ul>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 箱ひげ図の見方をおさらい',
          content: <p>箱ひげ図は、最小値・第1四分位数・中央値・第3四分位数・最大値の5つの値で分布を表します。</p>,
          quiz: {
            type: 'choice',
            question: '箱ひげ図の「箱の左端」が表している値は？',
            options: ['最小値', '第1四分位数', '中央値'],
            correctAnswer: '第1四分位数',
            explanation: (
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>左のひげの端：最小値</li>
                <li>箱の左端：第1四分位数</li>
                <li>箱の中の線：中央値（第2四分位数）</li>
                <li>箱の右端：第3四分位数</li>
                <li>右のひげの端：最大値</li>
              </ul>
            )
          }
        },
        {
          id: 2, title: '② 5つの値を読み取る',
          content: <p>図の目盛りは1点ごとです。1回目の5つの値を左から読み取りましょう。</p>,
          quiz: {
            type: 'choice',
            question: '1回目の（最小値, 第1四分位数, 中央値, 第3四分位数, 最大値）は？',
            options: ['(6, 8, 13, 16, 18)', '(8, 10, 14, 16, 20)', '(6, 8, 12, 16, 18)'],
            correctAnswer: '(6, 8, 13, 16, 18)',
            explanation: <p>1回目は 6, 8, 13, 16, 18 点。2回目は <strong>8, 10, 14, 16, 20</strong> 点です。</p>
          }
        },
        {
          id: 3, title: '③ アとイを判定する',
          content: (
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p><strong>ア：</strong>中央値は、1回目よりも2回目の方が大きい。</p>
              <p><strong>イ：</strong>最大値は、1回目よりも2回目の方が小さい。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'アとイのうち、正しいのは？',
            options: ['アだけ正しい', 'イだけ正しい', '両方正しい', '両方まちがい'],
            correctAnswer: 'アだけ正しい',
            explanation: (
              <div className="space-y-1">
                <p><strong>ア ◯：</strong>中央値は 13点 → 14点 で2回目の方が大きい。</p>
                <p><strong>イ ✕：</strong>最大値は 18点 → 20点 で2回目の方が大きい。</p>
              </div>
            )
          }
        },
        {
          id: 4, title: '④ ウとエを判定する',
          content: (
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p><strong>ウ：</strong>範囲は、1回目よりも2回目の方が大きい。</p>
              <p><strong>エ：</strong>四分位範囲は、1回目よりも2回目の方が小さい。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'ウとエのうち、正しいのは？',
            options: ['ウだけ正しい', 'エだけ正しい', '両方正しい', '両方まちがい'],
            correctAnswer: 'エだけ正しい',
            explanation: (
              <div className="space-y-1">
                <p><strong>ウ ✕：</strong>範囲（最大値−最小値）は 1回目 <TextWithMath text="$18-6=12$" />、2回目 <TextWithMath text="$20-8=12$" /> で同じ。</p>
                <p><strong>エ ◯：</strong>四分位範囲（箱の長さ）は 1回目 <TextWithMath text="$16-8=8$" />、2回目 <TextWithMath text="$16-10=6$" /> で2回目の方が小さい。</p>
                <p className="font-bold mt-2">答え：ア、エ</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "3-2",
      title: "3(2). 第1四分位数と実際の得点",
      knowledge: ["四分位数の求め方（データが偶数個）", "中央値は平均になることがある"],
      originalText: (
        <div className="space-y-2">
          {boxIntro}
          <p>(2) 次の文章は、「1回目のテストで8点を取った生徒がいる」ことが正しいとは限らないことを説明したものである。［　　］に当てはまる文を、特定の2人の生徒に着目して書きなさい。</p>
          <div className="border border-slate-400 p-3 bg-slate-50 dark:bg-slate-800">
            箱ひげ図から、1回目の第1四分位数が8点であることがわかるが、8点を取った生徒がいない場合も考えられる。例えば、テストの得点を小さい順に並べたときに、［　　　　　　　　］の場合も、第1四分位数が8点となるからである。
          </div>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 第1四分位数は何番目？',
          content: <p>100人のデータを小さい順に並べると、前半は1〜50番目の50人。第1四分位数は、この前半50人の中央値です。</p>,
          quiz: {
            type: 'choice',
            question: '第1四分位数は、何番目の人の得点で決まる？',
            options: ['25番目だけ', '25番目と26番目の平均', '50番目と51番目の平均'],
            correctAnswer: '25番目と26番目の平均',
            explanation: <p>50人（偶数）の中央値は、まん中の2人＝25番目と26番目の平均です。50番目と51番目は全体の中央値です。</p>
          }
        },
        {
          id: 2, title: '② 8点の人がいなくても平均が8点になる例',
          content: <p>2人の平均が8点になれば第1四分位数は8点。でも2人とも8点である必要はありません。</p>,
          quiz: {
            type: 'choice',
            question: '［　］に当てはまる文として適切なものは？',
            options: [
              '25番目の生徒の得点が7点、26番目の生徒の得点が9点',
              '25番目の生徒の得点が8点、26番目の生徒の得点が8点',
              '50番目の生徒の得点が7点、51番目の生徒の得点が9点'
            ],
            correctAnswer: '25番目の生徒の得点が7点、26番目の生徒の得点が9点',
            explanation: (
              <div className="space-y-2">
                <p><TextWithMath text="$(7+9)\div2 = 8$" /> なので第1四分位数は8点ですが、8点の生徒がいるとは限りません。</p>
                <p className="text-sm">※「6点と10点」なども考えられますが、最小値が6点なので25番目は6点以上、また26番目は中央値13点以下であることに注意。</p>
                <p className="font-bold">答え（例）：25番目の生徒の得点が7点で、26番目の生徒の得点が9点である</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
