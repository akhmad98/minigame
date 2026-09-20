import './header.scss';

export function headerRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const header: HTMLElement = document.createElement('header');
    header.innerHTML = `
        <div class="wrappers">
            <div class="header_wrapper">
                <div class="nav_header_logo">
                    <div class="minigame_logo">
                        <img src="assets/logos/brand_logo.png" alt="MiniGames Logo">
                        <h2 class="logo_name">MiniGames</h3>
                    </div>
                </div>

                <button class="hamburger-btn" aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <nav class="navigate">
                    <ul class="header_list">
                        <li class="header_item">
                            <a href="/pages/home/index.html" class="header_link">Home</a>
                        </li>
                        <li class="header_item">
                            <a href="/pages/library/index.html" class="header_link">Library</a>
                        </li>
                        <li class="header_item">
                            <a href="/pages/tour/index.html" class="header_link">Tournaments</a>
                        </li>
                        <li class="header_item">
                            <a href="/pages/comm/index.html" class="header_link">Community</a>
                        </li>
                    </ul>

                    <div class="nav_actions">
                        <div id="guest_acts">
                            <button class="btn_login" id="guests">Log In</button>
                            <button class="btn_signup" id="guests">Sign Up</button>
                        </div>
                        <div id="auth_acts">
                            <button class="btn_logout" id="auth_acts">Log Out</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        `;

    body.append(header);
}
