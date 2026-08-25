import { Resident } from "./Resident";

export class Enginner extends Resident {
    protected specialty: string;

    constructor(name: string, age: number, specialty: string) {
        super(name, age);
        this.specialty = specialty;
    }

    public getSpecialty(): string {
        return this.specialty;
    }

    public setSpecialty(newSpecialty: string): void {
        this.specialty = newSpecialty;
    }

    public workingResident(): string {
        return this.name + ' is specialty in. ' + this.specialty + '\n';
    }
}