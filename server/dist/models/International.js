"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class International {
    constructor({ cur_fund, sfln_intrc_nm, int_r, flag, date }) {
        this.cur_fund = cur_fund;
        this.sfln_intrc_nm = sfln_intrc_nm;
        this.flag = flag;
        if (typeof int_r == 'string') {
            this.int_r = parseFloat(int_r);
        }
        else {
            this.int_r = int_r;
        }
        if (typeof date == 'string') {
            this.date = new Date(date);
        }
        else {
            this.date = date;
        }
    }
    get getCurFund() {
        return this.cur_fund;
    }
    get getSflnIntrcNm() {
        return this.sfln_intrc_nm;
    }
    get getIntR() {
        return this.int_r;
    }
    get getFlag() {
        return this.flag;
    }
    get getDate() {
        return this.date;
    }
}
exports.default = International;
