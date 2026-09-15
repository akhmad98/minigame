import { authService } from "../auth/auth-service";
import { getElementGenericly } from "../utils/getSelector";

function checkAuthActions(): void {
    const guestActs = document.getElementById('guest_acts');
    const authActs = document.getElementById('auth_acts');
    const lougoutBtn = getElementGenericly<HTMLButtonElement>('.btn_logout');

    if (!guestActs || !authActs) {
        console.error('Navbar elements missing from DOM');
        return;
    }

    if (authService.checkAuth()) {
        guestActs.style.display = 'none';
        authActs.style.display = 'flex';
    } else {
        guestActs.style.display = 'flex';
        authActs.style.display = 'none';
    }
    // authService.subscribe((isAuthenticated: boolean) => {
    //     if (isAuthenticated) {
    //         guestActs.style.display = 'none';
    //         authActs.style.display = 'flex';
    //     } else {
    //         guestActs.style.display = 'flex';
    //         authActs.style.display = 'none';
    //     }
    // });

    lougoutBtn?.addEventListener('click', () => {
        authService.logout();

        window.location.href = '';
    })
}

document.addEventListener('DOMContentLoaded', checkAuthActions);