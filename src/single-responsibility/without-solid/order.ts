export class Order {

  constructor(
    private uuid: string,
    private amount: number
  ) { }

  getUuid(): string {
    return this.uuid
  }

  getAmount(): number {
    return this.amount
  }

}