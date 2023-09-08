const InMemoryData = require("../utils/inMemoryData");
const CurrencyService = require("./CurrencyService");
const DiscountService = require("./DiscountService");

class FlightService {

  static async getFlights(currency, date) {
    let currencyRate = await CurrencyService.getCurrencyRate(currency);
    let flights = [...InMemoryData.flights]
    flights = flights.map(flight => {
      const newPrice = (flight.price * +currencyRate).toFixed(2)
      const newFlight = FlightService.createNewFlight(flight, newPrice, date);

      return {
        ...newFlight,
        seats: FlightService.getAvailableSeats(flight.id, date)
      }
    })

    return DiscountService.getDiscountForFlights(flights);
  }

  static getAvailableSeats(flightId, date) {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id && date == book.date)).length;
  }

  static createNewFlight(flight, price, date) {
    return {
      ...flight,
      price,
      date
    }

  }

}

module.exports = FlightService