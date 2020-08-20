const Flight = require("../models/flight");


module.exports = {
    new: newFlight,
    create,
    index
};

function newFlight(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    Flight.create(req.body)
    .then(flight => {
        console.log(flight)
        res.redirect('/flights')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/flights')
    })
}

function index(req, res){
    Flight.find({})
    .then(flights => {
        res.render('flights/index', {title: 'All Flights', flights})
    })
}