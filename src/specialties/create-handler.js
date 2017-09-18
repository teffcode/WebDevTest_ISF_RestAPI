// Import Models
const Models = require('../models');

const create = function(request, response) {
    // This is the object of construction of the document in the DB
    const specialtiesToCreate = {
        name: request.payload.name, 
        createdBy: request.payload.createdBy,
        createdAt: new Date(),
    }
    console.log('Object to create: ', specialtiesToCreate);
    // Will create document into the database
    Models.Specialties.create(specialtiesToCreate)
        .then((data) => {
            console.log('Specialties created success');
            return response({
                type: 'Create',
                message: 'Specialties created success',
                data
            }).code(201); // Created: The request has been fulfilled, resulting in the creation of a new resource
        })
        .catch((err) => {
            console.log('Error creating a specialties: ', err.message);
            return response({
                type: 'Create',
                message: 'Error creating the specialties',
                err: err.message
            }).code(500); // Internal Server Error
        });
}

module.exports = create;