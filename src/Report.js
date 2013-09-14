'use strict';

var Model = require('./util/Model');

/**
 * 1st Class Entity under Yip
 * A Report
 */
module.exports = Model.extend({

	name : 'report',

	defaults: {
		"name" : "Unnamed event",
		"description" : "",
		"reporter" : 1,
		"updates" : [],
		"time_start" : 1433804400000,
		"time_end" : 1381359600000,
		"timezone" : "GMT",
		"location" : [0,0],
		"tags" : [],
		"importance" : 0,
		"upvotes" : 0,
		"downvotes" : 0,
		"editable" : true,
		"category" : ""
	},

	init: function() {

	}

});