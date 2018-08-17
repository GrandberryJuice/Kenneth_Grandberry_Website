const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

var http = require('http')
var fs = require('fs')

router.use(bodyParser.urlencoded( {extended: false }))

// TODO: - Add content-tye and status code

router.get("/",(req,res) => {
    res.render('home')
})

// Fetch all data
router.get("/homeData", (req,res) => {
    
})

module.exports = router