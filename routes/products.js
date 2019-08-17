const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const path = "/products";

router.get(path, (req, res) => {
  console.log("req.method", req.method);
  res.send("products_getOkay");
});

router.post(path, (req, res) => {
  console.log("req.method", req.method);
  console.log("req.body", req.body);

  res.send("products_postOkay");
});

router.put(`${path}/:id`, (req, res) => {
  console.log("req.method", req.method);
  console.log("req.params", req.params);
  console.log("req.body", req.body);
  res.send("products_putOkay");
});

router.delete(`${path}/:id`, (req, res) => {
  console.log("req.method", req.method);
  console.log("req.params", req.params);
  console.log("req.body", req.body);
  res.send("products_deleteOkay");
});

module.exports = router;
