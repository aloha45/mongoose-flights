const Flight = require ('../models/flight');
const flights = require('./flights');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, movie) {
        flights.destinations.push(req.body);
        flights.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
