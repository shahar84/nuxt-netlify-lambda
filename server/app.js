'use strict'

const express = require('express')
const path = require('path')
const cors = require('cors')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(cors())

const exampleHandler = require('./src/handlers/example-handler')

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello from Express.js!</h1>')
  res.end()
})
router.get('/example/', exampleHandler)

// router.get("/joke/:id", (req, res) => res.json({ route: req.originalUrl }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/.netlify/functions/app', router) // path must route to lambda

// HTML routing
app.use('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public', '/index.html'))
)

module.exports = app
module.exports.handler = serverless(app)
