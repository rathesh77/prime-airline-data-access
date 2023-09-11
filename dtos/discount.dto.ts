type Discount = {
  flightId?: number, 
  escale: string,
  percent: number,
  discountPrice?: number
}
class DiscountDto {
  flightId;
  escale;
  percent;
  discountPrice;

  constructor(data: Discount) {
    this.flightId = data.flightId;
    this.escale = data.escale;
    this.percent = data.percent;
    this.discountPrice = data.discountPrice;

  }
}

export default DiscountDto;