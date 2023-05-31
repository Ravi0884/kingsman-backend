const express = require('express');
const router = express.Router();
const RateCard = require('../Models/RateCard')

router.post('/', async (req, res) => {
    const rateData = new RateCard({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        purpose:req.body.purpose
    })
    await rateData.save().then((data) => {
        res.status(200).send({
            status: 'success'
        })
    }).catch((err) => {
        res.status(400).send({
            status: 'error',
            message: "Error while adding to Rate Card"
        })
    })
})

module.exports = router