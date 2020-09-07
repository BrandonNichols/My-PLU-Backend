const express = require("express");
const Produce = require("./plu-models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const produce = await Produce.getProduce();
    res.status(200).json(produce);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
