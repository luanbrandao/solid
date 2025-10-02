import { DiscountInterface } from "./discount-interface";

export class PercentageDiscount implements DiscountInterface {

  constructor(private percentage: number) {
    if (this.percentage > 100 || this.percentage <= 0) {
      throw new Error("Inseita um percentual entre 1% e 100%");
    }
  }

  apply(orderAmount: number): number {
    return orderAmount - (orderAmount * this.percentage / 100)
  }

}