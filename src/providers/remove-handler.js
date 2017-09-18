// Import Models
const Models = require('../models');

const remove = function(request, response) {
    console.log('Will remove provider with id: ', request.params.providerId);
    Models.Providers.remove({
        _id: request.params.providerId
    })
    .then((data) => {
        console.log('Deleted success')
        return response({
            type: 'Delete',
            message: 'Document deleted success',
        }).code(200) // Standard response for successful HTTP requests
    })
    .catch((err) => {
        console.log('Error deleting a provider: ', err.message);
        return response({
            type: 'Delete',
            message: 'Error deleting document',
            err: err.message
        }).code(500); // Internal Server Error
    });
}

module.exports = remove;
