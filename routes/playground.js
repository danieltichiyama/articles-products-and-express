const express = require("express");
const router = express.Router();

router.get("/playground", (req, res) => {
  res.render("playground", { error: null });
});

module.exports = router;
