class FlightDto {
    id;
    airportDeparture;
    airPortArrival;
    price;

    constructor(data) {
        this.id = data.id;
        this.airportDeparture = data.airportDeparture;
        this.airportArrival = data.airportArrival;
        this.price = data.price;
    }
}

module.exports = FlightDto