const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    email: {
        type: 'String',
        unique: true,
        required: true
    },
    password:{
        type: 'String',
        minLength:6,
        required: true
    },

    addedMovies: {
        type: 'String',

    }
});
const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;