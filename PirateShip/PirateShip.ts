import { CrewMember } from "./CrewMember";
import { Supply } from "./Supply";
import { Treasure } from "./Treasure";
import { logger } from "./Main";

export class PirateShip {
    private name: string;
    protected captain: string;
    protected crew: CrewMember[];
    protected treasure: Treasure[];
    protected supplies: Supply[];
    private durability: number;

    constructor(name: string, captain: string, crew: CrewMember[], treasure: Treasure[], supplies: Supply[], durability: number) {
        if(durability < 0 || durability > 100) {
            //Comando que instacia uma classe nativa do JS e TS para interromper a execução.
             throw new Error('Value less than 0 or greater than 100. Try again.');
        }
        this.name = name;
        this.captain = captain;
        this.crew = crew;
        this.treasure = treasure;
        this.supplies = supplies;
        this.durability = durability;
    }

    public getDurability(): number {
        return this.durability;
    }

    public getCrewMembers(): void {
        this.crew.forEach((c, i) => {
            logger(i + 1 + '-' + c.getName());
        });
    }

    public addMember(member: CrewMember): boolean {
        for(let i = 0; i < this.crew.length; i++) {
            if(member.getName() === this.crew[i].getName()) {
                return false;
            }
        }
        this.crew.push(member);
        return true;
    }

    public removeMember(member: CrewMember): boolean {
        for(let i = 0; i < this.crew.length; i++) {
            if(member.getName() === this.crew[i].getName()) {
                this.crew.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public addTreasure(treasure: Treasure): boolean {
        this.treasure.push(treasure);
        return true;
    }

    public addSupply(supply: Supply): boolean {
        this.supplies.push(supply);
        return true;
    }

    public damageShip(): boolean {
        if(this.durability <= 0) {
            return false;
        }
        const randomDamage: number = Math.floor(Math.random() * 15) + 1;
        this.durability -= randomDamage;
        return true;
    }

    public repairShip(): boolean {
        if(this.durability > 100) {
            return false
        }
        this.durability += 35;
        return true;
    }

    public addPirateGold(name: CrewMember, value: Treasure): boolean {
        for(let i = 0; i < this.crew.length; i++) {
            if(name.getName() === this.crew[i].getName()) {
                continue;
            }
        }

        for(let i = 0; i < this.crew.length; i++) {
            if(value.getName() === this.treasure[i].getName()) {
                name.setGold(value.getValue());
                return false;
            }
        }
        return true;
    }

    public conditionShip(): void {
        logger('\n==================\n' + this.name + '\n==================\n' +  '\nCaptain: ' + this.captain + '\nDurability: ' + this.durability + '/100');
        logger('\nCrew: ');
        this.crew.forEach((c) => {
            logger('- ' + c.getName() + ' - ' + c.getRole() + ' - ' + 'Health: ' + c.getHealth() + '\n');
            
        });
        logger('\nTreasure: ')
        this.treasure.forEach(t => {
            logger('- ' + t.getName() + ' - ' + t.getValue() + ' gold\n');
        });
        logger('\nSupplies: ');
        this.supplies.forEach(s => {
            logger('- ' + s.getName() + ': ' + s.getQuantity() + '\n');
        });
        logger('\nTotal Crew: ' + this.crew.length);
        let totalValue: number = 0;
        this.treasure.forEach(t => {
            totalValue += t.getValue();
        });
        logger('Total Treasure Value: ' + totalValue);
        logger('==================')
        
    }


}