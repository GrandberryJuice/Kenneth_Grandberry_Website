const express = require('express')
const app = express()

// Routes
const home = require('./routes/home.js')
const blog = require('./routes/blog.js')
const portfolio = require('./routes/portfolio.js')
const resume = require('./routes/resume.js')
const contact = require('./routes/contact.js')

app.use(express.static('public'))

app.use(home)
app.use(blog)
app.use(portfolio)
app.use(resume)
app.use(contact)

app.set('view engine', 'ejs')

app.listen(3009, () => {
    console.log("Server up and running....")
})