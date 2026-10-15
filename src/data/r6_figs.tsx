import React from 'react';

// 令和6年度の図（原本PDFの図をもとに描き直したもの）。ダークモードでも読めるよう白背景固定。
const ink = '#334155';

function Fig({ children }: { children: React.ReactNode }) {
  return (
    <figure className="my-4 bg-white text-slate-800 p-3 rounded-xl border border-slate-200 flex flex-col items-center">
      {children}
    </figure>
  );
}

const cell = 'border-slate-400 px-3 py-1';

/** 大問1-5 y = a/x のグラフ（点(2, -3)を通る） */
export function R6HyperbolaFig() {
  const X = (x: number) => 110 + 20 * x;
  const Y = (y: number) => 80 - 20 * y;
  const branch = (from: number, to: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 40; i++) {
      const x = from + ((to - from) * i) / 40;
      pts.push(`${X(x).toFixed(1)},${Y(-6 / x).toFixed(1)}`);
    }
    return pts.join(' ');
  };
  return (
    <Fig>
      <svg viewBox="0 0 230 200" className="w-56 h-auto">
        <line x1="10" y1="80" x2="220" y2="80" stroke={ink} strokeWidth="1" />
        <line x1="110" y1="192" x2="110" y2="8" stroke={ink} strokeWidth="1" />
        <text x="214" y="94" fontSize="12" fontStyle="italic" fill={ink}>x</text>
        <text x="115" y="16" fontSize="12" fontStyle="italic" fill={ink}>y</text>
        <text x="97" y="94" fontSize="12" fill={ink}>O</text>
        <polyline points={branch(-5, -1.05)} fill="none" stroke={ink} strokeWidth="1.8" />
        <polyline points={branch(1.05, 5)} fill="none" stroke={ink} strokeWidth="1.8" />
        <line x1={X(2)} y1="80" x2={X(2)} y2={Y(-3)} stroke={ink} strokeWidth="1" strokeDasharray="3 3" />
        <line x1="110" y1={Y(-3)} x2={X(2)} y2={Y(-3)} stroke={ink} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx={X(2)} cy={Y(-3)} r="3" fill={ink} />
        <text x={X(2) - 4} y="74" fontSize="12" fill={ink}>2</text>
        <text x="86" y={Y(-3) + 4} fontSize="12" fill={ink}>−3</text>
      </svg>
    </Fig>
  );
}

/** 大問1-6 半径2cm、中心角40°のおうぎ形 */
export function R6SectorFig() {
  const r = 150;
  const a = (40 * Math.PI) / 180;
  const ox = 20, oy = 130;
  const ex = ox + r * Math.cos(a), ey = oy - r * Math.sin(a);
  return (
    <Fig>
      <svg viewBox="0 0 200 165" className="w-52 h-auto">
        <path d={`M ${ox} ${oy} L ${ox + r} ${oy} A ${r} ${r} 0 0 0 ${ex.toFixed(1)} ${ey.toFixed(1)} Z`} fill="none" stroke={ink} strokeWidth="2" />
        <path d={`M ${ox + 22} ${oy} A 22 22 0 0 0 ${(ox + 22 * Math.cos(a)).toFixed(1)} ${(oy - 22 * Math.sin(a)).toFixed(1)}`} fill="none" stroke={ink} strokeWidth="1" />
        <text x={ox + 28} y={oy - 6} fontSize="12" fill={ink}>40°</text>
        <path d={`M ${ox} ${oy + 4} Q ${ox + r / 2} ${oy + 22} ${ox + r} ${oy + 4}`} fill="none" stroke={ink} strokeWidth="1" />
        <text x={ox + r / 2 - 14} y={oy + 30} fontSize="12" fill={ink}>2cm</text>
      </svg>
    </Fig>
  );
}

/** 大問1-7 半径6cmの球 */
export function R6SphereFig() {
  return (
    <Fig>
      <svg viewBox="0 0 160 160" className="w-40 h-auto">
        <circle cx="80" cy="80" r="70" fill="none" stroke={ink} strokeWidth="2" />
        <path d="M 10 80 A 70 18 0 0 0 150 80" fill="none" stroke={ink} strokeWidth="1.2" />
        <path d="M 10 80 A 70 18 0 0 1 150 80" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="4 3" />
        <line x1="10" y1="80" x2="80" y2="80" stroke={ink} strokeWidth="1" />
        <circle cx="80" cy="80" r="2.5" fill={ink} />
        <text x="30" y="74" fontSize="12" fill={ink}>6cm</text>
      </svg>
    </Fig>
  );
}

/** 大問1-8 20mシャトルランの度数分布表 */
export function R6ShuttleTable() {
  const rows: [string, number][] = [['40 〜 55', 1], ['55 〜 70', 2], ['70 〜 85', 6], ['85 〜 100', 7], ['100 〜 115', 4]];
  return (
    <Fig>
      <table className="text-sm border-collapse text-center">
        <thead>
          <tr className="border-y-2 border-slate-500">
            <th className={`${cell} border-r font-normal`}>階級(回)</th>
            <th className={`${cell} font-normal`}>度数(人)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${cell} border-r text-xs text-slate-500`}>以上　　　未満</td>
            <td className={cell}></td>
          </tr>
          {rows.map(([c, n]) => (
            <tr key={c}>
              <td className={`${cell} border-r`}>{c}</td>
              <td className={cell}>{n}</td>
            </tr>
          ))}
          <tr className="border-y-2 border-slate-500">
            <td className={`${cell} border-r`}>計</td>
            <td className={cell}>20</td>
          </tr>
        </tbody>
      </table>
    </Fig>
  );
}
