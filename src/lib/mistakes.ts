// 解答の記録。端末のlocalStorageだけに保存し、サーバーには送らない。
export const STATS_KEY = 'tochimasu_tag_stats';
export const LOG_KEY = 'tochimasu_mistake_log';
const LOG_MAX = 300;

export type TagStat = { tries: number; misses: number; last: string };
export type MistakeEntry = { t: string; key: string; title: string; step: string; tags: string[] };

export function normalizeTag(tag: string): string {
  return tag.replace(/['"「」]/g, '').trim();
}

export function readStats(): Record<string, TagStat> {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY) || '{}');
  } catch {
    return {};
  }
}

export function readLog(): MistakeEntry[] {
  try {
    return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
  } catch {
    return [];
  }
}

/** 選択肢を1回押すたびに呼ぶ。知識タグごとの挑戦数・ミス数を数え、ミスは履歴にも残す */
export function recordAnswer(opts: {
  tags: string[];
  correct: boolean;
  key: string;
  title: string;
  step: string;
}) {
  try {
    const now = new Date().toISOString();
    const tags = Array.from(new Set(opts.tags.map(normalizeTag).filter(Boolean)));
    if (tags.length === 0) return;
    const stats = readStats();
    for (const tag of tags) {
      const s = stats[tag] ?? { tries: 0, misses: 0, last: now };
      s.tries += 1;
      if (!opts.correct) s.misses += 1;
      s.last = now;
      stats[tag] = s;
    }
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    if (!opts.correct) {
      const log = readLog();
      log.push({ t: now, key: opts.key, title: opts.title, step: opts.step, tags });
      localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-LOG_MAX)));
    }
  } catch {
    // 保存できない環境（プライベートモード等）では黙って諦める
  }
}

export function clearMistakes() {
  try {
    localStorage.removeItem(STATS_KEY);
    localStorage.removeItem(LOG_KEY);
  } catch {}
}
