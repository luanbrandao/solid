import { DiscountInterface } from "./discount-interface";

export class Order {
  constructor(
    private amount: number,
    private discount?: DiscountInterface
  ) { }

  setDiscount(discount: DiscountInterface): void {
    this.discount = discount
  }

  getAmount(): number {
    if (this.discount !== null) {
      //pattern strategy
      this.amount = this.discount.apply(this.amount)
    }

    return this.amount
  }
}