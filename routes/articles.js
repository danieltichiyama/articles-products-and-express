const express = require("express");
const router = express.Router();
const articlesDB = require("../db/articles.js");

let date = new Date();
let globalError = null;
let errorPOST = false;
let errorPUT = false;
let errorDELETE = false;
let success = false;
let deletedArticle;
let badArticle = null;

router.get("/articles/new", (req, res) => {
  let localError = globalError;
  globalError = null;

  res.render("articles/new", {
    badArticle: badArticle,
    error: localError,
    errorNew: errorPOST
  });
});

router.get("/articles", (req, res) => {
  let localSuccess = success;
  success = false;

  res.render("articles/index", {
    articles: articlesDB.getArticles(),
    success: localSuccess,
    deletedArticle: deletedArticle,
    date: date.toUTCString()
  });
});

router.get("/articles/:title", (req, res) => {
  res.render("articles/article", {
    article: articlesDB.getArticle(req.params.title)
  });
});

router.get("/articles/:title/edit", (req, res) => {
  let localError = globalError;
  globalError = null;

  res.render("articles/edit", {
    article: articlesDB.getArticle(req.params.title),
    error: localError,
    errorEdit: errorPUT,
    errorDelete: errorDELETE
  });
});

router.post("/articles", (req, res) => {
  let isSuccessful = articlesDB.addArticle(req.body);
  if (!isSuccessful) {
    globalError = throwError(400, "Article cannot be added to database.".req);
    errorPOST = true;
    res.redirect("/articles/new");
  } else {
    res.redirect("/articles");
  }
});

router.put("/articles/:title", (req, res) => {
  let isSuccessful = articlesDB.editArticle(req.params.title, req.body);
  if (!isSuccessful) {
    globalError = throwError(400, "Article not found.", req);
    errorPUT = true;
    res.redirect(`/articles/${req.params.title}/edit`);
  } else {
    res.redirect(`/articles/${req.params.title}`);
  }
});

router.delete("/articles/:title", (req, res) => {
  let isSuccessful = articlesDB.deleteArticle(req.params.title);
  if (!isSuccessful) {
    globalError = throwError(
      500,
      `Cannot delete article called ${req.params.id}`,
      req
    );
    errorDELETE = true;
    res.redirect(`articles/${req.params.title}`);
  } else {
    success = true;
    deletedArticle = isSuccessful;

    res.redirect("/articles");
  }
});

let throwError = function(code, message, req) {
  return {
    article: req.body.title,
    author: req.body.author,
    date: date.toUTCString(),
    error: code,
    message: message
  };
};

module.exports = router;
