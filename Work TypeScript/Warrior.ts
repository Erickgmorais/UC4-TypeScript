import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {
    private strength: number;
    protected weapon: Weapon;

    constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health)
        this.strength = strength
        this.weapon = weapon
    }

    public getStrength(): number {
        return this.strength;
    }


    public setStrength(strength: number): void {
        this.strength = strength
    }

    
    public attack(): string { 
        return this.name + ' attacks with ' + this.weapon.getName() + '\nDamage: ' + this.weapon.getDamage() + '\n'; 
    }
}