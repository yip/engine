'use strict';

var _ = require('lodash');

var logger = module.exports = function() {
	return logger.log.apply(logger, arguments);
};

logger.log = function() {
	var args = Array.prototype.slice.call(arguments);
	args.unshift('YIP:: ');
	return console.log.apply(console, args);
};
