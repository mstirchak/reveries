## Description

Samples NestJS project

## Installation

```bash
$ npm install
```

## Configuration

This project requires a dotenv file with the following variables:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=<someUsername>
DB_DATABASE=<someDatabaseName>
DB_PASSWORD=<somePassword>

SECRETKEY=<someSecretText>
```

Additionally, if you want to run theis project locally, you will need to have docker installed and running.

## Running the app

```bash
# start the database
$ docker-compose up

# start the app in debug mode
$ npm run start:debug
```

Navigate to localhost:3000/api

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
