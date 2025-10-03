import { BankAccount } from "../without-solid/bank-account"

export class CheckingAccount extends BankAccount {
  constructor(
    protected overdraftLimit: number
  ) {
    super(overdraftLimit)
  }

  // toda vez que sobresqueve um método, pode quebrar algo no cliente
  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do saque deve ser positivo.')
    }

    // agora a conta pode ficar negativa, mesmo a classe pai não podendo ser negativa.
    const availableBalance = this.balance + this.overdraftLimit;

    if (amount > availableBalance) {
      throw new Error('Saldo insuficiente e limite de cheque especial')
    }

    this.balance = this.balance - amount
  }
}