'use strict';

var _ = require('lodash');
var util = require('../../core/util/util');

module.exports = function(data) {
	return _.extend({
		// todo
		created: +new Date,
		id: util.uuid('user')
	}, data);
}