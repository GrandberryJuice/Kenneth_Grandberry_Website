// will contain all Portfolio Routes

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: false 
}))

// TODO: Change file path
//const Portfolio = require('../Portfolio/user')

// // TODO: Connect mongoose
// mongoose.connect (

// )

router.get("/Portfolio", (req, res) => {
    res.send("This portfolio page is currently under construction")
    console.log("Arrive to main Portfolio page")
    res.end()
})

router.get("/portfolioData", (req, res) => {

})

module.exports = router