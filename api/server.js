const express = require("express")
const cors = require("cors")

const authRouter = require("./auth")
const postsRouter = require("./items/items")

const db = require("../data/dbConfig")
const restricted = require("./restricted");

const server = express()
server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
  res.status(200).json("You did it!!!")
})

server.get("/api/users", (req, res) => {
    db("users").then(data => {
        res.status(200).json(data)
    })
})

server.get("/api/owners", (req, res) => {
  db("owners").then(data => {
      res.status(200).json(data)
  })
})

server.get("/api/items", restricted, (req, res) => {
  db("items").then(data => {
      res.status(200).json(data)
  })
})

server.use("/api", authRouter)
server.use("/api", postsRouter)

module.exports = server
