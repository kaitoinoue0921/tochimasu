'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { readLog } from '@/lib/mistakes';

type Item = { key: string; title: string; tags: string[]; misses: number; last: string; fixed: boolean };

export default function ReviewPage() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const log = readLog();
    let completed: Record<string, { date: string; misses: number }> = {};
    try {
      completed = JSON.parse(localStorage.getItem('tochimasu_completed') || '{}');
    } catch {}
    const map = new Map<string, Item>();
    for (const m of log) {
      const cur = map.get(m.key) ?? { key: m.key, title: m.title, tags: m.tags, misses: 0, last: m.t, fixed: false };
      cur.misses += 1;
      if (m.t > cur.last) cur.last = m.t;
      map.set(m.key, cur);
    }
    // 最後のミスより後に、ノーミスでクリアできていれば「直った」扱い
    for (const it of map.values()) {
      const c = completed[it.key];
      it.fixed = !!c && c.misses === 0 && c.date > it.last;
    }
    setItems([...map.values()].sort((a, b) => (a.last < b.last ? 1 : -1)));
  }, []);

  if (!items) return null;
  const todo = items.filter((i) => !i.fixed);
  const fixed = items.filter((i) => i.fixed);
  const random = todo.length > 0 ? todo[Math.floor(Math.random() * todo.length)] : null;

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      <h2 className="text-2xl font-black">🔁 復習</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        間違えた問題の一覧です。ノーミスでクリアできると「直った」に移ります。記録はこの端末のブラウザの中だけにあります。
      </p>

      {items.length === 0 ? (
        <p className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          まだ間違えた記録がありません。問題を解くと、間違えたものがここに溜まります。
        </p>
      ) : (
        <>
          <section className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold text-lg">
                要復習 <span className="text-rose-500">{todo.length}</span> 問
              </h3>
              {random && (
                <Link href={`/${random.key}`} className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-sm font-bold">
                  ランダムに1問やる
                </Link>
              )}
            </div>
            {todo.length === 0 && <p className="text-sm text-emerald-700 dark:text-emerald-300">全部直りました。</p>}
            {todo.map((i) => (
              <Row key={i.key} i={i} />
            ))}
          </section>

          {fixed.length > 0 && (
            <details className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
              <summary className="cursor-pointer px-4 py-3 font-bold">直った問題 {fixed.length}問</summary>
              <div className="p-3 space-y-2 border-t border-slate-100 dark:border-slate-700">
                {fixed.map((i) => (
                  <Row key={i.key} i={i} />
                ))}
              </div>
            </details>
          )}
        </>
      )}
    </div>
  );
}

function Row({ i }: { i: Item }) {
  return (
    <Link
      href={`/${i.key}`}
      className="block p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-rose-400"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="font-bold text-sm">{i.title}</div>
        <div className="text-xs text-slate-500 shrink-0">ミス{i.misses}回</div>
      </div>
      <div className="text-xs text-slate-500 mt-0.5">
        {i.key}　{i.tags.join('・')}　{new Date(i.last).toLocaleDateString('ja-JP')}
      </div>
    </Link>
  );
}
