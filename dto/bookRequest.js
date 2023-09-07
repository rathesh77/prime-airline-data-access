class BookRequest {
    flightId;
    userId;

    constructor(data) {
        this.flightId = data.flightId;
        this.userId = data.userId;
    }
}

module.exports = BookRequest