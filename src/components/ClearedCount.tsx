'use client';

import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

export function ClearedCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      const completed = JSON.parse(localStorage.getItem('tochimasu_completed') || '{}');
      setCount(Object.keys(completed).length);
    } catch {
      setCount(0);
    }
  }, []);

  if (count === 0) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-bold">
      <Trophy className="w-4 h-4" />
      これまでにクリアした問題：{count} 問
    </div>
  );
}
