var axios = require('axios');
var express = require('express');
var router = express.Router();

const BASE_URL = 'https://www.metaweather.com/api/location'

/* GET search locations */
router.get('/search', async function(req, res, next) {
  const { query, limit = 10 } = req.query
  try {
    if (!query || !query.trim()) {
      return res.json([]);
    }
    const encodedQuery = encodeURI(query.trim())
    const response = await axios.get(`${BASE_URL}/search?query=${encodedQuery}`)
    if (!response || !response.data) {
      return res.json({
        error: 'No location found'
      });
    }
    res.json(response.data.slice(0, limit))
  } catch (error) {
    res.json([]);
  }
});

/* GET location detail */
router.get('/detail', async function(req, res, next) {
  const { id } = req.query
  try {
    if (!id) {
      return res.json({});
    }
    const encodedQuery = encodeURI(id.trim())
    const response = await axios.get(`${BASE_URL}/${id}`)
    if (!response || !response.data) {
      return res.json({
        error: 'No location found'
      });
    }
    res.json(response.data)
  } catch (error) {
    res.json({});
  }
});

module.exports = router;
