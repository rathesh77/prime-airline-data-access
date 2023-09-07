const FlightDto = require("../dto/FlightDto")

class FlightService {

    static flights = [
        new FlightDto({
          'id': 1,
          'airportDeparture': 'CDG',
          'airportArrival': 'JFK',
          'price' : 1000,
        }),
        new FlightDto({
          'id': 2,
          'airportDeparture': 'CDG',
          'airportArrival': 'DTW',
          'price' : 700,
        }),
        new FlightDto({
          'id': 3,
          'airportDeparture': 'JFK',
          'airportArrival': 'DTW',
          'price' : 300,
        }),
      ]

    static getFlights() {
        return FlightService.flights;
    }
}

module.exports = FlightService