'use strict';

module.exports = ( router ) => {

  router.post( '/login', ( req, res ) => {
    auth.authenticate( req, res )
  })

  return router;

}
