var express = require('express');

// because drakov sux
var drakovMiddleware = require('./node_modules/drakov/index').middleware;
var serveStatic = require('serve-static');

var app = express();

// Serve up public/ftp folder
var serve = serveStatic(__dirname + '/public', {'index': ['index.html', 'index.htm']})

app.use(serve);  // need to have a body parser for the middleware to work

drakovOptions  = {
  sourceFiles: 'docs/**/*.md',
  serverPort: 4007,
  method: ['DELETE','OPTIONS','PUT','POST','GET']
};

// currently need to initialise the middleware asynchronously due to protagonist parse in async
drakovMiddleware.init(app, drakovOptions, function(err, middlewareFunction) {
    if (err) {
        throw err;
    }
    app.use(middlewareFunction);
    app.listen(drakovOptions.serverPort, function() {
        console.log('server started with Drakov middleware on port ' + drakovOptions.serverPort);
    });
});
