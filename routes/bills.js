const express = require("express");
const router = express.Router();

var repo = require("./../models/repo");

var billList = repo.getBills();

router.get("/", (req, res) => {
  res.send(billList.toString());
});

module.exports = router;
