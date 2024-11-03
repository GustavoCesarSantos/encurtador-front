import React, { useState } from 'react';

import { AuthService } from '../../shared/services/authService';
import { variables } from '../../shared/variables';
import { Header } from '../Header';
import { Login } from '../Login';
import { RegisterUser } from '../RegisterUser';
import { UrlShortener } from '../UrlShortener';
import { MainSubtitle, MainTitle, RootContainer, ContentContainer } from './styles';
import { BugReportButton } from '../Buttons/BugReport';

export const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem(variables.accessToken));
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterUserModalOpen, setIsRegisterUserModalOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        AuthService.clearTokens();
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
            <ContentContainer>
                <MainTitle>5Bits</MainTitle>
                <MainSubtitle>Encurte, Compartilhe, Acompanhe</MainSubtitle>
                <UrlShortener />
            </ContentContainer>
            <BugReportButton />
            {isLoginModalOpen && <Login onLogin={handleLogin} onClose={handleCloseLoginModal} />}
            {isRegisterUserModalOpen && <RegisterUser onClose={handleCloseRegisterUserModal} />}
        </RootContainer>
    );
};
