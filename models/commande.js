const mongoose = require('mongoose');
const Joi = require('joi');


const commande_schema = new mongoose.Schema({
    total: { type: String, required: true },

    lignescommande: [{
        _id: { type: mongoose.Schema.ObjectId, ref: 'LigneCommande' }
    },],

    dataCre: { type: Date }

});

const Commande = mongoose.model('commande', commande_schema);

// product validator
const commande_body_validator = {

    lignescommande: Joi.required()
}

module.exports.Commande = Commande;
module.exports.commande_body_validator =  commande_body_validator ;