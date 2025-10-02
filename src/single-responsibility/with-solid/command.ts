
import { Order } from "./order";
import { OrderProcessorService } from "./order-processor-service";
import { OrderCalculator } from "./order-calculator";
import { InventoryChecker } from "./inventory-checker";
import { PaymentProcessor } from "./payment-processor";

const order: Order = new Order('123', 10)

const inventoryChecker = new InventoryChecker()
const orderCalculator = new OrderCalculator()
const paymentProcessor = new PaymentProcessor()

const orderProcessorService = new OrderProcessorService(inventoryChecker, orderCalculator, paymentProcessor)
orderProcessorService.processOrder(order)