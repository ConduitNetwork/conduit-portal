'use strict';

module.exports = ( router ) => {

  // Get all projects
  router.get( '/projects', ( req, res ) => {
    res.status( 200 ).json( [] );
  })

  // Get a project by id
  router.get( '/projects/:id', ( req, res ) => {
    const project = {
      uuid:        "123456789",
      name:        "TensorFlow Example",
      label:       "TensorFlow Example".trim().replace(' ', '-').toLowerCase(),
      routeUrl:    req.path,
      description: "A basic demo of how to run TensorFlow code"
    }
    res.status( 200 ).json( project );
  })

  // Get all jobs of a project
  router.get( '/projects/:id/jobs', ( req, res ) => {
    res.status( 200 ).json( [] );
  })

  return router;

}
