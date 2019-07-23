'use strict';

let projects = [
  {
    uuid:        "1563897843461",
    name:        "Classification of Iris Flowers",
    description: "Classify iris flowers among three species (setosa, versicolor or virginica)"
  }
]

module.exports = ( router ) => {

  // Get all projects
  router.get( '/projects', ( req, res ) => {
    res.status( 200 ).json( projects );
  })

  // Get a project by id
  router.get( '/projects/:id', ( req, res ) => {
    res.status( 200 ).json( projects.find(p => { return p.uuid === req.params.id }));
  })

  // Get all jobs of a project
  router.get( '/projects/:id/jobs', ( req, res ) => {
    res.status( 200 ).json( [] );
  })

  return router;

}
