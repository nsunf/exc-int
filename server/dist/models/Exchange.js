"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exchange {
    constructor({ cur_unit, deal_bas_r, cur_nm, flag, fluc_r, date }) {
        this._cur_unit = cur_unit;
        this._cur_nm = cur_nm;
        this._flag = flag;
        this._fluc_r = fluc_r;
        this._date = date;
        if (typeof deal_bas_r == 'string') {
            this._deal_bas_r = parseInt(deal_bas_r.replace(',', ''));
        }
        else {
            this._deal_bas_r = deal_bas_r;
        }
    }
    get curUnit() {
        return this._cur_unit;
    }
    get dealBasR() {
        return this._deal_bas_r;
    }
    get curNm() {
        return this._cur_nm;
    }
    get flag() {
        return this._flag;
    }
    get flucR() {
        return this._fluc_r;
    }
    get date() {
        return this._date;
    }
    get delaBasRStr() {
        const str = this._deal_bas_r.toString();
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
