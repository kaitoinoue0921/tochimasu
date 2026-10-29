import Link from 'next/link';
import type { ReactNode } from 'react';
import { BookOpen, GraduationCap, Calculator, Shapes, BarChart2, Beaker, Users } from 'lucide-react';
import { ClearedCount, ProgressPill } from '@/components/Progress';
import { r3Data } from '@/data/r3';
import { r4Data } from '@/data/r4';
import { r5Data } from '@/data/r5';
import { r6Data } from '@/data/r6';
import { r7Data } from '@/data/r7';
import { u8d1Data } from '@/data/u8d1';
import { u8d2Data } from '@/data/u8d2';
import { bstData } from '@/data/bst';
import { ruijiData } from '@/data/ruiji';
import { eigoData } from '@/data/eigo';

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
    description,
    href: `/${year}/${q}`,
    icon: icon(themes[theme].icon),
    color: themes[theme].card,
    progress: { prefix: `${year}/${q}`, total },
  };
}

function ruijiCards(prefix: string, theme: keyof typeof themes): Card[] {
  return Object.keys(ruijiData)
    .filter((k) => k.startsWith(prefix))
    .map((k) => card('ruiji', k, ruijiData, theme, (ruijiData as Record<string, { title: string; subs: { title: string }[] }>)[k].title, (ruijiData as Record<string, { title: string; subs: { title: string }[] }>)[k].subs.map((x) => x.title.replace(/^\(\d\)\s*/, '')).join('、'), (c) => <Calculator className={`w-8 h-8 ${c}`} />));
}

function eigoCards(prefix: string, theme: keyof typeof themes): Card[] {
  const d = eigoData as Record<string, { title: string; subs: { title: string }[] }>;
  return Object.keys(d)
    .filter((k) => k.startsWith(prefix))
    .map((k) => card('eigo', k, eigoData, theme, d[k].title, d[k].subs.map((x) => x.title.replace(/^問\d\S*\s*/, '')).join('、'), (c) => <BookOpen className={`w-8 h-8 ${c}`} />));
}

const sections: { title: string; label?: string; border: string; cards: Card[] }[] = [
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
  {
    title: '私立 宇都宮短期大学附属高校 令和8年度 第1回（1月4日）',
    label: '宇短附 4日',
    border: 'border-violet-500',
    cards: [
      card('u8d1', 'q1', u8d1Data, 'indigo', '宇短附 大問1：計算問題', '正負の数・分数式・小数の2乗・平方根・因数分解の基本計算5問。', (c) => <Calculator className={`w-8 h-8 ${c}`} />),
      card('u8d1', 'q2', u8d1Data, 'teal', '宇短附 大問2：小問集合', '反比例と傾き、奇数の和、円周角の定理の逆、連立方程式、立方体の切断、確率、平均値と中央値など8問。'),
      card('u8d1', 'q3', u8d1Data, 'cyan', '宇短附 大問3：放物線と直線・三角形の面積', '放物線と直線の交点から、三角形の面積と面積比を満たす点の座標を求める。', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
      card('u8d1', 'q4', u8d1Data, 'pink', '宇短附 大問4：正方形に並べた円の周', '円の並べ方を一般化して周の長さの規則性を式にし、条件を満たす最大の n を考える。', (c) => <Users className={`w-8 h-8 ${c}`} />),
      card('u8d1', 'q5', u8d1Data, 'amber', '宇短附 大問5：メネラウスの定理', '定理の証明の穴埋めと、それを使った線分比・面積比の問題。', (c) => <Shapes className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '私立 宇都宮短期大学附属高校 令和8年度 第1回（1月5日）',
    label: '宇短附 5日',
    border: 'border-violet-500',
    cards: [
      card('u8d2', 'q1', u8d2Data, 'indigo', '宇短附 大問1：計算問題', '負の数、単項式の乗除、小数の累乗、平方根、共通因数でくくる因数分解までの計算5問。', (c) => <Calculator className={`w-8 h-8 ${c}`} />),
      card('u8d2', 'q2', u8d2Data, 'teal', '宇短附 大問2：小問集合', '1次関数の増加量、正五角形と平行線の角、過不足、連立方程式、平行四辺形の面積比、確率、中央値と最頻値など8題。'),
      card('u8d2', 'q3', u8d2Data, 'pink', '宇短附 大問3：目の数が偏ったさいころ', '1・2・2・3・3・3の目のさいころを2回投げて、どちらの主張が正しいかを確率で判定する。', (c) => <BarChart2 className={`w-8 h-8 ${c}`} />),
      card('u8d2', 'q4', u8d2Data, 'cyan', '宇短附 大問4：台形の辺上を動く点', '動く2点がつくる三角形の面積を、時間ごとに式とグラフで表す。', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
      card('u8d2', 'q5', u8d2Data, 'amber', '宇短附 大問5：正四角錐と切り口', '平面OACで切った正四角錐で、中点連結定理と相似から長さの比と体積を求める。', (c) => <Shapes className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '私立 文星芸術大学附属高校 特待生入試（大問4・5）',
    label: '文星 特待',
    border: 'border-violet-500',
    cards: [
      card('bst', 'q4', bstData, 'cyan', '文星特待 大問4：放物線と直線・加湿器のグラフ', '放物線の比例定数と面積が等しくなる点、加湿器の水の量のグラフから消費量と使用時間を求める。', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
      card('bst', 'q5', bstData, 'pink', '文星特待 大問5：白と灰色のタイルの規則性', 'L字に足していくタイルの枚数を文字式で表し、白と灰色の比から1辺の枚数を求める。', (c) => <Users className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '学校の実力テスト 大問5',
    label: '実力テスト',
    border: 'border-emerald-500',
    cards: [
      card('bst', 'k1', bstData, 'emerald', '大問5-1：走る・休む・走るグラフ', '休憩の長さ、再び走る区間の式、後から出発したBさんが追い抜く時刻を求める。', (c) => <Beaker className={`w-8 h-8 ${c}`} />),
      card('bst', 'k2', bstData, 'amber', '大問5-2：直線と平行四辺形・格子点', '平行線の式から面積を求め、格子点の個数を t で表して2次方程式で t を決める。', (c) => <Users className={`w-8 h-8 ${c}`} />),
    ],
  },
  {
    title: '類題A 速さ・1次関数の利用（栃木県入試の形式で作成）',
    label: '類題A',
    border: 'border-violet-500',
    cards: ruijiCards('a', 'amber'),
  },
  {
    title: '類題B 1次関数と図形（栃木県入試の形式で作成）',
    label: '類題B',
    border: 'border-violet-500',
    cards: ruijiCards('b', 'teal'),
  },
  {
    title: '類題C 放物線と直線（栃木県入試の形式で作成）',
    label: '類題C',
    border: 'border-violet-500',
    cards: ruijiCards('c', 'cyan'),
  },
  {
    title: '類題D 規則性・文字式・データ（栃木県入試の形式で作成）',
    label: '類題D',
    border: 'border-violet-500',
    cards: ruijiCards('d', 'pink'),
  },
  {
    title: '実力テスト風 直線の式を求めて交点を出す（栃木県入試の形式で作成）',
    label: '実力テスト風',
    border: 'border-violet-500',
    cards: ruijiCards('e', 'rose'),
  },
  {
    title: '英語 実力テスト 大問5（対話文とグラフを読む）',
    label: '英語 実力テスト',
    border: 'border-sky-500',
    cards: eigoCards('k', 'sky'),
  },
  {
    title: '英語 類題（対話文とグラフ・図を読む）',
    label: '英語 類題',
    border: 'border-sky-500',
    cards: eigoCards('r', 'cyan'),
  },
];
function qNum(href: string) {
  return Number(href.match(/(\d+)$/)?.[1] ?? 0);
}

// 「令和7年 大問1：基本の小問集合」→「基本の小問集合」
function shortTitle(title: string) {
  return title.replace(/^.*?大問\d+\s*[：:（(]?\s*/, '').replace(/[）)]$/, '');
}

function yearLabel(title: string) {
  return title.match(/^令和\d+年度/)?.[0] ?? title;
}

function ProblemCard({ prob }: { prob: Card }) {
  return (
    <Link href={prob.href} className="block group">
      <div className="flex gap-4 items-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 h-full shadow-sm transition-all group-hover:border-emerald-400 group-hover:shadow-md">
        <div className="shrink-0 w-14 text-center">
          <div className="text-[11px] font-bold text-slate-400 leading-none">大問</div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 leading-tight">{qNum(prob.href)}</div>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-slate-800 dark:text-slate-100 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-300">{shortTitle(prob.title)}</h4>
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

export default function Home() {
  return (
    <div className="space-y-10 pb-12">
      <section className="text-center space-y-4 bg-white dark:bg-slate-800 px-5 py-7 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 leading-snug">
          栃木県立高校入試 数学を<br className="sm:hidden" />1ステップずつ解く
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          下野模試や実力テストであと10点、20点上げたい栃木の中学生のための特訓サイトです。
          大問を選び、小問を1つずつ解いていきます。
        </p>
        <p className="inline-block bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-3 py-1.5 rounded-lg text-sm font-bold">
          ⚠️ 適当に押すと罵倒されます。計算用紙を用意して挑むこと
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <ClearedCount />
          <Link
            href="/formulas"
            className="inline-flex items-center gap-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-5 rounded-full shadow-sm"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            公式・ルール集
          </Link>
          <a
            href="https://kaitoinoue0921.github.io/chugaku-math/"
            className="inline-flex items-center gap-2 text-sm bg-white dark:bg-slate-800 hover:border-indigo-400 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 font-bold py-2.5 px-5 rounded-full shadow-sm"
          >
            <GraduationCap className="w-4 h-4 shrink-0" />
            中1〜中3 公式と要点
          </a>
        </div>
      </section>

      <nav className="sticky top-[52px] z-30 -mx-4 px-4 py-2 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-2 overflow-x-auto">
          {sections.map((sec, i) => (
            <a
              key={sec.title}
              href={`#y${i}`}
              className="shrink-0 text-sm font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-400 hover:text-emerald-700"
            >
              {sec.label ?? yearLabel(sec.title)}
            </a>
          ))}
        </div>
      </nav>

      {sections.map((sec, i) => (
        <section key={sec.title} id={`y${i}`}>
          <h3 className={`text-xl font-bold text-slate-800 dark:text-slate-100 border-l-4 ${sec.border} pl-3 mb-4`}>
            {sec.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...sec.cards].sort((a, b) => qNum(a.href) - qNum(b.href)).map((prob) => (
              <ProblemCard key={prob.href} prob={prob} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
