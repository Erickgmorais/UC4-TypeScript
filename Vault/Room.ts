import { Resident } from "./Resident";

export class Room {
    protected name: string;
    protected maxCapacity: number;
    public residents: Resident[] = [];

    constructor(name: string, maxCapacity: number) {
        this.name = name;
        this.maxCapacity = maxCapacity
    }

    public getName(): string {
        return this.name
    }

    public getResidents(): Resident[] {
        return this.residents
    }

    public addResident(resident: Resident): boolean {
        if(this.residents.length >= this.maxCapacity) {
            return false
        } 

        this.residents.push(resident)
        return true
    }

    public removeResident(resident: Resident): boolean {
        const index = this.residents.findIndex(r => r.getName() === resident.getName());
        if (index === -1) {
            return false;
        }

        this.residents.splice(index, 1);
        return true;
}
}