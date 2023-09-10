"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiscountDto {
    constructor(data) {
        this.flightId = data.flightId;
        this.escale = data.escale;
        this.percent = data.percent;
    }
}
exports.default = DiscountDto;
