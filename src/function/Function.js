"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repairObject = exports.performExploration = exports.transportCargo = exports.startCombat = void 0;
const startCombat = (ship, target) => {
    console.log('Figther\n' + ship.attack(target));
};
exports.startCombat = startCombat;
const transportCargo = (ship, amount) => {
    console.log('Cargo\n' + ship.loadCargo(amount));
};
exports.transportCargo = transportCargo;
const performExploration = (ship, location) => {
    console.log('Explorating...\n' + ship.explore(location));
};
exports.performExploration = performExploration;
const repairObject = (object) => {
    console.log(object.repair());
};
exports.repairObject = repairObject;
