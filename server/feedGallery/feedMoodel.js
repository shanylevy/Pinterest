const db = require('../db');
const { Schema } = require('mongoose');

const PinSchema = new db.Schema({
	title: String,
	body: String,
	img: String
});

// Create a working model from the schema that
// will change data in our database, on the users
// collection.
const Pins = db.model('Pin', PinSchema);

module.exports = Pins;