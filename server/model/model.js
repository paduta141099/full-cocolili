// const mongoose = require("mongoose");

// const modelSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   imgURL: {
//     type: String,
//   },
//   collection: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Collection",
//     },
//   ],
// });

// let Model = mongoose.model("Model", modelSchema);

// modelSchema.set("toJSON", {
//   virtuals: true,
// });

// module.exports = { Photo, Collection, Model };

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
    type: String,
  },
  model: {
    type: String,
  },
});

let Photo = mongoose.model("Photo", photoSchema);

module.exports = { Photo };
