
'use strict';

var log = require('./util/logger');
var _ = require('lodash');
var yip = module.exports = {};

var Report = require('./Report');
var User = require('./User');
var ReportUpdate = require('./ReportUpdate');
var DB = require('./util/DB');

var Twitter = require('./external_providers/Twitter');

/**
 * yip.Engine
 * Core class which gives you a unique Yip which will interface with a 
 * specified Firebase instance
 * TODO: Many Things
 */
yip.Engine = function YipEngine(config) {

	var engine = this;

	if (!config.firebase) {
		throw new Error('No firebase provided in YipEngine configuration');
	}

	this.db = new DB(this, {
		firebase: config.firebase
	});

	/**
	 * Exposed both externally and internally (inner-engine) are wrapped versions
	 * of the Yip Model Classes -- they deal with each-other via their wrapped
	 * versions, accessed via the passed engine `this`
	 */
	this.Report = wrapYipModel(Report);
	this.ReportUpdate = wrapYipModel(ReportUpdate);
	this.User = wrapYipModel(User);

	function wrapYipModel(ModelClass) {
		_.extend(WrappedModel, ModelClass);
		WrappedModel.engine = engine;
		function WrappedModel(conf) {
			return new ModelClass(conf, engine);
		}
		return WrappedModel;
	}

};


/*** DEMO -- Testing! ***/

console.log('Start');

var y = new yip.Engine({
	//firebase: 'jp1990'
	firebase: 'bc2013'
});

var u = y.User.fromId('joebloggs');

u.then(function(user) {
	console.log('Ok got something', user.get());

	user.on('change', function() {
		console.log('Something has changed!', user.get());
	});
});

/*var r = new y.Report({
    'id' : 'this is a test',
    'time_start' : 1433804400000,
    'time_end' : 1381359600000
});*/

var twtr = new Twitter();
twtr.set('q', 'fire');
twtr.executeQuery();

console.log('End');
