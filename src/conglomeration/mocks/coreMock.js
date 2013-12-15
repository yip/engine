'use strict';

var Main = require('../main'),
    source = require('./sources/random'),
    interval,
    main;

function CoreMock () {};

CoreMock.prototype.initialize = function () {
    main = new Main();
    this.startTimer();
};

CoreMock.prototype.startTimer = function () {
    var callback = this.sendReport.bind(this);
    interval = setInterval(callback, 5000);
};

CoreMock.prototype.createReport = function () {
    return source.report();
};

CoreMock.prototype.sendReport = function() {
    var report = this.createReport();
    main.onReport.call(main, report);
};

CoreMock.prototype.stop = function() {
    clearInterval(interval);
};

module.exports = new CoreMock().initialize();