export class Smartphone {
    private brand: string;
    private model: string;
    private battery: number;

    constructor(brand: string, model: string) {
        this.brand = brand
        this.model = model
        this.battery = 100
    } 

    public use(minutes: number): void {
        if(this.battery < 0) {
            console.log('Phone turned off. Charge your phone.');
        } else {
            this.battery -= minutes
            console.log('current percentage is', this.battery +'%');
        }
    }

    public charge(): void {
        this.battery = 100
        console.log('fully charged phone');
    }

    public showInformation(): void {
        console.log('Brand: ', this.brand, '\nModel:', this.model);
    }
}