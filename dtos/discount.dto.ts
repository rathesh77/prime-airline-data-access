type Discount = {
  flightId?: number, 
  escale: string,
  percent: number
}
class DiscountDto {
    flightId;
    escale;
    percent;

    constructor(data: Discount) {
        this.flightId = data.flightId;
        this.escale = data.escale;
        this.percent = data.percent;

    }
}

export default DiscountDto;