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

    const result = new Student(req.body)
    result.save().then(() => {
        res.status(201).send(result)
    }).catch((e) => {
        res.status(400).send("Error :" + e)
    })
})


app.listen(port, () => {
    console.log(`The App Is Running on  http://localhost:${port} `)
})