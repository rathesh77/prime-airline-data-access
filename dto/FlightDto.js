class FlightDto {
    id;
    airportDeparture;
    airPortArrival;
    price;
    planeId;
    seats;
    date;

    constructor(data) {
        this.id = data.id;
        this.airportDeparture = data.airportDeparture;
        this.airportArrival = data.airportArrival;
        this.seats = data.seats;
        this.price = data.price;
        this.date = data.date;

    }
}

module.exports = FlightDto