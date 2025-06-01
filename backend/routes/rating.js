const express = require("express");
const ReviewModel =require('../models/Reviews');

const router = express.Router();

// GET reviews by state
router.get('/api/getreviews', async (req, res) => {
  try {
    const state = req.query.state;
    console.log(state)
    if (!state) return res.status(400).json({ error: "Missing state parameter" });

    const reviews = await ReviewModel.find({ state }).sort({ date: -1 });
    res.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// POST new review
router.post('/api/postreviews', async (req, res) => {
  try {
    const { state, user, rating, comment } = req.body;
    if (!state || !user || !rating || !comment) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newReview = new ReviewModel({ state, user, rating, comment, date: new Date() });
    await newReview.save();

    res.status(201).json({ review: newReview });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Failed to submit review" });
  }
});
module.exports = router;
