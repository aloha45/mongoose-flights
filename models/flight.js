const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = {
    airline: {type: String, enum: ['Southwest', 'United', 'American', 'Dodo']},
    airport: {type: String, enum: ['AUS', 'CMH', 'DEN', 'LAX', 'JFK', 'LGA']},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: {type: Date, default: new Date(Date.now() + 365*24*60*60*1000), required: true}, 
    }

module.exports = mongoose.model('Flight', flightSchema)