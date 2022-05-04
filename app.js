const express = require("express");
//already included in express but removed in someof the versions of express, so to be sure
const bodyParser = require("body-parser");
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  console.log("In Middleware");
  res.send(
    '<h2>The Add Product page</h2><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

//only get executed on post requests
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h2>Hello from Express</h2>");
  next();
});

app.listen(port);
console.log(`Your port is ${port}`);
