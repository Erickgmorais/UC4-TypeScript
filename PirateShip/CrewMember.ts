export class CrewMember {
    private name: string;
    private role: string;
    private age: number;
    private health: number;
    private gold: number;
    
    constructor(name: string, role: string, age: number, health: number, gold: number) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.health = health;
        this.gold = gold;
    }

    public getName(): string {
        return this.name;
    } 

    public getGold(): number {
        return this.gold;
    }

    public getHealth(): number {
        return this.health;
    }

    public getRole(): string {
        return this.role
    }

    public setGold(value: number): void {
        this.gold += value;
    }

    public addPirateGold(value: number): boolean {
        if(this.gold - value <= 0) {;
            return false
        }
        this.gold += value;
        return true;
    }

    public removePirateGold(value: number): boolean {
        if(this.gold - value <= 0) {;
            return false
        }
        this.gold -= value;
        return true;
    }
    
    public damagePirata(value: number): boolean {
        if(this.health - value < 0 || this.health - value > 100) {
            return false;
        }
        this.health -= value;
        return true;
    }

    public recoverHealth(): boolean {
        if(this.health < 0 || this.health > 100) {
            return false;
        }
        const randomNumber: number = Math.floor(Math.random() * 100) + 1;
        this.health -= randomNumber
        return true;
    }

    public showInfo(): string {
        return '\n===============' + '\nPirate' + '\n===============' + '\nPirate name: ' + this.name + 'Pirate role: ' + this.role  + '\nPirate age: ' + this.age + '\nPirate health: ' + this.health + 'Current gold actual: ' + this.gold;
    }
}