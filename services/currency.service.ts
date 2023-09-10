import InMemoryData from '../utils/InMemoryData';

class CurrencyService {

  static async getAllCurrencies() {
    const currencies = await InMemoryData.currencies;
    return currencies.map((currency: any) => {
      return currency['$'].currency;
    });
  }

  static async getCurrencyRate(currencyFromRequest: string) {
    const currency = currencyFromRequest;
    const currencies = await InMemoryData.currencies;
    const foundCurrency = currencies.find((currencyToLoop: any) => { return currencyToLoop['$'].currency == currency; });
    if (!foundCurrency)
      return null;

    return foundCurrency['$'].rate;
  }

}

export default CurrencyService;