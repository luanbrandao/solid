import { Order } from "./order";
import { InventoryChecker } from "./inventory-checker";
import { OrderCalculator } from "./order-calculator";
import { PaymentProcessor } from "./payment-processor";

// pattern facade
export class OrderProcessorService {
  constructor(
    private readonly inventoryChecker: InventoryChecker,
    private readonly orderCalculator: OrderCalculator,
    private readonly paymentProcessor: PaymentProcessor,
  ) { }

  processOrder(order: Order): void {
    this.inventoryChecker.check(order)
    this.orderCalculator.calculate(order)
    this.paymentProcessor.process(order)
  }
}