import './top-players.scss';
import { createLeaderBoardTable } from '../leaderboard-table';
import { JSON_LEADER_URL } from 'src/constants/shared';
import type { LeaderSeed } from 'src/interfaces/leader-seed';

export async function topPlayerRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;
    const response = await fetch(JSON_LEADER_URL);
    const data: LeaderSeed = await response.json();

    const sectTP: HTMLElement = document.createElement('section');
    sectTP.className = 'top-players';
    sectTP.innerHTML = `
        <div class="wrapper">
            <div class="global-heading">
                <span class="pre-heading"></span>
                <h2>Top Players</h2>
            </div>
            <div class="leader-wrapper">
            </div>
        </div>
    `;

    const leaderWrapper: HTMLDivElement = sectTP.querySelector('.leader-wrapper') as HTMLDivElement;
    const childForTable = createLeaderBoardTable(data.data);
    leaderWrapper.append(childForTable);

    body.append(sectTP);
}