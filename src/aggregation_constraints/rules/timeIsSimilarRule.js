'use strict';

var Rule = require('./baseRule');
var _ = require('lodash');

module.exports = _.extend(Rule, {
    applyRule : function (obj1, obj2) {

        // the rule needs a range of closeness in the options
        // the rule bears more weight the more the closeness

        var start1 = Math.min(obj1.get('time_start'), obj2.get('time_start')),
            start2 = Math.max(obj1.get('time_start'), obj2.get('time_start')),
            diff = start2 - start1;


        if (diff > this.config.range) {
            return 0;
        } else {
            return this.weight * (this.config.range - diff);
        }

    }
});