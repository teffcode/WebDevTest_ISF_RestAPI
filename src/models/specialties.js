// Import mongoose and the connection with the DB
const Mongoose = require('mongoose');
const Connection = require('./connection');

// Create specialties schema based on the remote database schema
const SpecialtiesSchema = new Mongoose.Schema({
    name: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
});

const Specialties = Connection.model('specialties', SpecialtiesSchema);

module.exports = Specialties;