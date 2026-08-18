const prompt = require('readline-sync');
const clear = console.clear
const enter = prompt.question
const logger = console.log

import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";

const glock: Weapon = new Weapon('Glock 17', 55);
const ak47: Weapon = new Weapon('AK-47', 111);

const bolaFogo: Spell = new Spell('Bola de Fogo', 15, 2);
const misseisMagicos: Spell = new Spell('Mísseis Mágicos', 35, 5);

const drakar: Warrior = new Warrior('Drakar', 15, 155, 35, ak47);
const boran: Warrior = new Warrior('Boran', 25, 185, 45, glock);

const alister: Mage = new Mage('Alister', 5, 110, 55, bolaFogo);
const aestra: Mage = new Mage('Aestra', 10, 130, 45, misseisMagicos);

const members: Party = new Party('Party Causing Damage', [drakar, boran, alister, aestra]);

//Exibir os membros da Party.
clear();
logger('Members of the Party.');
members.showMembers();
enter('Press ENTER to continue.');


// Exibir as informações dos personagens.
clear();
logger('Character information.');
console.log(drakar.showInfo());
console.log(boran.showInfo());
console.log(alister.showInfo());
console.log(aestra.showInfo());
enter('Press ENTER to continue.');


//Fazer os Warriors atacarem.
clear();
logger('Attack Warriors.');
console.log(drakar.attack());
console.log(boran.attack());
enter('Press ENTER to continue.');


//Fazer os Mages lançarem suas magias.
clear();
logger('Mages casting magic.');
console.log(alister.castSpell());
console.log(aestra.castSpell());
enter('Press ENTER to continue.');


//Demonstrar o consumo de mana.
clear();
logger('mana consumption.')
console.log(bolaFogo.showInfo());
console.log(misseisMagicos.showInfo());
enter('Press ENTER to continue.');


//Causar dano a pelo menos um personagem.
clear();
logger('causing damage to a character.\n');
console.log(drakar.takeDamage(60) ? 'dead character' : 'damage taken');
console.log(aestra.takeDamage(60) ? 'dead character' : 'damage taken');
console.log(drakar.showInfo());
enter('Press ENTER to continue.');


//Alterar algum atributo utilizando um setter.
clear();
logger('changing an attribute using a setter.\n');
boran.setHealth(190);
console.log(boran.getHealth());
enter('Press ENTER to continue.');


//Remover um personagem da Party.
logger('Removed member.\n')
console.log(members.removeMember(aestra) ? '\nmember removed' : '\nnon-existent member');

//Exibir novamente a Party após a remoção.
logger('\ncurrent list of members.');
members.showMembers();