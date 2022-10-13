const express = require("express");

const router = express.Router();

const { Items } = require("../../db/models");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let items = await Items.findAll({
    where: { pantryId: id },
  });
  res.json(items);
});
module.exports = router;
