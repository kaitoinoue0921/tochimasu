import React from 'react';
import { TextWithMath } from '@/components/MathText';

// 令和7年度の図（原本PDFの図をもとに描き直したもの）。ダークモードでも読めるよう白背景固定。
const ink = '#334155';
const lbl = { fontSize: 13, fontWeight: 700, fill: ink } as const;

function Fig({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-4 bg-white text-slate-800 p-3 rounded-xl border border-slate-200 flex flex-col items-center">
      {children}
      {caption && <figcaption className="text-xs text-slate-500 mt-1 text-center">{caption}</figcaption>}
    </figure>
  );
}

const cell = 'border border-slate-400 px-3 py-1';

/** 大問1-6 直角三角形ABC（AC=2cm, BC=5cm） */
export function R7TriangleFig() {
  return (
    <Fig>
      <svg viewBox="0 0 260 140" className="w-64 h-auto">
        <polygon points="20,100 220,100 220,30" fill="none" stroke={ink} strokeWidth="2" />
        <polyline points="210,100 210,90 220,90" fill="none" stroke={ink} strokeWidth="1" />
        <path d="M 20 104 Q 120 124 220 104" fill="none" stroke={ink} strokeWidth="1" />
        <path d="M 224 30 Q 238 65 224 100" fill="none" stroke={ink} strokeWidth="1" />
        <text x="6" y="106" style={lbl}>B</text>
        <text x="224" y="118" style={lbl}>C</text>
        <text x="224" y="26" style={lbl}>A</text>
        <text x="105" y="132" fontSize="12" fill={ink}>5cm</text>
        <text x="236" y="69" fontSize="12" fill={ink}>2cm</text>
      </svg>
    </Fig>
  );
}

/** 大問1-8 2本の1次関数のグラフ */
export function R7LinesFig() {
  const X = (x: number) => 110 + 25 * x;
  const Y = (y: number) => 130 - 25 * y;
  return (
    <Fig>
      <svg viewBox="0 0 230 210" className="w-56 h-auto">
        <line x1="10" y1="130" x2="220" y2="130" stroke={ink} strokeWidth="1" />
        <line x1="110" y1="200" x2="110" y2="8" stroke={ink} strokeWidth="1" />
        <text x="214" y="146" fontSize="12" fontStyle="italic" fill={ink}>x</text>
        <text x="115" y="16" fontSize="12" fontStyle="italic" fill={ink}>y</text>
        <text x="96" y="146" fontSize="12" fill={ink}>O</text>
        <line x1={X(-0.4)} y1={Y(3 + 1.2)} x2={X(1.8)} y2={Y(3 - 5.4)} stroke={ink} strokeWidth="1.8" />
        <line x1={X(-3.6)} y1={Y(1 + 1.8)} x2={X(4)} y2={Y(1 - 2)} stroke={ink} strokeWidth="1.8" />
        <text x="4" y="22" fontSize="11" fontStyle="italic" fill={ink}>y = ax + b</text>
        <text x="4" y="52" fontSize="11" fontStyle="italic" fill={ink}>y = cx + d</text>
      </svg>
    </Fig>
  );
}

/** 大問2-3 1〜100の数表と、太線で囲んだ4つの数 */
export function R7NumberTableFig() {
  const shaded = new Set([23, 24, 34, 35]);
  const piece = (labels: string[], italic: boolean) => (
    <div className="grid grid-cols-3 w-24 text-center text-sm">
      {[labels[0], labels[1], '', '', labels[2], labels[3]].map((v, i) => (
        <div key={i} className={v ? `bg-slate-300 border-2 border-slate-800 py-1 ${italic ? 'italic font-serif' : ''}` : ''}>{v}</div>
      ))}
    </div>
  );
  return (
    <Fig>
      <table className="border-collapse text-xs sm:text-sm">
        <tbody>
          {Array.from({ length: 10 }, (_, r) => (
            <tr key={r}>
              {Array.from({ length: 10 }, (_, c) => {
                const v = r * 10 + c + 1;
                return <td key={c} className={`border border-slate-500 w-7 sm:w-9 h-7 text-center ${shaded.has(v) ? 'bg-slate-300 font-bold' : ''}`}>{v}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-6 mt-4">
        {piece(['23', '24', '34', '35'], false)}
        {piece(['a', 'b', 'c', 'd'], true)}
      </div>
    </Fig>
  );
}

/** 大問3-1 2点A, B */
export function R7PointsFig() {
  return (
    <Fig>
      <svg viewBox="0 0 200 110" className="w-52 h-auto">
        <circle cx="70" cy="35" r="3" fill={ink} />
        <circle cx="150" cy="70" r="3" fill={ink} />
        <text x="52" y="40" style={lbl}>A</text>
        <text x="134" y="78" style={lbl}>B</text>
      </svg>
    </Fig>
  );
}

/** 大問3-2 正四角錐OABCDと正方形EFGH（E, F, G, Hは各辺の中点の位置） */
export function R7PyramidFig() {
  const P: Record<string, [number, number]> = {
    O: [110, 20], A: [25, 205], B: [115, 240], C: [205, 195], D: [95, 165],
    E: [67.5, 112.5], F: [112.5, 130], G: [157.5, 107.5], H: [102.5, 92.5],
  };
  const solid = [['O', 'A'], ['O', 'B'], ['O', 'C'], ['A', 'B'], ['B', 'C'], ['E', 'F'], ['F', 'G']];
  const dashed = [['O', 'D'], ['A', 'D'], ['D', 'C'], ['E', 'H'], ['H', 'G']];
  const off: Record<string, [number, number]> = {
    O: [-5, -6], A: [-16, 8], B: [-4, 18], C: [6, 6], D: [-6, 18], E: [-16, 2], F: [2, 16], G: [6, 2], H: [-15, -3],
  };
  return (
    <Fig>
      <svg viewBox="0 0 230 265" className="w-52 h-auto">
        {solid.map(([p, q]) => <line key={p + q} x1={P[p][0]} y1={P[p][1]} x2={P[q][0]} y2={P[q][1]} stroke={ink} strokeWidth="1.8" />)}
        {dashed.map(([p, q]) => <line key={p + q} x1={P[p][0]} y1={P[p][1]} x2={P[q][0]} y2={P[q][1]} stroke={ink} strokeWidth="1.3" strokeDasharray="5 4" />)}
        {Object.entries(P).map(([k, [x, y]]) => <text key={k} x={x + off[k][0]} y={y + off[k][1]} style={lbl}>{k}</text>)}
      </svg>
    </Fig>
  );
}

/** 大問3-3 正三角形ABCとDEF */
export function R7TwoTrianglesFig() {
  const P: Record<string, [number, number]> = {
    A: [120, 46.8], B: [20, 220], C: [220, 220], D: [346.1, 56.5],
    E: [82, 112.6], F: [262.7, 313.3], G: [178.7, 220], H: [149.7, 98.2],
  };
  const off: Record<string, [number, number]> = {
    A: [-5, -8], B: [-16, 6], C: [6, 6], D: [6, 0], E: [-16, 0], F: [-4, 20], G: [-6, 20], H: [0, -8],
  };
  const pt = (k: string) => P[k].join(',');
  return (
    <Fig>
      <svg viewBox="0 25 370 315" className="w-72 h-auto">
        <polygon points={[pt('A'), pt('B'), pt('C')].join(' ')} fill="none" stroke={ink} strokeWidth="1.8" />
        <polygon points={[pt('D'), pt('E'), pt('F')].join(' ')} fill="none" stroke={ink} strokeWidth="1.8" />
        {Object.entries(P).map(([k, [x, y]]) => <text key={k} x={x + off[k][0]} y={y + off[k][1]} style={lbl}>{k}</text>)}
      </svg>
    </Fig>
  );
}

/** 大問4-1 梨の糖度の度数分布表 */
export function R7SugarTable() {
  const rows: [string, number, number][] = [
    ['11.5 〜 12.0', 7, 4], ['12.0 〜 12.5', 15, 5], ['12.5 〜 13.0', 14, 10], ['13.0 〜 13.5', 12, 9], ['13.5 〜 14.0', 2, 2],
  ];
  return (
    <Fig>
      <table className="border-collapse text-sm">
        <thead>
          <tr>
            <th className={cell}>階級（糖度）<br /><span className="text-xs font-normal">以上 〜 未満</span></th>
            <th className={cell}>品種A<br />度数（個）</th>
            <th className={cell}>品種B<br />度数（個）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([c, a, b]) => (
            <tr key={c}>
              <td className={`${cell} text-center`}>{c}</td>
              <td className={`${cell} text-right`}>{a}</td>
              <td className={`${cell} text-right`}>{b}</td>
            </tr>
          ))}
          <tr>
            <td className={`${cell} text-center`}>合計</td>
            <td className={`${cell} text-right`}>50</td>
            <td className={`${cell} text-right`}>30</td>
          </tr>
        </tbody>
      </table>
    </Fig>
  );
}

/** 大問4-2 正方形ABCDと点P */
export function R7SquareFig() {
  return (
    <Fig>
      <svg viewBox="0 0 200 200" className="w-44 h-auto">
        <polygon points="100,25 25,100 100,175 175,100" fill="none" stroke={ink} strokeWidth="1.8" />
        <circle cx="100" cy="25" r="3" fill={ink} />
        <line x1="78" y1="20" x2="60" y2="38" stroke={ink} strokeWidth="1.3" />
        <polygon points="56,42 59,32 66,38" fill={ink} />
        <text x="84" y="16" style={lbl}>P</text>
        <text x="104" y="16" style={lbl}>A</text>
        <text x="8" y="105" style={lbl}>B</text>
        <text x="95" y="194" style={lbl}>C</text>
        <text x="180" y="105" style={lbl}>D</text>
      </svg>
    </Fig>
  );
}

/** 大問5-1 ①y=ax²（a>0）と②y=-9/x */
export function R7FuncGraphFig() {
  const X = (x: number) => 150 + 22 * x;
  const Y = (y: number) => 110 - 10 * y;
  const path = (f: (x: number) => number, from: number, to: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const x = from + ((to - from) * i) / 60;
      pts.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`);
    }
    return 'M ' + pts.join(' L ');
  };
  return (
    <Fig>
      <svg viewBox="0 0 300 230" className="w-72 h-auto">
        <line x1="10" y1="110" x2="290" y2="110" stroke={ink} strokeWidth="1" />
        <line x1="150" y1="222" x2="150" y2="5" stroke={ink} strokeWidth="1" />
        <text x="282" y="126" fontSize="12" fontStyle="italic" fill={ink}>x</text>
        <text x="155" y="14" fontSize="12" fontStyle="italic" fill={ink}>y</text>
        <text x="136" y="125" fontSize="12" fill={ink}>O</text>
        <path d={path((x) => x * x, -3.3, 3.3)} fill="none" stroke={ink} strokeWidth="1.8" />
        <path d={path((x) => -9 / x, -6.2, -0.82)} fill="none" stroke={ink} strokeWidth="1.8" />
        <path d={path((x) => -9 / x, 0.82, 6.2)} fill="none" stroke={ink} strokeWidth="1.8" />
        <text x="226" y="20" fontSize="13" fill={ink}>①</text>
        <text x="12" y="80" fontSize="13" fill={ink}>②</text>
        <text x="270" y="150" fontSize="13" fill={ink}>②</text>
      </svg>
    </Fig>
  );
}

/** 大問6 n=6のときのフォーメーションチェンジ（人の絵をゼッケン番号の丸で表したもの） */
export function R7DanceFig() {
  const rows = [[1, 2, 3, 4, 5, 6], [1, 4, 2, 5, 3, 6], [1, 5, 4, 3, 2, 6]];
  const names = ['ゼッケンの番号順の並び', '1回目のフォーメーションチェンジ後の並び', '2回目のフォーメーションチェンジ後の並び'];
  const cx = (i: number) => 50 + 52 * i;
  const cy = (r: number) => 40 + 105 * r;
  return (
    <Fig>
      <svg viewBox="0 0 360 334" className="w-full max-w-md h-auto">
        <defs>
          <marker id="r7arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={ink} />
          </marker>
        </defs>
        <text x="66" y="12" fontSize="11" fill={ink}>（西側の組）</text>
        <text x="222" y="12" fontSize="11" fill={ink}>（東側の組）</text>
        {rows.map((row, r) => (
          <g key={r}>
            <text x="4" y={cy(r) + 5} fontSize="12" fill={ink}>西</text>
            <text x="342" y={cy(r) + 5} fontSize="12" fill={ink}>東</text>
            <line x1="180" y1={cy(r) - 20} x2="180" y2={cy(r) + 20} stroke={ink} strokeWidth="1" />
            {row.map((v, i) => (
              <g key={i}>
                <circle cx={cx(i) + (i >= 3 ? 26 : 0)} cy={cy(r)} r="15" fill="#fff" stroke={ink} strokeWidth="1.5" />
                <text x={cx(i) + (i >= 3 ? 26 : 0)} y={cy(r) + 5} fontSize="14" fontWeight="700" textAnchor="middle" fill={ink}>{v}</text>
              </g>
            ))}
            <text x="180" y={cy(r) + 36} fontSize="10.5" textAnchor="middle" fill={ink}>{names[r]}</text>
            {r < 2 && row.map((_, i) => {
              const j = i < 3 ? 2 * i : 2 * (i - 3) + 1;
              const x1 = cx(i) + (i >= 3 ? 26 : 0);
              const x2 = cx(j) + (j >= 3 ? 26 : 0);
              return (
                <line key={`a${i}`} x1={x1} y1={cy(r) + 42} x2={x2} y2={cy(r + 1) - 18} stroke={ink} strokeWidth="1.2"
                  strokeDasharray={i >= 3 ? '4 3' : undefined} markerEnd="url(#r7arrow)" />
              );
            })}
          </g>
        ))}
        <text x="20" y="326" fontSize="10.5" fill={ink}>実線の矢印：西側の組の生徒の移動</text>
        <text x="190" y="326" fontSize="10.5" fill={ink}>点線の矢印：東側の組の移動</text>
      </svg>
    </Fig>
  );
}

/** 大問6の共通の問題文 */
export function R7DanceIntro() {
  return (
    <div className="space-y-3">
      <p><TextWithMath text="$n$" /> は4以上の偶数とする。1番から <TextWithMath text="$n$" /> 番までのゼッケンをつけている <TextWithMath text="$n$" /> 人の生徒が、校庭の西から東へゼッケンの番号順に横一列に並んでダンスを始める。ダンス中に、この <TextWithMath text="$n$" /> 人の生徒は横一列の並び順をかえる。その際、同じ人数ずつ西側の組と東側の組に分かれ、それぞれの組の西から順に1人ずつ交互に並びかわることとする。ただし、全体の西から1番目には西側の組の西から1人目の生徒、全体の西から2番目には東側の組の西から1人目の生徒が並ぶようにする。ここでは、この並びかわりをフォーメーションチェンジと呼ぶこととする。</p>
      <p>例えば <TextWithMath text="$n=6$" /> のとき、下の図のように、まず、ゼッケンの番号(1, 2, 3)をつけている生徒が西側の組、ゼッケンの番号(4, 5, 6)をつけている生徒が東側の組となるので、1回目のフォーメーションチェンジ後は、ゼッケンの番号は西から1, 4, 2, 5, 3, 6の順に並びかわる。次に、ゼッケンの番号(1, 4, 2)をつけている生徒が西側の組、ゼッケンの番号(5, 3, 6)をつけている生徒が東側の組となるので、2回目のフォーメーションチェンジ後は、ゼッケンの番号は西から1, 5, 4, 3, 2, 6の順に並びかわる。このとき、2番のゼッケンをつけている生徒は、全体の西から5番目、東側の組の西から2人目にいることになる。</p>
      <p>このように、<TextWithMath text="$n$" /> 人の生徒がダンス中にフォーメーションチェンジを繰り返し行う。</p>
      <R7DanceFig />
      <p>このとき、次の1, 2, 3の問いに答えなさい。</p>
    </div>
  );
}
