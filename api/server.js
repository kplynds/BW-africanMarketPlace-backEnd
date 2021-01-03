const express = require("express")
const cors = require("cors")

const db = require("../data/dbConfig")

const server = express()
server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
  res.status(200).json("You did it!")
})

server.get("/api/users", (req, res) => {
    db("users").then(data => {
        res.status(200).json(data)
    })
})

module.exports = server
