# api-feature-dummies

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api-feature-dummies` to build the library.

## Running unit tests

Run `nx test api-feature-dummies` to execute the unit tests via [Jest](https://jestjs.io).

## Graphql samples

```graphql
query getDummies {
	dummies {
    id
    text
    createdAt
    updatedAt
  }
}

mutation createDummy {
  createDummy (
    data: {
      text: "test message" 
    }
  ){
    id
    text
  }
}
```