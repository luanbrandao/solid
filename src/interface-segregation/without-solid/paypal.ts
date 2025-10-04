import { PaymentMethodInterface } from "./payment-method-interface";

export class PayPal implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing PayPal`);
  }

  generateQrCode(): void {
    throw new Error("Pagamento via PayPal não gera QrCode.");
  }

  generateDocument(): void {
    throw new Error("Pagamento via PayPal não gera Document.");
  }
} 