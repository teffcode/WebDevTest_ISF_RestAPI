// Import Models
const Models = require('../models');

const remove = function(request, response) {
    console.log('Will remove specialties with id: ', request.params.specialtiesId);
    Models.Specialties.remove({
        _id: request.params.specialtiesId
    })
    .then((data) => {
        console.log('Deleted success')
        return response({
            type: 'Delete',
            message: 'Document deleted success',
        }).code(200)
    })
    .catch((err) => {
        console.log('Error deleting a specialties: ', err.message);
        return response({
            type: 'Delete',
            message: 'Error deleting document',
            err: err.message
        }).code(500);
    });
}

module.exports = remove;