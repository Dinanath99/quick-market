const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const morgan = require("morgan");
const conntectDb = require("./config/db.js");

//config dotenv
//rest object
const app = express();
app.use(express.json());

//database config
conntectDb();
app.use(morgan("dev"));
// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// PORT
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is runniing on ${port}`);
});
