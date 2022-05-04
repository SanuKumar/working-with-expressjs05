const express = require("express");
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use("/add-products", (req, res, next) => {
  console.log("In Middleware");
  res.send("<h2>The 'Add Product' page</h2>");
});

app.use("/", (req, res, next) => {
  console.log("In Middleware");
  res.send("<h2>Hello from Express</h2>");
  next();
});

app.listen(port);
console.log(`Your port is ${port}`);
