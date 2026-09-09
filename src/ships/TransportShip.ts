import { CargoCarrier } from "../interfaces/CargoCarrier";
import { SpaceCraft } from "./SpaceCraft";

export class TransportShip extends SpaceCraft implements CargoCarrier {
    private cargoCapacity: number;
    private currentCargo: number;

    constructor(name: string) {
        super(name)
        this.cargoCapacity = 100
        this.currentCargo = 0
    }

    public setCargoCapacity(value: number) {
        this.cargoCapacity = value;
    }

    public setCurrentCargo(value: number): void {
        this.currentCargo = value
    }

    public getCargoCapacity(): number {
    return this.cargoCapacity
    }

    public getCurrentCargo(): number {
        return this.currentCargo
    }

    public loadCargo(amount: number): void {
        if(this.currentCargo + amount > this.cargoCapacity) {
            console.log('Maximum capacity reached.');
        }
        this.currentCargo += amount;
    }

    public unloadCargo(amount: number): void {
        if(this.cargoCapacity - amount < 0) {
            console.log('Invalid capacity.');
        }
        this.currentCargo -= amount
    }

}