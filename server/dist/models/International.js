"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class International {
    constructor({ cur_fund, sfln_intrc_nm, int_r }) {
        this._cur_fund = cur_fund;
        this._sfln_intrc_nm = sfln_intrc_nm;
        if (typeof int_r === 'string') {
            this._int_r = parseFloat(int_r);
        }
        else {
            this._int_r = int_r;
        }
    }
    get curFund() {
        return this._cur_fund;
    }
    get sflnIntrcNm() {
        return this._sfln_intrc_nm;
    }
    get intR() {
        return this._int_r;
    }
}
exports.default = International;
