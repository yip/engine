'use strict';

var Model = require('./util/Model');

module.exports = Model.extend({

	defaults: {
        "title" : "",
        "reporter" : null,
        "description" : "",
        "time" : 1378743848821,
        "timezone" : "GMT",
        "location" : [51.505955, -0.14863],
        "media" : {
            "media_video" : [],
            "media_pictures" : [],
            "media_audio" : [],
            "media_links" : []
        },
        "tags" : [],
        "importance" : 1,
        "editable" : false,
        "upvotes" : 0,
        "downvotes" : 0
	},

	init: function() {
		
	}

});