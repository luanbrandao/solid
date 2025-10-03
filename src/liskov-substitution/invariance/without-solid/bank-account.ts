export class BankAccount {
  constructor(
    protected balance: number = 0
  ) { }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do saque deve ser positivo.')
    }

    if (amount > this.balance) {
      throw new Error('Saldo insuficiente. O saldo não pode finar negativo')
    }

    this.balance = this.balance - amount
  }

  getBalance(): number {
    return this.balance
  }

}