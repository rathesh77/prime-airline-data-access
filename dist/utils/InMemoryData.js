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
var _a;
var _b;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = __importDefault(require("xml2js"));
const FlightDto_1 = __importDefault(require("../dto/FlightDto"));
class InMemoryData {
}
_b = InMemoryData;
InMemoryData.CURRENCY_API_URL = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
InMemoryData.currencies = (() => __awaiter(void 0, void 0, void 0, function* () {
    let dataXml = yield axios_1.default.get(_b.CURRENCY_API_URL);
    let parser = new xml2js_1.default.Parser();
    return (yield parser.parseStringPromise(dataXml.data))['gesmes:Envelope'].Cube[0].Cube[0].Cube;
}))();
InMemoryData.flights = [
    new FlightDto_1.default({
        'id': 1,
        'airportDeparture': 'CDG',
        'airportArrival': 'JFK',
        'price': 1000,
        'seats': 2,
        'date': '',
        'isLongDuration': true,
        'meals': ['veggie', 'chips', 'polloSandwich', 'pasta'],
        'planeId': 1
    }),
    new FlightDto_1.default({
        'id': 2,
        'airportDeparture': 'CDG',
        'airportArrival': 'DTW',
        'price': 700,
        'seats': 2,
        'date': '',
        'isLongDuration': true,
        'meals': ['veggie', 'chips', 'polloSandwich', 'pasta'],
        'planeId': 2
    }),
    new FlightDto_1.default({
        'id': 3,
        'airportDeparture': 'JFK',
        'airportArrival': 'DTW',
        'price': 300,
        'seats': 2,
        'date': '',
        'isLongDuration': false,
        'meals': [],
        'planeId': 3
    }),
];
InMemoryData.bookingHistory = [];
InMemoryData.discounts = [
    {
        flightId: (_a = _b.flights.find(flight => flight.id === 1)) === null || _a === void 0 ? void 0 : _a.id,
        escale: 'DTW',
        percent: 10
    }
];
exports.default = InMemoryData;
