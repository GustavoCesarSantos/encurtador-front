import React from 'react';
import { useParams } from 'react-router-dom';

import { variables } from '../../shared/variables';

const Redirect: React.FC = () => {
    const params = useParams();

    const requestOptions = {
        method: 'GET',
    };
    fetch(`${variables.apiUrl}/shortenedUrls/${params.code}`, requestOptions)
        .then((response) => response.json())
        .then((data) => (window.location.href = data.originalUrl))
        .catch((error) => console.error(error));

    return <p>Estamos te redirecionando...</p>;
};

export default Redirect;
