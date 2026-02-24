require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect(process.env.MONGO_URL)

app.use('/api/auth', require('./routes/auth.routes.js'))

app.use('/', (req, res) => {
    res.status(200).json({ message: `task runing api runing...${process.env.NODE_ENV}` })
})

mongoose.connection.once('open', () => {
    console.log('db connected');
    app.listen(process.env.PORT, () => {
        console.log('server runing');

    })

})

module.exports = app