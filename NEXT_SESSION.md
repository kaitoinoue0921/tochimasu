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
- デプロイの自動化（GitHub Actions など）。
- 元フォルダと `~/tochimasu` の二重管理を解消（どちらを正とするか決める）。

## 未確認事項
- スマホ実機での表示・数式(KaTeX)の崩れ確認はしていない。
- 全ページのリンク切れ検査は、トップから張られたリンクのみ。
