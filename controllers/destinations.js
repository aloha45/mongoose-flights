const Flight = require ('../models/flight');
const flights = require('./flights');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (!req.body.departs) {
            let redate = new Date();
            redate.setFullYear(redate.getFullYear()+1);
            req.body.departs = redate
        }
        flight.destinations.push(req.body);
        console.log(flight)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
