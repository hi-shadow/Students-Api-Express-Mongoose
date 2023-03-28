const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: [true, "Name Can't Be Blank"],
        minlength: 1
    },
    Email: {
        type: String,
        required: [true, "Email Can't Be Blank"],
        unique: [true, "Email Address Already Have Registed"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Address")
            }
        }
    },
    Phone: {
        type: Number,
        minlength: 9,
        maxlength: 12
    },

    Address: {
        type: String,
        required: [true, "Address Can't Be Blank"]
    },
    Date: {
        type: Date,
        default: Date.now

    }

})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student