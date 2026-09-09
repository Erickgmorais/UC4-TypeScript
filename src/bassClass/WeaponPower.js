"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponPower = void 0;
class WeaponPower {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
}
exports.WeaponPower = WeaponPower;
