import { PaymentMethodInterface } from "./contracts/payment-method-interface";
import { QRCodeGenerableInterface } from "./contracts/qrcode-generable-interface";

export class Pix implements PaymentMethodInterface, QRCodeGenerableInterface {
  pay(): void {
    console.log(`Processing Pix`);
  }

  generateQrCode(): void {
    console.log(`Processing generateQrCode`);
  }

} 