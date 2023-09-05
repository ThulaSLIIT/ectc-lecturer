const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
    
    coursename: {
        type: String,
        required: true,
        min: 4,
    },

    batchcode: {
        type: String,
        required: true,
        min: 8,
    },

    month: {
        type: String,
        required: true,
    },

    totalhours: {
        type: String,
        required: true,
    },

    paymentrate: {
        type: String,
        required: true,
    },

 
    paidamount: {
        type: String,
        required: true,
    }

})

module.exports= mongoose.model("Payments",PaymentsSchema)