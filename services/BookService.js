const BookRequest = require("../dto/BookRequest");
const FlightService = require("./FlightService");
const BookDto = require("../dto/BookDto");
const InMemoryData = require("../utils/inMemoryData");

class BookService {

    static createBook(bookRequest) {
        const {flightId, userId, date } = bookRequest;
        if (FlightService.getAvailableSeats(flightId) == 0) {
            return null;
        }
        const book = new BookRequest({flightId, userId});
        InMemoryData.books.push(book);
        InMemoryData.bookingHistory.push({
            flightId,
            date
        });
        const flight = InMemoryData.flights.find(flight => flight.id == book.flightId);
        flight.date = date;
        return new BookDto({userId: book.userId, flight});
    }
}

module.exports = BookService;