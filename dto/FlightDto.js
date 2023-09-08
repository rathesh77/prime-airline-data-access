class FlightDto {
    id;
    airportDeparture;
    airportArrival;
    price;
    planeId;
    seats;
    date;
    discounts;

    constructor(data) {
        this.id = data.id;
        this.airportDeparture = data.airportDeparture;
        this.airportArrival = data.airportArrival;
        this.seats = data.seats;
        this.price = data.price;
        this.date = data.date;
        this.discounts = data.discounts;

    }
}

module.exports = FlightDto