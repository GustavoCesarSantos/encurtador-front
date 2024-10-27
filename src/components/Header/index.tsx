import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleRegisterClick = () => navigate('/register');

    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        fetch(`${variables.apiUrl}/auth/signout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
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
                    <Button onClick={handleLogout}>Logout</Button>
                ) : (
                    <>
                        <Button onClick={onOpenLoginModal}>Login</Button>
                        <Button onClick={onOpenRegisterUserModal}>Cadastro</Button>
                    </>
                )}
            </Nav>
        </HeaderContainer>
    );
};
