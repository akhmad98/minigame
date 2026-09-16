import './hero.scss';

export function heroRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const heroSect: HTMLElement = document.createElement('section');
    heroSect.className = 'hero';
    heroSect.innerHTML = `
        <div class="hero_wrapper">
            <div class="hero_content">
                <h1 class="hero_title">
                    Take a Short Break & Have Fun
                </h1>
                <p class="hero_text">
                    Discover hundreds of curated casual mini-games right in your browser.
                </p>
                <a href="#" class="browse_btn">Browse Library</a>
            </div>
        </div>
    `;

    body.appendChild(heroSect);
}
