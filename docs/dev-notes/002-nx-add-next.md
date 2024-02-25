## ステップ

## 1. パッケージをインストール

```bash
npm i -D @nx/next
```

## 2. Nextjsプロジェクト（web）を追加

```bash
nx g @nx/next:app web --tags "scope:web"

✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · cypress
✔ Would you like to use the App Router (recommended)? (Y/n) · true
✔ Would you like to use `src/` directory? (Y/n) · true
✔ What should be the project name and where should it be generated? · web @ apps/web
```

## 3. nx コマンドを project.json に追加

> 本来、プロジェクト生成コマンド時にproject.json の target が追加されるが、  
> 追加されない場合は、下記を参考に追加する。

`apps/web/project.json`

```json
  "targets": {
    "build": {
      "executor": "@nx/next:build",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "outputPath": "dist/apps/web"
      },
      "configurations": {
        "development": {
          "outputPath": "apps/web"
        },
        "production": {}
      }
    },
    "serve": {
      "executor": "@nx/next:server",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "web:build",
        "dev": true
      },
      "configurations": {
        "development": {
          "buildTarget": "web:build:development",
          "dev": true
        },
        "production": {
          "buildTarget": "web:build:production",
          "dev": false
        }
      }
    },
    "export": {
      "executor": "@nx/next:export",
      "options": {
        "buildTarget": "web:build:production"
      }
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/web/jest.config.ts",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    },
    "lint": {
      "executor": "@nx/linter:eslint",
      "outputs": ["{options.outputFile}"],
      "options": {
        "lintFilePatterns": ["apps/web/**/*.{ts,tsx,js,jsx}"]
      }
    }
  },
```