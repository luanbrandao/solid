import { DiscountInterface } from "./discount-interface";

export class FixedDiscount implements DiscountInterface {

  constructor(private value: number) {

  }

  apply(orderAmount: number): number {
    if (this.value > orderAmount) {
      throw new Error("Desconto não pode ser menor que i valor do pedido!");
    }
    return orderAmount - this.value
  }

}