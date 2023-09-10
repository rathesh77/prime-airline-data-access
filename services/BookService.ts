import FlightDto from "../dto/FlightDto";
import FlightService from "./FlightService";
import BookDto from "../dto/BookDto";
import InMemoryData from "../utils/InMemoryData";

class BookService {

  static createBook(bookRequest: BookDto) {
    const { flightId, userId, date } = bookRequest;
    if (FlightService.getAvailableSeats(flightId, date) == 0) {
      return null;
    }
    const book: BookDto = new BookDto({ flightId, userId, date });
    InMemoryData.bookingHistory.push(book);
    const flight = InMemoryData.flights.find((flight: FlightDto) => flight.id == book.flightId);
    if (!flight) {
      throw 'error';
    }
    flight.date = date;
    return book;
  }
}

export default BookService;