const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Meetup = require("../models/meetup");

router.get("/", (req, res, next) => {
  Meetup.find({})
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/add", (req, res, next) => {
  const meetup = new Meetup({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    image: req.body.image,
    address: req.body.address,
    description: req.body.description,
  });
  meetup
    .save()
    .then((result) => {
      res.status(200).json({
        createMeetup: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
