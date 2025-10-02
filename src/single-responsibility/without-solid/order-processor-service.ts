import { Order } from "./order";

export class OrderProcessorService {

  processOrder(order: Order): void {
    this.checkInventory(order);
    this.calculateTotal(order);
    this.processOrder(order);
  }

  private checkInventory(order: Order): void {
    console.log('checkInventory')
  }

  private calculateTotal(order: Order): void {
    console.log('calculateTotal')
  }

  private processPayment(order: Order): void {
    console.log('processPayment')
  }
}