const mongoose = require("mongoose");
const validator = require("validator");

const userScheme = mongoose.Schema({

name : {

    type: String,
    required: true,
    minLength: 3
},
 email: {

    type: String,
    required: true,
    validate(value){

        if(!validator.isEmail(value)){
            throw new Error("invalid email id")
        }
    }
},
phone : {

    type: Number,
    required: true,
    min: 10
},
message : {

    type: String,
    required: true
}

})

const User = mongoose.model("User", userScheme);
module.exports = User;