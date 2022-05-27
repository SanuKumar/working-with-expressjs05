const path = require("path");

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

app.use("/admin", adminRoutes); //add admin as filter
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port);
console.log(`Your port is ${port}`);
