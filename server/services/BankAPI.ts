import axios from 'axios';
import dotenv from 'dotenv';
import { getDateStr } from '../utils/date';
import Exchange, { IExchange } from "../models/Exchange";
import Interest, { IInterest } from "../models/Interest";
import International, { IInternational } from "../models/International";

dotenv.config();

class BankAPI {
  static url = "https://www.koreaexim.go.kr/site/program/financial/";

  constructor() {
  }

  async getData(type: DataType, date: Date = new Date()): Promise<IData[]> {
    let urlParam = BankAPI.url;
    let dataParam = "AP0";

    switch (type) {
      case 'Exchange':
        urlParam += "exchangeJSON";
        dataParam += "1";
        break;
      case 'Interest':
        urlParam += "interestJSON";
        dataParam += "2";
        break;
      case 'International':
        urlParam += "internationalJSON";
        dataParam += "3";
        break;
    }

    const response = await axios({
      url: urlParam,
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: dataParam,
        searchdate: getDateStr(date)
      }
    });

    console.log(`${getDateStr(date, true)} ${type} data(${response.data.length}) received from BankAPI`);

    switch (type) {
      case 'Exchange':
        const ex = response.data as IExchange[];
        return ex.map(e => new Exchange(e));
      case 'Interest':
        const itr = response.data as IInterest[];
        return itr.map(e => new Interest(e));
      case 'International':
        const itn = response.data as { cirr_list: IInternational[] };
        return itn.cirr_list.map((e) => new International(e));
    }
  }
}

export default BankAPI;