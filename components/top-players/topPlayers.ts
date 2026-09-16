export function topPlayerRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const sectTP: HTMLElement = document.createElement('section');
    sectTP.className = 'top-players';
    sectTP.innerHTML = `
        <div class="wrapper">
        </div>
    `;

    body.appendChild(sectTP);
}