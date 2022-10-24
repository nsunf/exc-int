"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Interest {
    constructor({ idx, sfln_intrc_nm, int_r, date }) {
        if (idx) {
            if (typeof idx === 'number') {
                this._idx = idx;
            }
            else {
                this._idx = parseInt(idx);
            }
        }
        this._sfln_intrc_nm = sfln_intrc_nm;
        this._date = date;
        if (typeof int_r === 'string') {
            this._int_r = parseFloat(int_r);
        }
        else {
            this._int_r = int_r;
        }
    }
    get idx() {
        return this._idx;
    }
    get sflnIntrcNm() {
        return this._sfln_intrc_nm;
    }
    get intR() {
        return this._int_r;
    }
    get date() {
        return this._date;
    }
}
exports.default = Interest;
