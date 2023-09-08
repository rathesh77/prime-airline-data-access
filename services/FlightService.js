const InMemoryData = require("../utils/inMemoryData");
const CurrencyService = require("./CurrencyService");

class FlightService {

  static getAvailableSeats(flightId) {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id)).length;
  }

    static async getFlights(currency) {
      let currencyRate = await CurrencyService.getCurrencyRate(currency);
      const flights = [...InMemoryData.flights]
      return flights.map(flight => {
        const newFlight = {
          ...flight,
          price: flight.price * +currencyRate
        }
        console.log(newFlight);
        return ({
          ...newFlight,
          seats: flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id)).length
        })
      })
    }
}

module.exports = FlightService