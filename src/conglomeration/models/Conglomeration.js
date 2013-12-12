'use strict';

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


module.exports = Conglomeration;