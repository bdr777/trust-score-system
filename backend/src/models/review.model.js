const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },

    isFake: {
      type: Boolean,
      default: false
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);