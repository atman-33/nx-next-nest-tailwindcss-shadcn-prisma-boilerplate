# よく利用するスクリプトを追加

## ステップ

### 1. package.json にコマンドを追加

```json
  "scripts": {
    "sereve:all": "npx concurrently --kill-others-on-fail \"npm:start:*\"",
    "----START----": "-------------------------",
    "start:api": "nx serve api",
    "start:web": "nx serve web",
    "start:api-and-web": "nx serve api && nx serve web",
    "----TOOLS SECTION----": "-------------------------",
    "verify": "nx affected:lint --fix --all && nx format:write && nx format:check && nx affected --target=lint --fix --parallel=3 && npx nx affected --target=test --parallel=3 && nx affected --target=build --parallel=3 --exclude=web",
    "----DEPLOY SECTION----": "-----------------------",
    "cd:build-api": "npx nx build api --prod",
    "cd:build-web": "npx nx build web --prod",
    "cd:build": "npm run cd:build-api && npm run cd:build-web",
    "cd:web-start:server": "cd dist/apps/web && npm run start",
    "cd:web-start:static": "npx serve dist/apps/web/.next",
    "cd:api-start": "node dist/apps/api/main.js",
    "----TEST SECTION----": "-----------------------",
    "test:web:watch": "nx test web --watch"
  },
```