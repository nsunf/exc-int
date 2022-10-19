import express, { json } from "express";
import axios from "axios";
import dotenv from "dotenv";
import mysql from 'mysql2';

import { getDateStr } from '../utils/date';

dotenv.config();

const router = express.Router();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});


router.get('/exchange', (req, res) => {
  const dateStr = getDateStr(new Date());

  axios
    .get(
      "https://www.koreaexim.go.kr/site/program/financial/internationalJSON",
      {
        params: {
          authkey: process.env.API_AUTH_KEY,
          searchdate: dateStr,
          data: "AP03",
        },
      }
    )
    .then((apiRes) => {
      const data = apiRes.data as RawInternational;

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
})

export default router;