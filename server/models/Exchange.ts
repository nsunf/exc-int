export interface IExchange {
  cur_unit: string;
  deal_bas_r: string | number;
  cur_nm: string;
  flag?: string;
  fluc_r?: number;
  date?: Date | string;
}

export default class Exchange implements IData{
  private cur_unit: string;
  private deal_bas_r: number;
  private cur_nm: string;
  private flag?: string;
  private fluc_r?: number;
  private date?: Date;

  public constructor({ cur_unit, deal_bas_r, cur_nm, flag, fluc_r, date }: IExchange) {
    this.cur_unit = cur_unit;
    this.cur_nm = cur_nm;
    this.flag = flag;
    this.fluc_r = fluc_r;

    if (typeof deal_bas_r == 'string') {
      this.deal_bas_r = parseInt(deal_bas_r.replace(',', ''));
    } else {
      this.deal_bas_r = deal_bas_r;
    }

    if (typeof date == 'string') {
      this.date = new Date(date);
    } else {
      this.date = date; 
    }
  }

  public get getCurUnit(): string {
    return this.cur_unit;
  }
  public get getDealBasR(): number {
    return this.deal_bas_r;
  }
  public get getCurNm(): string {
    return this.cur_nm;
  }
  public get getFlag(): string | undefined {
    return this.flag;
  }
  public get getFlucR(): number | undefined {
    return this.fluc_r;
  }
  public get getDate(): Date | undefined {
    return this.date;
  }
  public get getDealBasRStr(): string {
    const str = this.deal_bas_r.toString();
    const splited = str.split('.');
    const num = splited[0];
    let result: string[] = [];

    for (let i = num.length - 1; i >= 0; i--) {
      if ((result.length + 1) % 4 === 0)
        result.unshift(',');
      result.unshift(num[i]);
    }

    return result.join("") + "." + splited[1];
  }
}