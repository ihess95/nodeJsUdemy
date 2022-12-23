const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("Always running");
//   next();
// });

app.use("/users", (req, res, next) => {
  console.log("users page loaded");
  res.send("<h1>Users Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("default page");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
