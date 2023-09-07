const FlightDto = require("../dto/FlightDto")

class FlightService {

    static flights = [
        new FlightDto({
          'id': 1,
          'airportDeparture': 'CDG',
          'airportArrival': 'JFK'
        }),
        new FlightDto({
          'id': 2,
          'airportDeparture': 'CDG',
          'airportArrival': 'DTW'
        }),
        new FlightDto({
          'id': 3,
          'airportDeparture': 'JFK',
          'airportArrival': 'DTW'
        }),
      ]

    static getFlights() {
        return FlightService.flights;
    }
}

module.exports = FlightService