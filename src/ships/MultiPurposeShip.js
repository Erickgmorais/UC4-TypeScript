"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPurposeShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class MultiPurposeShip extends SpaceCraft_1.SpaceCraft {
    constructor(name) {
        super(name);
        this.cargoCapacity = 100;
        this.currentCargo = 0;
    }
    loadCargo(amount) {
        if (this.currentCargo + amount > this.cargoCapacity) {
            console.log('Maximum capacity reached.');
        }
        this.currentCargo += amount;
    }
    unloadCargo(amount) {
        if (amount < 0 || amount > this.currentCargo) {
            console.log('Invalid capacity.');
        }
        this.currentCargo -= amount;
    }
    getCargoCapacity() {
        return this.getCargoCapacity();
    }
    getCurrentCargo() {
        return this.getCurrentCargo();
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
    explore(location) {
        this.fuel -= 10; // 
        return 'The SpaceCraft ' + this.name + ' started an exploration on ' + location;
    }
    collectData() {
        const chooseRandom = Math.floor(Math.random() * 3) + 1;
        let message = '';
        if (chooseRandom === 1) {
            this.fuel -= 52;
            message = '\nThe SpaceCraft' + this.name + 'collected: ' + '\nExtreme atmospheric temperature (~460°C) and absence of a strong magnetic field.';
        }
        else if (chooseRandom === 2) {
            this.fuel -= 64;
            message = '\nThe SpaceCraft' + this.name + 'collected: ' + '\nDiscovery of ancient organic molecules and evidence of past liquid water lakes.';
        }
        else {
            this.fuel -= 33;
            message = '\nThe SpaceCraft' + this.name + 'collected: ' + '\nImages of the surface and of liquid methane/ethane rivers and lakes at low temperatures.';
        }
        return message + '\nScientific data collected successfully.' + '\nCurrent Fuel:' + this.fuel;
    }
}
exports.MultiPurposeShip = MultiPurposeShip;
