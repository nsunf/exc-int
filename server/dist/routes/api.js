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
router.post('/exchange', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(req.body.searchdate);
    // const date = new Date("2022.10.21");
    let todaysExchanges = yield getData("Exchange", date);
    let prevsExchanges = yield getData("Exchange", date);
    res.send({
        todays: todaysExchanges,
        prevs: prevsExchanges
    });
}));
router.post('/interest', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(req.body.searchdate);
    // const date = new Date("2022.10.24");
    let interests = yield getData("Interest", date);
    res.send(interests);
}));
router.post('/international', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(req.body.searchdate);
    // const date = new Date("2022.10.21");
    let internationals = yield getData("International", date);
    res.send(internationals);
}));
function getData(type, date) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        while (result.length === 0) {
            const historyCheck = yield db.checkHistory(date);
            let history = null;
            switch (type) {
                case "Exchange":
                    history = historyCheck.exchange;
                    break;
                case "Interest":
                    history = historyCheck.interest;
                    break;
                case "International":
                    history = historyCheck.international;
                    break;
            }
            if (history == null) {
                let data = yield bankAPI.getData(type, date);
                yield db.setData(data, type, date);
                yield db.setHistory(type, data.length > 0, date);
                result = data;
            }
            else if (history == true) {
                let data = yield db.getData(type, date);
                result = data;
            }
            date.setDate(date.getDate() - 1);
        }
        return result;
    });
}
exports.default = router;
