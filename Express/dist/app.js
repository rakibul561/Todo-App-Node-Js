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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_Routes_1 = require("./app/todos/todos.Routes");
app.use(express_1.default.json());
app.use('/todos', todos_Routes_1.todoRouter);
// get new todos
app.get('/', (req, res, next) => {
    console.log({
        url: req.url,
        method: req.method,
        header: req.header
    });
    next();
}, (req, res, next) => {
    try {
        console.log(something);
        res.send('welcome to Todos App!');
    }
    catch (error) {
        next(error);
    }
});
// error route
app.get('/error', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(something);
        res.send('welcome to error er duniya!!!');
    }
    catch (error) {
        next(error);
    }
}));
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not Found" });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log("error", error);
        res.status(400).json({
            message: "something went wrong from global error handaler",
            error
        });
    }
});
exports.default = app;
