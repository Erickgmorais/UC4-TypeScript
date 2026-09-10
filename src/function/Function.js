"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repairObject = exports.performExploration = exports.transportCargo = exports.startCombat = void 0;
const startCombat = (ship, target) => {
    ship.attack(target);
};
exports.startCombat = startCombat;
const transportCargo = (ship, amount) => {
    ship.loadCargo(amount);
};
exports.transportCargo = transportCargo;
const performExploration = (ship, location) => {
    console.log(ship.explore(location));
};
exports.performExploration = performExploration;
const repairObject = (object) => {
    object.repairable();
};
exports.repairObject = repairObject;
