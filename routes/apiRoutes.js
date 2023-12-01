const express = require('express');
const { getAllApi } = require('../controllers/apiController');

const router = express.Router();

router.route('/').get(getAllApi)
// router.route('/testing').get(getAllProductsTesting)




module.exports = router;