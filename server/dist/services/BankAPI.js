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
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const date_1 = require("../utils/date");
const Exchange_1 = __importDefault(require("../models/Exchange"));
const Interest_1 = __importDefault(require("../models/Interest"));
const International_1 = __importDefault(require("../models/International"));
dotenv_1.default.config();
class BankAPI {
    constructor() {
    }
    getExchange(date = new Date()) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, axios_1.default)({
                url: BankAPI.url + "exchangeJSON",
                params: {
                    authkey: process.env.API_AUTH_KEY,
                    data: "AP01",
                    searchdate: (0, date_1.getDateStr)(date)
                }
            });
            console.log((0, date_1.getDateStr)(date) + " " + response.data.length);
            const data = response.data;
            return data.map(ie => new Exchange_1.default(ie));
        });
    }
    getInterest(date = new Date()) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, axios_1.default)({
                url: BankAPI.url + "interestJSON",
                params: {
                    authkey: process.env.API_AUTH_KEY,
                    data: "AP02",
                    searchdate: (0, date_1.getDateStr)(date)
                }
            });
            const data = response.data;
            return data.map(ii => new Interest_1.default(ii));
        });
    }
    getInternational(date = new Date()) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, axios_1.default)({
                url: BankAPI.url + "internationalJSON",
                params: {
                    authkey: process.env.API_AUTH_KEY,
                    data: "AP03",
                    searchdate: (0, date_1.getDateStr)(date)
                }
            });
            const data = response.data;
            return data.cirr_list.map(ii => new International_1.default(ii));
        });
    }
}
BankAPI.url = "https://www.koreaexim.go.kr/site/program/financial/";
exports.default = BankAPI;
