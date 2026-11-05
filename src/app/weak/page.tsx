'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formulaAnchor } from '@/lib/formulaLinks';
import { clearMistakes, readLog, readStats, type MistakeEntry, type TagStat } from '@/lib/mistakes';

const MIN_TRIES = 3; // これ未満の回数だと、たまたまかもしれないので順位づけしない

export default function WeakPage() {
  const [stats, setStats] = useState<Record<string, TagStat>>({});
  const [log, setLog] = useState<MistakeEntry[]>([]);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setStats(readStats());
    setLog(readLog());
    setReady(true);
  }, []);

  const rows = Object.entries(stats)
    .map(([tag, s]) => ({ tag, ...s, rate: s.misses / s.tries }))
    .filter((r) => r.misses > 0);
  const ranked = rows.filter((r) => r.tries >= MIN_TRIES).sort((a, b) => b.rate - a.rate || b.misses - a.misses);
  const few = rows.filter((r) => r.tries < MIN_TRIES).sort((a, b) => b.misses - a.misses);
  const recent = [...log].reverse().slice(0, 30);
  const totalTries = Object.values(stats).reduce((n, s) => n + s.tries, 0);

  const summary = () => {
    const top = ranked.slice(0, 5).map((r) => `・${r.tag}（${r.tries}回中${r.misses}回ミス）`).join('\n');
    return `【とちます！ 苦手の記録】\n${top || '（まだ判定できるほどのデータがありません）'}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const reset = () => {
    if (!confirm('苦手の記録をすべて消します。クリア済みの記録は消えません。よろしいですか？')) return;
    clearMistakes();
    setStats({});
    setLog([]);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-black">🎯 苦手チェック</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        これまでに間違えた問題を、使う知識ごとに集計しています。記録はこの端末のブラウザの中だけに保存され、外には送られません。
      </p>

      {!ready ? null : totalTries === 0 ? (
        <p className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          まだ記録がありません。問題を解くと、ここに苦手が出てきます。
        </p>
      ) : (
        <>
          <section className="space-y-3">
            <h3 className="font-bold text-lg">苦手ランキング（ミス率の高い順）</h3>
            {ranked.length === 0 && (
              <p className="text-sm text-slate-500">
                同じ知識を{MIN_TRIES}回以上解くと順位が出ます。もう少し解いてみましょう。
              </p>
            )}
            {ranked.map((r, i) => {
              const a = formulaAnchor(r.tag);
              return (
                <div key={r.tag} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <div className="font-bold">
                      <span className="text-rose-500 mr-2">{i + 1}</span>
                      {r.tag}
                    </div>
                    <div className="text-sm text-slate-500">
                      {r.tries}回中 {r.misses}回ミス（{Math.round(r.rate * 100)}%）
                    </div>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div className="h-2 bg-rose-500" style={{ width: `${Math.round(r.rate * 100)}%` }} />
                  </div>
                  {a && (
                    <Link href={`/formulas#${a}`} className="inline-block mt-2 text-sm font-bold text-indigo-600 dark:text-indigo-300 underline decoration-dotted">
                      この知識の公式を見る →
                    </Link>
                  )}
                </div>
              );
            })}
            {few.length > 0 && (
              <p className="text-sm text-slate-500">
                回数が少なくて順位をつけていないもの：{few.map((r) => `${r.tag}（${r.tries}回中${r.misses}回）`).join('、')}
              </p>
            )}
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-lg">最近の間違い</h3>
            <p className="text-sm text-slate-500">押すとその問題をやり直せます。</p>
            {recent.map((m, i) => (
              <Link
                key={i}
                href={`/${m.key}`}
                className="block p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-rose-400"
              >
                <div className="font-bold text-sm">{m.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {m.step && `${m.step}　`}
                  {m.tags.join('・')}　{new Date(m.t).toLocaleDateString('ja-JP')}
                </div>
              </Link>
            ))}
          </section>

          <div className="flex flex-wrap gap-3">
            <button onClick={copy} className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-sm">
              {copied ? 'コピーしました' : '上位5件をコピー（先生・保護者に見せる用）'}
            </button>
            <Link href="/sheet" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-sm">
              当日持ち込み用のA4まとめを作る
            </Link>
            <button onClick={reset} className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm">
              記録を消す
            </button>
          </div>
        </>
      )}
    </div>
  );
}
