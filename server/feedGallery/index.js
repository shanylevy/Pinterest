const express = require('express');
const router = express.Router();
const mongoosePaginate = require('mongoose-paginate');

const Pins = require('./feedMoodel');


router.get('/', (req, res) => {
	let filter = {}
    if (req.query.search) {
        let regex = new RegExp(req.query.search, 'i')
        filter.$or = [
            { body: regex },
            { title: regex }
        ]
    }
    Pins.find(filter)
    .then(pins => res.send(pins))
    .catch(err => res.status(400).send(err.message));
});


router.post('/', (req, res) => {
    // const newPin = {
    //     src : req.body.src,
    //     title : req.body.title
    // }
	const pin = new Pins(req.body);
	pin.save()
		.then(pin => res.send(pin))
		.catch(e => res.status(400).send(e.message));
	
});

router.delete('/:pinId', (req,res) => {
    Pin.findByIdAndRemove(req.params.pinId)
    .then(pin => res.send(pin))
    .catch(err => res.status(400).send(err.message));
})


module.exports = router;
