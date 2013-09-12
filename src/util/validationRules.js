var validationRules = {
    user : {
        "name" : "is string, assert >1",
        "surname" : "is string",
        "reputation" : "is number",
        "level" : "is number, assert >0",
        "twitter" : "is string, test /^@?(\w){1,15}$/",
        "email" : "is string",
        "bio" : "is string",
        "picture" : "is string"
    }

};

module.exports = validationRules;