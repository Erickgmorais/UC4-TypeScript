import { Exploratory } from "../interfaces/Exploratory";
import { SpaceCraft } from "./SpaceCraft";

export class ExplorationShip extends SpaceCraft implements Exploratory {
    
    constructor(name: string) {
        super(name)
        
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
            message = '\nThe SpaceCraft ' + this.name +'collected: ' + '\nExtreme atmospheric temperature (~460°C) and absence of a strong magnetic field.';
        } else if (chooseRandom === 2) {
            this.fuel -= 64;
            message = '\nThe SpaceCraft ' + this.name + 'collected: ' + '\nDiscovery of ancient organic molecules and evidence of past liquid water lakes.';
        } else {
            this.fuel -= 33;
            message = '\nThe SpaceCraft ' + this.name + 'collected: ' + '\nImages of the surface and of liquid methane/ethane rivers and lakes at low temperatures.';
        }
        return message + '\nScientific data collected successfully.' + '\nCurrent Fuel:' + this.fuel;

    }
}