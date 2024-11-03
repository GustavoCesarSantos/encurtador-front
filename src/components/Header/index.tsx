import React from 'react';

import { AuthService } from '../../shared/services/authService';
import { variables } from '../../shared/variables';
import {
    LoginButton,
    RegisterButton,
    HeaderContainer,
    Logo,
    LogoutButton,
    DividerContainer,
    ButtonsContainer,
} from './styles';

interface HeaderProps {
    isLoggedIn: boolean;
    onLogoutClick: () => void;
    onOpenLoginModal: () => void;
    onOpenRegisterUserModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    isLoggedIn,
    onLogoutClick,
    onOpenLoginModal,
    onOpenRegisterUserModal,
}) => {
    const handleLogout = async () => {
        const { accessToken } = AuthService.getTokens();
        AuthService.clearTokens();

        fetch(`${variables.apiUrl}/auth/signout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(() => onLogoutClick())
            .catch((error) => console.error(error));
    };

    return (
        <HeaderContainer>
            <Logo>5Bits</Logo>
            <ButtonsContainer>
                {isLoggedIn ? (
                    <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
                ) : (
                    <>
                        <LoginButton onClick={onOpenLoginModal}>Entrar</LoginButton>
                        <DividerContainer>|</DividerContainer>
                        <RegisterButton onClick={onOpenRegisterUserModal}>
                            Cadastrar-se
                        </RegisterButton>
                    </>
                )}
            </ButtonsContainer>
        </HeaderContainer>
    );
};
