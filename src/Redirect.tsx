import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Redirect() {
    const params = useParams();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/shortenedUrls/${params.code}`, requestOptions)
            .then((response) => response.json())
            .then((data) => (window.location.href = data.originalUrl));
    }, []);

    return <p>Estamos te redirecionando...</p>;
}

export default Redirect;
