import axios from 'axios';
import dotenv from 'dotenv';
import { getDateStr } from '../utils/date';

dotenv.config();

class BankAPI {
  // https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=mPkhHInmDpSzkYMVAex0wnj3ZW8Imq61&data=AP01
  // https://www.koreaexim.go.kr/site/program/financial/interestJSON?authkey=G1Bo3CZkToDgfvd9dRrpU4jSdvxVO0S3&data=AP02
  // https://www.koreaexim.go.kr/site/program/financial/internationalJSON?authkey=qn5ACltUfDchAgUdyVo5Z2FNnhiHtbPl&data=AP03

  static url = "https://www.koreaexim.go.kr/site/program/financial/";

  constructor() {

  }

  async getExchange(date: Date = new Date()): Promise<RawExchange[]> {
    const response = await axios({
      url: BankAPI.url + "exchangeJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP01",
        searchdate: getDateStr(date)
      }
    });

    return response.data;
  }

  async getInterest(date: Date = new Date()): Promise<RawInterest[]> {
    const response = await axios({
      url: BankAPI.url + "interestJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP02",
        searchdate: getDateStr(date)
      }
    });

    return response.data;
  }

  async getInternational(date: Date = new Date()): Promise<CIRR[]> {
    const response = await axios({
      url: BankAPI.url + "internationalJSON",
      params: {
        authkey: process.env.API_AUTH_KEY,
        data: "AP03",
        searchdate: getDateStr(date)
      }
    });

    return (response.data as RawInternational).cirr_list;
  }
}

export default BankAPI;