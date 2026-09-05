import { SpaceCraft } from "./SpaceCraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { WeaponPower } from "../baseClasss/WeaponPower";

export class Fighter extends SpaceCraft implements CombatCapable {
    private weaponPower: WeaponPower[];

    constructor(name: string, weaponPower: WeaponPower[]) {
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
}