const express = require('express');
const router = express.Router();
const WebDevelopment = require('../Models/WebDevelopment')

router.post('/', async (req, res) => {
    const webData = new WebDevelopment({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        duration: req.body.duration,
        message: req.body.message,
        catageroy: req.body.catageroy
    })
    await webData.save().then((data) => {
        res.status(200).send({
            status: 'success'
        })
    }).catch((err) => {
        res.status(400).send({
            status: 'error',
            message: "Error while adding to Ecommerce Marketing"
        })
    })
})

module.exports = router