const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const config = require('../config/auth')[process.env.NODE_ENV];

const USERS = [
  {
    email: 'demo@user.com',
    uuid: '00012',
    password: 'password',
    id: 1
  },
  {
    email: 'user1@email.com',
    uuid: '12345',
    password: 'password',
    id: 1
  },
  {
    email: 'user2@email.com',
    uuid: '98765',
    password: 'password',
    id: 2
  }
]

auth = {}

auth.publicRoutes = [
  /\/api\/auth\/*/,
  /\/api\/images\/*/,
  /\/api\/users\/*/,
  /\/api\/jobs\/*/,
  /\/api\/projects\/*/
];


auth.validPassword = ( password ) => {
  password = password.trim()

  // alphanumeric and more than 8 characters
  if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/.test( password )) {
    return password;
  }
  else {
    return false;
  }

}


auth.createPassword = () => {
  auth.validPassword( req.body.password )
}


auth.authenticate = ( req, res ) => {
  const user = USERS.find( user => user.email === req.body.email );

  if( !user || ( user.password !== req.body.password )) {
    res.sendStatus(401);
  }
  else {
    let userProfile = user;
    delete userProfile.password;

    let token = jwt.sign( userProfile, process.env.APP_SECRET, config );

    res.json({ token });
  }
}


auth.validateAuthToken = ( app ) => {
  // Send SPA index with non-api routes
  app.use(( req, res, next ) => {
    if( /^(?!\/api).*$/.test( req.path )) {

      res.status( 200 ).sendFile( 'index.html', { 'root': 'public' });
    }
    else {
      next();
    }
  })
  // Validate/authenticate requests
  app.use( expressJwt({
    secret: process.env.APP_SECRET,
    credentialsRequired: true
  })
  .unless({
    path: [ ...auth.publicRoutes ]
  }));

  app.use(( err, req, res, next ) => {
    console.log(err)
    if( err ) {
      res.status( err.status ).send({ message: err.message })
    }
    else {
      next();
    }
  })
}


module.exports = auth;
