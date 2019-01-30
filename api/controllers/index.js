module.exports = (router) => {

  router.use('/auth',  require('./v1/auth')(router));
  router.use('/users', require('./v1/users')(router));

  return router;
}
