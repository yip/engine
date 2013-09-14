var rules = require('./validationRules');

//TODO: sanitation, error messages
var Validation = function(model) {

	var modelRuleSet = model.name ? rules[model.name] : rules,
		hasOwn = {}.hasOwnProperty,
		key, ruleString, func = 'var value = arguments[0];\r\n var isValid=true;\r\n', str;

	model.rules = model.rules || {};

	for (var i in model.defaults) {
		if (hasOwn.call(model.defaults, i) && modelRuleSet[i]) {
			func = 'var isValid=true;\r\n';
			ruleString = modelRuleSet[i].split(', ');
			for (var a = 0, len = ruleString.length ; a < len ; a++) {
				str = ruleString[a].trim();
				if(!str.indexOf('is ')) {
					func += ' if (typeof value !== "' + str.substr(3) + '"){isValid = false}\r\n';
				} else if (!str.indexOf('test ')) {
					func += ' if (!' + str.substr(5) + '.test(value)){isValid = false}\r\n';
				} else if (!str.indexOf('assert ')) {
					func += ' if (!value' + str.substr(7) + '){isValid = false}\r\n';
				}
			}
			func += 'return isValid;';

			model.rules[i] = new Function('value', func);
		}
	}
};

module.exports = Validation;