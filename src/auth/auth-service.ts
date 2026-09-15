import { AUTH_TOKEN } from "../constants/shared";
type AuthCallback = ( isAuthenticated: boolean ) => void;

export class AuthService {
    private tokenKey: string = AUTH_TOKEN;
    private liseteners: AuthCallback[] = [];

    public checkAuth(): boolean {
        let isAuthed: boolean = false;
        const checked: string | null = localStorage.getItem('authed');
        if (checked) {
            isAuthed = true;
        }
        console.log(checked)
        return isAuthed;
    }

    public subscribe(callback: AuthCallback): void {
        this.liseteners.push(callback);
        callback(this.isAuthenticated());
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem(this.tokenKey);
        return !!token;
    }

    public login(token: string): void {
        localStorage.setItem(this.tokenKey, token);
        this.notifyAll();
    }

    public logout(): void {
        localStorage.removeItem(this.tokenKey);
        this.notifyAll();
    }

    private notifyAll(): void {
        const status = this.isAuthenticated();
        this.liseteners.forEach(callback => callback(status));
    }
}

export const authService = new AuthService();