import { CargoCarrier } from "../interfaces/CargoCarrier";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Exploratory } from "../interfaces/Exploratory";
import { Repairable } from "../interfaces/Repairable";
import { SpaceCraft } from "../ships/SpaceCraft";


export const startCombat = (ship: CombatCapable, target: SpaceCraft): void => {
    ship.attack(target);
}

export const transportCargo = (ship: CargoCarrier, amount: number): void => { 
    ship.loadCargo(amount);
}

export const performExploration = (ship: Exploratory, location: string): void => {
    console.log(ship.explore(location));
}

export const repairObject = (object: Repairable): void => {
    object.repairable();
}