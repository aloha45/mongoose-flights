const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = {
    airline: {type: String, enum: ['Southwest', 'United', 'American', 'Dodo']},
    airport: {type: String, enum: ['AUS', 'CMH', 'DEN', 'LAX', 'JFK', 'LGA']},
    flightNo: {type: Number, 
        default: parseInt(Math.floor(Math.random()*(9999 - 10) + 10))
        },
    departs: Date
}

module.exports = mongoose.model('Flight', flightSchema)