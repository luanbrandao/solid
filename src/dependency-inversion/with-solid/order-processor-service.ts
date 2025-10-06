import { Order } from "../without-solid/order";
import { PaymentGateway } from "./payment-gateway-interface";
import { StripePaymentGateway } from "./stripe-payment-gateway";


export class OrderProcessorService {

  constructor(
    // private readonly stripePaymentGateway: StripePaymentGateway
    // agora depende da abstração
    private readonly stripePaymentGateway: PaymentGateway
  ) { }


  process(order: Order): void {
    console.log('Processing order');
    this.stripePaymentGateway.pay(order)
  }
}  