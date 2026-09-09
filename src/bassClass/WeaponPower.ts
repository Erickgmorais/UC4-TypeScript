export class WeaponPower {
    protected name: string;
    protected damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public getName(): string {
        return this.name
    }

    public getDamage(): number {
        return this.damage
    }
}