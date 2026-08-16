import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {
    private mana: number;
    private spell: Spell;

    constructor(name: string, level: number, health: number, mana: number, spell: Spell) {
        super(name, level, health) 
        this.mana = mana
        this.spell = spell
    }

    public getMana(): number {
        return this.mana
    }

    public setMana(newMana: number): void {
        this.mana = newMana
    }

    public castSpell(): string {
        if(this.mana < 0) {
            return this.name + ' does not have enough mana!'
        } else { 
            this.mana -= this.spell.getManaCost();
            return this.name + ' casts '  + this.spell.getName() + '\nDamage: ' + this.spell.getDamage() + '\nMana remaining: ' + this.mana + '\n';
        }
    }
}