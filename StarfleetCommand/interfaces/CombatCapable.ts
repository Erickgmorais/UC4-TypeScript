import { SpaceCraft } from "../ships/SpaceCraft";

export interface CombatCapable {
    attack(target: SpaceCraft): number;
}