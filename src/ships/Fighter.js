"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class Fighter extends SpaceCraft_1.SpaceCraft {
    constructor(name, weaponPower) {
        super(name);
        this.weaponPower = weaponPower;
    }
    getName() {
        return this.name;
    }
    attack(target) {
        if (this.isOperational()) {
            const damageRandom = Math.floor(Math.random() * 25) + 5;
            const damageTarget = target.getHealth() - damageRandom;
            console.log('Figther anitialized: \n' + 'The target ended up with: ' + damageTarget + ' health.');
            return damageTarget;
        }
        else {
            return 0;
        }
    }
    getRepairCost() {
        return this.fuel -= 15;
    }
    repairable() {
        if (this.fuel < 0 || this.health > 100) {
            console.log('Living life to the fullest or running on empty');
        }
        this.fuel -= 25;
        this.health += 30;
        console.log('Spacecraft undergoing restoration.');
    }
}
exports.Fighter = Fighter;
