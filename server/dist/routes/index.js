"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../../client/build/index.html'));
});
router.get('/hoho', (req, res) => {
    res.end('hohoho');
});
exports.default = router;
