let id: number = 0

export abstract class SpaceCraft { 
    private id: number;
    protected name: string;
    protected fuel: number;
    protected health: number;
    
    constructor(name: string) {
        this.id = id;
        this.name = name;
        this.fuel = 100;
        this.health = 100;
        id++
    }

    public getHealth(): number {
        return this.health
    }

    public refuel(): boolean {
        if(this.fuel < 0 && this.fuel > 100) {
            return false
        } 
        this.fuel += 100;
        return true;
    }

    public takeDamage(): boolean {
        if(this.health < 0 && this.health > 100) {
            return false
        } 
        const damageRandom: number = Math.floor(Math.random() * 20) + 5
        this.health -= damageRandom;
        return true;
    }

    public repair(): boolean {
        if(this.health > 100) {
            return false
        }
        const repairRandom: number = Math.floor(Math.random() * 30) + 5
        this.health += repairRandom;
        return true;
    }

    public isOperational(): boolean {
        if(this.health > 0 && this.fuel > 0) {
            return true;
        }
        return false;
    }

    public showStatus(): string {
        return this.name + 'this with: ' + this.fuel + 'and your health is: ' + this.health; 
    }
}