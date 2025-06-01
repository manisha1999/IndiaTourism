import express, { Request, Response } from 'express';
import { ReviewModel } from '../models/Reviews';

const router = express.Router();

// GET reviews by state
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const state = req.query.state as string;
    if (!state) return res.status(400).json({ error: "Missing state parameter" });

    const reviews = await ReviewModel.find({ state }).sort({ date: -1 });
    res.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// POST new review
router.post('/', async (req: Request, res: Response) : Promise<any> => {
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

export default router;
