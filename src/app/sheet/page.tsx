'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formulaAnchor } from '@/lib/formulaLinks';
import { readLog, readStats, type MistakeEntry, type TagStat } from '@/lib/mistakes';
import { FormulaCards } from '@/app/formulas/page';

const MIN_TRIES = 3;

export default function SheetPage() {
  const [stats, setStats] = useState<Record<string, TagStat>>({});
  const [log, setLog] = useState<MistakeEntry[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setStats(readStats());
    setLog(readLog());
    setReady(true);
  }, []);

  const rows = Object.entries(stats)
    .map(([tag, s]) => ({ tag, ...s, rate: s.misses / s.tries }))
    .filter((r) => r.misses > 0);
  const ranked = rows.filter((r) => r.tries >= MIN_TRIES).sort((a, b) => b.rate - a.rate || b.misses - a.misses);
  const top = (ranked.length > 0 ? ranked : rows.sort((a, b) => b.misses - a.misses)).slice(0, 8);
  const anchors = Array.from(new Set(top.map((r) => formulaAnchor(r.tag)).filter((a): a is string => !!a))).slice(0, 8);
  const mistakeTitles = Array.from(new Set([...log].reverse().map((m) => m.title))).slice(0, 12);
  const today = new Date().toLocaleDateString('ja-JP');

  if (!ready) return null;

  return (
    <div className="sheet max-w-4xl mx-auto space-y-4">
      <div className="no-print flex flex-wrap items-center gap-3">
        <button onClick={() => window.print()} className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-sm">
          印刷する（A4）
        </button>
        <Link href="/weak" className="text-sm font-bold text-indigo-600 underline decoration-dotted">← 苦手チェックへ</Link>
        <p className="text-xs text-slate-500">印刷画面で「用紙：A4」「余白：標準」「背景のグラフィック：オン」にしてください。PDF保存もできます。</p>
      </div>

      <h2 className="text-xl font-black border-b-2 border-slate-800 pb-1">
        当日用 まとめ（数学）<span className="text-xs font-normal ml-3">{today} 作成</span>
      </h2>

      {top.length === 0 ? (
        <p className="p-4 border rounded-lg">まだ間違いの記録がありません。問題を解いてから作ると、その子専用のまとめになります。</p>
      ) : (
        <>
          <section>
            <h3 className="font-bold text-sm mb-1">▼ 自分の苦手（ミス率の高い順）</h3>
            <ol className="text-sm grid grid-cols-2 gap-x-6 list-decimal list-inside">
              {top.map((r) => (
                <li key={r.tag}>
                  {r.tag}　<span className="text-xs text-slate-500">{r.tries}回中{r.misses}回ミス</span>
                </li>
              ))}
            </ol>
          </section>

          {mistakeTitles.length > 0 && (
            <section>
              <h3 className="font-bold text-sm mb-1">▼ 間違えた問題（もう一度見直す）</h3>
              <p className="text-xs">{mistakeTitles.join('　／　')}</p>
            </section>
          )}

          <section>
            <h3 className="font-bold text-sm mb-1">▼ 苦手に関係する公式・ルール</h3>
            {anchors.length === 0 ? (
              <p className="text-sm">該当する公式カードがありません。</p>
            ) : (
              <div className="sheet-formulas">
                <FormulaCards only={anchors} />
              </div>
            )}
          </section>

          <section>
            <h3 className="font-bold text-sm mb-1">▼ メモ（自分で書き足す）</h3>
            <div className="h-28 border border-slate-400 rounded" />
          </section>
        </>
      )}
    </div>
  );
}
