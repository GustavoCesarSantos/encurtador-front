import React, { useState } from 'react';

import { variables } from '../../shared/variables';
import {
    ButtonUrlShortener,
    Container,
    CopyButton,
    InputUrlShortener,
    ShortenedUrl,
} from './styles';

const UrlShortener: React.FC = () => {
    const [originalUrl, setUrl] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [copyButtonText, setCopyButtonText] = useState<string>('copiar');

    function handleInput(value: string) {
        setUrl(value);
    }

    function createLink(link: string) {
        setLink(link);
    }

    function shortenUrl() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ originalUrl }),
        };
        fetch(`${variables.apiUrl}/shortenedUrls`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                createLink(`${variables.domainUrl}/${data.code}`);
            })
            .catch((error) => console.error(error));
    }

    function copyText() {
        navigator.clipboard.writeText(link);
        setCopyButtonText('copiado!');
        setTimeout(() => setCopyButtonText('copiar'), 500);
    }

    return (
        <section>
            <Container>
                <InputUrlShortener
                    type="text"
                    placeholder="Cole sua URL longa aqui e deixe-a pronta para compartilhar!"
                    onChange={(event) => handleInput(event.target.value)}
                />
                <ButtonUrlShortener onClick={shortenUrl}>encurtar</ButtonUrlShortener>
            </Container>
            {link && (
                <ShortenedUrl>
                    <p>{link}</p>
                    <CopyButton onClick={copyText}>{copyButtonText}</CopyButton>
                </ShortenedUrl>
            )}
        </section>
    );
};

export default UrlShortener;
