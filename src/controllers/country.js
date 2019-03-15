const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/test', {useNewUrlParser: true});

const CountrySchema = require('../models/country');
const countryModel = mongoose.model('country', CountrySchema);

// Display list of all countries
exports.countries_list = function(req, res) {
    countryModel.find({}, (err, countries) =>{
        if(err){
            res.send(err);
        }else{
            res.json(countries);
        }
    });
};

// Display detail page for a specific country
exports.country_detail = function(req, res) {
    countryModel.findById((req.params.id), (err, country)=>{
        if(err){
            res.send(err);
        }else{
            res.json(country);
        }
    });
};

// Handle country create on POST
exports.country_create = function(req, res) {
    let country = new countryModel(req.body);

    country.save((err, countryModel)=>{
      if(err){
        res.send(err);
      }
      res.json(country);
    });
};

// Handle country update on PUT
exports.country_update = function(req, res) {
    countryModel.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}, (err, country)=>{
        if(err){
            res.send(err);
        }else{
            res.json(country);
        }
    });
};

// Handle country delete on PUT
exports.country_delete = function(req, res) {
    countryModel.remove({_id:req.params.id}, (err, country)=>{
        if(err){
            res.send(err);
        }else{
            res.json({message: 'Country deleted successfully!'});
        }
    });
};

