/*const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer');
// Assuming you have a database connection or data source

const fetchStatisticsData = async(option) => {
 
  try {
    // Get the relevant data from the Farmers collection based on the option
    let statisticsData = 0;

    if (option === 'Napier Grass') {
      statisticsData = await Farmer.countDocuments({ areaOfNapier: { $exists: true } }).countDocuments();
    } else if (option === 'Cows') {
      statisticsData = await Farmer.countDocuments({ numberOfCows: { $exists: true } }, {dungProduced_inKg : { $exists: true } }, {amountOfMilk_inLitre : { $exists: true } }).countDocuments();
    } else if (option === 'both') {
      statisticsData = await Farmer.countDocuments({
        $and: [{ areaOfNapier: { $exists: true } }, { numberOfCows: { $exists: true } }, {dungProduced_inKg : { $exists: true } }, {amountOfMilk_inLitre : { $exists: true } } ],
      })
    }

  return statisticsData;
  }
  catch (error) {
    console.error('Error fetching statistics data:', error);
    throw error;
  }
};

// Define the route for /api/farmers/statistics
router.get('/api/farmers/statistics', async(req, res) => {
  // Get the option from the query parameters
  const { option } = req.query;

  try {
    // Call the function to fetch the statistics data based on the option
    const statisticsData = await fetchStatisticsData(option);
    res.json({ count: statisticsData });
  } catch (error) {
    console.error('Error fetching statistics data:', error);
    res.status(500).json({ error: 'Failed to fetch statistics data.' });
  }
});

module.exports = router;













/*const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer'); // Assuming you have a Farmer model

// Helper function to fetch statistics data based on the selected option
const getStatisticsData = async (selectedOption) => {
  let statisticsData;

  if (selectedOption === 'Napier Grass') {
    // Fetch statistics data for Napier Grass
    statisticsData = await Farmer.countDocuments({ /* Your filter criteria for Napier Grass  });
  } else if (selectedOption === 'Cows') {
    // Fetch statistics data for Cows
    statisticsData = await Farmer.countDocuments({ /* Your filter criteria for Cows });
  } else if (selectedOption === 'both') {
    // Fetch statistics data for both Napier Grass and Cows
    statisticsData = await Farmer.countDocuments({ /* Your filter criteria for both });
  } else {
    // Invalid selectedOption, return null
    statisticsData = null;
  }

  return statisticsData;
};

// GET request to fetch statistics data based on the selected option
router.get('/:selectedOption', async (req, res) => {
  const { selectedOption } = req.params;

  try {
    const statisticsData = await getStatisticsData(selectedOption);

    if (statisticsData === null) {
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


/*const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer'); // Assuming you have a Farmer model

// GET request to fetch statistics data based on the selected option
router.get('/:selectedOption', async (req, res) => {
  const { selectedOption } = req.params;

  try {
    let statisticsData;

    if (selectedOption === 'Napier Grass') {
      // Fetch statistics data for Napier Grass
      statisticsData = await Farmer.countDocuments({ /* Your filter criteria for Napier Grass );
    } else if (selectedOption === 'Cows') {
      // Fetch statistics data for Cows
      statisticsData = await Farmer.countDocuments({ /* Your filter criteria for Cows );
    } else if (selectedOption === 'both') {
      // Fetch statistics data for both Napier Grass and Cows
      statisticsData = await Farmer.countDocuments({ /* Your filter criteria for both );
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
*/