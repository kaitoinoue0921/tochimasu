// 「使う知識」のタグから、公式・ルール集(/formulas)の該当カードへのアンカーを返す。
const RULES: [RegExp, string][] = [
  [/直線|傾き|1次関数|変化の割合|2点を通る|交点|x軸との交点|平行線の式|グラフ|速さ/, 'f-line-recipe'],
  [/y=ax|放物線|比例定数/, 'f-parabola'],
  [/因数分解|乗法公式|式の展開/, 'f-joho'],
  [/2次方程式|解の公式/, 'f-kaiho'],
  [/三平方/, 'f-pythag'],
  [/相似|線分の比|中点連結/, 'f-similar'],
  [/円周角/, 'f-enshu'],
  [/合同/, 'f-congruent'],
  [/錯角|多角形|外角|内角/, 'f-angles'],
  [/おうぎ形|円周|弧/, 'f-ougi'],
  [/球|円錐|角錐/, 'f-sphere'],
  [/移項|1次方程式|連立方程式|加減法|過不足/, 'f-iko'],
  [/分配法則|同類項/, 'f-bunpai'],
  [/正負|累乗|文字式/, 'f-minus'],
];

export function formulaAnchor(tag: string): string | null {
  for (const [re, id] of RULES) if (re.test(tag)) return id;
  return null;
}
