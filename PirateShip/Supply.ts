export class Supply {
    private name: string;
    protected quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }

    public getName(): string {
        return this.name;
    }

    public getQuantity(): number {
        return this.quantity
    }

    public addQuantity(newQuantity: number): boolean {
        if(this.quantity - newQuantity <= 0) {
            return false;
        }
        this.quantity += newQuantity;
        return true;
    }

    public consumption(quantityDesired: number) {
        if(this.quantity - quantityDesired <= 0) {
            return false;
        }
        this.quantity -= quantityDesired;
        return true;
    }

    public showInfo(): string {
        return '\n===============' + '\nSupply' + '\n===============' + '\nName supply: ' + this.name + '\nCurrent quantity: ' + this.quantity;
    }
}