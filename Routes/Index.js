const express = require('express')
const router = express.Router()
const digitalRouter = require('./DigitalMarketing')
const ecommerceRouter = require('./Ecommerce')
const inqueryRouter = require('./Inquery')
const webRouter = require('./WebDevelopment')
const rateRouter = require('./RateCard')

router.get('/' ,(req, res) => {
    res.send("Welcome to Kingsman Backend Server")
})

router.use('/digitalMarketing', digitalRouter)
router.use('/ecommerce', ecommerceRouter)
router.use('/inquery', inqueryRouter)
router.use('/rateCard', rateRouter)
router.use('/webDevelopment',webRouter)

module.exports = router;
