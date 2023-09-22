import axios from 'axios';
import xml2js from 'xml2js';
import DiscountDto from '../dtos/discount.dto';
import FlightDto from '../dtos/flight.dto';
import { UserRequest } from '../request/user.request';
import bookingHistoryDto from '../dtos/bookingHistory.dto';

class InMemoryData {

  static CURRENCY_API_URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
  static AIRPORTS_API_URL = 'https://3ddc-185-235-207-212.ngrok-free.app/airports';

  static currencies = (async () => {
    const dataXml = await axios.get(InMemoryData.CURRENCY_API_URL);
    const parser = new xml2js.Parser();
    return (await parser.parseStringPromise(dataXml.data))['gesmes:Envelope'].Cube[0].Cube[0].Cube;
  })();


  static airports = (async () => {
    const response = await axios.get(InMemoryData.AIRPORTS_API_URL);
    const fetchedAirports = response.data;

    const CDG = fetchedAirports.find((airport: {code: string, name: string}) => airport.code === 'CDG');
    const LAX = fetchedAirports.find((airport: {code: string, name: string}) => airport.code === 'LAX');
    const LAD = fetchedAirports.find((airport: {code: string, name: string}) => airport.code === 'LAD');
    const JFK = fetchedAirports.find((airport: {code: string, name: string}) => airport.code === 'JFK');
    const DTW = fetchedAirports.find((airport: {code: string, name: string}) => airport.code === 'DTW');

    const updatedFlights = [
      ({
        'id': 1,
        'airportDeparture': CDG,
        'airportArrival': JFK,
        'price': 1000,
        'seats': 2,
        'date': '',
        'isLongDuration': true,
        'meals': [
          { 'name': 'veggie', 'quantity': 45 },
          { 'name': 'chips', 'quantity': 10 },
          { 'name': 'polloSandwich', 'quantity': 8 },
          { 'name': 'pasta', 'quantity': 30 }
        ],
        'planeId': 1,
      }) as FlightDto,
      ({
        'id': 2,
        'airportDeparture': CDG,
        'airportArrival': DTW,
        'price': 700,
        'seats': 2,
        'date': '',
        'isLongDuration': true,
        'meals': [
          { 'name': 'veggie', 'quantity': 5 },
          { 'name': 'chips', 'quantity': 10 },
          { 'name': 'polloSandwich', 'quantity': 80 },
          { 'name': 'pasta', 'quantity': 30 }
        ],
        'planeId': 2
      }) as FlightDto,
      ({
        'id': 3,
        'airportDeparture': JFK,
        'airportArrival': DTW,
        'price': 300,
        'seats': 2,
        'date': '',
        'isLongDuration': false,
        'meals': [],
        'planeId': 3
      }) as FlightDto,
      ({
        'id': 4,
        'airportDeparture': JFK,
        'airportArrival': DTW,
        'price': 300,
        'seats': 2,
        'date': '',
        'isLongDuration': false,
        'meals': [],
        'planeId': 3,
        'escale': DTW
      }) as FlightDto,
      ({
        'id': 5,
        'airportDeparture': LAX,
        'airportArrival': LAD,
        'price': 1200,
        'seats': 4,
        'date': '',
        'isLongDuration': false,
        'meals': [],
        'planeId': 3,
        'escale': JFK
      }) as FlightDto,
      ({
        'id': 6,
        'airportDeparture': CDG,
        'airportArrival': LAD,
        'price': 600,
        'seats': 600,
        'date': '',
        'isLongDuration': true,
        'meals': [
          { 'name': 'veggie', 'quantity': 5 },
          { 'name': 'chips', 'quantity': 10 },
          { 'name': 'polloSandwich', 'quantity': 80 },
          { 'name': 'pasta', 'quantity': 30 }
        ],
        'planeId': 2
      }) as FlightDto
    ];
    InMemoryData.flights = updatedFlights;
  })();

  static flights: FlightDto[] = [
  ];

  static discounts: DiscountDto[] = [
    {
      originalFlightId: 1,
      flightId: 4,
      percent: 10
    } as DiscountDto
  ];

  static bookingHistory: bookingHistoryDto[] = [];


  static users: UserRequest[] = [];
}

export default InMemoryData;