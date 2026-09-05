export class WeaponPower {
    protected name: string;
    protected damage: number;

    public getName(): string {
        return this.name
    }

    public getDamage(): number {
        return this.damage
    }
}