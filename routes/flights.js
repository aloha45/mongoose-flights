const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);

module.exports = router;
