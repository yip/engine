//TODO oauth
var Model = require('./../util/Model');
var https = require('https');

module.exports = Model.extend({

    defaults : {
        baseUrl : 'https://api.twitter.com/1.1/search/tweets.json',
        q : '@event',                                                  // search query
        geocode : '37.781157,-122.398720,1km',
        result_type : 'recent',                                        // can be recent, popular, mixed
        count : 100,                                                   // 100 is the max allowed from twitter
        since_id : null                                                // for multiple searches in succession
    },

    getQuery : function () {
        var query =  this.get('baseUrl') + '?',
            props = this.get();
        for (var i in props) {
            if (props.hasOwnProperty(i) && props[i] && i !== 'baseUrl') {
                query += ( i + '=' + props[i] + '&');
            }
        }
        return query;
    },

    executeQuery : function () {
        https.get(this.getQuery(), function(res) {
            console.log("Got response: " + res.statusCode);
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
    }

});
