"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set('PORT', 5000);
app.get('/', (req, res) => {
    console.log('hahaha');
    res.sendFile(path_1.default.resolve(__dirname, '../../client/build/index.html'));
});
app.listen(app.get('PORT'), () => {
    console.log('express server is running on port ' + app.get('PORT'));
});
