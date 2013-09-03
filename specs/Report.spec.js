'use strict';

var expect = require('chai').expect;
var Report = require('../src/Report');

describe('Report', function() {
	it('Has correct defaults', function() {
		expect(new Report().get()).to.eql({
			title: '',
			description: '',
			location: [0, 0],
			timeFrom: 0,
			timeTo: Infinity,
			timeExceptions: [],
			updates: [],
			tags: []
		});
	});
});