interface Api_History {
  exchange: boolean | null;
  interest: boolean | null;
  international: boolean | null;
  date: Date;
}

interface RawExchange {
  result: number;
  cur_unit: string;
  ttb: string;
  deal_bas_r: string;
  bkpr: string;
  yy_efee_r: string;
  ten_dd_efee_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  cur_nm: string;
}

interface ExchangeClient {
  cur_unit: string;
  deal_bas_r: string;
  cur_nm: string;
  flag: string;
  fluc_r: number;
}

interface ExchangeDB {
  cur_unit: string;
  deal_bas_r: number;
  cur_nm: string;
  flag?: string;
}

interface RawInterest {
  result: number;
  sfln_intrc_nm: string;
  int_r: string;
}

interface CIRR {
  cur_fund: string;
  sfln_intrc_nm: string;
  int_r: string;
}

interface RawInternational {
  result: number;
  cirr_list: CIRR[];
}

interface Exchange {
  cur_unit: string;
  deal_bas_r: string; // number를 뱉는다. DB 에서 뱉는 타입과 interface에서 지정한 타입간의 충돌. 오류도 안남.
  cur_nm: string;
  flag?: string;
  fluc_r?: number;
  date?: Date;
}

interface Interest {
  idx?: string;
  sfln_intrc_nm: string;
  int_r: number;
  date?: Date;
}

