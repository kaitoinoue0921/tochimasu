'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { StepLayout, type Step } from '@/components/StepLayout';

type Sub = { id: string; title: string; knowledge?: string[]; originalText: React.ReactNode; steps: Step[] };

/** 大問の小問(1)(2)(3)…を、1ページの中で順番に解いていく。解き終わると次が下に出る */
export function ChainLayout({
  year,
  questionId,
  majorTitle,
  subs,
}: {
  year: string;
  questionId: string;
  majorTitle: string;
  subs: Sub[];
}) {
  const [count, setCount] = useState(1);
  const [finished, setFinished] = useState(false);
  const lastRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (count > 1) lastRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [count]);

  return (
    <div className="space-y-12">
      <Link href={`/${year}/${questionId}`} className="inline-flex items-center gap-1 text-slate-500 hover:text-emerald-500 font-medium transition-colors">
        <ChevronLeft className="w-5 h-5" />
        {majorTitle} の問題一覧に戻る
      </Link>

      {subs.slice(0, count).map((sub, i) => (
        <section key={sub.id} ref={i === count - 1 ? lastRef : undefined} className="scroll-mt-20 space-y-3">
          <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
            {i + 1} / {subs.length} 問目
          </div>
          <StepLayout
            title={sub.title}
            progressKey={`${year}/${questionId}/${sub.id}`}
            knowledge={sub.knowledge}
            questionText={
              <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
                <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文】</h3>
                {sub.originalText}
              </div>
            }
            steps={sub.steps}
            onComplete={() => {
              if (i === subs.length - 1) setFinished(true);
              else setCount((c) => Math.max(c, i + 2));
            }}
          />
        </section>
      ))}

      {finished && (
        <div className="text-center space-y-3">
          <p className="font-black text-xl text-emerald-700 dark:text-emerald-300">この大問は全部クリア！</p>
          <Link href={`/${year}/${questionId}`} className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full">
            大問の一覧へ
          </Link>
        </div>
      )}
    </div>
  );
}
