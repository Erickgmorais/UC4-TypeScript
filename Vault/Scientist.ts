import { Resident } from "./Resident";

export class Scientist extends Resident {


    constructor(name: string, age: number) {
        super(name, age);

    }


    public workingResident(): string {
        return this.name + ' is working...';
    }
}