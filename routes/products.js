const express = require("express");
const router = express.Router();
const products = require("../db/products.js");
const fs = require("fs");
const methodOverride = require("method-override");

const path = "/products";
const encoding = { encoding: "utf8" };

let date = new Date();
//how can I assign the path to a given variable?
router.get("/products", (req, res) => {
  res.render("index", { products: products.getProducts() });
});

router.get("/products/:id", (req, res) => {
  res.render("product", { product: products.getProduct(req.params.id) });
}); //can it be made to be searched by product name and not id#?

router.get("/products/:id/edit", (req, res) => {
  res.render("edit", { product: products.getProduct(req.params.id) });
}); //should automatically fill in current information

router.get("/products/new", (req, res) => {
  res.render("new"); //should have a list of current items that will narrow down if the user types in something that is similar to a product that already exists
});

router.post(path, (req, res) => {
  let isSuccessful = products.addProduct(req.body);
  if (!isSuccessful) {
    throwError(400, "Product already exists in database.", res, req);
  } else {
    res.sendStatus(200);
  }
});

router.put(`${path}/:id`, (req, res) => {
  let isSuccessful = products.changeItem(parseInt(req.params.id), req.body);
  if (!isSuccessful) {
    throwError(400, "Product ID not found in database.", res, req);
  } else {
    res.send(products.getProduct(req.params.id));
  }
});

router.delete(`${path}/:id`, (req, res) => {
  let isSuccessful = products.deleteProduct(parseInt(req.params.id));
  if (!isSuccessful) {
    throwError(500, `Cannot delete product at ID ${req.param.id}.`, res, req);
  } else {
    res.sendStatus(200);
  }
});

let throwError = function(code, message, res, req) {
  return res.send({
    product: req.body.name,
    price: parseFloat(req.body.price),
    inventory: parseFloat(req.body.inventory),
    "Error-Code": code,
    Message: message
  });
};

module.exports = router;
