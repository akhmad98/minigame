import { DESKTOP_MIN_WIN, TABLE_MIN_WIN } from "../src/constants/shared"

interface IPlayer {
    rank: number,
    playerName: string,
    gamesPlayed: number,
    totalScore: number,
    streakDays: number,
    favoriteGameSlug: string,
    favoriteGameName: string,
}

export function createLeaderBoardTable(players: Array<IPlayer>): HTMLDivElement {
    const container: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    container.className = 'leaderboard-container';
    const isTablet: boolean = 
        typeof window === 'undefined'
        ? false
        : window.innerWidth >= TABLE_MIN_WIN && window.innerWidth <= DESKTOP_MIN_WIN;

    container.innerHTML = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    ${(isTablet) && "<th>Games</th>"}
                    <th>Score</th>
                    <th>Streak</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    const tbody: HTMLElement = container.querySelector('tbody') as HTMLElement;
    let gamesColIfTablet: HTMLElement | undefined;
    for (const player of players) {
        const row = document.createElement('tr');

        const rankTd = document.createElement('td');
        rankTd.className = 'rank-column';
        rankTd.textContent = `${player.rank}`;

        const playerTd = document.createElement('td');
        playerTd.className = 'player-column';

        const avatar = document.createElement('span');
        avatar.className = 'player-avatar';
        const namePlayer: string = player.playerName;
        avatar.textContent = namePlayer.replaceAll(/[^A-ZА-Я]/g, '');

        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-name';
        nameSpan.textContent = player.playerName;

        playerTd.append(avatar);
        playerTd.append(nameSpan);

        if (isTablet) {
            gamesColIfTablet = document.createElement('td');
            gamesColIfTablet.className = 'games-number';
            gamesColIfTablet.textContent = `${player.gamesPlayed}`;
        }

        const scoreTd = document.createElement('td');
        scoreTd.className = 'player-score';
        scoreTd.textContent =`${player.totalScore/1000}K`;

        const streakTd = document.createElement('td');
        streakTd.className = 'player-streak';
        streakTd.textContent = `${player.streakDays}d`;

        row.append(rankTd);
        row.append(playerTd);
        if (gamesColIfTablet) row.append(gamesColIfTablet);
        row.append(scoreTd);
        row.append(streakTd);

        tbody.append(row);
    }

    return container;
}