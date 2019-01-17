'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()
const router = express.Router()

router.use(compression())

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(awsServerlessExpressMiddleware.eventContext())


// Image server
router.get('/api/images/:filename', (req, res) => {
  res.sendFile(`${__dirname}/images/${req.params.filename}`)
})

// API routes
app.use(require('./api')(router));

// Export your express server so you can import it in the lambda function.
module.exports = app
