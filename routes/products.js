const express = require("express");
const router = express.Router();
const products = require("../db/products.js");

const path = "/products";
const encoding = { encoding: "utf8" };

let date = new Date();

router.get("/products/new", (req, res) => {
  res.render("new", { id: products.getCount() });
  //should have a list of current items that will narrow down if the user types in something that is similar to a product that already exists
});

router.get("/products", (req, res) => {
  res.render("index", { products: products.getProducts() });
});

router.get("/products/:id", (req, res) => {
  res.render("product", { product: products.getProduct(req.params.id) });
}); //can it be made to be searched by product name and not id#?

router.get("/products/:id/edit", (req, res) => {
  res.render("edit", { product: products.getProduct(req.params.id) });
});

router.post("/products", (req, res) => {
  let isSuccessful = products.addProduct(req.body);
  if (!isSuccessful) {
    throwError(400, "Product already exists in database.", res, req);
  } else {
    res.redirect("/products");
  }
});

router.put(`/products/:id`, (req, res) => {
  let isSuccessful = products.changeItem(req.params.id, req.body);
  if (!isSuccessful) {
    console.log("something didn't work");
    res.redirect("back");
    throwError(400, "Product ID not found in database.", res, req);
  } else {
    console.log("all set!");
    console.log("req.params.id", req.params.id);
    console.log("typeof req.params.id", typeof req.params.id);
    console.log(
      "router.put>products.getProduct(req.params.id)",
      products.getProduct(req.params.id)
    );
    res.redirect(`/products/${parseInt(req.params.id)}`);
  }
});

router.delete(`/products/:id`, (req, res) => {
  let isSuccessful = products.deleteProduct(parseInt(req.params.id));
  if (!isSuccessful) {
    throwError(500, `Cannot delete product at ID ${req.param.id}.`, res, req);

    res.redirect(`/products/${req.params.id}`);
  } else {
    res.redirect("/products");
    //must generate a message that the operation was successful.
  }
});

let throwError = function(code, message, res, req) {
  return {
    product: req.body.name,
    price: parseFloat(req.body.price),
    inventory: parseFloat(req.body.inventory),
    "Error-Code": code,
    Message: message
  };
};

module.exports = router;
