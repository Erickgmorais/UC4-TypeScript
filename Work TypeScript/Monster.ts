import { Character } from "./Character";

export class Monster {
    private name: string;
    private level: number;
    private health: number;
    private damage: number;

    constructor(name: string, level: number, health: number, damage: number) {
        this.name = name
        this.level = level
        this.health = health
        this.damage = damage
    }

    public getName(): string {
        return this.name;
    }
    
    public getLevel(): number {
        return this.level;
    }
    
    public getHealth(): number {
        return this.health;
    }
    
    public getDamage(): number {
        return this.damage;
    }

    public setName(name: string): void {
        this.name = name
    }

    public setHealth(health: number): void {
        this.health = health
    }

    public showInfo(): string {
        return '\nName: ' + this.name + '\nLevel: ' + this.level + '\nHealth: ' + this.health + '\nDamage: ' + this.damage;
    }

    public attack(character: Character): string {
        while(true) {
            if(this.health <= 0) {
                return this.name + ' Dead';

            } else if(character.getHealth() <= 0){ 
                return character.getName() + ' Dead.'
                
            } else {
               const randomNumber =  Math.floor(Math.random() * 2) + 1;
               if(randomNumber === 1) {

               }
            }
        }
    }
}