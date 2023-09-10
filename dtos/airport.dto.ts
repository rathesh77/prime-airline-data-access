type Airport = {
    name: string, 
    acronym: string
}

class AirportDto {
    name: string;
    acronym: string;

    constructor(data: Airport) {
        this.name = data.name;
        this.acronym = data.acronym;
    }
}
export default AirportDto