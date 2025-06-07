"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, "./db/todo.json");
// get new todos
app.get('/', (req, res) => {
    res.send('wellcome to Todos App !!!');
});
// get all todos
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    res.send(data);
});
app.post('/todos/create-todo', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
