"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resident = void 0;
class Resident {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    workingResident() {
        return this.name + ' is working.\n';
    }
}
exports.Resident = Resident;
