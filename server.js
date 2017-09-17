'use strict'

/* 

    I use hapi because this framework is lightweight, easy to 
    learn and is very useful when you want to create concept 
    test of an application or create an application very fast.

    https://hapijs.com/
    
*/

// Dependencies
const Hapi = require('hapi');

// Handlers of app
const Providers = require('./src/providers');
const Specialties = require('./src/specialties');

// Create a server with a host and port
const Server = new Hapi.Server();
Server.connection({
    host: 'localhost',
    port: '8000'
});

// Add the route
Server.route({
    method: 'GET',
    path: '/',
    handler: function (request, response) {
        console.log('GET /');
        return response('Server Running').code(200);
    }
});

// Providers CRUD
Server.route({
    method: 'POST',
    path:'/provider',
    handler: Providers.Create
});

Server.route({
    method: 'GET',
    path:'/provider',
    handler: Providers.Read
});

Server.route({
    method: 'DELETE',
    path: '/provider/{providerId}',
    handler: Providers.Remove
});

Server.route({
    method: 'PUT',
    path: '/provider/{providerId}',
    handler: Providers.Update
})

// Specialties CRUD
Server.route({
    method: 'POST',
    path:'/specialties',
    handler: Specialties.Create
});

// Start the server
Server.start((err) => {
    if (err) {
        console.log('Error starting the server: ', err.message);
        throw err;
    }
    console.log('Server listen at: ', Server.info.uri);
});