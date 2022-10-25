export interface IInterest {
  idx?: string|number;
  sfln_intrc_nm: string;
  int_r: string | number;
  date?: Date | string;
}

export default class Interest implements IData {
  private idx?: number;
  private sfln_intrc_nm: string;
  private int_r: number;
  private date?: Date;

  public constructor({ idx, sfln_intrc_nm, int_r, date }: IInterest) {
    if (idx) {
      if (typeof idx === 'number') {
        this.idx = idx;
      } else {
        this.idx = parseInt(idx);
      }
    }

    this.sfln_intrc_nm = sfln_intrc_nm;

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

  public get getIdx(): number | undefined {
    return this.idx;
  }
  public get getSflnIntrcNm(): string {
    return this.sfln_intrc_nm;
  }
  public get getIntR(): number {
    return this.int_r;
  }
  public get getDate(): Date | undefined {
    return this.date;
  }
}