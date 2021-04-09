if (process.env.NODE_ENV === 'production') {
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
 
/*
module.exports = {
  mongoURI : 'mongodb+srv://maitrik:30112025@portfolioapp.xfi9q.mongodb.net/maitrik?retryWrites=true&w=majority',
  cookiekey: 'q874yqeuiqhkehq834',
  secret: 'sdjakfkdjfakd',
} 
*/