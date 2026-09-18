import '../sass/main.scss';
import { headerRender } from '../components/header/header';
import { checkAuthActions } from '../components/dialogs/auth-check';
import { footerRender } from '../components/footer/footer';
import { burgerMenuToggle } from '../components/header/burgerHeader';
import { heroRender } from '../components/hero/hero';
import { topPlayerRender } from '../components/top-players/topPlayers';
import { newsRender } from '../components/news/news';
import { formFilling } from '../components/form-filling/formFilling';

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    headerRender();
    heroRender();
    await newsRender();
    topPlayerRender();
    formFilling();
    footerRender();
    burgerMenuToggle();
    checkAuthActions();
})