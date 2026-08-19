import { Weapon } from "./Weapon";
import { Spell } from "./Spell";

export class Character {
    protected name: string;
    protected level: number;
    protected health: number;
    protected damage: Weapon | Spell
    


    constructor(name: string, level: number, health: number, damage: Weapon | Spell) {
        this.name = name
        this.level = level
        this.health = health
        this.damage = damage
    
    }

    public getName(): string {
        return this.name
    }

    public getLevel(): number {
        return  this.level
    }

    public getHealth(): number {
        return this.health
    }

    public getDamage(): number{
        return this.damage.getDamage();
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setHealth(health: number): void {
        this.health = health;
    }


    public showInfo(): string {
        return '\n============' + '\nCharacter' + '\n============' + '\nName: ' + this.name + '\nLevel: ' + this.level + '\nHealth: ' + this.health;

    }

    public takeDamage(amount: number): boolean {
        if(this.health - amount < 0) {
            return true
        } else {
            this.health -= amount
            return false
        }
    }
}