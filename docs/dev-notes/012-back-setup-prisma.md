## ステップ

### 1. data-access-db プロジェクトを追加

```bash
npx nx generate @nx/js:library api-data-access-db --directory=libs/api/prisma/data-access-db --importPath=@libs/api/prisma/data-access-db --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · none
```

After that, delete `api-data-access-db.ts` file.

### 2. パッケージをインストール

```bash
npm i -D prisma env-cmd prisma-nestjs-graphql 
npm i @prisma/client @nestjs/graphql graphql-type-json
```

### 3. schema.prisma を作成

 `libs/api/prisma/data-access-db/src/lib/schema.prisma`

```prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    // provider = "postgresql"
    provider = "mongodb"
    url      = env("DB_URL")
}

generator nestgraphql {
    provider                = "node node_modules/prisma-nestjs-graphql"
    output                  = "./@generated"
    noAtomicOperations      = true
    combineScalarFilters    = true
    reExport                = Single
    emitSingle              = false
    emitCompiled            = false
    purgeOutput             = false
    // field validator
    fields_Validator_from   = "class-validator"
    fields_Validator_input  = true
    fields_Validator_output = true
    fields_Validator_model  = true
    // Args where|data nested validator
    decorate_1_type         = "*Args"
    decorate_1_field        = "@(data|where)"
    decorate_1_name         = ValidateNested
    decorate_1_from         = "class-validator"
    decorate_1_arguments    = "[]"
}
...
```

### 4. prisma.service.ts を作成

 `libs/api/prisma/data-access-db/src/lib/prisma.service.ts`

### 5. prisma.module.ts を作成

 `libs/api/prisma/data-access-db/src/lib/prisma.module.ts`

### 6. index.ts を修正

 `libs/api/prisma/data-access-db/src/index.ts`

```ts
export * from './lib/@generated/index';
export { PrismaModule } from './lib/prisma.module';
export { PrismaService } from './lib/prisma.service';
```

### 7. package.json に prisma の schema を追加

 `/package.json`

```json
  ...
  },
  "prisma": {
    "schema": "libs/api/prisma/data-access-db/src/lib/schema.prisma"
  }
}
```

### 8. package.json に DB操作コマンドを追加

 `/package.json`

```json
  "scripts": {
    "----DB SECTION----": "-------------------------",
    "db:migrate:dev": "npx env-cmd -f .env npx prisma migrate dev",
    "db:push:dev": "npx env-cmd -f .env npx prisma db push",
    "db:generate": "npx env-cmd -f .env npx prisma generate",
    "db:studio": "npx env-cmd -f .env npx prisma studio",
  },
```

###  9. prisma マイグレーション

マイグレーション実行で、DBテーブルを生成する。

> ただし、mongo db の場合は、マイグレーションは必要無し。

```bash
npm run db:migrate:dev
```

> もしデータをリセットする場合、先にマイグレーションフォルダを削除してから、マイグレーションコマンドを実行すること。

### 10. prisma generate

`prisma generate` コマンド実行で、スキーマに定義したモデルのTypeファイル等を生成する。

```bash
npx prism

## その他

### prisma studio を起動

```bash
npm run db:studio
```
