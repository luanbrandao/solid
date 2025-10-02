
import { Order } from "./order";
import { OrderProcessorService } from "./order-processor-service";

const order: Order = new Order('123', 10)
const orderProcessorService = new OrderProcessorService()

orderProcessorService.processOrder(order)
