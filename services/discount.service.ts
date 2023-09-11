import FlightDto from '../dtos/flight.dto';
import InMemoryData from '../utils/InMemoryData';


class DiscountService {

  static getDiscountForFlights(flights: FlightDto[]): FlightDto[] {
    return flights.map(flight => {
      const price = flight.price;
      const discounts = InMemoryData.discounts.filter(discount => discount.flightId === flight.id).map((discount) => {
        const discountPrice = price - (price * (discount.percent / 100));
        return { ...discount, discountPrice };
      });
      return new FlightDto({ ...flight, discounts });
    });
  }
}

export default DiscountService;