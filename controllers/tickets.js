const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {flight, title: 'New Ticket'})
    })
}

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body)
        .then(ticket => {
            res.redirect(`/flights/${req.params.id}`)
        })
}