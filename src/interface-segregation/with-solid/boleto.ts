import { DocumentGenerableInterface } from "./contracts/document-generable-interface";
import { PaymentMethodInterface } from "./contracts/payment-method-interface";

export class Boleto implements PaymentMethodInterface, DocumentGenerableInterface {
  pay(): void {
    console.log(`Processing Boleto`);
  }

  generateDocument(): void {
    console.log(`Processing generateDocument`);
  }
}