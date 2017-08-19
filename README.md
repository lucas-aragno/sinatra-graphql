# sinatra-graphql starter kit

This is an **opinionated** skeleton app that uses [Sinatra](https://github.com/sinatra/sinatra), [Trailblazer](http://trailblazer.to), [Apollo](dev.apollodata.com/react/) as a [GraphQL](http://graphql.org/learn/) client and of course [React](https://facebook.github.io/react)

# How to run it

Install the ruby dependencies:

```bash
bundle
```

Install the JS dependencies

```bash
npm install
```
or

```bash
yarn install
```

or

```bash
pnpm install
```

or whatever floats your boat.

Then set up the ENV vars

```bash
cp .env.sample .env
```

and change the sample to what applies to your project/machine

```bash
GRAPHQL_URL="http://localhost:5000/graphql"
DATABASE_NAME="todo-sinatra"
DATABASE_USER="lucas"
DATABASE_PASSWORD="security"
DATABASE_HOST="localhost"
DATABASE_PORT="5432"
```



once all the dependencies are installed you can either run

```bash
./bin/server
```

if you have [foreman](https://github.com/ddollar/foreman) installed, otherwise you can open 2 terminals and run:

```bash
bundle exec unicorn -p 5000 -E "development" -c config/unicorn.rb
```

and 

```bash
npm run webpack:dev
```

on each one.
