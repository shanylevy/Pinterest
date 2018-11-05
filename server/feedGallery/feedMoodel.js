const db = require('../db');
const { Schema } = require('mongoose');


const PinSchema = new db.Schema({
	src: String,
	title: String,

});

const Pins = db.model('Pin', PinSchema);

// const many=pins.map(pin => {
//     return new Pins(pin)
// });
// Pins.insertMany(many)


module.exports = Pins;