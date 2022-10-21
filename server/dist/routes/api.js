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
const DB_1 = __importDefault(require("../services/DB"));
const BankAPI_1 = __importDefault(require("../services/BankAPI"));
const router = express_1.default.Router();
const db = new DB_1.default();
const bankAPI = new BankAPI_1.default();
function getExchanges(date) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        while (result.length === 0) {
            const historyCheck = yield db.checkHistory(date);
            if (historyCheck.exchange == null) {
                let exchanges = yield bankAPI.getExchange(date);
                yield db.setExchanges(exchanges, date);
                yield db.setHistory({ exchange: exchanges.length > 0 }, date);
                result = exchanges;
            }
            else if (historyCheck.exchange == true) {
                let exchanges = yield db.getExchanges(date);
                result = exchanges;
            }
            date.setDate(date.getDate() - 1);
        }
        return result;
    });
}
function getInterests(date) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        while (result.length === 0) {
            const historyCheck = yield db.checkHistory(date);
            if (historyCheck.interest == null) {
                let interests = yield bankAPI.getInterest(date);
                yield db.setInterest(interests, date);
                yield db.setHistory({ interest: interests.length > 0 }, date);
                result = interests;
            }
            else if (historyCheck.exchange == true) {
                let interests = yield db.getInterest(date);
                result = interests;
            }
            date.setDate(date.getDate() - 1);
        }
        return result;
    });
}
router.get('/exchange', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date('2022.08.16');
    let todaysExchanges = yield getExchanges(date);
    let prevsExchanges = yield getExchanges(date);
    console.log(todaysExchanges);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
    res.write(JSON.stringify(todaysExchanges.length));
    res.write('<br/>----------------------------------<br/>');
    res.write(JSON.stringify(prevsExchanges.length));
    res.end();
}));
router.get('/interest', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date('2022.08.16');
    let interests = yield getInterests(date);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
    res.write(JSON.stringify(interests).length);
    res.end();
}));
exports.default = router;
