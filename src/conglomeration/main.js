'use strict';

var Conglomeration = require('./models/Conglomeration');

/**
 *
 * @param config
 * @param config.core
 * @param config.rules
 * @constructor
 */
function Main(config) {

}

Main.prototype.onReport = function (report) {
    console.info('A report has arrived ', report);
    // query the database for a conglomeration that fits the bill
    // if there's none, create a new conglomeration
};

module.exports = Main;