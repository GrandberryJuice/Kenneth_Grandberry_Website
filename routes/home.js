// will contain all Home routes

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded( {extended: false }))

//const Home = require('../home/user');

// TODO: Remove test connection
// mongoose.connet (
//     "mongodb://" + process.env.MONGO_ATLAS_DEV_USER + ":" + process.env.MONGO_ATLAS_PW + "@changepot-shard-00-00-1ogqy.mongodb.net:27017,changepot-shard-00-01-1ogqy.mongodb.net:27017,changepot-shard-00-02-1ogqy.mongodb.net:27017/test?ssl=true&replicaSet=Changepot-shard-0&authSource=admin&retryWrites=true"
// )

router.get("/",(req,res) => {
    res.render('home')
})

// Fetch all data
router.get("/homeData", (req,res) => {
    
})

module.exports = router