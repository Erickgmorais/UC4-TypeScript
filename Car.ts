export class Car {
    private brand: string;
    private model: string;
    private year: number;
    public speed: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 0;
    }

    public accelerate(speed: number): void {
        if(speed < 0){
            console.log('negative velocity');
        } else {
            this.speed += speed
            console.log('Current acceleration rate:', this.speed, 'mph');
        }
    }

    public break(speed: number): void {
        if(speed < 0){
            console.log('negative velocity');
        } else {
            this.speed -= speed
            console.log('Current braking speed:', this.speed, 'mph');
        }
    }

    public showInformation(): void {
        console.log('Brand:', this.brand, '\nModel:', this.model, '\nYear:', this.year, '\nSpeed:', this.speed);
    }

}