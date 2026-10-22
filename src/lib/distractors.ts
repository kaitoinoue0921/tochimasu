// 選択肢を毎回作り直す。
// 正解が「数値＋単位」の形なら、その数値をずらした誤答をその場で作り、
// 元から用意してある誤答（よくある間違い）と混ぜてランダムに選ぶ。
// 数値でない答えは元の選択肢を並び替えるだけ。

const UNIT = '(?:cm³|cm²|cm|km|m|°|度|通り|人|枚|倍|個|円|本|分|秒|回|点|kg|g|mL|L|%|番目|日|時間|歳|週|冊|台|匹|問)?';
const NUM_RE = new RegExp(`^([−-]?)(\\d+(?:\\.\\d+)?)(?:\\/(\\d+))?((?:√\\d+)?(?:\\/\\d+)?\\s*π?\\s*${UNIT})$`);

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(v: number, decimals: number) {
  return decimals > 0 ? v.toFixed(decimals) : String(Math.round(v));
}

/** 正解の数値をずらした誤答の候補。数値の形でなければ空配列 */
export function numericVariants(correct: string, minus: string): string[] {
  const m = correct.trim().match(NUM_RE);
  if (!m) return [];
  const [, sign, numStr, den, rest] = m;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  const step = Math.pow(10, -decimals);
  const n = parseFloat(numStr) * (sign ? -1 : 1);
  const out = new Set<string>();

  // 単位・π・√つきの正の答えに負の誤答を出すと一目でばれるので出さない
  const allowNegative = n < 0 || rest.trim() === '';
  // 128√3/3 のような形は分子を分母の倍数でずらす（約分前の形を作らない）
  const restDen = rest.match(/\/(\d+)/);
  const stepMul = restDen ? parseInt(restDen[1], 10) : 1;
  const gcd = (x: number, y: number): number => (y === 0 ? Math.abs(x) : gcd(y, x % y));

  const build = (val: number, d?: string) => {
    if (val === 0 && (d || rest.trim())) return; // 0/3 や 0π は作らない
    if (val < 0 && !allowNegative) return;
    if (d === '1') d = undefined;
    if (d && decimals === 0 && gcd(Math.round(val), parseInt(d, 10)) > 1) return; // 2/4 などは出さない
    if (restDen && decimals === 0 && gcd(Math.round(val), stepMul) > 1 && gcd(Math.round(n), stepMul) === 1) return;
    const s = (val < 0 ? minus : '') + fmt(Math.abs(val), decimals) + (d ? `/${d}` : '') + rest;
    if (s !== correct.trim()) out.add(s);
  };

  const st = step * stepMul;
  const vals = [n + st, n - st, n + 2 * st, n - 2 * st, n * 2];
  if (Number.isInteger(n) && n % 2 === 0) vals.push(n / 2);
  if (n !== 0) vals.push(-n);
  if (Number.isInteger(n) && Math.abs(n) >= 10) vals.push(n + 10, n - 10);
  for (const v of vals) build(Math.round(v / step) * step, den);

  if (den) {
    const d = parseInt(den, 10);
    for (const nd of [d + 1, d - 1, d * 2]) if (nd >= 2) build(n, String(nd));
    build(parseInt(den, 10) * (n < 0 ? -1 : 1), numStr); // 分母分子の逆
  }
  return [...out];
}

/** 毎回ちがう選択肢を返す。数値の答えは5択、それ以外は元の数のまま（正解は必ず含む） */
export function buildOptions(options: string[], correct: string): string[] {
  const authored = options.filter((o) => o !== correct);
  const minus = [correct, ...options].some((o) => o.includes('-')) ? '-' : '−';
  const generated = numericVariants(correct, minus).filter((g) => !options.includes(g));
  if (generated.length === 0) return shuffled(options);

  const k = Math.min(4, authored.length + generated.length); // 正解＋4つで5択
  // よくある間違いを最低1つは残し、残りは作った誤答と混ぜて抽選
  const keep = shuffled(authored).slice(0, Math.max(1, Math.ceil(k / 2)));
  const pool = shuffled([...authored.filter((a) => !keep.includes(a)), ...generated]);
  const picked = [...keep, ...pool].slice(0, k);
  return shuffled([correct, ...picked]);
}
