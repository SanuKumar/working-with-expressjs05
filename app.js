const express = require("express");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

//already included in express but removed in someof the versions of express, so to be sure
const bodyParser = require("body-parser");
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port);
console.log(`Your port is ${port}`);
