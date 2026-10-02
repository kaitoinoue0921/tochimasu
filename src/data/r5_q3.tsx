import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { TriangleABCFig, TrapezoidFig, SquareFig } from './r5_figs';

export const q3Data: MajorQuestionData = {
  id: "q3",
  title: "令和5年 大問3：作図・回転体・合同の証明",
  subs: [
    {
      id: "1",
      title: "1. 30°の角をつくる作図",
      knowledge: ["正三角形の作図（60°）", "角の二等分線の作図"],
      originalText: (
        <div>
          <p>右の図の△ABCにおいて、辺AC上にあり、<TextWithMath text="$\angle ABP = 30^\circ$" /> となる点Pを作図によって求めなさい。ただし、作図には定規とコンパスを使い、また、作図に用いた線は消さないこと。</p>
          <TriangleABCFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 30°をどうやって作る？',
          content: <p>定規とコンパスで直接30°は測れません。作図で作りやすい角を半分にすることを考えます。</p>,
          quiz: {
            type: 'choice',
            question: '30°を作る方法として正しいものは？',
            options: ['正三角形の60°を二等分する', '垂線の90°を三等分する', '分度器で30°を測る'],
            correctAnswer: '正三角形の60°を二等分する',
            explanation: <p>正三角形の1つの角は60°。それを角の二等分線で半分にすれば30°です。角の三等分は定規とコンパスではできません。</p>
          }
        },
        {
          id: 2, title: '② 60°の角をBにつくる',
          content: <p>辺ABを1辺とする正三角形を、点Cと同じ側（上側）にかきます。</p>,
          quiz: {
            type: 'choice',
            question: '正三角形ABQをかく手順として正しいものは？',
            options: [
              'A、Bを中心に半径ABの円をかき、その交点をQとする',
              'Aを中心に半径ACの円をかき、ABとの交点をQとする',
              'ABの垂直二等分線をひき、ABとの交点をQとする'
            ],
            correctAnswer: 'A、Bを中心に半径ABの円をかき、その交点をQとする',
            explanation: <p>QA＝QB＝AB となるので△ABQは正三角形、<TextWithMath text="$\angle ABQ = 60^\circ$" /> です。垂直二等分線とABの交点はABの中点で、角はできません。</p>
          }
        },
        {
          id: 3, title: '③ 60°を二等分してPを決める',
          content: <p>∠ABQ（60°）の二等分線をひき、辺ACとの交点をPとします。</p>,
          quiz: {
            type: 'choice',
            question: '∠ABQ の二等分線の作図手順として正しいものは？',
            options: [
              'Bを中心とする円で BA、BQ と交わる点をとり、その2点から等しい半径の円をかいた交点とBを結ぶ',
              'AとQを結んだ線分の中点とCを結ぶ',
              'Bから辺ACに垂線をひく'
            ],
            correctAnswer: 'Bを中心とする円で BA、BQ と交わる点をとり、その2点から等しい半径の円をかいた交点とBを結ぶ',
            explanation: (
              <div>
                <p>この直線と辺ACの交点がPです。<TextWithMath text="$\angle ABP = 60^\circ \div 2 = 30^\circ$" />。</p>
                <p className="mt-2 font-bold">作図の手順まとめ</p>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>A、Bを中心に半径ABの円をかき、C側の交点をQとする（∠ABQ＝60°）</li>
                  <li>∠ABQの二等分線をひく</li>
                  <li>二等分線と辺ACの交点をPとする</li>
                </ol>
                <p className="mt-2 text-sm">別解：ABの垂直二等分線とQを使う方法などもありますが、「60°を半分」が最短です。Bからの垂線（90°）では30°になりません。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "2-1",
      title: "2(1). 台形の辺ADの長さ",
      knowledge: ["三平方の定理", "補助線で直角三角形をつくる"],
      originalText: (
        <div>
          <p>右の図は、AB＝2cm、BC＝3cm、CD＝3cm、<TextWithMath text="$\angle ABC = \angle BCD = 90^\circ$" /> の台形ABCDである。</p>
          <p className="mt-2">(1) ADの長さを求めなさい。</p>
          <TrapezoidFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 補助線で直角三角形をつくる',
          content: <p>Aから辺CDに垂線AHをひくと、四角形ABCHは長方形になり、△AHDは直角三角形になります。</p>,
          quiz: {
            type: 'choice',
            question: 'AH と HD の長さの組は？',
            options: ['AH = 3cm、HD = 1cm', 'AH = 2cm、HD = 3cm', 'AH = 3cm、HD = 3cm'],
            correctAnswer: 'AH = 3cm、HD = 1cm',
            explanation: <p>AH＝BC＝3cm、HC＝AB＝2cm なので HD＝3−2＝1cm です。</p>
          }
        },
        {
          id: 2, title: '② 三平方の定理',
          content: <MathText block math="AD^2 = AH^2 + HD^2" />,
          quiz: {
            type: 'choice',
            question: 'AD の長さは？',
            options: ['√10 cm', '√13 cm', '4 cm', '√18 cm'],
            correctAnswer: '√10 cm',
            explanation: <p><TextWithMath text="$AD^2 = 3^2+1^2 = 10$" /> より <strong><TextWithMath text="$AD=\sqrt{10}$" /> cm</strong>。HDを2cm（ABの長さ）と取り違えると √13 になります。</p>
          }
        }
      ]
    },
    {
      id: "2-2",
      title: "2(2). 台形を回転させた立体の体積",
      knowledge: ["回転体", "円柱・円錐の体積"],
      originalText: (
        <div>
          <p>右の図は、AB＝2cm、BC＝3cm、CD＝3cm、<TextWithMath text="$\angle ABC = \angle BCD = 90^\circ$" /> の台形ABCDである。</p>
          <p className="mt-2">(2) 台形ABCDを、辺CDを軸として1回転させてできる立体の体積を求めなさい。ただし、円周率は <TextWithMath text="$\pi$" /> とする。</p>
          <TrapezoidFig showAxis />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① どんな立体ができる？',
          content: <p>(1)と同じくAから垂線AHをひき、台形を「長方形ABCH」と「直角三角形AHD」に分けて、それぞれをCDのまわりに回します。</p>,
          quiz: {
            type: 'choice',
            question: 'できる立体の形は？',
            options: ['円柱の上に円錐がのった形', '円錐だけ', '円柱から円錐をくりぬいた形'],
            correctAnswer: '円柱の上に円錐がのった形',
            explanation: <p>長方形ABCHは円柱（半径3cm・高さ2cm）、△AHDは円錐（半径3cm・高さ1cm）になります。</p>
          }
        },
        {
          id: 2, title: '② 円柱部分の体積',
          content: <p>半径 BC＝3cm、高さ AB＝2cm の円柱です。</p>,
          quiz: {
            type: 'choice',
            question: '円柱部分の体積は？',
            options: ['18π cm³', '12π cm³', '6π cm³'],
            correctAnswer: '18π cm³',
            explanation: <p><TextWithMath text="$\pi\times3^2\times2 = 18\pi$" /> cm³。半径と高さを逆にすると12πになります。</p>
          }
        },
        {
          id: 3, title: '③ 円錐部分の体積',
          content: <p>半径 AH＝3cm、高さ HD＝1cm の円錐です。円錐は <TextWithMath text="$\frac{1}{3}$" /> をかけ忘れないこと。</p>,
          quiz: {
            type: 'choice',
            question: '円錐部分の体積は？',
            options: ['3π cm³', '9π cm³', 'π cm³'],
            correctAnswer: '3π cm³',
            explanation: <p><TextWithMath text="$\frac{1}{3}\times\pi\times3^2\times1 = 3\pi$" /> cm³。9πは <TextWithMath text="$\frac13$" /> の忘れです。</p>
          }
        },
        {
          id: 4, title: '④ 合計する',
          content: <p>円柱と円錐の体積を足します。</p>,
          quiz: {
            type: 'choice',
            question: '立体の体積は？',
            options: ['21π cm³', '27π cm³', '15π cm³'],
            correctAnswer: '21π cm³',
            explanation: <p><TextWithMath text="$18\pi + 3\pi = 21\pi$" />。答えは <strong><TextWithMath text="$21\pi$" /> cm³</strong>。（27πは円錐の1/3忘れ、15πは円柱から円錐を引いたミス）</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 正方形と垂線（合同の証明）",
      knowledge: ["直角三角形の合同条件", "正方形の性質", "角の関係（90°の分け方）"],
      originalText: (
        <div>
          <p>右の図のように、正方形ABCDの辺BC上に点Eをとり、頂点B、Dから線分AEにそれぞれ垂線BF、DGをひく。このとき、<TextWithMath text="$\triangle ABF \equiv \triangle DAG$" /> であることを証明しなさい。</p>
          <SquareFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① どの合同条件を使う？',
          content: <p>BF⊥AE、DG⊥AE なので、△ABFと△DAGはどちらも直角三角形です。直角三角形には専用の合同条件があります。</p>,
          quiz: {
            type: 'choice',
            question: '△ABF の斜辺はどれ？',
            options: ['AB', 'AF', 'BF'],
            correctAnswer: 'AB',
            explanation: <p>直角は∠AFB。その向かいの辺ABが斜辺です。△DAGでは∠DGAが直角なので斜辺はDAです。</p>
          }
        },
        {
          id: 2, title: '② 斜辺が等しい',
          content: <p>正方形ABCDの性質を使います。</p>,
          quiz: {
            type: 'choice',
            question: 'AB = DA が言える理由は？',
            options: ['正方形の辺はすべて等しいから', '対角線が等しいから', 'AEが共通だから'],
            correctAnswer: '正方形の辺はすべて等しいから',
            explanation: <p>正方形ABCDの辺なので <TextWithMath text="$AB = DA$" />……① です。</p>
          }
        },
        {
          id: 3, title: '③ 鋭角が等しいことを示す',
          content: (
            <div className="space-y-2">
              <p>∠BAD＝90°なので <TextWithMath text="$\angle BAF + \angle DAG = 90^\circ$" />。</p>
              <p>△DAGで ∠DGA＝90°なので <TextWithMath text="$\angle ADG + \angle DAG = 90^\circ$" />。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '2つの式から言えることは？',
            options: ['∠BAF = ∠ADG', '∠BAF = ∠DAG', '∠ABF = ∠DAG かつ ∠BAF = 45°'],
            correctAnswer: '∠BAF = ∠ADG',
            explanation: <p>どちらも「90° − ∠DAG」なので <TextWithMath text="$\angle BAF = \angle ADG$" />……③ です。対応する頂点は A↔D、B↔A、F↔G の順なので、∠BAF に対応するのは ∠ADG です。</p>
          }
        },
        {
          id: 4, title: '④ 証明を完成させる',
          content: <p>直角（②）、斜辺（①）、鋭角（③）がそろいました。</p>,
          quiz: {
            type: 'choice',
            question: '使う合同条件は？',
            options: ['直角三角形の斜辺と1つの鋭角がそれぞれ等しい', '直角三角形の斜辺と他の1辺がそれぞれ等しい', '2組の辺とその間の角がそれぞれ等しい'],
            correctAnswer: '直角三角形の斜辺と1つの鋭角がそれぞれ等しい',
            explanation: (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800 text-sm space-y-1">
                <p className="font-bold">【証明】</p>
                <p>△ABFと△DAGにおいて</p>
                <p>四角形ABCDは正方形だから　AB＝DA……①</p>
                <p>仮定より　∠AFB＝∠DGA＝90°……②</p>
                <p>∠BAD＝90°より　∠BAF＝90°−∠DAG</p>
                <p>△DAGで∠DGA＝90°より　∠ADG＝90°−∠DAG</p>
                <p>よって　∠BAF＝∠ADG……③</p>
                <p>①②③より、直角三角形の斜辺と1つの鋭角がそれぞれ等しいから　△ABF≡△DAG</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
