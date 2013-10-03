'use strict';

var catalogue = require('./aggregation_constraints/constraintCatalogue');

module.exports = Radar;

function Radar () {
    this.threshold = 10; // under that threshold the relationship won't be established
    this.relationships = [];
}

Radar.prototype.establishRelationship = function(caller, candidate) {
    var weight = 0;
    for (var index in catalogue) {
        weight += catalogue[index].runRules(caller, candidate);
    }
    if (weight >= this.threshold) {
        this.relationships.push({
            id : candidate.get(id),
            weight : weight
        })
    }
};