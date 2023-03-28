const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/StudentsApi").then(() => {
    console.log("MongoDb Connected")
}).catch((err) => {
    console.log("Error Occured : " + err)
})
