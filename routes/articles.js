const express = require("express");
const router = express.Router();
const articlesDB = null;

let date = new Date();
let globalError = null;
let errorPOST = false;
let errorPUT = false;
let errorDELETE = false;
let success = false;
let deletedArticle;
let badArticle = null;

router.get("/new", (req, res) => {
  let localError = globalError;
  globalError = null;

  res.render("articles/new", {
    badArticle: badArticle,
    error: localError,
    errorNew: errorPOST
  });
});

router.get("/", (req, res) => {
  let localSuccess = success;
  success = false;

  return req.db.Article.fetchAll().then(results => {
    res.render("articles/index", {
      articles: results.toJSON(),
      success: localSuccess,
      deletedArticle: deletedArticle,
      date: date.toUTCString()
    });
  });
});

router.get("/:title", (req, res) => {
  return req.db.Article.where({ urlTitle: req.params.title })
    .fetch()
    .then(results => {
      res.render("articles/article", {
        article: results.toJSON()
      });
    });
});

router.get("/:title/edit", (req, res) => {
  let localError = globalError;
  globalError = null;

  return req.db.Article.where({ urlTitle: req.params.title })
    .fetch()
    .then(results => {
      res.render("articles/edit", {
        article: results.toJSON(),
        error: localError,
        errorEdit: errorPUT,
        errorDelete: errorDELETE
      });
    });
});

router.post("/", (req, res) => {
  let urlTitle = req.body.title.replace(/ /g, "-");
  return req.db.Article.forge({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    urlTitle: urlTitle
  })
    .save(null, { method: "insert" })
    .then(results => {
      res.redirect("/articles");
    })
    .catch(err => {
      globalError = throwError(
        400,
        "Article cannot be added to database.",
        req
      );
      errorPOST = true;
      res.redirect("/articles/new");
    });
});

router.put("/:title", (req, res) => {
  let urlTitle = req.body.title.replace(/ /g, "-");

  if (urlTitle !== req.params.title) {
    return req.db.Article.forge({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      urlTitle: urlTitle
    })
      .save(null, { method: "insert" })
      .then(results => {
        return req.db.Article.where({ urlTitle: req.params.title }).destroy();
      })
      .then(results => {
        res.redirect(`/articles/${urlTitle}`);
      })
      .catch(err => {
        globalError = throwError(400, "Article not found.", req);
        errorPUT = true;
        res.redirect(`${req.params.title}/edit`);
      });
  }

  return req.db.Article.where({ urlTitle: req.params.title })
    .set({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      urlTitle: urlTitle
    })
    .save()
    .then(results => {
      res.redirect(`/articles/${urlTitle}`);
    })
    .catch(err => {
      globalError = throwError(400, "Article not found.", req);
      errorPUT = true;
      res.redirect(`articles/${req.params.title}/edit`);
    });
});

router.delete("/:title", (req, res) => {
  return req.db.Article.where({ urlTitle: req.params.title })
    .destroy()
    .then(results => {
      res.redirect("/articles");
    })
    .catch(err => {
      globalError = throwError(
        500,
        `Cannot delete article called ${req.params.title}`,
        req
      );
      errorDELETE = true;
      res.redirect(`articles/${req.params.title}`);
    });
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
