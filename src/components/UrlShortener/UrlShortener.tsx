import { useState } from 'react';
import styled from 'styled-components';

function UrlShortener() {
    let url = '';
    const [link, setLink] = useState<string>('');

    function handleInput(value: string) {
        url = value;
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

    return (
        <section>
            <div>
                <InputUrlShortener
                    type="text"
                    onChange={(event) => handleInput(event.target.value)}
                />
                <ButtonUrlShortener onClick={shortenUrl}>encurtar</ButtonUrlShortener>
            </div>
            <ShortenedUrl value={link} />
            {/* <a href={link} target="_blank" rel="noreferrer">
                go to
            </a> */}
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
`;

const ShortenedUrl = styled.input`
    width: 698px;
    height: 75px;
    margin-top: 25px;
    border-width:0px;
    border:none;
    border-radius: 10px;
    outline: none;
    font-size: 24px;
    font-family: "Roboto Mono", sans-serif;
    text-align: center;
`;

export default UrlShortener;
