"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Interest {
    constructor({ idx, sfln_intrc_nm, int_r, date }) {
        if (idx) {
            if (typeof idx === 'number') {
                this.idx = idx;
            }
            else {
                this.idx = parseInt(idx);
            }
        }
        this.sfln_intrc_nm = sfln_intrc_nm;
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
    get getIdx() {
        return this.idx;
    }
    get getSflnIntrcNm() {
        return this.sfln_intrc_nm;
    }
    get getIntR() {
        return this.int_r;
    }
    get getDate() {
        return this.date;
    }
}
exports.default = Interest;
