"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookDto {
    constructor(data) {
        this.userId = data.userId;
        this.flightId = data.flightId;
        this.date = data.date;
    }
}
exports.default = BookDto;
