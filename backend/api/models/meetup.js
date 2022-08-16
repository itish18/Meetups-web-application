const mongoose = require("mongoose");

const meetupSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  image: {
    type: String,

    required: false,
  },
  address: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Meetup", meetupSchema);
