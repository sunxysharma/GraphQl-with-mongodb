# GraphQl with mongodb

## Project Setup
> create .env file

```
PORT=4000
MONGODB_URI='mongodb://localhost:27017/test'
```


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn start

# build for production and launch server
$ yarn build
```


```
# add cat
mutation{
  createCat(name:"abc"){
    name
    id
  }
}

# all cats
{
  cats{
    id
    name
  }
}

```