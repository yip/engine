'use strict';

var _ = require('lodash');
var util = require('../util/util');

module.exports = function(data) {
	return _.extend({
		meta: {},
		data: {},
		created: +new Date,
		id: util.uuid('report-update')
	}, data);
}