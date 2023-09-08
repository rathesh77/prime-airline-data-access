const FlightDto = require("../dto/FlightDto")

class InMemoryData {
  static flights = [
    new FlightDto({
      'id': 1,
      'airportDeparture': 'CDG',
      'airportArrival': 'JFK',
      'price': 1000,
      'seats' : 2,
      'date': '06/07/2O22'
    }),
    new FlightDto({
      'id': 2,
      'airportDeparture': 'CDG',
      'airportArrival': 'DTW',
      'price': 700,
      'seats' : 2,
      'date': '07/07/2O22'


    }),
    new FlightDto({
      'id': 3,
      'airportDeparture': 'JFK',
      'airportArrival': 'DTW',
      'price': 300,
      'seats' : 2,
      'date': '08/07/2O22'

    }),
  ]
  static books = [];

  static bookingHistory = []
} 

module.exports = InMemoryData