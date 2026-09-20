import type { IBurgerMenuElement } from "src/interfaces/burger-menu-element.interface";
import { getElementGenericly } from "src/utils/getSelector";
import { DynamicInjector } from "src/classes/dynamic-injector";

export function burgerMenuToggle(): void {
    const HEADER_ACTIVE_CLASS: string = 'header_nav_active';

    const burgerMenuElement: IBurgerMenuElement = {
        navMenu: getElementGenericly<HTMLElement>('.navigate'),
        burgerTabs: getElementGenericly<HTMLButtonElement>('.hamburger-btn'),
    }

    const drawerHeaderInjector = new DynamicInjector(
        {
            targetSelecctor: '.navigate',
            className: 'nav_drawer_header',
            closeTriggerEl: '.close-btn',
            rawHTMLTemplate: `
                <div class="minigame_logos minigame_logo_wh">
                    <img src="../../assets/logos/brand_logo.png" alt="MiniGames Logo">
                    <h2 class="logo_name logo_name_wh">MiniGames</h2>
                </div>
                <button class="close-btn" aria-label="Close menu">×</button>
            `
        },
        () => toggleMenu(false)
    );

    const toggleMenu = (isOpened: boolean): void => {
        burgerMenuElement.navMenu.classList.toggle(HEADER_ACTIVE_CLASS, isOpened);

        if (isOpened) {
            drawerHeaderInjector.injectAsFirstChild();
        } else {
            console.log('close')
            drawerHeaderInjector.destroyComponent();
        }
    }

    burgerMenuElement.burgerTabs.addEventListener('click', () => toggleMenu(true));
}