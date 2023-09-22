import FlightDto from '../dtos/flight.dto';
import InMemoryData from '../utils/InMemoryData';

class FlightService {

  static getAvailableSeats(flightId: number, date: string): number {
    const flight = InMemoryData.flights.find(flight => flight.id == flightId);

    if (!flight)
      return 0;

    return flight.seats - InMemoryData.bookingHistory.filter((book => book.flightId == flight.id && date == book.date)).length;
  }

  static getFlights(): FlightDto[] {
    return [...InMemoryData.flights];
  }

  static getFlightById(flightId: number): FlightDto | undefined {
    return InMemoryData.flights.find((f) => f.id === flightId);
  }

}

export default FlightService;