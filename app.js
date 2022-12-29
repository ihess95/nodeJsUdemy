const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

// app.use("/", (req, res, next) => {
//   next();
// });

app.listen(3000);
