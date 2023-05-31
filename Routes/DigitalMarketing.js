const express = require('express');
const router = express.Router();
const DigitalMarketing = require('../Models/DigitalMarketing')

router.post('/', async (req, res) => {
    const digitalData = new DigitalMarketing({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        duration: req.body.duration,
        message: req.body.message,
        catageroy: req.body.catageroy
    })
    await digitalData.save().then((data) => {
        res.status(200).send({
            status: 'success'
        })
    }).catch((err) => {
        res.status(400).send({
            status: 'error',
            message: "Error while adding to Digital Marketing"
        })
    })
})

module.exports = router