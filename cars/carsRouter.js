const db = require("../data/dbConfig.js");
const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db("cars")
    .select("*")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error getting all cars"
      });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .select("*")
    .where({ id: req.params.id })
    .then(car => {
      if (car.length > 0) res.status(200).json(car[0]);
      else
        res.status(400).json({
          message: "no Car With this ID"
        });
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error getting car data"
      });
    });
});
module.exports = router;
