const BookRequest = require("../dto/BookRequest");
const fs = require('fs');
const FlightService = require("./FlightService");
const BookDto = require("../dto/BookDto");

class BookService {

    static books = [];

    static createBook(bookRequest) {
        const {flightId, userId} = bookRequest;
        const book = new BookRequest({flightId, userId});
        BookService.books.push(book);

        const flight = FlightService.flights.find(flight => flight.id == book.flightId);
        return new BookDto({userId: book.userId, flight});
    }
}

module.exports = BookService;