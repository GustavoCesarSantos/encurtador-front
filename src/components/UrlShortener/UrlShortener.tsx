import { useState } from 'react';
import styled from 'styled-components';

function UrlShortener() {
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
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkZXZAZGV2LmNvbSIsInZlcnNpb24iOjEwLCJpYXQiOjE3Mjk4MzIyMzksImV4cCI6MTcyOTgzMzEzOX0.fOr8LNs4oHlg_EJ8yvXDD4J7p_4MMCwgQ8wFjAZ1ejA',
            },
            body: JSON.stringify({ originalUrl }),
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/shortenedUrls`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                createLink(`http://127.0.0.1:5173/${data.code}`);
            });
    }

    function copyText() {
        navigator.clipboard.writeText(link);
        setCopyButtonText('copiado!');
        setTimeout(() => setCopyButtonText('copiar'), 500);
    }

    return (
        <section>
            <div>
                <InputUrlShortener
                    type="text"
                    onChange={(event) => handleInput(event.target.value)}
                />
                <ButtonUrlShortener onClick={shortenUrl}>encurtar</ButtonUrlShortener>
            </div>
            <ShortenedUrl>
                <p>{link}</p>
                {link && <CopyButton onClick={copyText}>{copyButtonText}</CopyButton>}
            </ShortenedUrl>
        </section>
    );
}

const InputUrlShortener = styled.input`
    width: 530px;
    height: 50px;
    padding: 0px 1em;
    border-width:0px;
    border:none;
    border-radius: 10px 0px 0px 10px;
    outline: none;
    font-size: 14px;
    font-family: "Roboto Mono", sans-serif;
`;

const ButtonUrlShortener = styled.button`
    cursor: pointer;
    width: 130px;
    height: 50px;
    border-width:0px;
    border:none;
    border-radius: 0px 10px 10px 0px;
    outline: none;
    font-size: 20px;
    font-family: "Roboto Mono", sans-serif;
    color: #ffffff;
    background-color: #306CC7;
`;

const ShortenedUrl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 652px;
    height: 100px;
    margin-top: 25px;
    padding: 0px 1em 0px 1em;
    border-width:0px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 24px;
    font-family: "Roboto Mono", sans-serif;
    background-color: #ffffff;
`;

const CopyButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border: 3px dashed;
    border-radius: 10px;
    background-color: #ffffff;

    &:hover {
        color: rgba(48, 108, 199, 1);
        border-color: rgba(48, 108, 199, 1);
    }
`;

export default UrlShortener;
