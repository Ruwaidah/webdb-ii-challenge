const db = require("../data/dbConfig.js");
const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db("cars")
    .select("*")
    .then(cars => {
      res.status(200).json(cars);
    });
});
module.exports = router;
