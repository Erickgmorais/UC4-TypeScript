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

    attack(target: SpaceCraft): number {
        if(this.isOperational()) {
            const damageRandom: number = Math.floor(Math.random() * 25) + 5;
            const damageTarget: number = target.getHealth() - damageRandom
            return damageTarget;
        } else {
            return 0;
        }
    }

    public getRepairCost(): number {
        return this.fuel -= 15
    }

    public repair(): boolean {
        if(this.fuel < 0 || this.health > 100) {
            return false
        }
        this.fuel -= 25;
        this.health += 30;
        return true
    }
}