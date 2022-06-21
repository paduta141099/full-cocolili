const mongoose = require("mongoose");
const photoSchema = new mongoose.Schema({
  imgURL: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Model",
  },
});

let Photo = mongoose.model("Photo", photoSchema);

module.exports = { Photo };
