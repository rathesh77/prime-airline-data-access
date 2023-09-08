class FlightDto {
    id;
    airportDeparture;
    airportArrival;
    price;
    planeId;
    seats;
    date;
    discounts;
    isLongDuration;
    meals;

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

    }
}

module.exports = FlightDto