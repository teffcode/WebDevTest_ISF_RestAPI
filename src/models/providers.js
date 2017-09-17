// Import mongoose and the connection with the DB
const Mongoose = require('mongoose');
const Connection = require('./connection');

// Create providers schema based on the schema of the remote database
const specialitySchema = {
    _id: { type: Mongoose.Schema.Types.ObjectId },
    name: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
};

const ProvidersSchema = new Mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    email: { type: String },
    specialty: specialitySchema,
    projectStartDate: { type: Date },
    employerId: { type: Number },
    providerType: { type: String },
    staffStatus: { type: String },
    assignedTo: { type: Number },
    status: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
});

const Providers = Connection.model('providers', ProvidersSchema);

module.exports = Providers;