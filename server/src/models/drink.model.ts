class Drink {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    addOrder(drink: Drink) {
        orders.push(drink);
    }
}

// POPULATE USER ARRAY 
const menu: any[] = [];
menu.push(new Drink("Beer", 5));
menu.push(new Drink("Mixed Drink", 8));
menu.push(new Drink("Soda", 3));
menu.push(new Drink("Water", 0));

const orders: any[] = []; 
orders.push([menu[1], menu[1]])
orders.push([menu[1], menu[2], menu[2]])

export { Drink, menu, orders }