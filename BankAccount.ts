export class BankAccount {
    private owner: string;
    private balance: number;

    public constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    } 

    public deposit(values: number): void {
        if(values < 0) {
            console.log('Negative values');
        } else {
            this.balance += values;
            console.log('Current values:', '$',this.balance );
        }
    }

    public withdraw(values: number): void {
        if(values > this.balance) {
            console.log('insufficient funds');
        } else {
            this.balance -= values;
            console.log('Current values:', '$',this.balance );
        }
    }

    public showBalance(): void {
        console.log('Current values:', '$',this.balance );
    }
}