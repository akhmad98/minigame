import './topPlayer.scss';

export function topPlayerRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const sectTP: HTMLElement = document.createElement('section');
    sectTP.className = 'top-players';
    sectTP.innerHTML = `
        <div class="wrapper">
            <div class="global-heading">
                <span class="pre-heading"></span>
                <h2>Top Players</h2>
            </div>
            <div class="caraousel">
            </div>
        </div>
    `;

    body.appendChild(sectTP);
}