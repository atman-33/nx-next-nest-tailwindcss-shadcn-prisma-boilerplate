# Nextjsで、SSGビルド設定

## ステップ

### 1. next.config.js をSSGビルド向けに変更

`apps/web/next.config.js`

```js
const nextConfig = {
    ...,
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true
};
```

### 2. ServeStaticModule をNestjsプロジェクトに追加

パッケージをインストール

```bash
npm i @nestjs/serve-static
```

Nestjsプロジェクトに`ServeStaticModule`を追加

**apps/api/src/app/app.module.ts**

```ts
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*', '/api/graphql']
    }),
```

これで、`serve api`実行後、Nextjs アプリにアクセス可能となる。
