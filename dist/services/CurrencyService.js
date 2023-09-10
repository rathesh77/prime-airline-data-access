"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryData_1 = __importDefault(require("../utils/InMemoryData"));
class CurrencyService {
    static getAllCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const currencies = yield InMemoryData_1.default.currencies;
            return currencies.map((currency) => {
                return currency['$'].currency;
            });
        });
    }
    static getCurrencyRate(currencyFromRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const currency = currencyFromRequest;
            const currencies = yield InMemoryData_1.default.currencies;
            const foundCurrency = currencies.find((currencyToLoop) => { return currencyToLoop['$'].currency == currency; });
            if (!foundCurrency)
                return null;
            return foundCurrency['$'].rate;
        });
    }
}
exports.default = CurrencyService;
