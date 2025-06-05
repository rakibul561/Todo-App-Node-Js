"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('wellcome to Todos App !!!');
});
app.get('/todos', (req, res) => {
    res.send('Hello World!');
});
app.post('/todos/create-todo', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
