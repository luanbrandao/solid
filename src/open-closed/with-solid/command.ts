
import { FixedDiscount } from "./fixed-discount";
import { Order } from "./order";
import { PercentageDiscount } from "./percentage-discount";

const order1 = new Order(200)
order1.setDiscount(new FixedDiscount(10))
console.log(order1.getAmount())

const order2 = new Order(200)
order2.setDiscount(new PercentageDiscount(25))
console.log(order2.getAmount())

