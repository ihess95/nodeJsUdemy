const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Howdy</title></head>");
    res.write("<body><h1>Howdy there</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="users"><button type="submit">Send</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Howdy</title></head>");
    res.write("<body><ul><li>Ian</li><li>John</li><li>Steve</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const userList = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      userList.push(chunk);
    });
    return req.on("end", () => {
      const parsedList = Buffer.concat(userList).toString();
      const message = parsedList.split("=")[1];
      console.log(message);
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Howdy</title></head>");
  res.write("<body><h1>Howdy there</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
