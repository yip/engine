'use strict';

var Conglomeration = require('../common/models/Conglomeration');
var DB = require('../common/util/db');
var when = require('');

/**
 *
 * @param config
 * @param config.core
 * @param config.rules
 * @constructor
 */
function Main(config) {
    this.firebase = config.firebase;
    this.initialize();
}

Main.prototype.initialize = function () {
    this.db = new DB(this, {
        firebase: config.firebase
    });
};

Main.prototype.onReport = function (report) {
    console.info('A report has arrived ', report);


    // query the database for a conglomeration that fits the bill
    // if there's none, create a new conglomeration
};

module.exports = Main;