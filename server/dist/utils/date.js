"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateStr = void 0;
function getDateStr(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    let yStr = y.toString();
    let mStr = m.toString();
    let dStr = d.toString();
    mStr = mStr.length === 1 ? "0" + mStr : mStr;
    dStr = dStr.length === 1 ? "0" + dStr : dStr;
    const dateStr = `${yStr}${mStr}${dStr}`;
    return dateStr;
}
exports.getDateStr = getDateStr;
