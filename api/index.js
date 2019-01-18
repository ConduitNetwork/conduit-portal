module.exports = (router) => {

  // API controllers/routing
  router.use('/api', require('./controllers')(router));

  // catchall api route
  router.use('/api/*', (req, res) => {
    res.sendStatus(404)
  });

  return router;
}
