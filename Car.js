"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    brand;
    model;
    year;
    speed;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    accelerate(speed) {
        if (speed < 0) {
            console.log('negative velocity');
        }
        else {
            this.speed += speed;
            console.log('Current acceleration rate:', this.speed, 'mph');
        }
    }
    break(speed) {
        if (speed < 0) {
            console.log('negative velocity');
        }
        else {
            this.speed -= speed;
            console.log('Current braking speed:', this.speed, 'mph');
        }
    }
    showInformation() {
        console.log('Brand:', this.brand, '\nModel:', this.model, '\nYear:', this.year, '\nSpeed:', this.speed);
    }
}
exports.Car = Car;
