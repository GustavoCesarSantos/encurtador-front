export const variables = {
    apiUrl: import.meta.env.VITE_BASE_URL,
    domainUrl: import.meta.env.VITE_DOMAIN_URL ?? 'http://127.0.0.1:5173',
    accessToken: import.meta.env.VITE_ACCESS_TOKEN ?? 'accessToken',
    refreshToken: import.meta.env.VITE_REFRESH_TOKEN ?? 'refreshToken',
};
