import { start } from "repl";
import { WeaponPower } from "./bassClass/WeaponPower";
import { Exploratory } from "./interfaces/Exploratory";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Fighter } from "./ships/Fighter";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { TransportShip } from "./ships/TransportShip";
import { performExploration, repairObject, startCombat } from "./function/Function";
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

const fighter1: Fighter = new Fighter('X-Wing', torpedoes);
const fighter2: Fighter = new Fighter('TIE Fighter', kinetic);
const transportShip1: TransportShip = new TransportShip('Emma Marsk');
const transportShip2: TransportShip = new TransportShip('Goliath II');
const exploratory1: ExplorationShip = new ExplorationShip('Millennium Falcon');
const exploratory2: ExplorationShip = new ExplorationShip('Stellaris');
const multiPurpose: MultiPurposeShip = new MultiPurposeShip('Nostromo');


colectionShip.push(fighter1);
colectionShip.push(fighter2);
colectionShip.push(multiPurpose);
colectionShip.push(exploratory1);
colectionShip.push(exploratory2);
colectionShip.push(multiPurpose);
colectionShip.push(transportShip1);
colectionShip.push(transportShip2);
colectionShip.push(multiPurpose);


// startCombat(multiPurpose, fighter2);
// performExploration(exploratory1, 'Lua');
// performExploration(multiPurpose, 'Jupiter');
// repairObject(fighter2);

const colectionFleet: Fleet = new Fleet(colectionShip);
colectionFleet.showFleet();

startCombat(fighter1, transportShip2);