const express = require('express')
const app = express()
const config = require('./config')
const db = require('./db')


app.get('/', async (req, res) => {
    try {
        await db.authenticate();
        
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await db.close()
    }
    res.send("Hello world")
})

app.listen(config.PORT, () => {
    console.log(`Node.js est à l\'écoute sur le port ${config.PORT}`)
})

module.exports = app