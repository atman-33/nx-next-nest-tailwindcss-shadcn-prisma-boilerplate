# Tailwindcss セットアップ

## 参考URL

<https://nx.dev/recipes/react/using-tailwind-css-in-react>

## ステップ

### 1. tailwindcss セットアップコマンドを実行

```bash
nx g @nx/react:setup-tailwind --project=web
```

### 2. global.css を作成

`apps/web/src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. パスエイリアスを追加

`tsconfig.base.json`

```json
    "paths": {
      "@/styles/*": [
        "apps/web/src/styles/*"
      ],
```

### 4. 最上位のlayout.tsx に、global.cssを適用

`apps/web/src/app/layout.tsx`

```tsx
/* eslint-disable @nx/enforce-module-boundaries */
import '@/styles/global.css';

export const metadata = {
  title: 'Welcome to web',
  description: 'Generated by create-nx-workspace'
};
...
```