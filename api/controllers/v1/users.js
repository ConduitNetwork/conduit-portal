
const Mailchimp = require('mailchimp-api-v3')


module.exports = (router) => {
  const mailchimp = new Mailchimp( process.env.MAILCHIMP_API_KEY );

  router.post('/users/subscribe', (req, res) => {
    mailchimp.post('/lists/336fab50b6/members', {
      email_address : req.body.email,
      status : 'subscribed'
    })
    .then( resp => {
      res.sendStatus( 200 )
    })
    .catch( err => {
      res.status( err.status ).send( err.detail )
    })
  })

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
