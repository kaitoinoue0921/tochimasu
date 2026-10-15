import React from 'react';

// 宇都宮短大附属 令和8年度 第1回(4日) 数学の図（問題の図をもとに簡略化して描いたもの）
const lbl = 'text-[11px] font-bold fill-slate-700 dark:fill-slate-200';
const ang = 'text-[10px] font-bold fill-rose-600 dark:fill-rose-400';
const stroke = 'stroke-slate-700 dark:stroke-slate-200';
const thin = 'stroke-slate-500 dark:stroke-slate-400';

function FigWrap({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      {children}
      {caption && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{caption}</p>}
    </div>
  );
}

type Pt = [number, number];
function Seg({ a, b, w = 1.8, cls = stroke, dash }: { a: Pt; b: Pt; w?: number; cls?: string; dash?: string }) {
  return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={cls} strokeWidth={w} strokeDasharray={dash} />;
}

/** 大問2-3 ①〜③ の四角形 */
export function ConcyclicFigs() {
  const f1 = { A: [60, 30] as Pt, B: [10, 120] as Pt, C: [120, 150] as Pt, D: [110, 20] as Pt };
  const f2 = { A: [40, 25] as Pt, D: [130, 25] as Pt, B: [15, 115] as Pt, C: [155, 115] as Pt };
  const f3 = { A: [40, 15] as Pt, D: [135, 25] as Pt, B: [10, 115] as Pt, C: [150, 115] as Pt };
  return (
    <FigWrap>
      <div className="flex flex-wrap justify-center gap-3">
        <svg viewBox="0 0 140 170" className="w-36 h-auto">
          <text x="2" y="12" className={lbl}>①</text>
          <Seg a={f1.A} b={f1.B} /><Seg a={f1.A} b={f1.C} /><Seg a={f1.B} b={f1.D} /><Seg a={f1.D} b={f1.C} />
          <text x="56" y="25" className={lbl}>A</text>
          <text x="2" y="132" className={lbl}>B</text>
          <text x="122" y="162" className={lbl}>C</text>
          <text x="112" y="15" className={lbl}>D</text>
          <text x="58" y="50" className="text-[11px] italic font-bold fill-sky-600 dark:fill-sky-400">x</text>
          <text x="26" y="112" className={ang}>20°</text>
          <text x="92" y="42" className={ang}>70°</text>
          <text x="66" y="80" className={ang}>100°</text>
        </svg>
        <svg viewBox="0 0 170 150" className="w-40 h-auto">
          <text x="2" y="12" className={lbl}>②</text>
          <Seg a={f2.A} b={f2.D} /><Seg a={f2.D} b={f2.C} /><Seg a={f2.C} b={f2.B} /><Seg a={f2.B} b={f2.A} />
          <Seg a={f2.A} b={f2.C} w={1.2} /><Seg a={f2.B} b={f2.D} w={1.2} />
          <text x="34" y="18" className={lbl}>A</text>
          <text x="130" y="18" className={lbl}>D</text>
          <text x="5" y="128" className={lbl}>B</text>
          <text x="152" y="128" className={lbl}>C</text>
          <text x="68" y="58" className="text-[11px] italic font-bold fill-sky-600 dark:fill-sky-400">x</text>
          <text x="80" y="80" className={ang}>113°</text>
          <text x="38" y="110" className={ang}>33°</text>
          <text x="58" y="145" className="text-[10px] fill-slate-600 dark:fill-slate-300">AD // BC</text>
        </svg>
        <svg viewBox="0 0 165 135" className="w-40 h-auto">
          <text x="2" y="12" className={lbl}>③</text>
          <Seg a={f3.A} b={f3.D} /><Seg a={f3.D} b={f3.C} /><Seg a={f3.C} b={f3.B} /><Seg a={f3.B} b={f3.A} />
          <Seg a={f3.A} b={f3.C} w={1.2} /><Seg a={f3.B} b={f3.D} w={1.2} />
          <text x="34" y="11" className={lbl}>A</text>
          <text x="138" y="22" className={lbl}>D</text>
          <text x="2" y="128" className={lbl}>B</text>
          <text x="150" y="128" className={lbl}>C</text>
          <text x="44" y="38" className="text-[11px] italic font-bold fill-sky-600 dark:fill-sky-400">x</text>
          <text x="22" y="98" className={ang}>32°</text>
          <text x="112" y="48" className={ang}>68°</text>
          <text x="74" y="82" className={ang}>100°</text>
        </svg>
      </div>
    </FigWrap>
  );
}

/** 大問2-6 立方体と平面ACF */
export function CubeACFFig({ showCut = false }: { showCut?: boolean }) {
  const P: Record<string, Pt> = {
    A: [40, 70], B: [140, 70], F: [140, 170], E: [40, 170],
    D: [90, 30], C: [190, 30], G: [190, 130], H: [90, 130],
  };
  const solid = [['A', 'B'], ['B', 'F'], ['F', 'E'], ['E', 'A'], ['A', 'D'], ['D', 'C'], ['C', 'B'], ['C', 'G'], ['G', 'F']];
  const dashed = [['D', 'H'], ['H', 'E'], ['H', 'G']];
  const pos: Record<string, Pt> = {
    A: [-12, 4], B: [-14, 14], C: [6, -4], D: [-4, -6], E: [-12, 14], F: [6, 14], G: [6, 4], H: [-14, -4],
  };
  return (
    <FigWrap caption={showCut ? '切り口は正三角形ACF。Bの側が三角すいB-ACF' : undefined}>
      <svg viewBox="0 0 220 195" className="w-52 h-auto">
        {showCut && (
          <polygon points={`${P.A} ${P.C} ${P.F}`} className="fill-sky-400/30 stroke-sky-600 dark:stroke-sky-400" strokeWidth="1.5" />
        )}
        {solid.map(([p, q]) => <Seg key={p + q} a={P[p]} b={P[q]} w={2} />)}
        {dashed.map(([p, q]) => <Seg key={p + q} a={P[p]} b={P[q]} w={1.5} dash="4 3" />)}
        {Object.entries(P).map(([k, [x, y]]) => (
          <text key={k} x={x + pos[k][0]} y={y + pos[k][1]} className={lbl}>{k}</text>
        ))}
      </svg>
    </FigWrap>
  );
}

/** 大問3 放物線 y = x²/3 と直線ℓ */
export function ParabolaLineFig() {
  const s = 40, ox = 160, oy = 170;
  const X = (x: number) => ox + x * s;
  const Y = (y: number) => oy - y * s;
  const pts: string[] = [];
  for (let i = -33; i <= 33; i++) {
    const x = i / 10;
    pts.push(`${X(x).toFixed(1)},${Y((x * x) / 3).toFixed(1)}`);
  }
  const line = (x: number) => -x / 3 + 2 / 3;
  const A: Pt = [X(-2), Y(4 / 3)], B: Pt = [X(1), Y(1 / 3)], C: Pt = [X(2), Y(0)];
  const px = -0.83;
  const P: Pt = [X(px), Y(line(px))];
  return (
    <FigWrap>
      <svg viewBox="0 0 300 200" className="w-72 h-auto">
        <Seg a={[10, oy]} b={[292, oy]} w={1.2} cls={thin} />
        <Seg a={[ox, 10]} b={[ox, 195]} w={1.2} cls={thin} />
        <text x="286" y={oy + 14} className={lbl}>x</text>
        <text x={ox + 5} y="18" className={lbl}>y</text>
        <text x={ox - 12} y={oy + 14} className={lbl}>O</text>
        <polyline points={pts.join(' ')} fill="none" className={stroke} strokeWidth="1.8" />
        <Seg a={[X(-3.6), Y(line(-3.6))]} b={[X(3.2), Y(line(3.2))]} w={1.8} />
        <text x={X(-3.6)} y={Y(line(-3.6)) - 5} className={lbl}>ℓ</text>
        <Seg a={A} b={[A[0], oy]} w={1.2} cls={thin} />
        <Seg a={P} b={[P[0], oy]} w={1.2} cls={thin} />
        {[A, B, C, P].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" className="fill-slate-700 dark:fill-slate-200" />)}
        <text x={A[0] - 14} y={A[1] - 4} className={lbl}>A</text>
        <text x={B[0] - 2} y={B[1] - 7} className={lbl}>B</text>
        <text x={C[0] - 3} y={C[1] + 14} className={lbl}>C</text>
        <text x={P[0] + 2} y={P[1] - 7} className={lbl}>P</text>
        <text x={A[0] - 4} y={oy + 14} className={lbl}>N</text>
        <text x={P[0] - 4} y={oy + 14} className={lbl}>M</text>
      </svg>
    </FigWrap>
  );
}

/** 大問4 正方形に並べた円（1〜3番目） */
export function CirclePackFig() {
  const size = 90;
  return (
    <FigWrap caption="色のついた部分（円と、円に囲まれたすき間）">
      <div className="flex flex-wrap justify-center gap-4">
        {[1, 2, 3].map((n) => {
          const r = size / (2 * n);
          const centers: Pt[] = [];
          for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) centers.push([5 + r + 2 * r * i, 5 + r + 2 * r * j]);
          return (
            <div key={n} className="flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-24 h-auto">
                {n > 1 && <rect x={5 + r} y={5 + r} width={size - 2 * r} height={size - 2 * r} className="fill-slate-300 dark:fill-slate-600" />}
                {centers.map((c, k) => <circle key={k} cx={c[0]} cy={c[1]} r={r} className="fill-slate-300 dark:fill-slate-600" />)}
                {centers.map((c, k) => <circle key={'o' + k} cx={c[0]} cy={c[1]} r={r} fill="none" className={thin} strokeWidth="0.8" />)}
                <rect x="5" y="5" width={size} height={size} fill="none" className={stroke} strokeWidth="1.5" />
              </svg>
              <span className="text-xs text-slate-600 dark:text-slate-300">{n}番目</span>
            </div>
          );
        })}
      </div>
    </FigWrap>
  );
}

/** 大問5 図1（メネラウスの定理の証明） */
export function MenelausFig1() {
  const A: Pt = [150, 15], B: Pt = [30, 175], C: Pt = [145, 175], P: Pt = [240, 175];
  const R: Pt = [114, 63], Q: Pt = [147.6, 92.8], D: Pt = [76, 113.7];
  return (
    <FigWrap caption="図1">
      <svg viewBox="0 0 270 195" className="w-64 h-auto">
        <Seg a={A} b={B} w={2} /><Seg a={B} b={C} w={2} /><Seg a={C} b={A} w={2} />
        <Seg a={C} b={[262, 175]} w={1.2} cls={thin} />
        <Seg a={[95, 46]} b={[258, 191]} w={1.4} />
        <Seg a={D} b={C} w={1.4} />
        <text x="146" y="11" className={lbl}>A</text>
        <text x="18" y="182" className={lbl}>B</text>
        <text x="140" y="190" className={lbl}>C</text>
        <text x="236" y="168" className={lbl}>P</text>
        <text x="100" y="62" className={lbl}>R</text>
        <text x="152" y="92" className={lbl}>Q</text>
        <text x="62" y="112" className={lbl}>D</text>
        <text x="86" y="44" className={lbl}>ℓ</text>
      </svg>
    </FigWrap>
  );
}

/** 大問5 図2 */
export function MenelausFig2() {
  const A: Pt = [130, 15], B: Pt = [20, 160], C: Pt = [200, 160], P: Pt = [120, 160];
  const Q: Pt = [125, 87.5], R: Pt = [96.2, 59.6];
  return (
    <FigWrap caption="図2">
      <svg viewBox="0 0 220 190" className="w-56 h-auto">
        <Seg a={A} b={B} w={2} /><Seg a={B} b={C} w={2} /><Seg a={C} b={A} w={2} />
        <Seg a={A} b={P} w={1.5} /><Seg a={R} b={C} w={1.5} />
        <text x="126" y="11" className={lbl}>A</text>
        <text x="8" y="168" className={lbl}>B</text>
        <text x="203" y="168" className={lbl}>C</text>
        <text x="115" y="175" className={lbl}>P</text>
        <text x="110" y="92" className={lbl}>Q</text>
        <text x="84" y="58" className={lbl}>R</text>
        <text x="132" y="55" className={ang}>3cm</text>
        <text x="126" y="128" className={ang}>3cm</text>
        <text x="60" y="176" className={ang}>5cm</text>
        <text x="152" y="176" className={ang}>4cm</text>
      </svg>
    </FigWrap>
  );
}
