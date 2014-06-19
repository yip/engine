var DB = require('./DB');
var geofire = require('./geofire');
var util = require('util');


function GeoDB() {};


GeoDB.methods = {
    firebase : {}
};

var firebaseInterface = DB.methods.firebase;
var geoFirebaseInterface = GeoDB.methods.firebase;

console.log(DB.prototype)
util.inherits(GeoDB, DB);

GeoDB.prototype.methods.firebase.init = function () {
    super_.call.init();
    this.geo = new geofire(this.fb);
};


