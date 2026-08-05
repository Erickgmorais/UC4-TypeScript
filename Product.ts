export class Product {
    private name: string;
    private price: number;
    private stock: number;


    public constructor(name: string, price: number, stock: number) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    public addStock(quantity: number): void {
        if(this.stock - quantity < 0) {
            console.log('negative stock, please try again');
        } else {
            this.stock += quantity
            console.log('quantity added');
        }
    }

    public removeStock(quantity: number): void {
        if(this.stock - quantity < 0) {
            console.log('negative stock, please try again');
        } else {
            this.stock -= quantity
            console.log('quantity removed');
        }
    }

    public showProduct(): void {
        console.log('Product name:', this.name, '\nPrice:', this.price, '\nStock:', this.stock);
    }

    public setPrice(value: number): void {
        if(this.price + value < 0) {
            console.log('Negative price');
        } else {
            this.price = value
            console.log('updated value');
        }
    }
}