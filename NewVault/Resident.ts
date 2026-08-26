export class Resident {
    protected name: string;
    protected age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    } 

    public getAge(): number {
        return this.age;
    }


    public setName(newName: string): void {
        this.name = newName;
    } 
    
    public setAge(newAge: number): void {
         this.age = newAge
    }

    public workingResident(): string {
        return this.name + ' is working.\n';
    }
}