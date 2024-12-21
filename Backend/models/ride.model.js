const moongose = require('mongoose');
const { distinct } = require('./user.model');



const rideSchema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Captain',
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration: {
        type: Number,
    }, // in seconds
    distance: {
        type: Number,
    }, // in meters
    paymentId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    signature: {
        type: String,
    },

    otp: {
        type: String,
        select: false
    },
});

module.exports = moongose.model('Ride', rideSchema);