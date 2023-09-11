import DiscountDto from '../dtos/discount.dto';
import FlightDto from '../dtos/flight.dto';
import InMemoryData from '../utils/InMemoryData';


class DiscountService {

  static getDiscountForFlights(flights: FlightDto[]): FlightDto[] {
    return flights.map((f: FlightDto) => {
      const price = f.price;
      const discounts = InMemoryData.discounts.filter((d: DiscountDto) => d.flightId === f.id).map((d) => {
        const discountPrice = price - (price * (d.percent / 100));
        return { ...d, discountPrice };
      });
      return new FlightDto({ ...f, discounts });
    });
  }
}

export default DiscountService;