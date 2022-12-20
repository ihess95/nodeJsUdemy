const http = require("http");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
});
server.listen(3000);
