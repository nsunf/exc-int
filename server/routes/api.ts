import express from "express";
import DB from "../services/db";
import BankAPI from "../services/BankAPI";

import { getDateStr } from '../utils/date';

const router = express.Router();

const db = new DB();
const bankAPI = new BankAPI();

router.get('/exchange', (req, res) => {
  const date = new Date('2022.10.20');

  // check today's exc
  // check prev exc

  db.checkHistory(date)
    .then(data => {
      res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8;' });
      res.write(JSON.stringify(data));
      res.end();
    })
})
export default router;