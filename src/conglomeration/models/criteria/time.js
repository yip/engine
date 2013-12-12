'use strict';

var base = require('criterium');
var util = require("util");
var _ = require('lodash');


var Time = _.extends(base, {

    check : function () {
        var report = this.config.report;
        var conglomeration = this.config.conglomeration;
        var reportTime = report.time;
        var conglomerationTime = conglomeration.time;

        if ((reportTime.start <= conglomerationTime.end &&
            reportTime.end >= conglomerationTime.start)) {
                this.emit('success');
        }
    }


});


module.exports = Time;