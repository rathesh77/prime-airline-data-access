"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FlightDto {
    constructor(data) {
        this.id = data.id;
        this.airportDeparture = data.airportDeparture;
        this.airportArrival = data.airportArrival;
        this.seats = data.seats;
        this.price = data.price;
        this.date = data.date;
        this.discounts = data.discounts;
        this.isLongDuration = data.isLongDuration;
        this.meals = data.meals;
        this.planeId = data.planeId;
    }
}
exports.default = FlightDto;
