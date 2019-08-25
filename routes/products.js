const express = require("express");
const router = express.Router();
const products = require("../db/products.js");

let date = new Date();

let error = null;
let errorPOST = false;
let errorPUT = false;
let errorDELETE = false;
let success = false;
let deletedItem;

router.get("/products/new", (req, res) => {
  let localError = error;
  error = null;
  res.render("products/new", {
    id: products.getCount(),
    error: localError,
    errorNew: errorPOST
  });
  //should have a list of current items that will narrow down if the user types in something that is similar to a product that already exists
});

router.get("/products", (req, res) => {
  let localSuccess = success;
  success = false;

  res.render("products/index", {
    products: products.getProducts(),
    success: localSuccess,
    deletedItem: deletedItem,
    date: date.toUTCString()
  });
});

router.get("/products/:id", (req, res) => {
  res.render("products/product", {
    product: products.getProduct(req.params.id)
  });
}); //can it be made to be searched by product name and not id#?

router.get("/products/:id/edit", (req, res) => {
  let localError = error;
  error = null;

  res.render("products/edit", {
    product: products.getProduct(req.params.id),
    error: localError,
    errorEdit: errorPUT,
    errorDelete: errorDELETE
  });
});

router.post("/products", (req, res) => {
  let isSuccessful = products.addProduct(req.body);
  if (!isSuccessful) {
    error = throwError(400, "Product cannot be added to database.", req);
    errorPOST = true;
    res.redirect("/products/new");
  } else {
    res.redirect("/products");
  }
});

router.put(`/products/:id`, (req, res) => {
  let isSuccessful = products.changeItem(req.params.id, req.body);
  if (!isSuccessful) {
    error = throwError(400, "Product ID not found in database.", req);
    errorPUT = true;
    res.redirect("back");
  } else {
    res.redirect(`/products/${req.params.id}`);
  }
});

router.delete(`/products/:id`, (req, res) => {
  let isSuccessful = products.deleteProduct(parseInt(req.params.id));
  if (!isSuccessful) {
    error = throwError(
      500,
      `Cannot delete product at ID ${req.params.id}.`,
      req
    );
    errorDELETE = true;
    res.redirect(`/products/${req.params.id}`);
  } else {
    success = true;
    deletedItem = isSuccessful;

    res.redirect("/products");
  }
});

let throwError = function(code, message, req) {
  return {
    product: req.body.name,
    price: parseFloat(req.body.price),
    inventory: parseFloat(req.body.inventory),
    date: date.toUTCString(),
    error: code,
    message: message
  };
};

module.exports = router;
