'use strict';

var expect = require('chai').expect;
var ReportUpdate = require('../src/ReportUpdate');

describe('ReportUpdate', function() {
	it('Has correct defaults', function() {
		expect(new ReportUpdate().get()).to.eql({
			contentType: '',
			content: {}
		});
	});
});