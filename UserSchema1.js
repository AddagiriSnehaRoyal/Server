const mongoose = require("mongoose");

const UserSchema1  = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    number: {
        type: String,
        required: true
    },

    usn: {
        type: String,
        required: true
    },
     department: {
        type: String,
        required: true
    },
      yearOfStudy: {
        type:String,
        required: true
    },
      semester: {
        type:String,
        required: true
    },
     dob:{
        type: String,
        required: true
     },
     
});

module.exports = mongoose.model("User1", UserSchema1);