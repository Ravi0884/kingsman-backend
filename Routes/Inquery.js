const express = require('express');
const router = express.Router();
const Inquery = require('../Models/Inquery')

router.post('/', async (req, res) => {
    const inqueryData = new Inquery({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        message:req.body.message
    })
    await inqueryData.save().then((data) => {
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