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

### feature-dummy を生成

```bash
npx nx generate @nx/js:library api-feature-dummy --directory=libs/api/feature-dummy --importPath=@libs/api/feature-dummy --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

### delete files

* `api-feature-user.spec.ts`
* `api-feature-user.ts`

### generate resolver

```bash
nx g @nrwl/nest:resource --project=api-feature-sample-prisma --directory=lib --type="graphql-code-first" --crud --name sample-todos
```

### arange

- move to generated files to lib folder
- delete dto folder
- delete entities folder
- fix export in index.ts

```ts
export * from './lib/sample.module';
```

### update sample.module.ts

add PrismaModule to sample.module.ts

```ts
...
@Module({
  providers: [SampleResolver, SampleService],
  imports: [PrismaModule]
})
...
```

### update sample.resolver.ts

* change method name: findAll() => samples()
* change method name: findOne() => sample()
* change args, types as generated-db-types names

### update sample.service.ts

* add di PrismaService
* change methods to use PrismaService
* change args, types as generated-db-types names

> If you need relation to get another table data, not forget to use include!

### add SampleModule to AppModule

add SampleModule to AppModule

after that, run Nestjs and check runngin Graphql!
