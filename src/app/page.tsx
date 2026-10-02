import Link from 'next/link';
import { ClearedCount } from '@/components/ClearedCount';
import { BookOpen, Move, PieChart, Triangle, Activity, Box, Car, GraduationCap, BarChart2, Calculator, Timer, Shapes, Beaker, Users } from 'lucide-react';

export default function Home() {
  const r7Problems = [
    {
      id: 'r7-q1',
      title: '令和7年 大問1：基本の小問集合',
      description: '正負の数、素因数分解、因数分解、四分位範囲など、最新の基本問題8問に挑戦！',
      icon: <Calculator className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
      href: '/r7/q1',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-500',
    },
    {
      id: 'r7-q2',
      title: '令和7年 大問2：連立方程式と数の証明',
      description: 'ノートと鉛筆のセット販売の連立方程式と、1〜100の数字が並んだ表から図形の規則性を証明する問題。',
      icon: <BookOpen className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
      href: '/r7/q2',
      color: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-500',
    },
    {
      id: 'r7-q6',
      title: '令和7年 大問6：ダンスのフォーメーション',
      description: '偶数人の生徒が交差して並び替わる「フォーメーションチェンジ」の規則性を見つけ、逆算する超難問！',
      icon: <Users className="w-8 h-8 text-rose-500 dark:text-rose-400" />,
      href: '/r7/q6',
      color: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-500',
    },
    {
      id: 'r7-q3',
      title: '令和7年 大問3：図形の作図と証明',
      description: '正四角錐の体積や表面積から高さを求める計算、そして正三角形の相似を証明する問題です。',
      icon: <Shapes className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
      href: '/r7/q3',
      color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-500',
    },
    {
      id: 'r7-q4',
      title: '令和7年 大問4：データの活用と確率',
      description: '累積度数の計算、標本調査からの全体の推測、そしてさいころを使って正方形上を動く点の確率問題です。',
      icon: <BarChart2 className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
      href: '/r7/q4',
      color: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-500',
    },
    {
      id: 'r7-q5',
      title: '令和7年 大問5：関数と水そう',
      description: '反比例の変化の割合、円の方程式（三平方の定理）、そして水そうに沈んだブロックの高さを求める超難問！',
      icon: <Beaker className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />,
      href: '/r7/q5',
      color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-500',
    }
  ];

  const r4Problems = [
    {
      id: 'r4-q1',
      title: '令和4年 大問1：基本の小問集合',
      description: '正負の数、文字式の通分計算、解の公式など、基礎中の基礎を確実に解く練習です。',
      icon: <Calculator className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
      href: '/r4/q1',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-500',
    },
    {
      id: 'r4-q2',
      title: '令和4年 大問2：平方根と方程式',
      description: '平方根が整数になる条件や、2次方程式のもう一つの解を求める問題に挑戦！',
      icon: <BookOpen className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
      href: '/r4/q2',
      color: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-500',
    }
  ];

  const r5Problems = [
    { title: '令和5年 大問2：教室と参加人数の過不足', description: '方程式を立てて、教室の数と参加人数を求める問題。', href: '/r5-q2' },
    { title: '令和5年 大問4：箱ひげ図とデータの読み取り', description: '箱ひげ図から四分位数などを読み取るデータの活用問題。', href: '/r5-q4' },
  ];

  const r6Problems = [
    { id: 'q1', title: '令和6年 大問1（基本計算）', subs: 6 },
    { id: 'q2', title: '令和6年 大問2（連立方程式）', subs: 1 },
    { id: 'q3', title: '令和6年 大問3（図形と確率）', subs: 2 },
    { id: 'q5', title: '令和6年 大問5（関数）', subs: 3 },
    { id: 'q6', title: '令和6年 大問6（規則性と方程式）', subs: 3 },
  ];

  const r3Problems = [
    { id: 'q1', title: '令和3年 大問1（基本計算）', subs: 6 },
    { id: 'q2', title: '令和3年 大問2（小問集合）', subs: 3 },
    { id: 'q3', title: '令和3年 大問3（確率・データ）', subs: 2 },
    { id: 'q4', title: '令和3年 大問4（平面図形）', subs: 2 },
    { id: 'q5', title: '令和3年 大問5（関数）', subs: 3 },
    { id: 'q6', title: '令和3年 大問6（空間図形）', subs: 2 },
  ];

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
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-transform active:scale-95 shadow-md"
        >
          <BookOpen className="w-5 h-5" />
          数学の公式・ルール集を見る
        </Link>
      </section>

      {/* 令和7年度 */}
      <section>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500 pb-2 mb-6">
          令和7年度（2025年度） 最新問題
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r7Problems.map((prob) => (
            <Link href={prob.href} key={prob.id} className={`block ${prob.href === '#' ? 'pointer-events-none' : 'group'}`}>
              <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 ${prob.href !== '#' ? 'transform group-hover:-translate-y-1 group-hover:shadow-lg' : ''} ${prob.color}`}>
                <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
                  {prob.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                  {prob.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-amber-500 pb-2 mb-6">
          令和4年度（2022年度）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r4Problems.map((prob) => (
            <Link href={prob.href} key={prob.id} className="block group">
              <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg ${prob.color}`}>
                <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
                  {prob.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                  {prob.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-sky-500 pb-2 mb-6">
          令和5年度（2023年度）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r5Problems.map((prob) => (
            <Link href={prob.href} key={prob.href} className="block group">
              <div className="border-2 rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 hover:border-sky-400 dark:hover:border-sky-500">
                <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
                  <BookOpen className="w-8 h-8 text-sky-500 dark:text-sky-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">{prob.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-orange-500 pb-2 mb-6">
          令和6年度（2024年度）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r6Problems.map((prob) => (
            <Link href={`/r6/${prob.id}`} key={prob.id} className="block group">
              <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-500`}>
                <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
                  <BookOpen className="w-8 h-8 text-orange-500 dark:text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                  全{prob.subs}問のステップバイステップ特訓
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500 pb-2 mb-6">
          令和3年度（2021年度）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r3Problems.map((prob) => (
            <Link href={`/r3/${prob.id}`} key={prob.id} className="block group">
              <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-500`}>
                <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 transition-colors">
                  <BookOpen className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{prob.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                  全{prob.subs}問のステップバイステップ特訓
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
