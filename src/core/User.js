'use strict';

var Model = require('./util/Model');

/**
 * 1st Class Entity under Yip
 * A User
 */
var User = Model.extend({

	ref: 'https://{firebaseName}.firebaseio.com/users/{id}',

	defaults: {
		id: null,
		name: '',
		email: '',
		twitter: ''
	},

	init: function() {
		if (!this.data.id) {
			// this.set('id', )
		}
	}

});

module.exports = User;