const InMemoryData = require("../utils/inMemoryData");
const CurrencyService = require("./CurrencyService");

class FlightService {

  static getAvailableSeats(flightId) {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id)).length;
  }

  static async getFlights(currency, date) {
    let currencyRate = await CurrencyService.getCurrencyRate(currency);
    const flights = [...InMemoryData.flights]
    return flights.map(flight => {
      const newFlight = {
        ...flight,
        price: (flight.price * +currencyRate).toFixed(2),
        date
      }
      return ({
        ...newFlight,
        seats: flight.seats - InMemoryData.bookingHistory.filter((book => 
           book.flightId == flight.id 
           && date == book.date)).length
      })
    })
  }
}

module.exports = FlightService