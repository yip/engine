'use strict';

module.exports = Constraint;

function Constraint (config) {
    this.config = config;
    this.rules = {};
    this.weight = 0;
    this.init();
}

Constraint.prototype.init = function () {
    var rules = this.config.rules;
    for (var index in rules) {
        if (rules.hasOwnProperty(index)) {
            this.rules[index] = new (require('./rules/' + index))(rules[index])
        }
    }
};

Constraint.prototype.setWeight = function (weight) {
    this.weight = weight;
};

Constraint.prototype.accepts = function (report) {
    return true;
};

Constraint.prototype.runRules = function (obj1, obj2) {
    var rules = this.rules,
        weight = this.weight;
    for (var index in rules) {
        if (rules.hasOwnProperty(index)) {
            weight += rules[index].applyRule.call(this, obj1, obj2);
        }
    }
    return weight;
};

