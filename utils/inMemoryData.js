const FlightDto = require("../dto/FlightDto")
const axios = require('axios');
const https = require('https');
const xml2js = require('xml2js');

class InMemoryData {

  static CURRENCY_API_URL = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

  static currencies = (async()=>{
    let dataXml = await axios.get(InMemoryData.CURRENCY_API_URL);
    let parser = new xml2js.Parser();
    return (await parser.parseStringPromise(dataXml.data))['gesmes:Envelope'].Cube[0].Cube[0].Cube
  })()

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

  static discounts = [
    {
      flight: InMemoryData.flights.find(flight => flight.id === 1),
      escale: 'DTW',
      percent: 10
    }
  ]
  
} 

module.exports = InMemoryData