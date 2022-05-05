const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  res.send(
    '<h2>The Add Product page</h2><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

//only get executed on post requests
router.post("/product", (req, res, next) => {
  console.log(req.body, "product");
  res.redirect("/");
});

module.exports = router;
