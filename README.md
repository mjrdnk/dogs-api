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
     "name": "yo",
     "age": 2,
     "description": "lorem ipsum dolor amet",
     "breed": "LabradorLabradorLabradorLabradorLabradorLabrad"
}
```
