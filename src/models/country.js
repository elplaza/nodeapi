var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
    isocode2: String,
    isocode3: String,
    title: String
});

module.exports = countrySchema;