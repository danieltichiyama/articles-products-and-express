const express = require("express");
const router = express.Router();
const products = require("../db/products.js");
const fs = require("fs");

const path = "/products";
const encoding = { encoding: "utf8" };

let date = new Date();

router.get(path, (req, res) => {
  res.send(products.getProducts());
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
  let isSuccessful = products.changeProduct(parseInt(req.params.id), req.body);
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
