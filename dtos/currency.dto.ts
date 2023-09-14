type Currency = {
  currency: string, 
  rate: string,
}
class CurrencyDto {
  currency;
  rate;

  constructor(data: Currency) {
    this.currency = data.currency;
    this.rate = data.rate;

  }
}

export default CurrencyDto;