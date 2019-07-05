module.exports = ( router ) => {

  router.use( '/auth',     require( './v1/auth' )( router ));
  router.use( '/users',     require( './v1/users' )( router ));
  router.use( '/jobs',     require( './v1/jobs' )( router ));
  router.use( '/projects', require( './v1/projects' )( router ));

  return router;
}
