const asyncHandler = require("express-async-handler");
const router = require("express").Router();

const { player } = require("./schema");
router.route("/").post(
  asyncHandler(async (req, res) => {
    if (!req.body) {
      res.status(400);
      throw new Error("no data specified");
    }
    const response = await player.create({ name: req.body.name });
    res.status(200).json(response);
  })
);
router.route("/:id").get(
  asyncHandler(async (req, res) => {
    const response = await player.findById(req.params.id);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400);
    }
  })
);
module.exports = router;
