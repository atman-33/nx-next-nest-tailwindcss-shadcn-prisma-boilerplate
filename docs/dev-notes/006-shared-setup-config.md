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

 > .env に値が追加される度に更新していく。
