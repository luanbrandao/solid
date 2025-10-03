import { BankAccount } from "./bank-account";

export class SavingsAccount extends BankAccount {
  deposit(amount: number): void {
    // a pré condição está maior que na classe pai, o que pode gerar um error
    if (amount < 10) {
      throw new Error('O depósito minimo é de R$10')
    }


  }
}