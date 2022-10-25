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
    const dateStr = getDateStr(date, true);

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
      const history = arr[0] as Api_History; 
      return history;
    }
  }

  async setHistory(type: DataType, bool: boolean, date: Date) {
    let { exchange, interest, international }: { exchange?: boolean, interest?: boolean, international?: boolean } = {};
    if (type == "Exchange") {
      exchange = bool;
    } else if (type == "Interest") {
      interest = bool;
    } else {
      international = bool;
    }

    const dateStr = getDateStr(date);

    const history = await this.checkHistory(date);

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

    await this.pool.query(`
      UPDATE api_history
      SET exchange = ${boolToStr(exchange == undefined ? history.exchange : exchange)},
      interest = ${boolToStr(interest == undefined ? history.interest : interest)},
      international = ${boolToStr(international == undefined ? history.international : international)}
      WHERE date = '${dateStr}';
    `);
  }

  async getData(type: DataType, date: Date): Promise<IData[]> {
    const dateStr = getDateStr(date);

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

    const response = await this.pool.query(query) as mysql.RowDataPacket[][];

    switch (type) {
      case 'Exchange':
        const exc = response[0] as IExchange[];
        return exc.map(e => new Exchange(e)); 
      case 'Interest':
        const itr = response[0] as IInterest[];
        return itr.map(e => new Interest(e));
      case 'International':
        const itn = response[0] as IInternational[];
        return itn.map(e => new International(e));
    }
  }

  async setData(data: IData[], type: DataType, date: Date) {
    const dateStr = getDateStr(date);

    const numOfJob = data.length;
    let progress = 0;

    for (let i = 0; i < data.length; i++) {
      let query = "";

      switch (type) {
        case "Exchange":
          const exc = data[i] as Exchange;
          query = `
            INSERT INTO exchange(cur_unit, deal_bas_r, cur_nm, date)
            VALUES('${exc.getCurUnit}', '${exc.getDealBasR}', '${exc.getCurNm}', '${dateStr}');
          `;
          break;
        case "Interest":
          const itr = data[i] as Interest;
          query = `
            INSERT INTO interest(idx, sfln_intrc_nm, int_r, date)
            VALUES(${i}, '${itr.getSflnIntrcNm}', '${itr.getIntR}', '${dateStr}');
          `;
          break;
        case "International":
          const itn = data[i] as International;
          query = `
            INSERT INTO international(cur_fund, sfln_intrc_nm, int_r, date)
            VALUES('${itn.getCurFund}', '${itn.getSflnIntrcNm}', '${itn.getIntR}', '${dateStr}');
          `;
          break;
      }

      await this.pool.query(query);
      progress++;
    }
    
    console.log(
      numOfJob === progress ?
        `${progress}/${numOfJob} ${type} succeed` :
        `${progress}/${numOfJob} ${type} stopped`
    )
  }
}

export default DB;