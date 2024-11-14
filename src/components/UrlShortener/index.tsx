import React, { useState } from 'react';

import { AuthService } from '../../shared/services/authService';
import { variables } from '../../shared/variables';
import {
    ButtonUrlShortener,
    InputShortenerContainer,
    InputUrlShortener,
    ShortenedUrl,
    ShortenerContainer,
} from './styles';
import { FloatingCopyButton } from '../Buttons/FloatingCopy';
import { Loader } from 'lucide-react';
import { Notification } from '../../shared/components/Notification';

export const UrlShortener: React.FC = () => {
    const [originalUrl, setUrl] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const closeNotification = () => setError(null);

    const handleInput = (value: string) => {
        setUrl(value);
    };

    const createLink = (link: string) => {
        setLink(link);
    };

    const fetchWithAuth = async () => {
        const { accessToken } = AuthService.getTokens();
        const url = `${variables.apiUrl}/shortenedUrls`;
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    !accessToken || accessToken === '' ? 'INTERNAL' : accessToken
                }`,
            },
            body: JSON.stringify({ originalUrl }),
        };
        return await fetch(url, requestOptions);
    };

    const shortenUrl = async () => {
        try {
            setLoading(true);
            setLink('');
            let response = await fetchWithAuth();
            if (response.status === 429) {
                throw new Error('Too many request');
            }
            if (response.status === 401) {
                const refreshSuccess = await AuthService.refreshToken();
                if (!refreshSuccess) {
                    window.location.href = '/';
                    throw new Error('Session expired');
                }
                response = await fetchWithAuth();
            }
            if (!response.ok) {
                throw new Error('Failed to fetch short url');
            }
            const data = await response.json();
            createLink(`${variables.domainUrl}/${data.code}`);
        } catch (error) {
            setError((error as Error).message);
            console.error('Request failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ShortenerContainer>
            <InputShortenerContainer>
                <InputUrlShortener
                    type="text"
                    placeholder="Cole sua URL longa aqui!"
                    onChange={(event) => handleInput(event.target.value)}
                />
                <ButtonUrlShortener onClick={shortenUrl}>
                    {isLoading ? <Loader /> : <>encurtar</>}
                </ButtonUrlShortener>
            </InputShortenerContainer>
            {link && (
                <ShortenedUrl>
                    <p>{link}</p>
                    <FloatingCopyButton textToCopy={link} />
                </ShortenedUrl>
            )}
            {error && <Notification message={error} onClose={closeNotification} />}
        </ShortenerContainer>
    );
};
