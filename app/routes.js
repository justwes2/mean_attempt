//pull in model
const Nerd = require('./models/nerd')

  module.exports = function(app) {
    //server routes (api calls, auth routes)

    //sample api route
    app.get('/api/nerds', function(req, res) {
      //use mongoose to get all nerds in db
      Nerd.fund(function(err, nerds) {
        //if error send error, nothing else will exectute
        if (err)
          res.send(err)
        res.json(nerds)

      })
    })
    //create route goes here (app.post)
    //delete route goes here (app.delete)

    //frontend routes
    //route to handle angular requests
    app.get('*', function(req, res) {
      res.sendfile('./public/views/index.html') //loads index file
    })

  }
