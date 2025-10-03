export class BankAccount {
  // BankAccount está generica demais
  constructor(
    protected balance: number = 0
  ) { }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do depósito deve ser positivo.')
    }

    this.balance = this.balance + amount
  }

  getBalance(): number {
    return this.balance
  }

}