import { PaymentMethodInterface } from "./payment-method-interface";

export class Pix implements PaymentMethodInterface {
  pay(): void {
    console.log(`Processing Pix`);
  }

  generateQrCode(): void {
    console.log(`Processing generateQrCode`);
  }

  generateDocument(): void {
    throw new Error("Pagamento via Pix não gera Document.");
  }
} 