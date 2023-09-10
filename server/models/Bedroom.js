const mongoose = require('mongoose');

const { Schema } = mongoose;

const bedroomSchema = new Schema({
    name: {
        type: String,
        rquired: true
    }
});

const Bedroom = mongoose.model('Bedroom', bedroomSchema);

module.exports = Bedroom;