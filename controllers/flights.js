const Flight = require("../models/flight");


module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
};

function create(req, res) {
    if (!req.body.departs) {
        let redate = new Date();
        redate.setFullYear(redate.getFullYear()+1);
        req.body.departs = redate
    }
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

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}