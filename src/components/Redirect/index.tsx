import React from 'react';
import { useParams } from 'react-router-dom';

import { variables } from '../../shared/variables';
import { LoadingRedirectPage } from '../LoadingRedirectPage';

const Redirect: React.FC = () => {
    const params = useParams();

    const requestOptions = {
        method: 'GET',
    };
    fetch(`${variables.apiUrl}/shortenedUrls/${params.code}`, requestOptions)
        .then((response) => {
            if (response.status === 429) throw new Error('Too many request');
            return response.json();
        })
        .then((data) => (window.location.href = data.originalUrl))
        .catch((error) => console.error(error));

    return <LoadingRedirectPage />;
};

export default Redirect;
