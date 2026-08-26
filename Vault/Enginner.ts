import { Resident } from "./Resident";

export class Enginner extends Resident {


    constructor(name: string, age: number) {
        super(name, age);

    }


    public workingResident(): string {
        return this.name + ' is working...';
    }
}