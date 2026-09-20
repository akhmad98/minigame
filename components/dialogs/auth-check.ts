import { authService } from 'src/auth/auth-service';


export function checkAuthActions(): void {
    const guestActs = document.querySelector('#guest_acts');
    const authActs = document.querySelector('#auth_acts');
    
    if (!guestActs || !authActs) {
        console.error('Navbar elements missing from DOM');
        return;
    }

    const lougoutButton = document.querySelector('.btn_logout');  

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

    lougoutButton?.addEventListener('click', () => {
        authService.logout();

        location.assign('');
    })
}