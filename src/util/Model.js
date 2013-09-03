'use strict';

var _ = require('lodash');
var when = require('when');
var Firebase = require('firebase');

var hasOwn = {}.hasOwnProperty;
var toString = {}.toString;

module.exports = Model;

/**
 * Model Class
 */
function Model(data, engine) {
	this.data = _.extend({}, this.defaults, data || {});
	this.engine = engine;

	this._isSynced = false; // is synced to db via engine?

	// Ref is fully qualified UID/URI of record in DB
	this.ref = typeof this.ref == 'function' ? this.ref : makeInterpolator(this.ref || '');

	this.init && this.init();

	this.__initPromise__ = this._spawnPromise(function(resolve, reject, notify) {
		// This
	});
}

/**
 * Extends the Model prototype.
 * Effectively creates a new subclass of Model
 */
Model.extend = function(props) {
	var Constructor = hasOwn.call(props, 'constructor') ? props.constructor : function ModelSubClass() {
		Model.apply(this, arguments);
	};
	Constructor.prototype = Object.create(this.prototype);
	for (var i in props) {
		if (hasOwn.call(props, i)) {
			Constructor.prototype[i] = props[i];
		}
	}
	for (var i in this) {
		if (hasOwn.call(this, i)) {
			Constructor[i] = this[i];
		}
	}
	return Constructor;
};

/**
 * Creates a new subclass instance of Model with the passed
 * methods as the prototype.
 */ // misleading due to meaning of 'creating' e.g. A User
//Model.create = function(props) {
//	return new (Model.extend(props))();
//};

Model.fromId = function(id) {
	return this.engine.db.createModelFromId(this, id);
};

/**
 * Borrow Node's EventEmitter API
 */
Model.prototype = Object.create(require('events').EventEmitter.prototype);

_.extend(Model.prototype, {

	defaults: {},

	set: function(k, v) {
		if (toString.call(k) === '[object Object]') {
			for (var i in k) {
				if (hasOwn.call(k, i)) {
					this.data[i] = k[i];
				}
			}
		} else {
			this.data[k] = v;
		}
	},

	get: function(k) {
		if (k === void 0) {
			return _.extend({}, this.data);
		}
		return this.data[k];
	},

	_spawnPromise: function(fn) {
		return when.promise(fn);
	}

});

/**
 * https://gist.github.com/padolsey/6008842
 * Outputs a new function with interpolated object property values.
 */
var makeInterpolator = (function() {
  var rc = {
    '\n': '\\n', '\"': '\\\"',
    '\u2028': '\\u2028', '\u2029': '\\u2029'
  };
  return function makeInterpolator(str) {
    return new Function(
      'o',
      'return "' + (
        str
        .replace(/["\n\r\u2028\u2029]/g, function($0) {
          return rc[$0];
        })
        .replace(/\{([\s\S]+?)\}/g, '" + o["$1"] + "')
      ) + '";'
    );
  };
}());
