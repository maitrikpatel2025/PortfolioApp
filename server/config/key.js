if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}

/*
  module.exports = {
    mongoURI : 'mongodb+srv://maitrik:30112025@portfoiloapp.pxv03.mongodb.net/maitrik?retryWrites=true&w=majority',
    cookiekey: 'q874yqeuiqhkehq834',
    secret: 'sdjakfkdjfakd',
    awsAccessKeyID:'AKIA42AOF2SKOLC632XD',
    awsSecretAccessKey:'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',
} 
*/