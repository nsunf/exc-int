export interface IExchange {
  cur_unit: string;
  deal_bas_r: string | number;
  cur_nm: string;
  flag?: string;
  fluc_r?: number;
  date?: Date;
}

export default class Exchange{
  private _cur_unit: string;
  private _deal_bas_r: number;
  private _cur_nm: string;
  private _flag?: string;
  private _fluc_r?: number;
  private _date?: Date;

  public constructor({ cur_unit, deal_bas_r, cur_nm, flag, fluc_r, date }: IExchange) {
    this._cur_unit = cur_unit;
    this._cur_nm = cur_nm;
    this._flag = flag;
    this._fluc_r = fluc_r;
    this._date = date;

    if (typeof deal_bas_r == 'string') {
      this._deal_bas_r = parseInt(deal_bas_r.replace(',', ''));
    } else {
      this._deal_bas_r = deal_bas_r;
    }
  }

  public get curUnit(): string {
    return this._cur_unit;
  }
  public get dealBasR(): number {
    return this._deal_bas_r;
  }
  public get curNm(): string {
    return this._cur_nm;
  }
  public get flag(): string | undefined {
    return this._flag;
  }
  public get flucR(): number | undefined {
    return this._fluc_r;
  }
  public get date(): Date | undefined {
    return this._date;
  }
  public get delaBasRStr(): string {
    const str = this._deal_bas_r.toString();
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