import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { GraphFig } from './ruiji_figs';

// 類題テーマA：速さとグラフ・1次関数の利用（栃木県公立入試 大問5の形式をもとに作成）
// 答えと中間値はすべて sympy で検算済み。

const M = ({ t }: { t: string }) => <TextWithMath text={t} />;
const xy = (
  <>
    <M t="$x$" /> と <M t="$y$" />
  </>
);

/* ───────── a1：自転車 走る・休む・走る＋追い抜き ───────── */
const A1Fig = ({ withBro }: { withBro?: boolean }) => (
  <GraphFig
    xMax={36} yMax={6600} xTicks={[8, 14, 34]} yTicks={[2000, 6000]}
    polylines={[
      { pts: [[0, 0], [8, 2000], [14, 2000], [34, 6000]] },
      ...(withBro ? [{ pts: [[12, 0], [32, 6000]] as [number, number][], color: '#dc2626', dash: true }] : []),
    ]}
    guides={[{ x: 8, y: 2000 }, { x: 14, y: 2000 }, { x: 34, y: 6000 }, ...(withBro ? [{ x: 28, y: 4800 }] : [])]}
    points={withBro ? [{ x: 28, y: 4800, label: '追い抜き', dx: -52, dy: -6 }] : undefined}
    xLabel="x(分)" yLabel="y(m)"
    caption={withBro ? '赤の点線が兄。(12, 0) から (32, 6000) まで' : undefined}
  />
);
const a1Intro = (
  <div className="space-y-2">
    <p>健太さんの家から図書館までの道のりは6000mで、その途中に店がある。健太さんは自転車で家を出発し、一定の速さで店まで進み、店で買い物をしたあと、再び一定の速さで図書館まで進んだ。</p>
    <p>下の図は、健太さんが家を出発してから <M t="$x$" /> 分後に家から <M t="$y$" /> mの地点にいるとして、{xy} の関係をグラフに表したものである。</p>
    <A1Fig />
  </div>
);

const a1: MajorQuestionData = {
  id: 'a1',
  title: '類題A-1：自転車で寄り道して図書館へ（追い抜き）',
  subs: [
    {
      id: '1',
      title: '(1) 店に着くまでの速さ',
      knowledge: ['グラフの読み取り', '速さ'],
      originalText: <div>{a1Intro}<p>(1)　健太さんが家から店まで進んだ速さは分速何mか。</p></div>,
      steps: [
        {
          id: 1, title: '① 店に着いたのはグラフのどこ？',
          content: <p>買い物をしている間は道のりが増えないので、グラフは水平になります。水平になり始めた点が「店に着いた」点です。</p>,
          quiz: {
            type: 'choice',
            question: '店に着いた点の座標は？',
            options: ['(8, 2000)', '(14, 2000)', '(0, 2000)'],
            correctAnswer: '(8, 2000)',
            explanation: <p>水平な部分は <M t="$x=8$" /> から <M t="$x=14$" /> まで。店に着いたのは水平になり始める (8, 2000) です。(14, 2000) は店を出た点です。</p>
          }
        },
        {
          id: 2, title: '② グラフの傾き＝速さ',
          content: <p>道のりと時間のグラフでは、傾き（1分あたりに増える道のり）がそのまま速さです。</p>,
          quiz: {
            type: 'choice',
            question: '0≦x≦8 の部分の傾きを求める式は？',
            options: ['2000 ÷ 8', '8 ÷ 2000', '2000 ÷ 14', '6000 ÷ 34', '2000 × 8'],
            correctAnswer: '2000 ÷ 8',
            explanation: <p>（yの増加量）÷（xの増加量）＝ 2000 ÷ 8 です。14で割ると休んでいた時間まで入ってしまいます。</p>
          }
        },
        {
          id: 3, title: '③ 答え',
          content: <p>2000 ÷ 8 を計算します。</p>,
          quiz: {
            type: 'choice',
            question: '家から店までの速さは分速何m？',
            options: ['250', '200', '125'],
            correctAnswer: '250',
            explanation: <p>2000 ÷ 8 ＝ 250 で、分速250mです。検算：250 × 8 ＝ 2000 で店までの道のりと合います。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) 14≦x≦34 のときの式',
      knowledge: ['1次関数', '傾きと切片'],
      originalText: <div>{a1Intro}<p>(2)　<M t="$x$" /> の変域が <M t="$14\leqq x\leqq 34$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。ただし、途中の計算も書くこと。</p></div>,
      steps: [
        {
          id: 1, title: '① 通る2点',
          content: <p>この部分は直線なので <M t="$y=ax+b$" /> とおけます。両端の点を読み取ります。</p>,
          quiz: {
            type: 'choice',
            question: 'グラフが通る2点は？',
            options: ['(14, 2000) と (34, 6000)', '(8, 2000) と (34, 6000)', '(14, 0) と (34, 6000)'],
            correctAnswer: '(14, 2000) と (34, 6000)',
            explanation: <p>店を出た点 (14, 2000) と図書館に着いた点 (34, 6000) です。</p>
          }
        },
        {
          id: 2, title: '② 傾き',
          content: <p>傾き ＝（yの増加量）÷（xの増加量）。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['200', '250', '4000'],
            correctAnswer: '200',
            explanation: <p>(6000 − 2000) ÷ (34 − 14) ＝ 4000 ÷ 20 ＝ 200。店を出てからは分速200mです。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><M t="$y=200x+b$" /> に (14, 2000) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = 200x − 800', 'y = 200x + 800', 'y = 200x + 2000', 'y = 200x − 2800', 'y = 250x − 1500'],
            correctAnswer: 'y = 200x − 800',
            explanation: <p><M t="$2000=200\times14+b$" /> より <M t="$b=-800$" />。検算：<M t="$x=34$" /> を代入すると 6800 − 800 ＝ 6000 で合います。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) 兄が追い抜いた地点',
      knowledge: ['1次関数の利用', '連立方程式', '速さ'],
      originalText: <div>{a1Intro}<p>(3)　健太さんの兄は、健太さんが店にいる間に家を出発し、分速300mで同じ道を図書館に向かった。兄は途中で健太さんを追い抜き、健太さんより2分早く図書館に着いた。兄が健太さんを追い抜いたのは、家から何mの地点か。</p></div>,
      steps: [
        {
          id: 1, title: '① 兄が図書館に着く時刻',
          content: <p>健太さんは <M t="$x=34$" /> で図書館に着きます。兄はその2分前に着きます。</p>,
          quiz: {
            type: 'choice',
            question: '兄が図書館に着くのは、健太さんの出発から何分後？',
            options: ['32分後', '36分後', '20分後'],
            correctAnswer: '32分後',
            explanation: <p>34 − 2 ＝ 32（分後）。</p>
          }
        },
        {
          id: 2, title: '② 兄が出発した時刻',
          content: <p>兄は分速300mで6000m進むので、かかる時間は 6000 ÷ 300 ＝ 20（分）です。</p>,
          quiz: {
            type: 'choice',
            question: '兄が出発したのは、健太さんの出発から何分後？',
            options: ['12分後', '14分後', '20分後'],
            correctAnswer: '12分後',
            explanation: <p>32 − 20 ＝ 12（分後）。8分から14分までの「店にいる間」に入っているので、問題文と合います。</p>
          }
        },
        {
          id: 3, title: '③ 兄のグラフの式',
          content: <p>兄のグラフは (12, 0) を通り、傾きは300です。</p>,
          quiz: {
            type: 'choice',
            question: '兄の式は？',
            options: ['y = 300x − 3600', 'y = 300x + 3600', 'y = 300x − 12', 'y = 300x − 6000', 'y = 300x − 4200'],
            correctAnswer: 'y = 300x − 3600',
            explanation: <p><M t="$0=300\times12+b$" /> より <M t="$b=-3600$" />。検算：<M t="$x=32$" /> で 9600 − 3600 ＝ 6000 になります。</p>
          }
        },
        {
          id: 4, title: '④ どの区間で追い抜く？',
          content: <p>兄が店（2000m）に着くのは 12 ＋ 2000 ÷ 300 ＝ 18.6…分後で、健太さんはもう店を出ています。だから追い抜くのは、健太さんが再び進んでいる区間です。</p>,
          quiz: {
            type: 'choice',
            question: '追い抜く時刻 x を求める方程式は？',
            options: ['200x − 800 = 300x − 3600', '2000 = 300x − 3600', '250x = 300x − 3600', '200x − 800 = 300x', '200x + 800 = 300x − 3600'],
            correctAnswer: '200x − 800 = 300x − 3600',
            explanation: <p>健太さんの (2) の式と兄の式の y を等しくおきます。y＝2000 とおくのは、健太さんが店にいる間に追い抜くと決めつけた間違いです。</p>
          }
        },
        {
          id: 5, title: '⑤ 追い抜いた地点',
          content: <p>方程式を解いて x を出し、どちらかの式に代入して y を求めます。</p>,
          quiz: {
            type: 'choice',
            question: '追い抜いたのは家から何mの地点？',
            options: ['4800', '28', '5600'],
            correctAnswer: '4800',
            explanation: <div><A1Fig withBro /><p><M t="$100x=2800$" /> より <M t="$x=28$" />。<M t="$y=200\times28-800=4800$" />。検算：兄の式でも <M t="$300\times28-3600=4800$" /> で一致します。答えは家から4800mの地点です。28は時刻（分）なので答えではありません。</p></div>
          }
        }
      ]
    }
  ]
};

/* ───────── a2：両端から出発して出会う・折り返して追いつく ───────── */
const A2Fig = ({ withBack }: { withBack?: boolean }) => (
  <GraphFig
    xMax={64} yMax={3900} xTicks={[20, 60]} yTicks={[3600]}
    polylines={[
      { pts: [[0, 0], [60, 3600]] },
      { pts: [[0, 3600], [20, 0]], color: '#2563eb' },
      ...(withBack ? [{ pts: [[20, 0], [40, 3600]] as [number, number][], color: '#2563eb', dash: true }] : []),
    ]}
    guides={[{ x: 60, y: 3600 }, ...(withBack ? [{ x: 30, y: 1800 }] : [])]}
    points={[
      { x: 50, y: 3000, label: 'Pさん', dx: 6, dy: 10 },
      { x: 6, y: 2520, label: 'Qさん', dx: 6, dy: -4 },
      ...(withBack ? [{ x: 30, y: 1800, label: '追いつく', dx: 6, dy: 12 }] : []),
    ]}
    xLabel="x(分)" yLabel="y(m)"
    caption={withBack ? '青の点線が折り返したあとのQさん。(20, 0) から傾き180' : undefined}
  />
);
const a2Intro = (
  <div className="space-y-2">
    <p>A地点とB地点を結ぶ一本道があり、その道のりは3600mである。PさんはA地点からB地点に向かって一定の速さで歩き、QさんはB地点からA地点に向かって一定の速さで走った。2人は同時に出発した。</p>
    <p>下の図は、2人が出発してから <M t="$x$" /> 分後にA地点から <M t="$y$" /> mの地点にいるとして、それぞれの {xy} の関係をグラフに表したものである。Pさんは60分後にB地点に、Qさんは20分後にA地点に着いた。</p>
    <A2Fig />
  </div>
);

const a2: MajorQuestionData = {
  id: 'a2',
  title: '類題A-2：両端から出発して出会う・折り返して追いつく',
  subs: [
    {
      id: '1',
      title: '(1) Qさんの速さ',
      knowledge: ['グラフの読み取り', '速さ'],
      originalText: <div>{a2Intro}<p>(1)　Qさんの走る速さは分速何mか。</p></div>,
      steps: [
        {
          id: 1, title: '① Qさんのグラフ',
          content: <p>QさんはB地点（A地点から3600m）を出発してA地点（0m）に向かうので、y は減っていきます。</p>,
          quiz: {
            type: 'choice',
            question: 'Qさんのグラフが通る2点は？',
            options: ['(0, 3600) と (20, 0)', '(0, 0) と (60, 3600)', '(0, 0) と (20, 3600)'],
            correctAnswer: '(0, 3600) と (20, 0)',
            explanation: <p>出発時は (0, 3600)、A地点に着くのが (20, 0) です。(0, 0) と (60, 3600) はPさんのグラフです。</p>
          }
        },
        {
          id: 2, title: '② 速さはグラフの傾きの大きさ',
          content: <p>Qさんのグラフの傾きは (0 − 3600) ÷ (20 − 0) ＝ −180 です。マイナスは「A地点に近づいている」という向きを表し、速さはその大きさです。</p>,
          quiz: {
            type: 'choice',
            question: 'Qさんの速さは分速何m？',
            options: ['180', '60', '−180'],
            correctAnswer: '180',
            explanation: <p>3600 ÷ 20 ＝ 180 で分速180mです。速さにマイナスはつけません。検算：180 × 20 ＝ 3600 で道のり全体と合います。</p>
          }
        },
        {
          id: 3, title: '③ 比べてみる',
          content: <p>Pさんは60分で3600m進むので分速60mです。</p>,
          quiz: {
            type: 'choice',
            question: 'Qさんの速さはPさんの速さの何倍？',
            options: ['3倍', '2倍', '1/3倍'],
            correctAnswer: '3倍',
            explanation: <p>180 ÷ 60 ＝ 3（倍）。同じ道のりにかかる時間が 20分 と 60分 で 1/3 になっていることとも合います。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) Qさんの式と出会う時刻',
      knowledge: ['1次関数', '2直線の交点'],
      originalText: <div>{a2Intro}<p>(2)　<M t="$0\leqq x\leqq 20$" /> のとき、Qさんについて <M t="$y$" /> を <M t="$x$" /> の式で表しなさい。また、2人が出会うのは出発してから何分後か。</p></div>,
      steps: [
        {
          id: 1, title: '① 傾き',
          content: <p>Qさんのグラフは右下がりです。(0, 3600) と (20, 0) から傾きを求めます。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['−180', '180', '−60'],
            correctAnswer: '−180',
            explanation: <p>(0 − 3600) ÷ (20 − 0) ＝ −180。右下がりなので傾きは負です。</p>
          }
        },
        {
          id: 2, title: '② 切片と式',
          content: <p><M t="$x=0$" /> のとき <M t="$y=3600$" /> なので、切片は3600です。</p>,
          quiz: {
            type: 'choice',
            question: 'Qさんの式は？',
            options: ['y = −180x + 3600', 'y = 180x + 3600', 'y = −180x − 3600', 'y = 180x − 3600', 'y = −60x + 3600'],
            correctAnswer: 'y = −180x + 3600',
            explanation: <p>検算：<M t="$x=20$" /> を代入すると −3600 ＋ 3600 ＝ 0 で、A地点に着く点と合います。</p>
          }
        },
        {
          id: 3, title: '③ Pさんの式',
          content: <p>Pさんは原点を通り、分速60mです。</p>,
          quiz: {
            type: 'choice',
            question: 'Pさんの式は？',
            options: ['y = 60x', 'y = 60x + 3600', 'y = −60x + 3600', 'y = 180x', 'y = 3600x'],
            correctAnswer: 'y = 60x',
            explanation: <p>原点を通る直線で、傾きは 3600 ÷ 60 ＝ 60 です。</p>
          }
        },
        {
          id: 4, title: '④ 出会う時刻',
          content: <p>出会う点は2つのグラフの交点なので、y を等しくおきます。</p>,
          quiz: {
            type: 'choice',
            question: '2人が出会うのは出発してから何分後？',
            options: ['15', '10', '20'],
            correctAnswer: '15',
            explanation: <p><M t="$60x=-180x+3600$" /> より <M t="$240x=3600$" />、<M t="$x=15$" />。2人合わせて1分に240m近づくので 3600 ÷ 240 ＝ 15 と考えても同じです。検算：Pさんは 60 × 15 ＝ 900m、Qさんは 3600 − 180 × 15 ＝ 900m の地点で一致します。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) 折り返したQさんが追いつく時刻',
      knowledge: ['1次関数の利用', '連立方程式', '速さ'],
      originalText: <div>{a2Intro}<p>(3)　QさんはA地点に着くとすぐに折り返し、同じ速さでB地点に向かって走った。QさんがPさんに追いつくのは、2人が出発してから何分後か。また、それはA地点から何mの地点か。</p></div>,
      steps: [
        {
          id: 1, title: '① 折り返したあとのグラフ',
          content: <p>折り返したあとのQさんは (20, 0) から、今度はA地点から遠ざかるので右上がりになります。速さは分速180mのままです。</p>,
          quiz: {
            type: 'choice',
            question: '折り返したあとのQさんのグラフの傾きは？',
            options: ['180', '−180', '60'],
            correctAnswer: '180',
            explanation: <p>A地点から遠ざかるので y は増え、傾きは ＋180 です。</p>
          }
        },
        {
          id: 2, title: '② 折り返したあとの式',
          content: <p><M t="$y=180x+b$" /> に (20, 0) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '折り返したあとのQさんの式は？',
            options: ['y = 180x − 3600', 'y = 180x + 3600', 'y = 180x − 20', 'y = −180x + 3600', 'y = 180x − 1800'],
            correctAnswer: 'y = 180x − 3600',
            explanation: <p><M t="$0=180\times20+b$" /> より <M t="$b=-3600$" />。</p>
          }
        },
        {
          id: 3, title: '③ 追いつく時刻',
          content: <p>Pさん <M t="$y=60x$" /> と、折り返したQさん <M t="$y=180x-3600$" /> の交点を求めます。</p>,
          quiz: {
            type: 'choice',
            question: 'QさんがPさんに追いつくのは出発してから何分後？',
            options: ['30', '15', '20'],
            correctAnswer: '30',
            explanation: <p><M t="$60x=180x-3600$" /> より <M t="$120x=3600$" />、<M t="$x=30$" />。15分後は (2) の「出会う」時刻で、追いつく時刻ではありません。Pさんが B 地点に着く60分後より前なので、問題に合います。</p>
          }
        },
        {
          id: 4, title: '④ 追いつく地点',
          content: <p><M t="$x=30$" /> をどちらかの式に代入します。</p>,
          quiz: {
            type: 'choice',
            question: '追いつくのはA地点から何mの地点？',
            options: ['1800', '900', '2700'],
            correctAnswer: '1800',
            explanation: <div><A2Fig withBack /><p><M t="$y=60\times30=1800$" />。検算：Qさんの式でも <M t="$180\times30-3600=1800$" /> で一致します。答えは30分後、A地点から1800mの地点です。</p></div>
          }
        }
      ]
    }
  ]
};

/* ───────── a3：水そう 給水と排水 ───────── */
const A3Fig = ({ full }: { full?: boolean }) => (
  <GraphFig
    xMax={full ? 46 : 23} yMax={125}
    xTicks={full ? [10, 15, 20, 23, 42] : [10, 20]} yTicks={full ? [80, 95, 110] : [80, 110]}
    polylines={[
      { pts: [[0, 0], [10, 80], [20, 110]] },
      ...(full ? [{ pts: [[20, 110], [42, 0]] as [number, number][], color: '#dc2626', dash: true }] : []),
    ]}
    lines={full ? [{ a: 0, b: 95, x0: 0, x1: 44, color: '#16a34a' }] : undefined}
    guides={full ? [{ x: 15, y: 95 }, { x: 23, y: 95 }, { x: 20, y: 110 }] : [{ x: 10, y: 80 }, { x: 20, y: 110 }]}
    xLabel="x(分)" yLabel="y(L)"
    caption={full ? '赤の点線が20分後から排水管Bだけのとき。緑の線が y＝95' : undefined}
  />
);
const a3Intro = (
  <div className="space-y-2">
    <p>空の水そうに、給水管Aと排水管Bがついている。給水管Aからは毎分一定の量の水が入り、排水管Bを開くと毎分一定の量の水が出ていく。</p>
    <p>はじめに排水管Bを閉じたまま給水管Aだけで水を入れ、10分後に排水管Bを開いた。そのあとも給水管Aからは同じように水を入れ続けた。下の図は、水を入れ始めてから <M t="$x$" /> 分後の水そうの水の量を <M t="$y$" /> Lとして、<M t="$0\leqq x\leqq 20$" /> のときの {xy} の関係をグラフに表したものである。</p>
    <A3Fig />
  </div>
);

const a3: MajorQuestionData = {
  id: 'a3',
  title: '類題A-3：水そうの給水と排水',
  subs: [
    {
      id: '1',
      title: '(1) 給水管Aから入る水の量',
      knowledge: ['グラフの読み取り', '変化の割合'],
      originalText: <div>{a3Intro}<p>(1)　給水管Aからは毎分何Lの水が入るか。</p></div>,
      steps: [
        {
          id: 1, title: '① 給水管Aだけの区間',
          content: <p>排水管Bを開いたのは10分後なので、給水管Aだけで水を入れているのは最初の10分間です。</p>,
          quiz: {
            type: 'choice',
            question: '給水管Aだけで入れている区間のグラフが通る2点は？',
            options: ['(0, 0) と (10, 80)', '(10, 80) と (20, 110)', '(0, 0) と (20, 110)'],
            correctAnswer: '(0, 0) と (10, 80)',
            explanation: <p>0分から10分までの部分です。10分より後は排水管Bも開いているので、Aだけの量にはなりません。</p>
          }
        },
        {
          id: 2, title: '② 傾き＝1分あたりの量',
          content: <p>水の量のグラフでは、傾きが「1分あたりに増える水の量」です。</p>,
          quiz: {
            type: 'choice',
            question: '給水管Aからは毎分何L？',
            options: ['8', '3', '5.5'],
            correctAnswer: '8',
            explanation: <p>80 ÷ 10 ＝ 8 で毎分8Lです。110 ÷ 20 ＝ 5.5 とすると、排水している時間が混ざってしまいます。検算：8 × 10 ＝ 80 で合います。</p>
          }
        },
        {
          id: 3, title: '③ 傾きがゆるくなった理由',
          content: <p>10分後からグラフの傾きがゆるくなっています。</p>,
          quiz: {
            type: 'choice',
            question: '10分後から傾きがゆるくなったのはなぜ？',
            options: ['入る水と出る水の差だけ増えるようになったから', '給水管Aを閉じたから', '水そうがいっぱいになったから', '給水管Aから入る量が増えたから', '排水管Bを閉じたから'],
            correctAnswer: '入る水と出る水の差だけ増えるようになったから',
            explanation: <p>排水管Bを開いても給水管Aは入れ続けているので、増え方は「Aから入る量 − Bから出る量」になります。まだ増えているのは、入る量のほうが多いからです。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) 10≦x≦20 のときの式',
      knowledge: ['1次関数', '傾きと切片'],
      originalText: <div>{a3Intro}<p>(2)　<M t="$x$" /> の変域が <M t="$10\leqq x\leqq 20$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 通る2点',
          content: <p>この区間の両端を読み取ります。</p>,
          quiz: {
            type: 'choice',
            question: 'グラフが通る2点は？',
            options: ['(10, 80) と (20, 110)', '(0, 0) と (20, 110)', '(10, 0) と (20, 110)'],
            correctAnswer: '(10, 80) と (20, 110)',
            explanation: <p>排水管Bを開いた点 (10, 80) と、図の右端 (20, 110) です。</p>
          }
        },
        {
          id: 2, title: '② 傾き',
          content: <p>傾き ＝（yの増加量）÷（xの増加量）。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['3', '8', '30'],
            correctAnswer: '3',
            explanation: <p>(110 − 80) ÷ (20 − 10) ＝ 30 ÷ 10 ＝ 3。この区間は毎分3Lずつ増えています。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><M t="$y=3x+b$" /> に (10, 80) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = 3x + 50', 'y = 3x + 80', 'y = 3x − 50', 'y = 3x + 110', 'y = 8x + 30'],
            correctAnswer: 'y = 3x + 50',
            explanation: <p><M t="$80=3\times10+b$" /> より <M t="$b=50$" />。検算：<M t="$x=20$" /> で 60 ＋ 50 ＝ 110 となり合います。切片を80にするのは、(10, 80) の80をそのまま使った間違いです。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) 水の量が95Lになる2回の間の時間',
      knowledge: ['1次関数の利用', '変化の割合'],
      originalText: <div>{a3Intro}<p>(3)　水を入れ始めてから20分後に給水管Aを閉じ、排水管Bは開いたままにしたところ、やがて水そうは空になった。水を入れ始めてから水そうが空になるまでの間に、水の量が95Lになるときが2回ある。1回目から2回目までは何分間か。</p></div>,
      steps: [
        {
          id: 1, title: '① 排水管Bから出る量',
          content: <p>10分後から20分後までは「Aから入る毎分8L − Bから出る量」が毎分3Lでした。</p>,
          quiz: {
            type: 'choice',
            question: '排水管Bからは毎分何Lの水が出る？',
            options: ['5', '3', '11'],
            correctAnswer: '5',
            explanation: <p>8 − 3 ＝ 5 で毎分5Lです。グラフに出ていない量ですが、(1) と (2) の傾きの差からわかります。</p>
          }
        },
        {
          id: 2, title: '② 1回目に95Lになる時刻',
          content: <p>0分から10分までは80Lまでしか入らないので、1回目は (2) の区間です。<M t="$y=3x+50$" /> に <M t="$y=95$" /> を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '1回目に95Lになるのは何分後？',
            options: ['15', '11.875', '25'],
            correctAnswer: '15',
            explanation: <p><M t="$3x+50=95$" /> より <M t="$x=15$" />。10≦x≦20 の範囲に入っています。</p>
          }
        },
        {
          id: 3, title: '③ 20分後からの式',
          content: <p>20分後は110Lで、そこから毎分5Lずつ減ります。<M t="$y=-5x+b$" /> に (20, 110) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '20分後からの式は？',
            options: ['y = −5x + 210', 'y = −5x + 110', 'y = −5x + 10', 'y = −3x + 170', 'y = 5x + 10'],
            correctAnswer: 'y = −5x + 210',
            explanation: <p><M t="$110=-5\times20+b$" /> より <M t="$b=210$" />。検算：<M t="$x=42$" /> で 0 になり、42分後に空になります。</p>
          }
        },
        {
          id: 4, title: '④ 2回目と答え',
          content: <p><M t="$-5x+210=95$" /> を解き、1回目との差をとります。</p>,
          quiz: {
            type: 'choice',
            question: '1回目から2回目までは何分間？',
            options: ['8', '23', '3'],
            correctAnswer: '8',
            explanation: <div><A3Fig full /><p><M t="$5x=115$" /> より <M t="$x=23$" />。23 − 15 ＝ 8（分間）。検算：20分後の110Lから3分で15L減って95Lなので、23分後で合います。23は2回目の時刻で、答えではありません。</p></div>
          }
        }
      ]
    }
  ]
};

/* ───────── a4：バスのダイヤグラムとすれ違い ───────── */
const A4Fig = ({ withH }: { withH?: boolean }) => (
  <GraphFig
    xMax={60} yMax={13} xTicks={withH ? [6, 24, 30, 38, 54] : [24, 30, 54]} yTicks={withH ? [8, 12] : [12]}
    polylines={[
      { pts: [[0, 0], [24, 12], [30, 12], [54, 0]] },
      ...(withH ? [{ pts: [[6, 0], [54, 12]] as [number, number][], color: '#dc2626', dash: true }] : []),
    ]}
    guides={[{ x: 24, y: 12 }, { x: 30, y: 12 }, ...(withH ? [{ x: 38, y: 8 }] : [])]}
    points={withH ? [{ x: 38, y: 8, label: 'すれ違い', dx: 6, dy: -6 }] : undefined}
    xLabel="x(分)" yLabel="y(km)"
    caption={withH ? '赤の点線が花子さん。(6, 0) から傾き 1/4' : undefined}
  />
);
const a4Intro = (
  <div className="space-y-2">
    <p>A駅とB駅の間は12kmあり、この間をバスが往復している。バスは午前9時にA駅を出発し、一定の速さでB駅まで走り、B駅で6分間停車したあと、行きと同じ速さでA駅に戻った。</p>
    <p>下の図は、午前9時から <M t="$x$" /> 分後のバスの位置をA駅から <M t="$y$" /> kmとして、{xy} の関係をグラフに表したものである。</p>
    <A4Fig />
  </div>
);

const a4: MajorQuestionData = {
  id: 'a4',
  title: '類題A-4：バスのダイヤグラムとすれ違い',
  subs: [
    {
      id: '1',
      title: '(1) バスの速さ',
      knowledge: ['グラフの読み取り', '速さの単位'],
      originalText: <div>{a4Intro}<p>(1)　バスの速さは時速何kmか。</p></div>,
      steps: [
        {
          id: 1, title: '① 行きにかかった時間',
          content: <p>グラフで、A駅（0km）を出てB駅（12km）に着くまでの部分を見ます。</p>,
          quiz: {
            type: 'choice',
            question: 'A駅からB駅まで何分かかった？',
            options: ['24分', '30分', '54分'],
            correctAnswer: '24分',
            explanation: <p>(0, 0) から (24, 12) までなので24分です。30分は停車が終わってB駅を出る時刻です。</p>
          }
        },
        {
          id: 2, title: '② 分速',
          content: <p>傾き ＝ 12 ÷ 24 が、1分あたりに進むkm数です。</p>,
          quiz: {
            type: 'choice',
            question: 'バスは分速何km？',
            options: ['0.5', '2', '0.4'],
            correctAnswer: '0.5',
            explanation: <p>12 ÷ 24 ＝ 0.5 で分速0.5kmです。24 ÷ 12 ＝ 2 は「1kmに何分かかるか」で、逆に割っています。</p>
          }
        },
        {
          id: 3, title: '③ 時速に直す',
          content: <p>1時間は60分なので、分速を60倍すると時速になります。</p>,
          quiz: {
            type: 'choice',
            question: 'バスは時速何km？',
            options: ['30', '0.5', '24'],
            correctAnswer: '30',
            explanation: <p>0.5 × 60 ＝ 30 で時速30kmです。検算：時速30kmなら12km進むのに 12 ÷ 30 ＝ 0.4時間 ＝ 24分で、グラフと合います。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) 帰りの式',
      knowledge: ['1次関数', '傾きと切片'],
      originalText: <div>{a4Intro}<p>(2)　バスがB駅を出発してからA駅に着くまでについて、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。また、<M t="$x$" /> の変域も答えなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 帰りの区間と変域',
          content: <p>停車が終わってB駅を出るところから、A駅に戻るところまでです。</p>,
          quiz: {
            type: 'choice',
            question: '帰りの区間の x の変域は？',
            options: ['30 ≦ x ≦ 54', '24 ≦ x ≦ 54', '24 ≦ x ≦ 30', '0 ≦ x ≦ 24', '30 ≦ x ≦ 60'],
            correctAnswer: '30 ≦ x ≦ 54',
            explanation: <p>B駅を出るのは (30, 12)、A駅に着くのは (54, 0) です。24〜30 は停車中です。</p>
          }
        },
        {
          id: 2, title: '② 傾き',
          content: <p>帰りは A駅に近づくので y が減ります。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['−1/2', '1/2', '−2'],
            correctAnswer: '−1/2',
            explanation: <p>(0 − 12) ÷ (54 − 30) ＝ −12 ÷ 24 ＝ <M t="$-\frac{1}{2}$" />。行きと同じ速さで、向きが逆なので符号だけ変わります。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><M t="$y=-\frac{1}{2}x+b$" /> に (54, 0) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '帰りの式は？',
            options: ['y = −(1/2)x + 27', 'y = −(1/2)x + 12', 'y = −(1/2)x + 54', 'y = (1/2)x − 3', 'y = −2x + 108'],
            correctAnswer: 'y = −(1/2)x + 27',
            explanation: <p><M t="$0=-\frac{1}{2}\times54+b$" /> より <M t="$b=27$" />。検算：<M t="$x=30$" /> で −15 ＋ 27 ＝ 12 となり、B駅を出る点と合います。答えは <M t="$y=-\frac{1}{2}x+27\ (30\leqq x\leqq 54)$" /> です。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) 花子さんとバスがすれ違う時刻',
      knowledge: ['1次関数の利用', '連立方程式', '速さの単位'],
      originalText: <div>{a4Intro}<p>(3)　花子さんは午前9時6分にA駅を自転車で出発し、時速15kmでバスと同じ道をB駅に向かった。花子さんがB駅から戻ってくるバスとすれ違うのは午前何時何分か。また、それはA駅から何kmの地点か。</p></div>,
      steps: [
        {
          id: 1, title: '① 単位をそろえる',
          content: <p>グラフの x は「分」、y は「km」なので、花子さんの速さを分速（km）に直します。</p>,
          quiz: {
            type: 'choice',
            question: '時速15kmは分速何km？',
            options: ['1/4', '15', '4'],
            correctAnswer: '1/4',
            explanation: <p>15 ÷ 60 ＝ <M t="$\frac{1}{4}$" />（km）です。</p>
          }
        },
        {
          id: 2, title: '② 花子さんの式',
          content: <p>花子さんは9時6分、つまり <M t="$x=6$" /> にA駅（<M t="$y=0$" />）を出発します。<M t="$y=\frac{1}{4}x+b$" /> に (6, 0) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: '花子さんの式は？',
            options: ['y = (1/4)x − 3/2', 'y = (1/4)x + 6', 'y = (1/4)x − 6', 'y = 15x − 90', 'y = (1/4)x'],
            correctAnswer: 'y = (1/4)x − 3/2',
            explanation: <p><M t="$0=\frac{1}{4}\times6+b$" /> より <M t="$b=-\frac{3}{2}$" />。</p>
          }
        },
        {
          id: 3, title: '③ どのバスとすれ違う？',
          content: <p>行きのバスは9時ちょうどに出発し、花子さんより速いので、ずっと花子さんの前を走っています。だから出会うのは帰りのバスです。</p>,
          quiz: {
            type: 'choice',
            question: 'すれ違う時刻 x を求める方程式は？',
            options: ['−(1/2)x + 27 = (1/4)x − 3/2', '(1/2)x = (1/4)x − 3/2', '12 = (1/4)x − 3/2', '−(1/2)x + 27 = 15x − 90', '−(1/2)x + 27 = (1/4)x'],
            correctAnswer: '−(1/2)x + 27 = (1/4)x − 3/2',
            explanation: <p>(2) の帰りの式と花子さんの式の y を等しくおきます。行きの式 <M t="$y=\frac{1}{2}x$" /> と連立すると x が負になり、出会わないことが確かめられます。</p>
          }
        },
        {
          id: 4, title: '④ 時刻',
          content: <p>両辺を4倍すると <M t="$-2x+108=x-6$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: 'すれ違うのは午前何時何分？',
            options: ['午前9時38分', '午前9時32分', '午前9時44分'],
            correctAnswer: '午前9時38分',
            explanation: <p><M t="$3x=114$" /> より <M t="$x=38$" />。午前9時から38分後なので9時38分です。30≦x≦54 に入っているので、帰りのバスで正しいです。</p>
          }
        },
        {
          id: 5, title: '⑤ 地点',
          content: <p><M t="$x=38$" /> をどちらかの式に代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'すれ違うのはA駅から何kmの地点？',
            options: ['8', '4', '9.5'],
            correctAnswer: '8',
            explanation: <div><A4Fig withH /><p><M t="$y=-\frac{1}{2}\times38+27=8$" />。検算：花子さんは32分間で <M t="$\frac{1}{4}\times32=8$" />km進んでいて一致します。答えは午前9時38分、A駅から8kmの地点です。</p></div>
          }
        }
      ]
    }
  ]
};

/* ───────── a5：料金プランの比較 ───────── */
const A5Fig = ({ withC }: { withC?: boolean }) => (
  <GraphFig
    xMax={120} yMax={5000} xTicks={withC ? [20, 80, 110] : [20, 40, 100]} yTicks={withC ? [1500, 2700, 3900, 4500] : [1500, 2700, 4300]}
    lines={[
      { a: 30, b: 1500, x0: 0, x1: 110, label: 'A' },
      { a: 20, b: 2300, x0: 20, x1: 120, color: '#2563eb', label: 'B' },
      ...(withC ? [{ a: 0, b: 4500, x0: 0, x1: 120, color: '#dc2626', label: 'C' }] : []),
    ]}
    polylines={[{ pts: [[0, 2700], [20, 2700]], color: '#2563eb' }]}
    guides={withC ? [{ x: 80, y: 3900 }, { x: 110, y: 4500 }] : [{ x: 40, y: 2700 }, { x: 20, y: 2700 }, { x: 100, y: 4300 }]}
    points={withC ? [{ x: 80, y: 3900 }, { x: 110, y: 4500 }] : undefined}
    xLabel="x(分)" yLabel="y(円)"
    caption={withC ? '赤の線がプランC（4500円で一定）' : undefined}
  />
);
const a5Intro = (
  <div className="space-y-2">
    <p>ある携帯電話会社には、1か月の通話料金について次のプランがある。</p>
    <p>プランA：基本料金に加えて、通話1分ごとに一定の料金がかかる。<br />プランB：基本料金2700円で20分まで通話できる。20分をこえた分は、1分ごとに一定の料金がかかる。</p>
    <p>下の図は、1か月の通話時間を <M t="$x$" /> 分、そのときの料金を <M t="$y$" /> 円として、それぞれのプランの {xy} の関係をグラフに表したものである。ただし、プランAのグラフは (0, 1500) と (40, 2700) を通り、プランBのグラフは (20, 2700) と (100, 4300) を通る。</p>
    <A5Fig />
  </div>
);

const a5: MajorQuestionData = {
  id: 'a5',
  title: '類題A-5：料金プランの比較',
  subs: [
    {
      id: '1',
      title: '(1) プランAの1分あたりの料金',
      knowledge: ['グラフの読み取り', '変化の割合'],
      originalText: <div>{a5Intro}<p>(1)　プランAで、通話1分ごとにかかる料金は何円か。</p></div>,
      steps: [
        {
          id: 1, title: '① 基本料金はどこ？',
          content: <p>通話しなくてもかかるのが基本料金です。グラフでは <M t="$x=0$" /> のときの y、つまり切片です。</p>,
          quiz: {
            type: 'choice',
            question: 'プランAの基本料金は何円？',
            options: ['1500', '2700', '1200'],
            correctAnswer: '1500',
            explanation: <p>プランAのグラフは (0, 1500) を通るので基本料金は1500円です。</p>
          }
        },
        {
          id: 2, title: '② 1分あたり＝傾き',
          content: <p>1分ごとの料金は、1分あたりに増える料金、つまりグラフの傾きです。</p>,
          quiz: {
            type: 'choice',
            question: 'プランAの1分ごとの料金は何円？',
            options: ['30', '67.5', '20'],
            correctAnswer: '30',
            explanation: <p>(2700 − 1500) ÷ 40 ＝ 1200 ÷ 40 ＝ 30（円）。2700 ÷ 40 ＝ 67.5 とすると基本料金まで割ってしまいます。検算：1500 ＋ 30 × 40 ＝ 2700 で合います。</p>
          }
        },
        {
          id: 3, title: '③ 式にする',
          content: <p>切片1500、傾き30です。</p>,
          quiz: {
            type: 'choice',
            question: 'プランAの式は？',
            options: ['y = 30x + 1500', 'y = 1500x + 30', 'y = 30x + 2700', 'y = 20x + 1500', 'y = 30x − 1500'],
            correctAnswer: 'y = 30x + 1500',
            explanation: <p>答えは30円で、式は <M t="$y=30x+1500$" /> です。(3) で使います。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) プランBの x≧20 の式',
      knowledge: ['1次関数', '傾きと切片'],
      originalText: <div>{a5Intro}<p>(2)　プランBについて、<M t="$x\geqq 20$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 20分までのグラフ',
          content: <p>プランBは20分までは何分話しても2700円です。</p>,
          quiz: {
            type: 'choice',
            question: 'プランBの 0≦x≦20 のグラフはどんな形？',
            options: ['y＝2700 の水平な線分', '原点を通る直線', '傾き20の直線', 'y 軸に平行な線分', '傾き30の直線'],
            correctAnswer: 'y＝2700 の水平な線分',
            explanation: <p>料金が変わらないので水平です。グラフの傾きが0の部分です。</p>
          }
        },
        {
          id: 2, title: '② 傾き',
          content: <p><M t="$x\geqq20$" /> の部分は (20, 2700) と (100, 4300) を通ります。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['20', '43', '1600'],
            correctAnswer: '20',
            explanation: <p>(4300 − 2700) ÷ (100 − 20) ＝ 1600 ÷ 80 ＝ 20。20分をこえた分は1分20円です。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><M t="$y=20x+b$" /> に (20, 2700) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'プランBの x≧20 の式は？',
            options: ['y = 20x + 2300', 'y = 20x + 2700', 'y = 20x − 2300', 'y = 20x + 3100', 'y = 30x + 2100'],
            correctAnswer: 'y = 20x + 2300',
            explanation: <p><M t="$2700=20\times20+b$" /> より <M t="$b=2300$" />。検算：<M t="$x=100$" /> で 2000 ＋ 2300 ＝ 4300 となり合います。基本料金2700をそのまま切片にするのは、20分の無料分を忘れた間違いです。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) プランBがいちばん安くなる通話時間',
      knowledge: ['1次関数の利用', 'グラフの上下と大小'],
      originalText: <div>{a5Intro}<p>(3)　この会社には、通話時間に関係なく1か月4500円のプランCもある。3つのプランのうち、プランBの料金がいちばん安くなるのは、1か月の通話時間が何分より長く何分より短いときか。</p></div>,
      steps: [
        {
          id: 1, title: '① 安い＝グラフが下',
          content: <p>同じ通話時間で比べたとき、グラフが下にあるプランほど安くなります。</p>,
          quiz: {
            type: 'choice',
            question: '通話時間が短いとき（例えば10分）にいちばん安いのは？',
            options: ['プランA', 'プランB', 'プランC'],
            correctAnswer: 'プランA',
            explanation: <p>10分なら A は 30 × 10 ＋ 1500 ＝ 1800円、B は2700円、C は4500円で、A が安いです。</p>
          }
        },
        {
          id: 2, title: '② AとBが同じ料金になる時間',
          content: <p>20分までは A が2100円以下で B より安いので、交わるのは <M t="$x\geqq20$" /> の部分です。<M t="$30x+1500=20x+2300$" /> を解きます。</p>,
          quiz: {
            type: 'choice',
            question: 'AとBの料金が等しくなるのは何分？',
            options: ['80', '40', '120'],
            correctAnswer: '80',
            explanation: <p><M t="$10x=800$" /> より <M t="$x=80$" />。検算：A は 2400 ＋ 1500 ＝ 3900円、B は 1600 ＋ 2300 ＝ 3900円で一致します。40分は A が2700円になる時間で、B の水平部分とは交わっていません。</p>
          }
        },
        {
          id: 3, title: '③ BとCが同じ料金になる時間',
          content: <p><M t="$20x+2300=4500$" /> を解きます。</p>,
          quiz: {
            type: 'choice',
            question: 'BとCの料金が等しくなるのは何分？',
            options: ['110', '100', '225'],
            correctAnswer: '110',
            explanation: <p><M t="$20x=2200$" /> より <M t="$x=110$" />。100分は A と C が等しくなる時間（30 × 100 ＋ 1500 ＝ 4500）なので取り違えに注意します。</p>
          }
        },
        {
          id: 4, title: '④ 答え',
          content: <p>80分をこえると B が A より安くなり、110分をこえると C が B より安くなります。</p>,
          quiz: {
            type: 'choice',
            question: 'プランBがいちばん安くなるのは？',
            options: ['80分より長く110分より短いとき', '80分より長く100分より短いとき', '20分より長く80分より短いとき', '100分より長く110分より短いとき', '110分より長いとき'],
            correctAnswer: '80分より長く110分より短いとき',
            explanation: <div><A5Fig withC /><p>検算として90分で比べると、A は4200円、B は4100円、C は4500円で、B がいちばん安くなります。115分なら B は4600円で C より高くなります。</p></div>
          }
        }
      ]
    }
  ]
};

/* ───────── a6：2本のろうそく（途中で火を消す） ───────── */
const A6Fig = ({ withQ }: { withQ?: boolean }) => (
  <GraphFig
    xMax={62} yMax={26} xTicks={withQ ? [10, 24, 50, 60] : [16, 24, 56]} yTicks={withQ ? [3, 15, 24] : [16, 24]}
    polylines={[
      { pts: [[0, 24], [16, 16], [24, 16], [56, 0]] },
      ...(withQ ? [{ pts: [[10, 15], [60, 0]] as [number, number][], color: '#dc2626', dash: true }] : []),
    ]}
    guides={withQ ? [{ x: 50, y: 3 }, { x: 10, y: 15 }] : [{ x: 16, y: 16 }, { x: 24, y: 16 }]}
    points={withQ ? [{ x: 50, y: 3, label: '等しい', dx: -12, dy: -8 }] : undefined}
    xLabel="x(分)" yLabel="y(cm)"
    caption={withQ ? '赤の点線がろうそくQ。(10, 15) から (60, 0) まで' : undefined}
  />
);
const a6Intro = (
  <div className="space-y-2">
    <p>長さ24cmのろうそくPに火をつけた。ろうそくPは火がついている間、一定の割合で短くなる。途中で一度火を消し、しばらくしてから再び火をつけたところ、ろうそくPは燃えつきた。</p>
    <p>下の図は、ろうそくPに最初に火をつけてから <M t="$x$" /> 分後のろうそくPの長さを <M t="$y$" /> cmとして、{xy} の関係をグラフに表したものである。</p>
    <A6Fig />
  </div>
);

const a6: MajorQuestionData = {
  id: 'a6',
  title: '類題A-6：ろうそくの長さの変化',
  subs: [
    {
      id: '1',
      title: '(1) 1分間に短くなる長さ',
      knowledge: ['グラフの読み取り', '変化の割合'],
      originalText: <div>{a6Intro}<p>(1)　ろうそくPは、火がついている間、1分間に何cmずつ短くなるか。</p></div>,
      steps: [
        {
          id: 1, title: '① 火を消していたのはどこ？',
          content: <p>火を消している間は長さが変わらないので、グラフは水平になります。</p>,
          quiz: {
            type: 'choice',
            question: '火を消していたのは何分間？',
            options: ['8分間', '16分間', '24分間'],
            correctAnswer: '8分間',
            explanation: <p>水平なのは <M t="$x=16$" /> から <M t="$x=24$" /> までなので、24 − 16 ＝ 8（分間）です。</p>
          }
        },
        {
          id: 2, title: '② 最初の16分間で短くなった長さ',
          content: <p>24cm から 16cm になっています。</p>,
          quiz: {
            type: 'choice',
            question: '最初の16分間で何cm短くなった？',
            options: ['8', '16', '24'],
            correctAnswer: '8',
            explanation: <p>24 − 16 ＝ 8（cm）。16cm は残っている長さです。</p>
          }
        },
        {
          id: 3, title: '③ 1分あたり',
          content: <p>8cm を16分で割ります。グラフの傾きの大きさにあたります。</p>,
          quiz: {
            type: 'choice',
            question: '1分間に何cmずつ短くなる？',
            options: ['0.5', '2', '1'],
            correctAnswer: '0.5',
            explanation: <p>8 ÷ 16 ＝ 0.5（cm）。検算：再び火をつけたあとも、16cm を (56 − 24) ＝ 32分で燃やしきるので 16 ÷ 32 ＝ 0.5 で同じ割合です。</p>
          }
        }
      ]
    },
    {
      id: '2',
      title: '(2) 24≦x≦56 のときの式',
      knowledge: ['1次関数', '傾きと切片'],
      originalText: <div>{a6Intro}<p>(2)　<M t="$x$" /> の変域が <M t="$24\leqq x\leqq 56$" /> のとき、<M t="$y$" /> を <M t="$x$" /> の式で表しなさい。</p></div>,
      steps: [
        {
          id: 1, title: '① 通る2点',
          content: <p>再び火をつけた点と、燃えつきた点を読み取ります。</p>,
          quiz: {
            type: 'choice',
            question: 'グラフが通る2点は？',
            options: ['(24, 16) と (56, 0)', '(16, 16) と (56, 0)', '(0, 24) と (56, 0)'],
            correctAnswer: '(24, 16) と (56, 0)',
            explanation: <p>再び火をつけたのが (24, 16)、燃えつきたのが (56, 0) です。</p>
          }
        },
        {
          id: 2, title: '② 傾き',
          content: <p>短くなっていくので傾きは負です。</p>,
          quiz: {
            type: 'choice',
            question: '傾き a は？',
            options: ['−0.5', '0.5', '−2'],
            correctAnswer: '−0.5',
            explanation: <p>(0 − 16) ÷ (56 − 24) ＝ −16 ÷ 32 ＝ −0.5。(1) の割合と同じです。</p>
          }
        },
        {
          id: 3, title: '③ 切片と答え',
          content: <p><M t="$y=-0.5x+b$" /> に (56, 0) を代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = −0.5x + 28', 'y = −0.5x + 24', 'y = −0.5x + 16', 'y = −0.5x + 56', 'y = 0.5x − 28'],
            correctAnswer: 'y = −0.5x + 28',
            explanation: <p><M t="$0=-0.5\times56+b$" /> より <M t="$b=28$" />。検算：<M t="$x=24$" /> で −12 ＋ 28 ＝ 16 となり合います。最初の長さ24を切片にするのは、火を消していた8分を忘れた間違いです。</p>
          }
        }
      ]
    },
    {
      id: '3',
      title: '(3) PとQの長さが等しくなる時刻',
      knowledge: ['1次関数の利用', '連立方程式'],
      originalText: <div>{a6Intro}<p>(3)　ろうそくPに最初に火をつけてから10分後に、長さ15cmのろうそくQに火をつけた。ろうそくQは1分間に0.3cmずつ短くなり、途中で火を消さずに燃えつきた。ろうそくPとろうそくQの長さが等しくなるのは、ろうそくPに最初に火をつけてから何分後か。また、そのときの長さは何cmか。</p></div>,
      steps: [
        {
          id: 1, title: '① Qが燃えつきる時刻',
          content: <p>15cm を1分に0.3cmずつ燃やします。</p>,
          quiz: {
            type: 'choice',
            question: 'Qが燃えつきるのは、Pに最初に火をつけてから何分後？',
            options: ['60分後', '50分後', '45分後'],
            correctAnswer: '60分後',
            explanation: <p>15 ÷ 0.3 ＝ 50（分）かかり、火をつけたのが10分後なので 10 ＋ 50 ＝ 60（分後）です。</p>
          }
        },
        {
          id: 2, title: '② Qの式',
          content: <p>Qのグラフは (10, 15) を通り、傾きは −0.3 です。</p>,
          quiz: {
            type: 'choice',
            question: 'Qの式は？',
            options: ['y = −0.3x + 18', 'y = −0.3x + 15', 'y = −0.3x + 12', 'y = 0.3x + 12', 'y = −0.5x + 20'],
            correctAnswer: 'y = −0.3x + 18',
            explanation: <p><M t="$15=-0.3\times10+b$" /> より <M t="$b=18$" />。検算：<M t="$x=60$" /> で −18 ＋ 18 ＝ 0 となり、燃えつきる時刻と合います。</p>
          }
        },
        {
          id: 3, title: '③ どの区間で等しくなる？',
          content: <p>Qは火をつけたときから15cmで、Pの水平な部分の16cmより短いので、16≦x≦24 では等しくなりません。最初の区間 <M t="$y=-0.5x+24$" /> と連立すると <M t="$x=30$" /> になり、0≦x≦16 の外です。</p>,
          quiz: {
            type: 'choice',
            question: '等しくなる時刻を求めるのに使う方程式は？',
            options: ['−0.5x + 28 = −0.3x + 18', '−0.5x + 24 = −0.3x + 18', '16 = −0.3x + 18', '−0.5x + 28 = −0.3x + 15', '−0.5x + 28 = 0.3x + 18'],
            correctAnswer: '−0.5x + 28 = −0.3x + 18',
            explanation: <p>再び火をつけたあとの (2) の式とQの式を連立します。最初の区間の式を使うと x＝30 になりますが、その時刻にPは別の式の区間にいるので答えになりません。</p>
          }
        },
        {
          id: 4, title: '④ 時刻',
          content: <p>両辺を10倍すると <M t="$-5x+280=-3x+180$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '長さが等しくなるのは何分後？',
            options: ['50', '30', '40'],
            correctAnswer: '50',
            explanation: <p><M t="$2x=100$" /> より <M t="$x=50$" />。24≦x≦56 にも 10≦x≦60 にも入っているので、2本とも燃えている時刻です。</p>
          }
        },
        {
          id: 5, title: '⑤ そのときの長さ',
          content: <p><M t="$x=50$" /> をどちらかの式に代入します。</p>,
          quiz: {
            type: 'choice',
            question: 'そのときの長さは何cm？',
            options: ['3', '9', '5'],
            correctAnswer: '3',
            explanation: <div><A6Fig withQ /><p><M t="$y=-0.5\times50+28=3$" />。検算：Qの式でも <M t="$-0.3\times50+18=3$" /> で一致します。答えは50分後、長さ3cmです。</p></div>
          }
        }
      ]
    }
  ]
};

export const ruijiA: Record<string, MajorQuestionData> = { a1, a2, a3, a4, a5, a6 };
