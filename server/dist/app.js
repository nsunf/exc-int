"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client/build')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../../client/build/index.html'));
});
app.listen(process.env.PORT, () => {
    console.log('express server is running on port ' + process.env.PORT);
});
