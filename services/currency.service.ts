import CurrencyDto from '../dtos/currency.dto';
import InMemoryData from '../utils/InMemoryData';

class CurrencyService {

  static async getAllCurrencies(): Promise<CurrencyDto[]> {
    const currencies = await InMemoryData.currencies;
    return currencies.map((_currency: {'$': CurrencyDto}) => {
      const {currency, rate} = _currency['$'];
      return {currency, rate};
    });
  }

  static async getCurrencyRate(currencyFromRequest: string): Promise<string | null> {
    const currencies = await CurrencyService.getAllCurrencies();
    const foundCurrency = currencies.find((currencyToLoop: CurrencyDto) => { return currencyToLoop.currency == currencyFromRequest; });
    if (!foundCurrency)
      return null;

    return foundCurrency.rate;
  }

}

export default CurrencyService;