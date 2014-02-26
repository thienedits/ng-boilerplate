
/**
 * Module dependencies
 */

var express = require('express'),
  fs = require('fs'),
  api = require('./api'),
  contactRepository = require('./api').ContactRepository,
  data_file = 'contacts.json',
  http = require('http'),
  path = require('path');

var app = module.exports = express();
var storage = new contactRepository();


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
app.use(express.static(path.join(__dirname, '/bin')));
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
res.sendfile(__dirname + '/bin/index.html');
});

// JSON API

/**
 * HTTP GET api/project
 * Returns: the list of projects in JSON format
 */
app.get('/api/projects', api.projects);

/**
 * HTTP GET api/project/:id
 * Returns: the project with specified :id in JSON format
 */
app.get('/api/project/:id', api.project);

/**
 * HTTP GET api/states
 * Returns: the list of states in JSON format
 */
app.get('/api/states', api.states);

/**
 * HTTP GET /contacts
 * Returns: the list of contacts in JSON format
 */
app.get('/api/contacts', function (request, response) {
    response.json(storage.findAll());
});
/**
 * HTTP GET /contacts/:id
 * Param: :id is the unique identifier of the contact you want to retrieve
 * Returns: the contact with the specified :id in a JSON format
 * Error: 404 HTTP code if the contact doesn't exists
 */
app.get('/api/contacts/:id', function (request, response) {
    var contactId = request.params.id;
    try {
        response.json(storage.find(contactId));
    } catch (exeception) {
        response.send(404);
    }
    
});
/**
 * HTTP POST /contacts/
 * Body Param: the JSON contact you want to create
 * Returns: 200 HTTP code
 */
app.post('/api/contacts', function (request, response) {
    var contact = request.body;
    storage.save({
        contactId: storage.contacts.length,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        city: contact.city,
        state: contact.state,
        zip: contact.zip
    });
    response.send(200);
});
/**
 * HTTP PUT /contacts/
 * Param: :id the unique identifier of the contact you want to update
 * Body Param: the JSON contact you want to update
 * Returns: 200 HTTP code
 * Error: 404 HTTP code if the contact doesn't exists
 */
app.put('/api/contacts/:id', function (request, response) {
    var contact = request.body;
    var contactId = request.params.id;
    try {
        var persistedcontact = storage.find(contactId);
        storage.save({
            contactId: persistedcontact.contactId,
            name: contact.name || persistedContact.name,
            email: contact.email || persistedContact.email,
            phone: contact.phone || persistedContact.phone,
            address: contact.address || persistedContact.address,
            city: contact.city || persistedContact.city,
            state: contact.state || persistedContact.state,
            zip: contact.zip || persistedContact.zip
        });
        response.send(200);
    } catch (exception) {
        response.send(404);
        console.log(exception);
    }
});
/**
 * HTTP PUT /contacts/
 * Param: :id the unique identifier of the contact you want to update
 * Body Param: the JSON contact you want to update
 * Returns: 200 HTTP code
 * Error: 404 HTTP code if the contact doesn't exists
 */
app.delete('/api/contacts/:id', function (request, response) {
    try {
        storage.remove(request.params.id);
        response.send(200);
    } catch (exeception) {
        response.send(404);
    }
});


/**
 * Start Server
 */

// read the data from json and start the server
fs.readFile(data_file, function(err, data) {
  JSON.parse(data).forEach(function(contact, i) {
    storage.contacts.push({
      contactId: i,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zip: contact.zip
    });
  });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
