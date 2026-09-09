import { CargoCarrier } from "../interfaces/CargoCarrier";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Exploratory } from "../interfaces/Exploratory";
import { SpaceCraft } from "./SpaceCraft";

export class MultiPurposeShip extends SpaceCraft implements CombatCapable, CargoCarrier, Exploratory {
    private cargoCapacity: number;
    private currentCargo: number;

    constructor(name: string) {
        super(name);
        this.cargoCapacity = 100;
        this.currentCargo = 0;
    }

    loadCargo(amount: number): void {
        if(this.currentCargo + amount > this.cargoCapacity) {
            console.log('Maximum capacity reached.');
        }
        this.currentCargo += amount;
    }

    unloadCargo(amount: number): void {
        if(amount < 0 || amount > this.currentCargo) {
            console.log('Invalid capacity.');
        }
        this.currentCargo -= amount
    }
    getCargoCapacity(): number {
        return this.getCargoCapacity()
    }

    getCurrentCargo(): number {
        return this.getCurrentCargo()
    }

    attack(target: SpaceCraft): number {
        if(this.isOperational()) {
            const damageRandom: number = Math.floor(Math.random() * 25) + 5;
            const damageTarget: number = target.getHealth() - damageRandom
            return damageTarget;
        } else {
            return 0;
        }
    }

   explore(location: string): string {
        this.fuel -= 10; // 
        return 'The SpaceCraft ' + this.name + ' started an exploration on ' + location;

    }

    collectData(): string {
        const chooseRandom: number = Math.floor(Math.random() * 3) + 1;
        let message = '';
        
        if (chooseRandom === 1) {
            this.fuel -= 52;
            message = '\nThe SpaceCraft' + this.name +'collected: ' + '\nExtreme atmospheric temperature (~460°C) and absence of a strong magnetic field.';
        } else if (chooseRandom === 2) {
            this.fuel -= 64;
            message = '\nThe SpaceCraft' + this.name + 'collected: ' + '\nDiscovery of ancient organic molecules and evidence of past liquid water lakes.';
        } else {
            this.fuel -= 33;
            message = '\nThe SpaceCraft' + this.name + 'collected: ' + '\nImages of the surface and of liquid methane/ethane rivers and lakes at low temperatures.';
        }
        return message + '\nScientific data collected successfully.' + '\nCurrent Fuel:' + this.fuel;

    }

}