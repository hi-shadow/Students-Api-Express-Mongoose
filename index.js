const express = require("express")
const Student = require("./models/students")
require("./db/connection")

const app = express()
const port = process.env.PORT || 8000
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello From The Express.Js ")
})


app.post("/students", async (req, res) => {

    try {
        const student = new Student(req.body)
        const result = await student.save()
        res.send(result).status(201)
    } catch (error) {
        res.send(error).status(400)
    }



})


app.listen(port, () => {
    console.log(`The App Is Running on  http://localhost:${port} `)
})