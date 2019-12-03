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

## Routes

### Authentication

```
POST /auth/register
{
  "email": "example@domain.com",
  "password": "azerty"
}
```

```
REQUEST

POST /auth/login
{
  "email": "example@domain.com",
  "password": "azerty"
}

Response
{
  "expires_in": 3600,
  "access_token": "ACCESS_TOKEN",
  "user_id": 1,
  "status": 200
}
```

### Users

`GET /users/:id`

`POST /users`

`PUT /users`

`DELETE /users/:id`