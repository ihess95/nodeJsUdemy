const http = require("http");

const routes = require("./users");

const server = http.createServer(routes);
server.listen(3000);
