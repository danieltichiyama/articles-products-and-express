const express = require("express");
const router = express.Router();

let date = new Date();

let error = null;
let errorPOST = false;
let errorPUT = false;
let errorDELETE = false;
let success = false;
let deletedItem;

router.get("/new", (req, res) => {
  let localError = error;
  error = null;
  res.render("products/new", {
    error: localError,
    errorNew: errorPOST
  });
});

router.get("/", (req, res) => {
  let localSuccess = success;
  success = false;
  return req.db.Product.fetchAll().then(results => {
    res.render("products/index", {
      products: results.toJSON(),
      success: localSuccess,
      deletedItem: deletedItem,
      date: date.toUTCString()
    });
  });
});

router.get("/:id", (req, res) => {
  return req.db.Product.where({ id: req.params.id })
    .fetch()
    .then(results => {
      res.render("products/product", { product: results.attributes });
    });
});

router.get("/:id/edit", (req, res) => {
  let localError = error;
  error = null;

  return req.db.Product.where({ id: req.params.id })
    .fetch()
    .then(results => {
      res.render("products/edit", {
        product: results.toJSON(),
        error: localError,
        errorEdit: errorPUT,
        errorDelete: errorDELETE
      });
    });
});

router.post("/", (req, res) => {
  return req.db.Product.forge({
    name: req.body.name,
    description: req.body.description,
    inventory: req.body.inventory,
    price: req.body.price
  })
    .save()
    .then(results => {
      res.redirect("/products");
    })
    .catch(err => {
      error = throwError(400, "Product cannot be added to database.", req);
      errorPOST = true;
      res.redirect("products/new");
    });
});

router.put("/:id", (req, res) => {
  return req.db.Product.where({ id: req.params.id })
    .set({
      name: req.body.name,
      description: req.body.description,
      inventory: req.body.inventory,
      price: req.body.price
    })
    .save()
    .then(results => {
      res.redirect(`/products/${req.params.id}`);
    })
    .catch(err => {
      error = throwError(400, "Product ID not found in database", req);
      errorPUT = true;
      res.redirect("back");
    });
});

router.delete("/products/:id", (req, res) => {
  return req.db.Product.where({ id: req.params.id })
    .destroy()
    .then(results => {
      res.redirect("/products");
    })
    .catch(err => {
      error = throwError(
        500,
        `Cannot delete product at ID ${req.params.id}`,
        req
      );
      errorDELETE = true;
      res.redirect(`products/${req.params.id}`);
    });
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
