import type { GameSeed } from 'src/interfaces/game-seed';
import './news.scss';
import { JSON_URL } from 'src/constants/shared';
import { Carousel } from 'src/classes/caraousel';

export async function newsRender(): Promise<void> {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;
    const response = await fetch(JSON_URL);
    const data: GameSeed = await response.json();
    const sectNews: HTMLElement = document.createElement('section');
    sectNews.className = 'news';
    sectNews.innerHTML = `
        <div class="wrapper">
            <div class="global-heading">
                <span class="pre-heading"></span>
                <h2>New Games</h2>
            </div>
            <div class="caraousel-container" id="caraousel">
                <div class="caraousel-track">
                </div>
            </div>
        </div>
    `;

    body.append(sectNews);
    new Carousel('.caraousel-container', '.caraousel-track', data.data);
}