import { variables } from '../variables';

export type AuthTokens = {
    accessToken: string;
    refreshToken: string;
};

export class AuthService {
    static getTokens(): AuthTokens {
        return {
            accessToken: localStorage.getItem(variables.accessToken) ?? '',
            refreshToken: localStorage.getItem(variables.refreshToken) ?? '',
        };
    }

    static setTokens(tokens: AuthTokens): void {
        localStorage.setItem(variables.accessToken, tokens.accessToken ?? '');
        localStorage.setItem(variables.refreshToken, tokens.refreshToken ?? '');
    }

    static clearTokens(): void {
        localStorage.removeItem(variables.accessToken);
        localStorage.removeItem(variables.refreshToken);
    }

    static async refreshToken(): Promise<boolean> {
        try {
            const { refreshToken } = this.getTokens();

            const response = await fetch(`${variables.apiUrl}/auth/refreshToken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh token');
            }

            const data = await response.json();
            this.setTokens({ ...data, refreshToken });
            return true;
        } catch (error) {
            console.error('Error refreshing token:', error);
            this.clearTokens();
            return false;
        }
    }
}
