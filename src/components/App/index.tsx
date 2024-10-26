import React, { useState } from 'react';

import { Header } from '../Header';
import UrlShortener from '../UrlShortener';
import { MainSubtitle, MainTitle, RootContainer } from './styles';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <RootContainer>
            <Header isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
            <MainTitle>5Bits</MainTitle>
            <MainSubtitle>Encurte, compartilhe, acompanhe</MainSubtitle>
            <UrlShortener />
        </RootContainer>
    );
};

export default App;
