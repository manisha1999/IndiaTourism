const express = require("express");
const culturalFestivalsByState = require("../data/culturalFestivals.js");

const router = express.Router();

router.get('/api/festivals', async (req, res) => {
  const state = req.query.state;
  console.log(state)

  if (!state) {
    return res.status(400).json({ error: 'State query parameter is required.' });
  }

  const festivals = culturalFestivalsByState[state];

  if (!festivals) {
    return res.status(404).json({ error: `No festivals found for "${state}".` });
  }

  return res.json({ state, festivals });
});

module.exports = router;
