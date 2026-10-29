import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { R7TriangleFig, R7LinesFig, R7NumberTableFig, R7PointsFig, R7PyramidFig, R7TwoTrianglesFig, R7SugarTable, R7SquareFig, R7FuncGraphFig, R7DanceIntro } from './r7_figs';

export type SubQuestionData = {
  id: string; // e.g. "1", "2-(1)"
  title: string;
  knowledge: string[];
  originalText: React.ReactNode;
  steps: Step[];
};

export type MajorQuestionData = {
  id: string; // e.g. "q1"
  title: string;
  subs: SubQuestionData[];
};

export const r7Data: Record<string, MajorQuestionData> = {
  "q1": {
    id: "q1",
    title: "令和7年 大問1：基本の小問集合",
    subs: [
      {
        id: "1",
        title: "(1) 正負の数の計算",
        knowledge: ["正負の数"],
        originalText: <p><TextWithMath text="$-4-3$" /> を計算しなさい。</p>,
        steps: [
          {
            id: 1, title: '① 引き算をたし算に直す',
            content: <p>「−3 を引く」は「−3 をたす」と同じです。まず全部たし算の形にします。</p>,
            quiz: { type: 'choice', question: '−4 − 3 をたし算の形に直すと？', options: ['(−4) + (−3)', '(−4) + (+3)', '(+4) + (−3)'], correctAnswer: '(−4) + (−3)', explanation: <p><TextWithMath text="$-4-3=(-4)+(-3)$" /> です。</p> }
          },
          {
            id: 2, title: '② 答えの符号',
            content: <p>同じ符号どうしのたし算は、その共通の符号がつきます。</p>,
            quiz: { type: 'choice', question: '(−4) + (−3) の答えの符号は？', options: ['−（マイナス）', '＋（プラス）', '0（符号なし）', '±（どちらにもなる）'], correctAnswer: '−（マイナス）', explanation: <p>どちらもマイナスなので、答えもマイナスです。</p> }
          },
          {
            id: 3, title: '③ 答え',
            content: <p>符号はマイナス、数の部分は 4 と 3 をたします。</p>,
            quiz: { type: 'choice', question: '−4 − 3 を計算すると？', options: ['−7', '7', '−1', '1'], correctAnswer: '−7', explanation: <p><TextWithMath text="$-4-3=-7$" /> です。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 素因数分解",
        knowledge: ["素因数分解"],
        originalText: <p>2025を素因数分解すると <TextWithMath text="$3^ア \times 5^イ$" /> と表せる。ア、イを求めなさい。</p>,
        steps: [
          {
            id: 1, title: '① 何で割り始める？',
            content: <p>素因数分解は、小さい素数で割れるだけ割っていきます。2025は一の位が5です。</p>,
            quiz: { type: 'choice', question: '2025 をまず割れる素数はどれ？', options: ['5', '2', '7'], correctAnswer: '5', explanation: <p>一の位が5なので5で割れます。<TextWithMath text="$2025 \div 5 = 405$" />。</p> }
          },
          {
            id: 2, title: '② もう一度5で割る',
            content: <p>405 も一の位が5です。</p>,
            quiz: { type: 'choice', question: '405 ÷ 5 は？', options: ['81', '85', '71'], correctAnswer: '81', explanation: <p><TextWithMath text="$405 \div 5 = 81$" />。81 はもう5では割れません。</p> }
          },
          {
            id: 3, title: '③ 81 を3の累乗に',
            content: <p>81 は 3 で割り続けられます。81 → 27 → 9 → 3 → 1。</p>,
            quiz: { type: 'choice', question: '81 を3の累乗で表すと？', options: ['3³', '3⁴', '3⁵'], correctAnswer: '3⁴', explanation: <p>3で4回割れたので <TextWithMath text="$81 = 3^4$" /> です。</p> }
          },
          {
            id: 4, title: '④ まとめる',
            content: <p>5で2回、3で4回割れました。</p>,
            quiz: { type: 'choice', question: 'ア、イに入る数は？', options: ['ア=4, イ=2', 'ア=2, イ=4', 'ア=4, イ=1'], correctAnswer: 'ア=4, イ=2', explanation: <p><TextWithMath text="$2025 = 3^4 \times 5^2$" />。ア=4、イ=2 です。</p> }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 因数分解",
        knowledge: ["因数分解"],
        originalText: <p><TextWithMath text="$x^2 + 2x - 15$" /> を因数分解しなさい。</p>,
        steps: [
          {
            id: 1, title: '① 何を探す？',
            content: <p><TextWithMath text="$x^2+(a+b)x+ab=(x+a)(x+b)$" /> の形を使います。かけて定数項、たして x の係数になる2つの数を探します。</p>,
            quiz: { type: 'choice', question: 'x² + 2x − 15 で探すのはどんな2つの数？', options: ['かけて −15、たして 2', 'かけて 2、たして −15', 'かけて 15、たして 2', 'かけて −15、たして −2', 'かけて 15、たして −2'], correctAnswer: 'かけて −15、たして 2', explanation: <p>定数項 −15 が「かけた答え」、xの係数 2 が「たした答え」です。</p> }
          },
          {
            id: 2, title: '② 2つの数を見つける',
            content: <p>かけてマイナスなので、2つの数は符号がちがいます。15 = 1×15、3×5 の組から探します。</p>,
            quiz: { type: 'choice', question: 'かけて −15、たして 2 になる2つの数は？', options: ['5 と −3', '−5 と 3', '15 と −1'], correctAnswer: '5 と −3', explanation: <p><TextWithMath text="$5 \times (-3) = -15$" />、<TextWithMath text="$5 + (-3) = 2$" /> です。</p> }
          },
          {
            id: 3, title: '③ 答え',
            content: <p>見つけた2つの数を (x + □)(x + □) に入れます。</p>,
            quiz: { type: 'choice', question: 'x² + 2x − 15 を因数分解すると？', options: ['(x + 5)(x − 3)', '(x − 5)(x + 3)', '(x + 15)(x − 1)'], correctAnswer: '(x + 5)(x − 3)', explanation: <p><TextWithMath text="$(x+5)(x-3)$" /> です。展開して元に戻るか確かめると安心です。</p> }
          }
        ]
      },
      {
        id: "4",
        title: "(4) 四分位範囲",
        knowledge: ["四分位範囲"],
        originalText: <div className="space-y-2"><p>次のデータは、クイズ大会に参加した6人の生徒の得点である。このデータの四分位範囲を求めなさい。</p><p className="text-center border border-slate-400 rounded px-3 py-1 w-fit mx-auto">19, 20, 7, 16, 24, 11（点）</p></div>,
        steps: [
          {
            id: 1, title: '① 小さい順に並べる',
            content: <p>四分位数は、まずデータを小さい順に並べてから考えます。</p>,
            quiz: { type: 'choice', question: '19, 20, 7, 16, 24, 11 を小さい順に並べると？', options: ['7, 11, 16, 19, 20, 24', '7, 11, 16, 20, 19, 24', '7, 16, 11, 19, 20, 24'], correctAnswer: '7, 11, 16, 19, 20, 24', explanation: <p>7, 11, 16, 19, 20, 24 です。</p> }
          },
          {
            id: 2, title: '② 前半と後半に分ける',
            content: <p>データは6個なので、真ん中で3個ずつに分けます。</p>,
            quiz: { type: 'choice', question: '前半のデータはどれ？', options: ['7, 11, 16', '7, 11, 16, 19', '7, 11'], correctAnswer: '7, 11, 16', explanation: <p>前半は 7, 11, 16、後半は 19, 20, 24 です。</p> }
          },
          {
            id: 3, title: '③ 第1四分位数',
            content: <p>第1四分位数は、前半のデータの中央値です。</p>,
            quiz: { type: 'choice', question: '第1四分位数は？', options: ['11', '9', '16'], correctAnswer: '11', explanation: <p>7, 11, 16 の真ん中なので 11 です。</p> }
          },
          {
            id: 4, title: '④ 第3四分位数',
            content: <p>第3四分位数は、後半のデータの中央値です。</p>,
            quiz: { type: 'choice', question: '第3四分位数は？', options: ['20', '19.5', '24'], correctAnswer: '20', explanation: <p>19, 20, 24 の真ん中なので 20 です。</p> }
          },
          {
            id: 5, title: '⑤ 四分位範囲',
            content: <p>四分位範囲 = 第3四分位数 − 第1四分位数 です。</p>,
            quiz: { type: 'choice', question: 'このデータの四分位範囲は？', options: ['9点', '8点', '17点'], correctAnswer: '9点', explanation: <p><TextWithMath text="$20 - 11 = 9$" />（点）。17点は「最大値 − 最小値」の範囲なので別物です。</p> }
          }
        ]
      },
      {
        id: "5",
        title: "(5) 正多角形の内角",
        knowledge: ["多角形の内角の和"],
        originalText: <p>正十角形の1つの内角の大きさを求めなさい。</p>,
        steps: [
          {
            id: 1, title: '① 内角の和の公式',
            content: <p>n角形は、1つの頂点から対角線を引くと (n − 2) 個の三角形に分けられます。</p>,
            quiz: { type: 'choice', question: 'n角形の内角の和を表す式は？', options: ['180 × (n − 2)', '180 × n', '360 × (n − 2)'], correctAnswer: '180 × (n − 2)', explanation: <p>三角形1つが180°なので、180 × (n − 2) です。</p> }
          },
          {
            id: 2, title: '② 十角形の内角の和',
            content: <p>十角形なので n = 10 を入れます。</p>,
            quiz: { type: 'choice', question: '十角形の内角の和は？', options: ['1440°', '1800°', '1260°'], correctAnswer: '1440°', explanation: <p><TextWithMath text="$180 \times (10-2) = 180 \times 8 = 1440$" />（°）です。</p> }
          },
          {
            id: 3, title: '③ 1つの内角',
            content: <p>正十角形は10個の内角がすべて等しいので、和を10等分します。</p>,
            quiz: { type: 'choice', question: '正十角形の1つの内角は？', options: ['144°', '140°', '150°'], correctAnswer: '144°', explanation: <p><TextWithMath text="$1440 \div 10 = 144$" />（°）。外角から考えても <TextWithMath text="$180 - 360 \div 10 = 144$" /> になります。</p> }
          }
        ]
      },
      {
        id: "6",
        title: "(6) 回転体の体積",
        knowledge: ["円錐の体積"],
        originalText: <div><p>右の図の三角形を、辺ACを軸として1回転させてできる立体の体積を求めなさい。ただし、円周率は <TextWithMath text="$\pi$" /> とする。</p><R7TriangleFig /></div>,
        steps: [
          {
            id: 1, title: '① どんな立体ができる？',
            content: <p>直角三角形ABCを、辺ACを軸にしてくるっと1回転させます。辺ACは軸なので動かず、点Bが円をえがきます。</p>,
            quiz: { type: 'choice', question: '回転させてできる立体はどれ？', options: ['円柱', '円錐', '球', '三角錐', '円錐台'], correctAnswer: '円錐', explanation: <p>軸の上の点Aがとがった頂点、点Bがえがく円が底面になるので、円錐です。</p> }
          },
          {
            id: 2, title: '② 体積の基本の式',
            content: <p>体積の基本は「底面積 × 高さ」。これで求まるのは柱の形（角柱・円柱）です。<br/>とがった形（角錐・円錐）は、同じ底面・同じ高さの柱の <strong>3分の1</strong> になります。</p>,
            quiz: { type: 'choice', question: '円錐の体積を求める式はどれ？', options: ['底面積 × 高さ', '底面積 × 高さ × 1/3', '底面積 × 高さ × 1/2', '底面積 × 高さ × 2/3', '底面積 × 高さ × 3'], correctAnswer: '底面積 × 高さ × 1/3', explanation: <p>円錐は「とがった形」なので、柱の式に 1/3 をかけます。</p> }
          },
          {
            id: 3, title: '③ 底面の半径はどこ？',
            content: <p>底面は点Bがえがく円です。その円の中心は軸の上の点C。</p>,
            quiz: { type: 'choice', question: '底面の円の半径はどの辺？', options: ['AC（2cm）', 'BC（5cm）', 'AB'], correctAnswer: 'BC（5cm）', explanation: <p>軸ACから点Bまでの距離、つまりBC＝5cmが半径です。ACは軸なので「高さ」のほうになります。</p> }
          },
          {
            id: 4, title: '④ 底面積を求める',
            content: <p>円の面積は「半径 × 半径 × π」です。</p>,
            quiz: { type: 'choice', question: '半径5cmの円の面積は？', options: ['10π cm²', '25π cm²', '4π cm²'], correctAnswer: '25π cm²', explanation: <p><TextWithMath text="$5 \times 5 \times \pi = 25\pi$" />（cm²）。10πは円周の長さと混ざったときのミスです。</p> }
          },
          {
            id: 5, title: '⑤ 高さはどこ？',
            content: <p>円錐の高さは、頂点Aから底面の中心Cまでの長さです。</p>,
            quiz: { type: 'choice', question: '円錐の高さは？', options: ['2cm', '5cm', '7cm'], correctAnswer: '2cm', explanation: <p>軸になっている辺AC＝2cmが高さです。</p> }
          },
          {
            id: 6, title: '⑥ 底面積 × 高さ',
            content: <p>まず柱（円柱）だと思って「底面積 × 高さ」を計算します。</p>,
            quiz: { type: 'choice', question: '25π × 2 はいくつ？', options: ['27π', '50π', '25π'], correctAnswer: '50π', explanation: <p><TextWithMath text="$25\pi \times 2 = 50\pi$" />。これは同じ底面・高さの円柱の体積です。</p> }
          },
          {
            id: 7, title: '⑦ 円錐なので 1/3 をかける',
            content: <p>円錐は円柱の3分の1です。</p>,
            quiz: { type: 'choice', question: '求める立体の体積は？', options: ['50π cm³', '50/3 π cm³', '20/3 π cm³'], correctAnswer: '50/3 π cm³', explanation: <p><TextWithMath text="$50\pi \times \frac{1}{3} = \frac{50}{3}\pi$" />（cm³）。半径と高さを逆にすると 20/3 π になってしまうので、③で「半径はBC」を確認したことが大事です。</p> }
          }
        ]
      },
      {
        id: "7",
        title: "(7) 2次関数の変域",
        knowledge: ["2次関数の変域"],
        originalText: <p>関数 <TextWithMath text="$y = 2x^2$" />（<TextWithMath text="$-1 \leqq x \leqq 3$" />）の <TextWithMath text="$y$" /> の変域を求めなさい。</p>,
        steps: [
          {
            id: 1, title: '① グラフの形',
            content: <p><TextWithMath text="$y=2x^2$" /> は比例定数が正なので、上に開いた放物線です。</p>,
            quiz: { type: 'choice', question: 'y = 2x² で y がいちばん小さくなるのはどこ？', options: ['原点（x = 0）', 'x の変域の左はし', 'x の変域の右はし'], correctAnswer: '原点（x = 0）', explanation: <p>上に開いた放物線は、原点が一番下（y = 0）です。</p> }
          },
          {
            id: 2, title: '② 変域に x = 0 が入る？',
            content: <p>x の変域は <TextWithMath text="$-1 \leqq x \leqq 3$" /> です。</p>,
            quiz: { type: 'choice', question: 'この変域に x = 0 は含まれる？', options: ['含まれる', '含まれない'], correctAnswer: '含まれる', explanation: <p>−1 から 3 の間に 0 があるので、グラフは原点を通ります。だから y の最小値は 0 です。</p> }
          },
          {
            id: 3, title: '③ 最大値',
            content: <p>y が一番大きくなるのは、0 から一番遠い x のときです。x = −1 と x = 3 では 3 の方が遠い。</p>,
            quiz: { type: 'choice', question: 'y の最大値は？', options: ['18（x = 3 のとき）', '2（x = −1 のとき）', '6（x = 3 のとき）'], correctAnswer: '18（x = 3 のとき）', explanation: <p><TextWithMath text="$2 \times 3^2 = 18$" /> です。</p> }
          },
          {
            id: 4, title: '④ 答え',
            content: <p>最小値 0、最大値 18 をまとめます。</p>,
            quiz: { type: 'choice', question: 'y の変域は？', options: ['0 ≦ y ≦ 18', '2 ≦ y ≦ 18', '−2 ≦ y ≦ 18'], correctAnswer: '0 ≦ y ≦ 18', explanation: <p><TextWithMath text="$0 \leqq y \leqq 18$" />。両はしの値だけ入れて 2 ≦ y ≦ 18 とするのが典型的なミスです。</p> }
          }
        ]
      },
      {
        id: "8",
        title: "(8) 1次関数のグラフ",
        knowledge: ["1次関数のグラフ"],
        originalText: <div><p>右の図のように、1次関数 <TextWithMath text="$y=ax+b$" />、<TextWithMath text="$y=cx+d$" />（<TextWithMath text="$a, b, c, d$" /> は定数）のグラフがある。このとき、<TextWithMath text="$a$" /> と <TextWithMath text="$c$" />、<TextWithMath text="$b$" /> と <TextWithMath text="$d$" /> の関係について表した不等式の組み合わせとして正しいものを、次のア、イ、ウ、エのうちから1つ選んで、記号で答えなさい。</p><R7LinesFig /><p>ア <TextWithMath text="$a<c,\ b<d$" />　イ <TextWithMath text="$a>c,\ b<d$" />　ウ <TextWithMath text="$a<c,\ b>d$" />　エ <TextWithMath text="$a>c,\ b>d$" /></p></div>,
        steps: [
          {
            id: 1, title: '① 傾きの符号',
            content: <p>グラフが右上がりなら傾きは正、右下がりなら負です。</p>,
            quiz: { type: 'choice', question: '図の2本の直線の傾き a, c の符号は？', options: ['どちらも負', 'どちらも正', 'a は負、c は正', 'a は正、c は負', 'どちらも 0'], correctAnswer: 'どちらも負', explanation: <p>2本とも右下がりなので、a も c も負の数です。</p> }
          },
          {
            id: 2, title: '② a と c の大小',
            content: <p><TextWithMath text="$y=ax+b$" /> の方が急に下がっています。右下がりで急なほど、傾きの値は小さい（マイナスが大きい）数になります。</p>,
            quiz: { type: 'choice', question: 'a と c の大小は？', options: ['a < c', 'a > c', 'a = c', 'a ≧ c', '比べられない'], correctAnswer: 'a < c', explanation: <p>たとえば a = −3、c = −1/2 のようなイメージで、a &lt; c です。</p> }
          },
          {
            id: 3, title: '③ 切片 b と d の大小',
            content: <p>切片は、グラフが y 軸と交わる点の y 座標です。</p>,
            quiz: { type: 'choice', question: 'b と d の大小は？', options: ['b > d', 'b < d', 'b = d', 'b ≦ d', '比べられない'], correctAnswer: 'b > d', explanation: <p><TextWithMath text="$y=ax+b$" /> の方が y 軸の高い位置で交わっているので b &gt; d です。</p> }
          },
          {
            id: 4, title: '④ 記号を選ぶ',
            content: <p>a &lt; c、b &gt; d の組み合わせを選びます。</p>,
            quiz: { type: 'choice', question: '正しい組み合わせの記号は？', options: ['ア a<c, b<d', 'イ a>c, b<d', 'ウ a<c, b>d', 'エ a>c, b>d'], correctAnswer: 'ウ a<c, b>d', explanation: <p>答えは ウ です。</p> }
          }
        ]
      }
    ]
  },
  "q2": {
    id: "q2",
    title: "令和7年 大問2：連立方程式と数の証明",
    subs: [
      {
        id: "1",
        title: "1. ルートと自然数の大小",
        knowledge: ["平方根の大小"],
        originalText: <p><TextWithMath text="$\sqrt{23}$" /> より小さい自然数は全部で何個か。</p>,
        steps: [
          {
            id: 1, title: '① 2乗して比べる',
            content: <p>ルートのついた数と自然数は、どちらも2乗すると比べやすくなります。5 と √23 なら、25 と 23 を比べます。</p>,
            quiz: { type: 'choice', question: '√23 と 5 はどちらが大きい？', options: ['5 の方が大きい', '√23 の方が大きい', '同じ', '比べられない'], correctAnswer: '5 の方が大きい', explanation: <p><TextWithMath text="$5^2=25 > 23$" /> なので、5 の方が大きいです。</p> }
          },
          {
            id: 2, title: '② 4 とも比べる',
            content: <p>次に 4 と比べます。</p>,
            quiz: { type: 'choice', question: '√23 と 4 はどちらが大きい？', options: ['√23 の方が大きい', '4 の方が大きい', '同じ', '比べられない'], correctAnswer: '√23 の方が大きい', explanation: <p><TextWithMath text="$4^2=16 < 23$" /> なので √23 の方が大きい。つまり <TextWithMath text="$4 < \sqrt{23} < 5$" /> です。</p> }
          },
          {
            id: 3, title: '③ 数える',
            content: <p>√23 は 4 と 5 の間の数です。それより小さい自然数を数えます。</p>,
            quiz: { type: 'choice', question: '√23 より小さい自然数は何個？', options: ['4個', '5個', '3個', '23個'], correctAnswer: '4個', explanation: <p>1, 2, 3, 4 の 4個 です。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. ノートと鉛筆の連立方程式",
        knowledge: ["連立方程式の立式と計算"],
        originalText: (
          <div className="space-y-3">
            <p>ある店では、ノートと鉛筆をセットで販売することにした。右の表のような2種類のセットのいずれかで販売したところ、全部で76冊のノートと、120本の鉛筆が売れた。</p>
            <table className="border-collapse text-sm mx-auto">
              <thead><tr><th className="border border-slate-400 px-3 py-1"></th><th className="border border-slate-400 px-3 py-1">ノート</th><th className="border border-slate-400 px-3 py-1">鉛筆</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-400 px-3 py-1">セットA</td><td className="border border-slate-400 px-3 py-1 text-center">2冊</td><td className="border border-slate-400 px-3 py-1 text-center">3本</td></tr>
                <tr><td className="border border-slate-400 px-3 py-1">セットB</td><td className="border border-slate-400 px-3 py-1 text-center">5冊</td><td className="border border-slate-400 px-3 py-1 text-center">8本</td></tr>
              </tbody>
            </table>
            <p>このとき、売れたセットAの数を <TextWithMath text="$x$" />、セットBの数を <TextWithMath text="$y$" /> として連立方程式をつくり、売れたセットAとセットBの数をそれぞれ求めなさい。ただし、途中の計算も書くこと。</p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '① まず、何をxとyにする？',
            content: (
              <div className="space-y-4">
                <p>文章問題が苦手な人は、いきなり式を立てようとせず、まずは**「表」**を書いて情報を整理するのが最大のコツです！<br/>今回の場合、以下のように整理できます。</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2"></th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-indigo-600 dark:text-indigo-400">セットA (xセット)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-pink-600 dark:text-pink-400">セットB (yセット)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-emerald-600 dark:text-emerald-400">合計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">ノートの数</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-indigo-600">2</span>x 冊</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-pink-600">5</span>y 冊</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">76 冊</td>
                      </tr>
                      <tr>
                        <th className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 text-sm">鉛筆の数</th>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-indigo-600">3</span>x 本</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2"><span className="font-bold text-pink-600">8</span>y 本</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold text-emerald-600">120 本</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'この問題では、何を x と y に設定するのが一番計算しやすいでしょうか？', 
              options: [
                'ノート1冊の値段をx円、鉛筆1本の値段をy円とする', 
                'セットAの売れた数をxセット、セットBの売れた数をyセットとする', 
                '売れたノートの合計をx冊、鉛筆の合計をy本とする', 'セットAの値段をx円、セットBの値段をy円とする', '売れたセットの合計をxセット、売上の合計をy円とする'
              ], 
              correctAnswer: 'セットAの売れた数をxセット、セットBの売れた数をyセットとする', 
              explanation: <p>問題の最後に「セットAとセットBはそれぞれ何セット売れたか」と聞かれているので、そのまま素直にそれをxとyにおくのが鉄則です！</p> 
            }
          },
          {
            id: 2, title: '② ノートについての方程式を立てる',
            content: <p>セットAが x 個、セットBが y 個売れました。<br/>まずは「ノートの冊数」だけに注目して式を作ります。</p>,
            quiz: { 
              type: 'choice', 
              question: 'ノートの合計が「76冊」であることを表す正しい方程式はどれですか？', 
              options: [
                '2x + 3y = 76', 
                '2x + 5y = 76', 
                '5x + 8y = 76'
              ], 
              correctAnswer: '2x + 5y = 76', 
              explanation: <p>セットA1つにつきノートは2冊入っているので「2x」、セットBには5冊入っているので「5y」。これを足して76冊になるので 2x + 5y = 76 が正解です。</p> 
            }
          },
          {
            id: 3, title: '③ 鉛筆についての方程式を立てる',
            content: <p>同じように「鉛筆の本数」だけに注目して2つ目の式を作ります。</p>,
            quiz: { 
              type: 'choice', 
              question: '鉛筆の合計が「120本」であることを表す正しい方程式はどれですか？', 
              options: [
                '3x + 8y = 120', 
                '8x + 3y = 120', 
                '2x + 5y = 120'
              ], 
              correctAnswer: '3x + 8y = 120', 
              explanation: <p>セットAには鉛筆が3本(3x)、セットBには8本(8y)なので、3x + 8y = 120 となります。</p> 
            }
          },
          {
            id: 4, title: '④ 連立方程式の計算（係数を合わせる）',
            content: (
              <div className="space-y-2">
                <p>2つの式が完成しました。</p>
                <MathText block math="\begin{cases} 2x + 5y = 76 \dots ① \\ 3x + 8y = 120 \dots ② \end{cases}" />
                <p>x を消去するために、加減法を使います。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'xの係数を合わせるために、①の式を3倍、②の式を2倍して引き算します。①を3倍した式はどうなりますか？', 
              options: [
                '6x + 5y = 76', 
                '6x + 15y = 228', 
                '6x + 15y = 76',
                '5x + 8y = 228'
              ], 
              correctAnswer: '6x + 15y = 228', 
              explanation: <p>左辺も右辺もすべて3倍します。<br/>2x × 3 = 6x<br/>5y × 3 = 15y<br/>76 × 3 = 228<br/>よって 6x + 15y = 228 となります。</p> 
            }
          },
          {
            id: 5, title: '⑤ 連立方程式の計算（yを求めてxを出す）',
            content: (
              <div className="space-y-2">
                <p>式を引き算して y を求めます。</p>
                <div className="text-center font-mono">
                  <p>  6x + 15y = 228</p>
                  <p>-) 6x + 16y = 240</p>
                  <p>----------------</p>
                  <p>       -y = -12</p>
                  <p>        y = 12</p>
                </div>
                <p>これで セットB(y) が 12セット だと分かりました。<br/>あとは、①の式 (2x + 5y = 76) に y=12 を代入して x を求めます。</p>
              </div>
            ),
            quiz: { 
              type: 'choice', 
              question: 'y=12 を代入して計算すると、x (セットAの数) はいくつになりますか？', 
              options: [
                'x = 10', 
                'x = 13', 
                'x = 8'
              ], 
              correctAnswer: 'x = 8', 
              explanation: <p>2x + 5(12) = 76<br/>2x + 60 = 76<br/>2x = 16<br/>x = 8<br/>よって、セットAは8個、セットBは12個となります！</p> 
            }
          }
        ]
      },
      {
        id: "3",
        title: "3. 数表の規則性の証明",
        knowledge: ["文字を使った数の証明", "式の展開"],
        originalText: <div><p>下の表は、1から100までの自然数を左から右へ10個ずつ、上から下へ順に並べたものである。</p><p>この表中の太線で囲んだ 23, 24, 34, 35 のような4つの整数の組 <TextWithMath text="$a, b, c, d$" />（下の図の右）について、<TextWithMath text="$bc - ad$" /> の値はつねに11になる。このことを証明しなさい。</p><R7NumberTableFig /></div>,
        steps: [
          {
            id: 1, title: '① 表の規則',
            content: <p>1行に10個ずつ並んでいます。右へ1つ進むと +1 です。</p>,
            quiz: { type: 'choice', question: '表で1つ下へ進むと、数はいくつ増える？', options: ['10', '1', '11'], correctAnswer: '10', explanation: <p>1行10個なので、真下の数は +10 です。</p> }
          },
          {
            id: 2, title: '② b を文字で',
            content: <p>左上の a を <TextWithMath text="$n$" /> とします。b は a のすぐ右です（23 → 24）。</p>,
            quiz: { type: 'choice', question: 'b を n で表すと？', options: ['n + 1', 'n + 10', 'n + 11'], correctAnswer: 'n + 1', explanation: <p>右へ1つなので <TextWithMath text="$b=n+1$" /> です。</p> }
          },
          {
            id: 3, title: '③ c と d を文字で',
            content: <p>c は b の真下（24 → 34）、d は c のすぐ右（34 → 35）です。</p>,
            quiz: { type: 'choice', question: 'c と d を n で表すと？', options: ['c = n + 11, d = n + 12', 'c = n + 10, d = n + 11', 'c = n + 11, d = n + 21'], correctAnswer: 'c = n + 11, d = n + 12', explanation: <p>c は b より10大きいので <TextWithMath text="$n+11$" />、d はその右で <TextWithMath text="$n+12$" /> です。</p> }
          },
          {
            id: 4, title: '④ bc を展開',
            content: <p>b × c を展開します。</p>,
            quiz: { type: 'choice', question: '(n + 1)(n + 11) を展開すると？', options: ['n² + 12n + 11', 'n² + 11n + 11', 'n² + 12n + 12'], correctAnswer: 'n² + 12n + 11', explanation: <p><TextWithMath text="$(n+1)(n+11)=n^2+12n+11$" /> です。</p> }
          },
          {
            id: 5, title: '⑤ ad を展開',
            content: <p>a × d を展開します。</p>,
            quiz: { type: 'choice', question: 'n(n + 12) を展開すると？', options: ['n² + 12n', 'n² + 12', 'n² + 13n'], correctAnswer: 'n² + 12n', explanation: <p><TextWithMath text="$n(n+12)=n^2+12n$" /> です。</p> }
          },
          {
            id: 6, title: '⑥ bc − ad を計算して結論',
            content: <p>④から⑤を引きます。</p>,
            quiz: { type: 'choice', question: 'bc − ad は？', options: ['11', 'n + 11', '2n² + 24n + 11'], correctAnswer: '11', explanation: <p><TextWithMath text="$(n^2+12n+11)-(n^2+12n)=11$" />。n がどんな数でも11になるので、bc − ad はつねに11です。証明完了！</p> }
          }
        ]
      }
    ]
  },
  "q3": {
    id: "q3",
    title: "令和7年 大問3：図形の作図と証明",
    subs: [
      {
        id: "1",
        title: "1. 90°回転の作図",
        knowledge: ["垂線の作図"],
        originalText: <div><p>右の図のように、2点A、Bがある。点Aを中心として点Bを反時計回りに90°回転させた点Pを作図によって求めなさい。ただし、作図には定規とコンパスを使い、また、作図に用いた線は消さないこと。</p><R7PointsFig /></div>,
        steps: [
          {
            id: 1, title: '① 90°回転とは',
            content: <p>点Aを中心に点Bを回転させるとき、Aからの距離は変わりません。</p>,
            quiz: { type: 'choice', question: '点Bを点Aを中心に90°回転させた点Pが満たす条件は？', options: ['AP = AB かつ ∠BAP = 90°', 'AP = AB かつ ∠ABP = 90°', 'BP = AB かつ ∠BAP = 90°', 'AP = BP かつ ∠BAP = 90°', 'AP = AB かつ ∠APB = 90°'], correctAnswer: 'AP = AB かつ ∠BAP = 90°', explanation: <p>中心Aからの距離が等しく（AP = AB）、回した角が90°（∠BAP = 90°）です。</p> }
          },
          {
            id: 2, title: '② ∠BAP = 90° をつくる作図',
            content: <p>点Aで直線ABに直角な線を引けばよい。</p>,
            quiz: { type: 'choice', question: '使う作図はどれ？', options: ['点Aを通る直線ABの垂線', '線分ABの垂直二等分線', '∠Aの二等分線', '点Bを通る直線ABの垂線', '点Aを通る直線ABの平行線'], correctAnswer: '点Aを通る直線ABの垂線', explanation: <p>直線AB上の点Aを通る垂線です。垂直二等分線だとABの中点を通ってしまいます。</p> }
          },
          {
            id: 3, title: '③ 垂線の作図の手順',
            content: <p>まず直線ABをAの反対側にも少し延ばしておきます。</p>,
            quiz: { type: 'choice', question: '点Aを通る垂線を引くとき、最初にすることは？', options: ['Aを中心に円をかき、直線ABとの交点を2つとる', 'Bを中心に円をかく', 'ABの中点をとる', 'Aを中心に円をかき、直線ABとの交点を1つとる', '分度器でAに90°の角をとる'], correctAnswer: 'Aを中心に円をかき、直線ABとの交点を2つとる', explanation: <p>Aを中心とする円で直線AB上に2点をとり、その2点を中心に同じ半径の円をかいて交点を作ります。その交点とAを結ぶと垂線です。</p> }
          },
          {
            id: 4, title: '④ AP = AB にする',
            content: <p>垂線は引けました。あとは長さをABと同じにします。</p>,
            quiz: { type: 'choice', question: '点Pの位置を決めるには？', options: ['Aを中心に半径ABの円をかき、垂線との交点をとる', 'Bを中心に半径ABの円をかき、垂線との交点をとる', '垂線とABの交点をPにする', 'Aを中心に半径ABの半分の円をかき、垂線との交点をとる', 'ABの中点を中心に半径ABの円をかき、垂線との交点をとる'], correctAnswer: 'Aを中心に半径ABの円をかき、垂線との交点をとる', explanation: <p>半径ABの円なら AP = AB になります。</p> }
          },
          {
            id: 5, title: '⑤ どちらの交点？',
            content: <p>円と垂線の交点は、直線ABをはさんで2つできます。反時計回りは「左回り」です。</p>,
            quiz: { type: 'choice', question: '図でBは右下、Aは左上にあります。Aを中心にBを反時計回りに90°回すと、Pは直線ABのどちら側？', options: ['上側（Aの右上あたり）', '下側（Aの左下あたり）', '直線AB上（Aの左上あたり）', '直線AB上（Bと重なる点）'], correctAnswer: '上側（Aの右上あたり）', explanation: <p>右下にあるBを左回りに90°回すと、Aの右上へ行きます。こちらの交点がPです。作図の線は消さずに残しておきます。</p> }
          }
        ]
      },
      {
        id: "2-1",
        title: "2(1). 正四角錐の体積比",
        knowledge: ["相似比と面積比・体積比の関係"],
        originalText: <div className="space-y-2"><p>右の図のような、正方形ABCDを底面とする正四角錐OABCDがあり、辺OA、OB、OC、OD上にそれぞれ点E、F、G、Hを四角形EFGHが正方形となるようにとる。</p><p>正方形ABCDの面積が16cm²、正方形EFGHの面積が4cm²のとき、次の(1)、(2)の問いに答えなさい。</p><R7PyramidFig /><p>(1) 正四角錐OEFGHと正四角錐OABCDの体積の比を、最も簡単な整数の比で表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 2つの四角錐の関係',
            content: <p>正方形EFGHは底面ABCDと平行な位置にあり、正四角錐OEFGHは正四角錐OABCDの上の部分を切り取った形です。</p>,
            quiz: { type: 'choice', question: '正四角錐OEFGHとOABCDはどんな関係？', options: ['合同', '相似（形が同じで大きさがちがう）', '関係はない', '底面積が等しい', '体積が等しい'], correctAnswer: '相似（形が同じで大きさがちがう）', explanation: <p>同じ形を縮小したものなので相似です。</p> }
          },
          {
            id: 2, title: '② 底面の1辺の長さ',
            content: <p>正方形の面積は「1辺 × 1辺」です。</p>,
            quiz: { type: 'choice', question: '面積16cm²の正方形ABCDと、面積4cm²の正方形EFGHの1辺は？', options: ['AB=4cm, EF=2cm', 'AB=8cm, EF=2cm', 'AB=16cm, EF=4cm'], correctAnswer: 'AB=4cm, EF=2cm', explanation: <p>4×4=16、2×2=4 なので、AB=4cm、EF=2cm です。</p> }
          },
          {
            id: 3, title: '③ 相似比',
            content: <p>対応する辺の長さの比が相似比です。</p>,
            quiz: { type: 'choice', question: 'OEFGH と OABCD の相似比 EF : AB は？', options: ['1 : 2', '1 : 4', '1 : 8'], correctAnswer: '1 : 2', explanation: <p>2 : 4 = 1 : 2。高さも同じく 1 : 2 になります。</p> }
          },
          {
            id: 4, title: '④ 体積の式で比べる',
            content: <p>四角錐の体積は「底面積 × 高さ × 1/3」。<br/>底面積の比は 4 : 16 = 1 : 4、高さの比は相似比と同じ 1 : 2 です。1/3 はどちらにもかかるので、比には影響しません。</p>,
            quiz: { type: 'choice', question: '体積の比（OEFGH : OABCD）は？', options: ['1 : 4', '1 : 6', '1 : 8'], correctAnswer: '1 : 8', explanation: <p>底面積の比 1:4 と高さの比 1:2 をかけて、1×1 : 4×2 = 1 : 8。相似比 1:2 の3乗（<TextWithMath text="$1^3 : 2^3$" />）と同じになります。</p> }
          }
        ]
      },
      {
        id: "2-2",
        title: "2(2). 四角錐の高さ",
        knowledge: ["三平方の定理"],
        originalText: <div className="space-y-2"><p>右の図のような、正方形ABCDを底面とする正四角錐OABCDがあり、辺OA、OB、OC、OD上にそれぞれ点E、F、G、Hを四角形EFGHが正方形となるようにとる。</p><p>正方形ABCDの面積が16cm²、正方形EFGHの面積が4cm²のとき、次の(1)、(2)の問いに答えなさい。</p><R7PyramidFig /><p>(2) 正四角錐OABCDの表面積が64cm²のとき、正四角錐OABCDの高さを求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 表面積 = 底面積 + 側面積',
            content: <p>表面積64cm²のうち、底面の正方形ABCDは16cm²です。残りが側面（三角形4つ）です。</p>,
            quiz: { type: 'choice', question: '側面積の合計は？', options: ['48 cm²', '60 cm²', '80 cm²'], correctAnswer: '48 cm²', explanation: <p>64 − 16 = 48（cm²）。</p> }
          },
          {
            id: 2, title: '② 側面の三角形1つ分',
            content: <p>正四角錐の側面は、同じ形の二等辺三角形が4つです。</p>,
            quiz: { type: 'choice', question: '三角形OAB 1つの面積は？', options: ['12 cm²', '16 cm²', '24 cm²'], correctAnswer: '12 cm²', explanation: <p>48 ÷ 4 = 12（cm²）。</p> }
          },
          {
            id: 3, title: '③ 三角形OABの高さ',
            content: <p>辺ABの中点をMとすると、OMが三角形OABの高さです。底辺AB=4cm（面積16の正方形の1辺）。三角形の面積は「底辺 × 高さ ÷ 2」。</p>,
            quiz: { type: 'choice', question: '4 × OM ÷ 2 = 12 より、OMは？', options: ['3 cm', '6 cm', '8 cm'], correctAnswer: '6 cm', explanation: <p>2 × OM = 12 なので OM = 6cm です。</p> }
          },
          {
            id: 4, title: '④ 高さを含む直角三角形を見つける',
            content: <p>底面の正方形の中心をIとすると、四角錐の高さはOIです。三角形OIMは、∠OIM=90°の直角三角形になります。</p>,
            quiz: { type: 'choice', question: 'IM（中心から辺ABの中点まで）の長さは？', options: ['2 cm', '4 cm', '2√2 cm'], correctAnswer: '2 cm', explanation: <p>IMは正方形の1辺の半分なので 4 ÷ 2 = 2cm。2√2cm は中心から頂点Aまでの長さなので別物です。</p> }
          },
          {
            id: 5, title: '⑤ 三平方の定理',
            content: <p>斜辺はOM=6cm、もう1辺はIM=2cm です。<TextWithMath text="$OI^2 + 2^2 = 6^2$" /></p>,
            quiz: { type: 'choice', question: '四角錐の高さOIは？', options: ['4√2 cm', '√40 cm', '4 cm'], correctAnswer: '4√2 cm', explanation: <p><TextWithMath text="$OI^2 = 36 - 4 = 32$" /> より <TextWithMath text="$OI = \sqrt{32} = 4\sqrt{2}$" />（cm）。√40 は足し算にしてしまったときのミスです。</p> }
          }
        ]
      },
      {
        id: "3",
        title: "3. 相似の証明",
        knowledge: ["三角形の外角の性質", "相似の証明"],
        originalText: <div><p>右の図のように、正三角形ABCと正三角形DEFがあり、点Eは辺AB上にある。また、辺BCと辺EF、辺ACと辺DEはいずれも交点をもち、その交点をそれぞれG、Hとする。</p><p>このとき、△AEH ∽ △BGE となることを証明しなさい。</p><R7TwoTrianglesFig /></div>,
        steps: [
          {
            id: 1, title: '① まず1組目の角',
            content: <p>△AEH と △BGE を比べます。∠A も ∠B も正三角形ABCの内角です。</p>,
            quiz: { type: 'choice', question: 'すぐにわかる等しい角は？', options: ['∠EAH = ∠GBE（どちらも60°）', '∠AEH = ∠BGE', '∠AHE = ∠BGE'], correctAnswer: '∠EAH = ∠GBE（どちらも60°）', explanation: <p>正三角形の内角なので、どちらも60°です。</p> }
          },
          {
            id: 2, title: '② 外角で ∠HEB を表す',
            content: <p>∠HEB は △AEH の外角です。三角形の外角は、となり合わない2つの内角の和になります。</p>,
            quiz: { type: 'choice', question: '∠HEB を △AEH の角で表すと？', options: ['∠HEB = ∠EAH + ∠AHE', '∠HEB = ∠EAH + ∠AEH', '∠HEB = 180° − ∠AHE'], correctAnswer: '∠HEB = ∠EAH + ∠AHE', explanation: <p><TextWithMath text="$\angle HEB = 60^\circ + \angle AHE$" /> です。</p> }
          },
          {
            id: 3, title: '③ 別の見方で ∠HEB を表す',
            content: <p>∠HEB は ∠HEG と ∠GEB に分けられます。∠HEG は正三角形DEFの角です。</p>,
            quiz: { type: 'choice', question: '∠HEG は何度？', options: ['60°', '90°', '120°'], correctAnswer: '60°', explanation: <p>正三角形DEFの内角なので60°。よって <TextWithMath text="$\angle HEB = 60^\circ + \angle BEG$" /> です。</p> }
          },
          {
            id: 4, title: '④ 2組目の角',
            content: <p>②と③の式は、どちらも ∠HEB を表しています。</p>,
            quiz: { type: 'choice', question: '2つの式からわかることは？', options: ['∠AHE = ∠BEG', '∠AEH = ∠BGE', '∠AHE = ∠BGE', '∠EAH = ∠BEG', '∠HEB = ∠BEG'], correctAnswer: '∠AHE = ∠BEG', explanation: <p><TextWithMath text="$60^\circ + \angle AHE = 60^\circ + \angle BEG$" /> なので ∠AHE = ∠BEG です。</p> }
          },
          {
            id: 5, title: '⑤ 相似条件',
            content: <p>①と④で、等しい角が2組そろいました。</p>,
            quiz: { type: 'choice', question: '使う相似条件は？', options: ['2組の角がそれぞれ等しい', '3組の辺の比がすべて等しい', '2組の辺の比とその間の角がそれぞれ等しい', '1組の辺とその両端の角がそれぞれ等しい', '2組の辺の比がそれぞれ等しい'], correctAnswer: '2組の角がそれぞれ等しい', explanation: <p>∠EAH = ∠GBE、∠AHE = ∠BEG より、2組の角がそれぞれ等しいので △AEH ∽ △BGE です。</p> }
          }
        ]
      }
    ]
  },
  "q4": {
    id: "q4",
    title: "令和7年 大問4：データの活用と確率",
    subs: [
      {
        id: "1",
        title: "1. データの活用",
        knowledge: ["累積度数", "標本調査", "相対度数"],
        originalText: <div className="space-y-2"><p>下の表は、ある農家で収穫された品種Aの梨800個から無作為に抽出した50個の梨の糖度と、収穫された品種Bの梨500個から無作為に抽出した30個の梨の糖度を測り、その結果を度数分布表にまとめたものである。</p><R7SugarTable /><p>このとき、次の(1)、(2)、(3)の問いに答えなさい。</p><p>(1) 品種Aについて、糖度が12.0以上12.5未満の階級の累積度数を求めなさい。</p><p>(2) 品種Bについて、収穫された500個のうち、糖度が13.0以上13.5未満の梨は何個含まれていると推定できるか。およその個数を求めなさい。</p><p>(3) この農家で収穫された品種Aと品種Bのうち、糖度が13.0以上の梨の割合が大きいのはどちらかをこの表から判断するときに、糖度が13.0以上の度数の大小を比較することは適切ではない。その理由を、この表から読み取れることで説明しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '(1)① 累積度数とは',
            content: <p>表の品種Aの列を見ます。</p>,
            quiz: { type: 'choice', question: '「累積度数」の意味は？', options: ['最初の階級からその階級までの度数をたしたもの', 'その階級だけの度数', 'その階級の度数を合計でわったもの', '最初の階級からその階級までの相対度数をたしたもの', 'その階級から最後の階級までの度数をたしたもの'], correctAnswer: '最初の階級からその階級までの度数をたしたもの', explanation: <p>上から順に積み上げた度数です。度数を合計でわったものは相対度数です。</p> }
          },
          {
            id: 2, title: '(1)② 計算する',
            content: <p>品種Aは 11.5〜12.0 が7個、12.0〜12.5 が15個です。</p>,
            quiz: { type: 'choice', question: '品種Aの 12.0以上12.5未満 の累積度数は？', options: ['22個', '15個', '36個'], correctAnswer: '22個', explanation: <p><TextWithMath text="$7 + 15 = 22$" />（個）です。</p> }
          },
          {
            id: 3, title: '(2)① 標本の割合',
            content: <p>品種Bは30個を取り出して調べ、13.0以上13.5未満は9個でした。</p>,
            quiz: { type: 'choice', question: '標本で 13.0以上13.5未満 の割合は？', options: ['3/10', '9/50', '1/3'], correctAnswer: '3/10', explanation: <p><TextWithMath text="$\frac{9}{30}=\frac{3}{10}$" /> です。</p> }
          },
          {
            id: 4, title: '(2)② 全体に当てはめる',
            content: <p>全体500個でも同じ割合だと考えます。</p>,
            quiz: { type: 'choice', question: '500個のうち、およそ何個と推定できる？', options: ['およそ150個', 'およそ90個', 'およそ180個'], correctAnswer: 'およそ150個', explanation: <p><TextWithMath text="$500 \times \frac{3}{10}=150$" />（個）です。</p> }
          },
          {
            id: 5, title: '(3)① 度数を比べると',
            content: <p>13.0以上は、品種Aが 12 + 2 = 14個、品種Bが 9 + 2 = 11個です。</p>,
            quiz: { type: 'choice', question: '度数だけ見るとどちらが多い？', options: ['品種A', '品種B', '同じ', '比べられない'], correctAnswer: '品種A', explanation: <p>度数ではAの方が多く見えます。でも、それで割合が大きいとは言えません。</p> }
          },
          {
            id: 6, title: '(3)② 度数で比べてはいけない理由',
            content: <p>それぞれ何個を調べたか（度数の合計）を見ます。品種Aは50個、品種Bは30個です。</p>,
            quiz: { type: 'choice', question: '度数で比べるのが適切でない理由は？', options: ['度数の合計（調べた個数）がちがうから', '糖度の基準がちがうから', '階級の幅がちがうから', '収穫された個数（800個と500個）がちがうから', '無作為に抽出していないから'], correctAnswer: '度数の合計（調べた個数）がちがうから', explanation: <p>度数の合計が50個と30個でちがうので、度数ではなく相対度数で比べる必要があります。（相対度数はA 14/50 = 0.28、B 11/30 ≒ 0.37 で、実はBの方が大きい。）</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. 正方形上の点の移動と確率",
        knowledge: ["さいころの確率", "規則性（余り）"],
        originalText: <div><p>右の図のように、正方形ABCDがあり、頂点Aの位置に点Pがある。大小2個のさいころを同時に投げ、点Pは出た目の数の和だけ、正方形の頂点から頂点へ反時計回りに動く。例えば、出た目の数の和が5のとき、点PはA→B→C→D→A→Bと動き、頂点Bの位置で止まる。</p><p>点Pの止まる位置について、確率が最も大きいのはどの頂点か。A、B、C、Dのうちから1つ選んで、記号で答えなさい。また、その頂点で止まる確率を求めなさい。</p><R7SquareFig /></div>,
        steps: [
          {
            id: 1, title: '① 4つ進むと元にもどる',
            content: <p>頂点は4つなので、4つ進むとAにもどります。</p>,
            quiz: { type: 'choice', question: '出た目の和が 4, 8, 12 のとき、点Pが止まる頂点は？', options: ['A', 'B', 'C', 'D', '和によってちがう'], correctAnswer: 'A', explanation: <p>4で割り切れるときはAです。和を4で割った余りで止まる頂点が決まり、余り1→B、余り2→C、余り3→D です。</p> }
          },
          {
            id: 2, title: '② 和ごとの通り数',
            content: <p>大小2個のさいころの目の出方は全部で 6 × 6 = 36 通り。和が7になるのは (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) です。</p>,
            quiz: { type: 'choice', question: '和が7になる目の出方は何通り？', options: ['6通り', '5通り', '7通り'], correctAnswer: '6通り', explanation: <p>6通りです。和ごとに 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:5, 9:4, 10:3, 11:2, 12:1 通りです。</p> }
          },
          {
            id: 3, title: '③ Dに止まる通り数',
            content: <p>Dに止まるのは、和が 3, 7, 11 のときです。</p>,
            quiz: { type: 'choice', question: 'Dに止まるのは何通り？', options: ['10通り', '9通り', '8通り'], correctAnswer: '10通り', explanation: <p><TextWithMath text="$2 + 6 + 2 = 10$" />（通り）です。</p> }
          },
          {
            id: 4, title: '④ ほかの頂点と比べる',
            content: <p>A（和4,8,12）は 3+5+1 = 9通り、B（和5,9）は 4+4 = 8通り、C（和2,6,10）は 1+5+3 = 9通り です。</p>,
            quiz: { type: 'choice', question: '止まる確率が最も大きい頂点は？', options: ['D', 'A', 'C', 'B', '4つとも同じ'], correctAnswer: 'D', explanation: <p>D の10通りが一番多いです（9 + 8 + 9 + 10 = 36 で全部そろっています）。</p> }
          },
          {
            id: 5, title: '⑤ 確率',
            content: <p>全体36通りのうち、Dは10通りです。</p>,
            quiz: { type: 'choice', question: 'Dに止まる確率は？', options: ['5/18', '1/4', '5/36'], correctAnswer: '5/18', explanation: <p><TextWithMath text="$\frac{10}{36}=\frac{5}{18}$" />。答えは D、確率 5/18 です。</p> }
          }
        ]
      }
    ]
  },
  "q5": {
    id: "q5",
    title: "令和7年 大問5：関数と水そう",
    subs: [
      {
        id: "1",
        title: "1. 変化の割合と円と直線",
        knowledge: ["変化の割合", "円と直線の交点", "三平方の定理"],
        originalText: (
          <div className="space-y-2">
            <p>下の図で、①は関数 <TextWithMath text="$y = ax^2$" />（<TextWithMath text="$a>0$" />）、②は関数 <TextWithMath text="$y = -\frac{9}{x}$" /> のグラフである。</p>
            <R7FuncGraphFig />
            <p>このとき、次の(1)、(2)、(3)の問いに答えなさい。</p>
            <p>(1) 次の文の（　）に当てはまる内容として最も適切なものを、下のア、イ、ウ、エのうちから1つ選んで、記号で答えなさい。</p>
            <p className="border border-slate-400 rounded px-3 py-2">①、②のグラフのうち、<TextWithMath text="$x<0$" /> の範囲において <TextWithMath text="$x$" /> の値が増加すると <TextWithMath text="$y$" /> の値も増加する関数のグラフは（　　）</p>
            <p>ア ①、②の両方である。　イ ①だけである。　ウ ②だけである。　エ ①、②のどちらでもない。</p>
            <p>(2) この2つの関数について、<TextWithMath text="$x$" /> の値が1から3まで増加するときの変化の割合が等しいとき、<TextWithMath text="$a$" /> の値を求めなさい。</p>
            <p>(3) <TextWithMath text="$a=1$" /> とする。また、①、②のグラフ上で <TextWithMath text="$x$" /> 座標が −1 である点をそれぞれA、Bとする。このとき、ABを直径とする円と <TextWithMath text="$y$" /> 軸との交点の <TextWithMath text="$y$" /> 座標を求めなさい。</p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '(1)① ①のグラフ',
            content: <p>①は <TextWithMath text="$a>0$" /> の放物線で、原点が一番下です。</p>,
            quiz: { type: 'choice', question: 'x < 0 の範囲で、①は x が増えると y はどうなる？', options: ['減る', '増える', '変わらない', '減ってから増える', '増えてから減る'], correctAnswer: '減る', explanation: <p>y軸より左では、放物線は右下がりなので y は減ります。</p> }
          },
          {
            id: 2, title: '(1)② ②のグラフ',
            content: <p>②は <TextWithMath text="$y=-\frac{9}{x}$" />。x = −3 と x = −1 で y を計算してみます。</p>,
            quiz: { type: 'choice', question: 'x = −3 と x = −1 のときの y は？', options: ['3 と 9（増える）', '−3 と −9（減る）', '9 と 3（減る）'], correctAnswer: '3 と 9（増える）', explanation: <p><TextWithMath text="$-\frac{9}{-3}=3$" />、<TextWithMath text="$-\frac{9}{-1}=9$" />。x が増えると y も増えます。</p> }
          },
          {
            id: 3, title: '(1)③ 記号',
            content: <p>①は減る、②は増える、でした。</p>,
            quiz: { type: 'choice', question: '当てはまる記号は？', options: ['ア ①、②の両方', 'イ ①だけ', 'ウ ②だけ', 'エ どちらでもない'], correctAnswer: 'ウ ②だけ', explanation: <p>答えは ウ です。</p> }
          },
          {
            id: 4, title: '(2)① 変化の割合の式',
            content: <p>変化の割合は「y の増加量 ÷ x の増加量」です。</p>,
            quiz: { type: 'choice', question: '②で x = 1 → 3 のときの変化の割合は？', options: ['3', '6', '−3'], correctAnswer: '3', explanation: <p>x = 1 で y = −9、x = 3 で y = −3。<TextWithMath text="$\frac{-3-(-9)}{3-1}=\frac{6}{2}=3$" /> です。</p> }
          },
          {
            id: 5, title: '(2)② ①の変化の割合',
            content: <p>①は x = 1 で y = a、x = 3 で y = 9a です。</p>,
            quiz: { type: 'choice', question: '①で x = 1 → 3 のときの変化の割合は？', options: ['4a', '8a', '2a'], correctAnswer: '4a', explanation: <p><TextWithMath text="$\frac{9a-a}{3-1}=\frac{8a}{2}=4a$" /> です。</p> }
          },
          {
            id: 6, title: '(2)③ a を求める',
            content: <p>2つの変化の割合が等しいので 4a = 3 です。</p>,
            quiz: { type: 'choice', question: 'a の値は？', options: ['3/4', '4/3', '12'], correctAnswer: '3/4', explanation: <p><TextWithMath text="$a=\frac{3}{4}$" /> です。</p> }
          },
          {
            id: 7, title: '(3)① 点A、Bの座標',
            content: <p>a = 1 なので①は <TextWithMath text="$y=x^2$" />。x = −1 を①、②に入れます。</p>,
            quiz: { type: 'choice', question: '点A、Bの座標は？', options: ['A(−1, 1)、B(−1, 9)', 'A(−1, −1)、B(−1, 9)', 'A(−1, 1)、B(−1, −9)'], correctAnswer: 'A(−1, 1)、B(−1, 9)', explanation: <p><TextWithMath text="$(-1)^2=1$" />、<TextWithMath text="$-\frac{9}{-1}=9$" /> です。</p> }
          },
          {
            id: 8, title: '(3)② 円の中心と半径',
            content: <p>ABが直径なので、中心はABの中点、半径はABの半分です。</p>,
            quiz: { type: 'choice', question: '円の中心と半径は？', options: ['中心(−1, 5)、半径4', '中心(−1, 5)、半径8', '中心(0, 5)、半径4'], correctAnswer: '中心(−1, 5)、半径4', explanation: <p>中点は (−1, (1+9)÷2) = (−1, 5)、AB = 8 なので半径4です。</p> }
          },
          {
            id: 9, title: '(3)③ 三平方の定理',
            content: <p>中心(−1, 5)と、y軸上の交点を結ぶと長さは半径4。中心からy軸までの横の距離は1です。この直角三角形のたての長さを h とします。</p>,
            quiz: { type: 'choice', question: 'h の値は？', options: ['√15', '3', '√17'], correctAnswer: '√15', explanation: <p><TextWithMath text="$1^2 + h^2 = 4^2$" /> より <TextWithMath text="$h^2=15$" />、<TextWithMath text="$h=\sqrt{15}$" /> です。</p> }
          },
          {
            id: 10, title: '(3)④ 交点の y 座標',
            content: <p>交点は中心の高さ5から、上と下に √15 ずつずれたところです。</p>,
            quiz: { type: 'choice', question: '交点の y 座標は？', options: ['5 + √15 と 5 − √15', '5 + √15 だけ', '√15 と −√15'], correctAnswer: '5 + √15 と 5 − √15', explanation: <p><TextWithMath text="$y = 5 \pm \sqrt{15}$" /> です。</p> }
          }
        ]
      },
      {
        id: "2",
        title: "2. 水そうとブロックの体積",
        knowledge: ["グラフの読み取り", "体積と速さの方程式"],
        originalText: (
          <div className="space-y-4">
            <p>図1のような深さ40cmの直方体の水そうの底に、直方体ABCD－EFGHのブロックが長方形EFGHを底面にして固定されている。この水そうを満水にし、水そうの底に取り付けられた排水口から毎分一定の量で排水した。図2は、排水を始めてから <TextWithMath text="$x$" /> 分後の水面の高さを <TextWithMath text="$y$" /> cmとして、<TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をグラフに表したものである。</p>
            <div className="grid sm:grid-cols-2 gap-4 bg-white p-4 rounded-xl">
              <figure className="text-center">
                <svg viewBox="0 0 240 190" className="w-full max-w-xs mx-auto">
                  {/* 水そう */}
                  <polygon points="40,40 180,40 220,15 80,15" fill="none" stroke="#64748b" strokeWidth="1" />
                  <line x1="40" y1="40" x2="40" y2="160" stroke="#64748b" strokeWidth="1" />
                  <line x1="180" y1="40" x2="180" y2="160" stroke="#64748b" strokeWidth="1" />
                  <line x1="220" y1="15" x2="220" y2="135" stroke="#64748b" strokeWidth="1" />
                  <line x1="80" y1="15" x2="80" y2="135" stroke="#94a3b8" strokeWidth="0.7" strokeDasharray="3 2" />
                  <polyline points="40,160 180,160 220,135" fill="none" stroke="#64748b" strokeWidth="1" />
                  <polyline points="40,160 80,135 220,135" fill="none" stroke="#94a3b8" strokeWidth="0.7" strokeDasharray="3 2" />
                  {/* ブロック */}
                  <polygon points="85,80 145,80 145,150 85,150" fill="rgba(100,116,139,0.35)" stroke="#334155" strokeWidth="1.2" />
                  <polygon points="85,80 145,80 165,65 105,65" fill="rgba(100,116,139,0.25)" stroke="#334155" strokeWidth="1.2" />
                  <polygon points="145,80 165,65 165,135 145,150" fill="rgba(100,116,139,0.45)" stroke="#334155" strokeWidth="1.2" />
                  <polyline points="85,150 105,135 165,135" fill="none" stroke="#334155" strokeWidth="0.7" strokeDasharray="3 2" />
                  <line x1="105" y1="65" x2="105" y2="135" stroke="#334155" strokeWidth="0.7" strokeDasharray="3 2" />
                  <text x="78" y="80" fontSize="9" fill="#334155">A</text>
                  <text x="137" y="76" fontSize="9" fill="#334155">B</text>
                  <text x="167" y="64" fontSize="9" fill="#334155">C</text>
                  <text x="100" y="61" fontSize="9" fill="#334155">D</text>
                  <text x="78" y="158" fontSize="9" fill="#334155">E</text>
                  <text x="137" y="160" fontSize="9" fill="#334155">F</text>
                  <text x="167" y="140" fontSize="9" fill="#334155">G</text>
                  <text x="108" y="132" fontSize="9" fill="#334155">H</text>
                  <text x="8" y="103" fontSize="9" fill="#334155">40cm</text>
                  <rect x="186" y="140" width="8" height="10" fill="none" stroke="#64748b" strokeWidth="0.8" />
                  <text x="198" y="160" fontSize="9" fill="#334155">排水口</text>
                </svg>
                <figcaption className="text-xs text-slate-500">図1</figcaption>
              </figure>
              <figure className="text-center">
                <svg viewBox="0 0 230 210" className="w-full max-w-xs mx-auto">
                  <line x1="47" y1="190" x2="47" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="64" y1="190" x2="64" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="81" y1="190" x2="81" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="98" y1="190" x2="98" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="115" y1="190" x2="115" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="132" y1="190" x2="132" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="149" y1="190" x2="149" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="166" y1="190" x2="166" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="183" y1="190" x2="183" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="200" y1="190" x2="200" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="170" x2="208.5" y2="170" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="150" x2="208.5" y2="150" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="130" x2="208.5" y2="130" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="110" x2="208.5" y2="110" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="90" x2="208.5" y2="90" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="70" x2="208.5" y2="70" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="50" x2="208.5" y2="50" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="30" x2="208.5" y2="30" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" /><line x1="30" y1="10" x2="208.5" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="30" y1="190" x2="213.60000000000002" y2="190" stroke="#64748b" strokeWidth="1" />
                  <line x1="30" y1="190" x2="30" y2="6" stroke="#64748b" strokeWidth="1" />
                  <text x="47" y="202" fontSize="8" textAnchor="middle" fill="#64748b">1</text><text x="64" y="202" fontSize="8" textAnchor="middle" fill="#64748b">2</text><text x="81" y="202" fontSize="8" textAnchor="middle" fill="#64748b">3</text><text x="98" y="202" fontSize="8" textAnchor="middle" fill="#64748b">4</text><text x="115" y="202" fontSize="8" textAnchor="middle" fill="#64748b">5</text><text x="132" y="202" fontSize="8" textAnchor="middle" fill="#64748b">6</text><text x="149" y="202" fontSize="8" textAnchor="middle" fill="#64748b">7</text><text x="166" y="202" fontSize="8" textAnchor="middle" fill="#64748b">8</text><text x="183" y="202" fontSize="8" textAnchor="middle" fill="#64748b">9</text><text x="200" y="202" fontSize="8" textAnchor="middle" fill="#64748b">10</text><text x="26" y="153" fontSize="8" textAnchor="end" fill="#64748b">10</text><text x="26" y="113" fontSize="8" textAnchor="end" fill="#64748b">20</text><text x="26" y="73" fontSize="8" textAnchor="end" fill="#64748b">30</text><text x="26" y="33" fontSize="8" textAnchor="end" fill="#64748b">40</text>
                  <text x="26" y="202" fontSize="8" textAnchor="end" fill="#64748b">O</text>
                  <text x="213.60000000000002" y="202" fontSize="8" fill="#64748b">x(分)</text>
                  <text x="26" y="6" fontSize="8" textAnchor="end" fill="#64748b">y(cm)</text>
                  <polyline points="30,30 115,70 200,190" fill="none" stroke="#10b981" strokeWidth="2" />
                </svg>
                <figcaption className="text-xs text-slate-500">図2</figcaption>
              </figure>
            </div>
            <p>このとき、次の(1)、(2)、(3)の問いに答えなさい。</p>
            <p>(1) AEの長さを求めなさい。</p>
            <p>(2) 排水を始めて5分後から10分後までの <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係を式で表しなさい。ただし、途中の計算も書くこと。</p>
            <p>(3) 水そうの水がなくなった後、長方形BCGFが底面になるようにブロックの向きを変え、水そうの底に固定した。ここから再び水そうを満水にし、排水口から1度目の排水のときと同じ一定の量で排水したところ、排水し始めてから5分後の水面の高さは1度目の排水のときと比べて4cm低かった。このとき、ABの長さを求めなさい。ただし、ブロックの向きを変えて固定しても、ブロックが水そうの外にはみ出ることはないものとする。</p>
          </div>
        ),
        steps: [
          {
            id: 1, title: '(1) ブロックの高さ',
            content: <p>最初の5分間は40→30cm、その後は30→0cmと急激に下がっています。</p>,
            quiz: { type: 'choice', question: 'このことから、ブロックの高さは何cmだと分かりますか？', options: ['10cm', '30cm', '40cm'], correctAnswer: '30cm', explanation: <p>水位が30cmになったところから下がり方が急になっているので、ブロックの高さは 30cm です。</p> }
          },
          {
            id: 2, title: '(2) 5分後から10分後の式',
            content: <p>グラフは点(5, 30)と点(10, 0)を通る直線です。</p>,
            quiz: { type: 'choice', question: '5分後から10分後までの x と y の関係を表す式は？', options: ['y = -6x + 60', 'y = -2x + 40', 'y = -3x + 45'], correctAnswer: 'y = -6x + 60', explanation: <p>傾きは (0 - 30) / (10 - 5) = -6。y = -6x + b に (10, 0) を代入して b = 60。よって y = -6x + 60 です。</p> }
          },
          {
            id: 3, title: '(3)① 1分間に出る水の量',
            content: <p>水そうの底面積を <TextWithMath text="$S$" /> cm² とします。最初の5分間はブロックより上の部分なので、水そうの形そのまま「底面積 × 高さ」で水の量がわかります。</p>,
            quiz: { type: 'choice', question: '最初の5分間（40cm→30cm）に出た水の量は？', options: ['10S cm³', '30S cm³', '40S cm³'], correctAnswer: '10S cm³', explanation: <p>水面が10cm下がったので <TextWithMath text="$S \times 10 = 10S$" />。つまり5分ごとに <TextWithMath text="$10S$" /> cm³ の水が出ます。</p> }
          },
          {
            id: 4, title: '(3)② ブロックの体積',
            content: <p>5分後から10分後（30cm→0cm）も、出た水は同じ <TextWithMath text="$10S$" />。でも高さ30cm分の水そうの容積は <TextWithMath text="$30S$" /> です。その差がブロックの体積になります。</p>,
            quiz: { type: 'choice', question: 'ブロックの体積は？', options: ['10S cm³', '20S cm³', '30S cm³'], correctAnswer: '20S cm³', explanation: <p><TextWithMath text="$30S - 10S = 20S$" />（cm³）。</p> }
          },
          {
            id: 5, title: '(3)③ 向きを変えたブロックの高さとの関係',
            content: <p>2回目も5分で <TextWithMath text="$10S$" /> の水が出て、水面は 30 − 4 = 26cm になりました。ブロックの新しい高さ（ABの長さ）を <TextWithMath text="$h$" /> cm とします。</p>,
            quiz: { type: 'choice', question: 'h は 26cm より高い？低い？', options: ['26cmより高い', '26cmより低い', 'ちょうど26cm'], correctAnswer: '26cmより高い', explanation: <p>もしブロックが26cm以下なら、5分間ずっとブロックより上の水だけが出るので、1回目と同じく10cm下がって30cmになるはず。実際は26cmまで（14cm）下がったので、途中からブロックの横を水面が下がった、つまり <TextWithMath text="$h > 26$" /> です。</p> }
          },
          {
            id: 6, title: '(3)④ 新しい底面積',
            content: <p>ブロックの体積は向きを変えても <TextWithMath text="$20S$" />。体積 = 底面積 × 高さ なので、底面積 = 体積 ÷ 高さ です。</p>,
            quiz: { type: 'choice', question: '向きを変えたブロックの底面積（長方形BCGF）は？', options: ['20S − h', '20S / h', '20S × h'], correctAnswer: '20S / h', explanation: <p><TextWithMath text="$20S \div h = \frac{20S}{h}$" />（cm²）。</p> }
          },
          {
            id: 7, title: '(3)⑤ 方程式を立てる',
            content: <p>5分で出た <TextWithMath text="$10S$" /> を、2つの部分に分けます。<br/>・40cm から h cm まで：ブロックより上なので 底面積 S × 高さ (40 − h)<br/>・h cm から 26cm まで：ブロックの横なので 底面積 (S − 20S/h) × 高さ (h − 26)</p>,
            quiz: { type: 'choice', question: '正しい方程式は？', options: ['(40 − h)S + (h − 26)(S − 20S/h) = 10S', '(40 − h)S + (h − 26)S = 10S', '(40 − 26)(S − 20S/h) = 10S'], correctAnswer: '(40 − h)S + (h − 26)(S − 20S/h) = 10S', explanation: <p>ブロックの横の部分は、水そうの底面積からブロックの底面積を引いた分だけが水です。</p> }
          },
          {
            id: 8, title: '(3)⑥ 方程式を解く',
            content: <p>両辺を S でわると <TextWithMath text="$(40-h) + (h-26)\left(1 - \frac{20}{h}\right) = 10$" />。<br/>左辺を整理すると <TextWithMath text="$40 - h + h - 26 - \frac{20(h-26)}{h} = 14 - \frac{20(h-26)}{h}$" /> です。</p>,
            quiz: { type: 'choice', question: '14 − 20(h − 26)/h = 10 を解くと、ABの長さ h は？', options: ['28 cm', '65/2 cm', '35 cm'], correctAnswer: '65/2 cm', explanation: <p><TextWithMath text="$\frac{20(h-26)}{h} = 4$" /> より <TextWithMath text="$20h - 520 = 4h$" />、<TextWithMath text="$16h = 520$" />、<TextWithMath text="$h = \frac{65}{2}$" />（cm）。26より大きいので条件に合います。</p> }
          }
        ]
      }
    ]
  },
  "q6": {
    id: "q6",
    title: "令和7年 大問6：ダンスのフォーメーション",
    subs: [
      {
        id: "1",
        title: "1, 2. シミュレーション",
        knowledge: ["規則性の発見"],
        originalText: <div className="space-y-2"><R7DanceIntro /><p>1　<TextWithMath text="$n=8$" /> のとき、1回目のフォーメーションチェンジ後に全体の西から6番目の生徒がつけているゼッケンの番号は何番か。</p><p>2　<TextWithMath text="$n=10$" /> のとき、8番のゼッケンをつけている生徒は、3回目のフォーメーションチェンジ後に全体の西から何番目にいるか求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '問1① 組に分ける',
            content: <p>n = 8 なので、4人ずつ西側の組と東側の組に分かれます。</p>,
            quiz: { type: 'choice', question: '東側の組のゼッケンは？', options: ['5, 6, 7, 8', '1, 2, 3, 4', '2, 4, 6, 8'], correctAnswer: '5, 6, 7, 8', explanation: <p>西側が 1, 2, 3, 4、東側が 5, 6, 7, 8 です。</p> }
          },
          {
            id: 2, title: '問1② 交互に並べる',
            content: <p>全体の1番目は西側の1人目、2番目は東側の1人目、…と交互に並びます。</p>,
            quiz: { type: 'choice', question: '1回目のチェンジ後の並びは？', options: ['1, 5, 2, 6, 3, 7, 4, 8', '5, 1, 6, 2, 7, 3, 8, 4', '1, 2, 5, 6, 3, 4, 7, 8'], correctAnswer: '1, 5, 2, 6, 3, 7, 4, 8', explanation: <p>1, 5, 2, 6, 3, 7, 4, 8 です。</p> }
          },
          {
            id: 3, title: '問1③ 6番目',
            content: <p>②の並びの西から6番目を見ます。</p>,
            quiz: { type: 'choice', question: '全体の西から6番目のゼッケンは？', options: ['7番', '3番', '6番'], correctAnswer: '7番', explanation: <p>1, 5, 2, 6, 3, <strong>7</strong> なので 7番 です。</p> }
          },
          {
            id: 4, title: '問2① 1回目',
            content: <p>n = 10。西側 1〜5、東側 6〜10 を交互に並べます。</p>,
            quiz: { type: 'choice', question: '1回目のチェンジ後の並びは？', options: ['1, 6, 2, 7, 3, 8, 4, 9, 5, 10', '1, 2, 6, 7, 3, 4, 8, 9, 5, 10', '6, 1, 7, 2, 8, 3, 9, 4, 10, 5'], correctAnswer: '1, 6, 2, 7, 3, 8, 4, 9, 5, 10', explanation: <p>1, 6, 2, 7, 3, 8, 4, 9, 5, 10 です。</p> }
          },
          {
            id: 5, title: '問2② 2回目',
            content: <p>今の並びを前半5人（1, 6, 2, 7, 3）と後半5人（8, 4, 9, 5, 10）に分けて、また交互に並べます。</p>,
            quiz: { type: 'choice', question: '2回目のチェンジ後の並びは？', options: ['1, 8, 6, 4, 2, 9, 7, 5, 3, 10', '1, 6, 8, 4, 2, 9, 7, 5, 3, 10', '1, 8, 6, 4, 2, 9, 7, 3, 5, 10'], correctAnswer: '1, 8, 6, 4, 2, 9, 7, 5, 3, 10', explanation: <p>1, 8, 6, 4, 2, 9, 7, 5, 3, 10 です。</p> }
          },
          {
            id: 6, title: '問2③ 3回目',
            content: <p>前半（1, 8, 6, 4, 2）と後半（9, 7, 5, 3, 10）を交互に並べます。</p>,
            quiz: { type: 'choice', question: '3回目のチェンジ後、8番の生徒は西から何番目？', options: ['3番目', '2番目', '4番目'], correctAnswer: '3番目', explanation: <p>1, 9, <strong>8</strong>, 7, 6, 5, 4, 3, 2, 10 なので 3番目 です。</p> }
          }
        ]
      },
      {
        id: "3",
        title: "3. 規則性を文字で表して逆算",
        knowledge: ["奇数と偶数の文字式", "式の逆算", "論理的思考力"],
        originalText: (
          <div className="space-y-2">
            <R7DanceIntro />
            <p>3　次の文章の①、②、③に当てはまる式や数をそれぞれ求めなさい。ただし、文章中の <TextWithMath text="$a$" />、<TextWithMath text="$b$" /> は自然数とする。</p>
            <div className="border border-slate-400 rounded px-3 py-2 space-y-2">
              <p>1回のフォーメーションチェンジにより、フォーメーションチェンジ前の西側の組の西から <TextWithMath text="$a$" /> 人目の生徒は、フォーメーションチェンジ後は全体の西から（ ① ）番目に移動し、フォーメーションチェンジ前の東側の組の西から <TextWithMath text="$b$" /> 人目の生徒は、フォーメーションチェンジ後は全体の西から（ ② ）番目に移動する。</p>
              <p>見方を変えると、フォーメーションチェンジ後に全体の西から（ ① ）番目の生徒は、フォーメーションチェンジ前は西側の組の西から <TextWithMath text="$a$" /> 人目であり、フォーメーションチェンジ後に全体の西から（ ② ）番目の生徒は、フォーメーションチェンジ前は東側の組の西から <TextWithMath text="$b$" /> 人目である。</p>
              <p>つまり、フォーメーションチェンジ後にいる位置から、フォーメーションチェンジ前にいた位置がどこであるかを求めることができる。</p>
              <p>このことから、<TextWithMath text="$n=70$" /> のとき、5回目のフォーメーションチェンジ後に、全体の西から35番目の生徒のゼッケンの番号は（ ③ ）番である。</p>
            </div>
          </div>
        ),
        steps: [
          {
            id: 1, title: '① 西側の組の行き先',
            content: <p>西側の1人目→全体1番目、2人目→3番目、3人目→5番目…と、奇数番目に入ります。</p>,
            quiz: { type: 'choice', question: '西側の組の a 人目は、全体の西から何番目へ？（①）', options: ['2a − 1', 'a + 1', '2a'], correctAnswer: '2a − 1', explanation: <p>a = 1, 2, 3 で 1, 3, 5 になる式は 2a − 1 です。</p> }
          },
          {
            id: 2, title: '② 東側の組の行き先',
            content: <p>東側の1人目→全体2番目、2人目→4番目…と、偶数番目に入ります。</p>,
            quiz: { type: 'choice', question: '東側の組の b 人目は、全体の西から何番目へ？（②）', options: ['2b', '2b − 1', 'b + 1'], correctAnswer: '2b', explanation: <p>b = 1, 2, 3 で 2, 4, 6 になる式は 2b です。</p> }
          },
          {
            id: 3, title: '③ 逆にたどるルール',
            content: <p>チェンジ後に奇数番目なら前は西側、偶数番目なら前は東側にいました。n = 70 だと各組35人です。</p>,
            quiz: { type: 'choice', question: 'n = 70 のとき、東側の組の b 人目は、全体の西から何番目？', options: ['35 + b', 'b', '70 − b'], correctAnswer: '35 + b', explanation: <p>西側の35人の後ろなので 35 + b 番目です。西側の組の a 人目は、そのまま全体の a 番目です。</p> }
          },
          {
            id: 4, title: '④ 5回目後 → 4回目後',
            content: <p>5回目後に35番目（奇数）。2a − 1 = 35 を解きます。</p>,
            quiz: { type: 'choice', question: '4回目後には全体の西から何番目にいた？', options: ['18番目', '17番目', '36番目'], correctAnswer: '18番目', explanation: <p>a = 18。西側の18人目なので、全体でも18番目です。</p> }
          },
          {
            id: 5, title: '⑤ 4回目後 → 3回目後',
            content: <p>18番目（偶数）。2b = 18 なので東側の9人目です。</p>,
            quiz: { type: 'choice', question: '3回目後には全体の西から何番目にいた？', options: ['44番目', '9番目', '27番目'], correctAnswer: '44番目', explanation: <p><TextWithMath text="$35 + 9 = 44$" />（番目）です。</p> }
          },
          {
            id: 6, title: '⑥ 3回目後 → 2回目後',
            content: <p>44番目（偶数）。2b = 44 なので東側の22人目です。</p>,
            quiz: { type: 'choice', question: '2回目後には全体の西から何番目にいた？', options: ['57番目', '22番目', '66番目'], correctAnswer: '57番目', explanation: <p><TextWithMath text="$35 + 22 = 57$" />（番目）です。</p> }
          },
          {
            id: 7, title: '⑦ 2回目後 → 1回目後',
            content: <p>57番目（奇数）。2a − 1 = 57 を解きます。</p>,
            quiz: { type: 'choice', question: '1回目後には全体の西から何番目にいた？', options: ['29番目', '28番目', '64番目'], correctAnswer: '29番目', explanation: <p>a = 29 なので29番目です。</p> }
          },
          {
            id: 8, title: '⑧ 1回目後 → 最初',
            content: <p>29番目（奇数）。2a − 1 = 29。最初の位置がそのままゼッケンの番号です。</p>,
            quiz: { type: 'choice', question: '③に入るゼッケンの番号は？', options: ['15番', '14番', '12番', '18番'], correctAnswer: '15番', explanation: <p>a = 15。35 → 18 → 44 → 57 → 29 → 15 とたどれて、ゼッケンは 15番 です。</p> }
          }
        ]
      }
    ]
  }
};
