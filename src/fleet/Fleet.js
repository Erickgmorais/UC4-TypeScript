"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
class Fleet {
    constructor(colection) {
        this.colection = colection;
    }
    addShip(ship) {
        this.colection.push(ship);
    }
    removeShip(id) {
        this.colection.forEach((c) => {
            console.log(c.getId() + 1 + ' - ' + c.getName());
        });
        this.colection.splice(id - 1, 1);
    }
    findShip(id) {
        return this.colection.find(s => s.getId() === id);
    }
    showFleet() {
        console.log('============================\n' + '        SpaceCraft\n' + '============================');
        this.colection.forEach((c) => {
            console.log(c.getId() + 1 + ' - ' + c.getName());
        });
    }
    getCombatShip() {
        return this.colection.filter((c) => 'attack' in c);
    }
    getCargoShip() {
        return this.colection.filter((c) => 'loadCargo' in c);
    }
    getExplorationShip() {
        return this.colection.filter((c) => 'explore' in c);
    }
}
exports.Fleet = Fleet;
