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
        this.colection.splice(id, 1);
    }
    findShip(id) {
        return this.colection.find(s => s.getId() === id);
    }
    showFleet() {
        this.colection.forEach((c, i) => {
            console.log(i + 1 + ' - ' + c.getName());
        });
    }
}
exports.Fleet = Fleet;
