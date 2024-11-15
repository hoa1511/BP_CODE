const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storageController');

router.get('/data', storageController.getStorageData);
router.get('/chartData', storageController.getChartData);
module.exports = router;
