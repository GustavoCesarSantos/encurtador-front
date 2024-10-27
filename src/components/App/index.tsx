import React, { useState } from 'react';

import { Header } from '../Header';
import { Login } from '../Login';
import { RegisterUser } from '../RegisterUser';
import UrlShortener from '../UrlShortener';
import { MainSubtitle, MainTitle, RootContainer } from './styles';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterUserModalOpen, setIsRegisterUserModalOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleOpenRegisterUserModal = () => {
        setIsRegisterUserModalOpen(true);
    };

    const handleCloseRegisterUserModal = () => {
        setIsRegisterUserModalOpen(false);
    };

    return (
        <RootContainer>
            <Header
                isLoggedIn={isLoggedIn}
                onLogoutClick={handleLogout}
                onOpenLoginModal={handleOpenLoginModal}
                onOpenRegisterUserModal={handleOpenRegisterUserModal}
            />
            <div>
                <MainTitle>5Bits</MainTitle>
                <MainSubtitle>Encurte, compartilhe, acompanhe</MainSubtitle>
            </div>
            <UrlShortener />
            {isLoginModalOpen && <Login onLogin={handleLogin} onClose={handleCloseLoginModal} />}
            {isRegisterUserModalOpen && <RegisterUser onClose={handleCloseRegisterUserModal} />}
        </RootContainer>
    );
};

export default App;
