import FlightService from './flight.service';
import BookDto from '../dtos/book.dto';
import InMemoryData from '../utils/InMemoryData';
import { bookingHistoryDto } from '../dtos/bookingHistory.dto';

class BookService {

  static createBook(bookRequest: BookDto): BookDto | null {
    if (FlightService.getAvailableSeats(bookRequest.flightId, bookRequest.date) == 0)
      return null;
    
    const book = {
      userId: bookRequest.userId,
      date: bookRequest.date,
      flightId: bookRequest.flightId,
      bookingId: InMemoryData.bookingHistory.length + 1
    } as bookingHistoryDto;

    InMemoryData.bookingHistory.push(book);
    const flight = InMemoryData.flights.find(flight => flight.id == book.flightId);
    if (!flight)
      throw 'error';
    
    return book;
  }

  static getBookingHistory(userId: number) {
    return InMemoryData.bookingHistory.filter((bookingHistory) => bookingHistory.userId === userId).map((bookingHistory) => {
      return ({
        flight: InMemoryData.flights.find((f) => f.id ===bookingHistory.flightId ),
        date: bookingHistory.date,
        bookingId: bookingHistory.bookingId
      });
    }
    );
  }

  static cancelBook(bookingId: number): number {
    const bookIndex = InMemoryData.bookingHistory.findIndex(book => book.bookingId == bookingId);

    if (bookIndex === -1) {
      return bookIndex;
    }
    return InMemoryData.bookingHistory.splice(bookIndex, 1)[0].bookingId;
  }
}

export default BookService;