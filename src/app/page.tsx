import Link from 'next/link';
import type { ReactNode } from 'react';
import { BookOpen, Calculator, Shapes, BarChart2, Beaker, Users } from 'lucide-react';
import { ClearedCount, ProgressPill } from '@/components/Progress';
import { r3Data } from '@/data/r3';
import { r4Data } from '@/data/r4';
import { r5Data } from '@/data/r5';
import { r6Data } from '@/data/r6';
import { r7Data } from '@/data/r7';

type Card = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  color: string;
  progress?: { prefix: string; total: number };
};

type Theme = { card: string; icon: string };

// Tailwindは完全なクラス名しか拾えないので、テーマは文字列リテラルで持つ
const themes: Record<string, Theme> = {
  indigo: { card: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-500', icon: 'text-indigo-500 dark:text-indigo-400' },
  teal: { card: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-500', icon: 'text-teal-500 dark:text-teal-400' },
  rose: { card: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-500', icon: 'text-rose-500 dark:text-rose-400' },
  amber: { card: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-500', icon: 'text-amber-500 dark:text-amber-400' },
  pink: { card: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-500', icon: 'text-pink-500 dark:text-pink-400' },
  cyan: { card: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-500', icon: 'text-cyan-500 dark:text-cyan-400' },
  sky: { card: 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 hover:border-sky-400 dark:hover:border-sky-500', icon: 'text-sky-500 dark:text-sky-400' },
  orange: { card: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-500', icon: 'text-orange-500 dark:text-orange-400' },
  emerald: { card: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-500', icon: 'text-emerald-500 dark:text-emerald-400' },
};

function card(
  year: string,
  q: string,
  data: Record<string, { subs: unknown[] }>,
  theme: keyof typeof themes,
  title: string,
  description: string,
  icon: (cls: string) => ReactNode = (cls) => <BookOpen className={`w-8 h-8 ${cls}`} />,
): Card {
  const total = data[q]?.subs.length ?? 0;
  return {
    title,
    description: description || `全${total}問のステップバイステップ特訓`,
    href: `/${year}/${q}`,
    icon: icon(themes[theme].icon),
    color: themes[theme].card,
    progress: { prefix: `${year}/${q}`, total },
  };
}

const sections: { title: string; border: string; cards: Card[] }[] = [
  {
    title: '令和7年度（2025年度） 最新問題',
    border: 'border-emerald-500',
    cards: [
      card('r7', 'q1', r7Data, 'indigo', '令和7年 大問1：基本の小問集合', '正負の数、素因数分解、因数分解、四分位範囲など、最新の基本問題8問に挑戦！', (c) => <Calculator className={`w-8 h-8 ${c}`} />),
      card('r7', 'q2', r7Data, 'teal', '令和7年 大問2：連立方程式と数の証明', 'ノートと鉛筆のセット販売の連立方程式と、1〜100の数字が並んだ表から図形の規則性を証明する問題。'),
      card('r7', 'q6', r7Data, 'rose', '令和7年 大問6：ダンスのフォーメーション', '偶数人の生徒が交差して並び替わる「フォーメーションチェンジ」の規則性を見つけ、逆算する超難問！', (c) => <Users className={`w-8 h-8 ${c}`} />),
      card('r7', 'q3', r7Data, 'amber', '令和7年 大問3：図形の作図と証明', '正四角錐の体積や表面積から高さを求める計算、そして正三角形の相似を証明する問題です。', (c) => <Shapes className={`w-8 h-8 ${c}`} />),
      card('r7', 'q4', r7Data, 'pink', '令和7年 大問4：データの活用と確率', '累積度数の計算、標本調査からの全体の推測、そしてさいころを使って正方形上を動く点の確率問題です。', (c) => <BarChart2 className={`w-8 h-8 ${c}`} />),
      card('r7', 'q5', r7Data, 'cyan', '令和7年 大問5：関数と水そう', '反比例の変化の割合、円の方程式（三平方の定理）、そして水そうに沈んだブロックの高さを求める超難問！', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '令和6年度（2024年度）',
    border: 'border-orange-500',
    cards: [
      card('r6', 'q1', r6Data, 'orange', '令和6年 大問1（基本計算）', ''),
      card('r6', 'q2', r6Data, 'orange', '令和6年 大問2（連立方程式）', ''),
      card('r6', 'q3', r6Data, 'orange', '令和6年 大問3（図形と確率）', ''),
      card('r6', 'q5', r6Data, 'orange', '令和6年 大問5（関数）', ''),
      card('r6', 'q6', r6Data, 'orange', '令和6年 大問6（規則性と方程式）', ''),
    ],
  },
  {
    title: '令和5年度（2023年度）',
    border: 'border-sky-500',
    cards: [
      card('r5', 'q1', r5Data, 'sky', '令和5年 大問1：基本の小問集合', '正負の数、単項式の除法、ねじれの位置、円周角、相似比と面積比など8問。', (c) => <Calculator className={`w-8 h-8 ${c}`} />),
      card('r5', 'q2', r5Data, 'sky', '令和5年 大問2：方程式と数の性質', '解の公式、教室の数と参加人数の方程式、99をたしても各位の和が変わらない証明。'),
      card('r5', 'q3', r5Data, 'sky', '令和5年 大問3：作図・回転体・証明', '30°の作図、台形を回転させた立体の体積、正方形と垂線の合同証明。', (c) => <Shapes className={`w-8 h-8 ${c}`} />),
      card('r5', 'q4', r5Data, 'sky', '令和5年 大問4：確率とデータの活用', 'くじびきの確率、累積度数と最頻値、箱ひげ図の読み取り。', (c) => <BarChart2 className={`w-8 h-8 ${c}`} />),
      card('r5', 'q5', r5Data, 'sky', '令和5年 大問5：関数', '放物線と直線の図形問題と、前田さん・後藤さんの速さのグラフ。', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
      card('r5', 'q6', r5Data, 'sky', '令和5年 大問6：タイルのしきつめ', '黒と白のタイルの枚数の規則性を文字式で表し、条件を満たす整数を探す。', (c) => <Users className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '令和4年度（2022年度）',
    border: 'border-amber-500',
    cards: [
      card('r4', 'q1', r4Data, 'indigo', '令和4年 大問1：基本の小問集合', '正負の数、文字式の通分計算、解の公式など、基礎中の基礎を確実に解く練習です。', (c) => <Calculator className={`w-8 h-8 ${c}`} />),
      card('r4', 'q2', r4Data, 'teal', '令和4年 大問2：平方根と方程式', '平方根が整数になる条件や、2次方程式のもう一つの解を求める問題に挑戦！'),
    ],
  },
  {
    title: '令和3年度（2021年度）',
    border: 'border-emerald-500',
    cards: [
      card('r3', 'q1', r3Data, 'emerald', '令和3年 大問1（基本計算）', ''),
      card('r3', 'q2', r3Data, 'emerald', '令和3年 大問2（小問集合）', ''),
      card('r3', 'q3', r3Data, 'emerald', '令和3年 大問3（確率・データ）', ''),
      card('r3', 'q4', r3Data, 'emerald', '令和3年 大問4（平面図形）', ''),
      card('r3', 'q5', r3Data, 'emerald', '令和3年 大問5（関数）', ''),
      card('r3', 'q6', r3Data, 'emerald', '令和3年 大問6（空間図形）', ''),
    ],
  },
];

function ProblemCard({ prob }: { prob: Card }) {
  return (
    <Link href={prob.href} className="block group">
      <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg ${prob.color}`}>
        <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
          {prob.icon}
        </div>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors mb-2">{prob.description}</p>
        {prob.progress && <ProgressPill prefix={prob.progress.prefix} total={prob.progress.total} />}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <section className="text-center space-y-6 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 mb-6 drop-shadow-sm leading-tight">
            とちます！<br/>
            <span className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 block mt-2">〜 実力テストの点数を爆上げするスパルタ特訓 〜</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            「下野模試や学校の実力テストで、あと10点、20点上げたい…！」<br/>
            そんな栃木の中学生のための、ステップバイステップ数学特訓サイトです。
          </p>
          <div className="mt-4 inline-block bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-lg text-sm font-bold animate-pulse">
            ⚠️ 警告：適当にポチポチ押すと激しく罵倒されます。計算用紙を用意して挑むこと！
          </div>
        </div>

        <div><ClearedCount /></div>

        <Link
          href="/formulas"
          className="inline-flex items-center justify-center gap-2 text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 sm:px-6 rounded-full transition-transform active:scale-95 shadow-md"
        >
          <BookOpen className="w-5 h-5 shrink-0" />
          数学の公式・ルール集を見る
        </Link>
      </section>

      {sections.map((sec) => (
        <section key={sec.title}>
          <h3 className={`text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 ${sec.border} pb-2 mb-6`}>
            {sec.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sec.cards.map((prob) => (
              <ProblemCard key={prob.href} prob={prob} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
