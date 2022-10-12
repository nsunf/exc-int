interface Exchange {
  result: 1 | 2 | 3 | 4; // 조회 결과
  cur_unit: string; // 통화 코드
  ttb: string; // 전신환(송금) 받으실 때
  tts: string; // 전신환(송금) 보내실 때
  deal_bas_r: string; // 매매 기준율
  bkpr: string; // 장부 가격
  yy_efee_r: string; // 년환가료율
  ten_dd_efee_r: string; // 10일 환가료율
  kftc_bkpr: string; // 서울 외국환 중개 매매 기준율
  kftc_deal_bas_r: string; // 서울 외국환 중개 장부 가격
  cur_nm: string; // 국가 이름 및 통화 이름
  flag: string;
  fluc_r: number;
}