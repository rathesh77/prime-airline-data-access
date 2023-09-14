import axios from 'axios';
import xml2js from 'xml2js';
import DiscountDto from '../dtos/discount.dto';
import FlightDto from '../dtos/flight.dto';
import BookDto from '../dtos/book.dto';
import { UserRequest } from '../request/user.request';

class InMemoryData {

  static CURRENCY_API_URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

  static currencies = (async () => {
    const dataXml = await axios.get(InMemoryData.CURRENCY_API_URL);
    const parser = new xml2js.Parser();
    return (await parser.parseStringPromise(dataXml.data))['gesmes:Envelope'].Cube[0].Cube[0].Cube;
  })();

  static flights: FlightDto[] = [
    new FlightDto({
      'id': 1,
      'airportDeparture': 'CDG',
      'airportArrival': 'JFK',
      'price': 1000,
      'seats': 2,
      'date': '',
      'isLongDuration': true,
      'meals': [
        {'name': 'veggie', 'quantity': 45}, 
        {'name': 'chips', 'quantity': 10},
        {'name': 'polloSandwich', 'quantity': 8},
        {'name':  'pasta', 'quantity': 30}
      ],
      'planeId': 1
    }),
    new FlightDto({
      'id': 2,
      'airportDeparture': 'CDG',
      'airportArrival': 'DTW',
      'price': 700,
      'seats': 2,
      'date': '',
      'isLongDuration': true,
      'meals': [
        {'name': 'veggie', 'quantity': 5}, 
        {'name': 'chips', 'quantity': 10},
        {'name': 'polloSandwich', 'quantity': 80},
        {'name':  'pasta', 'quantity': 30}
      ],
      'planeId': 2
    }),
    new FlightDto({
      'id': 3,
      'airportDeparture': 'JFK',
      'airportArrival': 'DTW',
      'price': 300,
      'seats': 2,
      'date': '',
      'isLongDuration': false,
      'meals': [],
      'planeId': 3
    }),
  ];


  static bookingHistory: BookDto[] = [];

  static discounts: DiscountDto[] = [
    new DiscountDto({
      flightId: InMemoryData.flights.find(flight => flight.id === 1)?.id,
      escale: 'DTW',
      percent: 10
    })
  ];

  static users: UserRequest[] = [

  ];
}

export default InMemoryData;