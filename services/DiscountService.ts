import FlightDto from "../dto/FlightDto"
import InMemoryData from "../utils/InMemoryData"


class DiscountService {

  static getDiscountForFlights(flights: Array<FlightDto>) {
    return flights.map((f: FlightDto) => {
      const price = f.price
      const discounts = InMemoryData.discounts.filter(d => d.flightId === f.id).map((d) => {
        const discountPrice = price - (price * (d.percent / 100))

        let discount = { ...d, discountPrice }
        return discount
      })
      return new FlightDto({ ...f, discounts })
    })
  }
}

export default DiscountService