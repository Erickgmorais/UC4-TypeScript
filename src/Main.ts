import { start } from "repl";
import { WeaponPower } from "./bassClass/WeaponPower";
import { Exploratory } from "./interfaces/Exploratory";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Fighter } from "./ships/Fighter";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { TransportShip } from "./ships/TransportShip";
import { performExploration, repairObject, startCombat, transportCargo } from "./function/Function";
import { CombatCapable } from "./interfaces/CombatCapable";
import { CargoCarrier } from "./interfaces/CargoCarrier";
import { Fleet } from "./fleet/Fleet";
import { SpaceCraft } from "./ships/SpaceCraft";

const combatShips: CombatCapable[] = [];
const exploratoryShips: Exploratory[] = [];
const carrierShips: CargoCarrier[] = [];

const colectionShip: SpaceCraft[] = []

const kinetic: WeaponPower = new WeaponPower('Kinetic Cannons', 45);
const torpedoes: WeaponPower = new WeaponPower('Torpedoes and Guided Missiles', 55);

const xwing: Fighter = new Fighter('X-Wing', torpedoes);
const tie: Fighter = new Fighter('TIE Fighter', kinetic);
const emma: TransportShip = new TransportShip('Emma Marsk');
const goliath: TransportShip = new TransportShip('Goliath II');
const millennium: ExplorationShip = new ExplorationShip('Millennium Falcon');
const stellaris: ExplorationShip = new ExplorationShip('Stellaris');
const nostromo: MultiPurposeShip = new MultiPurposeShip('Nostromo');


colectionShip.push(xwing);
colectionShip.push(tie);
colectionShip.push(emma);
colectionShip.push(goliath);
colectionShip.push(millennium);
colectionShip.push(stellaris);
colectionShip.push(nostromo);

const colectionFleet: Fleet = new Fleet(colectionShip);

//Exiba todas as naves;
// colectionFleet.showFleet();

//Realize pelo menos um combate;
// startCombat(xwing, emma);

//Transporte algumas cargas;
// transportCargo(goliath, 5);

//Realize uma exploração;
// performExploration(stellaris, 'Marte');

//Cause dano em uma nave;
// tie.attack(millennium);

// //Repare uma nave;
// //-Usando a minha interface Repairable;
// repairObject(tie);
// //-Usando o meu método que está na minha classe SpaceCraft.
// console.log(emma.repair() ? 'Spaceship being repaired.' : 'Living life to the fullest.');

//Recupere combustível;
// console.log(stellaris.refuel() ? 'Spacecraft refueling' : 'Gasoline below 0 or above 100');

//Liste as naves de combate;
console.log('\nNAVES DE COMBATE\n');
colectionFleet.getCombatShip().forEach((c, i) => {
    console.log(i + 1 + ' - ' + c.getName());
});

console.log('\nNAVES DE TRANSPORTE\n');
colectionFleet.getCargoShip().forEach((c, i) => {
    console.log(i + 1 + ' - ' + c.getName());
});

console.log('\nNAVES DE EXPLORACAO\n');
colectionFleet.getExplorationShip().forEach((e, i) => {
    console.log(i + 1 + ' - ' + e.getName());
});