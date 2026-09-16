export function newsRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const sectNews: HTMLElement = document.createElement('section');
    sectNews.className = 'news';
    sectNews.innerHTML = `
        <div class="wrapper">
        </div>
    `;

    body.appendChild(sectNews);
}