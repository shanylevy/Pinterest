const express = require('express');
const router = express.Router();
const mongoosePaginate = require('mongoose-paginate');

const Pins = require('./feedMoodel');


router.get('/', (req, res) => {
    Pins.find()
    .then(pins => res.send(pins))
    .catch(err => res.status(400).send(err.message));
});


router.post('/', (req, res) => {
    // const newPin = {
    //     src : req.body.src,
    //     text : req.body.text
    // }
	const pin = new Pins(req.body);
	pin.save()
		.then(pin => res.send(pin))
		.catch(e => res.status(400).send(e.message));
	
});


module.exports = router;
