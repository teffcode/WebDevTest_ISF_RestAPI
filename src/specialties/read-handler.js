// Import Models
const Models = require('../models');

/* 
    Read elements into the database based on the next fields:
    * name
*/
const read = function(request, response) {
    console.log('Object to read: ', request.query);
    const limitQuery = parseInt(request.query.limit) || 0
    // Will read element in the database
    Models.Providers.find({
        $or: [
            { name: request.query.name }
        ]
    })
        .limit(limitQuery) // how many doc I want to return
        .then((data) => {
            console.log('Specialties finded success');
            return response({
                type: 'Read',
                message: 'Read specialties success',
                data
            }).code(200); // Standard response for successful HTTP requests
        })
        .catch((err) => {
            console.log('Error finding a specialties: ', err.message);
            return response({
                type: 'Read',
                message: 'Error finding the specialties',
                err: err.message
            }).code(500); // Internal Server Error
        });
}

module.exports = read;