const FlightService = require("../services/FlightService");
const BookService = require("../services/BookService");
const express = require('express');
const InMemoryData = require("../utils/inMemoryData");

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
    const flights = (await FlightService.getFlights(currency)).map(f => {
        const discounts = InMemoryData.discounts.filter(d => d.flight.id === f.id).map((d) => {
            const discountPrice = f.price -  (f.price  * (d.percent / 100))
            
            let discount = {...d, discountPrice }
            return discount
        })
        
        return {...f, discounts}
    })
    res.send(flights)
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