import { useState } from 'react';

import { variables } from '../../shared/variables';
import {
    ButtonUrlShortener,
    Container,
    CopyButton,
    InputUrlShortener,
    ShortenedUrl,
} from './styles';

const UrlShortener = () => {
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
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkZXZAZGV2LmNvbSIsInZlcnNpb24iOjExLCJpYXQiOjE3Mjk5MTQ3NzMsImV4cCI6MTcyOTkxNTY3M30.gQNYHGtv1pve0g6TTFHnd92YxQMO892DZ7iIZscD9i4',
            },
            body: JSON.stringify({ originalUrl }),
        };
        fetch(`${variables.apiUrl}/shortenedUrls`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                createLink(`${variables.domainUrl}/${data.code}`);
            });
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
