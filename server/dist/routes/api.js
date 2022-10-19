"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
const date_1 = require("../utils/date");
dotenv_1.default.config();
const router = express_1.default.Router();
const connection = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
});
router.get('/exchange', (req, res) => {
    const dateStr = (0, date_1.getDateStr)(new Date());
    axios_1.default
        .get("https://www.koreaexim.go.kr/site/program/financial/internationalJSON", {
        params: {
            authkey: process.env.API_AUTH_KEY,
            searchdate: dateStr,
            data: "AP03",
        },
    })
        .then((apiRes) => {
        const data = apiRes.data;
        return data.cirr_list;
    }).then(data => {
        return data;
    })
        .then(data => {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(dateStr);
        res.write("<br />");
        res.write(JSON.stringify(data));
        res.end();
    });
});
exports.default = router;
