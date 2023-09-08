const FlightService = require("../services/FlightService");
const BookService = require("../services/BookService");
const express = require('express')

const router = express.Router();

router.get('/flights', async (req, res)=> {
    const { currency } = req.query;
    if (currency === undefined) {
        res.status(400)
        res.send({
            'code': 'CURRENCY_IS_MANDATORY',
            'message': 'Currency must be specified in the query'
        })
        return
    }
    res.send(await FlightService.getFlights(currency))
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