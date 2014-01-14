
/**
 * Module dependencies
 */

var express = require('express'),
  api = require('./api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 8000);
app.use(express.compress());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(function(req, res, next) {
	if(req.url.indexOf("/assets/img") === 0 || req.url.indexOf("/assets/fonts") === 0) {
        res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
        res.setHeader("Expires", new Date(Date.now() + 345600000).toUTCString());
    }
    if(req.url == "/assets/qpham-portfolio-1.0.0.css") {
        res.setHeader("Cache-Control", "public, max-age=86400"); // 1 day
        res.setHeader("Expires", new Date(Date.now() + 86400).toUTCString());
    }
    next();
});
app.use(express.static(path.join(__dirname, '/build')));
app.use(app.router);



// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.use(function(req, res) {
res.sendfile(__dirname + '/build/index.html');
});

// JSON API
app.get('/api/project', api.projects);
app.get('/api/project/:id', api.project);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
