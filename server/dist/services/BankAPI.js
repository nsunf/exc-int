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
            return response.data;
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
            return response.data;
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
            return response.data.cirr_list;
        });
    }
}
// https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=mPkhHInmDpSzkYMVAex0wnj3ZW8Imq61&data=AP01
// https://www.koreaexim.go.kr/site/program/financial/interestJSON?authkey=G1Bo3CZkToDgfvd9dRrpU4jSdvxVO0S3&data=AP02
// https://www.koreaexim.go.kr/site/program/financial/internationalJSON?authkey=qn5ACltUfDchAgUdyVo5Z2FNnhiHtbPl&data=AP03
BankAPI.url = "https://www.koreaexim.go.kr/site/program/financial/";
exports.default = BankAPI;
