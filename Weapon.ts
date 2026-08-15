export class Weapon { 
    protected name: string;
    protected damage: number;

    constructor(name: string, damage: number) {
        this.name = name
        this.damage = damage
    }

    public getName(): string {
        return 'Name: ' + this.name;
    }
    
    public setDamage(damage: number) {
        this.damage = damage;
    }

    public showInfo(): string {
        return '\n============' + '\nWeapon' + '\n============' + '\nWeapon name: ' + this.name + '\nWeapon damage: ' + this.damage;
    }

}