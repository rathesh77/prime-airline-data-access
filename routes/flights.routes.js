const FlightService = require("../services/FlightService");
const express = require('express')

const router = express.Router();

router.get('/flights', (req, res)=> {

    res.send(FlightService.getFlights())
})

router.post('/book', (req, res)=> {

})

module.exports = router