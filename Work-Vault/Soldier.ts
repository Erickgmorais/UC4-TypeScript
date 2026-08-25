import { Resident } from "./Resident";

export class Soldier extends Resident {
    protected specialty: string;
    private weapon: string;

    constructor(name: string, age: number, specialty: string, weapon: string) {
        super(name, age);
        this.specialty = specialty;
        this.weapon = weapon;
    }

    public getSpecialty(): string {
        return this.specialty;
    }

    public setSpecialty(newSpecialty: string): void {
        this.specialty = newSpecialty;
    }

    public workingResident(): string {
        return this.name + ' is using an weapon. ' + this.weapon + '\n';
    }
}
