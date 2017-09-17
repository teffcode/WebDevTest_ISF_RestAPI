// Import Models
const Models = require('../models');

/* 
    Read elements into the database based on the next fields:
    * firstname
    * email
    * assignedTo
    * Status
*/
const read = function(request, response) {
    console.log('Object to read: ', request.query);
    const limitQuery = parseInt(request.query.limit) || 0
    // Will read element in the database
    Models.Providers.find({
        $or: [
            { firstName: request.query.firstName },
            { email: request.query.email },
            { assignedTo: request.query.assignedTo },
            { status: request.query.status }
        ]
    })
        .limit(limitQuery) // how many doc I want to return
        .then((data) => {
            console.log('Provider finded success');
            return response({
                type: 'Read',
                message: 'Read provider success',
                data
            }).code(200);
        })
        .catch((err) => {
            console.log('Error finding a provider: ', err.message);
            return response({
                type: 'Read',
                message: 'Error finding the provider',
                err: err.message
            }).code(500);
        });
}

module.exports = read;