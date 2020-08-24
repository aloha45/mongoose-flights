const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const Ticket = require('../models/ticket');

router.get('/tickets/new', ticketsCtrl.show)
router.post('/tickets', ticketsCtrl.create)
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;