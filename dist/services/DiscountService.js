"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlightDto_1 = __importDefault(require("../dto/FlightDto"));
const InMemoryData_1 = __importDefault(require("../utils/InMemoryData"));
class DiscountService {
    static getDiscountForFlights(flights) {
        return flights.map((f) => {
            const price = f.price;
            const discounts = InMemoryData_1.default.discounts.filter(d => d.flightId === f.id).map((d) => {
                const discountPrice = price - (price * (d.percent / 100));
                let discount = Object.assign(Object.assign({}, d), { discountPrice });
                return discount;
            });
            return new FlightDto_1.default(Object.assign(Object.assign({}, f), { discounts }));
        });
    }
}
exports.default = DiscountService;
