
'use strict';

var log = require('./util/logger');
var _ = require('lodash');

var Report = require('../common/models/Report');
var User = require('../common/models/User');
var ReportUpdate = require('../common/models/ReportUpdate');

var DB = require('../common/util/DB');

module.exports = Core;

function Core(config) {

	if (!(this instanceof Core)) {
		return new Core(config);
	}

	var engine = this;

	if (!config.database) {
		throw new Error('No database provided in Core configuration');
	}

	this.db = new DB(config.database);

}

Core.prototype = {
	getReports: function() {
		return this.db.get('reports');
	},
	addReport: function(data) {
		return this.db.add('reports', Report(data), 'created');
	}
};
