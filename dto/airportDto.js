class AirportDto {
    name;
    acronym;

    constructor(data) {
        this.name = data.name;
        this.acronym = data.acronym;
    }
}
module.exports = AirportDto