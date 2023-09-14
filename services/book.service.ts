import FlightService from './flight.service';
import BookDto from '../dtos/book.dto';
import InMemoryData from '../utils/InMemoryData';

class BookService {

  static createBook(bookRequest: BookDto): BookDto | null {
    if (FlightService.getAvailableSeats(bookRequest.flightId, bookRequest.date) == 0)
      return null;
    
    const book = new BookDto(bookRequest);
    InMemoryData.bookingHistory.push(book);
    const flight = InMemoryData.flights.find(flight => flight.id == book.flightId);
    if (!flight)
      throw 'error';
    
    return book;
  }

  static getBookingHistory(userId: string): BookDto[] {
    return InMemoryData.bookingHistory.filter((bookingHistory) => bookingHistory.userId === userId); 
  }
}

export default BookService;