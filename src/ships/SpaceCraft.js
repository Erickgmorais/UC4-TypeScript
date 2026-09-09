"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
let id = 0;
class SpaceCraft {
    constructor(name) {
        this.id = id;
        this.name = name;
        this.fuel = 100;
        this.health = 100;
        id++;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    refuel() {
        if (this.fuel < 0 || this.fuel > 100) {
            return false;
        }
        this.fuel += 100;
        return true;
    }
    takeDamage() {
        if (this.health < 0 || this.health > 100) {
            return false;
        }
        const damageRandom = Math.floor(Math.random() * 20) + 5;
        this.health -= damageRandom;
        return true;
    }
    repair() {
        if (this.health > 100) {
            return false;
        }
        const repairRandom = Math.floor(Math.random() * 30) + 5;
        this.health += repairRandom;
        return true;
    }
    isOperational() {
        if (this.health > 0 && this.fuel > 0) {
            return true;
        }
        return false;
    }
    showStatus() {
        return this.name + 'this with: ' + this.fuel + 'and your health is: ' + this.health;
    }
}
exports.SpaceCraft = SpaceCraft;
