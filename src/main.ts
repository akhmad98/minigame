import '../sass/main.scss';
import { headerRender } from '../components/header/header';
import { checkAuthActions } from '../components/dialogs/auth-check';
import { footerRender } from '../components/footer/footer';
import { burgerMenuToggle } from '../components/header/burger-header';
import { heroRender } from '../components/hero/hero';
import { topPlayerRender } from '../components/top-players/top-players';
import { newsRender } from '../components/news/news';
import { formFilling } from '../components/form-filling/form-filling';

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    headerRender();
    heroRender();
    await newsRender();
    await topPlayerRender();
    formFilling();
    footerRender();
    burgerMenuToggle();
    checkAuthActions();
})