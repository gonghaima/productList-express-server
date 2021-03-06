# productList-express-server

a node express api
<https://raw.githubusercontent.com/gonghaima/data/master/products.json>

![babel](https://cdn-images-1.medium.com/max/600/1*tcJeNVYJST_f-8YEIh_rFA.jpeg)

deployed to Heroku
https://productlist-express-server.herokuapp.com/api/products/all
https://productlist-express-server.herokuapp.com/api/products?offset=3&limit=5

TODO:

- [x] babel 7
- [x] ES6 import syntax support
- [x] Docker support
- [x] Initial structure setup
- [x] Using mocks
- [x] Using real api request, and relace mocks
- [x] Production build fix & docker fix
- [x] Show version number
- [x] Fix the Dockerfile warning - absolute path
- [x] Redis docker works
- [x] Redis local works
- [x] Cache in Redis
- [ ] Gracefully keep the app running, when redis is not available.
- [x] Consolidate the resposne format
- [x] Pagination from there
  - request like "localhost:3500/api/products?offset=5&limit=5"
  - if offset not provided, it defaults to 0
  - response object will contain a list of the product data, has-next (boolean), has-previous (boolean), and total numbers of the products.
- [x] default value moved to config
- [x] deploy to a cloud server, so it is accessable via public uri
- [x] a branch without unit test
- [ ] a branch with Jest
  - add a dummy test to start with
  - add a coverage
  - ignroe generated coverage files
  - add test file pattern as spec
  - unit on pagination service
- [ ] main branch with mocha & chai
- [ ] unit test on business logic

NOTES:
run redis server first, in terminal, run
`redis-server`

list all redis keys
`redis-cli --scan --pattern '*'`

remove all keys in redis
`redis-cli FLUSHALL`

stop node cert warning locally
`export NODE_TLS_REJECT_UNAUTHORIZED=0`

run docker
`docker-compose up --build`
