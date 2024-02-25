## ステップ

## 1. パッケージをインストール

```bash
npm i @nestjs/config
```

### 2. config プロジェクトを生成

```bash
npx nx generate @nx/js:library shared-config --directory=libs/shared/config --importPath=@libs/shared/config --tags=scope:shared --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

### 3. env.ts を作成

 `libs/shared/config/src/lib/env.ts`
