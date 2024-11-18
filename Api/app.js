const express = require('express')
const app = express()
const config = require('./config')
const {PORT} = require("./config");


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(config.PORT, () => {
    console.log(`Node.js est à l\'écoute sur le port ${PORT}`)
})

module.exports = app