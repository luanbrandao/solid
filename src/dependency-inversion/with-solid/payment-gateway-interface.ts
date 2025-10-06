import { Order } from "./order";

export interface PaymentGateway {
  pay(order: Order): void
} 