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
members.showMembers();

// Exibir as informações dos personagens.
console.log(drakar.showInfo());
console.log(boran.showInfo());
console.log(alister.showInfo());
console.log(aestra.showInfo());

//Fazer os Warriors atacarem.
console.log(drakar.attack());
console.log(boran.attack());

//Fazer os Mages lançarem suas magias.
console.log(alister.castSpell());
console.log(aestra.castSpell());

//Demonstrar o consumo de mana.
console.log(bolaFogo.showInfo());
console.log(misseisMagicos.showInfo());
//Causar dano a pelo menos um personagem.
console.log(drakar.takeDamage(60) ? 'dead character' : 'damage taken');
console.log(aestra.takeDamage(60) ? 'dead character' : 'damage taken');
console.log(drakar.showInfo());

//Alterar algum atributo utilizando um setter.
boran.setHealth(190);
console.log(boran.getHealth());

//Remover um personagem da Party.
console.log(members.removeMember(aestra) ? 'member removed' : 'non-existent member');

//Exibir novamente a Party após a remoção.
members.showMembers()