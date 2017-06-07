//modules
const express = require('express')
const app = express
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//configuration

//config files
const db = reqire('./config/db')

//set port
const port = process.env.PORT || 8080

//connect to mongoDB
//mongoose.connect(db.url)

//get data of the body POST parameters
//parse application/json
app.use(bodyParser.json())

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//parse application/x-www-for-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//override witht hte x-hhtp-mthod-overrdie header in the request. simulate Delete/Put
app.use(methodOverride('X-HTTP_Method-Override'))

//set static locaton for files
app.use(express.static(__dirname = '/public'))

//routes
require('./app/routes')(app) //configure routes

//start app
app.listen(port)

//confirm message
console.log('listening on port' = port)

//expose app (not sure what this does)
exports = module.exports = app 
