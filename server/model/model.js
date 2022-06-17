const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
  },
});

const photoSchema = new mongoose.Schema({
  modelName: {
    type: String,
    require: true,
  },
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
  author: {
    type: String,
  },
});
let Photo = mongoose.model("Photo", photoSchema);
let Collection = mongoose.model("Collection", collectionSchema);

module.exports = { Photo };
