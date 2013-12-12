'use strict';

var eventEmitter = require('events').EventEmitter;
var util = require("util");


var Criterium = function (config) {
    this.config = config;
    if (!this.config.silent) {
        this.on('success', this.onSuccess.bind(this)); // report fits the criterium
    }
};

util.inherits(Criterium, eventEmitter);

Criterium.prototype.check = function (config) {
    var success = true;
    if (success) {
        this.emit('success');
    }
};

Criterium.prototype.onSuccess = function (config) {

    this.updateConglomeration(config.attributes, config.conglomeration);

};

Criterium.prototype.updateConglomeration = function (attr, congl) {
    congl.call.update(attr)
};

module.exports = Criterium;