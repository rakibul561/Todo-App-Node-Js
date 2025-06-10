"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    console.log("From todos Router");
    res.json({
        message: "From todos router",
        data
    });
});
exports.todoRouter.post('/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World!');
});
exports.todoRouter.get('/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World!');
});
exports.todoRouter.put('/update-todo/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World!');
});
exports.todoRouter.delete('/delete-todo/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World!');
});
