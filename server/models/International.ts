export interface IInternational {
  cur_fund: string;
  sfln_intrc_nm: string;
  int_r: string | number;
  flag?: string;
  date?: Date | string;
}

export default class International implements IData {
  private cur_fund: string;
  private sfln_intrc_nm: string;
  private int_r: number;
  private flag?: string;
  private date?: Date;

  public constructor({ cur_fund, sfln_intrc_nm, int_r, flag, date }: IInternational) {
    this.cur_fund = cur_fund;
    this.sfln_intrc_nm = sfln_intrc_nm;
    this.flag = flag;

    if (typeof int_r == 'string') {
      this.int_r = parseFloat(int_r);
    } else {
      this.int_r = int_r;
    }

    if (typeof date == 'string') {
      this.date = new Date(date);
    } else {
      this.date = date;
    }
  }

  public get getCurFund(): string {
    return this.cur_fund;
  }
  public get getSflnIntrcNm(): string {
    return this.sfln_intrc_nm;
  }
  public get getIntR(): number {
    return this.int_r;
  }
  public get getFlag(): string | undefined {
    return this.flag;
  }
  public get getDate(): Date | undefined {
    return this.date;
  }
}