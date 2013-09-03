'use strict';

var Model = require('./util/Model');

/**
 * 1st Class Entity under Yip
 * A Report
 */
module.exports = Model.extend({

	defaults: {
		title: '',
		description: '',
		location: [0, 0],
		timeFrom: 0,
		timeTo: Infinity,
		timeExceptions: [],
		updates: [
			// { contentType, content, ... }
		],
		tags: []
	},

	init: function() {

	}

});