import BookDto from '../dtos/book.dto';
import FlightDto from '../dtos/flight.dto';
import InMemoryData from '../utils/InMemoryData';
import CurrencyService from './currency.service';
import DiscountService from './discount.service';

class FlightService {

    static async getFlights(currency: string, date: string) {
        const currencyRate = await CurrencyService.getCurrencyRate(currency);
        if (currencyRate == null) {
            throw 'invalid currency';
        }

        const flights = [...InMemoryData.flights].map(flight => {
            const newPrice = +(flight.price * +currencyRate).toFixed(2);
            const seats = FlightService.getAvailableSeats(flight.id, date);
            const newFlight = FlightService.createNewFlight(flight, { price: newPrice, date, seats });
            return newFlight;
        });

        return DiscountService.getDiscountForFlights(flights);
    }

    static getAvailableSeats(flightId: number, date: string) {
        const flight = InMemoryData.flights.find((flight: FlightDto) => flight.id == flightId);

        if (!flight)
            return 0;

        return flight.seats - InMemoryData.bookingHistory.filter(((book: BookDto) => book.flightId == flight.id && date == book.date)).length;
    }

    static createNewFlight(flight: FlightDto, data: Partial<FlightDto>) {
        return new FlightDto({
            ...flight,
            ...data
        });


    }

}

export default FlightService;