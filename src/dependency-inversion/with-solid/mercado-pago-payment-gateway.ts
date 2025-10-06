import { Order } from "./order";
import { PaymentGateway } from "./payment-gateway-interface";

export class MercadoPagoPaymentGateway implements PaymentGateway {
  //pattern adapter
  constructor(
  ) { }
  pay(order: Order): void {
    console.log("pagando com mercado pago");
  }
}