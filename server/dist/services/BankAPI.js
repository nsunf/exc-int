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
    getData(type, date = new Date()) {
        return __awaiter(this, void 0, void 0, function* () {
            let urlParam = BankAPI.url;
            let dataParam = "AP0";
            switch (type) {
                case 'Exchange':
                    urlParam += "exchangeJSON";
                    dataParam += "1";
                    break;
                case 'Interest':
                    urlParam += "interestJSON";
                    dataParam += "2";
                    break;
                case 'International':
                    urlParam += "internationalJSON";
                    dataParam += "3";
                    break;
            }
            const response = yield (0, axios_1.default)({
                url: urlParam,
                params: {
                    authkey: process.env.API_AUTH_KEY,
                    data: dataParam,
                    searchdate: (0, date_1.getDateStr)(date)
                }
            });
            console.log(`${(0, date_1.getDateStr)(date, true)} ${type} data(${response.data.length}) received from BankAPI`);
            switch (type) {
                case 'Exchange':
                    const ex = response.data;
                    return ex.map(e => new Exchange_1.default(e));
                case 'Interest':
                    const itr = response.data;
                    return itr.map(e => new Interest_1.default(e));
                case 'International':
                    const itn = response.data;
                    return itn.cirr_list.map((e) => new International_1.default(e));
            }
        });
    }
}
BankAPI.url = "https://www.koreaexim.go.kr/site/program/financial/";
exports.default = BankAPI;
