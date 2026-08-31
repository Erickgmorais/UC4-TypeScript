type rarityTeasure = 'Unusual' | 'Common' | 'Rare' | 'Epic' | 'Legendary'

export class Treasure {
    private name: string;
    private value: number;
    private rarity: rarityTeasure;

    constructor(name: string, value: number, rarity: rarityTeasure) {
        this.name = name;
        this.value = value;
        this.rarity = rarity;
    }

    public getName(): string {
        return this.name;
    }

    public getValue(): number {
        return this.value;
    }

    public showInfo(): string {
        return '\n===============' + '\nTeasure' + '\n===============' + '\nName: ' + this.name + '\nValue: ' + this.value + '\nRarity: ' + this.rarity
    }
}