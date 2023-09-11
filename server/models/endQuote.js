const mongoose = require('mongoose');

const { Schema } = mongoose;

const quoteSchema = new Schema ({
    selectedQuote: {

    }
})

const EndQuote = mongoose.model('EndQuote', quoteSchema);

module.exports = EndQuote