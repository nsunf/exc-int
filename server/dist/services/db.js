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
const Exchange_1 = __importDefault(require("../models/Exchange"));
const Interest_1 = __importDefault(require("../models/Interest"));
const International_1 = __importDefault(require("../models/International"));
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
            const dateStr = (0, date_1.getDateStr)(date, true);
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
                const history = arr[0];
                return history;
            }
        });
    }
    setHistory(type, bool, date) {
        return __awaiter(this, void 0, void 0, function* () {
            let { exchange, interest, international } = {};
            if (type == "Exchange") {
                exchange = bool;
            }
            else if (type == "Interest") {
                interest = bool;
            }
            else {
                international = bool;
            }
            const dateStr = (0, date_1.getDateStr)(date);
            const history = yield this.checkHistory(date);
            const boolToStr = (bool) => {
                switch (bool) {
                    case null:
                        return 'NULL';
                    case true:
                    case 1:
                        return 'true';
                    case false:
                    case 0:
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
    getData(type, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            let query = "";
            switch (type) {
                case "Exchange":
                    query = `
          SELECT flag.flag, exchange.cur_unit, deal_bas_r, cur_nm, date FROM exchange
          LEFT JOIN flag ON flag.cur_unit = exchange.cur_unit
          WHERE date = '${dateStr}';
        `;
                    break;
                case "Interest":
                    query = `
          SELECT * FROM interest
          WHERE date = '${dateStr}';
        `;
                    break;
                case "International":
                    query = `
          SELECT flag.flag, cur_fund, sfln_intrc_nm, int_r, date
          FROM international
          JOIN flag
          ON flag.cur_unit LIKE CONCAT('%', international.cur_fund, '%')
          WHERE date = '${dateStr}';
        `;
                    break;
            }
            const response = yield this.pool.query(query);
            switch (type) {
                case 'Exchange':
                    const exc = response[0];
                    return exc.map(e => new Exchange_1.default(e));
                case 'Interest':
                    const itr = response[0];
                    return itr.map(e => new Interest_1.default(e));
                case 'International':
                    const itn = response[0];
                    return itn.map(e => new International_1.default(e));
            }
        });
    }
    setData(data, type, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateStr = (0, date_1.getDateStr)(date);
            const numOfJob = data.length;
            let progress = 0;
            for (let i = 0; i < data.length; i++) {
                let query = "";
                switch (type) {
                    case "Exchange":
                        const exc = data[i];
                        query = `
            INSERT INTO exchange(cur_unit, deal_bas_r, cur_nm, date)
            VALUES('${exc.getCurUnit}', '${exc.getDealBasR}', '${exc.getCurNm}', '${dateStr}');
          `;
                        break;
                    case "Interest":
                        const itr = data[i];
                        query = `
            INSERT INTO interest(idx, sfln_intrc_nm, int_r, date)
            VALUES(${i}, '${itr.getSflnIntrcNm}', '${itr.getIntR}', '${dateStr}');
          `;
                        break;
                    case "International":
                        const itn = data[i];
                        query = `
            INSERT INTO international(cur_fund, sfln_intrc_nm, int_r, date)
            VALUES('${itn.getCurFund}', '${itn.getSflnIntrcNm}', '${itn.getIntR}', '${dateStr}');
          `;
                        break;
                }
                yield this.pool.query(query);
                progress++;
            }
            console.log(numOfJob === progress ?
                `${progress}/${numOfJob} ${type} succeed` :
                `${progress}/${numOfJob} ${type} stopped`);
        });
    }
}
exports.default = DB;
