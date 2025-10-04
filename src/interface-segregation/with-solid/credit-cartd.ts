import { PaymentMethodInterface } from "./contracts/payment-method-interface";

export class CreditCard implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing credit`);
  }
} 