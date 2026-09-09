"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class TransportShip extends SpaceCraft_1.SpaceCraft {
    constructor(name) {
        super(name);
        this.cargoCapacity = 100;
        this.currentCargo = 0;
    }
    setCargoCapacity(value) {
        this.cargoCapacity = value;
    }
    setCurrentCargo(value) {
        this.currentCargo = value;
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    loadCargo(amount) {
        if (this.currentCargo + amount > this.cargoCapacity) {
            console.log('Maximum capacity reached.');
        }
        this.currentCargo += amount;
    }
    unloadCargo(amount) {
        if (this.cargoCapacity - amount < 0) {
            console.log('Invalid capacity.');
        }
        this.currentCargo -= amount;
    }
}
exports.TransportShip = TransportShip;
