"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
const Resident_1 = require("./Resident");
class Soldier extends Resident_1.Resident {
    constructor(name, age) {
        super(name, age);
    }
    workingResident() {
        return this.name + ' is working...';
    }
}
exports.Soldier = Soldier;
