'use strict';

var expect = require('chai').expect;
var User = require('../src/User');

describe('User', function() {
	it('Has correct defaults', function() {
		expect(new User().get()).to.eql({
			id: null,
			name: '',
			email: '',
			twitter: ''
		});
	});
});