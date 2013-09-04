'use strict';

var Firebase = require('firebase');

/**
 * For now our DB impl just wraps a firebase
 */
function DB(engine, config) {
	this.config = config;
	this.engine = engine;
}

DB.prototype = {

	/**
	 * Creates a Model from an ID using the Firebase API
	 */
	createModelFromId: function(Model, id) {

		var instance = new Model({ id: id });
		var config = this.config;

		return instance._spawnPromise(function(resolve, reject, notify) {

			var isResolved = false;

			var fb = new Firebase(
				instance.ref({
					id: id,
					firebaseName: config.firebase
				})
			);

			fb.on('value', function(value) {
				instance.set(value.val());
				if (!isResolved) {
					resolve(instance);
					isResolved = true;
				}
				instance.emit('change');
			});

			// TODO: Destroy!


		});

	}

};

module.exports = DB;