import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {
    protected strength: number;
    protected weapon: Weapon;

    constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health)
        this.strength = strength
        this.weapon = weapon
    }

    public getName(): string {
        return 'Name: ' + this.name;
    }

    public getWeapon(): string {
        return 'Warrior Weapon: ' + this.weapon
    }

    public setStrength(strength: number): void {
        this.strength = strength
    }

    //Falta puxar o 'damage' da classe 'Weapon'
    public attack(): string { 
        return this.name + ' attacks with ' + this.weapon + '\nDamage: '; 
    }
}