const FlightDto = require("../dto/FlightDto");
const InMemoryData = require("../utils/inMemoryData");
const CurrencyService = require("./CurrencyService");
const DiscountService = require("./DiscountService");

class FlightService {

  static async getFlights(currency, date) {
    let currencyRate = await CurrencyService.getCurrencyRate(currency);
    let flights = [...InMemoryData.flights].map(flight => {
      const newPrice = (flight.price * +currencyRate).toFixed(2)
      const seats =  FlightService.getAvailableSeats(flight.id, date)
      const newFlight = FlightService.createNewFlight(flight, {price: newPrice, date, seats});
      return newFlight
    })

    return DiscountService.getDiscountForFlights(flights);
  }

  static getAvailableSeats(flightId, date) {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id && date == book.date)).length;
  }

  static createNewFlight(flight, data) {
    return new FlightDto({
      ...flight,
      ...data
    })
      

  }

}

module.exports = FlightService