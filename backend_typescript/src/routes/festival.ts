import express, { Request, Response } from 'express';
import { culturalFestivalsByState } from '../data/culturalFestivals';

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<any> => {
  const state = req.query.state as string;

  if (!state) {
    return res.status(400).json({ error: 'State query parameter is required.' });
  }

  const festivals = culturalFestivalsByState[state];

  if (!festivals) {
    return res.status(404).json({ error: `No festivals found for "${state}".` });
  }

  return res.json({ state, festivals });
});

export default router;
