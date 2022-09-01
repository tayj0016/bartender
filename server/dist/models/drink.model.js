"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    addOrder(drink) {
        orders.push(drink);
    }
}
exports.Drink = Drink;
// POPULATE USER ARRAY 
const menu = [];
exports.menu = menu;
menu.push(new Drink("Beer", 5));
menu.push(new Drink("Mixed Drink", 8));
menu.push(new Drink("Soda", 3));
menu.push(new Drink("Water", 0));
const orders = [];
exports.orders = orders;
orders.push([menu[1], menu[1]]);
orders.push([menu[1], menu[2], menu[2]]);
//# sourceMappingURL=drink.model.js.map