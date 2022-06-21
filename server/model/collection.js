const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  genres: {
    type: [String],
  },
  year: {
    type: Number,
  },
});

modelSchema.set("toJSON", {
  virtuals: true,
});

let Collection = mongoose.model("Collection", collectionSchema);
module.exports = { Collection };
