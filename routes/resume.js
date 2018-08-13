const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: false
}))

router.get("/Resume", (req, res) => {
    res.send("Auto update")
    console.log("Arrived to Resume page")
    res.end()
})

module.exports = router