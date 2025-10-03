import { BankAccount } from "./bank-account";
import { SavingsAccount } from "./savings-account";

// const bankAccount = new BankAccount();
// bankAccount.deposit(5);

// console.log(bankAccount.getBalance())

// gera um erro pq a pré condição está mais restrita que no pai
const bankAccount = new SavingsAccount();
bankAccount.deposit(5);
console.log(bankAccount.getBalance())