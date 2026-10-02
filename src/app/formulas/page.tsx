'use client';

import React from 'react';
import Link from 'next/link';
import { Book, ChevronLeft } from 'lucide-react';
import { TextWithMath, MathText } from '@/components/MathText';

export default function FormulasPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex items-center gap-4 border-b-2 border-indigo-500 pb-4">
        <Link href="/" className="text-slate-500 hover:text-indigo-500 transition-colors">
          <ChevronLeft className="w-8 h-8" />
        </Link>
        <Book className="w-8 h-8 text-indigo-500" />
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          数学の公式・ルール集
        </h2>
      </div>

      <p className="text-slate-600 dark:text-slate-300">
        入試問題を解く上で絶対に覚えておきたい、中学数学の基本的な公式やルールをまとめました。
        問題を解いていて「あれ、どうだっけ？」と思ったら、ここを確認しましょう！
      </p>

      {/* 根本的な計算ルール（最重要） */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border-l-4 border-blue-500">
          【超重要】計算と等式の基本ルール
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">移項（いこう）のルール</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">方程式などで「＝（イコール）」を飛び越えて反対側に移動させるときは、<strong>必ず符号が逆になります。</strong></p>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <TextWithMath text="$x + 5 = 8$" /> <br/>
                <span className="text-blue-600 dark:text-blue-400">＋5</span> を右に移動すると <span className="text-rose-500">－5</span> になる！<br/>
                <TextWithMath text="$x = 8 - 5$" />
              </li>
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <TextWithMath text="$2x = x + 3$" /> <br/>
                <span className="text-blue-600 dark:text-blue-400">＋x</span> を左に移動すると <span className="text-rose-500">－x</span> になる！<br/>
                <TextWithMath text="$2x - x = 3$" />
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">分配法則（カッコの外し方）</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">カッコの前の数字を、カッコの中の<strong>すべて</strong>に掛けます。マイナスがあるときは要注意！</p>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <strong>基本の分配</strong><br/>
                <TextWithMath text="$3(x + 2) = 3x + 6$" />
              </li>
              <li className="bg-rose-50 dark:bg-rose-900/30 p-2 rounded border border-rose-200 dark:border-rose-800">
                <strong>【ミス多発】マイナスの分配</strong><br/>
                <TextWithMath text="$-(x - 4) = -x + 4$" /> <br/>
                <span className="text-xs text-rose-600 dark:text-rose-400">※マイナス×マイナスで「＋4」になるのを忘れずに！</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">等式の性質（両辺にかける・割る）</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">方程式は、左と右のバランスが取れた天秤です。<strong>両辺に同じ数をかけたり割ったりしてもOK</strong>です。</p>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <strong>分数を消す（分母の公倍数を両辺にかける）</strong><br/>
                <TextWithMath text="$\frac{x}{2} + \frac{x}{3} = 5$" /> <br/>
                両辺に 6 をかけると…<br/>
                <TextWithMath text="$3x + 2x = 30$" />
              </li>
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <strong>xの前の数字を消す（両辺を割る）</strong><br/>
                <TextWithMath text="$3x = 12$" /> <br/>
                両辺を 3 で割ると…<br/>
                <TextWithMath text="$x = 4$" />
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">マイナスの掛け算と、文字式の違い</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2">
                <span className="bg-emerald-200 dark:bg-emerald-900/50 px-2 py-1 rounded font-bold">－ × － ＝ ＋</span>
                <TextWithMath text="$(-3) \times (-4) = 12$" />
              </li>
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 mt-2 rounded">
                <strong>足し算は「個数」が増える</strong><br/>
                <TextWithMath text="$x + x = 2x$" />
              </li>
              <li className="bg-blue-50 dark:bg-slate-700/50 p-2 rounded">
                <strong>掛け算は「右上(指数)」が増える</strong><br/>
                <TextWithMath text="$x \times x = x^2$" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 中1の知識 */}
      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg border-l-4 border-indigo-500">
          1年生の図形ルール
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">おうぎ形の弧の長さと面積</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">半径を <TextWithMath text="$r$" />、中心角を <TextWithMath text="$a^\circ$" /> とします。</p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-500">弧の長さ (<TextWithMath text="$\ell$" />):</span>
                <MathText block math="\ell = 2\pi r \times \frac{a}{360}" />
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-500">面積 (<TextWithMath text="$S$" />):</span>
                <MathText block math="S = \pi r^2 \times \frac{a}{360}" />
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">球の表面積と体積</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">半径を <TextWithMath text="$r$" /> とします。</p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-500">表面積 (<TextWithMath text="$S$" />): 語呂合わせ「心配ある事情」</span>
                <MathText block math="S = 4\pi r^2" />
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-500">体積 (<TextWithMath text="$V$" />): 語呂合わせ「身の上に心配ある参上」</span>
                <MathText block math="V = \frac{4}{3}\pi r^3" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 中2の知識 */}
      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg border-l-4 border-teal-500">
          2年生の図形と関数ルール
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">多角形の角</h4>
            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <li>
                <span className="font-medium text-slate-500 block mb-1"><TextWithMath text="$n$" />角形の内角の和:</span>
                <MathText block math="180^\circ \times (n - 2)" />
              </li>
              <li>
                <span className="font-medium text-slate-500 block mb-1">多角形の外角の和:</span>
                <div className="text-center font-bold text-lg">つねに <TextWithMath text="$360^\circ$" /></div>
              </li>
              <li>
                <span className="font-medium text-slate-500 block mb-1">三角形の外角の性質:</span>
                <p>1つの外角は、それと隣り合わない2つの内角の和に等しい。</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">1次関数と変化の割合</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">式：<TextWithMath text="$y = ax + b$" /> （<TextWithMath text="$a$" /> は傾き、<TextWithMath text="$b$" /> は切片）</p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-500">変化の割合の求め方:</span>
                <MathText block math="\frac{yの増加量}{xの増加量}" />
                <p className="text-xs text-slate-500 mt-1">※1次関数では、変化の割合はつねに傾き <TextWithMath text="$a$" /> と同じです。</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">三角形の合同条件</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">証明問題で必ず使います！完全に暗記しましょう。</p>
            <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li><strong>3組の辺</strong>がそれぞれ等しい。</li>
              <li><strong>2組の辺とその間の角</strong>がそれぞれ等しい。</li>
              <li><strong>1組の辺とその両端の角</strong>がそれぞれ等しい。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 中3の知識 */}
      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 bg-rose-50 dark:bg-rose-900/30 p-3 rounded-lg border-l-4 border-rose-500">
          3年生の計算と図形ルール
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">乗法公式（展開・因数分解）</h4>
            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <li>
                <MathText block math="(x + a)(x + b) = x^2 + (a+b)x + ab" />
              </li>
              <li>
                <MathText block math="(x + a)^2 = x^2 + 2ax + a^2" />
              </li>
              <li>
                <MathText block math="(x + a)(x - a) = x^2 - a^2" />
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">2次方程式の解の公式</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3"><TextWithMath text="$ax^2 + bx + c = 0$" /> のとき、</p>
            <div className="flex justify-center my-4">
              <MathText block math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
            </div>
            <p className="text-xs text-slate-500">※因数分解できないときに使う最強の公式です。</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">三平方の定理（ピタゴラスの定理）</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">直角三角形において、斜辺を <TextWithMath text="$c$" />、他の2辺を <TextWithMath text="$a, b$" /> とすると、</p>
            <div className="flex justify-center my-4">
              <MathText block math="a^2 + b^2 = c^2" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">関数 y = ax² の変化の割合</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3"><TextWithMath text="$x$" /> の値が <TextWithMath text="$p$" /> から <TextWithMath text="$q$" /> まで増加するときの変化の割合を求める【裏ワザ公式】：</p>
            <div className="flex justify-center my-4">
              <MathText block math="\text{変化の割合} = a(p + q)" />
            </div>
            <p className="text-xs text-slate-500">※入試で超頻出！計算ミスを減らせる便利な公式です。</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">三角形の相似条件</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">図形問題で必ず使います！「2組の角」が一番よく出ます。</p>
            <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li><strong>3組の辺の比</strong>がすべて等しい。</li>
              <li><strong>2組の辺の比とその間の角</strong>がそれぞれ等しい。</li>
              <li className="font-bold text-rose-600 dark:text-rose-400">2組の角がそれぞれ等しい。</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">円周角の定理</h4>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex flex-col gap-1">
                <strong>① 中心角は円周角の2倍</strong>
                <p>1つの弧に対する中心角の大きさは、その弧に対する円周角の大きさの2倍になります。</p>
              </li>
              <li className="flex flex-col gap-1">
                <strong>② 同じ弧に対する円周角は等しい</strong>
                <p>同じ弧に対する円周角は、どこに線を引いてもすべて等しいです。</p>
              </li>
              <li className="flex flex-col gap-1 text-rose-600 dark:text-rose-400">
                <strong>③ 半円（直径）の弧に対する円周角は90°</strong>
                <p>直径が作る円周角は必ず90°（直角）になります。入試で非常によく使います！</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* データの活用（全学年） */}
      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border-l-4 border-amber-500">
          データの活用ルール
        </h3>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex flex-col gap-1">
              <span className="font-bold text-amber-700 dark:text-amber-400">相対度数</span>
              <p>その階級の度数 ÷ 全体の度数 （※合計すると必ず 1 になります）</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold text-amber-700 dark:text-amber-400">中央値（メジアン）</span>
              <p>データを小さい順に並べたとき、真ん中にくる値。<br/>※データが偶数個の場合は、真ん中2つの「平均」になります。</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold text-amber-700 dark:text-amber-400">最頻値（モード）</span>
              <p>データの中で最も多く出てくる値。度数分布表では「度数が一番大きい階級の階級値（真ん中の数）」になります。</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold text-amber-700 dark:text-amber-400">四分位範囲</span>
              <p>第3四分位数 － 第1四分位数 （※箱ひげ図の「箱の長さ」にあたります）</p>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
