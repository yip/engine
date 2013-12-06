'use strict';

var uuid = require('node-uuid');

module.exports = {
	uuid: function(prefix) {
		return prefix + '-' + uuid.v1();
	}
};