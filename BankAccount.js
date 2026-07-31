"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(values) {
        if (values < 0) {
            console.log('Negative values');
        }
        else {
            this.balance += values;
            console.log('Current values:', '$', this.balance);
        }
    }
    withdraw(values) {
        if (values > this.balance) {
            console.log('insufficient funds');
        }
        else {
            this.balance -= values;
            console.log('Current values:', '$', this.balance);
        }
    }
    showBalance() {
        console.log('Current values:', '$', this.balance);
    }
}
exports.BankAccount = BankAccount;
