"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlightService_1 = __importDefault(require("./FlightService"));
const BookDto_1 = __importDefault(require("../dto/BookDto"));
const InMemoryData_1 = __importDefault(require("../utils/InMemoryData"));
class BookService {
    static createBook(bookRequest) {
        const { flightId, userId, date } = bookRequest;
        if (FlightService_1.default.getAvailableSeats(flightId, date) == 0) {
            return null;
        }
        const book = new BookDto_1.default({ flightId, userId, date });
        InMemoryData_1.default.bookingHistory.push(book);
        const flight = InMemoryData_1.default.flights.find((flight) => flight.id == book.flightId);
        if (!flight) {
            throw 'error';
        }
        flight.date = date;
        return book;
    }
}
exports.default = BookService;
