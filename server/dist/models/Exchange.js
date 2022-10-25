"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exchange {
    constructor({ cur_unit, deal_bas_r, cur_nm, flag, fluc_r, date }) {
        this.cur_unit = cur_unit;
        this.cur_nm = cur_nm;
        this.flag = flag;
        this.fluc_r = fluc_r;
        if (typeof deal_bas_r == 'string') {
            this.deal_bas_r = parseInt(deal_bas_r.replace(',', ''));
        }
        else {
            this.deal_bas_r = deal_bas_r;
        }
        if (typeof date == 'string') {
            this.date = new Date(date);
        }
        else {
            this.date = date;
        }
    }
    get getCurUnit() {
        return this.cur_unit;
    }
    get getDealBasR() {
        return this.deal_bas_r;
    }
    get getCurNm() {
        return this.cur_nm;
    }
    get getFlag() {
        return this.flag;
    }
    get getFlucR() {
        return this.fluc_r;
    }
    get getDate() {
        return this.date;
    }
    get getDealBasRStr() {
        const str = this.deal_bas_r.toString();
        const splited = str.split('.');
        const num = splited[0];
        let result = [];
        for (let i = num.length - 1; i >= 0; i--) {
            if ((result.length + 1) % 4 === 0)
                result.unshift(',');
            result.unshift(num[i]);
        }
        return result.join("") + "." + splited[1];
    }
}
exports.default = Exchange;
