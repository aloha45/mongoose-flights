const Flight = {
    airline: {type: String, enum: ['Southwest', 'United', 'American']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'JFK', 'LGA']},
    flightNo: {type: Number, 
        default: (Math.floor(Math.random()*(9999 - 10) + 10))
        },
    departs: Date
}