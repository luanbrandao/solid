
import { Order } from "./order";

const order1 = new Order(200)
order1.applyFixedDiscount(50)
console.log(order1.getAmount())

const order2 = new Order(200)
order2.applyPercentageDiscount(10)
console.log(order2.getAmount())

