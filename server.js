var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 8080);

// Angular Pages

var pages = [
  '/',
  '/register',
  '/contact'
].map(function(path) {
  server.route({
    method: 'GET',
    path: path,
    handler: function() {
      var response = new Hapi.response.File('./public/index.html');
      this.reply(response);
    }
  });
});

// Static

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './public', listing: false }
  }
});

server.route({
  method: 'GET',
  path: '/bower_components/{path*}',
  handler: {
    directory: { path: './bower_components', listing: false, index: true }
  }
});

// Start the server

server.start(function() {
  console.log('Server running 8080')
});