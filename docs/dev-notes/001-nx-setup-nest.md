# Nxワークスペースを生成と共に、Nestjsプロジェクトを生成

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

## 3. nx コマンドを project.json に追加

> 本来、プロジェクト生成コマンド時にproject.json の target が追加されるが、  
> 追加されない場合は、下記を参考に追加する。

 `apps/api/project.json`

```json
  "targets": {
    "build": {
      "executor": "@nx/webpack:webpack",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "target": "node",
        "compiler": "tsc",
        "outputPath": "dist/apps/api",
        "main": "apps/api/src/main.ts",
        "tsConfig": "apps/api/tsconfig.app.json",
        "assets": ["apps/api/src/assets"],
        "isolatedConfig": true,
        "webpackConfig": "apps/api/webpack.config.js"
      },
      "configurations": {
        "development": {},
        "production": {}
      }
    },
    "serve": {
      "executor": "@nx/js:node",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "api:build"
      },
      "configurations": {
        "development": {
          "buildTarget": "api:build:development"
        },
        "production": {
          "buildTarget": "api:build:production"
        }
      }
    },
    "lint": {
      "executor": "@nx/linter:eslint",
      "outputs": ["{options.outputFile}"],
      "options": {
        "lintFilePatterns": ["apps/api/**/*.ts"]
      }
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/api/jest.config.ts",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  },
```

