export interface IInternational {
  cur_fund: string;
  sfln_intrc_nm: string;
  int_r: string | number;
}

export default class International {
  private _cur_fund: string;
  private _sfln_intrc_nm: string;
  private _int_r: number;

  public constructor({ cur_fund, sfln_intrc_nm, int_r }: IInternational) {
    this._cur_fund = cur_fund;
    this._sfln_intrc_nm = sfln_intrc_nm;
    if (typeof int_r === 'string') {
      this._int_r = parseFloat(int_r);
    } else {
      this._int_r = int_r;
    }
  }

  public get curFund(): string {
    return this._cur_fund;
  }
  public get sflnIntrcNm(): string {
    return this._sfln_intrc_nm;
  }
  public get intR(): number {
    return this._int_r;
  }
}