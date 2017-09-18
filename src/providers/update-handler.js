const Models = require('../models');

const update = function(request, response) {
    console.log('Update provider id: ', request.params.providerId);
    console.log('Update params: ', request.payload);
    const updateFields = {
        status: request.payload.status,
        updatedAt: new Date()
    }
    Models.Providers.update({
        _id: request.params.providerId
    }, {
        $set: updateFields // Change fields in document that made match with the filter query
    })
    .then((data) => {
        console.log('Provider updated success');
        return response({
            type: 'Update',
            message: 'Provider updated success',
        }).code(200); // Standard response for successful HTTP requests
    })
    .catch((err) => {
        console.log('Error updating document: ', err.message);
        return response({
            type: 'Update',
            message: 'Error updating document',
            err: err.message
        }).code(500); // Internal Server Error
    });
};

module.exports = update;