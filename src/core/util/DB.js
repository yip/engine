'use strict';

var Firebase = require('firebase');
var _ = require('lodash');
var when = require('when');

/**
 * For now our DB impl just wraps a firebase
 */
function DB(config) {

	this.config = config;

	if (!(config.type in DB.methods)) {
		throw new Error('Database type of ' + config.type + ' is not supported');
	}
	_.extend(this, DB.methods[config.type]);
	this.init();

}

DB.prototype = {};

DB.methods = {

	firebase: {

		init: function() {
			this.fb = new Firebase(this.config.name + '.firebaseio.com');
			this.fb.auth(this.config.auth);
		},

		get: function(c) {
			var ref = this.fb.child(c);
			return when.promise(function(resolve, reject, notify) {
				ref.on('value', function(snapshot) {
					if (snapshot.hasChildren()) {
						var arr = [];
						snapshot.forEach(function(ss) {
							arr.push(ss.val());
						});
						resolve(arr);
					} else if (snapshot.val() !== undefined) {
						resolve(snapshot.val());
					} else {
						reject('Could not get ' + c);
					}
				});
			});
		},

		add: function(collection, data, priorityBy) {
			var ref = this.fb.child(collection).child(data.id);
			return when.promise(function(resolve, reject, notify) {
				ref.setWithPriority(data, data[priorityBy], function(result) {
					if (result !== null)
						reject(result);
					else
						resolve(data);
				});
			});
		}

	}

};

module.exports = DB;