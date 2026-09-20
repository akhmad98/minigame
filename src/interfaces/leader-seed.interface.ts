interface IPlayer {
    rank: number,
    playerName: string,
    gamesPlayed: number,
    totalScore: number,
    streakDays: number,
    favoriteGameSlug: string,
    favoriteGameName: string,
}

export interface LeaderSeed {
    data: Array<IPlayer>,
    meta: {
        totalItems: number,
        description: string,
    }
}