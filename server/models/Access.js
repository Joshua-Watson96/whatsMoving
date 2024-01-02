const mongoose = require('mongoose');

const { Schema } = mongoose;

const pickUpAnsSchema = new Schema({
    Single: String,
    Double: String,
    ThreeOrMore: String,
    Storage: String,
    Appartment: String,
    
});

const pickUpSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    answer: {
        type: pickUpAnsSchema,
        required: true,
    },
});

const PickUp = mongoose.model('PickUp', pickUpSchema);

module.exports = PickUp;