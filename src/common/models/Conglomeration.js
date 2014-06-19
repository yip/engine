'use strict';

var db = require('../util/GeoDB');

function Conglomeration(config) {
    this._config = {
        attributes : {
            time : {
                start : 0,
                end : 0
            },
            location : {
                lat : '0N',
                lon : '0W',
                radius : 0
            },
            title : 'Untitled'
        },
        reports : []
    }
}

Conglomeration.prototype.get = function () {
    return this._config;
};

Conglomeration.prototype.onAddedReport = function () {
    // update the time range
    // update the radius location
    // save conglomeration
};

Conglomeration.prototype.update = function () {

    var i = 0, len = arguments.length;

    for (; i < len; i++) {
        for (var prop in arguments[i]) {
            if (arguments[i].hasOwnProperty(prop)) {
                var val = arguments[i][prop];
                if (typeof val == "object") {
                    this.update(val);
                } else {
                    this._config[prop] = val;
                }
            }
        }
    }
    return val;
};


module.exports = Conglomeration;