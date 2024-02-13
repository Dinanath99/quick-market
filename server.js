import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import conntectDb from "./config/db.js";

//config dotenv
dotenv.config();
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
