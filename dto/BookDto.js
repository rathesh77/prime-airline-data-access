class BookDto {
    userId;
    flight;

    constructor(data) {
        this.userId = data.userId;
        this.flight = data.flight;
    }
}

module.exports = BookDto;