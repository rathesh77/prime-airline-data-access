class FlightDto {
    id;
    airportDeparture;
    airPortArrival;

    constructor(data) {
        this.id = data.id;
        this.airportDeparture = data.airportDeparture;
        this.airportArrival = data.airportArrival;
    }
}

module.exports = FlightDto