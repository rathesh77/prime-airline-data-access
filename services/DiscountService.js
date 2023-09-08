const InMemoryData = require("../utils/inMemoryData")

class DiscountService {

    static getDiscountForFlights(flights) {
        return flights.map(f => {
            const discounts = InMemoryData.discounts.filter(d => d.flight.id === f.id).map((d) => {
                const discountPrice = f.price -  (f.price  * (d.percent / 100))
                
                let discount = {...d, discountPrice }
                return discount
            })
            return {...f, discounts}
        })
    }
}

module.exports = DiscountService