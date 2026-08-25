export class Reactor {
    protected name: string;
    protected residentMax: number;

    constructor(name: string) {
        this.name = name;
        this.residentMax = 3;
    }

    public getName(): string {
        return this.name;
    }

    public getResident(): number {
        return this.residentMax;
    }

    
    public setName(newName: string): void {
        this.name = newName;
    }

    public setResident(newResidentMax: number): void {
        this.residentMax = newResidentMax;
    }
}