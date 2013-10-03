'use strict';

var Constraint = require('./baseConstraint');
var _ = require('lodash');

module.exports = new (_.extend(Constraint, {
    /**
     * This rule can be applied only if a time is present
     * @param report
     * @returns {*|Array|.writable.get|.readable.get|req.get|String}
     */
    accepts : function (report) {
        return report.get('time_start') || report.get('time_end');
    }
}))({rules : {
        timeIsSimilarRule : {
            weight : 10,
            range : 100000
        },
        timeOverlapsRule : {
            weight: 100
        }
    }});