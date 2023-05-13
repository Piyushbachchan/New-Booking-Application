const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    },
    releaseDate: {
        type: 'Date',
        required: true
    },
    posterUrls: {
        type: 'String',
        required: true
    },
    featured: {
        type: 'Boolean',
    },
    bookings: {
        type: 'String',
        admin: {
            type: 'String',
            required: true
        }
    }
})
const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;