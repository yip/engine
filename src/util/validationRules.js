var validationRules = {
	user : {
		"name" : "is string, assert .length>0",
		"surname" : "is string",
		"reputation" : "is number",
		"level" : "is number, assert >0",
		"twitter" : "is string, test /^@?(\w){1,15}$/",
		"email" : "is string",
		"bio" : "is string",
		"picture" : "is string"
	},

	report : {
		"updates" : "is array",
		"time_start" : "is number",
		"time_end" : "is number",
		"location" : "is array",
		"tags" : "is array",
		"editable" : "is boolean"
	}

};

module.exports = validationRules;