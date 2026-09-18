import type { GameCard } from "./IGameCard";

export interface GameSeed {
    data: Array<GameCard>,
    meta: {
        totalItems: number,
        description: string,
        featuredCount: number,
    }
}