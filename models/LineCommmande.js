const mongoose = require('mongoose');
const Joi = require('joi');
 

const line_commande_schema = new mongoose.Schema({
 
    quantite : {type :String, required : true},
     
    product : {
        _id : {type : mongoose.Schema.ObjectId , ref : 'Product'}
    } ,
    

});

const LineCommande = mongoose.model('LineCommande', line_commande_schema );

// product validator
const line_commande_validator = {
    product : Joi.required(),
    quantite: Joi.number().positive().required(),
    
}

module.exports.LineCommande = LineCommande;
module.exports.line_commande_validator = line_commande_validator;