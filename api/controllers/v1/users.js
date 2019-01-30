
module.exports = (router) => {

  router.get('/users', (req, res) => {
    res.json(users)
  })

  // Ephemeral in-memory data store
  const users = [{
    id: 1,
    name: 'Joe'
  }, {
    id: 2,
    name: 'Jane'
  }]
  let userIdCounter = users.length

  const getUser = (userId) => users.find(u => u.id === parseInt(userId))
  const getUserIndex = (userId) => users.findIndex(u => u.id === parseInt(userId))


  return router;

}
