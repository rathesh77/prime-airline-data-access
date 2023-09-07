const FlightDto = require("../dto/FlightDto")

class FlightService {

  static getFlights() {

    const flights = [
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
        'id': 1,
        'airportDeparture': 'JFK',
        'airportArrival': 'DTW'
      }),
    ]

    return flights
  }
}

module.exports = FlightService