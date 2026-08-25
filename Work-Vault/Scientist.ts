import { Resident } from "./Resident";

export class Scientist extends Resident {
    protected specialty: string;
    private laboratory: string;

    constructor(name: string, age: number, specialty: string, laboratory: string) {
        super(name, age);
        this.specialty = specialty;
        this.laboratory = laboratory;
    }

    public getSpecialty(): string {
        return this.specialty;
    }

     public getLaboratory(): string {
        return this.laboratory;
    }

    public setSpecialty(newSpecialty: string): void {
        this.specialty = newSpecialty;
    }

    public setLaboratory(newLaboratory: string): void {
        this.laboratory = newLaboratory;
    }

    public workingResident(): string {
        return this.name + ' is working in ' + this.laboratory + '\n';
    }
}