import { PaymentMethodInterface } from "./payment-method-interface";

export class CreditCard implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing credit`);
  }

  generateQrCode(): void {
    throw new Error("Pagamento via CreditCard não gera QrCode.");
  }

  generateDocument(): void {
    throw new Error("Pagamento via CreditCard não gera Document.");
  }
} 