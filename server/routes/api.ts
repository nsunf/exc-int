import express from "express";
import DB from "../services/DB";
import BankAPI from "../services/BankAPI";

import Exchange from "../models/Exchange";
import Interest from "../models/Interest";
import International from "../models/International";

const router = express.Router();

const db = new DB();
const bankAPI = new BankAPI();

router.post('/exchange', async (req, res) => {
  const date = new Date(req.body.searchdate);
  // const date = new Date("2022.10.21");

  let todaysExchanges = await getData<Exchange>("Exchange", date); 
  let prevsExchanges = await getData<Exchange>("Exchange", date); 

 res.send({
    todays: todaysExchanges,
    prevs: prevsExchanges
  })
})

router.post('/interest', async (req, res) => {
  const date = new Date(req.body.searchdate);
  // const date = new Date("2022.10.24");

  let interests = await getData<Interest>("Interest", date);

  res.send(interests);
})

router.post('/international', async (req, res) => {
  const date = new Date(req.body.searchdate);
  // const date = new Date("2022.10.21");

  let internationals = await getData<International>("International", date);

  res.send(internationals);
})

async function getData<T extends IData>(type: DataType, date: Date) {
  let result: T[] = [];

  while (result.length === 0) {
    const historyCheck = await db.checkHistory(date);
    let history: boolean | null = null;

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
      let data = await bankAPI.getData(type, date) as T[];
      await db.setData(data, type, date);
      await db.setHistory(type, data.length > 0, date);
      result = data;
    } else if (history == true) {
      let data = await db.getData(type, date) as T[];
      result = data;
    }

    date.setDate(date.getDate() - 1);
  }

  return result;
}


export default router;