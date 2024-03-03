# web/api 共に利用可能な config モジュールを追加

confing モジュール経由で、`env`の情報を取得する。

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

e.g. 
```ts
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const apiEnv = {
  API_PORT: Number(process.env['API_PORT']) as number | undefined,
  PRODUCTION_ORIGIN: process.env['PRODUCTION_ORIGIN'] as string | undefined,
  DB_URL: process.env['DB_URL'] as string | undefined
};

export const webEnv = {
  NEXT_PUBLIC_API_ENDPOINT: process.env['NEXT_PUBLIC_API_ENDPOINT'] as string | undefined,
  NEXT_PUBLIC_API_GQL_URL: process.env['NEXT_PUBLIC_API_GQL_URL'] as string | undefined
};
```

 > .env に値が追加される度に更新していく。

### 4. index.ts を修正

`libs/shared/config/src/index.ts`

```ts
export { apiEnv, webEnv } from './lib/env';
```