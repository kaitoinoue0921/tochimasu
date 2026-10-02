# NEXT_SESSION: とちます！（栃木県公立入試 数学スパルタ特訓）

## 進捗（作業ログ）
- 2026-10-02
  - 元: Antigravityで作成した Next.js 16 アプリ（`~/.gemini/antigravity/scratch/tochigi-math-stepbystep`）。trycloudflare の一時トンネル（localhost:3001）で見せていただけだった。
  - 元フォルダは触らず `~/tochimasu` にコピーして作業。
  - 静的エクスポート化: `next.config.ts` に `output: "export"` / `basePath: "/tochimasu"` / `trailingSlash` / `images.unoptimized`。
  - `r3/r4/r6/r7` の `[questionId]` と `[subId]` に `generateStaticParams` を追加。`[subId]/page.tsx` はクライアント部分を `Client.tsx` に分離し、`page.tsx` はサーバー側ラッパーにした。
  - `layout.tsx` のホーム `<a>` を `next/link` の `Link` に変更（basePath対応）。
  - 不要な生成スクリプト（generate_r3.py, patch_*.py, generate_r6_q1.py）を削除。
  - GitHub repo `kaitoinoue0921/tochimasu` を作成。`main`=ソース、`gh-pages`=公開用。
  - 公開URL: https://kaitoinoue0921.github.io/tochimasu/ （トップ・問題・公式ページが200を確認）

- 2026-10-02（改善）
  - トップに「令和5年度」セクション追加（これまで未リンクだった /r5-q2, /r5-q4 を掲載）。
  - トップに「クリアした問題 N 問」表示（localStorage の tochimasu_completed を集計）。
  - `scripts/deploy.sh` でビルド→gh-pages公開を1コマンド化。GitHub Actions（.github/workflows/deploy.yml）で main への push 時に自動デプロイ（workflow権限付与後に有効化）。
  - 全部改善（第2弾）: ①小問ごとの「クリア済」バッジ＋大問ごとの「n / m クリア」(src/components/Progress.tsx、記録キーは `r7/q1/1` 形式。StepLayoutに progressKey を追加) ②旧ページ /q1,/q2,/q3,/q5,/q6 を削除（/r6 と同内容・未リンク。履歴はgitに残る）③トップを sections 配列のデータ駆動に整理（小問数は data から自動算出）④スマホ幅でヘッダー折り返しを修正し、主要6ページで横スクロールなしを確認。
  - 旧クリア記録（タイトルをキーにしていた分）は合計数にだけ残る。バッジには出ない。

  - 選択肢シャッフル: StepLayout で choice 型の選択肢を、ページを開くたび・「もう一度最初から」のたびにランダム並び替え（正解位置を覚えて押せないように）。SSR不一致を避けるためマウント後に並び替え。8回読込で4通りの並びを確認。

  - スマホで文字が見切れる件: 間違えた時の罵倒オーバーレイ（枠が選択肢の高さ依存で、2択だと中身が切れる）に最小高さ(min-h)・小さめアイコン/文字を設定。ステップ内の左余白 pl-11 を sm 以上のみに（スマホで幅を確保）、ステップ本文に overflow-x-auto を付与し長い数式は横スクロール。375px幅で罵倒表示が収まることを確認。

## 決定事項と理由
- 公開はGitHub Pages（他のサイトと同じ方式、URL固定、PCを閉じても見られる）。
- サイト上に制作ツール名（Antigravity/Gemini）は書かない（本人の希望）。
- 元フォルダは残す（Antigravity側で編集を続けられるように）。

## デプロイ手順
```
cd ~/tochimasu
npm run build
touch out/.nojekyll
cd out && git init -q && git checkout -qb gh-pages && git add -A && git commit -qm Deploy
git remote add origin https://github.com/kaitoinoue0921/tochimasu.git && git push -qf origin gh-pages
```
Antigravity側で問題を追加した場合は、元フォルダの `src/` を `~/tochimasu/src/` に反映してから上記を実行（`[subId]/Client.tsx` 構成を壊さないこと）。

## 次のタスク
- 令和5年度は q2/q4 のみ。残りの大問を追加。
- 令和5年の他の大問、令和2年以前の追加（公式の問題PDFが手元にないと正確に作れないため保留。PDFをもらえれば opus-thinker で作成）。
- r5-q2 / r5-q4 は旧形式のページ。r6と同じデータ形式に移すとバッジ・進捗が付く。
- 元フォルダと `~/tochimasu` の二重管理を解消（どちらを正とするか決める）。

## 未確認事項
- 「ア・イ・ウ」「上のすべて」など、並びに意味がある選択肢があると、シャッフルで不自然になる（現状は見つかっていない）。
- スマホ実機での表示・数式(KaTeX)の崩れ確認はしていない。
- 全ページのリンク切れ検査は、トップから張られたリンクのみ。
