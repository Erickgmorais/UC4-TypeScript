import { SpaceCraft } from "./SpaceCraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { WeaponPower } from "../bassClass/WeaponPower";
import { Repairable } from "../interfaces/Repairable";

export class Fighter extends SpaceCraft implements CombatCapable, Repairable {
    private weaponPower: WeaponPower;

    constructor(name: string, weaponPower: WeaponPower) {
        super(name);
        this.weaponPower = weaponPower
    }

    public getName(): string {
        return this.name
    }

    public attack(target: SpaceCraft): number {
        if(this.isOperational()) {
            const damageRandom: number = Math.floor(Math.random() * 25) + 5;
            const damageTarget: number = target.getHealth() - damageRandom
            console.log('Figther anitialized: \n' + 'The target ended up with: ' + damageTarget + ' health.'); 
            return damageTarget;
        } else {
            return 0;
        }
    }

    public getRepairCost(): number {
        return this.fuel -= 15
    }

    public repairable(): void {
        if(this.fuel < 0 || this.health > 100) {
            console.log('Living life to the fullest or running on empty');
        }
        this.fuel -= 25;
        this.health += 30;
        console.log('Spacecraft undergoing restoration.')
    }
}