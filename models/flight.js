const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = {
    airline: {type: String, enum: ['Southwest', 'United', 'American', 'Dodo']},
    airport: {type: String, enum: ['AUS', 'CMH', 'DEN', 'LAX', 'JFK', 'LGA']},
    flightNo: {type: Number, 
        default: parseInt(Math.floor(Math.random()*(9999 - 10) + 10))
        },
    departs: {type: Date, 
        default: function() {
            return (Date.now() + 365*24*60*60*1000)
}}
}

module.exports = mongoose.model('Flight', flightSchema)