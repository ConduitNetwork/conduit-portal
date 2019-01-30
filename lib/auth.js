const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const config = require('../config/auth')[process.env.NODE_ENV];

// Whitelist public API Routes
const publicRoutes = ['auth'];

const USERS = [
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

auth.validPassword = (password) => {
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

auth.validateToken = (req, res, next) => {
  let tokenValid = true;
  if( tokenValid ) next();
}

module.exports = auth;
