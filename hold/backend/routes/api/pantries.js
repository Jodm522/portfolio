const express = require("express");
const router = express.Router();
const { Pantry } = require("../../db/models");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let pantries = await Pantry.findAll({
    where: { ownerId: id },
  });
  res.json(pantries);
});
module.exports = router;
