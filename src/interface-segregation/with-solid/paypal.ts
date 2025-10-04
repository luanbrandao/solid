import { PaymentMethodInterface } from "./contracts/payment-method-interface";

export class PayPal implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing PayPal`);
  }
} 