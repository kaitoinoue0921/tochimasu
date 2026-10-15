import React from 'react';

// 宇都宮短大附属 令和8年度 第1回(1月5日) 数学の図（問題の図をもとに描き直したもの）
const lbl = 'text-[11px] font-bold fill-slate-700 dark:fill-slate-200';
const stroke = 'stroke-slate-700 dark:stroke-slate-200';
const dot = 'fill-slate-700 dark:fill-slate-200';

function FigWrap({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      {children}
      {caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{caption}</p>}
    </div>
  );
}

/** 大問2-3 正五角形と平行線 */
export function PentagonFig() {
  const A = [70, 45], B = [66.9, 134.9], C = [151.4, 165.7], D = [206.8, 94.8], E = [156.5, 20.2];
  return (
    <FigWrap>
      <svg viewBox="0 0 270 190" className="w-60 h-auto">
        <line x1="20" y1="45" x2="245" y2="45" className={stroke} strokeWidth="1.5" />
        <line x1="20" y1="165.7" x2="245" y2="165.7" className={stroke} strokeWidth="1.5" />
        <polygon points={`${A} ${B} ${C} ${D} ${E}`} fill="none" className={stroke} strokeWidth="2" />
        <path d="M 95 45 A 25 25 0 0 0 94 38.1" fill="none" className="stroke-rose-500" strokeWidth="1.5" />
        <text x="100" y="38" className="text-[11px] font-bold fill-rose-600 dark:fill-rose-400">16°</text>
        <path d="M 171.4 165.7 A 20 20 0 0 0 163.7 149.9" fill="none" className="stroke-sky-500" strokeWidth="1.5" />
        <text x="174" y="158" className="text-[12px] italic font-bold fill-sky-600 dark:fill-sky-400">x</text>
        <text x="56" y="40" className={lbl}>A</text>
        <text x="52" y="142" className={lbl}>B</text>
        <text x="146" y="182" className={lbl}>C</text>
        <text x="212" y="98" className={lbl}>D</text>
        <text x="156" y="14" className={lbl}>E</text>
        <text x="250" y="49" className="text-[12px] italic font-bold fill-slate-700 dark:fill-slate-200">m</text>
        <text x="250" y="170" className="text-[12px] italic font-bold fill-slate-700 dark:fill-slate-200">n</text>
      </svg>
    </FigWrap>
  );
}

/** 大問2-6 平行四辺形ABCD */
export function ParallelogramFig() {
  // B(30,150) C(210,150) A(80,30) D(260,30)、BP:PM:MC = 1:2:3
  const A = [80, 30], D = [260, 30], B = [30, 150], C = [210, 150], P = [60, 150], M = [120, 150];
  // Q = AMとDPの交点（PQ:QD = 1:3）
  const Q = [P[0] + (D[0] - P[0]) / 4, P[1] + (D[1] - P[1]) / 4];
  return (
    <FigWrap>
      <svg viewBox="0 0 285 175" className="w-64 h-auto">
        <polygon points={`${A} ${D} ${C} ${B}`} fill="none" className={stroke} strokeWidth="2" />
        <line x1={A[0]} y1={A[1]} x2={P[0]} y2={P[1]} className={stroke} strokeWidth="1.2" />
        <line x1={A[0]} y1={A[1]} x2={M[0]} y2={M[1]} className={stroke} strokeWidth="1.2" />
        <line x1={D[0]} y1={D[1]} x2={P[0]} y2={P[1]} className={stroke} strokeWidth="1.2" />
        <line x1={D[0]} y1={D[1]} x2={M[0]} y2={M[1]} className={stroke} strokeWidth="1.2" />
        <text x="74" y="22" className={lbl}>A</text>
        <text x="262" y="22" className={lbl}>D</text>
        <text x="20" y="166" className={lbl}>B</text>
        <text x="56" y="166" className={lbl}>P</text>
        <text x="115" y="166" className={lbl}>M</text>
        <text x="206" y="166" className={lbl}>C</text>
        <text x={Q[0] - 4} y={Q[1] - 6} className={lbl}>Q</text>
      </svg>
    </FigWrap>
  );
}

/** 大問3 さいころの展開図 */
export function DieNetFig() {
  const cells: [number, number, string][] = [
    [2, 0, '2'], [0, 1, '1'], [1, 1, '2'], [2, 1, '3'], [3, 1, '3'], [2, 2, '3'],
  ];
  const s = 36;
  return (
    <FigWrap>
      <svg viewBox="0 0 150 115" className="w-40 h-auto">
        {cells.map(([cx, cy, t]) => (
          <g key={`${cx}-${cy}`}>
            <rect x={3 + cx * s} y={3 + cy * s} width={s} height={s} fill="none" className={stroke} strokeWidth="1.5" />
            <text x={3 + cx * s + s / 2} y={3 + cy * s + s / 2 + 5} textAnchor="middle" className="text-[13px] fill-slate-700 dark:fill-slate-200">{t}</text>
          </g>
        ))}
      </svg>
    </FigWrap>
  );
}

/** 大問4 台形ABCD */
export function MovingTrapezoidFig() {
  // 1cm = 22px。A(20,120) B(196,120) C(196,32) D(108,32)
  return (
    <FigWrap>
      <svg viewBox="0 0 250 150" className="w-60 h-auto">
        <polygon points="20,120 196,120 196,32 108,32" fill="none" className={stroke} strokeWidth="2" />
        <polyline points="186,120 186,110 196,110" fill="none" className={stroke} strokeWidth="1" />
        <polyline points="186,32 186,42 196,42" fill="none" className={stroke} strokeWidth="1" />
        <circle cx="60" cy="120" r="3" className={dot} />
        <circle cx="196" cy="82" r="3" className={dot} />
        <text x="54" y="112" className={lbl}>P →</text>
        <text x="176" y="86" className={lbl}>Q</text>
        <text x="200" y="76" className={lbl}>↑</text>
        <text x="8" y="134" className={lbl}>A</text>
        <text x="198" y="134" className={lbl}>B</text>
        <text x="198" y="28" className={lbl}>C</text>
        <text x="98" y="28" className={lbl}>D</text>
        <text x="94" y="140" className={lbl}>8cm</text>
        <text x="206" y="94" className={lbl}>4cm</text>
        <text x="138" y="24" className={lbl}>4cm</text>
      </svg>
    </FigWrap>
  );
}

/** 大問4-2 グラフの選択肢 */
export function GraphChoicesFig() {
  const graphs: { n: string; d: string }[] = [
    { n: '1', d: 'M 10 70 Q 30 70 40 45 L 65 15' },
    { n: '2', d: 'M 10 70 Q 30 70 40 40 L 65 55' },
    { n: '3', d: 'M 10 70 L 32 35 L 60 35' },
    { n: '4', d: 'M 10 70 L 32 35 L 60 50' },
  ];
  return (
    <FigWrap caption="グラフ1〜4（問題の図を簡略化）">
      <div className="grid grid-cols-4 gap-2">
        {graphs.map((g) => (
          <svg key={g.n} viewBox="0 0 80 85" className="w-20 h-auto">
            <line x1="10" y1="5" x2="10" y2="80" className={stroke} strokeWidth="1" />
            <line x1="2" y1="70" x2="78" y2="70" className={stroke} strokeWidth="1" />
            <path d={g.d} fill="none" className={stroke} strokeWidth="2" />
            <text x="2" y="12" className={lbl}>{g.n}</text>
            <text x="2" y="82" className="text-[9px] fill-slate-700 dark:fill-slate-200">O</text>
          </svg>
        ))}
      </div>
    </FigWrap>
  );
}

/** 大問5 正四角錐O-ABCD */
export function PyramidFig({ showPlane = false }: { showPlane?: boolean }) {
  const O = [150, 15], A = [70, 205], B = [170, 205], C = [225, 160], D = [125, 160];
  const H = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2];
  const M = [(O[0] + A[0]) / 2, (O[1] + A[1]) / 2];
  const E = [O[0] + (C[0] - O[0]) * 0.4, O[1] + (C[1] - O[1]) * 0.4];
  // F = OH と ME の交点（MF:FE = 5:4）
  const F = [M[0] + (E[0] - M[0]) * 5 / 9, M[1] + (E[1] - M[1]) * 5 / 9];
  const solid = [[O, A], [O, B], [O, C], [A, B], [B, C]];
  const dashed = [[O, D], [A, D], [D, C], [A, C], [B, D], [O, H], [M, E]];
  return (
    <FigWrap caption={showPlane ? '色をつけた面が平面OAC（Hは対角線ACの中点）' : undefined}>
      <svg viewBox="0 0 250 220" className="w-56 h-auto">
        {showPlane && <polygon points={`${O} ${A} ${C}`} className="fill-sky-200/50 dark:fill-sky-800/40" />}
        {solid.map(([p, q], i) => (
          <line key={'s' + i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} className={stroke} strokeWidth="2" />
        ))}
        {dashed.map(([p, q], i) => (
          <line key={'d' + i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} className={stroke} strokeWidth="1.2" strokeDasharray="4 3" />
        ))}
        {[M, E, F, H].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" className={dot} />)}
        <text x={O[0] - 4} y={O[1] - 3} className={lbl}>O</text>
        <text x={A[0] - 12} y={A[1] + 10} className={lbl}>A</text>
        <text x={B[0] + 2} y={B[1] + 12} className={lbl}>B</text>
        <text x={C[0] + 4} y={C[1] + 4} className={lbl}>C</text>
        <text x={D[0] - 14} y={D[1] - 2} className={lbl}>D</text>
        <text x={H[0] - 4} y={H[1] + 14} className={lbl}>H</text>
        <text x={M[0] - 14} y={M[1] + 4} className={lbl}>M</text>
        <text x={E[0] + 5} y={E[1]} className={lbl}>E</text>
        <text x={F[0] + 4} y={F[1] + 12} className={lbl}>F</text>
      </svg>
    </FigWrap>
  );
}
