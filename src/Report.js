'use strict';

var Model = require('./util/Model');
var Radar = require('./Radar');

/**
 * 1st Class Entity under Yip
 * A Report
 */
module.exports = Model.extend({

	name : 'report',

	defaults: {
		name: 'Unnamed event',
		description: '',
		reporter: 1,
		updates: [],
		time_start: 1433804400000,
		time_end: 1381359600000,
		timezone: 'GMT',
		location: [0,0],
		tags: [],
		importance: 0,
		upvotes: 0,
		downvotes: 0,
		editable: true,
		category: ''
	},

	init: function() {
        this.radar = new Radar();
        this.engine.db.getModels('/reports', null, function (data) {
            //TODO check the zillion bug in the example rules, plus save the relationships
            this.radar.establishRelationship(this, data.val());
        }, this);
	}

});