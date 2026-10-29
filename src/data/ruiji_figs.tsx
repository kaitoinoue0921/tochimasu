import React from 'react';

// 類題の図。座標平面を汎用コンポーネントで描く（白背景固定でダークでも読める）。
// 例: <GraphFig xMin={0} xMax={30} yMin={0} yMax={2500} xTicks={[4,12,28]} yTicks={[600,2200]}
//        polylines={[{ pts: [[0,0],[4,600],[12,600],[28,2200]] }]} guides={[{ x: 12, y: 600 }]} xLabel="x(分)" yLabel="y(m)" />
export type Pt = [number, number];
export type GraphFigProps = {
  xMin?: number; xMax: number; yMin?: number; yMax: number;
  xTicks?: number[]; yTicks?: number[];
  polylines?: { pts: Pt[]; color?: string; dash?: boolean; width?: number }[];
  lines?: { a: number; b: number; x0: number; x1: number; color?: string; label?: string }[]; // y = ax + b の線分
  curves?: { fn: (x: number) => number; x0: number; x1: number; color?: string; label?: string }[];
  points?: { x: number; y: number; label?: string; dx?: number; dy?: number }[];
  polygons?: { pts: Pt[]; fill?: string; stroke?: string }[];
  guides?: { x: number; y: number }[]; // 点線を軸まで下ろす
  xLabel?: string; yLabel?: string;
  caption?: string; width?: number; // 表示幅(px)
};

export function GraphFig(p: GraphFigProps) {
  const W = 340, H = 240, L = 44, R = 22, T = 18, B = 30;
  const xMin = p.xMin ?? 0, yMin = p.yMin ?? 0;
  const sx = (W - L - R) / (p.xMax - xMin), sy = (H - T - B) / (p.yMax - yMin);
  const X = (x: number) => L + (x - xMin) * sx;
  const Y = (y: number) => H - B - (y - yMin) * sy;
  const ax = Y(Math.min(Math.max(0, yMin), p.yMax)), ay = X(Math.min(Math.max(0, xMin), p.xMax));
  const txt = 'text-[11px] font-bold';
  const pt = (q: Pt) => `${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`;
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="bg-white rounded-lg p-2">
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: p.width ?? 320 }} className="h-auto">
          {p.polygons?.map((g, i) => (
            <polygon key={i} points={g.pts.map(pt).join(' ')} fill={g.fill ?? '#bfdbfe'} fillOpacity="0.5" stroke={g.stroke ?? '#1d4ed8'} strokeWidth="1.6" />
          ))}
          <line x1={L - 6} y1={ax} x2={W - 8} y2={ax} stroke="#334155" strokeWidth="1.2" />
          <line x1={ay} y1={H - B + 6} x2={ay} y2={8} stroke="#334155" strokeWidth="1.2" />
          <text x={W - 6} y={ax + 14} textAnchor="end" className={txt} fill="#334155" fontStyle="italic">{p.xLabel ?? 'x'}</text>
          <text x={ay + 5} y={14} className={txt} fill="#334155" fontStyle="italic">{p.yLabel ?? 'y'}</text>
          <text x={ay - 5} y={ax + 13} textAnchor="end" className={txt} fill="#334155">O</text>
          {p.guides?.map((g, i) => (
            <g key={i} stroke="#94a3b8" strokeDasharray="3 3">
              <line x1={X(g.x)} y1={Y(g.y)} x2={X(g.x)} y2={ax} />
              <line x1={X(g.x)} y1={Y(g.y)} x2={ay} y2={Y(g.y)} />
            </g>
          ))}
          {p.xTicks?.map((v) => (
            <text key={`x${v}`} x={X(v)} y={ax + 14} textAnchor="middle" className={txt} fill="#334155">{v}</text>
          ))}
          {p.yTicks?.map((v) => (
            <text key={`y${v}`} x={ay - 5} y={Y(v) + 4} textAnchor="end" className={txt} fill="#334155">{v}</text>
          ))}
          {p.polylines?.map((l, i) => (
            <polyline key={i} points={l.pts.map(pt).join(' ')} fill="none" stroke={l.color ?? '#1e293b'} strokeWidth={l.width ?? 1.8} strokeDasharray={l.dash ? '5 4' : undefined} />
          ))}
          {p.lines?.map((l, i) => (
            <g key={i}>
              <line x1={X(l.x0)} y1={Y(l.a * l.x0 + l.b)} x2={X(l.x1)} y2={Y(l.a * l.x1 + l.b)} stroke={l.color ?? '#1e293b'} strokeWidth="1.8" />
              {l.label && <text x={X(l.x1) + 3} y={Y(l.a * l.x1 + l.b) + 4} className={txt} fill={l.color ?? '#1e293b'}>{l.label}</text>}
            </g>
          ))}
          {p.curves?.map((c, i) => {
            const pts = Array.from({ length: 61 }, (_, k) => {
              const x = c.x0 + ((c.x1 - c.x0) * k) / 60;
              return `${X(x).toFixed(1)},${Y(c.fn(x)).toFixed(1)}`;
            }).join(' ');
            return (
              <g key={i}>
                <polyline points={pts} fill="none" stroke={c.color ?? '#1e293b'} strokeWidth="1.8" />
                {c.label && <text x={X(c.x1) + 3} y={Y(c.fn(c.x1)) + 4} className={txt} fill={c.color ?? '#1e293b'}>{c.label}</text>}
              </g>
            );
          })}
          {p.points?.map((q, i) => (
            <g key={i}>
              <circle cx={X(q.x)} cy={Y(q.y)} r="2.6" fill="#0f172a" />
              {q.label && <text x={X(q.x) + (q.dx ?? 5)} y={Y(q.y) + (q.dy ?? -5)} className={txt} fill="#0f172a">{q.label}</text>}
            </g>
          ))}
        </svg>
      </div>
      {p.caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{p.caption}</p>}
    </div>
  );
}

/** 表（1行目が見出し） */
export function SimpleTable({ rows, caption }: { rows: (string | number)[][]; caption?: string }) {
  return (
    <div className="my-3 flex flex-col items-center">
      <table className="bg-white text-slate-900 border-collapse text-sm">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className={`border border-slate-400 px-3 py-1 text-center ${i === 0 || j === 0 ? 'bg-slate-100 font-bold' : ''}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className="text-xs text-slate-500 mt-1">{caption}</p>}
    </div>
  );
}
