import { CargoCarrier } from "../interfaces/CargoCarrier";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Exploratory } from "../interfaces/Exploratory";
import { Repairable } from "../interfaces/Repairable";
import { SpaceCraft } from "../ships/SpaceCraft";


export const startCombat = (ship: CombatCapable, target: SpaceCraft): void => {
    console.log('Figther\n' + ship.attack(target));
}

export const transportCargo = (ship: CargoCarrier, amount: number): void => {
    console.log('Cargo\n' + ship.loadCargo(amount));
}

export const performExploration = (ship: Exploratory, location: string): void => {
    console.log('Explorating...\n' + ship.explore(location));
}

export const repairObject = (object: Repairable): void => {
    console.log(object.repair());
}