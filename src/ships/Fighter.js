"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class Fighter extends SpaceCraft_1.SpaceCraft {
    constructor(name, weaponPower) {
        super(name);
        this.weaponPower = weaponPower;
    }
    attack(target) {
        if (this.isOperational()) {
            const damageRandom = Math.floor(Math.random() * 25) + 5;
            const damageTarget = target.getHealth() - damageRandom;
            return damageTarget;
        }
        else {
            return 0;
        }
    }
    getRepairCost() {
        return this.fuel -= 15;
    }
    repair() {
        if (this.fuel < 0 || this.health > 100) {
            return false;
        }
        this.fuel -= 25;
        this.health += 30;
        return true;
    }
}
exports.Fighter = Fighter;
