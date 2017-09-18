const Models = require('../models');

const update = function(request, response) {
    console.log('Update specialties id: ', request.params.specialtiesId);
    console.log('Update params: ', request.payload);
    const updateFields = {
        status: request.payload.status,
        updatedAt: new Date()
    }
    Models.Specialties.update({
        _id: request.params.specialtiesId
    }, {
        $set: updateFields // Change fields in document that made match with the filter query
    })
    .then((data) => {
        console.log('Specialties updated success');
        return response({
            type: 'Update',
            message: 'Specialties updated success',
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
