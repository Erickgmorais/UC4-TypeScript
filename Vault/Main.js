"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = require("./Doctor");
const Enginner_1 = require("./Enginner");
const Room_1 = require("./Room");
const Scientist_1 = require("./Scientist");
const Soldier_1 = require("./Soldier");
const prompt = require('readline-sync');
const logger = console.log;
const clear = console.clear;
const ask = prompt.question;
const arrayResident = [];
const arrayRoom = [];
while (true) {
    logger('\n======================' + '\nVAULT 101' + '\n======================\n');
    logger('[1] Register resident' + '\n[2] List residents' + '\n[3] Register room' + '\n[4] List room' + '\n[5] Assign resident' + '\n[6] Remove resident from the room' + '\n[7] View residents in a room', '\n[0] Exit');
    const option = ask('Choose: ');
    switch (option) {
        case '1':
            clear();
            logger('Choose the resident type:');
            logger('[1] Doctor\n[2] Enginner\n[3] Soldier\n[4] Scientist');
            const typeOption = ask('Type: ');
            const insertName = ask('Insert the name of the resident: ');
            const insertAge = Number(ask('\nInsert your age: '));
            let objectResident = null;
            if (typeOption === '1') {
                objectResident = new Doctor_1.Doctor(insertName, insertAge);
            }
            else if (typeOption === '2') {
                objectResident = new Enginner_1.Enginner(insertName, insertAge);
            }
            else if (typeOption === '3') {
                objectResident = new Soldier_1.Soldier(insertName, insertAge);
            }
            else if (typeOption === '4') {
                objectResident = new Scientist_1.Scientist(insertName, insertAge);
            }
            else {
                logger('Invalid type.');
                break;
            }
            arrayResident.push(objectResident);
            logger('Resident successfully added.');
            break;
        case '2':
            clear();
            logger('List of resident');
            arrayResident.forEach(i => {
                logger('\nName resident: ' + i.getName());
            });
            break;
        case '3':
            clear();
            const roomName = ask('Insert the room name: ');
            const roomCapacity = Number(ask('Insert the max capacity: '));
            const objectRoom = new Room_1.Room(roomName, roomCapacity);
            arrayRoom.push(objectRoom);
            logger('Room successfully added.');
            break;
        case '4':
            clear();
            logger('List of room');
            arrayRoom.forEach(i => {
                logger('\nRoom: ' + i.getName());
            });
            break;
        case '5':
            clear();
            arrayRoom.forEach((res, i) => {
                logger(i + 1 + '-' + res.getName());
            });
            const roomNumber = Number(ask('Choose the room number: ')) - 1;
            if (roomNumber < 0 || roomNumber >= arrayRoom.length) {
                logger('Invalid room number.');
                break;
            }
            arrayResident.forEach((res, i) => {
                logger(i + 1 + '-' + res.getName());
            });
            const residentNumber = Number(ask('Choose the resident number: ')) - 1;
            const success = arrayRoom[roomNumber].addResident(arrayResident[residentNumber]);
            logger(success ? 'Resident successfully added to the room.' : 'Room is full or resident already exists.');
            break;
        case '6':
            clear();
            if (arrayRoom.length === 0) {
                logger('No rooms available.');
                break;
            }
            logger('Choose the room:');
            arrayRoom.forEach((r, i) => {
                logger(i + 1 + '-' + r.getName());
            });
            const roomNum = Number(ask('Room number: ')) - 1;
            if (roomNum < 0 || roomNum >= arrayRoom.length) {
                logger('Invalid room number.');
                break;
            }
            const selectedRoom = arrayRoom[roomNum];
            const residentsInRoom = selectedRoom.getResidents();
            if (residentsInRoom.length === 0) {
                logger('This room has no residents.');
                break;
            }
            logger('\nChoose the resident to remove:');
            residentsInRoom.forEach((res, index) => {
                logger(index + 1 + '-' + res.getName());
            });
            const residentNum = Number(ask('Resident number: ')) - 1;
            const selectedResident = residentsInRoom[residentNum];
            const removed = selectedRoom.removeResident(selectedResident);
            logger(removed ? 'Resident successfully removed from the room.' : 'Resident not found in this room.');
            break;
        case '7':
            clear();
            logger('Residents by room');
            if (arrayRoom.length === 0) {
                logger('No rooms available.');
                break;
            }
            arrayRoom.forEach(r => {
                logger('\nRoom: ' + r.getName());
                const residentsInRoom = r.getResidents();
                if (residentsInRoom.length === 0) {
                    logger('  No residents.');
                }
                else {
                    residentsInRoom.forEach(res => {
                        logger(' - ' + res.getName());
                    });
                }
            });
            break;
        case '0':
            clear();
            logger('Bye bye.');
            process.exit();
        default:
            clear();
            logger('Invalid option.');
    }
}
