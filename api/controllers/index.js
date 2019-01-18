module.exports = (router) => {

  router.use('/users', require('./v1/users')(router));

  return router;
}
