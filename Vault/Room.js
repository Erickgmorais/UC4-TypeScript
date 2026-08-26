"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(name, maxCapacity) {
        this.residents = [];
        this.name = name;
        this.maxCapacity = maxCapacity;
    }
    getName() {
        return this.name;
    }
    getResidents() {
        return this.residents;
    }
    addResident(resident) {
        if (this.residents.length >= this.maxCapacity) {
            return false;
        }
        this.residents.push(resident);
        return true;
    }
    removeResident(resident) {
        const index = this.residents.findIndex(r => r.getName() === resident.getName());
        if (index === -1) {
            return false;
        }
        this.residents.splice(index, 1);
        return true;
    }
}
exports.Room = Room;
