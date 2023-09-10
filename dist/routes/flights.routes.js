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
const express_1 = __importDefault(require("express"));
const FlightService_1 = __importDefault(require("../services/FlightService"));
const BookService_1 = __importDefault(require("../services/BookService"));
const router = express_1.default.Router();
router.get('/flights', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currency = req.query.currency;
    const date = req.query.date;
    if (currency === undefined) {
        res.status(400);
        res.send({
            'code': 'CURRENCY_IS_MANDATORY',
            'message': 'Currency must be specified in the query'
        });
        return;
    }
    if (date === undefined) {
        res.status(400);
        res.send({
            'code': 'DATE_IS_MANDATORY',
            'message': 'Date must be specified in the query'
        });
        return;
    }
    try {
        const flights = yield FlightService_1.default.getFlights(currency, date);
        res.send(flights);
    }
    catch (e) {
        res.send({
            'code': 'ERROR',
            'message': e
        });
    }
}));
router.post('/book', (req, res) => {
    const book = BookService_1.default.createBook(req.body);
    if (!book) {
        res.status(409);
        res.send({
            'code': 'NO_AVAILABLE_SEATS',
            'message': 'There is no available seats for this flight.'
        });
        return;
    }
    res.send(book);
});
exports.default = router;
