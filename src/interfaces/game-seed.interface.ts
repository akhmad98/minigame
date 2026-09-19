import type { GameCard } from "./game-card.interface";

export interface GameSeed {
    data: Array<GameCard>,
    meta: {
        totalItems: number,
        description: string,
        featuredCount: number,
    }
}