# Dummy テーブル操作用のAPI生成（サンプル）

## ステップ

### 1. schema.prisma にモデル追加

Dummy モデルを追加

`libs/api/prisma/data-access-db/src/lib/schema.prisma`

e.g. mongo db 向け

```prisma
model Dummy {
    //   id       String    @id
    id     String  @id @default(auto()) @map("_id") @db.ObjectId
    text   String?
    int    Int?
    float  Float?
    bytes  Bytes?
    bigInt BigInt?
    json   Json?

    createdAt DateTime @default(now())
    updatedAt DateTime @default(now()) @updatedAt
}
```

### 2. feature-dummy を生成

```bash
npx nx generate @nx/js:library api-feature-dummies --directory=libs/api/feature-dummies --importPath=@libs/api/feature-dummies --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

下記ファイルは削除しておく。

- `api-feature-dummies.spec.ts`
- `api-feature-dummies.ts`

### 3. resolver を生成

```bash
nx g @nrwl/nest:resource --directory=libs/api/feature-dummies/src/lib --type="graphql-code-first" --crud --name dummies
```

作成されたファイルを整理

- .spec ファイルを削除
- entities フォルダを削除して、models フォルダを代わりに作成
- index.ts の export で、Module クラスを指定

```ts
export { DummiesModule } from './lib/dummies.module';
```

### 4. dummies.module.ts を修正

PrismaModule を追加

```ts
@Module({
  providers: [DummiesResolver, DummiesService],
  imports: [PrismaModule]
})
export class DummiesModule {}
```

### 5. dummies.resolver.ts を修正

詳細は下記を参照

`libs/api/feature-dummies/src/lib/dummies.resolver.ts`

### 6. dummies.service.ts を修正

詳細は下記を参照

`libs/api/feature-dummies/src/lib/dummies.service.ts`

> 別テーブルとリレーションを利用してデータ操作する場合、`include`を利用することに注意

### 7. AppModule に DummiesModule を追加

`apps/api/src/app/app.module.ts`

```ts
@Module({
  imports: [
    ...
    // ---- Graphql ---- //
    DummiesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
```