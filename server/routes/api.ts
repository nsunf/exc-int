import express from "express";
import DB from "../services/DB";
import BankAPI from "../services/BankAPI";

import { getDateStr } from '../utils/date';
import Exchange from "../models/Exchange";
import Interest from "../models/Interest";
import International from "../models/International";

const router = express.Router();

const db = new DB();
const bankAPI = new BankAPI();

async function getExchanges(date: Date) {
  let result: Exchange[] = [];

  while (result.length === 0) {
    const historyCheck = await db.checkHistory(date);

    if (historyCheck.exchange == null) {
      let exchanges = await bankAPI.getExchange(date);
      await db.setExchanges(exchanges, date);
      await db.setHistory({ exchange: exchanges.length > 0 }, date);
      result = exchanges;
    } else if (historyCheck.exchange == true) {
      let exchanges = await db.getExchanges(date);
      result = exchanges;
    }

    date.setDate(date.getDate() - 1);
  }

  return result;
}

async function getInterests(date: Date) {
  let result: Interest[] = [];

  while (result.length === 0) {
    const historyCheck = await db.checkHistory(date);

    if (historyCheck.interest == null) {
      let interests = await bankAPI.getInterest(date);
      await db.setInterest(interests, date);
      await db.setHistory({ interest: interests.length > 0 }, date);
      result = interests;
    } else if (historyCheck.interest == true) {
      let interests = await db.getInterest(date);
      result = interests;
    }

    date.setDate(date.getDate() - 1);
  }

  return result;
}

async function getInternationals(date: Date) {
  let result: International[] = [];

  while (result.length === 0) {
    const historyCheck = await db.checkHistory(date);

    if (historyCheck.international == null) {
      let internationals = await bankAPI.getInternational(date);
      await db.setInternational(internationals, date);
      await db.setHistory({ international: internationals.length > 0 }, date);
      result = internationals
    } else if (historyCheck.international == true) {
      let internationals = await db.getInternational(date);
      result = internationals;
    }

    date.setDate(date.getDate() - 1);
  }

  return result;
}

router.get('/exchange', async (req, res) => {
  const date = new Date('2022.08.19');

  let todaysExchanges = await getExchanges(date); 
  let prevsExchanges = await getExchanges(date); 

  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
  res.write(JSON.stringify(todaysExchanges.length));
  res.write('<br/>----------------------------------<br/>');
  res.write(JSON.stringify(prevsExchanges.length));
  res.end();
})

router.get('/interest', async (req, res) => {
  const date = new Date('2022.08.18');

  let interests = await getInterests(date);

  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
  res.write(JSON.stringify(interests.length));
  res.end();
})

router.get('/international', async (req, res) => {
  const date = new Date('2022.08.19');

  let internationals = await getInternationals(date);

  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
  res.write(JSON.stringify(internationals.length));
  res.end();
})

export default router;