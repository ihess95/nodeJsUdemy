const http = require("http");

const routes = require("./users", "./create-user");

const server = http.createServer(routes);
server.listen(3000);
