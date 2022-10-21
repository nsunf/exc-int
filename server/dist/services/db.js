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
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const date_1 = require("../utils/date");
dotenv_1.default.config();
class DB {
    constructor() {
        this.pool = promise_1.default.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD
        });
    }
    checkHistory(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const response = yield this.pool.query(`
      SELECT * FROM api_history
      WHERE date = '${dateStr}';
    `);
            const arr = response[0];
            if (arr.length === 0) {
                yield this.pool.query(`
        INSERT INTO api_history(exchange, interest, international, date)
        VALUES (null, null, null, '${dateStr}');
      `);
                return {
                    exchange: null,
                    interest: null,
                    international: null,
                    date: date
                };
            }
            else {
                return arr[0];
            }
        });
    }
    setHistory({ exchange, interest, international }, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const history = yield this.checkHistory(date);
            const boolToStr = (bool) => {
                switch (bool) {
                    case null:
                        return 'NULL';
                    case true:
                        return 'true';
                    case false:
                        return 'false';
                }
            };
            yield this.pool.query(`
      UPDATE api_history
      SET exchange = ${boolToStr(exchange == undefined ? history.exchange : exchange)},
      interest = ${boolToStr(interest == undefined ? history.interest : interest)},
      international = ${boolToStr(international == undefined ? history.international : international)}
      WHERE date = '${dateStr}';
    `);
        });
    }
    getExchanges(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const response = yield this.pool.query(`
      SELECT flag.flag, exchange.cur_unit, deal_bas_r, cur_nm, date FROM exchange
      LEFT JOIN flag ON flag.cur_unit = exchange.cur_unit
      WHERE date = '${dateStr}';
    `);
            const result = response[0];
            return result;
        });
    }
    getInterest(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const response = yield this.pool.query(`
      SELECT * FROM interest
      WHERE date = '${dateStr}';
    `);
            const result = response[0];
            return result;
        });
    }
    setExchanges(exchanges, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const numOfJob = exchanges.length;
            let progress = 1;
            exchanges.forEach((exc) => __awaiter(this, void 0, void 0, function* () {
                const deal_bas_r = Number(exc.deal_bas_r.replace(',', ''));
                yield this.pool.query(`
        INSERT INTO exchange(cur_unit, deal_bas_r, cur_nm, date)
        VALUES('${exc.cur_unit}', '${deal_bas_r}', '${exc.cur_nm}', '${dateStr}');
      `);
                console.log(`set exchanges to mysql (${progress}/${numOfJob})`);
                progress++;
            }));
        });
    }
    setInterest(interests, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const numOfJob = interests.length;
            let progress = 1;
            interests.forEach((inte, i) => __awaiter(this, void 0, void 0, function* () {
                const int_r = Number(inte.int_r);
                yield this.pool.query(`
        INSERT INTO interest(idx, sfln_intrc_nm, int_r, date)
        VALUES(${i}, '${inte.sfln_intrc_nm}', '${int_r}', '${dateStr}');
      `);
                console.log(`set interest to mysql (${progress}/${numOfJob})`);
                progress++;
            }));
        });
    }
    setInternational(international, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const numOfJob = international.length;
            let progress = 1;
            international.forEach((cirr) => __awaiter(this, void 0, void 0, function* () {
                const int_r = Number(cirr.int_r);
                yield this.pool.query(`
        INSERT INTO international(cur_fund, sfln_intrc_nm, int_r, date)
        VALUES('${cirr.cur_fund}', '${cirr.sfln_intrc_nm}', '${int_r}', '${dateStr}');
      `);
                console.log(`set international to mysql (${progress}/${numOfJob})`);
                progress++;
            }));
        });
    }
}
exports.default = DB;
