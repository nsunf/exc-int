interface Exchange {
  cur_unit: string; // 통화 코드
  deal_bas_r: string; // 매매 기준율
  cur_nm: string; // 국가 이름 및 통화 이름
  flag: string;
  fluc_r: number;
}

interface ExchangeDealBas {
  date: string;
  deal_bas_r: string;
}

interface ExchangeDetail {
  info: Exchange;
  deal_bas_r_arr: ExchangeDealBas[];
}

type GraphMode = 'Year'|'Month'|'Week';