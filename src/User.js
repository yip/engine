'use strict';

var Model = require('./util/Model');

/**
 * 1st Class Entity under Yip
 * A User
 */
var User = Model.extend({

	ref: 'https://{firebaseName}.firebaseio.com/users/{id}',

	defaults: {
        "name" : "",
        "surname" : "",
        "reputation" : 0,
        "level" : 1,
        "twitter" : "",
        "email" : "",
        "description" : "",
        "picture" : ""
	},

	init: function() {
		if (!this.data.id) {
			// this.set('id', )
		}
	}

});

module.exports = User;