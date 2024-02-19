const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const mongodb = require("./config/db.js");

const app = express();
app.use(express.json());

//imprting mongoose model
const users = require("./models/userModel.js");

//importing router
const authRoutes = require("./routes/auth-router.js");

app.use("/api", authRoutes); //for routing

//express app

app.use(morgan("dev")); //for logging purpose in console window

// PORT
let port = process.env.PORT || 8080;

mongodb().then(() => {
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`server is runniing on ${process.env.DEV_MODE} mode ${port}`);
  });
});
