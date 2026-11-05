import Link from 'next/link';
import { ClearBadge } from '@/components/Progress';
import { r3Data } from '@/data/r3';
import { r4Data } from '@/data/r4';
import { r5Data } from '@/data/r5';
import { r6Data } from '@/data/r6';
import { r7Data } from '@/data/r7';
import { u8d1Data } from '@/data/u8d1';
import { u8d2Data } from '@/data/u8d2';
import { bstData } from '@/data/bst';
import { ruijiData } from '@/data/ruiji';

type AnySub = { id: string; title: string; knowledge?: string[] };
type AnyData = Record<string, { title: string; subs: AnySub[] }>;

const SOURCES: [string, string, AnyData][] = [
  ['r7', '令和7年', r7Data as AnyData],
  ['r6', '令和6年', r6Data as AnyData],
  ['r5', '令和5年', r5Data as AnyData],
  ['r4', '令和4年', r4Data as AnyData],
  ['r3', '令和3年', r3Data as AnyData],
  ['u8d1', '宇短附4日', u8d1Data as AnyData],
  ['u8d2', '宇短附5日', u8d2Data as AnyData],
  ['bst', '文星・実力テスト', bstData as AnyData],
  ['ruiji', '類題', ruijiData as AnyData],
];

// 知識タグ → 分野。上から順に最初に当たったものを採用（複数当たれば複数の分野に入る）
const CATEGORIES: { id: string; name: string; re: RegExp }[] = [
  { id: 'calc', name: '計算（正負・文字式・展開・因数分解・平方根）', re: /正負|累乗|文字式の計算|式の展開|因数分解|乗法公式|平方根|根号|分配法則|同類項|単項式|多項式|素因数/ },
  { id: 'eq', name: '方程式（1次・連立・2次）と文章題', re: /方程式|解の公式|過不足|移項|加減法|代入法|比例式|割合|整数の/ },
  { id: 'func', name: '関数（1次関数・y=ax²・反比例）', re: /関数|直線|傾き|切片|変化の割合|グラフ|y=ax|放物線|反比例|比例定数|座標|交点|ダイヤグラム|速さ|水そう|動点/ },
  { id: 'plane', name: '平面図形（角・合同・相似・円・作図・証明）', re: /角|合同|相似|線分の比|中点連結|円周|おうぎ|作図|証明|三平方|平行四辺形|三角形|台形|正方形|メネラウス/ },
  { id: 'space', name: '空間図形（体積・表面積・回転体）', re: /体積|表面積|角錐|円錐|球|回転体|立方体|立体|切断|ねじれ/ },
  { id: 'data', name: 'データの活用と確率', re: /確率|樹形図|中央値|平均値|最頻値|度数|四分位|箱ひげ|累積|標本|データ|場合の数/ },
  { id: 'pattern', name: '規則性・数の性質', re: /規則|カレンダー|奇数|偶数|連続|数え方|格子点|タイル|フォーメーション|表の/ },
];

type Entry = { key: string; label: string; title: string; tags: string[] };

function build() {
  const out: Record<string, Entry[]> = {};
  for (const c of CATEGORIES) out[c.id] = [];
  out.other = [];
  for (const [year, yearLabel, data] of SOURCES) {
    for (const [q, major] of Object.entries(data)) {
      for (const sub of major.subs) {
        const tags = (sub.knowledge ?? []).map((t) => t.replace(/['"]/g, '').trim());
        const text = tags.join(' ') + ' ' + sub.title;
        const entry: Entry = {
          key: `${year}/${q}/${sub.id}`,
          label: `${yearLabel} ${major.title.replace(/^.*?(大問\d+).*$/, '$1')}`.replace(/\s+$/, ''),
          title: sub.title,
          tags,
        };
        let hit = false;
        for (const c of CATEGORIES) {
          if (c.re.test(text)) {
            out[c.id].push(entry);
            hit = true;
          }
        }
        if (!hit) out.other.push(entry);
      }
    }
  }
  return out;
}

export default function TopicsPage() {
  const byCat = build();
  const cats = [...CATEGORIES.map((c) => ({ id: c.id, name: c.name })), { id: 'other', name: 'その他' }];
  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-12">
      <h2 className="text-2xl font-black">🧩 分野別に解く</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        年度に関係なく、同じ分野の小問をまとめて解けます。苦手チェックで出た知識の分野から選ぶのがおすすめです。
        1つの小問が複数の分野に入ることがあります。
      </p>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <a key={c.id} href={`#c-${c.id}`} className="text-xs font-bold px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800">
            {c.name.replace(/（.*$/, '')}（{byCat[c.id].length}）
          </a>
        ))}
      </div>
      {cats.map((c) =>
        byCat[c.id].length === 0 ? null : (
          <details key={c.id} id={`c-${c.id}`} className="scroll-mt-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <summary className="cursor-pointer px-4 py-3 font-bold">
              {c.name}
              <span className="ml-2 text-sm font-normal text-slate-500">{byCat[c.id].length}問</span>
            </summary>
            <ul className="divide-y divide-slate-100 dark:divide-slate-700 border-t border-slate-100 dark:border-slate-700">
              {byCat[c.id].map((e) => (
                <li key={e.key}>
                  <Link href={`/${e.key}`} className="flex items-start justify-between gap-2 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">{e.title}</span>
                      <span className="block text-xs text-slate-500">
                        {e.label}　{e.tags.join('・')}
                      </span>
                    </span>
                    <ClearBadge id={e.key} />
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ),
      )}
    </div>
  );
}
