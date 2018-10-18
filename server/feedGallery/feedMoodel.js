const db = require('../db');
const { Schema } = require('mongoose');

const PinSchema = new db.Schema({
	src: String,
	title: String,

});


const Pins = db.model('Pin', PinSchema);

module.exports = Pins;