'use strict';

var Model = require('../../../common/models/Report');

function Random () {
    console.log('Random is alive!')
};

Random.prototype.generateLocation = function () {
    // convention says longitude, then latitude
    var longitudeRange = [-0.489, 0.286];
    var latitudeRange = [51.28, 51.68],
        longitude =  Math.random() * ( longitudeRange[1] - longitudeRange[0]) + longitudeRange[0],
        latitude =  Math.random() * ( latitudeRange[1] - latitudeRange[0]) + latitudeRange[0];
    return [parseFloat(longitude.toFixed(5)), parseFloat(latitude.toFixed(5))];

};

Random.prototype.report = function () {

    return new Model ({
        data : {
            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location : this.generateLocation()
        }
    });


};


module.exports = new Random();