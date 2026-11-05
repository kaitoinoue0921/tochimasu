'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, RotateCcw, Layers, Target, FileText } from 'lucide-react';
import { ClearedCount, ProgressPill } from '@/components/Progress';

type Card = { title: string; description: string; href: string; progress?: { prefix: string; total: number } };
type Section = { title: string; label: string; group: string; cards: Card[] };

const TAB_KEY = 'tochimasu_home_tab';

function qNum(href: string) {
  return Number(href.match(/(\d+)$/)?.[1] ?? 0);
}

// 「令和7年 大問1：基本の小問集合」→「基本の小問集合」
function shortTitle(title: string) {
  return title.replace(/^.*?大問\d+\s*[：:（(]?\s*/, '').replace(/[）)]$/, '');
}

function ProblemCard({ prob }: { prob: Card }) {
  return (
    <Link href={prob.href} className="block group">
      <div className="flex gap-4 items-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 h-full shadow-sm transition-all group-hover:border-emerald-400 group-hover:shadow-md">
        <div className="shrink-0 w-12 text-center">
          <div className="text-[11px] font-bold text-slate-400 leading-none">大問</div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 leading-tight">{qNum(prob.href)}</div>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-slate-800 dark:text-slate-100 leading-snug">{shortTitle(prob.title)}</h4>
          {prob.description && <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1 line-clamp-2">{prob.description}</p>}
          {prob.progress && (
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
              <span>全{prob.progress.total}問</span>
              <ProgressPill prefix={prob.progress.prefix} total={prob.progress.total} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

const tiles = [
  { href: '/review', label: '復習', sub: '間違えた問題をやり直す', Icon: RotateCcw, cls: 'bg-rose-600 hover:bg-rose-700' },
  { href: '/topics', label: '分野別', sub: '苦手な分野をまとめて解く', Icon: Layers, cls: 'bg-teal-600 hover:bg-teal-700' },
  { href: '/weak', label: '苦手チェック', sub: 'ミスの多い知識を見る', Icon: Target, cls: 'bg-amber-600 hover:bg-amber-700' },
  { href: '/formulas', label: '公式・ルール集', sub: '解き方を確認', Icon: BookOpen, cls: 'bg-indigo-600 hover:bg-indigo-700' },
];

export function HomeTabs({ sections }: { sections: Section[] }) {
  const [sel, setSel] = useState(0);
  const [last, setLast] = useState<{ key: string; title: string } | null>(null);

  useEffect(() => {
    try {
      const l = JSON.parse(localStorage.getItem('tochimasu_last') || 'null');
      if (l?.key && l?.title) setLast(l);
    } catch {}
    try {
      const saved = Number(localStorage.getItem(TAB_KEY));
      if (Number.isInteger(saved) && saved >= 0 && saved < sections.length) setSel(saved);
    } catch {}
  }, [sections.length]);

  const pick = (i: number) => {
    setSel(i);
    try {
      localStorage.setItem(TAB_KEY, String(i));
    } catch {}
  };

  const groups = Array.from(new Set(sections.map((s) => s.group)));
  const sec = sections[sel];

  return (
    <div className="space-y-5 pb-12">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100">栃木県立高校入試 数学を1ステップずつ</h2>
          <ClearedCount />
        </div>
        <p className="text-xs text-rose-700 dark:text-rose-300">⚠️ 適当に押すと罵倒されます。計算用紙を用意して挑むこと</p>
        {last && (
          <Link
            href={`/${last.key}`}
            className="flex items-center justify-between gap-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 py-3 shadow-sm"
          >
            <span className="min-w-0">
              <span className="block text-[11px] opacity-90">続きから</span>
              <span className="block font-black truncate">{last.title}</span>
            </span>
            <span className="text-xl shrink-0">▶</span>
          </Link>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {tiles.map(({ href, label, sub, Icon, cls }) => (
            <Link key={href} href={href} className={`${cls} text-white rounded-xl px-3 py-3 shadow-sm`}>
              <div className="flex items-center gap-2 font-black">
                <Icon className="w-5 h-5 shrink-0" />
                {label}
              </div>
              <div className="text-[11px] opacity-90 mt-0.5">{sub}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold">
          <Link href="/sheet" className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 underline decoration-dotted">
            <FileText className="w-3.5 h-3.5" />
            当日用A4まとめ
          </Link>
          <a href="https://kaitoinoue0921.github.io/chugaku-math/" className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 underline decoration-dotted">
            <GraduationCap className="w-3.5 h-3.5" />
            中1〜中3 公式と要点
          </a>
        </div>
      </section>

      <section className="space-y-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3">
        <div className="text-xs font-bold text-slate-500">年度・テストを選ぶ</div>
        {groups.map((g) => (
          <div key={g} className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-400 w-full sm:w-28 shrink-0">{g}</span>
            {sections.map((s, i) =>
              s.group !== g ? null : (
                <button
                  key={s.title}
                  onClick={() => pick(i)}
                  className={`text-sm font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    i === sel
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-emerald-400'
                  }`}
                >
                  {s.label}
                </button>
              ),
            )}
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 border-l-4 border-emerald-500 pl-3 mb-3">{sec.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...sec.cards].sort((a, b) => qNum(a.href) - qNum(b.href)).map((prob) => (
            <ProblemCard key={prob.href} prob={prob} />
          ))}
        </div>
      </section>
    </div>
  );
}
