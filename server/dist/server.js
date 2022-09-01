"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const drink_model_1 = require("./models/drink.model");
const app = express_1.default();
// CORS 
app.use(cors_1.default({ credentials: true, origin: true }));
// app.options('*', cors({credentials: true, origin: true}));
app.use(cors_1.default({
    credentials: true,
    origin: '*'
}));
app.use(express_1.default.json()); //New Body Parser
app.use(express_1.default.urlencoded({ extended: false })); // Also parse HTML Forms
app.use(cookie_parser_1.default()); //Cookie parser
app.get('/menu', (req, res, next) => {
    res.status(200).send(drink_model_1.menu);
});
app.get('/orders', (req, res, next) => {
    res.status(200).send(drink_model_1.orders);
});
app.get('/orders/:id', (req, res, next) => {
    let order = drink_model_1.orders[parseInt(req.params.id)];
    res.status(200).send(order);
});
app.post('/orders', (req, res, next) => {
    let obj = req.body;
    let tmp = [];
    obj.forEach((element) => {
        tmp.push(element);
    });
    drink_model_1.orders.push(tmp);
    res.status(200).send(drink_model_1.orders);
});
app.delete('/orders/:id', (req, res, next) => {
    let index = parseInt(req.params.id);
    console.log(index);
    drink_model_1.orders.splice(index, 1);
    res.status(204).send('');
});
app.listen(3000);
//# sourceMappingURL=server.js.map