const asyncHandler = require("express-async-handler");
const router = require("express").Router();

const { room } = require("./schema");

router.route("/").post(
  asyncHandler(async (req, res) => {
    if (!req.body) {
      res.status(400);
      throw new Error("no data provided");
    }

    const response = await room.create({
      host: req.body.host,
      roomName: req.body.roomName,
      roomRounds: req.body.roomRounds,
      word: req.body.word,
    });
    res.json(response);
  })
);

router.route("/:id").get(
  asyncHandler(async (req, res) => {
    const response = await room.findById(req.params.id);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400);
    }
  })
);

module.exports = router;
