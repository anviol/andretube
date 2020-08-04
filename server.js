/* eslint-disable linebreak-style */
// server.js
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running');
});
