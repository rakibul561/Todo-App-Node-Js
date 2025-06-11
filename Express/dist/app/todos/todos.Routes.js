"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
const filepath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todoRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, priority, description } = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    yield collection.insertOne({
        title: title,
        description: description,
        priorit: priority,
        isCompleted: false
    });
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.send(todos);
}));
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
