const express = require("express");
const app = express();
const mysql = require('mysql');
const userRouter = require("./Router/userRouter");
const wellRouter = require("./Router/wellRouter");
const taskRouter = require("./Router/taskRouter");
const paymentRouter = require("./Router/paymentRouter");
const clientRouter = require("./Router/clientRouter");

require('dotenv').config();

app.use(express.json());

global.con = mysql.createConnection({
  host: process.env._HOST,
  user: process.env._USER,
  password: process.env._PASSWORD,
  database: process.env._DB
});

con.connect(function (err) {
  if (err) {
    console.log('error when connecting to db:', err);
    setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
  } else {
    console.log("Connected to the database!");
  }

});

con.on('error', function(err) {
  console.log('db error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    handleDisconnect();
  } else {
    throw err;
  }
});

app.use("/users", userRouter);
app.use("/wells", wellRouter);
app.use("/tasks", taskRouter);
app.use("/payments", paymentRouter);
app.use("/clients", clientRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("Environment Variables:");
  console.log("HOST:", process.env._HOST);
  console.log("USER:", process.env._USER);
  console.log("PASSWORD:", '[HIDDEN]'); // Do not print passwords
  console.log("DB:", process.env._DB);
});
