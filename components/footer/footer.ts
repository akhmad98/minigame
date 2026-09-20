import './footer.scss';

export function footerRender() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const footer: HTMLElement = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer_wrapper">
            <div class="footer_container">
                <div class="footer_contain">
                    <div class="logo-text">
                        <div class="minigame_logos minigame_logo_wh">
                            <img src="/assets/logos/brand_logo.png" alt="MiniGames Logo">
                            <h2 class="logo_name">MiniGames</h3>
                        </div>
                        <p class="footer_text">Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.</p>
                    </div>
                    <div class="footer_browse">
                        <div class="browser">
                            <div class="explore">
                                <h2>Explore</h2>
                                <nav class="footer_nav">
                                    <ul class="footer_list">
                                        <li class="footer_item">
                                            <a href="/pages/home/index.html" class="footer_link">Home</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/library/index.html" class="footer_link">Library</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/tour/index.html" class="footer_link">Tournaments</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/comm/index.html" class="footer_link">Community</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="company">
                                <h2>Company</h2>
                                <nav class="footer_nav">
                                    <ul class="footer_list">
                                        <li class="footer_item">
                                            <a href="/pages/home/index.html" class="footer_link">About Us</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/library/index.html" class="footer_link">Contact</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/tour/index.html" class="footer_link">Privacy Policy</a>
                                        </li>
                                        <li class="footer_item">
                                            <a href="/pages/comm/index.html" class="footer_link">Terms of Service</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="comm">
                            <h2>Community</h2>
                            <div class="icons">
                                <a href=""><img src="/assets/icons/share.svg" alt="Share" /></a>
                                
                                <a href=""><img src="/assets/icons/feed.svg" alt="Feedback" /></a>
                                <a href=""><img src="/assets/icons/rss.svg" alt="RSS FEED" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_info">
                    <div class="footer_text">
                        <p>© 2026 MiniGames. All rights reserved.</p>
                        <div class="self_info">
                            <div class="rs_logo">
                                <img src="https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg" alt="RSSchool Logo">
                                <h3>RS School</h3>
                            </div>
                            <div class="student_info">
                                <img src="https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg" alt="Github Logo">
                                <h3>@akhmad-akhmad98</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    body.append(footer);
}