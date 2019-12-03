## Description

## Installation

```bash
$ yarn install
```

## Database configuration

In the file `ormconfig.json`.
Create the database first, then execute :

```bash
$ yarn migration:run
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```