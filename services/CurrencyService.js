const InMemoryData = require("../utils/inMemoryData");

class CurrencyService {

    static async getAllCurrencies() {
        const currencies = await InMemoryData.currencies;
        return currencies.map(currency => {
            return currency['$'].currency
        })
    }

    static async getCurrencyRate(currencyFromRequest) {
        const currency = currencyFromRequest;
        const currencies = await InMemoryData.currencies;
        return currencies.find(currencyToLoop => { return currencyToLoop['$'].currency == currency})['$'].rate
    }

}

module.exports = CurrencyService;