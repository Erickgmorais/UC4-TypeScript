import { Resident } from "./Resident";

export class Doctor extends Resident {
    protected specialty: string;
    private rmc: string;

    constructor(name: string, age: number, specialty: string, rmc: string) {
        super(name, age)
        this.specialty = specialty;
        this.rmc = rmc;
    }

    public getSpecialty(): string {
        return this.specialty;
    } 

    public getRmc(): string {
        return this.rmc;
    }

    public setRmc(newRmc: string): void {
        this.rmc = newRmc;
    } 

     public workingResident(): string {
        return ' The Regional Medical Council(RMC) of the doctor ' + this.name + ' is: ' + this.rmc + '\n';
    }
}