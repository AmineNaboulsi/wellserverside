const express = require("express");
const app = express();
const mysql = require('mysql');
const userRouter = require("./Router/userRouter");
require('dotenv').config();

app.use(express.json());

global.con = mysql.createConnection({
  host: process.env._HOST,
  user: process.env._USER,
  password: process.env._password,
  database: process.env._DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

app.use("/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("Environment Variables:");
  console.log("HOST:", process.env._HOST);
console.log("USER:", process.env._USER);
console.log("PASSWORD:", '[HIDDEN]'); // Do not print passwords
console.log("DB:", process.env._DB);
});
