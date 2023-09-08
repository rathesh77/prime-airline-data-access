const FlightService = require("../services/FlightService");
const BookService = require("../services/BookService");
const express = require('express')

const router = express.Router();

router.get('/flights', (req, res)=> {
    res.send(FlightService.getFlights())
})

router.post('/book', (req, res)=> {
    const book = BookService.createBook(req.body)
    if (!book) {
        res.status(409)
        res.send({
            'code': 'NO_AVAILABLE_SEATS',
            'message': 'There is no available seats for this flight.'
        })
        return;
    }
    res.send(book);
})

module.exports = router