export interface IInterest {
  idx?: string|number;
  sfln_intrc_nm: string;
  int_r: string | number;
  date?: Date;
}

export default class Interest {
  private _idx?: number;
  private _sfln_intrc_nm: string;
  private _int_r: number;
  private _date?: Date;

  public constructor({ idx, sfln_intrc_nm, int_r, date }: IInterest) {
    if (idx) {
      if (typeof idx === 'number') {
        this._idx = idx;
      } else {
        this._idx = parseInt(idx);
      }
    }

    this._sfln_intrc_nm = sfln_intrc_nm;
    this._date = date;

    if (typeof int_r === 'string') {
      this._int_r = parseFloat(int_r);
    } else {
      this._int_r = int_r;
    }
  }

  public get idx(): number | undefined {
    return this._idx;
  }
  public get sflnIntrcNm(): string {
    return this._sfln_intrc_nm;
  }
  public get intR(): number {
    return this._int_r;
  }
  public get date(): Date | undefined {
    return this._date;
  }
}