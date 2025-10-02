export class Order {
  constructor(
    private amount: number
  ) { }

  applyFixedDiscount(discount: number): void {

    if (discount > this.amount) {
      throw new Error("Desconto não pode ser menor que i valor do pedido!");
    }

    this.amount = this.amount - discount;
  }

  applyPercentageDiscount(percentage: number): void {

    if (percentage > 100 || percentage <= 0) {
      throw new Error("Inseita um percentual entre 1% e 100%");
    }

    this.amount = this.amount - (this.amount * percentage / 100);
  }

  getAmount(): number {
    return this.amount
  }
}