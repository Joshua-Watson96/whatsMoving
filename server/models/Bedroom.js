const mongoose = require('mongoose');

const { Schema } = mongoose;

const bedroomSchema = new Schema({
    selectedBedroom: {
        type: String,
        rquired: true
    }
});

const Bedroom = mongoose.model('Bedroom', bedroomSchema);

module.exports = Bedroom;