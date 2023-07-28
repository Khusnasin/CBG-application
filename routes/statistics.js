// routes/api/statistics.js

const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer'); // Assuming you have a Farmer model

// GET request to fetch statistics data based on the selected option
router.get('/:selectedOption', async (req, res) => {
  const { selectedOption } = req.params;

  try {
    let statisticsData;

    if (selectedOption === 'Napier Grass') {
      // Fetch statistics data for Napier Grass
      statisticsData = await Farmer.find({ /* Your filter criteria for Napier Grass */ });
    } else if (selectedOption === 'Cows') {
      // Fetch statistics data for Cows
      statisticsData = await Farmer.find({ /* Your filter criteria for Cows */ });
    } else if (selectedOption === 'both') {
      // Fetch statistics data for both Napier Grass and Cows
      statisticsData = await Farmer.find({ /* Your filter criteria for both */ });
    } else {
      // Invalid selectedOption, return an error response
      return res.status(400).json({ error: 'Invalid selectedOption' });
    }

    // Return the statistics data as the JSON response
    res.json(statisticsData);
  } catch (error) {
    console.error('Error fetching statistics data:', error);
    res.status(500).json({ error: 'Failed to fetch statistics data' });
  }
});

module.exports = router;
