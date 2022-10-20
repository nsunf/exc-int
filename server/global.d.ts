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

interface Exchange {
  cur_unit: string;
  deal_bas_r: string;
  cur_nm: string;
  flag: string;
  fluc_r: number;
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