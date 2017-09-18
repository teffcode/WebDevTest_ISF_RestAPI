// Import Models
const Models = require('../models');

const create = function(request, response) {
    // This is the object of construction of the document in the DB
    const providerToCreate = {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
        middleName: request.payload.middleName,
        email: request.payload.email,
        'specialty._id': request.payload.specialtyId,
        'specialty.name': request.payload.specialtyName,
        'specialty.createdBy': request.payload.specialtyCreatedBy,
        'specialty.createdAt': new Date(),
        'projectedStartDate': new Date(request.payload.projectedStartDate), // Cast to ISO date the timestamp, remember, the timestamp in javascript is in milliseconds
        employerId: request.payload.employerId,
        providerType: request.payload.providerType,
        staffStatus: request.payload.staffStatus,
        assignedTo: request.payload.assignedTo,
        status: request.payload.status,
        createdBy: request.payload.createdBy,
        createdAt: new Date(),
    }
    console.log('Object to create: ', providerToCreate);
    // Will create document into the database
    Models.Providers.create(providerToCreate)
        .then((data) => {
            console.log('Provider created success');
            return response({
                type: 'Create',
                message: 'Provider created success',
                data
            }).code(201); // Created: The request has been fulfilled, resulting in the creation of a new resource
        })
        .catch((err) => {
            console.log('Error creating a provider: ', err.message);
            return response({
                type: 'Create',
                message: 'Error creating the provider',
                err: err.message
            }).code(500); // Internal Server Error
        });
}

module.exports = create;