export interface Repairable {
    repairable(): void;
    getRepairCost(): number;
}