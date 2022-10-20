"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../services/db"));
const BankAPI_1 = __importDefault(require("../services/BankAPI"));
const router = express_1.default.Router();
const db = new db_1.default();
const bankAPI = new BankAPI_1.default();
router.get('/exchange', (req, res) => {
    const date = new Date('2022.10.20');
    // check today's exc
    // check prev exc
    db.checkHistory(date)
        .then(data => {
        res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8;' });
        res.write(JSON.stringify(data));
        res.end();
    });
});
exports.default = router;
