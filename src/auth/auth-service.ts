import { AUTH_TOKEN } from "../constants/shared";
type AuthCallback = ( isAuthenticated: boolean ) => void;

export class AuthService {
    private tokenKey: string = AUTH_TOKEN;
    private liseteners: AuthCallback[] = [];


    private notifyAll(): void {
        const status = this.isAuthenticated();
        for (const callback of this.liseteners) {
            callback(status);
        }
    }

    public checkAuth(): boolean {
        let isAuthed: boolean = false;
        const checked: string | null = localStorage.getItem('authed');
        if (checked) {
            isAuthed = true;
        }
        return isAuthed
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
}

export const authService = new AuthService();