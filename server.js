require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    const ipAddress = req.socket.remoteAddress
    return res.send(ipAddress)
})





app.listen(PORT, () => {
    console.log("App running on port: ", PORT)
})