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

  async getExchange(date: Date = new Date()): Promise<Exchange[]> {
    const response = await axios({
      url: BankAPI.url + "exchangeJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP01",
        searchdate: getDateStr(date)
      }
    });
    console.log(getDateStr(date) + " " + response.data.length)
    const data = response.data as IExchange[];

    return data.map(ie => new Exchange(ie));
  }

  async getInterest(date: Date = new Date()): Promise<Interest[]> {
    const response = await axios({
      url: BankAPI.url + "interestJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP02",
        searchdate: getDateStr(date)
      }
    });

    const data = response.data as IInterest[];

    return data.map(ii => new Interest(ii));
  }

  async getInternational(date: Date = new Date()): Promise<International[]> {
    const response = await axios({
      url: BankAPI.url + "internationalJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP03",
        searchdate: getDateStr(date)
      }
    });

    const data = response.data as { cirr_list: IInternational[] };

    return data.cirr_list.map(ii => new International(ii));
  }
}

export default BankAPI;