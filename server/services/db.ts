import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { getDateStr } from "../utils/date";
import Exchange, { IExchange } from "../models/Exchange";
import Interest, { IInterest } from "../models/Interest";
import International, { IInternational } from "../models/International";

dotenv.config();

class DB {
  private pool: mysql.Pool; 
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD
    })
  }

  async checkHistory(date: Date): Promise<Api_History> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT * FROM api_history
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];

    const arr = response[0]; 

    if (arr.length === 0) {
      await this.pool.query(`
        INSERT INTO api_history(exchange, interest, international, date)
        VALUES (null, null, null, '${dateStr}');
      `);
      return {
        exchange: null,
        interest: null,
        international: null,
        date: date
      };
    } else {
      return arr[0] as Api_History;
    }
  }

  async setHistory({ exchange, interest, international }: { exchange?: boolean, interest?: boolean, international?: boolean}, date: Date) {
    const dateStr = getDateStr(date);

    const history = await this.checkHistory(date);
    console.log(history);

    const boolToStr = (bool: boolean|number|null) => {
      switch (bool) {
        case null :
          return 'NULL';
        case true :
        case 1:
          return 'true';
        case false:
        case 0:
          return 'false';
      }
    }
    console.log(history.exchange, history.interest, history.international)
    console.log(exchange, interest, international);
    await this.pool.query(`
      UPDATE api_history
      SET exchange = ${boolToStr(exchange == undefined ? history.exchange : exchange)},
      interest = ${boolToStr(interest == undefined ? history.interest : interest)},
      international = ${boolToStr(international == undefined ? history.international : international)}
      WHERE date = '${dateStr}';
    `);
  }

  async getExchanges(date: Date): Promise<Exchange[]> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT flag.flag, exchange.cur_unit, deal_bas_r, cur_nm, date FROM exchange
      LEFT JOIN flag ON flag.cur_unit = exchange.cur_unit
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];

    const data = response[0] as IExchange[];

    return data.map(ie => new Exchange(ie));
  }

  async getInterest(date: Date): Promise<Interest[]> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT * FROM interest
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];

    const data = response[0] as IInterest[];

    return data.map(ii => new Interest(ii));
  }

  async getInternational(date: Date): Promise<International[]> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT * FROM international
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];

    const data = response[0] as IInternational[];

    return data.map(ii => new International(ii));
  }


  async setExchanges(exchanges: Exchange[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = exchanges.length;
    let progress = 1;
    
    exchanges.forEach(async (exc) => {
      await this.pool.query(`
        INSERT INTO exchange(cur_unit, deal_bas_r, cur_nm, date)
        VALUES('${exc.curUnit}', '${exc.dealBasR}', '${exc.curNm}', '${dateStr}');
      `);
      console.log(`set exchanges to mysql (${progress}/${numOfJob})`);
      progress++;
    })
  }

  async setInterest(interests: Interest[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = interests.length;
    let progress = 1;

    interests.forEach(async (inte, i) => {
      await this.pool.query(`
        INSERT INTO interest(idx, sfln_intrc_nm, int_r, date)
        VALUES(${i}, '${inte.sflnIntrcNm}', '${inte.intR}', '${dateStr}');
      `);
      console.log(`set interest to mysql (${progress}/${numOfJob})`);
      progress++;
    })
  }

  async setInternational(international: International[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = international.length;
    let progress = 1;

    international.forEach(async (inte) => {
      await this.pool.query(`
        INSERT INTO international(cur_fund, sfln_intrc_nm, int_r, date)
        VALUES('${inte.curFund}', '${inte.sflnIntrcNm}', '${inte.intR}', '${dateStr}');
      `);
      console.log(`set international to mysql (${progress}/${numOfJob})`);
      progress++;
    })
  }
  // get exchange
  // today
  // week
  // month
  // year

  // get interest
  // today

  // get international
  // today

  // if (no data) -> request api -> insert into db

  // set exchange
  // set interest
  // set international
}

export default DB;