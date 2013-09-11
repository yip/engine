var validationRules = {
    user : {
        "name" : "is string, assert >1",
        "surname" : "is string",
        "reputation" : "is integer",
        "level" : "is integer, assert >0",
        "twitter" : "is string, test /^@?(\w){1,15}$/",
        "email" : "is string",
        "description" : "is string",
        "picture" : "is string"
    }

};

module.exports = validationRules;