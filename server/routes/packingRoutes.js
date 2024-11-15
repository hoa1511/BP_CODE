const express = require('express');
const router = express.Router();
const packingDataController = require('../controllers/packingDataController');



// Định nghĩa các route cho PackingData
router.get('/packing-data', packingDataController.getPackingData);
router.post('/packing-data', packingDataController.addPackingData);

module.exports = router;

