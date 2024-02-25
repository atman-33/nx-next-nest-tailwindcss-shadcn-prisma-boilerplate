## ステップ

### 1. Nxワークスペースを生成（Nestjs プロジェクトをデフォルト設定）

ワークスペースを生成するディレクトリに移動

```bash
cd ~/Sites
```

ワークスペースを生成  
* Nestjs（api）プロジェクトをデフォルト設定  

```bash
npx create-nx-workspace@latest

✔ Where would you like to create your workspace? · nx-next-nest-tailwindcss-shadcn-prisma-boilerplate

✔ Which stack do you want to use? · node
✔ What framework should be used? · nest
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · api
✔ Would you like to generate a Dockerfile? [https://docs.docker.com/] · No
✔ Set up CI with caching, distribution and test deflaking · skip
✔ Would you like remote caching to make your build faster? · skip

 NX   Creating your v18.0.5 workspace.

✔ Installing dependencies with npm
✔ Successfully created the workspace: nx-next-nest-tailwindcss-shadcn-prisma-boilerplate.
```

### 2. api プロジェクトにタグを設定

 `apps/api/project.json`

```json
  "tags": [
    "scope:api"
  ]
```

