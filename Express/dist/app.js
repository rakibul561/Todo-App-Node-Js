"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_Routes_1 = require("./app/todos/todos.Routes");
app.use(express_1.default.json());
app.use('/todos', todos_Routes_1.todoRouter);
// get new todos
app.get('/', (req, res) => {
    res.send('wellcome to  Todos App  f!!!');
});
exports.default = app;
