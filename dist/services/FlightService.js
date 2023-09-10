"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlightDto_1 = __importDefault(require("../dto/FlightDto"));
const InMemoryData_1 = __importDefault(require("../utils/InMemoryData"));
const CurrencyService_1 = __importDefault(require("./CurrencyService"));
const DiscountService_1 = __importDefault(require("./DiscountService"));
class FlightService {
    static getFlights(currency, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const currencyRate = yield CurrencyService_1.default.getCurrencyRate(currency);
            if (currencyRate == null) {
                throw "invalid currency";
            }
            const flights = [...InMemoryData_1.default.flights].map(flight => {
                const newPrice = +(flight.price * +currencyRate).toFixed(2);
                const seats = FlightService.getAvailableSeats(flight.id, date);
                const newFlight = FlightService.createNewFlight(flight, { price: newPrice, date, seats });
                return newFlight;
            });
            return DiscountService_1.default.getDiscountForFlights(flights);
        });
    }
    static getAvailableSeats(flightId, date) {
        const flight = InMemoryData_1.default.flights.find((flight) => flight.id == flightId);
        if (!flight)
            return 0;
        return flight.seats - InMemoryData_1.default.bookingHistory.filter(((book) => book.flightId == flight.id && date == book.date)).length;
    }
    static createNewFlight(flight, data) {
        return new FlightDto_1.default(Object.assign(Object.assign({}, flight), data));
    }
}
exports.default = FlightService;
