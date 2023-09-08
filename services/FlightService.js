const InMemoryData = require("../utils/inMemoryData")

class FlightService {

  static getAvailableSeats(flightId) {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id)).length;
  }

    static getFlights() {

      const flights = [...InMemoryData.flights]
      return flights.map(flight => {
        return ({
          ...flight,
          seats: flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id)).length
      })
      })
    }
}

module.exports = FlightService