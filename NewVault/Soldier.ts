import { Resident } from "./Resident";

export class Soldier extends Resident {

    constructor(name: string, age: number) {
        super(name, age);
    }

    public workingResident(): string {
        return this.name + ' is working...';
    }
}
