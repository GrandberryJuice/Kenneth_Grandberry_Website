// This will hold all contact routes

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: false
}))

//const Contact = require('../contact/user');

// TODO: Connect to mongoose
// mongoose.connect(

// )

router.get("/Contact", (req, res) => {
    res.send("This Contact page is currently under construction")
    console.log("Arrive to contact page")
    res.end()
})

module.exports = router
