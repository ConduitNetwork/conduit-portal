'use strict';

module.exports = ( router ) => {

  router.get( '/jobs', ( req, res ) => {
    res.status( 200 ).json( [] );
  })

  router.get( '/jobs/:id', ( req, res ) => {
    const job = {
      uuid:        req.params.id,
      starttime:   Date.now(),
      breadcrumb: {
        label:       req.params.id.trim().replace(' ', '-').toLowerCase(),
        routeUrl:    req.path,
        description: `job ${req.params.id}`
      },
      config: {
        managerScriptPath: '',
        workerScriptPath: '',
        computeResources: "1,5120,5120" // Comma seperated string for CPU Cores, RAM(MB), & HDD(MB), Ex: "1,5120,5120"
      },
      status: {
        duration: 0,
        activeWorkers: 2,
        tasksComplete: ""
      },
      variables: [
        {
          key: "SOME_VAR",
          value: "the_value_of_some_var"
        }
      ]
    }
    res.status( 200 ).json( job );
  })

  return router;

}
