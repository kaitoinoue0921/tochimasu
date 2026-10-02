import React from 'react';

// 令和5年度の図（PDFの図をもとに簡略化して描いたもの）
const lbl = 'text-[11px] font-bold fill-slate-700 dark:fill-slate-200';
const stroke = 'stroke-slate-700 dark:stroke-slate-200';

function FigWrap({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      {children}
      {caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{caption}</p>}
    </div>
  );
}

/** 大問1-5 立方体ABCD-EFGH */
export function CubeFig() {
  const P: Record<string, [number, number]> = {
    A: [40, 70], B: [140, 70], F: [140, 170], E: [40, 170],
    D: [90, 30], C: [190, 30], G: [190, 130], H: [90, 130],
  };
  const solid = [['A', 'B'], ['B', 'F'], ['F', 'E'], ['E', 'A'], ['A', 'D'], ['D', 'C'], ['C', 'B'], ['C', 'G'], ['G', 'F']];
  const dashed = [['D', 'H'], ['H', 'E'], ['H', 'G']];
  const pos: Record<string, [number, number]> = {
    A: [-12, 4], B: [6, 14], C: [6, -4], D: [-4, -6], E: [-12, 14], F: [6, 14], G: [6, 4], H: [-14, -4],
  };
  return (
    <FigWrap>
      <svg viewBox="0 0 220 195" className="w-52 h-auto">
        {solid.map(([p, q]) => (
          <line key={p + q} x1={P[p][0]} y1={P[p][1]} x2={P[q][0]} y2={P[q][1]} className={stroke} strokeWidth="2" />
        ))}
        {dashed.map(([p, q]) => (
          <line key={p + q} x1={P[p][0]} y1={P[p][1]} x2={P[q][0]} y2={P[q][1]} className={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
        ))}
        {Object.entries(P).map(([k, [x, y]]) => (
          <text key={k} x={x + pos[k][0]} y={y + pos[k][1]} className={lbl}>{k}</text>
        ))}
      </svg>
    </FigWrap>
  );
}

/** 大問1-7 円Oと∠x */
export function CircleAngleFig() {
  // 中心(100,100) 半径80。C:20°, B:-15°, A:-114°（数学の角度）
  const O = [100, 100], C = [175.2, 72.6], B = [177.3, 120.7], A = [67.5, 173.1];
  return (
    <FigWrap>
      <svg viewBox="0 0 215 200" className="w-52 h-auto">
        <circle cx="100" cy="100" r="80" fill="none" className={stroke} strokeWidth="2" />
        <polyline points={`${O} ${C} ${B} ${A} ${O}`} fill="none" className={stroke} strokeWidth="2" />
        <circle cx="100" cy="100" r="2.5" className="fill-slate-700 dark:fill-slate-200" />
        <path d="M 108.5 97.1 A 9 9 0 0 1 96.3 108.2" fill="none" className="stroke-rose-500" strokeWidth="1.5" />
        <path d="M 168.6 125.4 A 10 10 0 0 1 176.0 110.8" fill="none" className="stroke-sky-500" strokeWidth="1.5" />
        <text x="88" y="94" className={lbl}>O</text>
        <text x="106" y="124" className="text-[11px] font-bold fill-rose-600 dark:fill-rose-400">134°</text>
        <text x="157" y="121" className="text-[12px] italic font-bold fill-sky-600 dark:fill-sky-400">x</text>
        <text x="180" y="68" className={lbl}>C</text>
        <text x="183" y="128" className={lbl}>B</text>
        <text x="58" y="190" className={lbl}>A</text>
      </svg>
    </FigWrap>
  );
}

/** 大問3-1 △ABC */
export function TriangleABCFig() {
  return (
    <FigWrap>
      <svg viewBox="0 0 300 150" className="w-64 h-auto">
        <polygon points="20,125 230,125 270,20" fill="none" className={stroke} strokeWidth="2" />
        <text x="8" y="140" className={lbl}>A</text>
        <text x="228" y="142" className={lbl}>B</text>
        <text x="274" y="18" className={lbl}>C</text>
      </svg>
    </FigWrap>
  );
}

/** 大問3-2 台形ABCD */
export function TrapezoidFig({ showAxis = false }: { showAxis?: boolean }) {
  return (
    <FigWrap caption={showAxis ? '赤い破線が回転の軸（辺CD）' : undefined}>
      <svg viewBox="0 0 220 200" className="w-52 h-auto">
        <polygon points="40,90 40,170 160,170 160,50" fill="none" className={stroke} strokeWidth="2" />
        {showAxis && <line x1="160" y1="30" x2="160" y2="190" className="stroke-rose-500" strokeWidth="2" strokeDasharray="5 4" />}
        <polyline points="40,160 50,160 50,170" fill="none" className={stroke} strokeWidth="1" />
        <polyline points="150,170 150,160 160,160" fill="none" className={stroke} strokeWidth="1" />
        <text x="28" y="88" className={lbl}>A</text>
        <text x="28" y="186" className={lbl}>B</text>
        <text x="164" y="186" className={lbl}>C</text>
        <text x="164" y="48" className={lbl}>D</text>
        <text x="6" y="134" className={lbl}>2cm</text>
        <text x="88" y="188" className={lbl}>3cm</text>
        <text x="168" y="114" className={lbl}>3cm</text>
      </svg>
    </FigWrap>
  );
}

/** 大問3-3 正方形ABCDと垂線 */
export function SquareFig() {
  const A = [20, 20], D = [180, 20], B = [20, 180], C = [180, 180], E = [80, 180], F = [72.6, 160.3], G = [39.7, 72.6];
  return (
    <FigWrap>
      <svg viewBox="0 0 205 205" className="w-48 h-auto">
        <polygon points={`${A} ${D} ${C} ${B}`} fill="none" className={stroke} strokeWidth="2" />
        <line x1={A[0]} y1={A[1]} x2={E[0]} y2={E[1]} className={stroke} strokeWidth="2" />
        <line x1={B[0]} y1={B[1]} x2={F[0]} y2={F[1]} className={stroke} strokeWidth="1.5" />
        <line x1={D[0]} y1={D[1]} x2={G[0]} y2={G[1]} className={stroke} strokeWidth="1.5" />
        <text x="8" y="16" className={lbl}>A</text>
        <text x="184" y="16" className={lbl}>D</text>
        <text x="8" y="196" className={lbl}>B</text>
        <text x="184" y="196" className={lbl}>C</text>
        <text x="76" y="196" className={lbl}>E</text>
        <text x="78" y="160" className={lbl}>F</text>
        <text x="44" y="88" className={lbl}>G</text>
      </svg>
    </FigWrap>
  );
}

/** 大問4-3 箱ひげ図 */
export function BoxPlotFig() {
  const sx = (v: number) => 30 + v * 15;
  const rows = [
    { label: '1回目', y: 30, d: [6, 8, 13, 16, 18] },
    { label: '2回目', y: 75, d: [8, 10, 14, 16, 20] },
  ];
  return (
    <FigWrap caption="目盛りは1点ごと（PDFの箱ひげ図を読み取って作図）">
      <svg viewBox="0 0 345 120" className="w-full max-w-md h-auto">
        {Array.from({ length: 21 }, (_, i) => (
          <line key={i} x1={sx(i)} y1="8" x2={sx(i)} y2="97" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="2 2" />
        ))}
        <line x1={sx(0)} y1="97" x2={sx(20)} y2="97" className={stroke} strokeWidth="1.5" />
        {[0, 5, 10, 15, 20].map((v) => (
          <text key={v} x={sx(v)} y="112" textAnchor="middle" className={lbl}>{v}</text>
        ))}
        {rows.map(({ label, y, d }) => (
          <g key={label}>
            <line x1={sx(d[0])} y1={y} x2={sx(d[1])} y2={y} className={stroke} strokeWidth="2" />
            <line x1={sx(d[3])} y1={y} x2={sx(d[4])} y2={y} className={stroke} strokeWidth="2" />
            <line x1={sx(d[0])} y1={y - 7} x2={sx(d[0])} y2={y + 7} className={stroke} strokeWidth="2" />
            <line x1={sx(d[4])} y1={y - 7} x2={sx(d[4])} y2={y + 7} className={stroke} strokeWidth="2" />
            <rect x={sx(d[1])} y={y - 14} width={sx(d[3]) - sx(d[1])} height="28" className={`${stroke} fill-white dark:fill-slate-900`} strokeWidth="2" />
            <line x1={sx(d[2])} y1={y - 14} x2={sx(d[2])} y2={y + 14} className={stroke} strokeWidth="2.5" />
            <text x="2" y={y + 4} className="text-[9px] font-bold fill-slate-700 dark:fill-slate-200">{label}</text>
          </g>
        ))}
      </svg>
    </FigWrap>
  );
}

/** 大問5-1 y=5x と y=2x^2 */
export function ParabolaLineFig() {
  // 図の見やすさのため t=1.6 程度で描いたイメージ（1目盛り=20px, y方向は 1→8px）
  const ox = 110, oy = 140;
  const X = (x: number) => ox + x * 40;
  const Y = (y: number) => oy - y * 8;
  const t = 1.6;
  const par = Array.from({ length: 41 }, (_, i) => {
    const x = -2.1 + (4.2 * i) / 40;
    return `${X(x)},${Y(2 * x * x)}`;
  }).join(' ');
  const A = [X(t), Y(5 * t)], B = [X(t), Y(2 * t * t)], C = [X(-t), Y(2 * t * t)], D = [X(-t), Y(-5 * t)];
  return (
    <FigWrap caption="位置関係のイメージ図（縮尺は正確ではありません）">
      <svg viewBox="0 0 230 220" className="w-56 h-auto">
        <line x1="10" y1={oy} x2="220" y2={oy} className="stroke-slate-400" strokeWidth="1" />
        <line x1={ox} y1="5" x2={ox} y2="215" className="stroke-slate-400" strokeWidth="1" />
        <polyline points={par} fill="none" className={stroke} strokeWidth="2" />
        <line x1={X(-1.85)} y1={Y(-9.25)} x2={X(1.7)} y2={Y(8.5)} className={stroke} strokeWidth="2" />
        <line x1={C[0]} y1={C[1]} x2={B[0]} y2={B[1]} className="stroke-sky-500" strokeWidth="1.5" />
        <line x1={C[0]} y1={C[1]} x2={D[0]} y2={D[1]} className="stroke-rose-500" strokeWidth="1.5" />
        <line x1={B[0]} y1={B[1]} x2={A[0]} y2={A[1]} className="stroke-slate-400" strokeWidth="1" strokeDasharray="3 2" />
        <line x1={B[0]} y1={B[1]} x2={B[0]} y2={oy} className="stroke-slate-400" strokeWidth="1" strokeDasharray="3 2" />
        <polyline points={`${ox},${oy} ${A} ${C} ${ox},${oy}`} fill="none" className="stroke-emerald-500" strokeWidth="1" />
        {[A, B, C, D].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" className="fill-slate-700 dark:fill-slate-200" />)}
        <text x={A[0] - 14} y={A[1] - 2} className={lbl}>A</text>
        <text x={B[0] + 5} y={B[1] + 4} className={lbl}>B</text>
        <text x={C[0] - 14} y={C[1] + 4} className={lbl}>C</text>
        <text x={D[0] - 14} y={D[1] + 4} className={lbl}>D</text>
        <text x={ox + 4} y={oy + 13} className={lbl}>O</text>
        <text x="148" y="18" className="text-[10px] fill-slate-600 dark:fill-slate-300">y=2x²</text>
        <text x="20" y="214" className="text-[10px] fill-slate-600 dark:fill-slate-300">y=5x</text>
      </svg>
    </FigWrap>
  );
}

/** 大問5-2 前田さんのグラフ */
export function WalkGraphFig() {
  const X = (x: number) => 50 + x * 9;
  const Y = (y: number) => 190 - y * 0.1;
  const pts: [number, number][] = [[0, 0], [6, 390], [14, 950], [19, 950], [29, 1650]];
  return (
    <FigWrap>
      <svg viewBox="0 0 330 215" className="w-full max-w-sm h-auto">
        <line x1="50" y1="190" x2="325" y2="190" className={stroke} strokeWidth="1" />
        <line x1="50" y1="190" x2="50" y2="10" className={stroke} strokeWidth="1" />
        {pts.slice(1).map(([x, y]) => (
          <g key={x}>
            <line x1="50" y1={Y(y)} x2={X(x)} y2={Y(y)} className="stroke-slate-400" strokeWidth="1" strokeDasharray="3 2" />
            <line x1={X(x)} y1={Y(y)} x2={X(x)} y2="190" className="stroke-slate-400" strokeWidth="1" strokeDasharray="3 2" />
            <text x={X(x)} y="204" textAnchor="middle" className={lbl}>{x}</text>
          </g>
        ))}
        {[390, 950, 1650].map((y) => (
          <text key={y} x="46" y={Y(y) + 4} textAnchor="end" className={lbl}>{y}</text>
        ))}
        <polyline points={pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')} fill="none" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
        <text x="40" y="204" className={lbl}>O</text>
        <text x="300" y="186" className={lbl}>x(分)</text>
        <text x="56" y="16" className={lbl}>y(m)</text>
      </svg>
      <p className="text-xs text-slate-500 dark:text-slate-400">390m：後藤さんの家／950m：前田さんの家／1650m：図書館</p>
    </FigWrap>
  );
}

/** 大問6 タイルの図（B=黒, W=白4枚） */
export function TileGrid({ grid, caption }: { grid: string[]; caption: string }) {
  const s = 40;
  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${s * 3 + 4} ${s * 3 + 4}`} className="w-28 h-28">
        {grid.map((row, r) =>
          row.split('').map((c, k) => {
            const x = 2 + k * s, y = 2 + r * s;
            return (
              <g key={`${r}-${k}`}>
                <rect x={x} y={y} width={s} height={s} className={c === 'B' ? 'fill-slate-600 dark:fill-slate-500 stroke-slate-800 dark:stroke-slate-200' : 'fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200'} strokeWidth="1.5" />
                {c === 'W' && (
                  <>
                    <line x1={x} y1={y} x2={x + s} y2={y + s} className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1" />
                    <line x1={x + s} y1={y} x2={x} y2={y + s} className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1" />
                  </>
                )}
              </g>
            );
          })
        )}
      </svg>
      <p className="text-xs text-slate-500 dark:text-slate-400">{caption}</p>
    </div>
  );
}

export function TileFigs() {
  return (
    <div className="my-4 flex flex-wrap justify-center gap-6">
      <TileGrid grid={['BBW', 'BBB', 'BWB']} caption="図2（黒7枚・白8枚）" />
      <TileGrid grid={['BWB', 'WWB', 'WBW']} caption="図3（黒4枚・白20枚）" />
    </div>
  );
}
