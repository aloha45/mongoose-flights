const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'CMH', 'DEN', 'LAX', 'JFK', 'LGA']},
    arrival: Date
}, {
    timestamps:true
});

const flightSchema = new Schema({
    airline: {type: String, enum: ['Southwest', 'United', 'American', 'Dodo']},
    airport: {type: String, enum: ['AUS', 'CMH', 'DEN', 'LAX', 'JFK', 'LGA']},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)