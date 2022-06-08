import { useState } from 'react';
import styled from 'styled-components';

function UrlShortener() {
    const [url, setUrl] = useState<string>('');
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
        };
        fetch('http://localhost:3001/v1/', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                createLink(data.url);
            });
    }

    function copyText() {
        navigator.clipboard.writeText(link);
        setCopyButtonText('copiado!');
        setTimeout(() => setCopyButtonText('copiar'), 300);
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
    padding: 0px 1em 0px 1em;
    border-width:0px;
    border:none;
    border-radius: 10px 0px 0px 10px;
    outline: none;
    font-size: 20px;
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
    border:none;
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
