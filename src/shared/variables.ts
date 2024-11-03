export const variables = {
    apiUrl: import.meta.env.VITE_BASE_URL,
    domainUrl: import.meta.env.DOMAIN_URL ?? 'http://127.0.0.1:5173',
    accessToken: import.meta.env.ACCESS_TOKEN ?? 'accessToken',
    refreshToken: import.meta.env.REFRESH_TOKEN ?? 'refreshToken',
};
