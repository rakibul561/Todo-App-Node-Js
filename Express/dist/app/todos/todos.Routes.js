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
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
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
exports.todoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
}));
exports.todoRouter.put('/update-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const { title, priority, description, isCompleted } = req.body;
    const filter = { _id: new mongodb_2.ObjectId(id) };
    const updatedTodo = yield collection.updateOne(filter, { $set: { title, priority, description, isCompleted } }, { upsert: true });
    res.json(updatedTodo);
}));
exports.todoRouter.delete('/delete-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const data = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    console.log(data);
    res.json(data);
}));
