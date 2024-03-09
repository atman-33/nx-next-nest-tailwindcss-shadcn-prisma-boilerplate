# Shadcn セットアップ（Nx向け）

## 参考URL

[https://ui.shadcn.com/](https://ui.shadcn.com/docs/installation/manual)

[component.json needs to load tsconfig.json](https://github.com/shadcn-ui/ui/issues/718)  

[Radix × Tailwindなshadcn/uiがいい感じ](https://qiita.com/hajimism/items/e7bbe3711b43a8579224)  

[shadcn/uiライブラリを使いこなすための基礎](https://reffect.co.jp/react/shadcn-react/)  

## ステップ

### 1. パッケージをインストール

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react

# If you're using the new-york style, install @radix-ui/react-icons:
npm install @radix-ui/react-icons
```

### 2. shadcn/ui コンポーネント格納用ライブラリを生成

```bash
npx nx generate @nx/next:library web-ui-shadcn --directory=libs/web/ui-shadcn --importPath=@libs/web/ui-shadcn --tags=scope:web --bundler=swc

✔ Which stylesheet format would you like to use? · css
```

### 3. `tailwind.config.js` を変更  

`apps/web/tailwind.config.js`    

```js
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    require('tailwindcss-animate')
  ]
};
```

### 4. `global.css` を変更

 `apps/web/src/styles/global.css`

 ```css
 @tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
}
 ```

### 5. `utils.ts` を作成

 `libs/web/ui-shadcn/src/lib/utils.ts`

 ```ts
 import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 ```

### 6. `components.json` を作成

 `components.json`

 ```json:components.json
 {
  "$schema": "https://ui.shadcn.com/schema.json", 
  "style": "default", 
  "rsc": false, 
  "tsx": true,
  "tailwind": {
    "config": "apps/web/tailwind.config.js",
    "css": "apps/web/src/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true
  }, 
  "aliases": {
    "components": "@libs/web/ui-shadcn/components",
    "utils": "@libs/web/ui-shadcn/lib/utils"
  }
}
```

### 7. `tsconfig.base.json` に utils.ts のパスを追加

`tsconfig.base.json`

```json
    "paths": {
      ...,
      "@libs/web/ui-shadcn/lib/utils": [
        "libs/web/ui-shadcn/src/lib/utils.ts"
      ],
      ...,
    }
```

### 8. shadcn-ui 用に、`tsconfig.json` を作成

 `tsconfig.json`

 ```json:tsconfig.json
 {
  "compilerOptions": {

    "baseUrl": ".",
    "paths": {
      "@libs/web/ui-shadcn": ["libs/web/ui-shadcn/src/index.ts"],
      "@libs/web/ui-shadcn/*": ["libs/web/ui-shadcn/src/*"]
    }
  }
} 
```

## 利用方法

### 1. Button をインストール

```bash
npx shadcn-ui@latest add button
```

### 2. index.tsにButtonのExportを追加

`libs/web/ui-shadcn/src/index.ts`

```ts
export * from './components/ui/button';
```

### 2. 利用例

e.g.  

```tsx
import { Button } from '@/components/ui/button';
import '@/styles/global.css';

function Home() {
  return (
    <>
      <Button variant="default" className="m-4">
        ボタン
      </Button>
    </>
  );
}
```