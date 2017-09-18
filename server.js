'use strict'

/* 

    I use hapi because this framework is lightweight, easy to 
    learn and is very useful when you want to create concept 
    test of an application or create an application very fast.

    https://hapijs.com/
    
*/

// Dependencies
const Hapi = require('hapi');

// Handlers of apspecialties = require('./src/providers');
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
        console.log('GET /'); // Test route to make sure everything is working
        return response('Server Running').code(200);
    }
});

// Providers CRUD

// This path allows us to create providers based on the creation fields specified in the endpoint documentation
Server.route({
    method: 'POST',
    path:'/provider', 
    handler: Providers.Create
});

// This endpoint allows us to perform a search of providers based on: firstName, email, assignedTo and status
Server.route({
    method: 'GET',
    path:'/provider', 
    handler: Providers.Read
});

// This endpoint allows us to perform the removal of a provider with its respective id
Server.route({
    method: 'DELETE',
    path: '/provider/{providerId}', 
    handler: Providers.Remove
});

// This endpoint allows us to perform the update of a provider with its respective id
Server.route({
    method: 'PUT',
    path: '/provider/{providerId}',
    handler: Providers.Update
})

// Specialties CRUD

// This path allows us to create specialties based on the creation fields specified in the endpoint documentation
Server.route({
    method: 'POST',
    path:'/specialties',
    handler: Specialties.Create
});

// This endpoint allows us to perform a search of specialties based on: name and createdBy
Server.route({
    method: 'GET',
    path:'/specialties',
    handler: Specialties.Read
});

// This endpoint allows us to perform the removal of a specialties with its respective id
Server.route({
    method: 'DELETE',
    path: '/specialties/{specialtiesId}',
    handler: Specialties.Remove
});

// This endpoint allows us to perform the update of a specialties with its respective id
Server.route({
    method: 'PUT',
    path: '/specialties/{specialtiesId}',
    handler: Specialties.Update
})

// Start the server
Server.start((err) => {
    if (err) {
        console.log('Error starting the server: ', err.message);
        throw err;
    }
    console.log('Server listen at: ', Server.info.uri);
});