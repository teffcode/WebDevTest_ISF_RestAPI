// Import ODM dependency
const Mongoose = require('mongoose');

const mongodbUri = 'mongodb://stefany:stefany@ds129004.mlab.com:29004/evercheck-test-1'; 

// Create connection with mongodb
const connection = Mongoose.createConnection(mongodbUri, {});

module.exports = connection;
