'use strict';

module.exports = Rule;

function Rule (config) {
    this.config = config;
    this.weight = config.weight || 1;
}

Rule.prototype.applyRule = function (obj1, obj2) {
    return this.weight;
};