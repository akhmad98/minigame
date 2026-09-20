import { authService } from 'src/auth/auth-service';


export function checkAuthActions(): void {
    const guestActs: HTMLElement = document.querySelector('#guest_acts') as HTMLElement;
    const authActs: HTMLElement = document.querySelector('#auth_acts') as HTMLElement;
    
    if (!guestActs || !authActs) {
        console.error('Navbar elements missing from DOM');
        return;
    }

    const lougoutButton: HTMLElement = document.querySelector('.btn_logout') as HTMLElement;  

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