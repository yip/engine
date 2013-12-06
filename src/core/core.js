
'use strict';

var log = require('./util/logger');
var _ = require('lodash');

var Report = require('./models/Report');
var User = require('./models/User');
var ReportUpdate = require('./models/ReportUpdate');

var DB = require('./util/DB');

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
