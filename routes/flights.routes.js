const FlightService = require("../services/FlightService");
const BookService = require("../services/BookService");
const express = require('express')

const router = express.Router();

router.get('/flights', (req, res)=> {
    res.send(FlightService.getFlights())
})

router.post('/book', (req, res)=> {
    res.send(BookService.createBook(req.body));
})

module.exports = router