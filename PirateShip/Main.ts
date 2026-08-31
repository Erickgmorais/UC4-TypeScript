import { CrewMember } from "./CrewMember";
import { PirateShip } from "./PirateShip";
import { Supply } from "./Supply";
import { Treasure } from "./Treasure";

const prompt = require('readline-sync');

export const logger = console.log;
const ask = prompt.question;
const clear = console.clear
const enter = prompt.question;

const arrayCrew: CrewMember[] = [];
const arrayTreasure: Treasure[] = [];
const arraySupply: Supply[] = [];

//Crew Members
const edward: CrewMember = new CrewMember('Edward', 'Surgeon', 41, 100, 150);
const anne: CrewMember = new CrewMember('Anne Bonniy', 'Immediate', 26, 100, 100);
const bartholomew: CrewMember = new CrewMember('Bartholomew', 'Weapons master', 39, 100, 310);
const john: CrewMember = new CrewMember('John', 'Carpenter', 22, 100, 70);
const sirFrancis: CrewMember = new CrewMember('Sir Francis Drake', 'Ship mester', 52, 100, 560);
arrayCrew.push(edward);
arrayCrew.push(anne);
arrayCrew.push(bartholomew);
arrayCrew.push(john);
arrayCrew.push(sirFrancis);

//Treasure
const goldenCrown: Treasure = new Treasure('Golden Crown', 250, 'Unusual');
const lostMap: Treasure = new Treasure('Lost Map', 300, 'Epic');
const diamond: Treasure = new Treasure('Diamond', 400, 'Legendary');
arrayTreasure.push(goldenCrown);
arrayTreasure.push(lostMap);
arrayTreasure.push(diamond);

//Supply
const groggy: Supply = new Supply('Groggy', 4);
const sauerkraut: Supply = new Supply('Sauerkraut', 7);
const lemonJuice: Supply = new Supply('Lemon Juice', 2);
arraySupply.push(groggy);
arraySupply.push(sauerkraut);
arraySupply.push(lemonJuice);


//Já estou declarando essa váriavel para ficar em um escopo global.
let objectShipPirate: PirateShip | undefined;

clear();
let on: boolean = false;

logger('=====================' + ' Welcome to the ship system ' + '=====================' );
while(!on) {
    clear();
    logger('\n[1]-Create ship' + '\n[2]-Create Crew Member' + '\n[3]-Show Crew Members' + '\n[4]-Register found Treasure' + '\n[5]-Show Treasures' + '\n[6]-Register Supplies' + '\n[7]-Show Supplies' + '\n[8]-Random event'+ '\n[9]-Ship report' + '\n[0]-Exit');
    const number: number = Number(ask('Insert option: '));

    switch(number) {
        case 1:
            clear();
            const name: string = ask('Insert name: ');
            const captain: string = ask('Insert a captain: ');
            const durability: number = Number(ask('What ship durability?: '));
            clear();
            arrayCrew.forEach((c, i) => {
                logger(i + 1 + '-' + c.getName());
            });
            const optionCrew: number = Number(ask('Choose your ship crew: ')) - 1;
            if(optionCrew == arrayCrew.length) {
                clear();
                logger('Invalid option');
                break;
            }
            clear();
            arrayTreasure.forEach((t, i) => {
                logger(i + 1 + '-' + t.getName());
            });
            const optionTreasure: number = Number(ask('Choose your treasures: ')) - 1;
            if(optionTreasure == arrayTreasure.length) {
                clear();
                logger('Invalid option');
                break;
            }
            clear();
            arraySupply.forEach((s, i) => {
                logger(i + 1 + '-' + s.getName());
            });
            const optionSupply: number = Number(ask('Choose your supply: ')) - 1;
            if(optionSupply == arraySupply.length) {
                clear();
                logger('Invalid option');
                break;
            }

            objectShipPirate = new PirateShip(name, captain, [arrayCrew[optionCrew]], [arrayTreasure[optionTreasure]], [arraySupply[optionSupply]], durability);
            clear();
            logger('Ship Pirate created succesffully');
            enter('Press ENTER to continue...');
            break;

        case 2: 
            clear();
             if(!objectShipPirate) {
                logger('You need to create a ship first. ');
                enter('Press ENTER to continue...');
                break;
            }
            const nameCrew: string = ask('Insert Name: ');
            const role: string = ask('Insert role: ');
            const age: number = ask('Insert age: ');
            const health: number = ask('Insert your Health: ');
            const gold: number = ask('Insert your gold: ');

            const crewMember: CrewMember = new CrewMember(nameCrew, role, age, health, gold);
            arrayCrew.push(crewMember);
            clear();
            logger('Created member succesffully. ');
            logger('Member being added to the ship...');
            const addShip: boolean = objectShipPirate.addMember(crewMember);
            logger(addShip ? 'Crew Member added' : 'non-existent member.');
            enter('Press ENTER to continue...');
            break;
    

        case 3:
            clear(); 
            logger('Current crew members: ');
            arrayCrew.forEach((c, i) => {
                logger(i + 1 + '-' + c.getName());
            });
            enter('Press ENTER to continue...');
            break;

        case 4:
            clear();
            if(!objectShipPirate) {
                logger('You need to create a ship first. ');
                break;
            }
            type rarityTeasure = 'Unusual' | 'Common' | 'Rare' | 'Epic' | 'Legendary'
            const treasureName: string = ask('Insert Name Treasure: ');
            const value: number = Number(ask('Insert value: '));
            logger('Unusual', 'Common',  'Rare',  'Epic',  'Legendary');
            const type: rarityTeasure = ask('Insert your type as shown.');

            const treasure: Treasure = new Treasure(treasureName, value, type);
            arrayTreasure.push(treasure);
            const addTreasure: boolean = objectShipPirate.addTreasure(treasure);
            clear();
            logger('Registration successfully completed and treasure added.');
            enter('Press ENTER to continue...');
            break;

        case 5: 
            clear();
            arrayTreasure.forEach((t, i) => {
                logger(i + 1 + '-' + t.getName());
            });
            enter('Press ENTER to continue...');
            break;

        case 6: 
            clear();
            if(!objectShipPirate) {
                logger('You need to create a ship first. ');
                break;
            }
            const nameSupply: string = ask('Insert name of the supply: ');
            const quantity: number = Number(ask('Insert your quantity: '));

            const objectSupply: Supply = new Supply(nameSupply, quantity);
            arraySupply.push(objectSupply);
            const addSupply: boolean = objectShipPirate.addSupply(objectSupply);
            logger('Supplement registered and added');
            enter('Press ENTER to continue...');
            break;

        case 7: 
            clear();
            arraySupply.forEach((s, i) => {
                logger(i + 1 + '-' + s.getName());
            });
            enter('Press ENTER to continue...');
            break;

        case 8: 
            clear();
            if(!objectShipPirate) {
                logger('You need to create a ship first. ');
                break;
            }
            logger('Random event taking place...');
            const randomNumber: number = Math.floor(Math.random() * 3) + 1;
            if(randomNumber === 1) {
                clear();
                logger(objectShipPirate.damageShip() ? 'The ship is taking damage.' : 'Destroyed ship');
                logger('Current durability: ' + objectShipPirate.getDurability());
                enter('Press ENTER to continue...');
                break;
            } else if(randomNumber === 2) {
                clear();
                const randomCrew: number = Math.floor(Math.random() * arrayCrew.length);
                const randomDamage: number = Math.floor(Math.random() * 50) + 1;
                const damageInCrew: boolean = arrayCrew[randomCrew].damagePirata(randomDamage);
                logger(damageInCrew ? 'Crew member suffered damage' : 'Crew member dead');
                logger(arrayCrew[randomCrew].getName() + '\nCurrent remaining life: ' + arrayCrew[randomCrew].getHealth())
                enter('Press ENTER to continue...');
                break;
            } else if(randomNumber === 3) {
                clear();
                const randomCrew: number = Math.floor(Math.random() * arrayCrew.length);
                const memberRemove: boolean = objectShipPirate.removeMember(arrayCrew[randomCrew]);
                logger(memberRemove ? 'Crew Member thrown from the ship' : 'The Member is in deep water right now.');
                logger('Remaining Crew Members: ');
                objectShipPirate.getCrewMembers();
                enter('Press ENTER to continue...');
                break;
            }
            break;

        case 9: 
            clear();
            if(!objectShipPirate) {
                logger('You need to create a ship first. ');
                enter('Press ENTER to continue...');
                break;
            }
            objectShipPirate.conditionShip();
            enter('Press ENTER to continue...');
            break;
        

        case 0:
            on = true;
            clear();
            logger('Exiting...');
            break;
        
        default: 
            logger('Invalid option, select again.');

    }
}

//Testar tudo, ver se o que fiz está de acordo.