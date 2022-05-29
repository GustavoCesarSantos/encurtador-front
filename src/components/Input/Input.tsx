import { useState } from "react";

function Input() {
    let url: string = ''
    const [link, setLink] = useState<string>('');

    function handleInput(value: string) {
        url = value
    }

    function createLink(link: string) {
        setLink(link)
    }

    function shortenUrl() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        };
        fetch('http://localhost:3001/v1/', requestOptions)
        .then(response => response.json())
        .then(data => {
            createLink(data.url)
        })
    }

    return (
        <section>
            <input 
                type="text"
                onChange={event => handleInput(event.target.value)}
            />
            <button onClick={shortenUrl} >Encurtar</button>
            <a href={link} target="_blank">go to</a>
        </section>
    )
}

export default Input