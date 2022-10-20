import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { getDateStr } from "../utils/date";
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

    const arr = response[0] as Api_History[]; 

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
      return arr[0];
    }
  }

  async checkExchange(date: Date): Promise<boolean> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT * FROM exchange
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];
    return response[0].length > 0;
  }

  async checkInterest(): Promise<boolean> {
    const dateStr = getDateStr(new Date());

    const response = await this.pool.query(`
      SELECT * FROM interest
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];
    return response[0].length > 0;
  }

  async checkInternational(): Promise<boolean> {
    const dateStr = getDateStr(new Date());

    const response = await this.pool.query(`
      SELECT * FROM international
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];
    return response[0].length > 0;
  }

  async getExchanges(date: Date): Promise<mysql.RowDataPacket[]> {
    const dateStr = getDateStr(date);

    const response = await this.pool.query(`
      SELECT * FROM exchange
      WHERE date = '${dateStr}';
    `) as mysql.RowDataPacket[][];

    return response[0];
  }

  async setExchanges(exchanges: RawExchange[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = exchanges.length;
    let progress = 1;
    
    exchanges.forEach(async (exc) => {
      const deal_bas_r = Number(exc.deal_bas_r.replace(',', ''));
      await this.pool.query(`
        INSERT INTO exchange(cur_unit, deal_bas_r, cur_nm, date)
        VALUES('${exc.cur_unit}', '${deal_bas_r}', '${exc.cur_nm}', '${dateStr}');
      `);
      console.log(`set exchanges to mysql (${progress}/${numOfJob})`);
      progress++;
    })
  }

  async setInterest(interests: RawInterest[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = interests.length;
    let progress = 1;

    interests.forEach(async (inte, i) => {
      const int_r = Number(inte.int_r);
      await this.pool.query(`
        INSERT INTO interest(idx, sfln_intrc_nm, int_r, date)
        VALUES(${i}, '${inte.sfln_intrc_nm}', '${int_r}', '${dateStr}');
      `);
      console.log(`set interest to mysql (${progress}/${numOfJob})`);
      progress++;
    })
  }

  async setInternational(international: CIRR[], date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = international.length;
    let progress = 1;

    international.forEach(async (cirr) => {
      const int_r = Number(cirr.int_r);
      await this.pool.query(`
        INSERT INTO international(cur_fund, sfln_intrc_nm, int_r, date)
        VALUES('${cirr.cur_fund}', '${cirr.sfln_intrc_nm}', '${int_r}', '${dateStr}');
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