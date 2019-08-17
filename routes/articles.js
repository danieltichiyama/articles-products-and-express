const express = require("express");
const articlesRouter = express.Router();

const path = "../db/articles";

router.get(path, (req, res) => {
  console.log(req.method);
  console.log(req.params);
  console.log(req.body);
  res.send("articles_getOkay");
});

router.post(path, (req, res) => {
  console.log(req.method);
  console.log(req.params);
  console.log(req.body);
  res.send("articles_postOkay");
});

router.put(`${path}/:id`, (req, res) => {
  console.log(req.method);
  console.log(req.params);
  console.log(req.body);
  res.send("articles_putOkay");
});

router.delete(`${path}/:id`, (req, res) => {
  console.log(req.method);
  console.log(req.params);
  console.log(req.body);
  res.send("articles_deleteOkay");
});

module.exports = articlesRouter;
