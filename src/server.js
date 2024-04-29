require('dotenv').config()
const express = require("express")
const serverless = require("serverless-http")
const app = express()
const PORT = process.env.PORT

const router = express.Router()

router.get("/", (req, res) => {
    const ipAddress = req.socket.remoteAddress
    console.log(ipAddress)
    return res.json({a: ipAddress})
})

router.get("/hello", (req, res) => {
    return res.json({hi: "hello"})
})





app.use("/.netlify/functions/server", router)

module.exports.handler = serverless(app)