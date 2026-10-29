import React from 'react';
import { TextWithMath } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { SimpleTable } from './ruiji_figs';

// 類題テーマD：規則性・文字式の利用・データの活用。図は白背景固定でダークでも読める。
const lbl = 'text-[12px] font-bold';

function FigWrap({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="bg-white rounded-lg p-2">{children}</div>
      {caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{caption}</p>}
    </div>
  );
}

/** d1 マッチ棒で作る正三角形（1番目〜3番目） */
function MatchTriFig() {
  const u = 26, h = u * 0.866;
  const fig = (n: number, ox: number) => {
    const P = (r: number, c: number): [number, number] => [ox + (c - r / 2) * u, 20 + r * h];
    const segs: [number, number, number, number][] = [];
    for (let r = 0; r < n; r++) {
      for (let c = 0; c <= r; c++) {
        const a = P(r, c), b = P(r + 1, c), d = P(r + 1, c + 1);
        segs.push([...a, ...b], [...b, ...d], [...a, ...d]);
      }
    }
    return (
      <g key={n}>
        {segs.map((s, i) => (
          <line key={i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
        ))}
        <text x={ox} y={20 + 3 * h + 22} textAnchor="middle" className={lbl} fill="#334155">{n}番目</text>
      </g>
    );
  };
  return (
    <FigWrap>
      <svg viewBox="0 0 320 120" className="w-80 h-auto">
        {fig(1, 40)}
        {fig(2, 130)}
        {fig(3, 250)}
      </svg>
    </FigWrap>
  );
}

/** d2 碁石を正方形に並べる（1番目〜3番目） */
function GoishiFig() {
  const r = 7, g = 17;
  const fig = (n: number, ox: number) => {
    const s = n + 2, items: React.ReactNode[] = [];
    for (let i = 0; i < s; i++) {
      for (let j = 0; j < s; j++) {
        const black = i === 0 || j === 0 || i === s - 1 || j === s - 1;
        items.push(<circle key={`${i}-${j}`} cx={ox + j * g} cy={14 + i * g} r={r} fill={black ? '#0f172a' : '#ffffff'} stroke="#0f172a" strokeWidth="1.4" />);
      }
    }
    return (
      <g key={n}>
        {items}
        <text x={ox + ((s - 1) * g) / 2} y={14 + 5 * g + 10} textAnchor="middle" className={lbl} fill="#334155">{n}番目</text>
      </g>
    );
  };
  return (
    <FigWrap>
      <svg viewBox="0 0 330 115" className="w-80 h-auto">
        {fig(1, 20)}
        {fig(2, 110)}
        {fig(3, 225)}
      </svg>
    </FigWrap>
  );
}

/** d4 ある月のカレンダー（1日が月曜日、31日まで）。16を中心とする十字形を太線で囲む */
function CalendarFig() {
  const W = 40, H = 28, L = 10, T = 30;
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const cross = new Set([9, 15, 16, 17, 23]);
  const cells: React.ReactNode[] = [];
  for (let d = 1; d <= 31; d++) {
    const k = d; // 1日が月曜(列1)
    const row = Math.floor(k / 7), col = k % 7;
    const on = cross.has(d);
    cells.push(
      <g key={d}>
        <rect x={L + col * W} y={T + row * H} width={W} height={H} fill={on ? '#cbd5e1' : '#ffffff'} stroke={on ? '#0f172a' : '#94a3b8'} strokeWidth={on ? 2.2 : 1} />
        <text x={L + col * W + W / 2} y={T + row * H + 19} textAnchor="middle" className={lbl} fill="#0f172a">{d}</text>
      </g>
    );
  }
  return (
    <FigWrap>
      <svg viewBox="0 0 300 175" className="w-80 h-auto">
        {days.map((d, i) => (
          <text key={d} x={L + i * W + W / 2} y={T - 9} textAnchor="middle" className={lbl} fill={i === 0 ? '#b91c1c' : i === 6 ? '#1d4ed8' : '#334155'}>{d}</text>
        ))}
        {cells}
      </svg>
    </FigWrap>
  );
}

/** d6 B組の箱ひげ図（最小0, 第1四分位1, 中央値2, 第3四分位4, 最大6） */
function BoxPlotFig() {
  const X = (v: number) => 30 + v * 40;
  const y = 40;
  return (
    <FigWrap caption="B組（30人）の読んだ本の冊数">
      <svg viewBox="0 0 330 95" className="w-80 h-auto">
        <line x1={X(0)} y1={y} x2={X(1)} y2={y} stroke="#0f172a" strokeWidth="1.6" />
        <line x1={X(4)} y1={y} x2={X(6)} y2={y} stroke="#0f172a" strokeWidth="1.6" />
        <line x1={X(0)} y1={y - 10} x2={X(0)} y2={y + 10} stroke="#0f172a" strokeWidth="1.6" />
        <line x1={X(6)} y1={y - 10} x2={X(6)} y2={y + 10} stroke="#0f172a" strokeWidth="1.6" />
        <rect x={X(1)} y={y - 16} width={X(4) - X(1)} height={32} fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.6" />
        <line x1={X(2)} y1={y - 16} x2={X(2)} y2={y + 16} stroke="#0f172a" strokeWidth="2" />
        <line x1={X(0) - 8} y1={75} x2={X(7)} y2={75} stroke="#334155" strokeWidth="1.2" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((v) => (
          <g key={v}>
            <line x1={X(v)} y1={72} x2={X(v)} y2={78} stroke="#334155" strokeWidth="1.2" />
            <text x={X(v)} y={91} textAnchor="middle" className={lbl} fill="#334155">{v}</text>
          </g>
        ))}
        <text x={X(7) + 4} y={79} className={lbl} fill="#334155">(冊)</text>
      </svg>
    </FigWrap>
  );
}

const introD1 = (
  <div className="space-y-2">
    <p>同じ長さのマッチ棒を使って、下の図のように、1辺がマッチ棒1本の小さな正三角形をすき間なく並べ、大きな正三角形を作っていく。1番目は1辺がマッチ棒1本、2番目は1辺がマッチ棒2本、3番目は1辺がマッチ棒3本、…の大きな正三角形である。</p>
    <MatchTriFig />
  </div>
);

const introD2 = (
  <div className="space-y-2">
    <p>黒と白の碁石を、下の図のように正方形の形にすき間なく並べていく。1番目は1辺に3個、2番目は1辺に4個、3番目は1辺に5個、…と、1辺の個数を1個ずつ増やし、いちばん外側の1周には黒の碁石を、その内側には白の碁石を並べる。</p>
    <GoishiFig />
  </div>
);

const introD3 = (
  <div className="space-y-2">
    <p>連続する3つの奇数について、次のことが成り立つ。</p>
    <p className="pl-4">「連続する3つの奇数のうち、最も大きい数の2乗から最も小さい数の2乗をひいた差は、真ん中の数の8倍になる。」</p>
  </div>
);

const introD4 = (
  <div className="space-y-2">
    <p>下の図は、ある月のカレンダーである。この月の1日は月曜日で、31日まである。このカレンダーの中で、図の太線のように、ある数とその上・下・左・右の数の5つを十字形に囲む。ただし、十字形の5つの数はすべてこのカレンダーの中にあり、左右の数は中心の数と同じ週（同じ行）にあるものとする。</p>
    <CalendarFig />
  </div>
);

const tableD5 = (
  <SimpleTable rows={[
    ['', '1列', '2列', '3列', '4列', '5列', '…'],
    ['1行', 1, 2, 5, 10, 17, '…'],
    ['2行', 4, 3, 6, 11, 18, '…'],
    ['3行', 9, 8, 7, 12, 19, '…'],
    ['4行', 16, 15, 14, 13, 20, '…'],
    ['5行', 25, 24, 23, 22, 21, '…'],
    ['…', '…', '…', '…', '…', '…', ''],
  ]} />
);

const introD5 = (
  <div className="space-y-2">
    <p>下の表のように、自然数を1から順に並べていく。2列目の1行目から下へ2行目まで並べたら、2行目を左へ1列目まで並べる。次に3列目の1行目から下へ3行目まで並べたら、3行目を左へ1列目まで並べる。以下、同じようにして、<TextWithMath text="$k$" /> 列目の1行目から下へ <TextWithMath text="$k$" /> 行目まで並べたら、<TextWithMath text="$k$" /> 行目を左へ1列目まで並べることをくり返す。</p>
    {tableD5}
  </div>
);

const introD6 = (
  <div className="space-y-2">
    <p>ある中学校のA組30人とB組30人について、1か月に読んだ本の冊数を調べた。下の表はA組の結果を度数分布表に表したもので、<TextWithMath text="$x$" />、<TextWithMath text="$y$" /> には人数が入る。下の図はB組の結果を箱ひげ図に表したものである。</p>
    <SimpleTable rows={[
      ['冊数（冊）', 0, 1, 2, 3, 4, 5, '計'],
      ['人数（人）', 2, 'x', 7, 'y', 5, 3, 30],
    ]} caption="A組の読んだ本の冊数" />
    <BoxPlotFig />
  </div>
);

export const ruijiD: Record<string, MajorQuestionData> = {
  "d1": {
    id: "d1",
    title: "類題D1：マッチ棒で作る正三角形の列",
    subs: [
      {
        id: "1",
        title: "(1) 5番目のマッチ棒の本数",
        knowledge: ["規則性", "数え方の工夫"],
        originalText: <div>{introD1}<p>(1)　5番目の大きな正三角形を作るのに必要なマッチ棒は何本か。</p></div>,
        steps: [
          {
            id: 1, title: '① 図から本数を数える',
            content: <p>まず1番目〜3番目の本数を図から数えます。重なっている辺は1本として数えます。</p>,
            quiz: {
              type: 'choice',
              question: '1番目、2番目、3番目のマッチ棒の本数は？',
              options: ['3本、9本、18本', '3本、6本、9本', '3本、9本、27本', '3本、12本、27本', '3本、8本、15本'],
              correctAnswer: '3本、9本、18本',
              explanation: <p>2番目は1辺2本の三角形の周り6本と内側の3本で9本、3番目は周り9本と内側9本で18本です。</p>
            }
          },
          {
            id: 2, title: '② 上向きの三角形に注目',
            content: <p>上向きの小さな正三角形（△）だけを見ると、どのマッチ棒もちょうど1つの △ の辺になっています。下向きの ▽ は △ の辺で囲まれてできるだけです。</p>,
            quiz: {
              type: 'choice',
              question: '5番目の図にある上向きの小さな正三角形は何個？',
              options: ['15個', '25個', '10個'],
              correctAnswer: '15個',
              explanation: <p>上の段から1個、2個、3個、4個、5個と並ぶので <TextWithMath text="$1+2+3+4+5=15$" /> 個です。</p>
            }
          },
          {
            id: 3, title: '③ 本数を求める',
            content: <p>上向きの △ 1個につきマッチ棒3本で、マッチ棒の重複はありません。</p>,
            quiz: {
              type: 'choice',
              question: '5番目に必要なマッチ棒は何本？',
              options: ['45本', '75本', '30本'],
              correctAnswer: '45本',
              explanation: <p><TextWithMath text="$3\times15=45$" /> 本。検算：1つ前から増える本数は3本、6本、9本、12本、15本と3本ずつ増えるので、<TextWithMath text="$3+6+9+12+15=45$" /> 本で一致します。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) n番目のマッチ棒の本数",
        knowledge: ["規則性", "文字式", "1からnまでの和"],
        originalText: <div>{introD1}<p>(2)　<TextWithMath text="$n$" /> 番目の大きな正三角形を作るのに必要なマッチ棒の本数を、<TextWithMath text="$n$" /> を用いて表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 上向きの △ の個数',
            content: <p><TextWithMath text="$n$" /> 番目では、上向きの △ が上の段から1個、2個、…、<TextWithMath text="$n$" /> 個と並びます。</p>,
            quiz: {
              type: 'choice',
              question: '1 + 2 + … + n を n で表すと？',
              options: ['n(n + 1)/2', 'n(n − 1)/2', 'n²/2', 'n(n + 1)', '(n + 1)(n + 2)/2'],
              correctAnswer: 'n(n + 1)/2',
              explanation: <p>同じ和を逆順に並べて足すと、<TextWithMath text="$(n+1)$" /> が <TextWithMath text="$n$" /> 個できるので、2で割って <TextWithMath text="$\dfrac{n(n+1)}{2}$" /> です。<TextWithMath text="$n=5$" /> なら15で(1)と合います。</p>
            }
          },
          {
            id: 2, title: '② マッチ棒の本数',
            content: <p>上向きの △ 1個につきマッチ棒3本です。</p>,
            quiz: {
              type: 'choice',
              question: 'n番目のマッチ棒の本数は？',
              options: ['3n(n + 1)/2 本', '3n(n − 1)/2 本', '3n² 本', 'n(n + 1)/2 本', '3n(n + 1) 本'],
              correctAnswer: '3n(n + 1)/2 本',
              explanation: <p><TextWithMath text="$3\times\dfrac{n(n+1)}{2}=\dfrac{3n(n+1)}{2}$" /> 本です。</p>
            }
          },
          {
            id: 3, title: '③ 式を確かめる',
            content: <p>作った式に小さい <TextWithMath text="$n$" /> を代入し、図の本数と合うか確かめます。</p>,
            quiz: {
              type: 'choice',
              question: '式に n = 4 を代入すると？',
              options: ['30本', '24本', '40本'],
              correctAnswer: '30本',
              explanation: <p><TextWithMath text="$\dfrac{3\times4\times5}{2}=30$" />。3番目の18本に、4段目で増える12本を足した30本と一致します。<TextWithMath text="$n=1,2,3$" /> でも3、9、18で図と合います。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 315本使ったときの小さな正三角形の数",
        knowledge: ["規則性", "2次方程式", "因数分解"],
        originalText: <div>{introD1}<p>(3)　マッチ棒をちょうど315本使って大きな正三角形を作った。このとき、大きな正三角形の中にある1辺がマッチ棒1本の小さな正三角形は、上向きと下向きを合わせて何個か。</p></div>,
        steps: [
          {
            id: 1, title: '① 方程式を立てる',
            content: <p>(2)の式が315になる <TextWithMath text="$n$" /> を求めます。</p>,
            quiz: {
              type: 'choice',
              question: '3n(n + 1)/2 = 315 を整理すると？',
              options: ['n(n + 1) = 210', 'n(n + 1) = 105', 'n(n + 1) = 630', 'n(n − 1) = 210', 'n² = 210'],
              correctAnswer: 'n(n + 1) = 210',
              explanation: <p>両辺に2をかけて3で割ると、<TextWithMath text="$n(n+1)=315\times2\div3=210$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 2次方程式を解く',
            content: <p><TextWithMath text="$n^2+n-210=0$" />。かけて −210、たして1になる2数を探します。</p>,
            quiz: {
              type: 'choice',
              question: 'n の値は？（n は自然数）',
              options: ['14', '15', '21'],
              correctAnswer: '14',
              explanation: <p><TextWithMath text="$(n+15)(n-14)=0$" /> より <TextWithMath text="$n=-15,\ 14$" />。<TextWithMath text="$n$" /> は自然数なので <TextWithMath text="$n=14$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 下向きの ▽ の個数',
            content: <p>下向きの ▽ は、2段目に1個、3段目に2個、…、<TextWithMath text="$n$" /> 段目に <TextWithMath text="$(n-1)$" /> 個あります。</p>,
            quiz: {
              type: 'choice',
              question: 'n 番目の小さな正三角形は全部で何個？（上向き＋下向き）',
              options: ['n² 個', 'n(n + 1) 個', 'n(n + 1)/2 個', '2n − 1 個', '(n + 1)² 個'],
              correctAnswer: 'n² 個',
              explanation: <p><TextWithMath text="$\dfrac{n(n+1)}{2}+\dfrac{n(n-1)}{2}=n^2$" /> 個。各段に奇数個（1、3、5、…）並ぶと考えても同じです。</p>
            }
          },
          {
            id: 4, title: '④ 答え',
            content: <p><TextWithMath text="$n=14$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '小さな正三角形は全部で何個？',
              options: ['196個', '105個', '210個'],
              correctAnswer: '196個',
              explanation: <p><TextWithMath text="$14^2=196$" /> 個。検算：<TextWithMath text="$\dfrac{3\times14\times15}{2}=315$" /> 本で問題と合います。105個は上向きだけの個数です。</p>
            }
          }
        ]
      }
    ]
  },

  "d2": {
    id: "d2",
    title: "類題D2：碁石の正方形と外周の黒石",
    subs: [
      {
        id: "1",
        title: "(1) 6番目の黒と白の個数",
        knowledge: ["規則性", "数え方の工夫"],
        originalText: <div>{introD2}<p>(1)　6番目の図形について、黒の碁石と白の碁石はそれぞれ何個か。</p></div>,
        steps: [
          {
            id: 1, title: '① 1辺の個数',
            content: <p>1番目は1辺3個で、1つ進むごとに1個ずつ増えます。</p>,
            quiz: {
              type: 'choice',
              question: '6番目の図形の1辺の碁石は何個？',
              options: ['8個', '6個', '7個'],
              correctAnswer: '8個',
              explanation: <p><TextWithMath text="$n$" /> 番目の1辺は <TextWithMath text="$(n+2)$" /> 個なので、6番目は8個です。</p>
            }
          },
          {
            id: 2, title: '② 黒（外周）の個数',
            content: <p>外周は、1辺8個が4辺分ですが、4つの角は2回ずつ数えてしまいます。</p>,
            quiz: {
              type: 'choice',
              question: '6番目の黒の碁石は何個？',
              options: ['28個', '32個', '24個'],
              correctAnswer: '28個',
              explanation: <p><TextWithMath text="$8\times4-4=28$" /> 個。角の重なりを引き忘れると32個になります。</p>
            }
          },
          {
            id: 3, title: '③ 白（内側）の個数',
            content: <p>内側は、1辺が外側より2個少ない正方形です。</p>,
            quiz: {
              type: 'choice',
              question: '6番目の白の碁石は何個？',
              options: ['36個', '49個', '25個'],
              correctAnswer: '36個',
              explanation: <p>内側は1辺6個なので <TextWithMath text="$6^2=36$" /> 個。検算：<TextWithMath text="$28+36=64=8^2$" /> で全体と合います。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) n番目の黒と白の個数",
        knowledge: ["規則性", "文字式"],
        originalText: <div>{introD2}<p>(2)　<TextWithMath text="$n$" /> 番目の図形について、黒の碁石の個数と白の碁石の個数を、それぞれ <TextWithMath text="$n$" /> を用いて表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 1辺の個数を n で',
            content: <p>1番目が3個、2番目が4個、3番目が5個です。</p>,
            quiz: {
              type: 'choice',
              question: 'n 番目の1辺の個数は？',
              options: ['n + 2 個', 'n + 3 個', 'n + 1 個', '2n + 1 個', '3n 個'],
              correctAnswer: 'n + 2 個',
              explanation: <p>番号より2大きいので <TextWithMath text="$(n+2)$" /> 個です。</p>
            }
          },
          {
            id: 2, title: '② 黒の個数',
            content: <p>(1)と同じく「1辺の個数×4 − 角の4個」で数えます。</p>,
            quiz: {
              type: 'choice',
              question: 'n 番目の黒の碁石の個数は？',
              options: ['4n + 4 個', '4n + 8 個', '4n 個', '4n − 4 個', '4n + 2 個'],
              correctAnswer: '4n + 4 個',
              explanation: <p><TextWithMath text="$4(n+2)-4=4n+4$" /> 個。<TextWithMath text="$n=1$" /> で8個、<TextWithMath text="$n=6$" /> で28個と合います。</p>
            }
          },
          {
            id: 3, title: '③ 白の個数',
            content: <p>内側の正方形の1辺は <TextWithMath text="$(n+2)-2$" /> 個です。</p>,
            quiz: {
              type: 'choice',
              question: 'n 番目の白の碁石の個数は？',
              options: ['n² 個', '(n + 2)² 個', '(n − 2)² 個', '(n + 1)² 個', 'n² − 4 個'],
              correctAnswer: 'n² 個',
              explanation: <p>内側の1辺は <TextWithMath text="$n$" /> 個なので <TextWithMath text="$n^2$" /> 個。検算：<TextWithMath text="$(4n+4)+n^2=(n+2)^2$" /> となり全体と一致します（<TextWithMath text="$n=1$" /> から <TextWithMath text="$10$" /> まで数えても合います）。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 白が黒より41個多くなる図形",
        knowledge: ["規則性", "2次方程式", "因数分解"],
        originalText: <div>{introD2}<p>(3)　白の碁石の個数が黒の碁石の個数より41個多くなるのは何番目の図形か。また、そのとき使った碁石は全部で何個か。</p></div>,
        steps: [
          {
            id: 1, title: '① 方程式を立てる',
            content: <p>「白 − 黒 = 41」を(2)の式で表します。</p>,
            quiz: {
              type: 'choice',
              question: '正しい方程式は？',
              options: ['n² − (4n + 4) = 41', '(4n + 4) − n² = 41', 'n² + (4n + 4) = 41', 'n² − 4n + 4 = 41', '(n + 2)² − n² = 41'],
              correctAnswer: 'n² − (4n + 4) = 41',
              explanation: <p>白 <TextWithMath text="$n^2$" /> から黒 <TextWithMath text="$4n+4$" /> を引きます。かっこを外すと <TextWithMath text="$-4n-4$" /> になる点に注意します。</p>
            }
          },
          {
            id: 2, title: '② 整理する',
            content: <p>右辺を0にします。</p>,
            quiz: {
              type: 'choice',
              question: '整理した式は？',
              options: ['n² − 4n − 45 = 0', 'n² − 4n − 37 = 0', 'n² + 4n − 45 = 0', 'n² − 4n + 45 = 0', 'n² − 4n − 41 = 0'],
              correctAnswer: 'n² − 4n − 45 = 0',
              explanation: <p><TextWithMath text="$n^2-4n-4-41=0$" /> より <TextWithMath text="$n^2-4n-45=0$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 解く',
            content: <p>かけて −45、たして −4 になる2数を探します。</p>,
            quiz: {
              type: 'choice',
              question: '何番目の図形？',
              options: ['9番目', '5番目', '11番目'],
              correctAnswer: '9番目',
              explanation: <p><TextWithMath text="$(n-9)(n+5)=0$" /> より <TextWithMath text="$n=9,\ -5$" />。自然数なので <TextWithMath text="$n=9$" /> です。</p>
            }
          },
          {
            id: 4, title: '④ 碁石の総数',
            content: <p>9番目の1辺は <TextWithMath text="$9+2=11$" /> 個です。</p>,
            quiz: {
              type: 'choice',
              question: '使った碁石は全部で何個？',
              options: ['121個', '81個', '100個'],
              correctAnswer: '121個',
              explanation: <p><TextWithMath text="$11^2=121$" /> 個。検算：黒 <TextWithMath text="$40$" />、白 <TextWithMath text="$81$" /> で、<TextWithMath text="$81-40=41$" />、<TextWithMath text="$40+81=121$" /> と合います。</p>
            }
          }
        ]
      }
    ]
  },

  "d3": {
    id: "d3",
    title: "類題D3：連続する3つの奇数の性質",
    subs: [
      {
        id: "1",
        title: "(1) 具体的な数で確かめる",
        knowledge: ["奇数", "2乗の計算"],
        originalText: <div>{introD3}<p>(1)　連続する3つの奇数が 5、7、9 のとき、このことが成り立つことを確かめる。最も大きい数の2乗から最も小さい数の2乗をひいた差を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 最大と最小',
            content: <p>5、7、9 のうち、最も大きい数と最も小さい数を使います。真ん中の7は「8倍」の側で使います。</p>,
            quiz: {
              type: 'choice',
              question: '計算する式は？',
              options: ['9² − 5²', '9² − 7²', '7² − 5²', '(9 − 5)²', '9² + 5²'],
              correctAnswer: '9² − 5²',
              explanation: <p>最も大きい9の2乗から、最も小さい5の2乗をひきます。</p>
            }
          },
          {
            id: 2, title: '② 差を計算',
            content: <p><TextWithMath text="$9^2=81$" />、<TextWithMath text="$5^2=25$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '9² − 5² は？',
              options: ['56', '16', '106'],
              correctAnswer: '56',
              explanation: <p><TextWithMath text="$81-25=56$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 真ん中の数の8倍と比べる',
            content: <p>真ん中の数は7です。</p>,
            quiz: {
              type: 'choice',
              question: '56 は真ん中の数 7 の何倍？',
              options: ['8倍', '7倍', '4倍'],
              correctAnswer: '8倍',
              explanation: <p><TextWithMath text="$56=8\times7$" /> なので成り立ちます。ほかに 1、3、5 でも <TextWithMath text="$25-1=24=8\times3$" /> です。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 文字を使った説明の穴埋め",
        knowledge: ["文字を使った数の説明", "式の展開"],
        originalText: <div>{introD3}<p>(2)　このことを次のように説明した。<TextWithMath text="$\boxed{\text{ア}}$" />〜<TextWithMath text="$\boxed{\text{ウ}}$" /> にあてはまる式を答えなさい。</p><p className="pl-4">（説明）<TextWithMath text="$n$" /> を整数とすると、真ん中の奇数は <TextWithMath text="$2n+1$" /> と表される。このとき、最も小さい数は <TextWithMath text="$\boxed{\text{ア}}$" />、最も大きい数は <TextWithMath text="$\boxed{\text{イ}}$" /> と表される。最も大きい数の2乗から最も小さい数の2乗をひいた差は、<TextWithMath text="$(\boxed{\text{イ}})^2-(\boxed{\text{ア}})^2=\boxed{\text{ウ}}=8(2n+1)$" /> となり、<TextWithMath text="$2n+1$" /> は真ん中の数だから、真ん中の数の8倍になる。</p></div>,
        steps: [
          {
            id: 1, title: '① 連続する奇数の間隔',
            content: <p>7、9、11 のように、連続する奇数は2ずつ離れています。</p>,
            quiz: {
              type: 'choice',
              question: 'ア（最も小さい数）は？',
              options: ['2n − 1', '2n', 'n − 1', '2n − 3', '2n + 1'],
              correctAnswer: '2n − 1',
              explanation: <p>真ん中の <TextWithMath text="$2n+1$" /> より2小さいので <TextWithMath text="$2n-1$" /> です。「1小さい」と考えると偶数 <TextWithMath text="$2n$" /> になってしまいます。</p>
            }
          },
          {
            id: 2, title: '② 最も大きい数',
            content: <p>真ん中より2大きい数です。</p>,
            quiz: {
              type: 'choice',
              question: 'イ（最も大きい数）は？',
              options: ['2n + 3', '2n + 2', 'n + 3', '2n + 5', '2n + 1'],
              correctAnswer: '2n + 3',
              explanation: <p><TextWithMath text="$(2n+1)+2=2n+3$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 展開する',
            content: <p><TextWithMath text="$(2n+3)^2=4n^2+12n+9$" />、<TextWithMath text="$(2n-1)^2=4n^2-4n+1$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: 'ウ（差を計算した結果）は？',
              options: ['16n + 8', '8n + 8', '16n + 10', '8n + 10', '16n − 8'],
              correctAnswer: '16n + 8',
              explanation: <p><TextWithMath text="$(4n^2+12n+9)-(4n^2-4n+1)=16n+8$" />。ひくときに <TextWithMath text="$-4n$" /> と <TextWithMath text="$+1$" /> の符号を変えるのを忘れないようにします。</p>
            }
          },
          {
            id: 4, title: '④ 8でくくる',
            content: <p>最後に「真ん中の数の8倍」の形にします。</p>,
            quiz: {
              type: 'choice',
              question: '16n + 8 を変形すると？',
              options: ['8(2n + 1)', '8(2n + 8)', '16(n + 1)', '8(n + 1)', '4(4n + 2)'],
              correctAnswer: '8(2n + 1)',
              explanation: <p><TextWithMath text="$16n+8=8(2n+1)$" />。検算：<TextWithMath text="$n=3$" /> のとき 5、7、9 で、<TextWithMath text="$16\times3+8=56$" /> と(1)に一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 2乗の和が251になる3つの奇数",
        knowledge: ["文字式の利用", "2次方程式", "平方根"],
        originalText: <div>{introD3}<p>(3)　連続する3つの正の奇数があり、3つの数それぞれの2乗の和は251である。この3つの奇数のうち、最も小さい数を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 文字のおき方',
            content: <p>真ん中の数を <TextWithMath text="$m$" /> とおくと、3つの数は <TextWithMath text="$m-2,\ m,\ m+2$" /> と左右対称に書けて、計算が楽になります。</p>,
            quiz: {
              type: 'choice',
              question: '(m − 2)² + m² + (m + 2)² を整理すると？',
              options: ['3m² + 8', '3m² + 4', '3m²', '3m² + 8m + 8', 'm² + 8'],
              correctAnswer: '3m² + 8',
              explanation: <p><TextWithMath text="$(m^2-4m+4)+m^2+(m^2+4m+4)=3m^2+8$" />。<TextWithMath text="$-4m$" /> と <TextWithMath text="$+4m$" /> が消えます。</p>
            }
          },
          {
            id: 2, title: '② 方程式を解く',
            content: <p><TextWithMath text="$3m^2+8=251$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: 'm² の値は？',
              options: ['81', '83', '243'],
              correctAnswer: '81',
              explanation: <p><TextWithMath text="$3m^2=243$" /> より <TextWithMath text="$m^2=81$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 正の奇数を選ぶ',
            content: <p><TextWithMath text="$m=\pm9$" /> のうち、条件に合うほうを選びます。</p>,
            quiz: {
              type: 'choice',
              question: '真ん中の数 m は？',
              options: ['9', '−9', '±9'],
              correctAnswer: '9',
              explanation: <p>3つとも正の奇数なので <TextWithMath text="$m=9$" />。<TextWithMath text="$m=-9$" /> だと −11、−9、−7 で正になりません。</p>
            }
          },
          {
            id: 4, title: '④ 答え',
            content: <p>聞かれているのは最も小さい数です。</p>,
            quiz: {
              type: 'choice',
              question: '最も小さい数は？',
              options: ['7', '9', '5'],
              correctAnswer: '7',
              explanation: <p><TextWithMath text="$9-2=7$" />。検算：<TextWithMath text="$7^2+9^2+11^2=49+81+121=251$" /> で合います。</p>
            }
          }
        ]
      }
    ]
  },

  "d4": {
    id: "d4",
    title: "類題D4：カレンダーの十字形の5つの数",
    subs: [
      {
        id: "1",
        title: "(1) 16を中心とする十字形の和",
        knowledge: ["カレンダーの規則", "数の並び"],
        originalText: <div>{introD4}<p>(1)　図の太線のように16を中心とする十字形で囲んだとき、5つの数の和を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 上下・左右の差',
            content: <p>カレンダーは1週間（7日）で1行です。</p>,
            quiz: {
              type: 'choice',
              question: 'ある数の真下の数は、いくつ大きい？',
              options: ['7', '1', '6'],
              correctAnswer: '7',
              explanation: <p>真下は1週間後なので +7、真上は −7、右は +1、左は −1 です。</p>
            }
          },
          {
            id: 2, title: '② 5つの数を読む',
            content: <p>16の上・下・左・右を読み取ります。</p>,
            quiz: {
              type: 'choice',
              question: '十字形の5つの数は？',
              options: ['9、15、16、17、23', '8、15、16、17、24', '9、14、16、18、23', '10、15、16、17、22', '9、15、16、17、24'],
              correctAnswer: '9、15、16、17、23',
              explanation: <p>上は <TextWithMath text="$16-7=9$" />、下は <TextWithMath text="$16+7=23$" />、左右は15と17です。</p>
            }
          },
          {
            id: 3, title: '③ 和を求める',
            content: <p>上下の組、左右の組に分けて足すと楽です。</p>,
            quiz: {
              type: 'choice',
              question: '5つの数の和は？',
              options: ['80', '64', '96'],
              correctAnswer: '80',
              explanation: <p><TextWithMath text="$(9+23)+(15+17)+16=32+32+16=80$" />。検算：<TextWithMath text="$80=5\times16$" /> で、中心の数の5倍になっています。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) 中心を n としたときの和",
        knowledge: ["文字式", "カレンダーの規則"],
        originalText: <div>{introD4}<p>(2)　十字形の中心の数を <TextWithMath text="$n$" /> とするとき、5つの数の和を <TextWithMath text="$n$" /> を用いて表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 上と下の数',
            content: <p>(1)で見たように、上下は7ずつ違います。</p>,
            quiz: {
              type: 'choice',
              question: '上の数と下の数を n で表すと？',
              options: ['上 n − 7、下 n + 7', '上 n + 7、下 n − 7', '上 n − 1、下 n + 1', '上 n − 6、下 n + 6', '上 n − 8、下 n + 8'],
              correctAnswer: '上 n − 7、下 n + 7',
              explanation: <p>上は1週間前、下は1週間後です。<TextWithMath text="$n=16$" /> なら9と23です。</p>
            }
          },
          {
            id: 2, title: '② 左と右の数',
            content: <p>同じ行の隣です。</p>,
            quiz: {
              type: 'choice',
              question: '左の数と右の数を n で表すと？',
              options: ['左 n − 1、右 n + 1', '左 n + 1、右 n − 1', '左 n − 7、右 n + 7', '左 n − 2、右 n + 2', '左 n、右 n + 1'],
              correctAnswer: '左 n − 1、右 n + 1',
              explanation: <p>左は1日前、右は1日後です。</p>
            }
          },
          {
            id: 3, title: '③ 和を n で表す',
            content: <p><TextWithMath text="$(n-7)+(n-1)+n+(n+1)+(n+7)$" /> を計算します。</p>,
            quiz: {
              type: 'choice',
              question: '5つの数の和は？',
              options: ['5n', '5n + 16', '4n', '5n − 16', '5n + 7'],
              correctAnswer: '5n',
              explanation: <p>−7と+7、−1と+1が打ち消し合って <TextWithMath text="$5n$" />。検算：<TextWithMath text="$n=16$" /> で80となり(1)と一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 上下の積が和より35大きくなる十字形",
        knowledge: ["文字式の利用", "2次方程式", "因数分解"],
        originalText: <div>{introD4}<p>(3)　十字形の上の数と下の数の積が、十字形の5つの数の和より35大きくなった。このときの十字形の中心の数を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 上下の積',
            content: <p>上は <TextWithMath text="$n-7$" />、下は <TextWithMath text="$n+7$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '(n − 7)(n + 7) を展開すると？',
              options: ['n² − 49', 'n² + 49', 'n² − 14n + 49', 'n² − 7', 'n² − 14'],
              correctAnswer: 'n² − 49',
              explanation: <p>和と差の積の公式で <TextWithMath text="$n^2-7^2=n^2-49$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 方程式を立てる',
            content: <p>「積が和より35大きい」は「積 = 和 + 35」です。</p>,
            quiz: {
              type: 'choice',
              question: '正しい方程式は？',
              options: ['n² − 49 = 5n + 35', 'n² − 49 + 35 = 5n', 'n² − 49 = 5n − 35', 'n² + 49 = 5n + 35', 'n² − 49 = 35n'],
              correctAnswer: 'n² − 49 = 5n + 35',
              explanation: <p>大きいほう（積）＝小さいほう（和）＋35 です。</p>
            }
          },
          {
            id: 3, title: '③ 整理する',
            content: <p>すべて左辺に移します。</p>,
            quiz: {
              type: 'choice',
              question: '整理した式は？',
              options: ['n² − 5n − 84 = 0', 'n² − 5n − 14 = 0', 'n² + 5n − 84 = 0', 'n² − 5n + 84 = 0', 'n² − 5n − 49 = 0'],
              correctAnswer: 'n² − 5n − 84 = 0',
              explanation: <p><TextWithMath text="$n^2-5n-49-35=0$" /> より <TextWithMath text="$n^2-5n-84=0$" /> です。</p>
            }
          },
          {
            id: 4, title: '④ 解いて確かめる',
            content: <p>かけて −84、たして −5 になる2数を探します。求めた数が十字形の中心になれるかも確かめます。</p>,
            quiz: {
              type: 'choice',
              question: '中心の数は？',
              options: ['12', '7', '14'],
              correctAnswer: '12',
              explanation: <p><TextWithMath text="$(n-12)(n+7)=0$" /> より <TextWithMath text="$n=12$" />（<TextWithMath text="$n=-7$" /> は不適）。12は金曜日で、5、11、13、19 と十字形が作れます。検算：<TextWithMath text="$5\times19=95$" />、和は <TextWithMath text="$5\times12=60$" /> で、<TextWithMath text="$95-60=35$" /> です。</p>
            }
          }
        ]
      }
    ]
  },

  "d5": {
    id: "d5",
    title: "類題D5：L字に並べた数の表",
    subs: [
      {
        id: "1",
        title: "(1) 6行6列目の数",
        knowledge: ["規則性", "表の読み取り"],
        originalText: <div>{introD5}<p>(1)　6行目の6列目の数を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 1列目の数',
            content: <p>表の1列目を上から見ると 1、4、9、16、25 です。</p>,
            quiz: {
              type: 'choice',
              question: '6行目の1列目の数は？',
              options: ['36', '30', '26'],
              correctAnswer: '36',
              explanation: <p>1列目の <TextWithMath text="$k$" /> 行目は <TextWithMath text="$k^2$" /> です。<TextWithMath text="$k$" /> 回目のL字の最後の数なので、ちょうど <TextWithMath text="$k^2$" /> 個並べ終わったところです。<TextWithMath text="$6^2=36$" />。</p>
            }
          },
          {
            id: 2, title: '② 6行目の並び方',
            content: <p>6行目は、6列目から左へ1列目まで1ずつ増えながら並びます（5行目なら 21、22、23、24、25 と右から左へ）。</p>,
            quiz: {
              type: 'choice',
              question: '6行目で、6列目の数は1列目の数よりいくつ小さい？',
              options: ['5', '6', '4'],
              correctAnswer: '5',
              explanation: <p>6列目から1列目までは5つ進むので、5小さいです。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p>36から5をひきます。</p>,
            quiz: {
              type: 'choice',
              question: '6行目の6列目の数は？',
              options: ['31', '30', '32'],
              correctAnswer: '31',
              explanation: <p><TextWithMath text="$36-5=31$" />。検算：対角線上の数は 1、3、7、13、21 と差が2、4、6、8 と増えるので、次は <TextWithMath text="$21+10=31$" /> で一致します。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) n行n列目の数",
        knowledge: ["規則性", "文字式"],
        originalText: <div>{introD5}<p>(2)　<TextWithMath text="$n$" /> 行目の <TextWithMath text="$n$" /> 列目の数を、<TextWithMath text="$n$" /> を用いて表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① n 行目の1列目',
            content: <p>(1)で見たように、1列目は平方数が並びます。</p>,
            quiz: {
              type: 'choice',
              question: 'n 行目の1列目の数は？',
              options: ['n²', '(n − 1)²', '(n + 1)²', '2n − 1', 'n² + 1'],
              correctAnswer: 'n²',
              explanation: <p>3行目は9、4行目は16なので <TextWithMath text="$n^2$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 1列目から n 列目まで',
            content: <p><TextWithMath text="$n$" /> 行目では、<TextWithMath text="$n$" /> 列目から1列目まで、左へ1ずつ増えます。</p>,
            quiz: {
              type: 'choice',
              question: 'n 列目の数は、1列目の数よりいくつ小さい？',
              options: ['n − 1', 'n', 'n + 1', '2n − 1', 'n − 2'],
              correctAnswer: 'n − 1',
              explanation: <p>1列目から <TextWithMath text="$n$" /> 列目までは <TextWithMath text="$(n-1)$" /> 個分離れています。<TextWithMath text="$n=6$" /> なら5で(1)と合います。</p>
            }
          },
          {
            id: 3, title: '③ 式にまとめる',
            content: <p><TextWithMath text="$n^2-(n-1)$" /> を整理します。</p>,
            quiz: {
              type: 'choice',
              question: 'n 行目の n 列目の数は？',
              options: ['n² − n + 1', 'n² − n − 1', 'n² − n', 'n² + n − 1', 'n² − 2n + 1'],
              correctAnswer: 'n² − n + 1',
              explanation: <p><TextWithMath text="$n^2-(n-1)=n^2-n+1$" />。検算：<TextWithMath text="$n=1,2,3,4,5$" /> で 1、3、7、13、21 と表に一致します。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) n行n列目が157になる n",
        knowledge: ["規則性", "2次方程式", "因数分解"],
        originalText: <div>{introD5}<p>(3)　<TextWithMath text="$n$" /> 行目の <TextWithMath text="$n$" /> 列目の数が157であるとき、<TextWithMath text="$n$" /> の値を求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 方程式を立てる',
            content: <p>(2)の式が157になります。</p>,
            quiz: {
              type: 'choice',
              question: '整理した式は？',
              options: ['n² − n − 156 = 0', 'n² − n − 158 = 0', 'n² − n − 157 = 0', 'n² + n − 156 = 0', 'n² − n + 156 = 0'],
              correctAnswer: 'n² − n − 156 = 0',
              explanation: <p><TextWithMath text="$n^2-n+1=157$" /> より <TextWithMath text="$n^2-n-156=0$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 因数分解',
            content: <p>かけて −156、たして −1 になる2数を探します。<TextWithMath text="$156=12\times13$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: '正しい因数分解は？',
              options: ['(n − 13)(n + 12) = 0', '(n + 13)(n − 12) = 0', '(n − 12)(n − 13) = 0', '(n − 26)(n + 6) = 0', '(n − 39)(n + 4) = 0'],
              correctAnswer: '(n − 13)(n + 12) = 0',
              explanation: <p><TextWithMath text="$-13+12=-1$" />、<TextWithMath text="$-13\times12=-156$" /> です。</p>
            }
          },
          {
            id: 3, title: '③ 答え',
            content: <p><TextWithMath text="$n$" /> は自然数です。</p>,
            quiz: {
              type: 'choice',
              question: 'n の値は？',
              options: ['13', '12', '14'],
              correctAnswer: '13',
              explanation: <p><TextWithMath text="$n=13,\ -12$" /> のうち自然数は13。検算：13行目の1列目は <TextWithMath text="$169$" /> で、13列目はそれより12小さい <TextWithMath text="$157$" /> です。</p>
            }
          }
        ]
      }
    ]
  },

  "d6": {
    id: "d6",
    title: "類題D6：度数分布表と箱ひげ図（読んだ本の冊数）",
    subs: [
      {
        id: "1",
        title: "(1) B組の範囲と四分位範囲",
        knowledge: ["箱ひげ図", "範囲", "四分位範囲"],
        originalText: <div>{introD6}<p>(1)　B組の冊数の範囲と四分位範囲を、それぞれ求めなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 箱ひげ図の5つの値',
            content: <p>箱ひげ図は左から、最小値・第1四分位数・中央値・第3四分位数・最大値を表します。</p>,
            quiz: {
              type: 'choice',
              question: 'B組の第1四分位数と第3四分位数は？',
              options: ['1冊と4冊', '0冊と6冊', '2冊と4冊', '1冊と2冊', '1冊と6冊'],
              correctAnswer: '1冊と4冊',
              explanation: <p>箱の左端が第1四分位数1冊、右端が第3四分位数4冊です。箱の中の線2冊は中央値です。</p>
            }
          },
          {
            id: 2, title: '② 範囲',
            content: <p>範囲＝最大値 − 最小値 です。ひげの両端を読みます。</p>,
            quiz: {
              type: 'choice',
              question: 'B組の範囲は？',
              options: ['6冊', '3冊', '5冊'],
              correctAnswer: '6冊',
              explanation: <p><TextWithMath text="$6-0=6$" />（冊）です。</p>
            }
          },
          {
            id: 3, title: '③ 四分位範囲',
            content: <p>四分位範囲＝第3四分位数 − 第1四分位数（箱の長さ）です。</p>,
            quiz: {
              type: 'choice',
              question: 'B組の四分位範囲は？',
              options: ['3冊', '2冊', '4冊'],
              correctAnswer: '3冊',
              explanation: <p><TextWithMath text="$4-1=3$" />（冊）。検算：目盛りで箱の幅を数えても3目盛りです。</p>
            }
          }
        ]
      },
      {
        id: "2",
        title: "(2) A組の合計冊数を x で表す",
        knowledge: ["度数分布表", "文字式", "平均値"],
        originalText: <div>{introD6}<p>(2)　A組30人が読んだ本の冊数の合計を、<TextWithMath text="$x$" /> を用いて表しなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 人数の合計から y を表す',
            content: <p>人数の合計は30人です。わかっている人数は <TextWithMath text="$2+7+5+3=17$" /> 人です。</p>,
            quiz: {
              type: 'choice',
              question: 'y を x で表すと？',
              options: ['y = 13 − x', 'y = 17 − x', 'y = 30 − x', 'y = x − 13', 'y = 13 + x'],
              correctAnswer: 'y = 13 − x',
              explanation: <p><TextWithMath text="$17+x+y=30$" /> より <TextWithMath text="$x+y=13$" />、<TextWithMath text="$y=13-x$" /> です。</p>
            }
          },
          {
            id: 2, title: '② 冊数×人数で合計',
            content: <p>合計冊数は「冊数×人数」をすべて足したものです。</p>,
            quiz: {
              type: 'choice',
              question: 'x と y を使った合計冊数は？',
              options: ['x + 3y + 49', 'x + 3y + 31', 'x + y + 49', 'x + 3y + 17', '3x + y + 49'],
              correctAnswer: 'x + 3y + 49',
              explanation: <p><TextWithMath text="$0\times2+1\times x+2\times7+3\times y+4\times5+5\times3=x+3y+49$" /> です（<TextWithMath text="$14+20+15=49$" />）。</p>
            }
          },
          {
            id: 3, title: '③ y を消す',
            content: <p>①の <TextWithMath text="$y=13-x$" /> を代入します。</p>,
            quiz: {
              type: 'choice',
              question: '合計冊数を x で表すと？',
              options: ['88 − 2x 冊', '88 + 2x 冊', '62 + 4x 冊', '88 − 3x 冊', '62 − 2x 冊'],
              correctAnswer: '88 − 2x 冊',
              explanation: <p><TextWithMath text="$x+3(13-x)+49=x+39-3x+49=88-2x$" />。検算：<TextWithMath text="$x=0$" /> なら1冊の人がいなくて3冊が13人なので <TextWithMath text="$39+49=88$" /> 冊と合います。</p>
            }
          }
        ]
      },
      {
        id: "3",
        title: "(3) 平均値が2.6冊のときの中央値",
        knowledge: ["平均値", "中央値", "1次方程式"],
        originalText: <div>{introD6}<p>(3)　A組の冊数の平均値は2.6冊であった。このとき、<TextWithMath text="$x$" />、<TextWithMath text="$y$" /> の値を求めなさい。また、A組の冊数の中央値を求め、B組の中央値と比べなさい。</p></div>,
        steps: [
          {
            id: 1, title: '① 平均値から合計を出す',
            content: <p>合計＝平均値×人数 です。</p>,
            quiz: {
              type: 'choice',
              question: 'A組の合計冊数は？',
              options: ['78冊', '26冊', '88冊'],
              correctAnswer: '78冊',
              explanation: <p><TextWithMath text="$2.6\times30=78$" />（冊）です。</p>
            }
          },
          {
            id: 2, title: '② x と y を求める',
            content: <p>(2)より <TextWithMath text="$88-2x=78$" /> です。</p>,
            quiz: {
              type: 'choice',
              question: 'x と y の値は？',
              options: ['x = 5、y = 8', 'x = 8、y = 5', 'x = 10、y = 3', 'x = 5、y = 13', 'x = 4、y = 9'],
              correctAnswer: 'x = 5、y = 8',
              explanation: <p><TextWithMath text="$2x=10$" /> より <TextWithMath text="$x=5$" />、<TextWithMath text="$y=13-5=8$" />。検算：<TextWithMath text="$5+14+24+20+15=78$" /> で合います。</p>
            }
          },
          {
            id: 3, title: '③ 中央値は何番目と何番目？',
            content: <p>30人は偶数なので、少ないほうから数えて真ん中の2人の平均が中央値です。</p>,
            quiz: {
              type: 'choice',
              question: '中央値は、少ないほうから何番目と何番目の平均？',
              options: ['15番目と16番目', '15番目だけ', '14番目と15番目', '16番目と17番目', '30番目と31番目'],
              correctAnswer: '15番目と16番目',
              explanation: <p><TextWithMath text="$30\div2=15$" /> なので、15番目と16番目です。</p>
            }
          },
          {
            id: 4, title: '④ 累積で数える',
            content: <p>少ないほうから人数を足していきます。0冊2人、1冊まで7人、2冊まで14人、3冊まで22人です。</p>,
            quiz: {
              type: 'choice',
              question: 'A組の中央値は？',
              options: ['3冊', '2冊', '2.5冊'],
              correctAnswer: '3冊',
              explanation: <p>15番目と16番目はどちらも3冊（15〜22番目）なので中央値は3冊です。</p>
            }
          },
          {
            id: 5, title: '⑤ B組と比べる',
            content: <p>B組の中央値は箱ひげ図の箱の中の線です。</p>,
            quiz: {
              type: 'choice',
              question: '正しいのはどれ？',
              options: ['A組の中央値のほうが1冊大きい', 'B組の中央値のほうが1冊大きい', 'A組とB組の中央値は等しい', 'A組の中央値のほうが0.5冊大きい', 'B組の中央値のほうが2冊大きい'],
              correctAnswer: 'A組の中央値のほうが1冊大きい',
              explanation: <p>A組3冊、B組2冊なので、A組のほうが1冊大きいです。</p>
            }
          }
        ]
      }
    ]
  }
};
