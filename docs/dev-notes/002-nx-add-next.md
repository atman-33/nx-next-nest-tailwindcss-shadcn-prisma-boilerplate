## ステップ

## 1. パッケージをインストール

```bash
npm i -D @nx/next
```

## 2. Nextjsプロジェクト（web）を追加

```bash
nx g @nx/next:app web --tags "scope:web"

✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · cypress
✔ Would you like to use the App Router (recommended)? (Y/n) · true
✔ Would you like to use `src/` directory? (Y/n) · true
✔ What should be the project name and where should it be generated? · web @ apps/web
```