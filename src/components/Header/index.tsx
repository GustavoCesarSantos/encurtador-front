import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../shared/services/authService';

import { variables } from '../../shared/variables';
import { Button, HeaderContainer, Logo, Nav } from './styles';

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
            <Nav>
                {isLoggedIn ? (
                    <Button onClick={handleLogout}>Sair</Button>
                ) : (
                    <>
                        <Button onClick={onOpenLoginModal}>Entrar</Button>
                        <Button onClick={onOpenRegisterUserModal}>Cadastrar</Button>
                    </>
                )}
            </Nav>
        </HeaderContainer>
    );
};
