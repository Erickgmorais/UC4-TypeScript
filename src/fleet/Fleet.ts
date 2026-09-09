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
        this.colection.splice(id, 1);
    }
    public findShip(id: number): SpaceCraft | undefined {
        return this.colection.find(s => s.getId() === id);

    }
    public showFleet(): void {
        this.colection.forEach((c, i) => {
            console.log(i + 1 + ' - ' + c.getName());
        });
    }
}