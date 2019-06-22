# productList-express-server

a node express api
<https://raw.githubusercontent.com/gonghaima/data/master/products.json>

![babel](https://cdn-images-1.medium.com/max/600/1*tcJeNVYJST_f-8YEIh_rFA.jpeg)

TODO:

- [x] babel 7
- [x] ES6 import syntax support
- [x] Docker support
- [x] Initial structure setup
- [x] Using mocks
- [x] Using real api request, and relace mocks
- [x] Production build fix & docker fix
- [x] Show version number
- [ ] Fix the Dockerfile warning - absolute path
- [x] Redis docker works
- [x] Redis local works
- [x] Cache in Redis
- [ ] Pagination from there
  - request like "localhost:3500/api/products?offset=5&limit=5"
  - if offset not provided, it defaults to 0
  - response object will contain a list of the product data, has-next (boolean), has-previous (boolean), and total numbers of the products.

NOTES:
run redis server first, in terminal, run
```redis-server```

list all redis keys
redis-cli --scan --pattern '*'

remove all keys in redis
redis-cli FLUSHALL

stop node cert warning locally
export NODE_TLS_REJECT_UNAUTHORIZED=0