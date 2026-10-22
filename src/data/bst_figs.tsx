import React from 'react';

// 文星芸術大学附属高校 特待生入試 数学の図（問題の図をもとに描き直したもの）。白背景固定でダークでも読める。
const lbl = 'text-[12px] font-bold';

function FigWrap({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="bg-white rounded-lg p-2">{children}</div>
      {caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{caption}</p>}
    </div>
  );
}

/** 大問4-1 直線①・放物線②と点A, B, C, P */
export function ParabolaLineFig() {
  // 座標変換: x→ 150 + 13x, y → 250 - 13y（1目盛13px）
  const X = (x: number) => 150 + 13 * x;
  const Y = (y: number) => 250 - 13 * y;
  const para = Array.from({ length: 41 }, (_, i) => {
    const x = -4.9 + (i * 9.8) / 40;
    return `${X(x).toFixed(1)},${Y(0.75 * x * x).toFixed(1)}`;
  }).join(' ');
  return (
    <FigWrap>
      <svg viewBox="0 0 360 290" className="w-72 h-auto">
        <line x1="10" y1={Y(0)} x2="345" y2={Y(0)} stroke="#334155" strokeWidth="1.2" />
        <line x1={X(0)} y1="285" x2={X(0)} y2="10" stroke="#334155" strokeWidth="1.2" />
        <text x="348" y={Y(0) + 4} className={lbl} fill="#334155" fontStyle="italic">x</text>
        <text x={X(0) + 4} y="14" className={lbl} fill="#334155" fontStyle="italic">y</text>
        <polyline points={para} fill="none" stroke="#334155" strokeWidth="1.6" />
        <line x1={X(-6)} y1={Y(-3)} x2={X(6.5)} y2={Y(15.75)} stroke="#334155" strokeWidth="1.6" />
        <line x1={X(-4)} y1={Y(0)} x2={X(2)} y2={Y(3)} stroke="#334155" strokeWidth="1.2" />
        <line x1={X(2)} y1={Y(3)} x2={X(12)} y2={Y(0)} stroke="#334155" strokeWidth="1.2" />
        <line x1={X(2)} y1={Y(3)} x2={X(2)} y2={Y(0)} stroke="#64748b" strokeDasharray="3 3" />
        <line x1={X(4)} y1={Y(12)} x2={X(4)} y2={Y(0)} stroke="#64748b" strokeDasharray="3 3" />
        {[[4, 12], [-4, 0], [2, 3], [12, 0]].map(([x, y], i) => (
          <circle key={i} cx={X(x)} cy={Y(y)} r="3" fill="#0f172a" />
        ))}
        <text x={X(4) - 16} y={Y(12) - 2} className={lbl} fill="#0f172a">A</text>
        <text x={X(-4) - 12} y={Y(0) - 6} className={lbl} fill="#0f172a">B</text>
        <text x={X(2) + 4} y={Y(3) - 6} className={lbl} fill="#0f172a">C</text>
        <text x={X(12) - 4} y={Y(0) + 16} className={lbl} fill="#0f172a">P</text>
        <text x={X(0) - 14} y={Y(0) + 14} className={lbl} fill="#0f172a">O</text>
        <text x={X(2) - 4} y={Y(0) + 14} className={lbl} fill="#0f172a">2</text>
        <text x={X(4) - 4} y={Y(0) + 14} className={lbl} fill="#0f172a">4</text>
        <text x={X(5.6)} y="20" className={lbl} fill="#0f172a">①</text>
        <text x={X(3.3)} y="20" className={lbl} fill="#0f172a">②</text>
      </svg>
    </FigWrap>
  );
}

/** 大問4-2 加湿器のタンクの水の量のグラフ */
export function HumidifierGraphFig() {
  const X = (x: number) => 60 + 30 * x;
  const Y = (y: number) => 230 - y / 20;
  const pts: [number, number][] = [[0, 3800], [2, 2800], [3, 2500], [8, 400]];
  return (
    <FigWrap>
      <svg viewBox="0 0 390 260" className="w-72 h-auto">
        <line x1={X(0)} y1={Y(0)} x2="320" y2={Y(0)} stroke="#334155" strokeWidth="1.2" />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2="10" stroke="#334155" strokeWidth="1.2" />
        <text x="324" y={Y(0) + 4} className="text-[11px]" fill="#334155">x（時間）</text>
        <text x={X(0) + 4} y="18" className="text-[11px]" fill="#334155">y（mL）</text>
        <polyline points={pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')} fill="none" stroke="#0f172a" strokeWidth="1.8" />
        <line x1={X(0)} y1={Y(2500)} x2={X(3)} y2={Y(2500)} stroke="#64748b" strokeDasharray="3 3" />
        <line x1={X(0)} y1={Y(400)} x2={X(8)} y2={Y(400)} stroke="#64748b" strokeDasharray="3 3" />
        <line x1={X(2)} y1={Y(2800)} x2={X(2)} y2={Y(0)} stroke="#64748b" strokeDasharray="3 3" />
        <line x1={X(3)} y1={Y(2500)} x2={X(3)} y2={Y(0)} stroke="#64748b" strokeDasharray="3 3" />
        <text x={X(0) - 40} y={Y(3800) + 4} className="text-[11px]" fill="#0f172a">3800</text>
        <text x={X(0) - 40} y={Y(2500) + 4} className="text-[11px]" fill="#0f172a">2500</text>
        <text x={X(0) - 32} y={Y(400) + 4} className="text-[11px]" fill="#0f172a">400</text>
        <text x={X(0) - 12} y={Y(0) + 14} className="text-[11px]" fill="#0f172a">O</text>
        {[2, 3, 8].map((x) => (
          <text key={x} x={X(x) - 3} y={Y(0) + 14} className="text-[11px]" fill="#0f172a">{x}</text>
        ))}
      </svg>
    </FigWrap>
  );
}

/** 大問5 タイルの並べ方（右下の白1枚から、上の行と左の列にL字で足していく） */
export function TilesFig() {
  const size = 14;
  const grids = [1, 2, 3, 4, 5];
  let x = 4;
  const items: React.ReactNode[] = [];
  grids.forEach((n, gi) => {
    const top = 90 - n * size;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const layer = n - Math.min(r, c);
        items.push(
          <rect key={`${n}-${r}-${c}`} x={x + c * size} y={top + r * size} width={size} height={size}
            fill={layer % 2 === 0 ? '#9ca3af' : '#ffffff'} stroke="#334155" strokeWidth="1" />,
        );
      }
    }
    x += n * size;
    if (gi < grids.length - 1) {
      items.push(<text key={`a${n}`} x={x + 3} y={86} className="text-[12px]" fill="#334155">→</text>);
      x += 18;
    }
  });
  return (
    <FigWrap caption="図（灰色のタイルを色で表示）">
      <svg viewBox={`0 0 ${x + 24} 100`} className="w-full max-w-md h-auto">
        {items}
        <text x={x + 4} y={86} className="text-[12px]" fill="#334155">…</text>
      </svg>
    </FigWrap>
  );
}

export function TilesTable() {
  const rows: [string, (string | number)[]][] = [
    ['1辺に置かれているタイルの枚数（枚）', [1, 2, 3, 4, 5, '…']],
    ['白色のタイルの枚数（枚）', [1, 1, 6, 6, 15, '…']],
    ['灰色のタイルの枚数（枚）', [0, 3, 3, 10, 10, '…']],
  ];
  return (
    <div className="overflow-x-auto my-3">
      <table className="text-xs border-collapse mx-auto">
        <tbody>
          {rows.map(([h, vals]) => (
            <tr key={h}>
              <th className="border border-slate-400 px-2 py-1 font-normal text-left">{h}</th>
              {vals.map((v, i) => <td key={i} className="border border-slate-400 px-2 py-1 text-center">{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
