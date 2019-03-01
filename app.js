'use strict';

require( 'dotenv' ).config();

const path          = require( 'path' );
const express       = require( 'express' );
const bodyParser    = require( 'body-parser' );
const cors          = require( 'cors');
const compression   = require( 'compression' );
const awsMiddleware = require( 'aws-serverless-express/middleware' );
const app           = express();
const router        = express.Router();
const auth          = require( './lib/auth' );
const expressJwt    = require( 'express-jwt' );

router.use( compression() );
router.use( cors() );
router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({ extended: true }) );
router.use( awsMiddleware.eventContext() );

// servic static assets
app.use( express.static( 'public' ));

// auth validation
auth.validateAuthToken( app );

// image server
router.get( '/api/images/:filename', ( req, res ) => {
  res.sendFile( `${__dirname}/images/${req.params.filename}` )
})

// API routing
app.use( require('./api')( router ));

// Export your express server so you can import it in the lambda function.
module.exports = app
