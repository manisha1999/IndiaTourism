const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    state: { type: String, required: true },
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const ReviewModel = model('Review', reviewSchema);
module.exports = ReviewModel
