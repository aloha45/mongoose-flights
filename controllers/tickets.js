const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    show
};

function newTicket(req,res) {
    Ticket.find({}, function (err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    })
}

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body)
        .then(ticket => {
            res.redirect(`flights/${req.params.id}/destinations`)
        })
}

function show(req, res) {
    flight.findById(req.params.id, function (err, flight) {
        ticket.find({flight: flight._id, function(err, ticket) {
            res.render(`flights/${flight._id}/destinations`)
        }})
    })
}