import { PaymentMethodInterface } from "./payment-method-interface";

export class Boleto implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing Boleto`);
  }

  generateQrCode(): void {
    throw new Error("Pagamento via Boleto não gera QrCode.");
  }

  generateDocument(): void {
    console.log(`Processing generateDocument`);
  }
}