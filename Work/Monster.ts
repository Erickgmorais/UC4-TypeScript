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

    public attack(character: Character): void {
        while (true) {
            if (this.health <= 0) {
                console.log(this.name + ' Dead');
                break;

            } else if (character.getHealth() <= 0) {
                console.log(character.getName() + ' Dead.');
                break;

            } else {
                const randomNumber = Math.floor(Math.random() * 2) + 1;
                
                if (randomNumber === 1) {
                    character.setHealth(character.getHealth() - this.damage);
                    console.log(this.name + ' attacks ' + character.getName() + '\n' + character.getName() + ' takes ' + this.damage + ' damage.' + '\n');
                } 

                if(randomNumber === 2) { 
                    this.health - character.getDamage();
                    console.log(character.getName() + ' attacks ' + this.name + '\n' + this.name + ' takes ' + character.getDamage() + ' damage.' + '\n');
                }
            }
        }
    }
}