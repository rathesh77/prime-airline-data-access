const FlightDto = require("../dto/FlightDto")
const InMemoryData = require("../utils/inMemoryData")

class DiscountService {

    static getDiscountForFlights(flights) {
        return flights.map(f => {
            const price = parseFloat(f.price)
            const discounts = InMemoryData.discounts.filter(d => d.flightId === f.id).map((d) => {
                const discountPrice = price -  (price  * (d.percent / 100))
                
                let discount = {...d, discountPrice }
                return discount
            })
            return new FlightDto({...f, discounts})
        })
    }
}

module.exports = DiscountService