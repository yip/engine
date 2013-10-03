'use strict';

var Rule = require('./baseRule');
var _ = require('lodash');

module.exports = _.extend(Rule, {
    applyRule : function (obj1, obj2) {

        // the rule bears more weight for events of short duration that completely overlap
        // TODO cater for missing ends / starts
        var start1 = obj1.get('time_start'),
            end1 = obj1.get('time_end'),
            start2 = obj2.get('time_start'),
            end2 = obj2.get('time_end'),
            averageDuration,
            overlap;

        if (end1 >= start2 && start1 <= end2) {
            averageDuration = ((end1 - start1) + ( end2 - start2)) / 2;
            if (end1 <= end2) {
                overlap = (end1 - start2);
            } else {
                overlap = (end2 - start1);
            }
            return this.weight * (overlap / averageDuration);
        } else {
            // no overlap
            return 0;
        }
    }
});