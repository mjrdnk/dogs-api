# DOGS API

## Local development

### Prerequisites:

- install node (recommended - use nvm - node version manager - https://github.com/nvm-sh/nvm#installation-and-update)
- install yarn (package manager - https://yarnpkg.com/lang/en/docs/install)
- install mysql (recommended - use brew - local installation of database)
  - `brew install mysql`
  - `brew services start mysql`
  - create database in mysql cli (`CREATE DATABASE <db_name>;`)
  - `mysql -u root password <password> <db_name>`

### Installation

Inside `dogs-api` run following commands:

```
cp .env.example .env
yarn
yarn migrate
yarn seed
yarn start-dev
```

### Verify your installation and starting:

Visit http://localhost:4000/dogs in the browser and you should see some seeded items.

## Endpoints:

- GET / - see welcome page

- GET /dogs - get list of dogs
- GET /dogs/:id - get dog by id

- POST /dogs - post a dog to the list
  send json as body like this:

```
{
     "name": "Fetch",
     "age": 2,
     "description": "Very cute, but also fetches like a boss!",
     "breed": "Labrador"
}
```

- GET /shelters - get list of shelters
- GET /shelters/:id - get shelter by id

- POST /shelters - post a shelter to the list
  send json as body like this:

```
{
	"name": "wiener tierschutzverein",
	"address_1": "Triester Straße 8",
	"address_2": "2331 Vösendorf",
	"description": "Die Stimme der Tiere. Das Original seit 1846.",
	"url": "https://www.wiener-tierschutzverein.org/"
}
```
