// will contain all Blog routes

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: false
}))

// TODO: File structure may need to be changed
//const Blog = require('../blog/user');

// TODO: Add DB connection
// mongoose.connect (

// )

router.get("/Blog", (req, res) => {
    res.send("This Blog page is currently under construction")
    console.log("Arrive to blog page")
    res.end()
})

// Fetch all data
router.get("/blogData", (req, res) => {

})

module.exports = router
