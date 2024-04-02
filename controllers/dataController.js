
const config = require('../config/config');

const getEntries = async (req, res) => {
  try {
    
    const fetch = require('node-fetch');
    
    const response = await fetch(config.apiURL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getEntries };
