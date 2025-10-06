import { Order } from "./order"
import { PaymentGateway } from "./payment-gateway-interface"

//mock external class  
class StringClient {
  charges: () => {
    create: (amount: number) => {

    }
  }
}


export class StripePaymentGateway implements PaymentGateway {
  //pattern adapter
  constructor(
  ) { }

  pay(order: Order): void {
    // aqui não tem problema dar o new 
    // pois ela precisa está aclopada com a StringClient
    const stripeClient = new StringClient()

  }

}