//bring in module
const mongoose = require('mongoose');

//define model
//module.exports allows this to be passed to other files
module.exports =  mongoose.model('Nerd', {
  name : {type : String, default: ''}
})
