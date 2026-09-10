import { CargoCarrier } from "../interfaces/CargoCarrier";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Exploratory } from "../interfaces/Exploratory";
import { ExplorationShip } from "../ships/ExplorationShip";
import { SpaceCraft } from "../ships/SpaceCraft";

export class Fleet {
    private colection: SpaceCraft[];

    constructor(colection: SpaceCraft[]) {
        this.colection = colection
    }
    
    public addShip(ship: SpaceCraft): void {
        this.colection.push(ship);
    }
    public removeShip(id: number): void {
        this.colection.forEach((c) => {
            console.log(c.getId() + 1 + ' - ' + c.getName());
        });
        this.colection.splice(id - 1, 1);
    }
    public findShip(id: number): SpaceCraft | undefined {
        return this.colection.find(s => s.getId() === id);

    }
    public showFleet(): void {
        console.log('============================\n' + '        SpaceCraft\n' + '============================')
        this.colection.forEach((c) => {
            console.log(c.getId() + 1 + ' - ' + c.getName());
        });
    }

    public getCombatShip(): CombatCapable[] {
        return this.colection.filter((c): c is SpaceCraft & CombatCapable => 'attack' in c);
    }
    public getCargoShip(): CargoCarrier[] {
        return this.colection.filter((c): c is SpaceCraft & CargoCarrier => 'loadCargo' in c);
    }
    public getExplorationShip(): Exploratory[] {
        return this.colection.filter((c): c is SpaceCraft & Exploratory => 'explore' in c);
    }
    
}