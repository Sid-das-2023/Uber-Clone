const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');

async function getFare(origin, destination) {
    if(!origin || !destination) {
        throw new Error('Pickup or destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(origin, destination);

    const baseFare = {
        auto: 20, // base fare for auto
        car: 30, // base fare for car
        motorcycle: 10 // base fare for motorcycle
    };

    const fareRates = {
        auto: 10, // rate per km for auto
        car: 15, // rate per km for car
        motorcycle: 6 // rate per km for motorcycle
    };

    const timeRates = {
        auto: 2, // rate per minute for auto
        car: 3, // rate per minute for carp
        motorcycle: 1 // rate per minute for motorcycle
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * fareRates.auto) + (distanceTime.duration.value / 60 * timeRates.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * fareRates.car) + (distanceTime.duration.value / 60 * timeRates.car)),
        motorcycle: Math.round(baseFare.motorcycle + ((distanceTime.distance.value / 1000) * fareRates.motorcycle) + (distanceTime.duration.value / 60 * timeRates.motorcycle))
    };

    return fare;
}

module.exports.getFare = getFare;

function getOTP(num) {
    if (!num || num <= 0) {
        throw new Error('Number of digits must be greater than 0');
    }

    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
};

module.exports.createRide = async ({
    userId,
    origin,
    destination,
    vehicleType
}) => {
    if(!userId || !origin || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }
    const fare = await getFare(origin, destination);
    const ride = rideModel.create({
        user: userId,
        origin,
        destination,
        otp: getOTP(6),
        fare: fare[vehicleType]
    });

    return ride;
};

