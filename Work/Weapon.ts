import { Character } from "./Character";

export class Weapon { 
    protected name: string;
    protected damage: number;

    constructor(name: string, damage: number) {
        this.name = name
        this.damage = damage
    }

    public getName(): string {
        return this.name;
    }

    public getDamage(): number {
        return this.damage
    }
    
    public setDamage(damage: number) {
        this.damage = damage;
    }

     public setName(name: string): void {
        this.name = name;
    }

    public showInfo(): string {
        return '\n============' + '\nWeapon' + '\n============' + '\nWeapon name: ' + this.name + '\nWeapon damage: ' + this.damage;
    }

}