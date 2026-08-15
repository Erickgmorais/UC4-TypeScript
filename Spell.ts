export class Spell {
    protected name: string;
    protected damage: number;
    protected manaCost: number;

    constructor(name: string, damage: number, manaCost: number) {
        this.name = name
        this.damage = damage
        this.manaCost = manaCost
    }

    public getName(): string {
        return 'Spell name: ' + this.name;
    }

    public setDamage(damage: number): void {
        this.damage = damage;
    }

    public setManaCost(newCost: number): void {
        this.manaCost = newCost
    }

    public showInfo(): string {
        return '\n============' + '\nSpell' + '\n============' + '\nSpell name: ' + this.name + '\nSpell damage: ' + this.damage + '\nMana cost: ' + this.manaCost;
    }
}